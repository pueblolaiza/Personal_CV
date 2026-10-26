import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const username = process.env.PORTFOLIO_GITHUB_USERNAME;
if (!username || !/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) {
  console.error('Build configuration error: set PORTFOLIO_GITHUB_USERNAME to a valid GitHub username in this deployment environment.');
  process.exit(1);
}

const output = resolve('dist');
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'about.html', 'style.css', 'script.js', 'github-profile.js']) {
  await cp(file, resolve(output, file));
}
for (const folder of ['images', 'certificates']) {
  await cp(folder, resolve(output, folder), { recursive: true });
}
await writeFile(resolve(output, 'site-config.js'), `window.PORTFOLIO_CONFIG = ${JSON.stringify({ githubUsername: username })};\n`);
for (const file of ['index.html', 'about.html']) {
  const content = await readFile(resolve(output, file), 'utf8');
  if (/^(<{7}|={7}|>{7})/m.test(content)) throw new Error(`Unresolved merge conflict in ${file}`);
}
console.log(`Static build complete: dist/ — public GitHub profile @${username}`);
