"use client";

import { useState } from "react";
import articles from "@/data/articles.json";

/** The newest article in each theme, so the three suggestions after a send
 *  cover the range of subjects rather than three takes on one. Themes keep
 *  the order they appear in the data, which is the order the home page
 *  lists them in. */
const themes = [...new Set(articles.map((a) => a.theme))];

const nextReads = themes.map(
  (theme) =>
    articles
      .filter((a) => a.theme === theme)
      /* Dates read "Apr 2026", which Date.parse handles once given a day. */
      .sort((a, b) => Date.parse(`1 ${b.date}`) - Date.parse(`1 ${a.date}`))[0],
);

/** idle → sending → sent, or an error string to show instead. */
type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(body.error || "The message could not be sent.");

      /* Only clear the fields once the send is confirmed — wiping them on a
         failure would lose someone's message with no way to get it back. */
      form.reset();
      setStatus("sent");
    } catch (err) {
      /* The visitor gets fixed copy rather than the server's reason — it is
         never actionable for them. Logged so a failure is still diagnosable
         from the browser console. */
      console.error("Contact form send failed:", err);
      setStatus("error");
    }
  };

  return (
    <div>

      {/* Page header */}
      <section style={{
        maxWidth: "var(--k40-content-max)", margin: "0 auto",
        padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-7)",
        borderBottom: "1px solid var(--k40-border-heavy)",
      }}>
        <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-4)" }}>Contact</p>
        <h1 className="k40-display" style={{ marginBottom: "var(--k40-s-4)" }}>Get in Touch</h1>
        <p className="k40-body">
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

        {/* Once the message is away the form has nothing left to do, so the
            whole thing is replaced rather than a banner stacked under it —
            no ambiguity about whether it still needs submitting. */}
        {status === "sent" ? (
          <div aria-live="polite">
            <p className="k40-eyebrow is-accent" style={{ marginBottom: "var(--k40-s-3)" }}>
              Sent
            </p>
            <h2 className="k40-h2" style={{ marginBottom: "var(--k40-s-4)" }}>
              Message sent successfully
            </h2>
            <p className="k40-body" style={{ marginBottom: "var(--k40-s-7)" }}>
              I read everything that arrives here and will get back to you.
            </p>

            <p
              className="k40-h3"
              style={{
                marginBottom: "var(--k40-s-5)",
                paddingBottom: "var(--k40-s-3)",
                borderBottom: "1px solid var(--k40-border-heavy)",
              }}
            >
              so......now what?
            </p>

            {/* One per theme rather than the three most recent — the spread
                shows the range of what there is to read. */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {nextReads.map((article) => (
                <a
                  key={article.id}
                  href={article.href}
                  className="je-writing-row"
                  style={{
                    display: "flex",
                    gap: "var(--k40-s-5)",
                    padding: "var(--k40-s-4) var(--k40-s-2)",
                    margin: "0 calc(-1 * var(--k40-s-2))",
                    borderBottom: "1px solid var(--k40-border-light)",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <span
                    className="k40-eyebrow"
                    style={{ color: "var(--k40-fg-4)", whiteSpace: "nowrap", paddingTop: "2px", minWidth: "52px" }}
                  >
                    {article.date}
                  </span>
                  <div>
                    <p
                      className="je-writing-title"
                      style={{
                        fontFamily: "var(--k40-font-body)",
                        fontSize: "var(--k40-text-sm)",
                        fontWeight: 500,
                        color: "var(--k40-fg-1)",
                        lineHeight: 1.4,
                        marginBottom: "var(--k40-s-1)",
                      }}
                    >
                      {article.title}
                    </p>
                    <p
                      className="je-writing-desc"
                      style={{
                        fontFamily: "var(--k40-font-body)",
                        fontSize: "var(--k40-text-xs)",
                        color: "var(--k40-fg-3)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {article.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ display: "flex", gap: "var(--k40-s-3)", flexWrap: "wrap", marginTop: "var(--k40-s-6)" }}>
              <a href="/writings" className="k40-btn k40-btn-secondary">All writing →</a>
              <a href="/" className="k40-btn k40-btn-ghost">Back to work</a>
            </div>
          </div>
        ) : (
        /* Form */
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-5)" }}>
          <div>
            <label htmlFor="name" className="k40-eyebrow" style={{ display: "block", marginBottom: "var(--k40-s-2)" }}>Name</label>
            <input type="text" id="name" name="name" required className="k40-input" placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="email" className="k40-eyebrow" style={{ display: "block", marginBottom: "var(--k40-s-2)" }}>Email</label>
            <input type="email" id="email" name="email" required className="k40-input" placeholder="your@email.com" />
          </div>

          <div>
            <label htmlFor="message" className="k40-eyebrow" style={{ display: "block", marginBottom: "var(--k40-s-2)" }}>Message</label>
            <textarea id="message" name="message" rows={6} required className="k40-input" placeholder="Tell me about your project..." style={{ resize: "vertical" }} />
          </div>

          {/* Honeypot: hidden from people, irresistible to bots that fill
              every field. Not type="hidden" — plenty of bots skip those. */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <button type="submit" className="k40-btn k40-btn-primary" disabled={status === "sending"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {/* aria-live so the outcome is announced, not just drawn. Success
              is handled above by replacing the form outright. */}
          <div aria-live="polite">
            {status === "error" && (
              <div className="k40-banner is-error">
                <div className="k40-banner-body">
                  <span className="k40-banner-title">Message not sent</span>
                  {/* LinkedIn rather than an address, so the failure path does
                      not undo the decision not to publish one. */}
                  <span className="k40-banner-msg">
                    Email is an archaic technology that sometimes glitches. Try reaching me on{" "}
                    <a
                      href="https://www.linkedin.com/in/jgrgic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="k40-link"
                    >
                      LinkedIn
                    </a>.
                  </span>
                </div>
              </div>
            )}
          </div>
        </form>
        )}

        {/* Info panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-6)" }}>
          <div style={{
            background: "var(--k40-bg)",
            border: "1px solid var(--k40-border-light)",
            padding: "var(--k40-s-6)",
          }}>
            <p className="k40-eyebrow" style={{
              marginBottom: "var(--k40-s-5)",
              paddingBottom: "var(--k40-s-3)",
              borderBottom: "1px solid var(--k40-border-light)",
            }}>
              Other Ways to Connect
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-4)" }}>
              {/* No address in the markup, here or anywhere else on the site —
                  a mailto: is the cheapest thing a scraper can harvest. The
                  form reaches the same inbox, and LinkedIn is the fallback
                  when someone would rather not use a form at all. */}
              <div>
                <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-1)" }}>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/jgrgic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="k40-link"
                  style={{ fontFamily: "var(--k40-font-ui)", fontSize: "var(--k40-text-sm)" }}
                >
                  linkedin.com/in/jgrgic
                </a>
              </div>

              <div>
                <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-1)" }}>Location</p>
                <p className="k40-body" style={{ maxWidth: "none" }}>Marseille, France</p>
                <p className="k40-helper" style={{ marginTop: "var(--k40-s-1)" }}>
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
