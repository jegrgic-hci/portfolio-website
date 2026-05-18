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

const sectionLabel = { marginBottom: "var(--k40-s-5)", paddingBottom: "var(--k40-s-3)", borderBottom: "1px solid var(--k40-border-heavy)" };
const listStyle: React.CSSProperties = { margin: 0, paddingLeft: "var(--k40-s-5)", display: "flex", flexDirection: "column", gap: "var(--k40-s-3)" };

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div style={{ padding: "var(--k40-s-8)", textAlign: "center" }}>
        <p className="k40-eyebrow">Project &quot;{params.slug}&quot; not found.</p>
      </div>
    );
  }

  const customProject = project as any;

  /* ── Shared page header ───────────────────────────────────────── */
  const pageHeader = (
    <section style={{
      maxWidth: "var(--k40-content-max)", margin: "0 auto",
      padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-7)",
      borderBottom: "1px solid var(--k40-border-heavy)",
    }}>
      <Link href="/work" className="k40-btn k40-btn-ghost" style={{ marginBottom: "var(--k40-s-5)", display: "inline-flex", alignItems: "center", gap: "var(--k40-s-2)" }}>
        ← Work
      </Link>
      <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-3)" }}>{project.company}</p>
      <h1 style={{
        fontFamily: "var(--k40-font-display)",
        fontSize: "clamp(28px, 4vw, 52px)",
        fontWeight: 400,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--k40-fg-1)",
        marginBottom: "var(--k40-s-4)",
      }}>
        {project.title}
      </h1>
      <p className="k40-body" style={{ maxWidth: "560px", marginBottom: "var(--k40-s-5)" }}>
        {project.description}
      </p>
      {project.tags && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--k40-s-2)" }}>
          {project.tags.map((tag, i) => (
            <span key={i} className="k40-tag">{tag}</span>
          ))}
        </div>
      )}
    </section>
  );

  /* ── iframeUrl path ───────────────────────────────────────────── */
  if ((project as any).contentType === 'iframe' && project.contentUrl) {
    return (
      <iframe
        src={project.contentUrl}
        style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
        title={project.title}
      />
    );
  }

  /* ── contentUrl path: injected HTML ──────────────────────────── */
  if (project.contentUrl) {
    const htmlPath = path.join(
      process.cwd(),
      "public",
      project.contentUrl.startsWith("/") ? project.contentUrl.slice(1) : project.contentUrl
    );

    try {
      const htmlContent = fs.readFileSync(htmlPath, "utf-8");
      const styleMatches = htmlContent.match(/<style[^>]*>[\s\S]*?<\/style>/gi) ?? [];
      const headStyles = styleMatches.join("\n");
      const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;
      const kronosOverride = `<style>#footer { display: none !important; } #site-nav { display: none !important; }</style>`;

      return (
        <div suppressHydrationWarning>
          <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: headStyles + bodyContent + kronosOverride }} />
        </div>
      );
    } catch (error) {
      console.error(`Failed to load HTML for ${params.slug}:`, error);
    }
  }

  /* ── React layout path ───────────────────────────────────────── */
  return (
    <div>

      {pageHeader}

      {/* Meta strip — role / duration / tools / process */}
      {(customProject.role || customProject.duration || customProject.tools || customProject.process) && (
        <div style={{ background: "var(--k40-fg-1)", padding: "var(--k40-s-7) var(--content-pad)" }}>
          <div style={{
            maxWidth: "var(--k40-content-max)", margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "var(--k40-s-7)",
          }}>
            {[
              { label: "Role", value: customProject.role },
              { label: "Duration", value: customProject.duration },
              { label: "Tools", value: Array.isArray(customProject.tools) ? customProject.tools.join(" · ") : customProject.tools },
              { label: "Process", value: Array.isArray(customProject.process) ? customProject.process.join(" · ") : customProject.process },
            ].filter((m) => m.value).map(({ label, value }) => (
              <div key={label}>
                <p className="k40-eyebrow" style={{ color: "var(--k40-fg-on-dark-3)", marginBottom: "var(--k40-s-2)" }}>{label}</p>
                <p style={{ fontFamily: "var(--k40-font-body)", fontSize: "var(--k40-text-sm)", lineHeight: 1.5, color: "var(--k40-fg-on-dark-2)", margin: 0 }}>
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
        <img src={project.images.hero} alt={project.title} style={{ width: "100%", height: "auto", display: "block" }} />
      )}

      {/* Main content */}
      <div style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-9)",
      }}>

        {customProject.summary && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Summary</p>
            <p className="k40-body" style={{ maxWidth: "none", fontSize: "1rem", lineHeight: 1.8 }}>{customProject.summary}</p>
          </section>
        )}

        {project.metrics && (
          <div className="k40-callout is-finding" style={{ marginBottom: "var(--k40-s-8)" }}>
            <span className="k40-callout-label">Key Results</span>
            <p className="k40-callout-body" style={{ color: "var(--k40-fg-1)", fontFamily: "var(--k40-font-ui)" }}>{project.metrics}</p>
          </div>
        )}

        {customProject.keyOutcomes && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Key Outcomes</p>
            <ul style={listStyle}>
              {customProject.keyOutcomes.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {customProject.businessChallenges && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Business Challenge</p>
            <ul style={listStyle}>
              {customProject.businessChallenges.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {(customProject.userPainPoints || customProject.uxGoal) && (
          <div style={{
            display: "grid",
            gridTemplateColumns: customProject.userPainPoints && customProject.uxGoal ? "1fr 1fr" : "1fr",
            gap: "var(--k40-s-6)",
            marginBottom: "var(--k40-s-9)",
          }}>
            {customProject.userPainPoints && (
              <div className="k40-callout">
                <span className="k40-callout-label">User Pain Points</span>
                <ul style={{ ...listStyle, paddingLeft: "var(--k40-s-4)" }}>
                  {customProject.userPainPoints.map((item: string, i: number) => (
                    <li key={i} className="k40-callout-body">{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {customProject.uxGoal && (
              <div className="k40-callout">
                <span className="k40-callout-label">UX Goal</span>
                <p className="k40-callout-body">{customProject.uxGoal}</p>
              </div>
            )}
          </div>
        )}

        {customProject.methodsUsed && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Research Methods</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-5)" }}>
              {Object.entries(customProject.methodsUsed).map(([key, value]: [string, any], i: number) => {
                const labels: Record<string, string> = {
                  competitiveAudit: "Competitive Audit",
                  technicalWorkshops: "Technical Workshops",
                  technicalGuidelines: "Technical Guidelines",
                };
                return (
                  <div key={i} style={{ display: "flex", gap: "var(--k40-s-5)", alignItems: "flex-start" }}>
                    <span className="k40-eyebrow is-accent" style={{ paddingTop: "3px", flexShrink: 0, minWidth: "160px" }}>
                      {labels[key] || key}
                    </span>
                    <p className="k40-body" style={{ maxWidth: "none" }}>{value}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {customProject.scopeRefinement && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Scope Refinement</p>
            <ul style={listStyle}>
              {customProject.scopeRefinement.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {customProject.keyInsight && (
          <div className="k40-callout is-insight" style={{ marginBottom: "var(--k40-s-8)" }}>
            <span className="k40-callout-label">Key Insight</span>
            <p className="k40-callout-body">{customProject.keyInsight}</p>
          </div>
        )}

        {project.images.featured && project.images.featured.length > 0 && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Designs</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-4)" }}>
              {project.images.featured.map((src, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} — design ${i + 1}`}
                  style={{ width: "100%", height: "auto", display: "block", border: "1px solid var(--k40-border-light)" }}
                />
              ))}
            </div>
          </section>
        )}

        {customProject.iterations && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Design Iterations</p>
            <ul style={listStyle}>
              {customProject.iterations.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {customProject.technicalCollaboration && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Technical Collaboration</p>
            <p className="k40-body" style={{ maxWidth: "none" }}>{customProject.technicalCollaboration}</p>
          </section>
        )}

        {customProject.quantitativeResults && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Quantitative Results</p>
            <ul style={listStyle}>
              {customProject.quantitativeResults.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {customProject.strategicImpact && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Strategic Impact</p>
            <ul style={listStyle}>
              {customProject.strategicImpact.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {customProject.leadership && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Leadership &amp; Mentorship</p>
            <ul style={listStyle}>
              {customProject.leadership.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {customProject.keyTakeaways && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Key Takeaways</p>
            <ul style={listStyle}>
              {customProject.keyTakeaways.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {customProject.futureRoadmap && (
          <section style={{ marginBottom: "var(--k40-s-9)" }}>
            <p className="k40-eyebrow" style={sectionLabel}>Future Roadmap</p>
            <ul style={listStyle}>
              {customProject.futureRoadmap.map((item: string, i: number) => (
                <li key={i} className="k40-body" style={{ maxWidth: "none" }}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {project.impact && (
          <div className="k40-callout is-finding" style={{ marginBottom: "var(--k40-s-8)" }}>
            <span className="k40-callout-label">Overall Impact</span>
            <p className="k40-callout-body">{project.impact}</p>
          </div>
        )}

        {/* Back link */}
        <div style={{ borderTop: "1px solid var(--k40-border-light)", paddingTop: "var(--k40-s-7)" }}>
          <Link href="/work" className="k40-btn k40-btn-secondary">
            ← Back to Work
          </Link>
        </div>

      </div>
    </div>
  );
}
