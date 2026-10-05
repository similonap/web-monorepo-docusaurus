const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '../..');
const exercisesRoot = path.join(root, 'docs', 'exercises');

const expectedStarters = [
  'nextjs/labo-2-y-clone-routing-twitter',
  'nextjs/labo-3-y-clone-forms-twitter',
  'nextjs/labo-4-y-clone-login-twitter',
  'nextjs/labo-5-herhalingsoefening-spotifi',
  'react/labo-1-slot-machine-met-map',
  'react/labo-2-maaltafels-component',
  'react/labo-2-rainbow-props',
  'react/labo-2-slotmachine',
  'react/labo-2-who-s-that-pokemon',
  'react/labo-4-maaltafels-state',
  'react/labo-4-penguins-met-state',
  'react/labo-5-slots',
  'react/labo-6-game-of-life-2',
  'react/labo-8-quiz-app',
  'react/labo-8-quiz-app-met-react-router',
  'react/labo-8-todo-app',
].sort();

function exerciseIds() {
  return ['react', 'react-native', 'nextjs'].flatMap((category) =>
    fs.readdirSync(path.join(exercisesRoot, category), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => `${category}/${entry.name}`),
  );
}

test('only exercises with a real basis project expose a starter', () => {
  const exercises = exerciseIds();
  const starters = exercises
    .filter((exercise) => fs.existsSync(path.join(exercisesRoot, exercise, 'starter')))
    .sort();

  assert.deepEqual(starters, expectedStarters);

  for (const exercise of exercises) {
    const readme = fs.readFileSync(path.join(exercisesRoot, exercise, 'README.md'), 'utf8');
    const hasDownload = readme.includes(`(/exercise-files/${exercise}/starter.zip)`);
    assert.equal(
      hasDownload,
      expectedStarters.includes(exercise),
      `${exercise} has an incorrect starter download link`,
    );
  }
});

test('the Spotifi starter is the original static HTML project', () => {
  const starter = path.join(
    exercisesRoot,
    'nextjs/labo-5-herhalingsoefening-spotifi/starter',
  );
  const files = fs.readdirSync(starter).sort();

  assert.deepEqual(files, [
    'billing.html',
    'index.html',
    'login.html',
    'register.html',
    'song-detail.html',
    'songs.html',
  ]);
});
