import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import articles from "@/data/articles.json";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.id === params.slug);
  if (!article) return {};
  return { title: article.title, description: article.description };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.id === params.slug);
  if (!article) notFound();

  const filePath = path.join(ARTICLES_DIR, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) notFound();

  const { content } = matter(fs.readFileSync(filePath, "utf8"));

  return (
    <div style={{ background: "var(--k-bg)", minHeight: "100vh" }}>

      {/* Article header */}
      <header style={{
        maxWidth: "var(--content-max)",
        margin: "0 auto",
        padding: "var(--s-8) var(--content-pad) var(--s-7)",
        borderBottom: "1px solid var(--k-border-heavy)",
      }}>
        <a
          href="/writings"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--k-text-muted)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--s-2)",
            marginBottom: "var(--s-6)",
          }}
        >
          ← Writings
        </a>

        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--k-teal)",
          marginBottom: "var(--s-3)",
        }}>
          {article!.theme}
        </p>

        <h1 style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "clamp(1.25rem, 3vw, 2rem)",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--k-text-primary)",
          lineHeight: 1.2,
          marginBottom: "var(--s-4)",
          maxWidth: "720px",
        }}>
          {article!.title}
        </h1>

        <p style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "1rem",
          color: "var(--k-text-secondary)",
          lineHeight: 1.7,
          maxWidth: "600px",
          marginBottom: "var(--s-5)",
        }}>
          {article!.description}
        </p>

        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.6rem",
          color: "var(--k-text-muted)",
          letterSpacing: "0.1em",
        }}>
          {article!.date}
        </span>
      </header>

      {/* Article body */}
      <article style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "var(--s-8) var(--content-pad) var(--s-9)",
      }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--k-text-primary)",
                marginTop: "var(--s-8)",
                marginBottom: "var(--s-4)",
                paddingBottom: "var(--s-3)",
                borderBottom: "1px solid var(--k-border-light)",
              }}>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--k-text-secondary)",
                marginTop: "var(--s-6)",
                marginBottom: "var(--s-3)",
              }}>{children}</h3>
            ),
            p: ({ children }) => (
              <p style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--k-text-secondary)",
                marginBottom: "var(--s-5)",
              }}>{children}</p>
            ),
            blockquote: ({ children }) => (
              <blockquote style={{
                borderLeft: "3px solid var(--k-teal)",
                paddingLeft: "var(--s-5)",
                margin: "var(--s-6) 0",
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "var(--k-text-primary)",
                lineHeight: 1.7,
              }}>{children}</blockquote>
            ),
            img: ({ src, alt }) => (
              <figure style={{ margin: "var(--s-7) 0" }}>
                <img
                  src={src}
                  alt={alt}
                  style={{
                    width: "100%",
                    display: "block",
                    border: "1px solid var(--k-border-light)",
                  }}
                />
                {alt && (
                  <figcaption style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "var(--k-text-muted)",
                    marginTop: "var(--s-2)",
                    textTransform: "uppercase",
                  }}>{alt}</figcaption>
                )}
              </figure>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                style={{
                  color: "var(--k-text-primary)",
                  textDecoration: "underline",
                  textDecorationColor: "var(--k-border-mid)",
                }}
              >{children}</a>
            ),
            strong: ({ children }) => (
              <strong style={{ fontWeight: 600, color: "var(--k-text-primary)" }}>{children}</strong>
            ),
            ul: ({ children }) => (
              <ul style={{
                paddingLeft: "var(--s-5)",
                marginBottom: "var(--s-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-2)",
              }}>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol style={{
                paddingLeft: "var(--s-5)",
                marginBottom: "var(--s-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-2)",
              }}>{children}</ol>
            ),
            li: ({ children }) => (
              <li style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--k-text-secondary)",
              }}>{children}</li>
            ),
            hr: () => (
              <hr style={{
                border: "none",
                borderTop: "1px solid var(--k-border-light)",
                margin: "var(--s-7) 0",
              }} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

    </div>
  );
}
