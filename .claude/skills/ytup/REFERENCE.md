# ytup reference for agents

This is the complete operating manual for driving `ytup` from an AI agent or a script. `SKILL.md` has the short version. Everything here describes ytup 0.1 as implemented. Where YouTube's own behavior is involved (quota, limits, policies), the facts reflect Google's documentation as of October 2026 and can change.

**Contents**

1. [Mental model](#1-mental-model)
2. [Output contract](#2-output-contract)
3. [Preflight](#3-preflight)
4. [Authentication](#4-authentication)
5. [Command reference](#5-command-reference)
6. [Metadata](#6-metadata)
7. [Upload behavior: resuming, retries and duplicates](#7-upload-behavior-resuming-retries-and-duplicates)
8. [Recipes](#8-recipes)
9. [Errors and recovery](#9-errors-and-recovery)
10. [Quota](#10-quota)
11. [YouTube limits and policies](#11-youtube-limits-and-policies)
12. [Safety rules](#12-safety-rules)
13. [Environment variables and files](#13-environment-variables-and-files)

---

## 1. Mental model

- **Account and channel.** ytup acts as one YouTube channel per *profile*. The default profile is named `default`. Choose another with `--profile NAME` (any position on the command line) or `YTUP_PROFILE=NAME`. Each profile has its own login. All profiles share one OAuth client.
- **OAuth client.** This is a Google Cloud "Desktop app" client that the user owns. Its quota is shared by every profile that uses it. ytup ships without one, and only the user can create one (§4.1).
- **Resources.** ytup works with YouTube API resources:
  - `video`: ID like `dQw4w9WgXcQ`, 11 characters
  - `playlist`: ID usually starts with `PL`
  - `playlistItem`: one video's membership in a playlist; it has its own ID
  - `caption`: a subtitle track with its own ID
  - `channel`: ID starts with `UC`
  - `videoCategory`: numeric ID
- **Parts.** A video resource is split into parts (`snippet`, `status`, `statistics`, `contentDetails`, `processingDetails`, `recordingDetails`, …). Updates replace whole parts. ytup handles that by reading the current part, changing only the requested fields and writing it back, so you never need to resend unchanged fields.
- **Accepted references.** Wherever a command takes `VIDEO`, any of these work: a bare ID, `https://youtu.be/ID`, `https://www.youtube.com/watch?v=ID`, `/shorts/ID`, `/live/ID`, `/embed/ID`, `https://studio.youtube.com/video/ID/edit`. Wherever it takes `PLAYLIST`, these work: an ID, any URL with `list=ID`, or the exact (case-insensitive) title of one of the channel's playlists.

## 2. Output contract

### Streams

| Stream | Contents |
|---|---|
| stdout | **Data only**: an ID, a JSON document, a table (listings without `--json`), or caption file contents (`captions download` without `-o`). |
| stderr | Human messages: `✓ …` confirmations, `warning: …`, `error: …`, the sign-in link and progress. |

When stderr is not a terminal (the usual case for agents), ytup prints **no ANSI colors and no progress bar**, so the stderr lines are plain text. `NO_COLOR=1` also turns colors off.

### What each command prints on stdout

| Command | stdout without `--json` | stdout with `--json` |
|---|---|---|
| `upload` | the video ID | the `video` resource returned by YouTube (or, with `--wait`, the processed resource) |
| `upload --dry-run` | (always JSON) the request that would be sent | same |
| `videos list` | table | array of `video` resources (`snippet,status,statistics,contentDetails`) |
| `videos get` | key/value summary | one `video` resource (`snippet,status,statistics,contentDetails,processingDetails,recordingDetails,localizations`) |
| `videos update` | nothing | the updated `video` resource |
| `videos delete` | nothing (stderr lists what is deleted) | n/a |
| `thumbnail` | nothing | n/a |
| `playlists list` | table | array of `playlist` resources (`snippet,status,contentDetails`) |
| `playlists create` | the playlist ID | the `playlist` resource |
| `playlists items` | table | array of `playlistItem` resources (`snippet,status`) |
| `playlists update / delete / add / remove` | nothing | n/a |
| `captions list` | table | array of `caption` resources (`snippet`) |
| `captions upload` | the caption track ID | n/a |
| `captions download` | the caption file (unless `-o FILE`) | n/a |
| `categories` | table | array of `videoCategory` resources |
| `channel` | key/value summary | the `channel` resource |
| `auth status` | key/value summary | status object (§3) |
| `completions SHELL` | completion script | n/a |

Prefer `--json` for anything you parse. Tables are for humans: titles are truncated to 60 characters and their column layout isn't stable.

### Useful JSON paths (raw YouTube resources)

| Resource | Path | Notes |
|---|---|---|
| video | `id` | |
| video | `snippet.title`, `snippet.description`, `snippet.tags[]`, `snippet.categoryId` | `tags` is absent when there are none |
| video | `snippet.publishedAt` | RFC 3339 UTC; for an upload this is the upload time |
| video | `snippet.defaultLanguage`, `snippet.defaultAudioLanguage` | may be absent |
| video | `status.privacyStatus` | `private` · `unlisted` · `public` |
| video | `status.publishAt` | present only while the video is scheduled |
| video | `status.uploadStatus` | `uploaded` (still processing) · `processed` · `failed` · `rejected` · `deleted` |
| video | `status.failureReason`, `status.rejectionReason` | present only when the status is `failed` or `rejected` |
| video | `status.selfDeclaredMadeForKids`, `status.madeForKids` | `madeForKids` is YouTube's final decision |
| video | `status.embeddable`, `status.publicStatsViewable`, `status.license`, `status.containsSyntheticMedia` | |
| video | `statistics.viewCount`, `likeCount`, `commentCount` | **strings**, e.g. `"1234"` |
| video | `contentDetails.duration` | ISO 8601, e.g. `PT4M13S` |
| video | `processingDetails.processingStatus` | `processing` · `succeeded` · `failed` · `terminated` |
| playlist | `id`, `snippet.title`, `status.privacyStatus`, `contentDetails.itemCount` | |
| playlistItem | `id` (the item, not the video), `snippet.resourceId.videoId`, `snippet.position`, `snippet.title` | |
| caption | `id`, `snippet.language`, `snippet.name`, `snippet.trackKind` (`standard`, `asr`, `forced`), `snippet.isDraft` | |
| videoCategory | `id`, `snippet.title`, `snippet.assignable` | |

### Exit codes

| Code | Meaning | Did anything change on YouTube? |
|---|---|---|
| `0` | Success | Yes, as requested |
| `1` | Error (auth, validation, API, network, user declined a prompt) | Normally **no**. Exceptions: (a) for multi-video commands (`videos delete A B`, `playlists add P A B`), the items before the failing one were already processed, and stderr shows a `✓` line for each; (b) after a successful upload ytup reports every later problem as `3`, so a `✓ Uploaded https://youtu.be/ID` line on stderr always means the video exists, even if the process was killed or crashed afterwards. |
| `2` | Command-line usage error (unknown flag, missing argument, conflicting flags) | No, nothing was sent |
| `3` | Partial success: `upload` or `videos update` did its main job, but a follow-up step failed: setting the thumbnail, adding to a playlist, or (`upload --wait`) processing/polling | Yes. The video exists or was updated. `upload` still prints the ID (or JSON) on stdout. `videos update` prints JSON only with `--json`. The final stderr line is `error: video ID was uploaded, but not every step succeeded (see above)` (upload) or `error: not every change succeeded (see above)` (update). |

## 3. Preflight

Run these before the first write in a session:

```sh
command -v ytup >/dev/null || echo "missing"
ytup --version
ytup auth status --json
```

`auth status --json` always exits `0`, unless the credential store itself can't be read. It reports state and never fails because of it:

```json
{
  "profile": "default",
  "credentialStore": "macOS Keychain",
  "clientConfigured": true,
  "clientId": "12345678….apps.googleusercontent.com",
  "loggedIn": true,
  "valid": true,
  "channel": { "id": "UC…", "title": "My Channel", "subscriberCount": 1234, "videoCount": 56 },
  "scopes": ["youtube.upload", "youtube.force-ssl"],
  "missingScopes": [],
  "otherProfiles": ["gaming"],
  "error": null
}
```

| State | Meaning | Action |
|---|---|---|
| `clientConfigured: false` | No OAuth client | The user must do §4.1 |
| `loggedIn: false` | No login stored for this profile | §4.2 |
| `valid: false` | A login is stored but doesn't work (revoked, expired, offline); `error` says why | Offline: retry later. Otherwise run §4.2 again |
| `valid: true`, `channel: null` | The Google account has no YouTube channel | The user must create one at <https://www.youtube.com/create_channel> |
| `missingScopes` not empty | The user unticked boxes on the consent screen | §4.2 again, and ask the user to allow everything |
| `valid: true`, `channel` set | Ready | Confirm `channel.title` is the channel the user means |

`valid: null` means there was nothing to check (no client or no login). Checking a login costs 1 quota unit.

## 4. Authentication

### 4.1 One-time setup (human only)

The user needs a Google Cloud OAuth client of type **Desktop app**. Guide them; you can't do this for them:

1. Create or pick a project at <https://console.cloud.google.com/>.
2. Enable the **YouTube Data API v3**: <https://console.cloud.google.com/apis/library/youtube.googleapis.com>
3. **Google Auth Platform → Branding / Audience**: choose **External**, then add their Google account under **Test users**.
4. **Clients → Create client → Desktop app**, then download the JSON (`client_secret_….json`).
5. Store it: `ytup auth setup --client-secrets ~/Downloads/client_secret_….json`. You can also pass `--client-secrets` straight to `auth login`.

ytup copies the client ID and secret into the system keychain. After that, the downloaded file can be deleted. **Don't open, print or move the contents of that file yourself**; just pass its path. Running `auth setup` without `--client-secrets` asks interactive questions, and without a TTY it fails.

### 4.2 Login (needs the human for a few seconds)

```sh
ytup auth login [--timeout SECONDS] [--no-browser] [--client-secrets FILE]
```

What happens:

1. ytup starts a one-shot HTTP listener on `127.0.0.1` on a random port.
2. It prints `Open this link to sign in to YouTube:` followed by a `https://accounts.google.com/o/oauth2/v2/auth?...` URL on stderr. On macOS it also opens the default browser, unless you pass `--no-browser`. On Linux it opens one only when `DISPLAY` or `WAYLAND_DISPLAY` is set.
3. The user picks a Google account and a channel (brand accounts are listed there), then approves.
4. The browser is redirected to the local listener, which shows "Access approved". ytup exchanges the code (with PKCE) for tokens, stores them in the keychain and looks up the channel.
5. stderr: `✓ Logged in as <channel title> (<channel id>).` Exit `0`.

How to run it as an agent:

- Run it **in the background**, or with a long tool timeout. It blocks until the user finishes or `--timeout` passes (default 300 s; use 600 to give people time).
- Read the URL from stderr and **show it to the user**, even when the browser opened by itself, in case the window ended up behind other windows.
- Wait for the process to exit. Exit `0` means it worked. On a timeout (`error: timed out waiting for sign-in`), offer to start it again.
- To sign in to another channel without replacing the current one: `ytup --profile <name> auth login`.

Remote or SSH machines: if the browser runs on a different machine, the redirect to `127.0.0.1` fails to load there. When ytup's stdin is a terminal, the user can paste the address from that failed page (or just the `code=` value) into ytup's terminal. Agents usually run ytup without a TTY, in which case pasting isn't available. Have the user run `ytup auth login` in their own interactive terminal instead.

What you see afterwards:

- Access tokens refresh themselves; you never handle them.
- While the OAuth consent screen is in **Testing** mode, Google expires logins after **7 days**. ytup then fails with `your login has expired or was revoked; run \`ytup auth login\` again`. To stop this, the user can publish the app (Audience → Publish app).
- On macOS, after ytup has been rebuilt or reinstalled, the first keychain access can show a system dialog ("ytup wants to use …"). That is a GUI prompt for the human. If a command seems to hang at startup, tell the user to answer it with **Always Allow**.

### 4.3 Status and logout

```sh
ytup auth status [--json]
ytup auth logout                 # this profile: revoke at Google, delete local tokens
ytup auth logout --keep-access   # delete local tokens only
ytup auth logout --all           # every profile, plus the stored OAuth client
```

Logout is destructive (it revokes access), so only do it when asked.

## 5. Command reference

Global option: `--profile NAME` (env `YTUP_PROFILE`, default `default`). Letters, digits, `-` and `_` only.
Every command supports `-h/--help`.

### `ytup upload FILE [options]`

Resumable upload of one video file, followed by the optional thumbnail and playlist steps.

| Option | Meaning |
|---|---|
| all metadata flags (§6) | `--title`, `--description`, `--tags`, `--privacy`, `--publish-at`, `--thumbnail`, `--playlist`, … |
| `--metadata FILE` | JSON metadata file; flags override it |
| `--no-notify` | Don't send the upload to subscribers' feeds or notifications |
| `--chunk-size MIB` | 1–1024, default 16. Larger is faster on good connections; smaller loses less on flaky ones |
| `--restart` | Throw away a saved interrupted session for this exact file and metadata and start over |
| `--wait` | After uploading, poll every 15 s until `status.uploadStatus` is `processed` (up to 4 h). If YouTube reports `failed`/`rejected`, the wait times out or polling errors, it warns and exits `3`; the ID is still printed |
| `--dry-run` | Run every pre-upload check (metadata limits, dates, thumbnail type and size, and when logged in also category names and playlists), print the request JSON, then exit 0. **Uploads nothing.** Costs no quota, except 1 unit for each category-name or playlist-title lookup. When not logged in, those lookups are skipped (playlists are shown with `"id": null` and a warning; a category *name* is an error) |
| `--json` | Print the resource instead of the ID |

Defaults: the title is the file name without its extension; privacy is `private`; subscribers are notified. The content type comes from the extension (`.mp4`, `.mov`, `.mkv`, `.webm`, … map to `video/*`; anything else is sent as `application/octet-stream`, which YouTube also accepts).

Order of operations:

1. Validate all metadata locally, including the thumbnail's type and size.
2. Resolve category names and playlist references. An unknown playlist fails here, with exit 1 and nothing uploaded.
3. Start or resume the upload session.
4. Upload the chunks.
5. Print `✓ Uploaded https://youtu.be/ID` on stderr. **From here on, the video exists.**
6. Set the thumbnail.
7. Add the video to each playlist.
8. With `--wait`, wait for processing.
9. Print the ID or JSON on stdout.

When step 6, 7 or 8 fails, the remaining steps still run, the ID is still printed, and the exit code is `3`.

`--dry-run` output:

```json
{
  "file": "/abs/path/clip.mp4", "size": 5767168, "contentType": "video/mp4",
  "parts": ["snippet", "status"], "notifySubscribers": true,
  "video": { "snippet": { "title": "…", "tags": ["…"] }, "status": { "privacyStatus": "private" } },
  "thumbnail": "/abs/path/cover.jpg",
  "playlists": [{ "playlist": "Podcast", "id": "PL…" }]
}
```

### `ytup videos list [-n N] [--json]`

Lists the channel's uploads, newest first; the default is 25. Private, unlisted and scheduled videos are included, because you are the owner. A brand-new upload can take a short while to show up here. Use `videos get ID` to check a specific video.

### `ytup videos get VIDEO [--json]`

Shows one video, including `processingDetails` and `recordingDetails`. Exits 1 with `video ID not found (or this account can't see it)` when the video doesn't exist or belongs to someone else.

### `ytup videos update VIDEO [metadata flags] [--add-tags a,b] [--remove-tags a,b] [--json]`

Changes only the fields you pass. Every metadata flag from §6 works:

- `--tags` replaces the whole tag list.
- `--add-tags` appends tags, skipping case-insensitive duplicates.
- `--remove-tags` removes tags, case-insensitively.
- `--thumbnail` and `--playlist` work as they do for upload.

Scheduling rules:

- `--privacy public` or `--privacy unlisted` cancels a pending `publishAt`.
- `--publish-at` on a video that is currently public or unlisted is refused unless you also pass `--privacy private`. This stops a live video from going private by accident.

With no field to change, it exits 1 with `nothing to update`. Playlists are resolved, and the new tag list is validated, before anything is written. Cost: a metadata change is 1 read + 50 for the write; a thumbnail is +50; each playlist is +50 (+1 to resolve a title); `--json` without a metadata change is +1 for the read-back.

### `ytup videos delete VIDEO... [-y|--yes]`

First checks that every ID exists. Then it lists `ID  title` on stderr, asks `Permanently delete …? [y/N]` and deletes. Without a TTY and without `--yes`, it exits 1 with `refusing to continue without confirmation`. **Deletion can't be undone.**

### `ytup thumbnail VIDEO IMAGE`

Sets a custom thumbnail: JPEG or PNG (by extension), at most 2 MB, 1280×720 recommended. It needs a channel that is verified for custom thumbnails; a 403 adds that hint.

### `ytup playlists …`

| Subcommand | Notes |
|---|---|
| `list [--json]` | All of the channel's playlists |
| `create --title T [-d DESC] [--privacy private\|unlisted\|public] [--json]` | Default privacy `private`. Prints the new ID |
| `update PLAYLIST [--title] [--description] [--privacy]` | Read-modify-write |
| `delete PLAYLIST [-y]` | Deletes the playlist only; its videos stay. Needs confirmation (§12) |
| `items PLAYLIST [-n N] [--json]` | Videos in playlist order |
| `add PLAYLIST VIDEO... [--position N]` | Appends to the end by default. `--position` inserts at N, N+1, … (0 is the top). Adding the same video twice creates two entries |
| `remove PLAYLIST VIDEO...` | Removes every entry of each video. Videos that aren't in the playlist produce a warning, not a failure |

How playlist titles are resolved:

- An ID starting with `PL`, or a URL, is used as is, with no API call.
- Otherwise ytup lists your playlists and matches the exact title, case-insensitively.
- Zero matches → `you have no playlist named "…"`, unless the value looks like an ID.
- More than one match → `several playlists are named "…"`.

### `ytup captions …`

| Subcommand | Notes |
|---|---|
| `list VIDEO [--json]` | Track ID, language, kind (`standard` = uploaded, `asr` = automatic), draft state |
| `upload VIDEO FILE -l LANG [--name NAME] [--draft]` | Any format YouTube accepts (SRT, WebVTT, SBV, SCC, TTML, …), up to 100 MB. Prints the track ID. **Costs 400 units** |
| `download CAPTION_ID [-f srt\|vtt\|sbv\|scc\|ttml] [--translate-to LANG] [-o FILE]` | Only for tracks on your own videos. Without `-o`, the file goes to stdout |
| `delete CAPTION_ID [-y]` | Needs confirmation |

### `ytup categories [--region US] [--all] [--json]`

Lists the categories a video can be assigned to (`--all` includes non-assignable ones). IDs are the same in every region. `--category NAME` always matches against the **English US** names, so use these names or the numeric ID.

Common IDs:

| ID | Category | ID | Category |
|---|---|---|---|
| 1 | Film & Animation | 22 | People & Blogs |
| 2 | Autos & Vehicles | 23 | Comedy |
| 10 | Music | 24 | Entertainment |
| 15 | Pets & Animals | 25 | News & Politics |
| 17 | Sports | 26 | Howto & Style |
| 19 | Travel & Events | 27 | Education |
| 20 | Gaming | 28 | Science & Technology |
| | | 29 | Nonprofits & Activism |

Verify with `ytup categories` when in doubt.

### `ytup channel [--json]`

Shows the channel's title, ID, URL, subscriber, video and view counts, and `longUploadsStatus`. Videos longer than 15 minutes need a verified account; `longUploadsStatus` must be `allowed` or `eligible`.

### `ytup completions bash|zsh|fish|elvish|powershell`

Prints a shell completion script.

## 6. Metadata

### 6.1 Fields

| Flag | JSON key | API field | Rules |
|---|---|---|---|
| `-t, --title TEXT` | `title` | `snippet.title` | Required on YouTube; ytup defaults to the file name. 1–100 characters, no `<` or `>` |
| `-d, --description TEXT` | `description` | `snippet.description` | ≤5000 **bytes** (UTF-8), no `<` or `>`. Newlines are fine. Chapters: lines like `00:00 Intro`, the first at `00:00`, at least 3 chapters, each ≥10 s |
| `--description-file FILE` | `descriptionFile` | `snippet.description` | Read from a file; `-` reads stdin. Trailing whitespace is trimmed. Can't be combined with `--description` |
| `--tags a,b,c` | `tags` (array) | `snippet.tags` | Replaces all tags. `--tags ""` clears them. Entries are trimmed, empty ones dropped, case-insensitive duplicates removed. Total ≤500 characters, counting a comma between tags and 2 quote characters for each tag that contains a space |
| `--category ID\|NAME` | `category` (string or number) | `snippet.categoryId` | A name costs 1 extra API call |
| `--privacy private\|unlisted\|public` | `privacy` | `status.privacyStatus` | Default `private` for uploads |
| `--publish-at WHEN` | `publishAt` | `status.publishAt` | Must be in the future. Forces `private`. Combining it with `public`/`unlisted` is an error |
| `--made-for-kids` / `--not-made-for-kids` | `madeForKids` | `status.selfDeclaredMadeForKids` | Legal (COPPA) declaration; ask the user |
| `--language LANG` | `language` | `snippet.defaultLanguage` | BCP-47 language of the title and description |
| `--audio-language LANG` | `audioLanguage` | `snippet.defaultAudioLanguage` | Spoken language |
| `--license youtube\|creative-commons` | `license` (`youtube`, `creativeCommon`, `creative-commons`, `cc`) | `status.license` | |
| `--embeddable` / `--no-embed` | `embeddable` | `status.embeddable` | |
| `--public-stats` / `--hide-stats` | `publicStats` | `status.publicStatsViewable` | |
| `--synthetic-media` / `--no-synthetic-media` | `syntheticMedia` | `status.containsSyntheticMedia` | YouTube's altered or synthetic content disclosure; ask the user |
| `--recording-date DATE` | `recordingDate` | `recordingDetails.recordingDate` | A bare `YYYY-MM-DD` is kept as that calendar day |
| `--thumbnail IMAGE` | `thumbnail` | (separate call) | Checked for existence before uploading |
| `--playlist P` (repeatable) | `playlists` (array) | (separate calls) | Flags replace the file's list rather than adding to it |
| `--no-notify` (upload only) | `notifySubscribers` | (query parameter) | The flag wins over the file |

Anything you don't set is left alone: YouTube defaults on upload, existing values on update.

### 6.2 Dates (`--publish-at`, `--recording-date`)

Accepted formats:

- RFC 3339 with an offset or `Z`: `2026-11-01T18:00:00+01:00`, `2026-11-01T17:00:00Z`
- Local time, using the machine's time zone: `2026-11-01 18:00`, `2026-11-01 18:00:00`, `2026-11-01T18:00`
- A date only: `2026-11-01` (local midnight for `publishAt`)

Words like "tomorrow" aren't understood, so compute the timestamp yourself. ytup sends UTC. If the user names a time zone, use an explicit offset.

### 6.3 Metadata files

```json
{
  "title": "Three days in the Icelandic highlands",
  "descriptionFile": "description.txt",
  "tags": ["travel", "iceland", "drone"],
  "category": "Travel & Events",
  "privacy": "private",
  "publishAt": "2030-06-01T18:00:00+02:00",
  "madeForKids": false,
  "language": "en",
  "audioLanguage": "en",
  "license": "youtube",
  "embeddable": true,
  "publicStats": true,
  "notifySubscribers": true,
  "recordingDate": "2026-08-14",
  "syntheticMedia": false,
  "thumbnail": "thumbnail.jpg",
  "playlists": ["Travel"]
}
```

- Keys are camelCase, and every key is optional.
- An **unknown key is an error**. The message lists the valid keys.
- Relative `descriptionFile` and `thumbnail` paths resolve **against the metadata file's folder**. A leading `~` is expanded.
- Command-line flags override file values. Passing `--description` or `--description-file` replaces both description keys from the file.
- One metadata file per video is a good pattern for batches (`clip.mp4` + `clip.json`).

### 6.4 Validation

All of these run before any upload or update starts (and in `--dry-run`). A failure exits `1` with nothing sent:

- `the title can't be empty`, `the title is N characters long; YouTube allows at most 100`, `the title can't contain '<' or '>'`
- `the description is N bytes long; YouTube allows at most 5000`, `the description can't contain '<' or '>'`
- `the tags add up to N characters; YouTube allows at most 500`, `tags can't contain '<' or '>'`
- `--publish-at must be in the future (got …)`, `--publish-at only works for private videos …`
- `couldn't understand the date "…"`
- `thumbnail PATH doesn't exist`, `thumbnails must be JPEG or PNG images`, `… thumbnails can be at most 2 MB`
- `unknown category "…"; run \`ytup categories\` to see the options` (a lookup, needs a login)
- `you have no playlist named "…"` / `several playlists are named "…"` (a lookup, needs a login; skipped with a warning in `--dry-run` when not logged in)
- `invalid metadata file …: unknown field \`x\`, expected one of …`

To sanitise generated text: replace `<` and `>` with `‹` `›` or remove them, and trim the description to 5000 UTF-8 bytes, not characters.

## 7. Upload behavior: resuming, retries and duplicates

**Within a run.** The file goes up in chunks. On network errors or 5xx responses, ytup waits with exponential backoff (2 s, 4 s, … up to about 64 s, plus jitter) and asks YouTube how many bytes it holds. Then it continues from exactly that byte, retrying up to 10 times in a row. stderr shows `warning: <reason>; retrying in Ns…`. An expired access token is refreshed and the request repeated.

**Across runs.** The upload session is saved to disk as soon as it starts. If ytup is interrupted (Ctrl-C, crash, `kill`, a closed laptop, or giving up after 10 retries), **running the identical command again** resumes it. stderr then says `Resuming an interrupted upload (X of Y already sent).` Sessions are kept for 6 days. If YouTube received the whole file but ytup died before hearing back, the re-run reports `This file was already uploaded in an earlier run.` and returns the existing video without uploading again.

**What "identical" means.** The session is keyed on:

- the profile
- the absolute file path, size and modification time
- the full metadata (including the title, description text and privacy)
- the notify setting

Change any of these and the next run starts a fresh upload from zero. The old partial session is harmless: partial uploads never become videos. `--thumbnail`, `--playlist`, `--wait`, `--json` and `--chunk-size` are **not** part of the key.

**Duplicates.** After a *successful* upload (exit `0` or `3`), the session is deleted. Running the same command again uploads **a second copy**. Rules:

- Exit `0` → done. Never re-run.
- Exit `3` → done uploading. Fix only the failed step (§9).
- stderr contains `✓ Uploaded https://youtu.be/ID` → the video exists, whatever happened afterwards (exit code, kill, crash). Take the ID from that line. Never re-run.
- Exit `1` after `Uploading …` but without `✓ Uploaded` (`upload failed after 10 retries …`, a network error, an interruption) → re-run the identical command to resume.
- Exit `1` before any `Uploading …` line on stderr (validation, auth, unknown playlist) → nothing was uploaded. Fix the problem and run again.
- If you can't tell whether an upload went through (your process was killed and stderr was lost), check before re-running: `ytup videos list -n 5 --json`, and match on `snippet.title` and a recent `snippet.publishedAt`.

**Concurrency.** Uploading different files in parallel works, but every upload draws on the same daily quota (§10). Don't run two identical upload commands at the same time; they share one session file.

**Processing.** When an upload returns, YouTube has the file but may still be processing it (`status.uploadStatus: "uploaded"`). Title, privacy, thumbnail and playlist changes work right away. Use `--wait` (or poll `videos get ID --json` and stop at `uploadStatus` `processed`) before telling the user the video is watchable in HD. `failed`/`rejected` include `failureReason`/`rejectionReason` (e.g. `duplicate`, `copyright`, `length`, `codec`).

## 8. Recipes

All recipes assume a passing preflight (§3). They use `jq` to read JSON; any JSON parser works.

### Upload and capture the result safely

```sh
out=$(ytup upload "clip.mp4" --metadata clip.json --json); code=$?
case $code in
  0) id=$(jq -r .id <<<"$out") ;;
  3) id=$(jq -r .id <<<"$out"); echo "uploaded $id; a follow-up step failed (see stderr)" ;;
  2) echo "fix the command line" ;;
  *) echo "failed; read stderr" ;;
esac
```

### Validate first, then upload

```sh
ytup upload clip.mp4 --metadata clip.json --dry-run > /dev/null && ytup upload clip.mp4 --metadata clip.json
```

### Description from generated text (via stdin, no temp file)

```sh
printf '%s\n' "$DESCRIPTION" | ytup upload clip.mp4 -t "Title" --description-file -
```

### Schedule for a specific time in the user's time zone

```sh
ytup upload clip.mp4 -t "Premiere" --publish-at "2026-11-01T18:00:00-05:00" --thumbnail cover.jpg
# check the schedule:
ytup videos get <id> --json | jq -r '.status.publishAt'      # → 2026-11-01T23:00:00Z
```

### Publish a scheduled video now, or move the schedule

```sh
ytup videos update <id> --privacy public                     # publishes now, drops publishAt
ytup videos update <id> --publish-at "2026-11-08 18:00"      # new time (video still private)
```

### Batch-upload a folder (one JSON file next to each video)

```sh
for f in ~/Videos/to-upload/*.mp4; do
  meta="${f%.*}.json"
  [ -f "$meta" ] || { echo "skip $f: no metadata"; continue; }
  id=$(ytup upload "$f" --metadata "$meta"); code=$?
  echo "$code $id $f" >> uploads.log
  [ $code -eq 1 ] && break        # stop on hard failure (quota, auth): don't burn retries
done
```

Before a batch, compare the number of files with the upload quota (§10). Keep a log, because the log is how you avoid duplicates if the batch is restarted.

### Bulk edit: add a tag to the 50 most recent videos

```sh
ytup videos list -n 50 --json | jq -r '.[].id' | while read -r id; do
  ytup videos update "$id" --add-tags "2026" || break
done
```

Each update costs about 51 units, so 50 videos cost about 2,550 of the daily 10,000.

### Append a line to a description without losing the rest

```sh
current=$(ytup videos get <id> --json | jq -r '.snippet.description')
printf '%s\n\nSponsored by Example.\n' "$current" | ytup videos update <id> --description-file -
```

### Find a video by title

```sh
ytup videos list -n 200 --json | jq -r '.[] | select(.snippet.title | test("iceland"; "i")) | "\(.id)\t\(.snippet.title)"'
```

### Repair after exit 3

```sh
ytup thumbnail <id> cover.jpg                 # if the thumbnail step failed
ytup playlists create --title "Podcast"       # if the playlist didn't exist…
ytup playlists add "Podcast" <id>             # …then add
```

### Captions

```sh
ytup captions upload <id> subs.en.srt -l en
ytup captions upload <id> subs.nl.srt -l nl --name "Nederlands"
ytup captions list <id> --json | jq -r '.[] | "\(.id) \(.snippet.language) \(.snippet.trackKind)"'
ytup captions download <track-id> -f vtt -o subs.vtt
```

### Several channels

```sh
ytup --profile gaming auth login
ytup --profile gaming upload run.mp4 -t "Speedrun"
YTUP_PROFILE=gaming ytup videos list
```

### Wait for processing, then publish

```sh
id=$(ytup upload clip.mp4 -t "Launch" --wait)   # private while processing
ytup videos update "$id" --privacy public       # only after the user confirms
```

## 9. Errors and recovery

Errors print on stderr as `error: <message>`. They may include a `hint:` line, and API errors include a `[reason]`.

### Authentication

| Message (prefix) | Cause | Recovery |
|---|---|---|
| `no OAuth client configured; run \`ytup auth setup\` first` | No client stored | §4.1 (user) |
| `not logged in; run \`ytup auth login\`` / `profile 'X' is not logged in …` | No tokens for this profile | §4.2 |
| `your login has expired or was revoked …` | Refresh token is invalid (7-day Testing expiry, password change, access removed) | §4.2. To stop the 7-day expiry, publish the OAuth app |
| `Google doesn't recognise the OAuth client ID/secret …` | Client deleted, or wrong JSON | Create a new client (§4.1), then `auth setup` |
| `Google rejected the sign-in (redirect_uri_mismatch …)` | Client is not of type Desktop app | Create a **Desktop app** client |
| `this is a "Web application" OAuth client …` | Wrong client type | Same as above |
| `authorization was declined (access_denied)` | User clicked Cancel, or the account isn't a test user | Add the account under Audience → Test users, then retry |
| `timed out waiting for sign-in …` | The user didn't finish in time | Retry with `--timeout 600` |
| `warning: you didn't grant all the access …` | Unticked scopes | §4.2 again; ask the user to allow everything |
| `couldn't read from the system keyring` | Keychain locked or access denied | The user unlocks the keychain or answers the dialog. As a last resort, and only with the user's agreement, set `YTUP_CREDENTIAL_STORE=file` and log in again; credentials then sit in a 0600 file (§13) instead of the Keychain |

### API (`YouTube API error <status>: <message> [<reason>]`)

| Reason / status | Meaning | Recovery |
|---|---|---|
| `quotaExceeded` (403) | Daily quota or upload limit used up | **Stop all writes.** Quota resets at midnight Pacific Time. Report it to the user; don't retry in a loop |
| `uploadLimitExceeded` | Channel-level upload cap reached | Try again later (hours) |
| `youtubeSignupRequired` | Account has no channel | User creates one |
| `insufficientPermissions` / `ACCESS_TOKEN_SCOPE_INSUFFICIENT` | A scope is missing | §4.2 |
| `accessNotConfigured` / `SERVICE_DISABLED` | YouTube Data API not enabled for the project | User enables it (§4.1 step 2) |
| `forbidden` on `thumbnail` | Channel not verified for custom thumbnails | User verifies at <https://www.youtube.com/verify>. The video itself is fine |
| `videoNotFound` / `video … not found` | Wrong ID, deleted, or another channel's video | Check the ID; check `--profile` |
| `playlistNotFound` | Wrong playlist ID | `ytup playlists list` |
| `invalidCategoryId` | Category doesn't exist or isn't assignable | `ytup categories` |
| `invalidTitle` / `invalidDescription` / `invalidTags` | Server-side validation that ytup's local checks missed | Simplify the text (e.g. strip control characters), then retry |
| 5xx | Google-side trouble | Reads are retried automatically (3×). For writes, wait and retry once |

### Upload-specific

| Message | Recovery |
|---|---|
| `warning: … retrying in Ns…` | None needed; ytup handles it |
| `upload failed after 10 retries (…); run the same command again to resume` | Wait for the network, then re-run the **identical** command |
| `the upload session expired; run the command again to start over` | Re-run; it starts from 0 |
| `couldn't read the video file; did it change during the upload?` | The file was modified or truncated. Restore it, then re-run with `--restart` |
| `video X was uploaded, but not every step succeeded (see above)` (exit 3) | Repeat only the step named in the `warning:` lines |
| `warning: YouTube couldn't process the video (…)` / `warning: YouTube rejected the video (…)` (with `--wait`, exit 3) | The video exists but is unusable. Tell the user the reason; a re-upload rarely helps for `duplicate` or `copyright` |
| `not every change succeeded (see above)` (`videos update`, exit 3) | The metadata update went through; repeat only the failed thumbnail or playlist step |

### Other

| Message | Recovery |
|---|---|
| `refusing to continue without confirmation; pass --yes …` | Get the user's explicit confirmation, then pass `--yes` |
| `cancelled` | The user answered no at the prompt; respect that |
| `you have no playlist named "…"` | Create it, or use the exact title or ID |
| `several playlists are named "…"` | Use the ID from `ytup playlists list --json` |
| `nothing to update` | Pass at least one field |
| `this video is public; scheduling it makes it private …` | Confirm with the user, then add `--privacy private` |

## 10. Quota

Every Google Cloud project has a daily quota, and all profiles using that OAuth client share it. It resets at **midnight Pacific Time**. Google's figures as of October 2026 (check <https://developers.google.com/youtube/v3/determine_quota_cost>):

- **Uploads (`videos.insert`)** have their **own bucket: about 100 calls per day**. One `ytup upload` is one call, however many chunks it takes or how often it resumes.
- **Everything else** shares a pool of **10,000 units per day**.

| ytup command | API calls | Units (shared pool) |
|---|---|---|
| `upload` | videos.insert | 1 upload-bucket call |
| … `--category NAME` | + videoCategories.list | +1 |
| … `--thumbnail` | + thumbnails.set | +50 |
| … each `--playlist TITLE` | + playlists.list (per 50 playlists, before the upload) + playlistItems.insert | +51 (`+50` when given a `PL…` ID or URL) |
| … `--wait` | + videos.list every 15 s | +1 per poll |
| `videos list -n N` | channels.list + playlistItems.list ×⌈N/50⌉ + videos.list ×⌈N/50⌉ | ≈ 1 + 2⌈N/50⌉ |
| `videos get` | videos.list | 1 |
| `videos update` | videos.list + videos.update (only when a metadata field changes) | 51 for a metadata change; +50 thumbnail; +50 per playlist (+1 per title lookup); +1 for `--json` without a metadata change |
| `videos delete` (k videos) | videos.list + videos.delete ×k | 1 + 50k |
| `thumbnail` | thumbnails.set | 50 |
| `playlists list` / `items` | per 50 results | 1 per page (`items` +1 to resolve a title) |
| `playlists create` / `update` / `delete` | insert / list+update / delete | 50 / 51 / 50 (+1 to resolve a title) |
| `playlists add` (k videos) | playlistItems.insert ×k | 50k (+1 to resolve) |
| `playlists remove` | playlistItems.list + delete per entry | 1 per page + 50 per entry |
| `captions list` | captions.list | 50 |
| `captions upload` | captions.insert | **400** |
| `captions download` | captions.download | ~200 (not listed on Google's page; historically 200) |
| `captions delete` | captions.delete | 50 |
| `categories`, `channel`, `auth status`, `auth login` | one list call | 1 |
| `upload --dry-run` | lookups only | 0, +1 per category name or playlist title when logged in |
| `--help`, token refreshes | none | 0 |

Plan big jobs before you start ("50 updates ≈ 2,550 units; fine") and stop at the first `quotaExceeded`. The user can request more quota through Google's YouTube API audit and quota extension form.

## 11. YouTube limits and policies

| Limit | Value |
|---|---|
| Title | 100 characters, no `<` `>` |
| Description | 5000 bytes, no `<` `>` |
| Tags | 500 characters in total (commas and quotes count) |
| Thumbnail | JPEG/PNG, ≤2 MB, 16:9, 1280×720 recommended, minimum width 640 px; channel must be verified |
| Video file | Up to 256 GB or 12 h, whichever is less. More than 15 min needs a verified account (`ytup channel` → `Long uploads`) |
| Caption file | ≤100 MB |
| Scheduled publishing | `privacyStatus` must be `private` while `publishAt` is set |

Policy facts that change what you should tell users:

- **Unaudited API projects upload as private only.** Google locks videos uploaded through an OAuth client whose project hasn't passed a YouTube API compliance audit to *private*, regardless of `--privacy`. The user can make them public in YouTube Studio, or request an audit. If an upload comes back `private` although you asked for `public`, this is why; it isn't a ytup bug.
- **Made for kids** is a legal declaration (COPPA). Marking content as made for kids turns off comments, notifications and personalised ads.
- **Altered or synthetic content** must be disclosed when it looks realistic (`--synthetic-media`).
- **Testing-mode OAuth apps:** logins expire after 7 days, and only listed test users can sign in.

## 12. Safety rules

These are the defaults an agent should follow unless the user explicitly says otherwise:

1. **Say which channel you're acting on** (`auth status --json` → `channel.title`) before the first write, especially when there are several profiles.
2. **Keep things private.** Upload as `private` (the default). Change to `unlisted`/`public`, or schedule, only when the user asks for it.
3. **Confirm before destroying.** Before `videos delete`, `playlists delete`, `captions delete`, `playlists remove` or `auth logout`, show what will be affected (titles and IDs) and get an explicit yes. Then use `--yes`. Never use `--yes` on your own initiative.
4. **Don't create duplicates** (§7). Treat exit `3` as "uploaded".
5. **Ask about legal declarations:** made for kids, synthetic media, and the license (Creative Commons lets anyone reuse the video).
6. **Respect the quota:** estimate first, stop at the first `quotaExceeded`, and don't retry writes in tight loops.
7. **Handle credentials carefully.** Never print, read or copy the keychain items, `credentials.json` or `client_secret_*.json`. ytup never shows tokens, and you never need them.
8. **Watch for overwrites.** `--tags` and `--description` replace the existing value. To extend, use `--add-tags`, or read-modify-write the description (§8).
9. **Verify after writing.** For anything the user will rely on, read it back (`videos get ID --json`) and report the actual state: privacy, `publishAt`, `uploadStatus`.

## 13. Environment variables and files

| Variable | Effect |
|---|---|
| `YTUP_PROFILE` | Default for `--profile` |
| `YTUP_CLIENT_ID` + `YTUP_CLIENT_SECRET` | Use this OAuth client instead of the stored one (both must be set) |
| `YTUP_CREDENTIAL_STORE` | `keyring` (system keychain only) or `file` (private JSON file); automatic by default |
| `YTUP_API_URL`, `YTUP_UPLOAD_URL` | Override the API endpoints, e.g. for a mock server (see `tests/mock/` in the repo) |
| `NO_COLOR` | Turn off colors |

| Data | macOS | Linux |
|---|---|---|
| OAuth client and tokens | Keychain, service `ytup` (accounts `oauth-client`, `token:<profile>`, `profiles`). With `YTUP_CREDENTIAL_STORE=file`: `~/Library/Application Support/ytup/credentials.json` (0600) | Secret Service; when there's no keyring (or with `YTUP_CREDENTIAL_STORE=file`), `~/.config/ytup/credentials.json` (0600) |
| Interrupted upload sessions | `~/Library/Application Support/ytup/uploads/*.json` | `~/.local/share/ytup/uploads/*.json` |

Deleting a session file makes the next run start that upload from zero. That's harmless, but it wastes the progress.
