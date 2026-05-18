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
          href="https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>

        {/* ── Nav ─────────────────────────────────────────────────────── */}
        <header style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "var(--k40-surface)",
          borderBottom: "1px solid var(--k40-border-heavy)",
        }}>
          <nav style={{
            maxWidth: "var(--k40-content-max)", margin: "0 auto",
            padding: "0 var(--content-pad)",
            height: "56px", display: "flex",
            justifyContent: "space-between", alignItems: "center",
          }}>
            <a href="/" style={{
              fontFamily: "var(--k40-font-display)",
              fontSize: "1.1rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--k40-fg-1)",
              textDecoration: "none",
            }}>
              JG
            </a>
            <ul style={{ display: "flex", gap: "var(--k40-s-2)", listStyle: "none" }}>
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
          background: "var(--k40-fg-1)",
          borderTop: "1px solid var(--k40-border-heavy)",
          marginTop: "var(--k40-s-9)",
        }}>
          <div style={{
            maxWidth: "var(--k40-content-max)", margin: "0 auto",
            padding: "var(--k40-s-8) var(--content-pad) var(--k40-s-7)",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "var(--k40-s-7)",
              marginBottom: "var(--k40-s-7)",
            }}>

              {/* Brand */}
              <div>
                <div style={{
                  fontFamily: "var(--k40-font-display)",
                  fontSize: "1.5rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--k40-fg-inverse)",
                  borderLeft: "4px solid var(--k40-accent-rail)",
                  paddingLeft: "var(--k40-s-4)",
                  marginBottom: "var(--k40-s-4)",
                }}>
                  Joseph Grgic
                </div>
                <p style={{
                  fontFamily: "var(--k40-font-body)",
                  fontSize: "var(--k40-text-sm)",
                  color: "var(--k40-fg-on-dark-2)",
                  lineHeight: 1.7,
                  maxWidth: "300px",
                }}>
                  Senior UX Researcher &amp; Designer specializing in human factors
                  and complex information architecture.
                </p>
              </div>

              {/* Pages */}
              <div>
                <p className="k40-eyebrow" style={{ color: "var(--k40-fg-on-dark-3)", marginBottom: "var(--k40-s-4)" }}>Pages</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--k40-s-3)" }}>
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <a href={href} className="footer-link" style={{ color: "var(--k40-fg-on-dark-2)" }}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="k40-eyebrow" style={{ color: "var(--k40-fg-on-dark-3)", marginBottom: "var(--k40-s-4)" }}>Contact</p>
                <a href="mailto:jegrgic@gmail.com" className="footer-link"
                  style={{ display: "block", marginBottom: "var(--k40-s-2)", color: "var(--k40-fg-on-dark-2)" }}>
                  jegrgic@gmail.com
                </a>
                <p className="k40-eyebrow" style={{ color: "var(--k40-fg-on-dark-3)" }}>Marseille, France</p>
              </div>
            </div>

            {/* Bottom bar */}
            <div style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "var(--k40-s-5)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <p className="k40-eyebrow" style={{ color: "var(--k40-fg-on-dark-3)" }}>
                &copy; {new Date().getFullYear()} Joseph Grgic
              </p>
              <p className="k40-eyebrow" style={{ color: "var(--k40-fg-on-dark-3)" }}>
                UX Research &amp; Design
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
