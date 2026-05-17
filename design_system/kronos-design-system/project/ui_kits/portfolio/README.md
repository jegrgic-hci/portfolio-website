# Portfolio — Kronos UI Kit

A pixel-faithful recreation of the **Joseph Grgic / KRONOS_LAB** portfolio website, factored into small, reusable React components. The visual language, copy patterns, and component construction all come from `kronos_master_spec_v4.0.html` — this kit is not an interpretation, it's a translation.

## What's here

- `index.html` — the running prototype. Boots all components and wires a click-through between four routes (`Work`, `About`, `Writings`, `Contact`).
- `components.jsx` — all UI primitives: `Icon`, `Button`, `Tag`, `Input`, `FormField`, `Checkbox`, `NavLink`, `TypeLabel`, etc.
- `Sidebar.jsx` — the fixed 280px dark protocol rail.
- `GlobalNav.jsx` — top horizontal nav variant (Work / About / Writings / Contact).
- `Hero.jsx` — name + role + intro + CTAs.
- `ProjectCard.jsx` + `ProjectGrid.jsx` — case-study tile and gallery layout.
- `Writings.jsx` — list view for journal entries.
- `ContactForm.jsx` — two-column form with primary submit.
- `Footer.jsx` — inverse-surface footer with wordmark + social.
- `app.jsx` — the page shell + router glue.

## Routes mocked

The prototype is a single-page app. Click any nav item or CTA to navigate:

| Route | Shows |
|---|---|
| `Work` (default) | Hero → 6-project grid |
| `About` | Long-form bio with section header |
| `Writings` | List of three journal entries |
| `Contact` | Form with name / email / message, mocked submit |

## What this kit is NOT

- Not production code. No routing library, no real form handling, no API calls.
- No invented sections. If the master spec didn't define it, it isn't here. Project cover photos use the documented placeholder block.
- Not a Storybook. `index.html` boots the **product**, not an inventory of components.

## Editing

All styles are inlined via `<style>` at the top of `index.html` so the kit stays a single dependency-free bundle. Tokens come from `../../colors_and_type.css`. Stick to existing tokens — if you need a new color, the right move is almost always re-using teal, grey, or black at a different opacity.
