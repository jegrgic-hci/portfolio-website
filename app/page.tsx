import Image from "next/image";
import projects from "@/data/projects.json";
import articles from "@/data/articles.json";

type Project = (typeof projects)[number];

const productDesign = projects.filter((s) => s.category === "product-design");
const uxResearch    = projects.filter((s) => s.category === "ux-research");
const iaTooling     = projects.filter((s) => s.category === "ia-tooling");

const writingThemes = [
  "AI & Agentic Systems",
  "Human Factors & Cognition",
  "Design & Dark Patterns",
];

const chipLinks = [
  { label: "Allstate",               href: "#allstate" },
  { label: "McDonald's",             href: "#mcdonalds" },
  { label: "Verizon",                href: "#verizon" },
  { label: "Meta SFI",               href: "#meta-sfi" },
  { label: "Meta Commerce Manager",  href: "#meta-benchmark" },
  { label: "Google Hedwig",          href: "#google-hedwig" },
  { label: "Google Editor",          href: "#google-editor" },
  { label: "Cigna",                  href: "#cigna" },
  { label: "AI Articles",            href: "#writings" },
];

// ── Sub-components ────────────────────────────────────────────────────────

function Tag({ type }: { type: string }) {
  const labels: Record<string, string> = {
    both:   "Design + Research",
    design: "Design",
  };
  const label = labels[type];
  if (!label) return null;
  return (
    <span style={{
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: "0.6rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      border: "1px solid var(--k-teal)",
      color: "var(--k-teal-dark)",
      background: "rgba(122,147,147,0.08)",
      padding: "2px 8px",
    }}>
      {label}
    </span>
  );
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
    <span style={{
      fontFamily: "'IBM Plex Mono', monospace",
      display: "inline-block",
      fontSize: "0.6rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      border: "1px solid var(--k-border-mid)",
      color: "var(--k-text-secondary)",
      padding: "2px 8px",
      marginBottom: "var(--s-3)",
    }}>
      {text}
    </span>
  );
}

function CardLink({ label }: { label: string }) {
  return (
    <span className="je-card-link">
      {label}
    </span>
  );
}

function ProductCard({ study, featured }: { study: Project; featured?: boolean }) {
  const cardBase = {
    background: "var(--k-surface)",
    textDecoration: "none",
    color: "inherit",
    display: featured ? "grid" : "block",
    scrollMarginTop: "24px",
  };

  const imageStyle: React.CSSProperties = featured
    ? { position: "relative", minHeight: "240px" }
    : { position: "relative", height: "210px" };

  return (
    <a
      href={`/projects/${study.slug}`}
      id={study.id}
      className="je-card"
      style={{
        ...cardBase,
        ...(featured && { gridTemplateColumns: "1fr 1fr", overflow: "hidden", marginBottom: "var(--s-4)" }),
      }}
    >
      <div style={imageStyle}>
        <Image
          src={study.images.hero}
          alt={study.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
      <div style={{ padding: "var(--s-5) var(--s-5) var(--s-5)" }}>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.6rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "var(--k-text-secondary)",
          marginBottom: "var(--s-2)",
          display: "flex",
          alignItems: "center",
          gap: "var(--s-2)",
        }}>
          {study.company} <Tag type={study.tag} />
        </p>
        <h3 style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "var(--k-text-primary)",
          lineHeight: 1.35,
          marginBottom: "var(--s-3)",
        }}>
          {study.title}
        </h3>
        <p style={{
          fontSize: "0.8rem",
          color: "var(--k-text-secondary)",
          lineHeight: 1.7,
          marginBottom: "var(--s-4)",
        }}>
          {study.description}
        </p>
        {study.metrics && (
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--k-text-primary)",
            borderLeft: "3px solid var(--k-teal)",
            paddingLeft: "var(--s-3)",
            marginBottom: "var(--s-3)",
            lineHeight: 1.5,
          }}>
            {study.metrics}
          </p>
        )}
        <CardLink label="View case study →" />
      </div>
    </a>
  );
}

