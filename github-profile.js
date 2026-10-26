'use strict';

// Public GitHub API only. Never place an API token in this browser script.
const profilePanel = document.querySelector('[data-github-profile]');
if (profilePanel) {
  const username = window.PORTFOLIO_CONFIG?.githubUsername;
  const status = profilePanel.querySelector('[data-profile-status]');
  const stats = profilePanel.querySelector('[data-profile-stats]');
  const retry = profilePanel.querySelector('[data-profile-retry]');
  let busy = false;

  async function loadProfile() {
    if (busy) return;
    busy = true;
    retry.hidden = true;
    stats.hidden = true;
    profilePanel.setAttribute('aria-busy', 'true');
    status.textContent = 'Loading my public GitHub profile…';
    try {
      if (!username || !/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)) {
        throw new Error('Public profile configuration unavailable');
      }
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      let response;
      try {
        response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
          headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal
        });
      } finally { clearTimeout(timeout); }
      if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
      const data = await response.json();
      if (typeof data.login !== 'string' || data.login.toLowerCase() !== username.toLowerCase() || !Number.isInteger(data.public_repos) || !Number.isInteger(data.followers)) {
        throw new Error('Unexpected public profile response');
      }
      profilePanel.querySelector('[data-repositories]').textContent = data.public_repos.toLocaleString();
      profilePanel.querySelector('[data-followers]').textContent = data.followers.toLocaleString();
      stats.hidden = false;
      status.textContent = 'Public profile data from GitHub · refreshed just now';
    } catch {
      status.textContent = 'Live GitHub data is temporarily unavailable. You can still visit my profile using the link above.';
      retry.hidden = false;
    } finally {
      busy = false;
      profilePanel.setAttribute('aria-busy', 'false');
    }
  }
  retry.addEventListener('click', loadProfile);
  loadProfile();
}
