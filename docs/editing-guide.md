# Portfolio Editing Guide

## Project structure

```
portfolio/
├── index.html              # Home / works grid
├── pages/
│   ├── about.html
│   ├── photography.html
│   ├── art.html
│   └── projects/           # One file per case study
├── css/                    # Styles split by section
├── js/                     # Scripts split by feature
└── assets/                 # All images, logos, resume
```

## Editing content

### Home page works grid
Open `index.html` and edit the `.works-grid` section. Each card is an `<a class="work-card">` linking to a project page.

### Project pages
Edit files in `pages/projects/`. Each project has:
- `.project-hero` — hero image
- `.project-overview` — year, type, tools, description
- `.project-toc` — table of contents links
- `.project-main-content` — body copy
- `.project-images` — image grids

### About page
Edit `pages/about.html` — portrait image, bio text, skill tags, resume link, email.

### Photography & Art
Edit `pages/photography.html` or `pages/art.html`. Add images to `.masonry-grid` as `.masonry-item` divs with `portrait`, `landscape`, or `square` class.

## Adding assets

| Content type | Location |
|-------------|----------|
| Logos | `assets/logos/` |
| Project images | `assets/project-images/[project-name]/` |
| Photography | `assets/photography/` |
| Headshots | `assets/headshots/` |
| Resume PDF | `assets/resume/` |

Update `src` paths in HTML to match. From `index.html` use `assets/...`. From `pages/` use `../assets/...`. From `pages/projects/` use `../../assets/...`.

## Styles

| File | Purpose |
|------|---------|
| `css/base.css` | Colors, fonts, reset, responsive breakpoints |
| `css/navigation.css` | Top nav bar |
| `css/footer.css` | Footer |
| `css/home.css` | Home hero & works grid |
| `css/projects.css` | Project case study layouts |
| `css/about.css` | About page |
| `css/galleries.css` | Photography & art masonry grids |

## Scripts

| File | Loaded on | Purpose |
|------|-----------|---------|
| `js/main.js` | All pages | Shared init |
| `js/navigation.js` | All pages | Active nav link |
| `js/typing.js` | Home only | Hero typing animation |
| `js/project-navigation.js` | Project pages | TOC scroll, back button contrast |
| `js/gallery.js` | Gallery pages | Reserved for gallery features |

## Running locally

```bash
cd portfolio
python3 -m http.server 8000
```

Open http://localhost:8000

## Deployment

Upload the entire `portfolio/` folder to any static host (Netlify, GitHub Pages, etc.). No build step required.
