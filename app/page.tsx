import Image from "next/image";
import projects from "@/data/projects.json";
import articles from "@/data/articles.json";
import TypeLine from "@/app/components/TypeLine";

type Project = (typeof projects)[number];

const productDesign = projects.filter((s) => s.category === "product-design");
const uxResearch    = projects.filter((s) => s.category === "ux-research");
const iaTooling     = projects.filter((s) => s.category === "ia-tooling");

/** Product Designer leads because it is the title most people are searching
 *  for. The three that aren't job titles sit at 3, 6 and 10 — spread far
 *  enough apart to read as part of the same list rather than a second one,
 *  and their short words break up the rag of a right-aligned column. */
const jobTitles = [
  "Product Designer",
  "UX Researcher",
  "Mentor",
  "Interaction Designer",
  "Information Architect",
  "Leader",
  "Human Factors Specialist",
  "Creative Technologist",
  "Content Designer",
  "Collaborator",
];

const jumpLinks = [
  { label: "Allstate",               href: "#allstate" },
  { label: "McDonald's",             href: "#mcdonalds" },
  { label: "Verizon",                href: "#verizon" },
  { label: "Meta SFI",               href: "#meta-sfi" },
  { label: "Meta Commerce Manager",  href: "#meta-benchmark" },
  { label: "Google Hedwig",          href: "#google-hedwig" },
  { label: "Google Editor",          href: "#google-editor" },
  { label: "Cigna",                  href: "#cigna" },
];

const writingThemes = [
  "AI & Agentic Systems",
  "Human Factors & Cognition",
  "Design & Dark Patterns",
];

const studioWork = [
  {
    name:    "TAU Thinking",
    domain:  "tauthinking.com",
    href:    "https://tauthinking.com",
    status:  "In pilot · two US schools",
    image:   "/images/tauthinking-card.png",
    body:    "Designed and built end to end. Researched NLP transcript analysis and the literature on user agency, then translated both into something a teacher could act on: turn-by-turn analysis that reports how a student worked with the AI as evidence they can check, not a single score.",
    tags:    ["Prompting quality", "Selective use", "Calibrated skepticism", "Original contribution"],
  },
  {
    name:    "VraiFrench",
    domain:  "vraifrench.com",
    href:    "https://vraifrench.com",
    status:  "In pilot · instructor and students",
    image:   "/images/vraifrench-card.png",
    body:    "Sole designer and developer. The problem: how to speak, listen and score pronunciation accurately enough to actually improve acquisition. Grounded in French phonetics and second-language research, the stack scores speech word by word — liaisons, elisions, nasals — and explains every miss in plain English.",
    tags:    ["Production effect", "Corrective feedback", "Motor learning"],
  },
];

// ── Sub-components ────────────────────────────────────────────────────────

function Tag({ type }: { type: string }) {
  const labels: Record<string, string> = {
    both:   "Design + Research",
    design: "Design",
  };
  const label = labels[type];
  if (!label) return null;
  return <span className="je-meta-tag">{label}</span>;
}

function MethodBadge({ type, label }: { type: string; label?: string }) {
  const defaults: Record<string, string> = {
    moderated:   "Moderated testing",
    unmoderated: "Unmoderated · n=33",
    workshop:    "Workshop + testing",
  };
  const text = label ?? defaults[type];
  if (!text) return null;
  return (
    <span className="je-meta-tag" style={{ marginBottom: "var(--k40-s-3)", justifySelf: "start" }}>
      {text}
    </span>
  );
}

/**
 * The only navigable element in a card. Cards themselves are not links —
 * a whole-card hit area swallows text selection and gives no way to reach
 * the card's content without leaving the page.
 */
function CardLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      className="je-card-link"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

