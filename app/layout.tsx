import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Grgic | Senior UX Researcher & Designer",
  description:
    "Senior UX Researcher & Designer specializing in human factors, product design strategy, and complex information architecture for teams building trustworthy systems.",
  openGraph: {
    title: "Joseph Grgic | Senior UX Researcher & Designer",
    description:
      "Senior UX Researcher & Designer specializing in human factors, product design strategy, and complex information architecture for teams building trustworthy systems.",
    url: "https://www.jegrgic.com",
    siteName: "Joseph Grgic",
    type: "website",
  },
};

const navLinks = [
  { href: "/about",    label: "About" },
  { href: "/work",     label: "Work" },
  { href: "/writings", label: "Writings" },
  { href: "/contact",  label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>

        {/* ── Nav ─────────────────────────────────────────────────────── */}
        <header style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "var(--k-surface)",
          borderBottom: "1px solid var(--k-border-heavy)",
        }}>
          <nav style={{
            maxWidth: "var(--content-max)", margin: "0 auto",
            padding: "0 var(--content-pad)",
            height: "56px", display: "flex",
            justifyContent: "space-between", alignItems: "center",
          }}>
            <a href="/" style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              fontSize: "1.1rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--k-text-primary)",
              textDecoration: "none",
            }}>
              JG
            </a>
            <ul style={{ display: "flex", gap: "var(--s-2)", listStyle: "none" }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main style={{ minHeight: "100vh" }}>{children}</main>

        {/* ── Footer ──────────────────────────────────────────────────── */}
        <footer style={{
          background: "var(--k-text-primary)",
          borderTop: "1px solid var(--k-border-heavy)",
          marginTop: "var(--s-9)",
        }}>
          <div style={{
            maxWidth: "var(--content-max)", margin: "0 auto",
            padding: "var(--s-8) var(--content-pad) var(--s-7)",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "var(--s-7)",
              marginBottom: "var(--s-7)",
            }}>
              {/* Brand */}
              <div>
                <div style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  fontSize: "1.5rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--k-surface)",
                  borderLeft: "4px solid var(--k-teal)",
                  paddingLeft: "var(--s-4)",
                  marginBottom: "var(--s-4)",
                }}>
                  Joseph Grgic
                </div>
                <p style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  maxWidth: "300px",
                }}>
                  Senior UX Researcher &amp; Designer specializing in human factors
                  and complex information architecture.
                </p>
              </div>

              {/* Pages */}
              <div>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "var(--s-4)",
                }}>
                  Pages
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--s-3)" }}>
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <a href={href} className="footer-link" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "var(--s-4)",
                }}>
                  Contact
                </p>
                <a href="mailto:jegrgic@gmail.com" className="footer-link"
                  style={{ display: "block", marginBottom: "var(--s-2)", color: "rgba(255,255,255,0.55)" }}>
                  jegrgic@gmail.com
                </a>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.35)",
                }}>
                  Marseille, France
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "var(--s-5)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <p style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
              }}>
                &copy; {new Date().getFullYear()} Joseph Grgic
              </p>
              <p style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
              }}>
                UX Research &amp; Design
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
