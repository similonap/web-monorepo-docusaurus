---
name: ytup
description: Upload videos to YouTube and manage them from the terminal with the `ytup` CLI. Covers metadata (title, description, tags, category, privacy, scheduled publishing, made-for-kids, AI disclosure), thumbnails, playlists, captions, listing and editing existing videos, and sign-in. Use this whenever the user wants to publish, schedule, edit, organise or inspect YouTube videos or channel content, even if they don't mention ytup by name.
---

# ytup: YouTube from the command line

`ytup` is a single binary. It talks to the YouTube Data API v3 as the user's own channel. It is built to be driven by agents:

- **stdout** carries only data: a single ID, or JSON with `--json`.
- **stderr** carries progress, confirmations and warnings, with no colors or progress bars when it isn't a terminal.
- **Exit codes** have stable meanings.

`REFERENCE.md` in this folder is the complete manual. Read the relevant section before anything beyond the simple flows below.

## Contract (memorise this)

| Exit | Meaning | What to do |
|---|---|---|
| `0` | Success | Parse stdout |
| `1` | Failure; the requested change did **not** happen | Read stderr, fix the cause, retry if appropriate |
| `2` | Bad flags or arguments; nothing was sent | Fix the command line (`ytup <cmd> --help`) |
| `3` | **Partial success**: the video was uploaded or updated, but a follow-up step failed (thumbnail, playlist, or `--wait` processing) | **Do not re-upload.** `upload` still prints the ID (or JSON) on stdout. `videos update` prints only with `--json`. Repeat only the failed step named in the `warning:` lines (`ytup thumbnail …`, `ytup playlists add …`) |

- `ytup upload …` prints the new video ID on stdout: `id=$(ytup upload clip.mp4 -t "Title")`.
- Every listing or inspection command accepts `--json` and prints raw YouTube API resources. Count fields such as `statistics.viewCount` are **strings**.
- Video arguments accept an ID or any YouTube/Studio URL. Playlist arguments accept an ID, a URL or an exact playlist title.

## Always start with a preflight

```sh
command -v ytup || echo "ytup not on PATH (cargo install --path <repo>; ~/.cargo/bin must be on PATH)"
ytup auth status --json      # always exits 0; inspect the fields
```

- `clientConfigured: false`: the user must create a Google OAuth client. Walk them through **REFERENCE.md → Authentication → One-time setup**; only they can do it.
- `loggedIn: false`, or `valid: false`: run the login flow below.
- `missingScopes` not empty: the user unticked permissions; log in again.
- `loggedIn: true, valid: true`: ready. `channel.title` tells you which channel you are acting on. **Say it to the user before you write anything.**

## Login needs the human

`ytup auth login` blocks until the user approves access in a browser. On macOS it opens the browser itself and also prints the link to stderr. Run it **in the background**, relay the link to the user, then wait:

```sh
ytup auth login --timeout 600 2> /tmp/ytup-login.log &   # Claude Code: Bash with run_in_background
grep -o 'https://accounts.google.com[^ ]*' /tmp/ytup-login.log   # give this link to the user
# exit 0 + "Logged in as <channel>" on stderr = done
```

If the user picks a different channel than they intended, use `ytup --profile <name> auth login` for a second channel, or log in again. Never read, print or copy the stored credentials or the client-secret JSON contents.

## Safety rules

