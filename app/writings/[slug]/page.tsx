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
    <div style={{ background: "var(--k40-bg)", minHeight: "100vh" }}>

      {/* Article header */}
      <header style={{
        maxWidth: "var(--k40-content-max)",
        margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-7)",
        borderBottom: "1px solid var(--k40-border-heavy)",
      }}>
        <a
          href="/writings"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--k40-fg-4)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--k40-s-2)",
            marginBottom: "var(--k40-s-6)",
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
          color: "var(--k40-accent-rail)",
          marginBottom: "var(--k40-s-3)",
        }}>
          {article!.theme}
        </p>

        <h1 style={{
          fontFamily: "'IBM Plex Mono', monospace",
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

        <p style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "1rem",
          color: "var(--k40-fg-3)",
          lineHeight: 1.7,
          maxWidth: "600px",
          marginBottom: "var(--k40-s-5)",
        }}>
          {article!.description}
        </p>

        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.6rem",
          color: "var(--k40-fg-4)",
          letterSpacing: "0.1em",
        }}>
          {article!.date}
        </span>
      </header>

      {/* Article body */}
      <article style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-9)",
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
                color: "var(--k40-fg-1)",
                marginTop: "var(--k40-s-8)",
                marginBottom: "var(--k40-s-4)",
                paddingBottom: "var(--k40-s-3)",
                borderBottom: "1px solid var(--k40-border-light)",
              }}>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--k40-fg-3)",
                marginTop: "var(--k40-s-6)",
                marginBottom: "var(--k40-s-3)",
              }}>{children}</h3>
            ),
            p: ({ children }) => (
              <p style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--k40-fg-3)",
                marginBottom: "var(--k40-s-5)",
              }}>{children}</p>
            ),
            blockquote: ({ children }) => (
              <blockquote style={{
                borderLeft: "3px solid var(--k40-accent-rail)",
                paddingLeft: "var(--k40-s-5)",
                margin: "var(--k40-s-6) 0",
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "var(--k40-fg-1)",
                lineHeight: 1.7,
              }}>{children}</blockquote>
            ),
            img: ({ src, alt }) => (
              <figure style={{ margin: "var(--k40-s-7) 0" }}>
                <img
                  src={src}
                  alt={alt}
                  style={{
                    width: "100%",
                    display: "block",
                    border: "1px solid var(--k40-border-light)",
                  }}
                />
                {alt && (
                  <figcaption style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "var(--k40-fg-4)",
                    marginTop: "var(--k40-s-2)",
                    textTransform: "uppercase",
                  }}>{alt}</figcaption>
                )}
              </figure>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                style={{
                  color: "var(--k40-fg-1)",
                  textDecoration: "underline",
                  textDecorationColor: "var(--k40-border-mid)",
                }}
              >{children}</a>
            ),
            strong: ({ children }) => (
              <strong style={{ fontWeight: 600, color: "var(--k40-fg-1)" }}>{children}</strong>
            ),
            ul: ({ children }) => (
              <ul style={{
                paddingLeft: "var(--k40-s-5)",
                marginBottom: "var(--k40-s-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--k40-s-2)",
              }}>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol style={{
                paddingLeft: "var(--k40-s-5)",
                marginBottom: "var(--k40-s-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--k40-s-2)",
              }}>{children}</ol>
            ),
            li: ({ children }) => (
              <li style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--k40-fg-3)",
              }}>{children}</li>
            ),
            hr: () => (
              <hr style={{
                border: "none",
                borderTop: "1px solid var(--k40-border-light)",
                margin: "var(--k40-s-7) 0",
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
