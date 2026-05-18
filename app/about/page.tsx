import about from "@/data/about.json";

const sectionLabel = { marginBottom: "var(--k40-s-5)", paddingBottom: "var(--k40-s-3)", borderBottom: "1px solid var(--k40-border-heavy)" };

export default function About() {
  return (
    <div>

      {/* Page header */}
      <section style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-7)",
        borderBottom: "1px solid var(--k40-border-heavy)",
      }}>
        <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-4)" }}>About</p>
        <h1 className="k40-display" style={{ marginBottom: "var(--k40-s-2)" }}>{about.name}</h1>
        <p className="k40-eyebrow" style={{ color: "var(--k40-fg-3)" }}>
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
          <p className="k40-eyebrow" style={sectionLabel}>Bio</p>
          <p className="k40-body-long" style={{ marginBottom: "var(--k40-s-4)" }}>{about.bio}</p>
          <p className="k40-body-long">{about.currentFocus}</p>
        </section>

        {/* Approach */}
        <section>
          <p className="k40-eyebrow" style={sectionLabel}>Approach</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--k40-s-4)" }}>
            {about.threePillars.map((pillar, idx) => (
              <li key={idx} style={{ display: "flex", gap: "var(--k40-s-4)", alignItems: "flex-start" }}>
                <span className="k40-eyebrow is-accent" style={{ paddingTop: "4px", flexShrink: 0 }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="k40-body" style={{ maxWidth: "none" }}>{pillar}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Expertise */}
        <section>
          <p className="k40-eyebrow" style={sectionLabel}>Expertise</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--k40-s-2)" }}>
            {about.expertise.map((skill, idx) => (
              <span key={idx} className="k40-tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <p className="k40-eyebrow" style={sectionLabel}>Experience</p>
          <p style={{
            fontFamily: "var(--k40-font-ui)",
            fontSize: "var(--k40-text-xs)", color: "var(--k40-fg-3)",
            letterSpacing: "var(--k40-track-ui)",
            marginBottom: "var(--k40-s-4)",
          }}>
            <strong style={{ color: "var(--k40-fg-1)" }}>{about.experience}</strong> working with:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--k40-s-2)" }}>
            {about.companies.map((company, idx) => (
              <span key={idx} className="k40-tag">{company}</span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={{ gridColumn: "span 2" }}>
          <p className="k40-eyebrow" style={sectionLabel}>Education &amp; Background</p>
          <div className="k40-callout is-finding">
            <span className="k40-callout-label">M.S. in Human Factors</span>
            <p className="k40-callout-body">
              Masters degree focusing on cognitive psychology and human-computer interaction.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
