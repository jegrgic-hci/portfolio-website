/* Footer — inverse surface */

const Footer = () => (
  <footer className="k-footer">
    <div>
      <div className="k-footer-wordmark">KRONOS_LAB</div>
      <div className="k-footer-caption">© 2026 — All rights reserved · v4.0.0</div>
    </div>
    <div className="k-footer-social">
      <a href="#" aria-label="GitHub"><Icon name="github" size={18} /></a>
      <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
      <a href="#" aria-label="External"><Icon name="external" size={18} /></a>
    </div>
  </footer>
);

window.Footer = Footer;
