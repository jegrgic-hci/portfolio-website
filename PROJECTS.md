# Adding New Projects to Portfolio

This guide explains how to add new portfolio projects while maintaining the file structure and design consistency.

## Folder Structure

```
import-project/               ← gitignored staging area (Builder.io exports go here first)

app/
├── projects/
│   └── [slug]/
│       └── page.tsx          # Dynamic route — handles all projects automatically
├── components/
│   ├── ProjectLayout.tsx     # Shared project layout wrapper
│   ├── ProjectHero.tsx       # Hero section with client branding
│   └── ...
├── page.tsx                  # Home (hero + featured projects)
├── work/page.tsx             # Work/case studies grid (curated)
└── writings/page.tsx         # Articles/writings

data/
└── projects.json             # All project metadata (centralized)

public/
├── images/                   # Flat folder — home page thumbnails only
│   ├── hero.jpg              #   Site hero / profile photo
│   ├── allstate.jpg          #   Card thumbnails: one per project, named by slug
│   ├── verizon.jpg
│   └── {slug}.jpg
├── documents/                # PDFs (resume, CV)
└── projects/                 # Per-project content
    ├── allstate/
    │   ├── content/
    │   │   └── case-study.html   # Full case study HTML
    │   └── images/               # Case study screens (not card thumbnails)
    ├── verizon/
    │   ├── content/
    │   └── images/
    └── {new-project}/
        ├── content/
        └── images/
```

## Data Schema

All project metadata lives in `data/projects.json`. Each project entry:

```json
{
  "id": "allstate",
  "slug": "allstate",
  "title": "Apple / Google Pay Integration",
  "company": "Allstate",
  "category": "product-design",
  "featured": true,
  "description": "Led third-party wallet payment integration using behavioral economics principles.",
  "challenge": "Users hesitant about new payment methods...",
  "solution": "Applied behavioral economics principles...",
  "impact": "25% increase in payment adoption",
  "metrics": "+25% payment rate · 90% transaction success",
  
  "clientBrand": {
    "colors": {
      "primary": "#1F4788",
      "accent": "#00A0DF",
      "light": "#E8F4FF"
    }
  },
  
  "images": {
    "hero": "/images/allstate.jpg",
    "featured": [
      "/projects/allstate/images/flow-diagram.png",
      "/projects/allstate/images/outcome-1.jpg"
    ]
  },
  
  "contentUrl": "/projects/allstate/content/case-study.html",
  "externalLink": null,
  "tags": ["UX Design", "Research", "Behavioral Economics"]
}
```

## Adding a New Project (Step-by-Step)

### 0. Stage the Import

Drop the Builder.io HTML export into `import-project/` (gitignored — stays local).

Work with Claude to:
- Clean and adapt the HTML to match design guidelines
- Rename and optimize images
- Confirm all `<img src="">` paths use absolute format: `/projects/{slug}/images/filename`
- Extract client brand colors

Once clean, move outputs:
- HTML → `public/projects/{slug}/content/case-study.html`
- Case study screens → `public/projects/{slug}/images/`
- Card thumbnail → `public/images/{slug}.jpg`

### 1. Create Project Folders

```bash
mkdir -p public/projects/project-name/content
mkdir -p public/projects/project-name/images
```

### 2. Extract Brand Colors

From the Builder.io HTML or Figma, identify:
- Primary color (headlines, main accents)
- Accent color (buttons, highlights)
- Light background variant (callouts, stats blocks — optional)

Add these to the JSON entry (see schema above).

### 3. Add Project to `data/projects.json`

Copy an existing entry and modify:

