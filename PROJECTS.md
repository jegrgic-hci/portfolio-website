# Adding New Projects to Portfolio

This guide explains how to add new portfolio projects while maintaining the file structure and design consistency.

## Folder Structure

```
app/
├── projects/
│   ├── [slug]/
│   │   └── page.tsx           # Project page template (dynamic route)
│   └── page.tsx               # Projects listing/grid (future)
├── components/
│   ├── ProjectLayout.tsx       # Shared project layout wrapper
│   ├── ProjectHero.tsx         # Hero section with client branding
│   └── ...other shared components
├── page.tsx                    # Home (hero + featured projects)
├── work/page.tsx               # Work/case studies grid (curated)
└── writings/page.tsx           # Articles/writings

data/
└── projects.json               # All project metadata (centralized)

public/projects/
├── allstate/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── flow-diagram.png
│   │   ├── outcome-1.jpg
│   │   └── ...other images
│   └── content/
│       └── case-study.html     # Optional: Builder.io export or detailed content
├── verizon/
│   ├── images/
│   └── content/
├── new-project/
│   ├── images/
│   └── content/
└── ...more projects
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
    "hero": "/projects/allstate/images/hero.jpg",
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

### 1. Create Project Folder & Images

```bash
mkdir -p public/projects/project-name/images
mkdir -p public/projects/project-name/content
```

Place images in `public/projects/project-name/images/`:
- `hero.jpg` (1500px wide recommended)
- Flow diagrams, wireframes, outcomes, etc.

### 2. Extract Brand Colors

From Figma or the Builder.io HTML export, identify the client's brand colors:
- Primary color (main accent)
- Secondary/accent color
- Light background variant (optional)

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
    "hero": "/projects/new-project/images/hero.jpg",
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

**Hero Image** (project home link preview)
- Size: 1500px × 800px (2:1 ratio)
- Format: JPG (compressed)
- Should represent the project at a glance

**Featured Images** (in case study)
- Size: 1200px–1500px width
- Format: JPG for photos, PNG for diagrams
- Use consistently across projects

**Organize by type:**
```
images/
├── hero.jpg
├── flow-diagram.png
├── wireframes/
│   ├── flow-1.png
│   ├── flow-2.png
├── outcomes/
│   ├── result-1.jpg
│   └── result-2.jpg
```

## Workflow Tips

1. **Design in Figma** → Export assets and note brand colors
2. **Generate with Builder.io** (optional) → Reference for content structure
3. **Build React component** → Use ProjectLayout template
4. **Add images** → Organized in project folder
5. **Add JSON entry** → One entry per project
6. **Test locally** → `npm run dev`, view at `/projects/new-project`
7. **Deploy** → Push to main, auto-builds on Cloudflare Pages

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

- [ ] Folder created: `public/projects/project-slug/`
- [ ] Images uploaded to `public/projects/project-slug/images/`
- [ ] Brand colors extracted from Figma
- [ ] JSON entry added to `data/projects.json`
- [ ] All required fields filled (id, title, company, description, etc.)
- [ ] Client brand colors added to JSON
- [ ] Images paths referenced correctly in JSON
- [ ] Tested locally: `npm run dev` → `/projects/project-slug`
- [ ] Content renders correctly on mobile (test in browser devtools)
- [ ] If featured: added to home page and verified display

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
