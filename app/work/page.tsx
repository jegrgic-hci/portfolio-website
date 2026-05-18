import Image from "next/image";
import Link from "next/link";
import caseStudies from "@/data/case-studies.json";

export default function Work() {
  const sections = [
    {
      id: "product-design",
      title: "Product Design & Strategy",
      sub: "Service blueprinting · Iterative prototyping",
      studies: caseStudies.filter((s) => s.category === "product-design"),
    },
    {
      id: "ux-research",
      title: "UX Research & Behavioral Insights",
      sub: "Moderated testing · Cognitive walkthroughs · Benchmarking",
      studies: caseStudies.filter((s) => s.category === "ux-research"),
    },
    {
      id: "ia-tooling",
      title: "Information Architecture & Complex Tooling",
      sub: "Expert-user systems · Cognitive load reduction",
      studies: caseStudies.filter((s) => s.category === "ia-tooling"),
    },
  ];

  return (
    <div>

      {/* Page header */}
      <section style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-7)",
        borderBottom: "1px solid var(--k40-border-heavy)",
      }}>
        <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-4)" }}>Portfolio</p>
        <h1 className="k40-display" style={{ marginBottom: "var(--k40-s-4)" }}>Case Studies</h1>
        <p className="k40-body" style={{ maxWidth: "520px" }}>
          A selection of recent projects demonstrating human-centered design methodology,
          behavioral research, and information architecture.
        </p>
      </section>

      {/* Sections */}
      <div style={{ maxWidth: "var(--k40-content-max)", margin: "0 auto", padding: "0 var(--content-pad)" }}>
        {sections.map((section) => (
          <section key={section.id} style={{ padding: "var(--k40-s-8) 0", borderTop: "1px solid var(--k40-border-light)" }}>

            <div className="section-label-row">
              <span className="section-label-text">{section.title}</span>
              <span className="k40-eyebrow" style={{ color: "var(--k40-fg-4)", flexShrink: 0 }}>{section.sub}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--k40-s-4)" }} className="je-grid-2">
              {section.studies.map((study) => (
                <a
                  key={study.id}
                  href={study.href}
                  id={study.id}
                  className="je-card"
                  style={{
                    background: "var(--k40-surface)",
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    scrollMarginTop: "24px",
                  }}
                >
                  <div style={{ position: "relative", height: "210px" }}>
                    <Image src={study.image} alt={study.title} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                  </div>
                  <div style={{ padding: "var(--k40-s-5)" }}>
                    <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-2)" }}>{study.company}</p>
                    <h3 className="k40-h3" style={{ marginBottom: "var(--k40-s-3)" }}>{study.title}</h3>
                    <p className="k40-body" style={{ maxWidth: "none", marginBottom: "var(--k40-s-4)" }}>{study.description}</p>
                    {"metrics" in study && study.metrics && (
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
                    <span className="je-card-link">{study.linkLabel}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        borderTop: "1px solid var(--k40-border-light)",
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-9)",
        textAlign: "center",
      }}>
        <p className="k40-body" style={{ marginBottom: "var(--k40-s-5)" }}>
          Interested in working together?
        </p>
        <Link href="/contact" className="k40-btn k40-btn-primary">Get in touch</Link>
      </div>

    </div>
  );
}
