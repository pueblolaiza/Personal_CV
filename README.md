# Laiza Pueblo – Personal CV Website

## About
A personal CV and portfolio for Laiza Pueblo, an Information Technology student. Created for the IT415 Personal CV Website activity, with an editorial rose palette centered on `#DB89B3`, condensed typography, and illustrated focus cards and a lightweight, buildless structure.

## Features
- Responsive layouts for desktop, tablet, and mobile
- Sticky navigation, active section indicator, keyboard-accessible mobile menu, and smooth scrolling
- Hero entrance and reveal-on-scroll animations, with reduced-motion support
- About, career objective, education, categorized skills, projects, achievements, experience, and contact sections
- Original profile photo, GitHub links, favicon, and SEO metadata
- Visible, non-clickable placeholders for unverified information
- Static files ready for Vercel deployment; no framework or build dependencies

## Technologies Used
- HTML5, CSS3 (Grid and Flexbox), and vanilla JavaScript
- Git and GitHub for source control
- Vercel as the intended deployment platform (deployment not yet verified)
- Google Fonts: DM Sans and Manrope, with local sans-serif fallbacks

## Student
Laiza Pueblo

## GitHub Repository
https://github.com/pueblolaiza/Personal_CV

## Live Website
https://personalcv-omega.vercel.app

## Running Locally
Open `index.html` directly, or run a static server from the project folder:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000`. Python is only needed for this optional preview server; deployment needs no Python or Node.js. Stop the server with Ctrl+C.

## Personalizing the Content
Search `index.html` for `[` to locate pending content:
- City, email address, and optional phone number
- College/university, year level, academic periods, senior high school, and strand
- Actual project descriptions, technologies, screenshots, repository links, and public demo URLs
- Certificates, training, seminars, awards, competitions, and organization involvement
- Real activities, contributions, and dates
- Verified LinkedIn profile URL

The original HTML, CSS, and README were empty, so no school or contact information was available to preserve. Confirm all developing skill/tool labels and the introductory wording before applying for roles. No proficiency ratings or professional employment claims are included.

Replace email text with `<a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a>` once supplied. Replace pending project and LinkedIn text with real `<a>` elements only when their verified URLs are available. Use `target="_blank" rel="noopener noreferrer"` for external links. Copy the commented project card to add real work. The featured CV website is the only verified project; its preview is an HTML/CSS illustration, not a screenshot.

Keep the original `images/profile.jpg`. For a project screenshot, add a file under `images/` and replace its preview markup with an image and descriptive alt text.

## Project Structure
```text
index.html
style.css
script.js
README.md
images/
  profile.jpg
  favicon.svg
```

## Deployment
The existing Vercel project is `pueblolaiza/personal_cv`, connected to the GitHub repository’s `main` branch. Its public production URL is listed above.

Import the `pueblolaiza/Personal_CV` GitHub repository into Vercel. Use the repository root and a static/Other framework preset, with no build command. The output directory is the project root (`.`) if Vercel asks for one. There are no dependencies to install or environment variables to set.

After deployment:
1. Open the public deployment URL, rather than a dashboard/project-management URL.
2. Check that HTML, CSS, JavaScript, and `images/profile.jpg` load.
3. Check all sections, GitHub links, mobile menu, keyboard focus, and image sizing.
4. Check widths around 1440, 1024, 768, 480, and 375 pixels and confirm there is no horizontal scrolling.
5. Update this README's Live Website placeholder and the project's public demo placeholder in `index.html` with the actual public URL.
6. Optionally add `og:url` and an absolute `og:image` URL after the production hostname is known.

Google Fonts needs an internet connection; system fonts keep the page readable if it is unavailable. Contact placeholders do not send messages, and there is no backend or contact form.

## Suggested Commits
Review changes before staging. From the project folder:

```sh
git add index.html style.css images/favicon.svg
git commit -m "feat: build responsive CV portfolio and content sections"
git add script.js
git commit -m "feat: add accessible navigation and scroll animations"
git add README.md
git commit -m "docs: complete portfolio and Vercel deployment guide"
git push -u origin main
```

The original profile photo is preserved without modification. Updates are committed and pushed when requested.
