/* About — long-form bio */

const About = () => (
  <div>
    <SectionHeader title="Operator Brief" />
    <div className="k-prose">
      <p>
        <strong>Joseph Grgic</strong> is a senior UX designer working at the intersection of
        machine-learning research and product surfaces. The work focuses on how operators —
        analysts, researchers, labelers — read, query, and intervene in systems that increasingly
        run on inscrutable model output.
      </p>
      <p>
        Eight years across consumer and tools roles, the last four embedded with research teams
        shipping evaluation infrastructure, annotation pipelines, and the kind of debugging
        surfaces that don't show up in case studies. Comfortable design partner from{' '}
        <strong>zero to a published product</strong>, comfortable systems lead through{' '}
        <strong>v2 and beyond</strong>.
      </p>
      <p>
        Trained in industrial design (Pratt, 2016). Live in Berlin. Available for a small number
        of staff-level engagements per quarter; happy to talk to teams thinking about evaluation,
        labeling, or anything in the long shadow of a model.
      </p>

      <div className="k-label" style={{ marginTop: 'var(--s-7)', marginBottom: 'var(--s-3)' }}>Selected Clients</div>
      <ul>
        <li><span>Anthropic</span><span>2023 – Present</span></li>
        <li><span>Cohere</span><span>2022 – 2023</span></li>
        <li><span>Scale AI</span><span>2021 – 2022</span></li>
        <li><span>Google Research</span><span>2020 – 2021</span></li>
        <li><span>The New York Times R&amp;D</span><span>2018 – 2020</span></li>
      </ul>

      <p>
        Reach out at <a href="#" className="k-link">joseph@kronos.lab</a> or via the contact form.
        Response time is usually within two business days.
      </p>
    </div>
  </div>
);

window.About = About;
