/* Sidebar — the dark protocol rail */

const Sidebar = ({ route, onNavigate }) => {
  const items = [
    { key: 'work',     label: 'Work' },
    { key: 'about',    label: 'About' },
    { key: 'writings', label: 'Writings' },
    { key: 'contact',  label: 'Contact' },
  ];
  return (
    <aside className="k-sidebar">
      <div className="k-sidebar-info">
        <div className="k-sidebar-version">PROTOCOL_V4.0</div>
        <div className="k-sidebar-wordmark">KRONOS_LAB</div>
      </div>

      <div className="k-sidebar-group">01 — Surfaces</div>
      {items.map(item => (
        <button
          key={item.key}
          className={`k-sidebar-item${route === item.key ? ' active' : ''}`}
          onClick={() => onNavigate(item.key)}
        >
          {item.label}
        </button>
      ))}

      <div className="k-sidebar-group">02 — Operator</div>
      <div style={{
        padding: 'var(--s-3) var(--s-5)',
        fontFamily: 'var(--font-ui)',
        fontSize: '0.6rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.8,
      }}>
        <div style={{ color: 'rgba(255,255,255,0.75)' }}>Joseph Grgic</div>
        <div>Senior UX Designer</div>
        <div style={{ marginTop: 6 }}>Berlin · Remote</div>
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
