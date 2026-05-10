# Public Folder Structure

## Overview

```
public/
├── images/              ← home page images (flat, no subfolders)
├── projects/            ← per-project content (case study HTML + screens)
└── documents/           ← PDFs (resume, CV)
```

---

## images/

All images used on the home page. Keep this flat — one file per purpose.

| File | Purpose |
|---|---|
| `hero.jpg` | Homepage hero / profile photo |
| `{slug}.jpg` | Project card thumbnail (e.g. `allstate.jpg`, `verizon.jpg`) |

**To update a thumbnail:** replace the file matching the project slug.
**To add a new project thumbnail:** add `{slug}.jpg` here, then update `images.hero` in `data/projects.json`.

---

## projects/{slug}/

One folder per project. Each project has the same structure:

```
projects/
└── allstate/
    ├── content/
    │   └── case-study.html    ← the full case study HTML file
    └── images/                ← case study screens only (not thumbnails)
        ├── hero-screen.jpg
        └── ...
```

**To add a new project:**
1. Create `projects/{slug}/content/` and `projects/{slug}/images/`
2. Add the case study HTML to `content/case-study.html`
3. Add case study screen images to `images/`
4. Add the card thumbnail to `public/images/{slug}.jpg`
5. Add an entry to `data/projects.json` with `contentUrl: "/projects/{slug}/content/case-study.html"`

**Image paths inside case-study.html** must be absolute from the site root:
```html
<img src="/projects/{slug}/images/screen.jpg" />
```

---

## documents/

Static files linked from the site (resumes, PDFs).

| File | Purpose |
|---|---|
| `jegrgic_UXResumeEN.pdf` | English resume |
| `jegrgic_UXResumeFR.pdf` | French CV |
