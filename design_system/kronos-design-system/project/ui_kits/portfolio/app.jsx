/* App shell — wires Sidebar + content + Footer with route state */

const ROUTE_TITLES = {
  work:     { label: 'Surface / 01 — Selected Work',      title: 'Work' },
  about:    { label: 'Surface / 02 — Operator',           title: 'About' },
  writings: { label: 'Surface / 03 — Field Notes',        title: 'Writings' },
  contact:  { label: 'Surface / 04 — Open Channel',       title: 'Contact' },
};

const App = () => {
  const [route, setRoute] = React.useState('work');

  // Reset scroll on route change
  React.useEffect(() => {
    document.querySelector('main.k-content')?.scrollTo?.({ top: 0 });
    window.scrollTo({ top: 0 });
  }, [route]);

  const meta = ROUTE_TITLES[route];

  return (
    <React.Fragment>
      <Sidebar route={route} onNavigate={setRoute} />
      <main className="k-content" data-screen-label={meta.title}>
        <div className="k-page">
          <header className="k-page-header">
            <div className="k-route-label">{meta.label}</div>
            <div className="k-major">{meta.title}</div>
          </header>

          {route === 'work' && (
            <React.Fragment>
              <Hero onPrimary={() => setRoute('work')} onSecondary={() => setRoute('contact')} />
              <ProjectGrid />
            </React.Fragment>
          )}
          {route === 'about'    && <About />}
          {route === 'writings' && <Writings />}
          {route === 'contact'  && <ContactForm />}
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