```json
{
  "id": "new-project",
  "slug": "new-project",
  "title": "Project Title",
  "company": "Client Name",
  "category": "product-design|ux-research|information-architecture",
  "featured": false,
  "description": "Brief description (1-2 sentences)",
  "challenge": "The problem or challenge...",
  "solution": "How you solved it...",
  "impact": "Quantified result or outcome...",
  "metrics": "Formatted metrics (e.g., '+25% · 90% success')",
  
  "clientBrand": {
    "colors": {
      "primary": "#COLOR_HEX",
      "accent": "#COLOR_HEX",
      "light": "#COLOR_HEX"
    }
  },
  
  "images": {
    "hero": "/images/new-project.jpg",
    "featured": [
      "/projects/new-project/images/image-1.jpg",
      "/projects/new-project/images/image-2.jpg"
    ]
  },
  
  "contentUrl": "/projects/new-project/content/case-study.html",
  "externalLink": null,
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

### 4. Create Project Page (`app/projects/[slug]/page.tsx`)

The dynamic route automatically renders based on the JSON data:

```tsx
import { ProjectLayout } from '@/components/ProjectLayout';
import projects from '@/data/projects.json';

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) return <div>Project not found</div>;
  
  return (
    <ProjectLayout 
      project={project}
      brandColors={project.clientBrand.colors}
    />
  );
}
```

**No new file needed for each project** — the `[slug]` route handles all projects.

### 5. Add Content (Optional)

If using Builder.io HTML exports:
1. Export from Builder.io as HTML
2. Save to `public/projects/new-project/content/case-study.html`
3. Reference in JSON: `"contentUrl": "/projects/new-project/content/case-study.html"`

Or build content directly in React within the ProjectLayout component.

## Design Consistency

### Your Brand (Header, Layout, Footer)
- Typography: Helvetica Neue (system stack)
- Dark text: `rgba(0,0,0,0.8)`
- Spacing: Tailwind defaults
- Border style: `#D3D1C7`

### Client Brand (Applied in Component)
- Primary color: Hero section, headings, accents
- Accent color: Buttons, highlights, dividers
- Light background: Callouts, stats blocks

Example in ProjectLayout:

```tsx
<section style={{ borderColor: brandColors.primary }}>
  <h2 style={{ color: brandColors.primary }}>Challenge</h2>
  <button style={{ backgroundColor: brandColors.accent }}>
    Learn More
  </button>
</section>
```

## Image Guidelines

**Card Thumbnail** (`public/images/{slug}.jpg`) — shown on home and work pages
- Size: 1500px × 800px (2:1 ratio)
- Format: JPG, 100–150KB
- Should represent the project at a glance

**Case Study Screens** (`public/projects/{slug}/images/`) — shown inside the case study
- Size: 1200–1500px wide
- Format: JPG for photos, PNG for diagrams/wireframes
- 150–200KB each

**Organize case study images by type if there are many:**
```
public/projects/{slug}/images/
├── flow-diagram.png
├── wireframes/
│   ├── flow-1.png
│   └── flow-2.png
└── outcomes/
    ├── result-1.jpg
    └── result-2.jpg
```

## Workflow Tips

1. **Export from Builder.io** → Drop HTML into `import-project/` (gitignored staging)
2. **Clean up with Claude** → Adapt HTML, rename images, extract brand colors
3. **Move clean outputs** → HTML to `public/projects/{slug}/content/`, screens to `public/projects/{slug}/images/`, thumbnail to `public/images/{slug}.jpg`
4. **Add JSON entry** → One entry per project in `data/projects.json`
5. **Test locally** → `npm run dev`, view at `/projects/{slug}`
6. **Deploy** → Push to main, auto-builds on Cloudflare Pages

## Featured vs. Non-Featured Projects

Set `"featured": true` to display on the homepage grid.

The home page pulls featured projects from the JSON:
```tsx
const featuredProjects = projects.filter(p => p.featured);
```

Update the home page to only show the most important/recent work.

## Updating Existing Projects

To edit an existing project:
1. Update content in `data/projects.json`
2. Update images in `public/projects/{slug}/images/`
3. Edit `public/projects/{slug}/content/case-study.html` (if applicable)

Changes auto-update on all pages that reference the project.

## Checklist for New Projects

- [ ] Builder.io HTML staged in `import-project/` and cleaned up
- [ ] HTML moved to `public/projects/{slug}/content/case-study.html`
- [ ] Case study screens moved to `public/projects/{slug}/images/`
- [ ] Card thumbnail added to `public/images/{slug}.jpg`
- [ ] All `<img src="">` paths in HTML are absolute (`/projects/{slug}/images/...`)
- [ ] Brand colors extracted and ready
- [ ] JSON entry added to `data/projects.json` with all required fields
- [ ] `images.hero` in JSON points to `/images/{slug}.jpg`
- [ ] Tested locally: `npm run dev` → `/projects/{slug}`
- [ ] Content renders correctly on mobile (test in browser devtools)
- [ ] If featured: appears on home page and verified display

## File Size & Performance

Keep images optimized:
- Hero images: 100–150KB (JPG, quality 80)
- Featured images: 150–200KB each
- Diagrams/PNGs: Optimize or convert to JPG where possible

Check with:
```bash
ls -lh public/projects/*/images/
```

---

**For more details on the overall project structure and tech stack, see `README.md`**
