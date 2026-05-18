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
        <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-4)" }}>Writings</p>
        <h1 className="k40-display" style={{ marginBottom: "var(--k40-s-4)" }}>AI, Design &amp; Human Factors</h1>
        <p className="k40-body" style={{ maxWidth: "520px" }}>
          Thoughts on trust, cognition, and the ethics of designing systems that shape human behaviour.
        </p>
      </section>

      {/* Articles by theme */}
      <div style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-9)",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--k40-s-7)" }} className="je-writings-grid">
          {themes.map((theme) => (
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
                    display: "flex", gap: "var(--k40-s-3)",
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
                    <p style={{
                      fontFamily: "var(--k40-font-body)",
                      fontSize: "var(--k40-text-sm)", fontWeight: 500,
                      color: "var(--k40-fg-1)", lineHeight: 1.4, marginBottom: "var(--k40-s-1)",
                    }}>
                      {article.title}
                    </p>
                    <p style={{
                      fontFamily: "var(--k40-font-body)",
                      fontSize: "var(--k40-text-xs)",
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
