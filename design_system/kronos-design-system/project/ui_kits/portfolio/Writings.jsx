/* Writings — journal list */

const ENTRIES = [
  { id: 'W08', date: '04.2026', readtime: '12 min', title: 'On the visible model',     meta: 'A short essay on legibility and the parts of a system we let users actually see.' },
  { id: 'W07', date: '02.2026', readtime: '6 min',  title: 'Notebook over dashboard',  meta: 'Why labelers and analysts keep reinventing the lab notebook, and what tools should learn from it.' },
  { id: 'W06', date: '11.2025', readtime: '9 min',  title: 'Protocol as a UI pattern', meta: 'Numbered, versioned, mechanical. Borrowed from the lab and surprisingly useful at the screen.' },
];

const Writings = ({ onSelect }) => (
  <div>
    <SectionHeader title="Writings" action="RSS →" />
    <div>
      {ENTRIES.map(e => (
        <a key={e.id} className="k-writing-row" onClick={(ev) => { ev.preventDefault(); onSelect && onSelect(e); }}>
          <span className="k-writing-date">{e.date}</span>
          <div>
            <div className="k-writing-title">{e.title}</div>
            <div className="k-writing-meta">{e.meta}</div>
          </div>
          <span className="k-writing-readtime">{e.readtime}</span>
        </a>
      ))}
    </div>
  </div>
);

Object.assign(window, { Writings, ENTRIES });
