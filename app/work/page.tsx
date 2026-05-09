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
        maxWidth: "var(--content-max)", margin: "0 auto",
        padding: "var(--s-8) var(--content-pad) var(--s-7)",
        borderBottom: "1px solid var(--k-border-heavy)",
      }}>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.6rem", fontWeight: 700,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--k-text-muted)", marginBottom: "var(--s-4)",
        }}>
          Portfolio
        </p>
        <h1 style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--k-text-primary)",
          marginBottom: "var(--s-4)",
        }}>
          Case Studies
        </h1>
        <p style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "1rem",
          color: "var(--k-text-secondary)",
          lineHeight: 1.7,
          maxWidth: "520px",
        }}>
          A selection of recent projects demonstrating human-centered design methodology,
          behavioral research, and information architecture.
        </p>
      </section>

      {/* Sections */}
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "0 var(--content-pad)" }}>
        {sections.map((section) => (
          <section key={section.id} style={{ padding: "var(--s-8) 0", borderTop: "1px solid var(--k-border-light)" }}>

            <div className="section-label-row">
              <span className="section-label-text">{section.title}</span>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.65rem", letterSpacing: "0.08em",
                color: "var(--k-text-muted)", flexShrink: 0,
              }}>
                {section.sub}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-4)" }} className="je-grid-2">
              {section.studies.map((study) => (
                <a
                  key={study.id}
                  href={study.href}
                  id={study.id}
                  className="je-card"
                  style={{
                    background: "var(--k-surface)",
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    scrollMarginTop: "24px",
                  }}
                >
                  <div style={{ position: "relative", height: "210px" }}>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  </div>
                  <div style={{ padding: "var(--s-5)" }}>
                    <p style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.15em",
                      color: "var(--k-text-secondary)", marginBottom: "var(--s-2)",
                    }}>
                      {study.company}
                    </p>
                    <h3 style={{
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontSize: "0.95rem", fontWeight: 600,
                      color: "var(--k-text-primary)", lineHeight: 1.35,
                      marginBottom: "var(--s-3)",
                    }}>
                      {study.title}
                    </h3>
                    <p style={{
                      fontSize: "0.8rem",
                      color: "var(--k-text-secondary)",
                      lineHeight: 1.7, marginBottom: "var(--s-4)",
                    }}>
                      {study.description}
                    </p>
                    {"metrics" in study && study.metrics && (
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
        borderTop: "1px solid var(--k-border-light)",
        maxWidth: "var(--content-max)", margin: "0 auto",
        padding: "var(--s-8) var(--content-pad) var(--s-9)",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "1rem",
          color: "var(--k-text-secondary)",
          marginBottom: "var(--s-5)",
        }}>
          Interested in working together?
        </p>
        <Link href="/contact" style={{
          fontFamily: "'IBM Plex Mono', monospace",
          display: "inline-block",
          background: "var(--k-text-primary)", color: "var(--k-surface)",
          fontSize: "0.7rem", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "var(--s-3) var(--s-6)",
          textDecoration: "none",
          border: "1px solid var(--k-text-primary)",
          transition: "background 150ms ease",
        }}>
          Get in touch
        </Link>
      </div>

    </div>
  );
}