1. **Uploads are private by default. Keep them private** unless the user explicitly asks for `public` or `unlisted`, or gives a publish time (`--publish-at`).
2. **Never delete** (`videos delete`, `playlists delete`, `captions delete`) without the user's explicit go-ahead for those specific items. Show the titles first. Pass `--yes` only after that confirmation; without a TTY, delete commands refuse to run without `--yes`.
3. **Never re-run an upload that already succeeded**, because it creates a duplicate video. The video exists when the exit code is 0 or 3, **or whenever stderr contains `✓ Uploaded https://youtu.be/ID`** (even if the process was killed afterwards; take the ID from that line). Re-running is only correct after exit `1` without that line, or after an interruption during the transfer: the identical command then resumes from the saved session.
4. **Audience and AI disclosure are the creator's legal declarations.** If the user hasn't said, ask them before you pass `--made-for-kids`/`--not-made-for-kids` or `--synthetic-media`/`--no-synthetic-media`. Don't guess.
5. Don't run `auth logout` (it revokes access at Google) or `--restart` (it throws away upload progress) unless asked.
6. Mind the quota. The upload bucket is about 100 `videos.insert` calls per day per Google Cloud project. Most writes cost 50 units from a 10,000/day pool, `captions upload` costs 400, and reads cost 1. Don't loop on writes. See **REFERENCE.md → Quota**.

## Common flows

```sh
# Validate first: metadata limits, dates, thumbnail type/size, and (when logged in) category names and playlists. Uploads nothing
ytup upload clip.mp4 --metadata clip.json --dry-run

# Upload with metadata, thumbnail and playlist; capture the ID
id=$(ytup upload clip.mp4 \
  --title "Episode 12: Rust in production" \
  --description-file description.txt \
  --tags rust,programming,podcast \
  --category "Science & Technology" \
  --thumbnail cover.jpg \
  --playlist "Podcast" \
  --not-made-for-kids \
  --publish-at "2026-11-01 18:00")
code=$?   # 0 ok · 3 uploaded but thumbnail/playlist failed · 1 failed

# Inspect / verify
ytup videos get "$id" --json
ytup videos list -n 10 --json

# Edit only what changes (all other fields are preserved)
ytup videos update "$id" --title "New title" --add-tags tutorial --remove-tags podcast
ytup videos update "$id" --privacy public          # also cancels a pending --publish-at
ytup thumbnail "$id" new-cover.png

# Playlists and captions
ytup playlists create --title "Podcast" --privacy public     # prints the playlist ID
ytup playlists add "Podcast" "$id"
ytup captions upload "$id" episode12.en.srt --language en    # prints the caption track ID
```

## Metadata at a glance

| Flag | JSON key (`--metadata`) | Notes |
|---|---|---|
| `-t, --title` | `title` | ≤100 chars, no `<` `>`. Default: the file name |
| `-d, --description` / `--description-file F` (`-` = stdin) | `description` / `descriptionFile` | ≤5000 bytes, no `<` `>` |
| `--tags a,b` | `tags` (array) | Replaces existing tags. `""` clears them. ≤500 chars in total |
| `--category` | `category` | ID (`28`) or English name (`"Gaming"`); see `ytup categories` |
| `--privacy` | `privacy` | `private` (default) · `unlisted` · `public` |
| `--publish-at` | `publishAt` | Future time. Forces `private` until then |
| `--made-for-kids` / `--not-made-for-kids` | `madeForKids` | Ask the user |
| `--synthetic-media` / `--no-synthetic-media` | `syntheticMedia` | Realistic AI-altered content. Ask the user |
| `--language`, `--audio-language` | `language`, `audioLanguage` | BCP-47 (`en`, `nl`, `pt-BR`) |
| `--license` | `license` | `youtube` · `creative-commons` |
| `--embeddable`/`--no-embed`, `--public-stats`/`--hide-stats` | `embeddable`, `publicStats` | |
| `--recording-date` | `recordingDate` | `YYYY-MM-DD` |
| `--thumbnail` | `thumbnail` | JPEG/PNG ≤2 MB. Needs a verified channel |
| `--playlist` (repeatable) | `playlists` (array) | ID, URL or exact title; the playlist must exist |
| `--no-notify` | `notifySubscribers: false` | Upload only |

Flags override the file. Relative paths inside a metadata file resolve against the file's own folder. Unknown keys are an error, so typos get caught.

When something fails, look the stderr message up in **REFERENCE.md → Errors and recovery** before retrying.