function ProductCard({ study, featured }: { study: Project; featured?: boolean }) {
  return (
    <div
      id={study.id}
      className={featured ? "je-card je-grid-2" : "je-card"}
      style={{
        background: "var(--k40-surface)",
        display: featured ? "grid" : "flex",
        scrollMarginTop: "112px",
        ...(featured
          ? { gridTemplateColumns: "1fr 1fr", overflow: "hidden", marginBottom: "var(--k40-s-4)" }
          : { flexDirection: "column" as const }),
      }}
    >
      <div className={`je-card-media ${featured ? "je-card-media--featured" : "je-card-media--std"}`} style={{ flexShrink: 0 }}>
        <div className="je-card-media-inner">
          <Image
            src={study.images.hero}
            alt={study.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>
      <div style={{ padding: "var(--k40-s-5)", display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
        <div className="je-card-brandrow">
          <span className="je-card-brand">{study.company}</span>
          <Tag type={study.tag} />
        </div>
        <h3 className="k40-h3" style={{ marginBottom: "var(--k40-s-3)" }}>{study.title}</h3>
        <p className="k40-body" style={{ maxWidth: "none", marginBottom: "var(--k40-s-4)" }}>{study.description}</p>
        {study.metrics && (
          <p style={{
            fontFamily: "var(--k40-font-ui)",
            fontSize: "var(--k40-text-xs)",
            color: "var(--k40-fg-1)",
            borderLeft: "3px solid var(--k40-accent-rail)",
            paddingLeft: "var(--k40-s-3)",
            marginBottom: "var(--k40-s-3)",
            lineHeight: 1.5,
          }}>
            {study.metrics}
          </p>
        )}
        <div style={{ marginTop: "auto" }}>
          <CardLink href={`/projects/${study.slug}`} label="View case study →" />
        </div>
      </div>
    </div>
  );
}

function ResearchCard({ study }: { study: Project }) {
  return (
    <div id={study.id} className="je-research-card" style={{ padding: "var(--k40-s-5)", scrollMarginTop: "112px" }}>
      <div className="je-card-media je-card-media--research">
        <div className="je-card-media-inner">
          <Image src={study.images.hero} alt={study.title} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
      </div>
      <div className="je-card-brandrow" style={{ marginBottom: "var(--k40-s-2)" }}>
        <span className="je-card-brand">{study.company}</span>
      </div>
      <MethodBadge
        type={study.tag}
        label={"tagLabel" in study ? (study as { tagLabel?: string }).tagLabel : undefined}
      />
      <h3 className="k40-h3" style={{ marginBottom: "var(--k40-s-3)" }}>{study.title}</h3>
      <div style={{
        borderTop: "1px solid var(--k40-border-light)",
        paddingTop: "var(--k40-s-3)",
        marginTop: "var(--k40-s-1)",
      }}>
        <p className="k40-body" style={{ maxWidth: "none" }}>
          {"description" in study && study.description}{" "}
          {"impact" in study && (
            <strong style={{ color: "var(--k40-fg-1)", fontWeight: 500 }}>
              {(study as { impact?: string }).impact}
            </strong>
          )}
        </p>
      </div>
      <a href={`/projects/${study.slug}`} className="je-research-link" style={{ paddingTop: "var(--k40-s-4)", justifySelf: "start" }}>
        View research deck →
      </a>
    </div>
  );
}

function StudioCard({ work }: { work: (typeof studioWork)[number] }) {
  return (
    <div className="je-research-card je-studio-card">
      <div className="je-card-media je-card-media--studio">
        <div className="je-card-media-inner">
          {/* Both sources are pre-cropped to 16:9 (see *-card.png), so cover
              fills the frame exactly without cropping anything further. */}
          <Image
            src={work.image}
            alt={`${work.name} interface`}
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 860px) 100vw, 620px"
          />
        </div>
      </div>

      <div className="je-studio-body">
      <div style={{
        display: "flex", alignItems: "baseline", justifyContent: "space-between",
        gap: "var(--k40-s-3)", marginBottom: "var(--k40-s-3)",
        paddingBottom: "var(--k40-s-3)", borderBottom: "1px solid var(--k40-border-light)",
      }}>
        <span className="k40-eyebrow">{work.domain}</span>
        <span className="k40-eyebrow" style={{ color: "var(--k40-fg-4)", flexShrink: 0 }}>{work.status}</span>
      </div>

      <h3 className="k40-h3" style={{ marginBottom: "var(--k40-s-2)" }}>{work.name}</h3>

      <p className="k40-body" style={{ maxWidth: "none", marginBottom: "var(--k40-s-4)" }}>{work.body}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--k40-s-2)", marginBottom: "var(--k40-s-5)" }}>
        {work.tags.map((tag) => <span key={tag} className="k40-tag">{tag}</span>)}
      </div>

      <div style={{ marginTop: "auto" }}>
        <CardLink href={work.href} label="Visit site →" external />
      </div>
      </div>
    </div>
  );
}

/**
 * `title` takes an array to set its own line breaks. The break point is a
 * typographic decision (always after the "&"), not something to leave to
 * whatever width the viewport happens to be.
 */
function SectionHeader({ title, sub, subHref }: { title: string | string[]; sub: string; subHref?: string }) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <div className="section-label-row">
      <h2 className="section-label-text">
        {lines.map((line, i) => <span key={i} className="section-label-line">{line}</span>)}
      </h2>
      {subHref ? (
        <a href={subHref} className="k40-eyebrow section-label-sub" style={{ color: "var(--k40-fg-3)", textDecoration: "none" }}>
          {sub}
        </a>
      ) : (
        <TypeLine text={sub} className="k40-eyebrow section-label-sub" />
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* Same band/band-inner structure as every section below — pad the outer
          box, cap the inner one. Capping and padding the same element instead
          would inset the hero by --content-pad against the rest of the page. */}
      <section className="band" style={{ paddingTop: "var(--k40-s-9)" }}>
      {/* The aside is a sibling of the whole left column, headline included, so
          it centres against the hero's full height rather than against the
          description alone. */}
      <div className="band-inner hero-row">
          <div className="hero-row-main">

            {/* The real heading, for search engines and screen readers. The
                visible headline states the offer, not the name. */}
            <h1 className="sr-only">
              Joseph Everett Grgic — product designer and UX researcher
            </h1>

            <p className="hero-type">
              <span className="hero-type-line">Data-driven product design</span>
              <span className="hero-type-line is-accent">from research to delivery.</span>
            </p>

            <p
              className="k40-body"
              style={{ maxWidth: "620px", fontSize: "var(--k40-text-md)", marginBottom: "var(--k40-s-7)" }}
            >
              Fourteen years across Google, Meta, McDonald&rsquo;s, Verizon and Allstate &mdash;
              payments, ordering, ads tooling, seller platforms, AI integration. The user,
              the problem space, the business objectives: when those are clear, the best
              design becomes obvious.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "var(--k40-s-3)", flexWrap: "wrap" }}>
              {[
                { href: "/documents/jegrgic_UXResumeEN.pdf", label: "Resume (EN)" },
                { href: "/documents/jegrgic_UXResumeFR.pdf", label: "CV (FR)" },
              ].map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="k40-btn k40-btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/><polyline points="9 9 10 9"/>
                  </svg>
                  {label}
                </a>
              ))}
            </div>

          </div>

          {/* Job titles the field keeps renaming, mixed with three roles that
              aren't titles at all. Also puts the variants a recruiter searches
              on — information architect, content designer — into the page. */}
          <aside className="hero-titles">
            <p className="k40-eyebrow hero-titles-label">Hats I wear</p>
            <ul className="hero-titles-list">
              {jobTitles.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </aside>
      </div>
      </section>

      {/* ── JUMP TO CASE STUDY ───────────────────────────────────────────── */}
      {/* Sits below the hero in the flow and pins under the 56px header once
          the hero scrolls past — so it costs the hero nothing and stays
          reachable for the whole page. Pinning is CSS only, no JS. */}
      <nav className="jump-bar" aria-label="Case studies">
        <div className="jump-bar-inner">
          <p className="k40-eyebrow jump-bar-label">Case studies</p>
          <div className="jump-bar-chips">
            {jumpLinks.map((chip) => (
              <a key={chip.href} href={chip.href} className="jump-chip">{chip.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── STUDIO — VRAIFACTORS (full-bleed, distinct from client work) ──── */}
      <section
        id="vraifactors"
        style={{
          background: "var(--k40-surface-tint)",
          borderTop: "1px solid var(--k40-border-heavy)",
          borderBottom: "1px solid var(--k40-border-heavy)",
          padding: "var(--k40-s-8) var(--content-pad)",
          scrollMarginTop: "112px",
        }}
      >
        <div style={{ maxWidth: "var(--k40-content-max)", margin: "0 auto" }}>

          <SectionHeader
            title={["Studio", "vraifactors"]}
            sub="Founder · Full-stack product design · Human factors"
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--k40-s-4)" }}>
            {studioWork.map((work) => <StudioCard key={work.domain} work={work} />)}
          </div>

        </div>
      </section>

      {/* ── PRODUCT DESIGN ── */}
      <section className="band" id="work" style={{ scrollMarginTop: "112px" }}>
        <div className="band-inner">
          <SectionHeader title={["Product Design &", "Strategy"]} sub="Service blueprinting · Iterative prototyping" />
          <ProductCard study={productDesign[0]} featured />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--k40-s-4)" }} className="je-grid-2">
            {productDesign.slice(1).map((s) => <ProductCard key={s.id} study={s} />)}
          </div>
        </div>
      </section>

      {/* ── UX RESEARCH (full-bleed tinted band) ── */}
      <section className="band band--alt" id="research" style={{ scrollMarginTop: "112px" }}>
        <div className="band-inner">
          <SectionHeader title={["UX Research &", "Behavioral Insights"]} sub="Moderated testing · Cognitive walkthroughs · Benchmarking" />
          <div className="je-research-grid">
            {uxResearch.map((s) => <ResearchCard key={s.id} study={s} />)}
          </div>
        </div>
      </section>

      {/* ── INFORMATION ARCHITECTURE ── */}
      <section className="band" id="architecture" style={{ scrollMarginTop: "112px" }}>
        <div className="band-inner">
          <SectionHeader title={["Information Architecture &", "Complex Tooling"]} sub="Expert-user systems · Cognitive load reduction" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--k40-s-4)" }} className="je-grid-2">
            {iaTooling.map((s) => <ProductCard key={s.id} study={s} />)}
          </div>
        </div>
      </section>

      {/* ── WRITINGS ── */}
      <section className="band band--divided" id="writings" style={{ scrollMarginTop: "112px" }}>
        <div className="band-inner">
          <SectionHeader title={["Writing on AI, Design &", "Human Factors"]} sub="View all ↗" subHref="/writings" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--k40-s-6)" }} className="je-writings-grid">
            {writingThemes.map((theme) => (
              <div key={theme}>
                <p className="k40-eyebrow" style={{
                  marginBottom: "var(--k40-s-3)",
                  paddingBottom: "var(--k40-s-3)",
                  borderBottom: "1px solid var(--k40-border-heavy)",
                }}>
                  {theme}
                </p>
                {articles.filter((a) => a.theme === theme).map((article) => (
                  <a
                    key={article.id}
                    href={article.href}
                    className="je-writing-row"
                    style={{
                      display: "flex", gap: "var(--k40-s-5)",
                      padding: "var(--k40-s-4) var(--k40-s-2)", margin: "0 calc(-1 * var(--k40-s-2))",
                      borderBottom: "1px solid var(--k40-border-light)",
                      textDecoration: "none", color: "inherit",
                      transition: "background var(--k40-motion-quick) var(--k40-ease)",
                    }}
                  >
                    <span className="k40-eyebrow" style={{ color: "var(--k40-fg-4)", whiteSpace: "nowrap", paddingTop: "2px", minWidth: "52px" }}>
                      {article.date}
                    </span>
                    <div>
                      <p className="je-writing-title" style={{
                        fontFamily: "var(--k40-font-body)",
                        fontSize: "var(--k40-text-sm)", fontWeight: 500,
                        color: "var(--k40-fg-1)", lineHeight: 1.4, marginBottom: "var(--k40-s-1)",
                      }}>
                        {article.title}
                      </p>
                      <p className="je-writing-desc" style={{
                        fontFamily: "var(--k40-font-body)",
                        fontSize: "var(--k40-text-xs)",
                        color: "var(--k40-fg-3)", lineHeight: 1.6, margin: 0,
                      }}>
                        {article.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
