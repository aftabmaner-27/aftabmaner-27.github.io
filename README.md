# Aftab Imtiyaj Maner — Portfolio (v2)

A premium, AI-inspired developer portfolio: dark-mode-first, glassmorphism,
soft gradients, and smooth Framer Motion animations — built as a modern,
component-driven React app.

> The original static HTML/CSS/JS site lives in [`/Portfolio`](./Portfolio) and
> is kept untouched as a reference/backup. This v2 redesign **reuses 100% of the
> original content** (name, roles, about copy, stats, skills, experience,
> projects and contact details) — only the UI/UX has been rebuilt.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (fast dev server & optimized build)
- **Tailwind CSS** (utility-first styling + custom theme tokens)
- **Framer Motion** (animations & micro-interactions)
- **React Icons** (icon set)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build (outputs to ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Add your assets

Copy your original binary assets into `public/` using the exact paths below
(see [`public/ASSETS.md`](./public/ASSETS.md) for details):

```
public/cv/cv_aftab_maner.pdf
public/video/aftabmaner_android_developer.mp4
public/img/news.png
public/img/port2.jpg
```

Missing assets degrade gracefully (animated initials card / gradient
placeholders), so the site runs fine even before you add them.

## Editing content

All content is centralised in a single typed file — **edit here, not in the
components**:

```
src/data/portfolio.ts
```

## Project structure

```
src/
├── App.tsx                     # App shell: loader, background, layout, sections
├── main.tsx                    # React entry
├── index.css                   # Tailwind layers, scrollbar, noise, tokens
├── data/
│   └── portfolio.ts            # Single source of truth for all content
├── hooks/
│   ├── useActiveSection.ts     # Scroll-spy for navbar active link
│   ├── useMousePosition.ts     # Mouse parallax / cursor tracking
│   ├── useTheme.ts             # Dark/light toggle (persisted)
│   └── useTypingEffect.ts      # Hero typing animation
├── lib/
│   ├── motion.ts               # Shared Framer Motion variants
│   └── utils.ts                # cn() classname helper
└── components/
    ├── layout/                 # Navbar, Footer, Loader, ScrollProgress,
    │                           # CursorGlow, BackToTop
    ├── ui/                     # Reusable primitives (buttons, cards,
    │                           # background, headings, image fallback)
    └── sections/               # Hero, About, Skills, Projects, Experience,
                                # Services, Testimonials, Contact
```

## Features

- Dark futuristic theme with purple/cyan glow, aurora, grid & blob gradients
- Animated background + floating particles + noise texture overlay
- Cursor glow, magnetic buttons, card tilt & spotlight hover
- Scroll progress bar, custom scrollbar, loading screen, back-to-top
- Sticky glass navbar with active indicator, mobile drawer & theme toggle
- Hero with typing animation, parallax, stats cards & scroll indicator
- Skills with category filters, animated progress bars & count-up percentages
- Projects with filtering, tilt, animated borders, featured ribbon & badges
- Vertical experience timeline with animated nodes
- Services grid, auto-sliding testimonials carousel
- Validated contact form with `mailto:` email integration
- Fully responsive (320px → 4K), accessible, SEO-friendly, `prefers-reduced-motion` aware

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/static.yml`, which installs deps,
runs `npm run build`, and deploys `./dist` to GitHub Pages automatically.

> Tip: after your first local `npm install`, commit the generated
> `package-lock.json` and switch the workflow's install step from
> `npm install` to `npm ci` for faster, reproducible CI builds.
