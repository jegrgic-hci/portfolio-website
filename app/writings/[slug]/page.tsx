import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import articles from "@/data/articles.json";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.id === params.slug);
  if (!article) return {};
  const { title, description } = article;
  // openGraph/twitter replace the layout's objects wholesale, so without these
  // every article would share the homepage's og tags.
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.jegrgic.com${article.href}`,
      siteName: "Joseph Grgic",
      type: "article",
    },
    twitter: { card: "summary", title, description },
  };
}

// A trailing "References" heading (optionally preceded by a rule) is split off
// and rendered in a smaller style after the article body.
const REFERENCES_RE = /\n(?:-{3,}\s*\n+)?#{2,3}\s+References\s*\n/;

// Section headings get an id from their text (minus any "IV." numbering) so
// articles can link to them, e.g. "## II. Interviews" → #interviews.
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) return textOf(node.props.children);
  return "";
}

function headingId(children: ReactNode): string {
  return textOf(children)
    .replace(/^[IVX]+\.\s+/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h2 id={headingId(children)} className="k40-eyebrow" style={{
      scrollMarginTop: "80px",
      marginTop: "var(--k40-s-8)",
      marginBottom: "var(--k40-s-4)",
      paddingBottom: "var(--k40-s-3)",
      borderBottom: "1px solid var(--k40-border-light)",
    }}>{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="k40-eyebrow" style={{
      color: "var(--k40-fg-3)",
      marginTop: "var(--k40-s-6)",
      marginBottom: "var(--k40-s-3)",
    }}>{children}</h3>
  ),
  p: ({ children }) => (
    <p className="k40-body-long" style={{ marginBottom: "var(--k40-s-5)", maxWidth: "none" }}>{children}</p>
  ),
  blockquote: ({ children }) => (
    <div className="k40-pull-quote is-accent">
      <blockquote>{children}</blockquote>
    </div>
  ),
  img: ({ src, alt }) => (
    <figure className="k40-figure" style={{ margin: "var(--k40-s-7) 0" }}>
      <img src={src} alt={alt} />
      {alt && (
        <figcaption>
          <span className="fig-label">Fig</span>
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  a: ({ href, children }) => (
    <a href={href} className="k40-link">{children}</a>
  ),
  strong: ({ children }) => <strong>{children}</strong>,
  ul: ({ children }) => (
    <ul style={{ paddingLeft: "var(--k40-s-5)", marginBottom: "var(--k40-s-5)", display: "flex", flexDirection: "column", gap: "var(--k40-s-2)" }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol style={{ paddingLeft: "var(--k40-s-5)", marginBottom: "var(--k40-s-5)", display: "flex", flexDirection: "column", gap: "var(--k40-s-2)" }}>{children}</ol>
  ),
  li: ({ children }) => (
    <li className="k40-body-long" style={{ maxWidth: "none" }}>{children}</li>
  ),
  hr: () => (
    <hr style={{ border: "none", borderTop: "1px solid var(--k40-border-light)", margin: "var(--k40-s-7) 0" }} />
  ),
  table: ({ children }) => (
    <div style={{ overflowX: "auto", margin: "var(--k40-s-6) 0 var(--k40-s-7)" }}>
      <table className="k40-table">{children}</table>
    </div>
  ),
};

const referenceComponents: Components = {
  ...markdownComponents,
  ul: ({ children }) => (
    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--k40-s-3)" }}>{children}</ul>
  ),
  li: ({ children }) => (
    <li style={{
      fontFamily: "var(--k40-font-body)",
      fontSize: "var(--k40-text-xs)",
      lineHeight: 1.6,
      color: "var(--k40-fg-3)",
      paddingLeft: "var(--k40-s-5)",
      textIndent: "calc(-1 * var(--k40-s-5))",
    }}>{children}</li>
  ),
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.id === params.slug);
  if (!article) notFound();

  const filePath = path.join(ARTICLES_DIR, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) notFound();

  const { content } = matter(fs.readFileSync(filePath, "utf8"));
  const [body, references] = content.split(REFERENCES_RE);

  return (
    <div style={{ background: "var(--k40-bg)", minHeight: "100vh" }}>

      {/* Article header */}
      <header style={{
        maxWidth: "var(--k40-content-max)",
        margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-7)",
        borderBottom: "1px solid var(--k40-border-heavy)",
      }}>
        <a href="/writings" className="k40-btn k40-btn-ghost" style={{ marginBottom: "var(--k40-s-6)", display: "inline-flex", alignItems: "center", gap: "var(--k40-s-2)" }}>
          ← Writings
        </a>

        <p className="k40-eyebrow is-accent" style={{ marginBottom: "var(--k40-s-3)" }}>
          {article!.theme}
        </p>

        <h1 style={{
          fontFamily: "var(--k40-font-ui)",
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--k40-fg-1)",
          lineHeight: 1.2,
          marginBottom: "var(--k40-s-4)",
          maxWidth: "720px",
        }}>
          {article!.title}
        </h1>

        <p className="k40-body" style={{ marginBottom: "var(--k40-s-5)" }}>
          {article!.description}
        </p>

        <span className="k40-eyebrow" style={{ color: "var(--k40-fg-4)" }}>
          {article!.date}
        </span>
      </header>

      {/* Article body */}
      <article style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-9)",
      }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {body}
        </ReactMarkdown>

        {references && (
          <section style={{
            marginTop: "var(--k40-s-8)",
            paddingTop: "var(--k40-s-5)",
            borderTop: "1px solid var(--k40-border-light)",
          }}>
            <h2 className="k40-eyebrow" style={{ color: "var(--k40-fg-3)", marginBottom: "var(--k40-s-4)" }}>
              References
            </h2>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={referenceComponents}>
              {references}
            </ReactMarkdown>
          </section>
        )}
      </article>

    </div>
  );
}