function ResearchCard({ study }: { study: Project }) {
  return (
    <div
      id={study.id}
      className="je-research-card"
      style={{ padding: "var(--s-5)", scrollMarginTop: "24px" }}
    >
      <div style={{
        position: "relative", width: "100%", height: "120px",
        overflow: "hidden", marginBottom: "var(--s-4)",
      }}>
        <Image
          src={study.images.hero}
          alt={study.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
      <MethodBadge
        type={study.tag}
        label={"tagLabel" in study ? (study as { tagLabel?: string }).tagLabel : undefined}
      />
      <p style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: "0.875rem",
        fontWeight: 500,
        color: "var(--k-text-primary)",
        marginBottom: "var(--s-1)",
        lineHeight: 1.35,
      }}>
        {study.title}
      </p>
      <p style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.6rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "var(--k-text-secondary)",
        marginBottom: "var(--s-3)",
      }}>
        {study.company}
      </p>
      <div style={{
        fontSize: "0.8rem",
        color: "var(--k-text-secondary)",
        lineHeight: 1.65,
        borderTop: "1px solid var(--k-border-light)",
        paddingTop: "var(--s-3)",
        marginTop: "var(--s-1)",
      }}>
        {"description" in study && study.description}{" "}
        {"impact" in study && (
          <strong style={{ color: "var(--k-text-primary)", fontWeight: 500 }}>
            {(study as { impact?: string }).impact}
          </strong>
        )}
      </div>
      <a href={`/projects/${study.slug}`} className="je-research-link"
        style={{ marginTop: "var(--s-4)" }}>
        View research deck →
      </a>
    </div>
  );
}

