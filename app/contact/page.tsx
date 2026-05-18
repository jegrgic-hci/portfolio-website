"use client";

import { useState } from "react";

const labelStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--k40-fg-3)",
  display: "block",
  marginBottom: "var(--k40-s-2)",
};

const inputStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "0.8rem",
  letterSpacing: "0.04em",
  color: "var(--k40-fg-1)",
  background: "var(--k40-surface)",
  border: "1px solid var(--k40-border-mid)",
  padding: "var(--k40-s-3) var(--k40-s-4)",
  width: "100%",
  outline: "none",
  transition: "border-color 150ms ease",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
          Contact
        </p>
        <h1 style={{
          fontFamily: "Impact, 'Arial Black', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--k40-fg-1)",
          marginBottom: "var(--k40-s-4)",
        }}>
          Get in Touch
        </h1>
        <p style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "1rem",
          color: "var(--k40-fg-3)",
          lineHeight: 1.7,
          maxWidth: "480px",
        }}>
          I&apos;m interested in hearing about your project and how I can help.
          Let&apos;s connect.
        </p>
      </section>

      {/* Content */}
      <div style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-9)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--k40-s-8)",
        alignItems: "start",
      }}>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-5)" }}>
          <div>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={inputStyle}
              placeholder="Your name"
              onFocus={(e) => { e.currentTarget.style.borderColor = "var(--k40-border-heavy)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "var(--k40-border-mid)"; }}
            />
          </div>

          <div>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={inputStyle}
              placeholder="your@email.com"
              onFocus={(e) => { e.currentTarget.style.borderColor = "var(--k40-border-heavy)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "var(--k40-border-mid)"; }}
            />
          </div>

          <div>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              style={{ ...inputStyle, resize: "vertical", fontFamily: "'IBM Plex Sans', sans-serif" }}
              placeholder="Tell me about your project..."
              onFocus={(e) => { e.currentTarget.style.borderColor = "var(--k40-border-heavy)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "var(--k40-border-mid)"; }}
            />
          </div>

          <button
            type="submit"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              background: "var(--k40-fg-1)", color: "var(--k40-surface)",
              border: "1px solid var(--k40-fg-1)",
              padding: "var(--k40-s-3) var(--k40-s-5)",
              cursor: "pointer",
              transition: "background 150ms ease",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--k40-s-2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--k40-accent)";
              e.currentTarget.style.borderColor = "var(--k40-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--k40-fg-1)";
              e.currentTarget.style.borderColor = "var(--k40-fg-1)";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </button>

          {submitted && (
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.7rem", letterSpacing: "0.08em",
              padding: "var(--k40-s-4)",
              background: "rgba(45,106,79,0.08)",
              border: "1px solid var(--k40-green)",
              color: "var(--k40-green)",
            }}>
              Message sent — I&apos;ll get back to you soon.
            </div>
          )}
        </form>

        {/* Info panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-6)" }}>
          <div style={{
            background: "var(--k40-bg)",
            border: "1px solid var(--k40-border-light)",
            padding: "var(--k40-s-6)",
          }}>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--k40-fg-4)",
              marginBottom: "var(--k40-s-5)",
              paddingBottom: "var(--k40-s-3)",
              borderBottom: "1px solid var(--k40-border-light)",
            }}>
              Other Ways to Connect
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-4)" }}>
              <div>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem", fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "var(--k40-fg-4)", marginBottom: "var(--k40-s-1)",
                }}>
                  Email
                </p>
                <a
                  href="mailto:jegrgic@gmail.com"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.8rem",
                    color: "var(--k40-fg-1)",
                    borderBottom: "1px solid var(--k40-border-heavy)",
                    paddingBottom: "1px",
                    textDecoration: "none",
                  }}
                >
                  jegrgic@gmail.com
                </a>
              </div>

              <div>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem", fontWeight: 700,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "var(--k40-fg-4)", marginBottom: "var(--k40-s-1)",
                }}>
                  Location
                </p>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.8rem", color: "var(--k40-fg-3)",
                }}>
                  Marseille, France
                </p>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.7rem",
                  color: "var(--k40-fg-4)", marginTop: "var(--k40-s-1)",
                }}>
                  Open to remote &amp; international projects
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
