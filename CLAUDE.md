# Claude Instructions for Portfolio Website

This file contains context and guidelines for Claude in future sessions working on this project.

## Project Overview

**Portfolio website migration:** Converting from Squarespace to Next.js + Cloudflare Pages.
- **Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, static export
- **Hosting:** Cloudflare Pages (static, auto-deploys on git push)
- **Domain:** jegrgic.com
- **Status:** Design complete, ready for ongoing project additions

See `README.md` for deployment and quick-start details.

## Adding New Projects

**Always follow the process in `PROJECTS.md`** when adding new portfolio projects.

The structure supports dynamic project pages via `app/projects/[slug]/page.tsx`, meaning:
- ✅ Add new projects by creating one folder + one JSON entry
- ✅ No new page files needed
- ✅ Design consistency maintained via shared components
- ✅ Each project can have custom client brand colors applied to a shared layout

### Quick Reference: New Project Steps

0. **Import & stage** — drop Builder.io HTML into `import-project/`, clean it up there first
1. **Move outputs** — HTML → `public/projects/{slug}/content/`, images → `public/projects/{slug}/images/`, thumbnail → `public/images/{slug}.jpg`
2. **Extract brand colors** from the HTML or Figma
3. **Add JSON entry** to `data/projects.json`
4. Test locally: `npm run dev` → visit `/projects/{slug}`
5. Push to main → auto-deploys

**For full details: See `PROJECTS.md`**

## Data Structure

All projects centralized in `data/projects.json`:
```json
{
  "id": "project-slug",
  "slug": "project-slug",
  "title": "...",
  "company": "...",
  "category": "product-design|ux-research|information-architecture",
  "featured": true|false,
  "description": "...",
  "clientBrand": { "colors": { "primary": "...", "accent": "..." } },
  "images": { "hero": "...", "featured": [...] },
  "tags": [...]
}
```

See `PROJECTS.md` Data Schema section for all fields.

## Design Consistency

### Your Brand (Portfolio Container)
- **Typography:** Helvetica Neue (system stack)
- **Text Color:** `rgba(0,0,0,0.8)` (dark gray, not pure black)
- **Backgrounds:** White `#FFFFFF` for cards/buttons
- **Borders:** `#D3D1C7` (light tan)
- **Section Accent:** `#1D9E75` (green left border on headers)

### Client Brand (Project-Specific)
Each project supplies brand colors that override accents within ProjectLayout:
- `primary`: Headlines, main accents, borders
- `accent`: Buttons, CTAs, highlights
- `light`: Background callouts, stats blocks

Example usage in components:
```tsx
<ProjectLayout 
  project={projectData}
  brandColors={projectData.clientBrand.colors}
/>
```

The component applies client colors to element styling while maintaining your overall layout/typography.

## Components

**Key reusable components:**
- `ProjectLayout` — Wrapper for all project pages (applies brand colors, layout structure)
- `ProjectHero` — Hero section (hero image + title + brand color accent)
- `Badge` — Research method badges or project tags
- Existing: Card, Grid, Section components in homepage

**Component location:** `app/components/`

When adding projects, reuse these components rather than building custom layouts.

## File Organization

```
import-project/           # Gitignored staging area for in-progress imports
  └── README.md           # Explains the workflow

app/
├── projects/[slug]/page.tsx       # Dynamic project pages
├── components/
│   ├── ProjectLayout.tsx          # Shared project wrapper
│   ├── ProjectHero.tsx            # Hero section
│   └── ...
├── page.tsx                       # Home (featured projects grid)
├── work/page.tsx                  # All projects curated view
└── writings/page.tsx              # Articles

data/
└── projects.json                  # Single source of truth for all projects

public/
├── images/                        # Flat: hero.jpg + {slug}.jpg card thumbnails
├── documents/                     # PDFs (resume, CV)
└── projects/
    ├── allstate/
    │   ├── content/case-study.html
    │   └── images/                # Case study screens
    ├── verizon/
    └── ...
```

**Do not create individual route folders** like `/app/new-project/page.tsx`. Use the dynamic route `/app/projects/[slug]/` instead.

## Importing from Builder.io

New projects start in `import-project/` (gitignored), not directly in `public/`. This keeps messy in-progress work out of the repo until it's clean.

**Staging workflow:**
1. Drop Builder.io HTML export into `import-project/`
2. Work with Claude to clean up HTML, rename/optimize images, extract brand colors
3. Confirm all image `src` paths use absolute format: `/projects/{slug}/images/filename`
4. Move clean outputs:
   - HTML → `public/projects/{slug}/content/case-study.html`
   - Screens → `public/projects/{slug}/images/`
   - Card thumbnail → `public/images/{slug}.jpg`
5. Add JSON entry to `data/projects.json`

The goal is consistency: shared layout structure across all projects, with custom client branding + content per project.

## Responsiveness

- **Mobile-first approach** with Tailwind breakpoints (`md:`, `lg:`)
- Use CSS Grid with fallbacks for older browsers
- Test responsive design locally: `npm run dev` + browser devtools (CMD+Shift+I → device toolbar)
- Images should scale proportionally on mobile

## Editing Existing Content

**Home page:** `app/page.tsx` (renders featured projects from JSON)
**All projects:** `app/work/page.tsx` (renders all projects, curated by category)
**Articles:** `app/writings/page.tsx` (references `data/articles.json`)

To update:
1. Edit the JSON files (`data/projects.json`, `data/articles.json`)
2. Changes auto-render on dependent pages
3. No need to edit page files unless changing layout/structure

## Build & Deploy

```bash
npm run dev       # Local development
npm run build     # Static export to ./out/
```

Cloudflare Pages auto-deploys on push to main branch.

## Case Study HTML Migration (Kronos v4.0)

