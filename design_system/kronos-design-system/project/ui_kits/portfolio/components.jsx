/* Primitives: Icon, Button, Tag, FormField, Input, Checkbox */

const Icon = ({ name, size = 16, ...rest }) => {
  const props = { width: size, height: size, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...rest };
  switch (name) {
    case 'arrow':
      return <svg {...props}><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'menu':
      return <svg {...props}><path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case 'close':
      return <svg {...props}><path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case 'search':
      return <svg {...props}><circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
    case 'external':
      return <svg {...props}><path d="M10 3H13V6M13 3L9 7M6 5H4C3.44772 5 3 5.44772 3 6V12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'check':
      return <svg {...props}><path d="M3 8L7 12L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'github':
      return <svg {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8 1C4.13401 1 1 4.13401 1 8C1 11.1006 3.02391 13.7286 5.82638 14.6369C6.17638 14.7003 6.30596 14.4883 6.30596 14.3054C6.30596 14.1408 6.30008 13.6737 6.2969 13.0565C4.43004 13.4766 4.02204 12.1676 4.02204 12.1676C3.70345 11.3725 3.24489 11.1616 3.24489 11.1616C2.61165 10.7303 3.29229 10.7391 3.29229 10.7391C3.99168 10.789 4.35939 11.4596 4.35939 11.4596C4.98203 12.5186 5.9899 12.2125 6.31862 12.035C6.38101 11.5849 6.56219 11.279 6.76233 11.1065C5.28435 10.932 3.73001 10.3522 3.73001 7.80895C3.73001 7.05656 4.00453 6.44389 4.37294 5.96499C4.30381 5.79038 4.06131 5.09468 4.43827 4.15233C4.43827 4.15233 5.02565 3.96671 6.28956 4.85572C6.78957 4.70181 7.33261 4.62485 7.87247 4.62218C8.41233 4.62485 8.95537 4.70181 9.45538 4.85572C10.7181 3.96671 11.3045 4.15233 11.3045 4.15233C11.6825 5.09468 11.44 5.79038 11.3709 5.96499C11.7402 6.44389 12.0138 7.05656 12.0138 7.80895C12.0138 10.359 10.4562 10.9299 8.97413 11.1008C9.22117 11.3155 9.44189 11.7402 9.44189 12.3898C9.44189 13.3175 9.43306 14.0684 9.43306 14.3054C9.43306 14.4895 9.5609 14.7033 9.91686 14.636C12.7175 13.7267 14.74 11.0996 14.74 8C14.74 4.13401 11.606 1 8 1Z" fill="currentColor"/></svg>;
    case 'instagram':
      return <svg {...props}><path d="M2 4.5C2 3.11929 3.11929 2 4.5 2H11.5C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="11.5" cy="4.5" r="0.5" fill="currentColor"/></svg>;
    case 'spinner':
      return <svg {...props} className="k-spin"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20 18" strokeLinecap="round"/></svg>;
    default:
      return null;
  }
};

const Button = ({ variant = 'primary', icon, iconAfter, children, disabled, loading, onClick, type = 'button' }) => {
  const cls = `k-btn k-btn-${variant}${disabled || loading ? ' k-btn-disabled' : ''}`;
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {loading && <Icon name="spinner" size={14} />}
      {!loading && icon && <Icon name={icon} size={14} />}
      {children}
      {!loading && iconAfter && <Icon name={iconAfter} size={14} />}
    </button>
  );
};

const Tag = ({ children, variant }) => (
  <span className={`k-tag ${variant ? `k-tag-${variant}` : ''}`}>{children}</span>
);

const TypeLabel = ({ children, style }) => (
  <span className="k-label" style={style}>{children}</span>
);

const FormField = ({ label, helper, error, children }) => (
  <div className="k-formfield">
    {label && <label className="k-label" style={error ? { color: 'var(--k-red)' } : undefined}>{label}</label>}
    {children}
    {(helper || error) && <span className={`k-helper${error ? ' is-error' : ''}`}>{error || helper}</span>}
  </div>
);

const Input = ({ error, disabled, ...rest }) => (
  <input
    className={`k-input${error ? ' k-input-error' : ''}${disabled ? ' k-input-disabled' : ''}`}
    disabled={disabled}
    {...rest}
  />
);

const Textarea = ({ error, disabled, ...rest }) => (
  <textarea
    className={`k-input textarea${error ? ' k-input-error' : ''}${disabled ? ' k-input-disabled' : ''}`}
    disabled={disabled}
    {...rest}
  />
);

const Checkbox = ({ checked, onChange, children }) => (
  <label className="k-checkbox-row" onClick={() => onChange && onChange(!checked)}>
    <span className={`k-checkbox-box${checked ? ' checked' : ''}`}>
      {checked && <Icon name="check" size={10} style={{ color: 'white' }} />}
    </span>
    <span>{children}</span>
  </label>
);

const SectionHeader = ({ title, action, onAction }) => (
  <div className="k-section">
    <h2 className="k-section-h">{title}</h2>
    {action && <button className="k-link" onClick={onAction}>{action}</button>}
  </div>
);

Object.assign(window, { Icon, Button, Tag, TypeLabel, FormField, Input, Textarea, Checkbox, SectionHeader });
