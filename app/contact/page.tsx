"use client";

import { useState } from "react";

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

        {/* Form */}
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

          <button type="submit" className="k40-btn k40-btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </button>

          {submitted && (
            <div className="k40-banner is-success">
              <div className="k40-banner-body">
                <span className="k40-banner-title">Message sent</span>
                <span className="k40-banner-msg">I&apos;ll get back to you soon.</span>
              </div>
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
            <p className="k40-eyebrow" style={{
              marginBottom: "var(--k40-s-5)",
              paddingBottom: "var(--k40-s-3)",
              borderBottom: "1px solid var(--k40-border-light)",
            }}>
              Other Ways to Connect
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--k40-s-4)" }}>
              <div>
                <p className="k40-eyebrow" style={{ marginBottom: "var(--k40-s-1)" }}>Email</p>
                <a href="mailto:jegrgic@gmail.com" className="k40-link" style={{ fontFamily: "var(--k40-font-ui)", fontSize: "var(--k40-text-sm)" }}>
                  jegrgic@gmail.com
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
