# IT415 Module 3 — Deployment & Application Management

Student: Laiza Pueblo

## Submission links

- GitHub: https://github.com/pueblolaiza/Personal_CV
- Production: https://laizapueblo.vercel.app
- About: https://laizapueblo.vercel.app/about.html
- Dashboard: https://vercel.com/pueblolaiza/personal_cv
- Preview URL: pending verification

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

- [ ] Successful Production deployment and source commit
- [ ] Preview deployment, branch, and URL
- [ ] Deployment history
- [ ] Failed Preview build log
- [ ] Fixed build log
- [ ] Environment variable and selected scopes
- [ ] Actual rollback result
- [ ] Intended current Production release restored afterward

Pending boxes do not represent completed actions. Never label a local failure as a Vercel failure.

## Planned error and solution

Without `PORTFOLIO_GITHUB_USERNAME`, the build exits with a clear configuration error. Fix it by setting the public GitHub username in the correct Vercel environment and redeploying. This demonstrates that local shell values are not automatically available in the cloud. The intentional error belongs on a Preview branch.

## Execution record

- Existing GitHub → Production workflow: verified in earlier project updates.
- Current domain `laizapueblo.vercel.app`: verified in Vercel’s domain settings.
- New module implementation and local build: awaiting command results.
- New Preview failure and fix: pending.
- Updated Production: pending.
- Rollback and restoration: pending.

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
