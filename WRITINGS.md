# Writings

How articles work on the site, the house style for writing them, and where each one stands.

## How articles work

Each article is two pieces:

1. **Content:** `content/articles/{slug}.md` (plain markdown, no frontmatter needed)
2. **Listing entry:** `data/articles.json` with `id`, `theme`, `date`, `title`, `description`, `href`

The writings page (`app/writings/page.tsx`) groups articles into the three theme columns and sorts each column newest first. Dates use the `Mon YYYY` format (e.g. `Oct 2026`). When an article is substantially rewritten, update its date.

**Copy limits** (longer text is cut off by CSS `line-clamp`):
- Title: 90 characters
- Description: 120 characters

**Rendering** (`app/writings/[slug]/page.tsx`):
- `>` lines render as accent pull quotes
- A final `## References` heading (optionally after `---`) renders the list below it in a smaller citation style
- `##` headings get an id from their text, minus any Roman-numeral prefix, so articles can link to sections: `## Interviews` → `#interviews`
- Images render as figures; the alt text becomes the caption

## House style

The articles are meant to show research expertise to hiring managers through reasoning and examples.

- No first person ("I", "my job"). The byline already says who wrote it. Generic "we" for researchers is fine.
- No em dashes. Use commas, colons, or separate sentences.
- Open paragraphs with the point. Avoid marketing-style set-ups ("This is where X matters…"), clipped reveal lines ("Now they aren't."), "It isn't X. It's Y." constructions, and coined metaphors.
- Show expertise through examples instead of explaining basics.
- Write connected prose. Keep headings to the main sections and avoid bold run-in labels.
- Be balanced about AI: specific about what it improves and what still needs a person in the loop.
- Cite real, checkable sources (author, year) and verify them before publishing.

## Updated

Articles reviewed and brought up to the house style.

| Article | Date | Notes |
|---|---|---|
| [Designing for Calibrated Skepticism](content/articles/calibrated-skepticism.md) | Oct 2026 | New. Replaced "The Compliance Bridge" and "The Velocity of Doubt", which were retired. |
| [The Efficiency Metric](content/articles/efficiency-metric.md) | Oct 2026 | Rewritten around correct decision-making, using the DOGE projects as examples. |
| [AI in Qualitative UX Research](content/articles/ai-in-ux-research.md) | Oct 2026 | Rewritten to cover surveys, interviews and video, with velocity, breadth and depth up front and methodology and review as the condition. Added in-article jump links. Still to do: spot-check citations and the EU AI Act line, and consider linking a case study. |
| [The Empathy Gap in Our Wallets](content/articles/empathy-gap.md) | Oct 2026 | Rebuilt on pain-of-paying research, replacing the unsupported "2:1 principle" (loss aversion dropped entirely), with AI framed as a CRO tool: a shopping assistant that persuades through social cues and personalization without triggering persuasion knowledge. EU AI Act claims corrected (shopping assistants aren't high-risk). Product audits and the tiered friction framework dropped. Ends on "Whose assistant is it?": the incentive matters more than the technology (commission vs fee-only advice, buyer-side agents, Lidl's AI labelling), then closes on designing trust into transactional AI (appropriate reliance, respecting the user). Citations verified Oct 2026. |

## For review

Older articles still written in the earlier voice (coined capitalized terms, scare quotes, marketing phrasing).

| Article | Date | What to look at |
|---|---|---|
| [The Decline of User Agency and the Rise of Dark AI](content/articles/decline-user-agency.md) | Mar 2026 | Thin (about 475 words). Opens with a "Macro Perspective" header instead of a hook. |
| [The Coactive Author](content/articles/coactive-author.md) | Feb 2026 | A short AI-use disclosure (names Gemini) listed as an article. Consider turning it into a note on the writings page. |
| [The Agentic Architecture](content/articles/agentic-architecture.md) | Jan 2026 | Voice pass. Companion link to The Unseen Hand added Oct 2026. |
| [The Unseen Hand](content/articles/unseen-hand.md) | Mar 2026 | Voice pass. Companion link to The Agentic Architecture added Oct 2026. |
