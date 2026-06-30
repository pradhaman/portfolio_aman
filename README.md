# Aman Pradhan — Portfolio

My personal portfolio website — a single-page, fully responsive site built with plain
HTML, CSS, and JavaScript. No frameworks, no build step. Designed around a code-editor /
terminal visual language.

**Live site:** add your GitHub Pages URL here once deployed (e.g. `https://pradhaman.github.io/portfolio/`)

## Features

- Typed-terminal hero introduction
- About section with quick facts
- Skills grid grouped by category
- Project showcase (file-card layout) — currently featuring the Road Safety Management System and this portfolio
- Contact section that opens a pre-filled email via `mailto:` — no backend or third-party form service required
- Fully responsive: works down to small mobile screens
- Respects `prefers-reduced-motion`

## Tech Stack

- HTML5
- CSS3 (hand-written, no framework)
- Vanilla JavaScript

## Project Structure

```
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── README.md
```

## Running Locally

No build tools needed — it's a static site.

```bash
git clone https://github.com/pradhaman/portfolio.git
cd portfolio
```

Then just open `index.html` in your browser, or serve it locally:

```bash
python -m http.server 8000
```

and visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this repo to GitHub (e.g. as `pradhaman/portfolio`).
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save. GitHub will publish the site at `https://pradhaman.github.io/portfolio/` within a minute or two.

## Customizing

- **Projects:** edit the `<article class="project-card">` blocks in `index.html` under `#projects`.
- **Colors/fonts:** all design tokens are CSS custom properties at the top of `assets/css/style.css` (`:root`).
- **Contact email:** update the address in the `mailto:` link inside `assets/js/main.js` and in the contact section of `index.html`.

## License

Free to use and adapt.
