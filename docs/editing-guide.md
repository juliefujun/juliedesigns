# Portfolio Editing Guide

## Project structure

```
portfolio/
├── index.html              # Home / works grid
├── pages/
│   ├── about.html
│   ├── photography.html
│   ├── playground.html
│   └── projects/           # One file per case study
├── css/                    # Styles split by section
├── js/                     # Scripts split by feature
└── assets/                 # All images, logos, resume
```

## Editing content

### Home page works grid
Open `index.html` and edit the `.works-grid` section. Each card is an `<a class="work-card">` linking to a project page.

Keep homepage grid breakpoints at the end of `css/home.css`, after desktop rules: two columns below 900px and one below 600px. The featured card spans two columns only on tablets. Keep mobile header rules at the end of `css/navigation.css` so desktop styles cannot override them.

### Project pages
Edit files in `pages/projects/`. Each project has:
- `.project-hero` — hero image
- `.project-overview` — year, type, tools, description
- `.project-toc` — table of contents links
- `.project-main-content` — body copy
- `.project-images` — image grids

### About page
Edit `pages/about.html` — portrait image, bio text, skill tags, resume link, email.

### Photography
Edit `pages/photography.html`. Add images to `.masonry-grid` as `.masonry-item` divs with `portrait`, `landscape`, or `square` class.

### Playground
Edit `pages/playground.html`. Duplicate an entire `.playground-card` inside `.playground-grid` to add a project. Update the link, image, category/year, title, and short description. Give each title and description a unique `id` and match those IDs in the card's `aria-labelledby` and `aria-describedby` attributes.

The gallery uses three equal columns, two below 900px, and one below 600px. Captions appear on hover or keyboard focus and remain visible on touchscreens. Styles live in `css/galleries.css`. `pages/art.html` redirects old bookmarks to Playground.

## Adding assets

| Content type | Location |
|-------------|----------|
| Logos | `assets/logos/` |
| Project images | `assets/project-images/[project-name]/` |
| Photography | `assets/photography/` |
| Headshots | `assets/headshots/` |
| Resume PDF | `assets/resume/` |

Update `src` paths in HTML to match. Avoid a leading `/` before `assets`: that points to the domain root and breaks when the site is hosted in a project subfolder such as `/juliedesigns/`. From `index.html` use `assets/...`. From `pages/` use `../assets/...`. From `pages/projects/` use `../../assets/...`.

## Styles

| File | Purpose |
|------|---------|
| `css/base.css` | Colors, fonts, reset, responsive breakpoints |
| `css/navigation.css` | Top nav bar |
| `css/footer.css` | Footer |
| `css/home.css` | Home hero & works grid |
| `css/projects.css` | Project case study layouts |
| `css/about.css` | About page |
| `css/galleries.css` | Photography masonry grid & Playground gallery |

## Scripts

| File | Loaded on | Purpose |
|------|-----------|---------|
| `js/main.js` | All pages | Shared init |
| `js/navigation.js` | All pages | Active nav link |
| `js/typing.js` | Home only | Hero typing animation |
| `js/project-navigation.js` | Project pages | TOC scroll |
| `js/gallery.js` | Gallery pages | Reserved for gallery features |

## Running locally

```bash
cd portfolio
python3 -m http.server 8000
```

Open http://localhost:8000

## Deployment

Upload the entire `portfolio/` folder to any static host (Netlify, GitHub Pages, etc.). No build step required.

## Color palette and contrast

Shared colors live in `css/base.css`. Use `--ink` for headings, `--ink-light` for body and secondary text, and `--accent` (`#6e5f46`) for labels, underlines, and focus rings. Use `--border` for control outlines and `--surface-hover` for light hover fills. `--sand`, `--toc-label`, and `--toc-hover` are compatibility aliases so existing selectors share the same palette.

Text colors are checked at 4.5:1 or better against the page, navigation, and beige card surfaces. Hovered controls use dark text. Hero back buttons have opaque light backgrounds; Playground captions use a dark overlay with enough opacity for white text even over a white image. Keep project artwork separate from interface text when evaluating contrast.
