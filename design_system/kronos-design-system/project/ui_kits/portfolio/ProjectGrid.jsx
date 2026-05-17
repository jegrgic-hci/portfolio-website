/* ProjectCard + ProjectGrid */

const PROJECTS = [
  { id: '01.A', title: 'Cortex Dashboard', tags: ['UX Research', '2024'], featured: false, desc: 'Re-platforming the analyst-facing surface for a high-volume model-evaluation pipeline. Reduced time-to-insight by 38%.' },
  { id: '01.B', title: 'Sift Annotation Tool', tags: ['Product Design', '2024'], featured: true,  desc: 'Greenfield labeling environment for multi-modal datasets. Custom keyboard model + cross-document review queue.' },
  { id: '02.A', title: 'Helio Console',     tags: ['Systems Design', '2023'], featured: false, desc: 'Internal observability console rebuilt around protocol-style task primitives. 0→1 design partner role.' },
  { id: '02.B', title: 'Argos Identity',    tags: ['Brand', '2023'], featured: false, desc: 'Identity + tokens + initial component layer for a developer-tools spinout. Documented in this very system.' },
  { id: '03.A', title: 'Pulse Writing App', tags: ['Product Design', '2022'], featured: false, desc: 'Markdown-first writing tool exploring AI-assisted editing without an autocomplete UI. Shipped to beta.' },
  { id: '03.B', title: 'Field Notebook',    tags: ['UX Research', '2022'], featured: false, desc: 'Mobile companion for qualitative researchers. Audio-first capture with on-device transcription.' },
];

const ProjectCard = ({ project, onClick }) => (
  <button className="k-card" onClick={() => onClick && onClick(project)}>
    <div className="k-card-image">
      <span className="k-card-image-id">PROJ_{project.id}</span>
      <span>Image Container</span>
    </div>
    <div className="k-card-body">
      <div className="k-card-tags">
        {project.tags.map((t, i) => (
          <Tag key={i} variant={project.featured && i === 0 ? 'teal' : undefined}>{t}</Tag>
        ))}
        {project.featured && <Tag variant="teal">Featured</Tag>}
      </div>
      <div className="k-card-title">{project.title}</div>
      <div className="k-card-desc">{project.desc}</div>
      <span className="k-btn k-btn-ghost" style={{ width: 'fit-content' }}>
        View Case Study <Icon name="arrow" size={14} />
      </span>
    </div>
  </button>
);

const ProjectGrid = ({ onSelect }) => (
  <div>
    <SectionHeader title="Latest Projects" action="View All →" />
    <div className="k-grid">
      {PROJECTS.map(p => <ProjectCard key={p.id} project={p} onClick={onSelect} />)}
    </div>
  </div>
);

Object.assign(window, { ProjectCard, ProjectGrid, PROJECTS });
