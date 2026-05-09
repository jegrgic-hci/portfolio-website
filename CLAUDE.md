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

1. Create folder: `public/projects/{slug}/images/`
2. Add images (hero.jpg, wireframes, outcomes, etc.)
3. Extract brand colors from Figma
4. Add one entry to `data/projects.json` with all required fields
5. Test locally: `npm run dev` → visit `/projects/{slug}`
6. Push to main → auto-deploys

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

public/projects/
├── allstate/images/               # Organized by project
├── verizon/images/
├── new-project/images/            # Add new projects here
└── ...
```

**Do not create individual route folders** like `/app/new-project/page.tsx`. Use the dynamic route `/app/projects/[slug]/` instead.

## Rebuilding from Builder.io

**Workflow for converting Builder.io exports:**

1. **Builder.io → HTML export** saved to `public/projects/{slug}/content/case-study.html`
2. **Extract brand colors** from the design and add to JSON
3. **Extract images** and save to `public/projects/{slug}/images/`
4. **Build React component** or reference the HTML in an iframe
5. **Reuse layout** across projects (don't build one-off custom pages)

The goal is consistency: same layout structure across projects, but with custom client branding + content per project.

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

## Known Items / Future Work

- Complete About page content
- Add email integration to contact form
- Performance optimization (image lazy-load, code splitting)
- Analytics integration
- Blog with markdown support (if needed)

---

**Last updated:** May 1, 2026
**Next session:** Follow `PROJECTS.md` when adding new portfolio projects.
