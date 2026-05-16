import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import projects from "@/data/projects.json";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found | Joseph Grgic" };
  return {
    title: `${project.title} | Joseph Grgic`,
    description: project.description,
  };
}

const sectionLabelStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "0.6rem", fontWeight: 700,
  textTransform: "uppercase", letterSpacing: "0.2em",
  color: "var(--k-text-muted)",
  marginBottom: "var(--s-5)", paddingBottom: "var(--s-3)",
  borderBottom: "1px solid var(--k-border-heavy)",
};

const calloutStyle: React.CSSProperties = {
  background: "var(--k-bg)",
  border: "1px solid var(--k-border-light)",
  borderLeft: "4px solid var(--k-teal)",
  padding: "var(--s-6)",
  marginBottom: "var(--s-8)",
};

const bodyTextStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "0.9rem", lineHeight: 1.75,
  color: "var(--k-text-secondary)",
  margin: 0,
};

const listStyle: React.CSSProperties = {
  margin: 0, paddingLeft: "var(--s-5)",
  display: "flex", flexDirection: "column" as const, gap: "var(--s-3)",
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div style={{ padding: "var(--s-8)", textAlign: "center" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", color: "var(--k-text-muted)" }}>
          Project &quot;{params.slug}&quot; not found.
        </p>
      </div>
    );
  }

  const customProject = project as any;

  /* ── Shared page header (used for both paths) ─────────────────── */
  const pageHeader = (
    <section style={{
      maxWidth: "var(--content-max)", margin: "0 auto",
      padding: "var(--s-8) var(--content-pad) var(--s-7)",
      borderBottom: "1px solid var(--k-border-heavy)",
    }}>
      <Link href="/work" style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.6rem", fontWeight: 700,
        letterSpacing: "0.15em", textTransform: "uppercase",
        color: "var(--k-text-muted)", textDecoration: "none",
        display: "inline-flex", alignItems: "center", gap: "var(--s-2)",
        marginBottom: "var(--s-5)",
      }}>
        ← Work
      </Link>
      <p style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.6rem", fontWeight: 700,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "var(--k-text-muted)", marginBottom: "var(--s-3)",
      }}>
        {project.company}
      </p>
      <h1 style={{
        fontFamily: "Impact, 'Arial Black', sans-serif",
        fontSize: "clamp(28px, 4vw, 52px)",
        fontWeight: 400,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--k-text-primary)",
        marginBottom: "var(--s-4)",
      }}>
        {project.title}
      </h1>
      <p style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: "1rem", lineHeight: 1.65,
        color: "var(--k-text-secondary)",
        maxWidth: "560px", marginBottom: "var(--s-5)",
      }}>
        {project.description}
      </p>
      {project.tags && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-2)" }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--k-text-secondary)",
              border: "1px solid var(--k-border-mid)",
              background: "var(--k-bg)",
              padding: "var(--s-1) var(--s-3)",
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </section>
  );

  /* ── iframeUrl path: full-page iframe for interactive React apps ──── */
  if ((project as any).contentType === 'iframe' && project.contentUrl) {
    return (
      <iframe
        src={project.contentUrl}
        style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
        title={project.title}
      />
    );
  }

  /* ── contentUrl path: injected HTML with Kronos overrides ────────── */
  if (project.contentUrl) {
    const htmlPath = path.join(
      process.cwd(),
      "public",
      project.contentUrl.startsWith("/") ? project.contentUrl.slice(1) : project.contentUrl
    );

    try {
      const htmlContent = fs.readFileSync(htmlPath, "utf-8");

      // Extract <style> blocks from <head> so CSS is preserved
      const styleMatches = htmlContent.match(/<style[^>]*>[\s\S]*?<\/style>/gi) ?? [];
      const headStyles = styleMatches.join("\n");

      // Extract only the <body> content to avoid injecting a full HTML document into a div
      const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

      const kronosOverride = `<style>
        #footer { display: none !important; }
        #site-nav { display: none !important; }
      </style>`;

      return (
        <div suppressHydrationWarning>
          <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: headStyles + bodyContent + kronosOverride }} />
        </div>
      );
    } catch (error) {
      console.error(`Failed to load HTML for ${params.slug}:`, error);
    }
  }

  /* ── React layout path ─────────────────────────────────────────── */
  return (
    <div style={{}}>

      {pageHeader}

      {/* Meta strip — role / duration / tools / process */}
      {(customProject.role || customProject.duration || customProject.tools || customProject.process) && (
        <div style={{
          background: "var(--k-text-primary)",
          padding: "var(--s-7) var(--content-pad)",
        }}>
          <div style={{
            maxWidth: "var(--content-max)", margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "var(--s-7)",
          }}>
            {[
              { label: "Role", value: customProject.role },
              { label: "Duration", value: customProject.duration },
              { label: "Tools", value: Array.isArray(customProject.tools) ? customProject.tools.join(" · ") : customProject.tools },
              { label: "Process", value: Array.isArray(customProject.process) ? customProject.process.join(" · ") : customProject.process },
            ].filter((m) => m.value).map(({ label, value }) => (
              <div key={label}>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.55rem", fontWeight: 700,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "var(--s-2)",
                }}>
                  {label}
                </p>
                <p style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "0.85rem", lineHeight: 1.5,
                  color: "rgba(255,255,255,0.88)",
                  margin: 0,
                }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hero image */}
      {project.images.hero && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={project.images.hero}
          alt={project.title}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      )}

      {/* Main content */}
      <div style={{
        maxWidth: "var(--content-max)", margin: "0 auto",
        padding: "var(--s-8) var(--content-pad) var(--s-9)",
      }}>

        {/* Summary */}
        {customProject.summary && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Summary</p>
            <p style={{ ...bodyTextStyle, fontSize: "1rem", lineHeight: 1.8 }}>
              {customProject.summary}
            </p>
          </section>
        )}

        {/* Metrics */}
        {project.metrics && (
          <div style={{
            ...calloutStyle,
            borderLeft: `4px solid var(--k-teal)`,
          }}>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--k-text-muted)", marginBottom: "var(--s-3)",
            }}>
              Key Results
            </p>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.85rem", lineHeight: 1.7,
              color: "var(--k-text-primary)", margin: 0,
            }}>
              {project.metrics}
            </p>
          </div>
        )}

        {/* Key Outcomes */}
        {customProject.keyOutcomes && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Key Outcomes</p>
            <ul style={listStyle}>
              {customProject.keyOutcomes.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Business Challenge */}
        {customProject.businessChallenges && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Business Challenge</p>
            <ul style={listStyle}>
              {customProject.businessChallenges.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* User Pain Points + UX Goal — 2 col */}
        {(customProject.userPainPoints || customProject.uxGoal) && (
          <div style={{
            display: "grid",
            gridTemplateColumns: customProject.userPainPoints && customProject.uxGoal ? "1fr 1fr" : "1fr",
            gap: "var(--s-6)",
            marginBottom: "var(--s-9)",
          }}>
            {customProject.userPainPoints && (
              <div style={calloutStyle}>
                <p style={sectionLabelStyle}>User Pain Points</p>
                <ul style={listStyle}>
                  {customProject.userPainPoints.map((item: string, i: number) => (
                    <li key={i} style={bodyTextStyle}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {customProject.uxGoal && (
              <div style={calloutStyle}>
                <p style={sectionLabelStyle}>UX Goal</p>
                <p style={bodyTextStyle}>{customProject.uxGoal}</p>
              </div>
            )}
          </div>
        )}

        {/* Research Methods */}
        {customProject.methodsUsed && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Research Methods</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-5)" }}>
              {Object.entries(customProject.methodsUsed).map(([key, value]: [string, any], i: number) => {
                const labels: Record<string, string> = {
                  competitiveAudit: "Competitive Audit",
                  technicalWorkshops: "Technical Workshops",
                  technicalGuidelines: "Technical Guidelines",
                };
                return (
                  <div key={i} style={{ display: "flex", gap: "var(--s-5)", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.6rem", fontWeight: 700,
                      color: "var(--k-teal)",
                      paddingTop: "3px", flexShrink: 0,
                      textTransform: "uppercase", letterSpacing: "0.12em",
                      minWidth: "160px",
                    }}>
                      {labels[key] || key}
                    </span>
                    <p style={bodyTextStyle}>{value}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Scope Refinement */}
        {customProject.scopeRefinement && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Scope Refinement</p>
            <ul style={listStyle}>
              {customProject.scopeRefinement.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Insight callout */}
        {customProject.keyInsight && (
          <div style={{
            ...calloutStyle,
            background: `color-mix(in srgb, var(--k-teal) 6%, var(--k-bg))`,
          }}>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--k-teal)", marginBottom: "var(--s-3)",
            }}>
              Key Insight
            </p>
            <p style={{ ...bodyTextStyle, color: "var(--k-text-primary)" }}>
              {customProject.keyInsight}
            </p>
          </div>
        )}

        {/* Featured images */}
        {project.images.featured && project.images.featured.length > 0 && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Designs</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-4)" }}>
              {project.images.featured.map((src, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} — design ${i + 1}`}
                  style={{ width: "100%", height: "auto", display: "block", border: "1px solid var(--k-border-light)" }}
                />
              ))}
            </div>
          </section>
        )}

        {/* Iterations */}
        {customProject.iterations && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Design Iterations</p>
            <ul style={listStyle}>
              {customProject.iterations.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Technical Collaboration */}
        {customProject.technicalCollaboration && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Technical Collaboration</p>
            <p style={bodyTextStyle}>{customProject.technicalCollaboration}</p>
          </section>
        )}

        {/* Quantitative Results */}
        {customProject.quantitativeResults && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Quantitative Results</p>
            <ul style={listStyle}>
              {customProject.quantitativeResults.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Strategic Impact */}
        {customProject.strategicImpact && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Strategic Impact</p>
            <ul style={listStyle}>
              {customProject.strategicImpact.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Leadership */}
        {customProject.leadership && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Leadership &amp; Mentorship</p>
            <ul style={listStyle}>
              {customProject.leadership.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Takeaways */}
        {customProject.keyTakeaways && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Key Takeaways</p>
            <ul style={listStyle}>
              {customProject.keyTakeaways.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Future Roadmap */}
        {customProject.futureRoadmap && (
          <section style={{ marginBottom: "var(--s-9)" }}>
            <p style={sectionLabelStyle}>Future Roadmap</p>
            <ul style={listStyle}>
              {customProject.futureRoadmap.map((item: string, i: number) => (
                <li key={i} style={bodyTextStyle}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Overall Impact */}
        {project.impact && (
          <div style={{
            ...calloutStyle,
            background: `color-mix(in srgb, var(--k-teal) 6%, var(--k-bg))`,
          }}>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--k-teal)", marginBottom: "var(--s-3)",
            }}>
              Overall Impact
            </p>
            <p style={{ ...bodyTextStyle, color: "var(--k-text-primary)" }}>
              {project.impact}
            </p>
          </div>
        )}

        {/* Back link */}
        <div style={{ borderTop: "1px solid var(--k-border-light)", paddingTop: "var(--s-7)" }}>
          <Link href="/work" style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.7rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--k-text-primary)",
            textDecoration: "none",
            border: "1px solid var(--k-border-heavy)",
            padding: "var(--s-3) var(--s-5)",
            display: "inline-block",
          }}>
            ← Back to Work
          </Link>
        </div>

      </div>
    </div>
  );
}
