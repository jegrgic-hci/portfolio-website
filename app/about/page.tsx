import about from "@/data/about.json";

export default function About() {
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
          About
        </p>
        <h1 style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--k40-fg-1)",
          marginBottom: "var(--k40-s-2)",
        }}>
          {about.name}
        </h1>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.7rem", letterSpacing: "0.1em",
          color: "var(--k40-fg-3)",
        }}>
          {about.title} &nbsp;&middot;&nbsp; {about.location}
        </p>
      </section>

      {/* Content */}
      <div style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-9)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--k40-s-9) var(--k40-s-8)",
        alignItems: "start",
      }}>

        {/* Bio — full width */}
        <section style={{ gridColumn: "span 2" }}>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--k40-fg-4)",
            marginBottom: "var(--k40-s-5)",
            paddingBottom: "var(--k40-s-3)",
            borderBottom: "1px solid var(--k40-border-heavy)",
          }}>
            Bio
          </p>
          <p style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "1.05rem", lineHeight: 1.75,
            color: "var(--k40-fg-3)", maxWidth: "62ch",
            marginBottom: "var(--k40-s-4)",
          }}>
            {about.bio}
          </p>
          <p style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "1.05rem", lineHeight: 1.75,
            color: "var(--k40-fg-3)", maxWidth: "62ch",
          }}>
            {about.currentFocus}
          </p>
        </section>

        {/* Approach */}
        <section>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--k40-fg-4)",
            marginBottom: "var(--k40-s-5)",
            paddingBottom: "var(--k40-s-3)",
            borderBottom: "1px solid var(--k40-border-heavy)",
          }}>
            Approach
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--k40-s-4)" }}>
            {about.threePillars.map((pillar, idx) => (
              <li key={idx} style={{ display: "flex", gap: "var(--k40-s-4)", alignItems: "flex-start" }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem", fontWeight: 700,
                  color: "var(--k40-accent-rail)",
                  paddingTop: "4px", flexShrink: 0,
                }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "0.9rem", lineHeight: 1.65,
                  color: "var(--k40-fg-3)",
                }}>
                  {pillar}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Expertise */}
        <section>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--k40-fg-4)",
            marginBottom: "var(--k40-s-5)",
            paddingBottom: "var(--k40-s-3)",
            borderBottom: "1px solid var(--k40-border-heavy)",
          }}>
            Expertise
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--k40-s-2)" }}>
            {about.expertise.map((skill, idx) => (
              <span key={idx} style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.65rem", fontWeight: 500,
                letterSpacing: "0.08em",
                color: "var(--k40-fg-3)",
                border: "1px solid var(--k40-border-mid)",
                background: "var(--k40-bg)",
                padding: "var(--k40-s-2) var(--k40-s-3)",
              }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--k40-fg-4)",
            marginBottom: "var(--k40-s-5)",
            paddingBottom: "var(--k40-s-3)",
            borderBottom: "1px solid var(--k40-border-heavy)",
          }}>
            Experience
          </p>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.7rem", color: "var(--k40-fg-3)",
            letterSpacing: "0.06em",
            marginBottom: "var(--k40-s-4)",
          }}>
            <strong style={{ color: "var(--k40-fg-1)" }}>{about.experience}</strong> working with:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--k40-s-2)" }}>
            {about.companies.map((company, idx) => (
              <span key={idx} style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.65rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--k40-fg-1)",
                border: "1px solid var(--k40-border-heavy)",
                padding: "var(--k40-s-2) var(--k40-s-3)",
              }}>
                {company}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={{ gridColumn: "span 2" }}>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--k40-fg-4)",
            marginBottom: "var(--k40-s-5)",
            paddingBottom: "var(--k40-s-3)",
            borderBottom: "1px solid var(--k40-border-heavy)",
          }}>
            Education &amp; Background
          </p>
          <div style={{ borderLeft: "4px solid var(--k40-accent-rail)", paddingLeft: "var(--k40-s-5)" }}>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--k40-fg-1)", marginBottom: "var(--k40-s-2)",
            }}>
              M.S. in Human Factors
            </p>
            <p style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "0.875rem", lineHeight: 1.65,
              color: "var(--k40-fg-3)",
            }}>
              Masters degree focusing on cognitive psychology and human-computer interaction.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
