/* Hero — name + role + intro + CTAs */

const Hero = ({ onPrimary, onSecondary }) => (
  <section className="k-hero">
    <div className="k-avatar" aria-hidden="true"></div>
    <div className="k-hero-body">
      <div>
        <div className="k-hero-eyebrow">Senior UX Designer</div>
        <div className="k-hero-name" style={{ marginTop: 8 }}>Joseph Grgic</div>
      </div>
      <p>
        Specializing in human-AI interaction and systems design.
        Currently building at the intersection of data and product.
      </p>
      <div style={{ display: 'flex', gap: 'var(--s-4)' }}>
        <Button variant="primary" onClick={onPrimary} iconAfter="arrow">View Work</Button>
        <Button variant="secondary" onClick={onSecondary}>Contact</Button>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