All case study HTML files in `public/projects/{slug}/content/case-study.html` are injected
directly into the Next.js page by `app/projects/[slug]/page.tsx` — the `<style>` blocks and
`<body>` are extracted and rendered inside the app. This means **all `--k40-*` tokens and
`k40-*` classes from `components.css` are already available** in every case study HTML.

**McDonald's is the reference** — use it as the template when migrating others.

### Migration goal
Strip each file's `<style>` block down to:
1. **2–3 project brand vars** (client accent colors only)
2. **Case-study-specific layout patterns** not covered by Kronos (phone grids, screen blocks, etc.)

Replace all custom classes in the HTML body with existing `k40-*` classes.

### How to migrate a case study

**Step 1 — Read the file and audit the `<style>` block**
Identify: (a) custom color vars, (b) layout patterns unique to this project, (c) everything else
that duplicates what Kronos already provides.

**Step 2 — Slim the `<style>` block**
Keep only:
```css
:root {
  --brand-primary: #XXXXXX;   /* client accent */
  --brand-accent:  #XXXXXX;   /* secondary if needed */
}
/* layout patterns not in Kronos (phone grids, screen blocks, etc.) */
/* use --k40-* tokens for all colors/spacing inside these */
/* reveal animations if used */
```

**Step 3 — Replace body classes using this mapping**

| Old custom class / pattern | Kronos replacement |
|---|---|
| Section label (`font-mono, uppercase, border-bottom`) | `k40-eyebrow cs-label` |
| Section title (`h2` sized) | `k40-h2` |
| Sub-heading (`h3` sized) | `k40-h3` |
| Body prose | `k40-body` |
| Long-form editorial prose | `k40-body-long` |
| Small label above a value | `k40-eyebrow` |
| Monospace field value | `k40-label` |
| Muted helper / caption text | `k40-helper` |
| Tag / badge pill | `k40-tag` |
| Accent-colored tag | `k40-tag is-accent` |
| Numbered step label (`01`, `02`) | `k40-eyebrow is-accent` |
| Card container | `k40-card` + `style="padding: var(--k40-s-5);"` |
| Callout / highlight box | `k40-callout` |
| Research finding callout | `k40-callout is-finding` |
| Design decision callout | `k40-callout is-decision` |
| Key insight callout | `k40-callout is-insight` |
| Neutral note callout | `k40-callout is-note` |
| Callout label | `k40-callout-label` |
| Callout body text | `k40-callout-body` |
| Pull quote | `k40-pull-quote` → `blockquote` + `cite` inside |
| Image + caption block | `k40-figure` → `img` + `figcaption` with `.fig-label` + `.fig-text` |
| Data table | `k40-table` |
| KPI / stat block | `k40-kpi` with `.label`, `.num`, `.meta` inside |
| Ghost / text button | `k40-btn k40-btn-ghost` |
| Secondary button | `k40-btn k40-btn-secondary` |
| Inline nav links | `k40-btn k40-btn-ghost` or just `k40-eyebrow` styled anchors |

**Step 4 — Inline style cleanup**
Replace hardcoded color/spacing values in `style=""` attributes:
- Colors → `var(--k40-fg-1)`, `var(--k40-fg-3)`, `var(--k40-border-light)`, etc.
- Spacing → `var(--k40-s-3)` through `var(--k40-s-9)`
- Max widths → `var(--k40-content-max)` (1140px)
- Horizontal padding → `var(--content-pad)` (40px / 24px mobile)

**Step 5 — Section layout shell**
Use these shared layout classes (define in the file's `<style>` block if not already there):
```css
.cs-section    { padding: var(--k40-s-8) var(--content-pad); max-width: var(--k40-content-max); margin: 0 auto; }
.cs-full       { background: var(--k40-surface-2); border-top: 1px solid var(--k40-border-light); border-bottom: 1px solid var(--k40-border-light); padding: var(--k40-s-8) var(--content-pad); }
.cs-full-inner { max-width: var(--k40-content-max); margin: 0 auto; }
.cs-label      { display: block; margin-bottom: var(--k40-s-5); padding-bottom: var(--k40-s-3); border-bottom: 1px solid var(--k40-border-heavy); }
```

**Step 6 — Nav and footer**
The nav (`#site-nav`) and footer (`#footer`) are hidden by `page.tsx` via CSS override —
they don't need to be perfect, but keep them clean using `k40-eyebrow` for nav brand text.

**Step 7 — Verify locally**
```bash
npm run dev
# visit http://localhost:3000/projects/{slug}
```
Check: typography scale, card borders, callout colors, figure captions, table styling, responsive breakpoints.

### Files remaining to migrate (as of May 2026)
- `allstate/content/case-study.html` — partially on old `--k-*` vars, needs remapping to `--k40-*`
- `cigna/content/case-study.html` — partially on `--k40-*`, needs cleanup
- `google-editor/content/case-study.html` — partially on old vars
- `google-hedwig/content/case-study.html` — partially on old vars
- `verizon/content/case-study.html` — zero Kronos vars, full migration needed
- `meta-benchmark/content/case-study.html` — ✅ migrated May 2026

### Design system source files
- Tokens: `design_system/kronos-design-system/tokens.css` (`--k40-*` vars)
- Components: `design_system/kronos-design-system/components.css` (`k40-*` classes)
- Portfolio globals: `app/globals.css` (imports both + portfolio-specific overrides)

---

## Known Items / Future Work

- Complete About page content
- Add email integration to contact form
- Performance optimization (image lazy-load, code splitting)
- Analytics integration
- Blog with markdown support (if needed)

---

**Last updated:** May 10, 2026
**Next session:** Follow `PROJECTS.md` when adding new portfolio projects. Drop Builder.io exports into `import-project/` first.
