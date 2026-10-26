# IT415 Module 3 — Deployment & Application Management

Student: Laiza Pueblo

## Submission links

- GitHub: https://github.com/pueblolaiza/Personal_CV
- Production: https://laizapueblo.vercel.app
- About: https://laizapueblo.vercel.app/about.html
- Dashboard: https://vercel.com/pueblolaiza/personal_cv
- Initial failed Preview deployment: https://vercel.com/pueblolaiza/personal_cv/6MCo5DpguX6yMc5fJgFX1TDYLXYo
- Working Preview URL: https://personal-g2cj9192q-pueblolaiza.vercel.app

## Application requirements (module page 35)

| Requirement | Implementation |
| --- | --- |
| Homepage | `index.html` |
| About page | `about.html` |
| External API call | GitHub Users API in `github-profile.js` |
| Environment variable | `PORTFOLIO_GITHUB_USERNAME` |
| Build | `node scripts/build.mjs` → `dist/` |
| Repository | Existing `Personal_CV` project |

## Build locally

```powershell
$env:PORTFOLIO_GITHUB_USERNAME = 'pueblolaiza'
node scripts/build.mjs
python -m http.server 8000 --directory dist
```

No npm packages are needed. `.env.example` documents the public value; the build does not automatically load `.env` files. Set the variable in your shell, or in the appropriate Vercel environment. Never put private credentials in browser configuration.

## Cloud configuration

Use repository root, static/Other framework, build command `node scripts/build.mjs`, output `dist`. `vercel.json` declares these settings. Add `PORTFOLIO_GITHUB_USERNAME=pueblolaiza` in Vercel Preview and Production; redeploy after changing variables. Use `main` for Production and a feature branch for Preview.

## Required evidence

Save actual dashboard screenshots under `screenshots/` (excluded from Git):

- [ ] Dashboard screenshot: successful Production deployment and source commit
- [ ] Dashboard screenshot: Preview deployment, branch, and URL
- [ ] Dashboard screenshot: deployment history
- [ ] Dashboard screenshot: failed Preview build log
- [ ] Dashboard screenshot: fixed build log
- [ ] Dashboard screenshot: environment variable and selected scopes
- [ ] Dashboard screenshot: rollback result
- [ ] Dashboard screenshot: intended current Production release restored afterward

The deployment actions below are complete and supported by actual CLI logs. Dashboard screenshots remain outstanding because browser/native app control timed out. Pending screenshot boxes do not mean the deployment actions failed. Never label exported text as a dashboard screenshot.

## Planned error and solution

The actual Preview failed because `PORTFOLIO_GITHUB_USERNAME` was not available in the Preview scope. That scope had `VITE_GITHUB_USERNAME`, which is a different name. The log reports the configuration-validation error and build command exit code 1. The fix is to add `PORTFOLIO_GITHUB_USERNAME=pueblolaiza` to Preview and redeploy. Production already had the required name and was preserved. The real failed-build log is saved in `logs/preview-failure.txt`. This demonstrates both exact variable naming and environment scope without introducing broken code into Production.

## Execution record

- Existing GitHub → Production workflow: verified in earlier project updates.
- Current domain `laizapueblo.vercel.app`: verified in Vercel’s domain settings.
- Feature branch: `codex/module3-deployment-lab`; initial implementation commit `dfacf47`.
- Local build without `PORTFOLIO_GITHUB_USERNAME`: failed with the intended configuration-validation message.
- Local build with `PORTFOLIO_GITHUB_USERNAME=pueblolaiza`: passed.
- Browser checks: no overflow at 1440, 1024, 768, 480, and 375 pixels; About page and photo load; mocked GitHub API success and HTTP 403 fallback both pass; no JavaScript page errors. Mocked counts were test-only and are not hard-coded into the portfolio.
- Vercel Preview deployment `dpl_6MCo5DpguX6yMc5fJgFX1TDYLXYo`: failure confirmed in authenticated build logs; missing required variable in Preview scope.
- Added the required variable to Preview; Production already had it and its value was normalized to `pueblolaiza` before release. Existing `VITE_GITHUB_USERNAME` was retained.
- Preview `05e2432` reached Ready; `logs/preview-success.txt` records the successful static build and deployment.
- Merged the reviewed branch into `main` at `7598f3e`; Production deployment `dpl_2zP1c7YjFxdEvDbdZmgtJBuyBhMp` reached Ready at https://personal-j8bjmh77z-pueblolaiza.vercel.app.
- Verified public `/about.html` and `/site-config.js` return HTTP 200; generated configuration uses `pueblolaiza`.
- Actual rollback succeeded to `dpl_7aea6KxoFBggZSoEWLnbNuuuV2bb` (https://personal-p702hwjg7-pueblolaiza.vercel.app).
- Restored the new working Production with `vercel promote`; authenticated inspection confirms `laizapueblo.vercel.app` points to `dpl_2zP1c7YjFxdEvDbdZmgtJBuyBhMp`, status Ready.

## Saved original CLI evidence

- `logs/preview-failure.txt`: actual missing-variable build error
- `logs/preview-success.txt`: successful fixed Preview build
- `logs/environment-scopes.txt`: variable names and scopes (values redacted)
- `logs/deployment-history.txt`: actual Vercel deployment listing
- `logs/production-before.txt`: known-good target recorded before rollback
- `logs/production-build.txt`: successful module Production build
- `logs/rollback.txt`: rollback success result
- `logs/restore-current-release.txt`: promotion success result
- `logs/production-restored.txt`: restored Production status and aliases

To finish the screenshot submission, open the existing project dashboard, select the named deployments above, and capture the Overview, Deployments list, Build Logs, and Environment Variables screens. No additional deployment, intentional error, or rollback is needed just to retake evidence.

## Deployment management

Inspect the first meaningful Build Log error before editing settings. Check source commit, environment scope, output directory, tracked assets, and filename case. The GitHub data panel has an unavailable state and retry so an API failure does not break the portfolio.

Redeploy rebuilds a version. Rollback switches Production to an earlier eligible working deployment. Vercel plan/history can restrict eligible targets. After the demonstration, restore the intended current release. No custom domain purchase is needed; the existing Vercel domain has HTTPS.

## Knowledge check answers (module page 36)

1. B — push/merge to the configured Production branch.
2. False — browser-exposed values are public.
3. Preview isolates changes for review before Production.
4. Check name, value, scope, and redeploy status.
5. B — build log.
6. False — Production branch is configurable.
7. Cloud file systems can enforce case-sensitive paths.
8. Roll back to the previous eligible working deployment.
9. C — CNAME is commonly used for subdomains; follow provider instructions.
10. Preview catches faults without exposing them to Production visitors.

## Live website captures

The local `screenshots/` folder contains public Production website, mobile About page, and live GitHub panel captures when the final browser check succeeds. These show the actual application and are separate from the outstanding Vercel dashboard screenshots above.
