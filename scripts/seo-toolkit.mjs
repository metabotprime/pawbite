import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(
  process.env.TOOLKIT_DIR || join(homedir(), '.local/share/pawbite/seo-toolkit'),
);
const commands = {
  coverage: ['inspect-coverage.py', 'python'],
  traffic: ['search-analytics.py', 'python'],
  bing: ['bing-webmaster.py', 'python'],
  indexnow: ['indexnow-submit.mjs', 'node'],
};
const [command, ...args] = process.argv.slice(2);
if (
  !commands[command] ||
  args.some((arg) => arg === '--property' || arg.startsWith('--property='))
) {
  console.error(
    'Usage: npm run seo -- coverage|traffic|bing|indexnow [options]. Property is fixed to PawBite.',
  );
  process.exit(1);
}
const [script, runtime] = commands[command];
if (!existsSync(join(root, script)) || !existsSync(join(root, 'config/pawbite.json'))) {
  console.error(`Missing PawBite toolkit at ${root}. See docs/SEO.md or set TOOLKIT_DIR.`);
  process.exit(1);
}
const executable =
  runtime === 'node'
    ? process.execPath
    : process.env.SEO_PYTHON || join(homedir(), '.local/share/pawbite/seo-venv/bin/python3');
const result = spawnSync(executable, [join(root, script), '--property', 'pawbite', ...args], {
  stdio: 'inherit',
  cwd: root,
});
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