function SectionHeader({ title, sub, subHref }: { title: string; sub: string; subHref?: string }) {
  return (
    <div className="section-label-row">
      <span className="section-label-text">{title}</span>
      {subHref ? (
        <a href={subHref} style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.08em",
          color: "var(--k-text-secondary)",
          textDecoration: "none",
          flexShrink: 0,
        }}>
          {sub}
        </a>
      ) : (
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.08em",
          color: "var(--k-text-muted)",
          flexShrink: 0,
        }}>
          {sub}
        </span>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        maxWidth: "var(--content-max)", margin: "0 auto",
        padding: "var(--s-9) var(--content-pad) var(--s-8)",
      }}>

        {/* Meta label */}
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--k-text-secondary)",
          marginBottom: "var(--s-6)",
        }}>
          Senior UX Designer &amp; Researcher &nbsp;&middot;&nbsp; M.S. Human Factors &nbsp;&middot;&nbsp; 14 years &nbsp;&middot;&nbsp; Marseille
        </p>

        {/* H1 — Impact display */}
        <h1 style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: "clamp(48px, 7vw, 88px)",
          fontWeight: 400,
          lineHeight: 1.0,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--k-text-primary)",
          marginBottom: "var(--s-6)",
          maxWidth: "820px",
        }}>
          Designing systems<br />people trust.
        </h1>

        {/* Subheading */}
        <p style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "1rem",
          lineHeight: 1.75,
          color: "var(--k-text-secondary)",
          maxWidth: "520px",
          marginBottom: "var(--s-7)",
        }}>
          I apply human factors methodology to the full design cycle &mdash; research,
          architecture, and interaction design &mdash; for teams building complex digital
          systems at scale.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap", marginBottom: "var(--s-8)" }}>
          <a
            href="mailto:jegrgic@gmail.com"
            className="hero-btn-cta"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              display: "inline-flex", alignItems: "center", gap: "var(--s-2)",
              background: "var(--k-text-primary)", color: "var(--k-surface)",
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "var(--s-3) var(--s-5)",
              border: "1px solid var(--k-text-primary)",
              textDecoration: "none",
              transition: "all 150ms ease",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            Get in touch
          </a>
          {[
            { href: "/documents/jegrgic_UXResumeEN.pdf", label: "Resume (EN)" },
            { href: "/documents/jegrgic_UXResumeFR.pdf", label: "CV (FR)" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                display: "inline-flex", alignItems: "center", gap: "var(--s-2)",
                background: "transparent", color: "var(--k-text-primary)",
                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "var(--s-3) var(--s-5)",
                border: "1px solid var(--k-border-heavy)",
                textDecoration: "none",
                transition: "all 150ms ease",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/><polyline points="9 9 10 9"/>
              </svg>
              {label}
            </a>
          ))}
        </div>

        {/* Quick-nav chips */}
        <div>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--k-text-muted)", marginBottom: "var(--s-3)",
          }}>
            Jump to case study
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2)" }}>
            {chipLinks.map((chip) => (
              <a
                key={chip.href}
                href={chip.href}
                className="hero-chip"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  display: "inline-block",
                  fontSize: "0.65rem", fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "var(--k-text-secondary)",
                  background: "var(--k-bg)",
                  border: "1px solid var(--k-border-mid)",
                  padding: "var(--s-2) var(--s-4)",
                  textDecoration: "none",
                  transition: "all 150ms ease",
                }}
              >
                {chip.label}
              </a>
            ))}
          </div>
        </div>

      </section>

      {/* ── CONTENT WRAPPER ──────────────────────────────────────────────── */}
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--content-pad)" }}>

        {/* ── PRODUCT DESIGN ── */}
        <section style={{ padding: "var(--s-8) 0", borderTop: "1px solid var(--k-border-light)" }} id="work">
          <SectionHeader
            title="Product Design & Strategy"
            sub="Service blueprinting · Iterative prototyping"
          />
          <ProductCard study={productDesign[0]} featured />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }} className="je-grid-2">
            {productDesign.slice(1).map((s) => <ProductCard key={s.id} study={s} />)}
          </div>
        </section>

        {/* ── UX RESEARCH ── */}
        <section style={{ padding: "var(--s-8) 0", borderTop: "1px solid var(--k-border-light)" }}>
          <SectionHeader
            title="UX Research & Behavioral Insights"
            sub="Moderated testing · Cognitive walkthroughs · Benchmarking"
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--s-4)" }} className="je-research-grid">
            {uxResearch.map((s) => <ResearchCard key={s.id} study={s} />)}
          </div>
        </section>

        {/* ── INFORMATION ARCHITECTURE ── */}
        <section style={{ padding: "var(--s-8) 0", borderTop: "1px solid var(--k-border-light)" }}>
          <SectionHeader
            title="Information Architecture & Complex Tooling"
            sub="Expert-user systems · Cognitive load reduction"
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }} className="je-grid-2">
            {iaTooling.map((s) => <ProductCard key={s.id} study={s} />)}
          </div>
        </section>

        {/* ── WRITINGS ── */}
        <section
          style={{ padding: "var(--s-8) 0", borderTop: "1px solid var(--k-border-light)", scrollMarginTop: "24px" }}
          id="writings"
        >
          <SectionHeader
            title="Writing on AI, Design & Human Factors"
            sub="View all ↗"
            subHref="/writings"
          />
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--s-6)" }}
            className="je-writings-grid"
          >
            {writingThemes.map((theme) => (
              <div key={theme}>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.18em",
                  color: "var(--k-text-muted)",
                  marginBottom: "var(--s-3)", paddingBottom: "var(--s-3)",
                  borderBottom: "1px solid var(--k-border-heavy)",
                }}>
                  {theme}
                </p>
                {articles.filter((a) => a.theme === theme).map((article) => (
                  <a
                    key={article.id}
                    href={article.href}
                    className="je-writing-row"
                    style={{
                      display: "flex", gap: "var(--s-3)",
                      padding: "var(--s-4) var(--s-2)", margin: "0 calc(-1 * var(--s-2))",
                      borderBottom: "1px solid var(--k-border-light)",
                      textDecoration: "none", color: "inherit",
                      transition: "background 150ms ease",
                    }}
                  >
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem", color: "var(--k-text-muted)",
                      whiteSpace: "nowrap", paddingTop: "2px", minWidth: "52px",
                    }}>
                      {article.date}
                    </span>
                    <div>
                      <p style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        fontSize: "0.825rem", fontWeight: 500,
                        color: "var(--k-text-primary)", lineHeight: 1.4, marginBottom: "var(--s-1)",
                      }}>
                        {article.title}
                      </p>
                      <p style={{
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        fontSize: "0.775rem",
                        color: "var(--k-text-secondary)", lineHeight: 1.6,
                      }}>
                        {article.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
