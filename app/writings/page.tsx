import articles from "@/data/articles.json";

const themes = ["AI & Agentic Systems", "Human Factors & Cognition", "Design & Dark Patterns"];

export default function Writings() {
  return (
    <div>

      {/* Page header */}
      <section style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-7)",
        borderBottom: "1px solid var(--k40-border-heavy)",
      }}>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.6rem", fontWeight: 700,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--k40-fg-4)", marginBottom: "var(--k40-s-4)",
        }}>
          Writings
        </p>
        <h1 style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--k40-fg-1)",
          marginBottom: "var(--k40-s-4)",
        }}>
          AI, Design &amp; Human Factors
        </h1>
        <p style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "1rem",
          color: "var(--k40-fg-3)",
          lineHeight: 1.7,
          maxWidth: "520px",
        }}>
          Thoughts on trust, cognition, and the ethics of designing systems that shape human behaviour.
        </p>
      </section>

      {/* Articles by theme */}
      <div style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-9)",
      }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--k40-s-7)" }}
          className="je-writings-grid"
        >
          {themes.map((theme) => (
            <div key={theme}>
              <p style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.18em",
                color: "var(--k40-fg-4)",
                marginBottom: "var(--k40-s-3)", paddingBottom: "var(--k40-s-3)",
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
                    display: "flex", gap: "var(--k40-s-3)",
                    padding: "var(--k40-s-4) var(--k40-s-2)", margin: "0 calc(-1 * var(--k40-s-2))",
                    borderBottom: "1px solid var(--k40-border-light)",
                    textDecoration: "none", color: "inherit",
                    transition: "background 150ms ease",
                  }}
                >
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem", color: "var(--k40-fg-4)",
                    whiteSpace: "nowrap", paddingTop: "2px", minWidth: "52px",
                  }}>
                    {article.date}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: "0.825rem", fontWeight: 500,
                      color: "var(--k40-fg-1)", lineHeight: 1.4,
                      marginBottom: "var(--k40-s-1)",
                    }}>
                      {article.title}
                    </p>
                    <p style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: "0.775rem",
                      color: "var(--k40-fg-3)", lineHeight: 1.6,
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

    </div>
  );
}
