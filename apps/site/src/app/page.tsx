export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Erik Florida home">
          EF
        </a>
        <p>Repository foundation</p>
      </header>

      <section className="hero" id="top" aria-labelledby="page-title">
        <p className="eyebrow">Erik Florida</p>
        <h1 id="page-title">Engineering leadership for the agentic era.</h1>
        <p className="hero-copy">
          I build teams, architecture, and software-delivery systems that turn
          emerging technology into durable customer value.
        </p>
        <div className="status" role="status">
          <span aria-hidden="true" />
          The platform foundation is live. The full professional site is next.
        </div>
      </section>

      <section className="signals" aria-label="Platform direction">
        <article>
          <p>01</p>
          <h2>Leadership</h2>
          <span>
            Engineering organizations built for clarity and high output.
          </span>
        </article>
        <article>
          <p>02</p>
          <h2>Mission Control</h2>
          <span>
            An operating methodology for observable agentic development.
          </span>
        </article>
        <article>
          <p>03</p>
          <h2>Systems Lab</h2>
          <span>Executable evidence will follow the professional site.</span>
        </article>
      </section>
    </main>
  );
}
