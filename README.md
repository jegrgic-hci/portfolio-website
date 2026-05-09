# Joseph Grgic - Portfolio Website

Modern, performant portfolio site migrated from Squarespace to Next.js. Built with Next.js 14, TypeScript, and Tailwind CSS. Hosted on Cloudflare Pages.

**Status:** Design implementation complete. Ready for Cloudflare deployment.

## Quick Start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # Static export to ./out/
```

## Project Structure

```
.
├── app/
│   ├── page.tsx              # Home (hero + all sections)
│   ├── work/page.tsx         # Full case studies by category
│   ├── writings/page.tsx     # All articles by theme
│   ├── about/page.tsx        # About page (needs content)
│   ├── contact/page.tsx      # Contact form (needs backend)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & hover states
├── data/
│   ├── case-studies.json     # 8 case studies with metrics
│   └── articles.json         # 6 articles grouped by theme
├── public/
│   ├── images/
│   │   ├── hero.jpg          # Hero background
│   │   └── case-studies/     # 8 case study images
│   └── documents/
│       ├── jegrgic_UXResumeEN.pdf
│       └── jegrgic_UXResumeFR.pdf
├── next.config.mjs           # Static export config
└── tailwind.config.ts
```

## Design System

**Colors:**
- Dark text: `rgba(0,0,0,0.8)` (hero section)
- White backgrounds: `rgb(255,255,255)` (buttons/chips)
- Card borders: `#D3D1C7`
- Section accent: `#1D9E75` (left border on headers)
- Badge colors: Purple, Amber, Green (for research methods)

**Typography:**
- Font: Helvetica Neue (system stack)
- Hero headline: clamp(36px, 5vw, 60px)
- Card titles: 16px/14px
- Body text: 13px

## Content

### Home Page Sections
1. **Hero** — Background image, dark overlay, white CTAs + chips
2. **Product Design** — Allstate featured + 2-col grid (McDonald's, Verizon)
3. **UX Research** — 3-col cards with method badges (Meta SFI, Commerce Manager, Google Hedwig)
4. **IA & Tooling** — 2-col grid (Google Editor, Cigna)
5. **Writings** — 3-column theme layout (AI, Human Factors, Design)

### Data Files
- Edit `data/case-studies.json` to update case study cards
- Edit `data/articles.json` to add/update articles
- Images stored in `public/images/` (1500w case studies, 120px research cards)
- PDFs in `public/documents/` (served directly)

## Deployment

### To Cloudflare Pages

1. **Repository is ready:** github.com/jegrgic-hci/portfolio-website
2. **Go to Cloudflare Dashboard** → Pages → Create project → Connect to Git
3. **Select repo:** portfolio-website
4. **Build settings:**
   - Framework: Next.js
   - Build command: `npm run build`
   - Build output: `out`
5. **Custom domain:** Add jegrgic.com in Pages settings
6. **Nameservers:** Update domain to Cloudflare nameservers (provided by Cloudflare)

Deployments auto-trigger on push to main branch.

## Editing Pages

All pages are in `app/` directory:
- **Home:** `app/page.tsx` (~450 lines, all sections in one file)
- **Work:** `app/work/page.tsx` (case studies grid by category)
- **Writings:** `app/writings/page.tsx` (articles by theme)
- **About:** `app/about/page.tsx` (template, needs content)
- **Contact:** `app/contact/page.tsx` (form template, needs backend)

### Editing Hero Section
Find the hero `<section>` tag in `app/page.tsx` (~line 218). Contains:
- Background image styling
- Eyebrow, headline, subheading text
- CTA buttons (Resume EN/FR, Get in touch)
- Case study chips with anchor links

### Editing Case Studies
1. Update `data/case-studies.json` for content
2. Images stored in `public/images/case-studies/`
3. Cards auto-render from data in three sections

### Editing Articles
1. Update `data/articles.json` (theme, date, title, description, href)
2. Articles auto-group by theme in writings section

## Dev Notes

- **Static export:** All pages pre-built at deploy time (`next.config.mjs`: `output: "export"`)
- **Images:** Using Next.js Image component with `unoptimized: true` for static export
- **Styling:** Inline styles + Tailwind classes; global styles in `app/globals.css`
- **Data structure:** JSON files imported directly; no database
- **Responsive:** CSS Grid with mobile breakpoints (~860px)

## Next Steps

- [ ] Complete About page (extract from Squarespace)
- [ ] Add email integration to contact form
- [ ] Test mobile responsiveness
- [ ] Deploy to Cloudflare Pages
- [ ] Setup domain nameservers
- [ ] Add analytics (optional)
- [ ] Blog with markdown support (future)
- [ ] AI features integration (future)

## Team Notes for Future Sessions

For details on setup, current status, and architectural decisions, see `.claude/projects/.../memory/project_status.md`

---

**Last updated:** April 28, 2026 | **Status:** Ready for deployment
