# Writings

How articles work on the site, the house style for writing them, and where each one stands.

## How articles work

Each article is two pieces:

1. **Content:** `content/articles/{slug}.md` (plain markdown, no frontmatter needed)
2. **Listing entry:** `data/articles.json` with `id`, `theme`, `date`, `title`, `description`, `href`

The writings page (`app/writings/page.tsx`) groups articles into the three theme columns and sorts each column newest first. Dates use the `Mon YYYY` format (e.g. `Oct 2026`). An article keeps its original publication date when it is rewritten, so the list doesn't show every article as new. Only a genuinely new article gets the current month.

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

| Article | Reviewed | Notes |
|---|---|---|
| [Designing for Calibrated Skepticism](content/articles/calibrated-skepticism.md) | Oct 2026 | New. Replaced "The Compliance Bridge" and "The Velocity of Doubt", which were retired. |
| [The Efficiency Metric](content/articles/efficiency-metric.md) | Oct 2026 | Rewritten around correct decision-making, using the DOGE projects as examples. |
| [AI in Qualitative UX Research](content/articles/ai-in-ux-research.md) | Oct 2026 | Rewritten to cover surveys, interviews and video, with velocity, breadth and depth up front and methodology and review as the condition. Added in-article jump links. Still to do: spot-check citations and the EU AI Act line, and consider linking a case study. |
| [The Empathy Gap: When AI Passes as a Person](content/articles/empathy-gap.md) | Oct 2026 | Rewritten (formerly "The Empathy Gap in Our Wallets") around the deception of finding out the "person" on the line was AI, opening with an HVAC emergency call told in third person. The title now means the gap between empathy expressed and empathy felt. Covers what people assume about a person, why they can't tell (Turing test result, Duplex, scripted empathy, and why not knowing leaves the caller using strategies meant for a person). Kept to real-time conversation: fake reviews and the replicant effect were cut, why businesses don't disclose (Luo et al.: disclosure cut purchases by 79.7%), and designing trust: disclose in the first sentence, offer a route to a person, and acknowledge the situation instead of claiming feelings. Laws are mentioned in one line as a minimum; the article deliberately doesn't cover regulation, since trust and respect come first. The pain-of-paying, CRO and shopping-assistant material was dropped. Citations verified Oct 2026. |
| [The Decline of User Agency: When AI Is Built to Do the Thinking](content/articles/decline-user-agency.md) | Oct 2026 | Rewritten from the "Rise of Dark AI" draft and moved to Human Factors & Cognition. Argues AI is tuned on in-the-moment approval toward agreeable, effortless answers (sycophancy research, the GPT-4o rollback), at a cost to skill and judgment (Bainbridge, Bastani et al., Lee et al.). Uses TAU Thinking as the education example, linking Calibrated Skepticism. Citations verified Oct 2026. |
| [The Agentic Architecture: Keeping People in Control of AI That Acts](content/articles/agentic-architecture.md) | Oct 2026 | Rewritten around AI that acts: mode error and automation surprises (Sarter & Woods, the 737 MAX), observability, predictability and directability (Norman, coactive design), checkpoints set by stakes rather than stated confidence (consistent with Calibrated Skepticism), continuity across a service journey, and handing back control when the agent fails. Absorbed the useful parts of The Unseen Hand. Not part of the set of four. Citations verified Oct 2026. |

The four Oct 2026 articles on human-AI interaction (Calibrated Skepticism, The Efficiency Metric, The Decline of User Agency, The Empathy Gap) end with the same set note: each is about a signal mistaken for what it is meant to indicate. Keep the note identical across all four if any of them changes. Keep Calibrated Skepticism and The Empathy Gap distinct: Calibrated Skepticism is about users who know they are working with AI, The Empathy Gap about users who don't, so the body of one shouldn't point to the other as covering the same problem.

## Retired

Removed articles, with redirects in `public/_redirects` so old links still work.

| Article | Retired | Why | Redirects to |
|---|---|---|---|
| The Compliance Bridge | Oct 2026 | Replaced by Designing for Calibrated Skepticism. | `/writings/calibrated-skepticism` |
| The Velocity of Doubt | Oct 2026 | Replaced by Designing for Calibrated Skepticism. | `/writings/calibrated-skepticism` |
| The Coactive Author | Oct 2026 | An AI-use disclosure rather than an article; written in first person and no longer accurate (named Gemini). | `/writings` |
| The Unseen Hand | Oct 2026 | Overlapped the set of four, and recommended stated confidence, which contradicts Calibrated Skepticism. Its useful parts moved into The Agentic Architecture. | `/writings/agentic-architecture` |

## For review

No articles are waiting for review.
