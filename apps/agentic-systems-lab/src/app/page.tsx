import Link from "next/link";

const experiments = [
  {
    number: "01",
    label: "Engineering systems",
    title: "Change review, with the work visible.",
    description:
      "Delegate a bounded code change, follow two specialist reports, and inspect the advisory packet and actual run activity. The engineering decision stays with a person.",
    href: "/workspace",
    action: "Explore the change-review workspace",
    detail: "Mastra workflow · background worker · retained run",
  },
  {
    number: "02",
    label: "AI inside a product",
    title: "Can this product substitute for that one?",
    description:
      "Compare fictional catalog records. A model extracts facts from supplier notes; explicit rules test required fit, and missing evidence goes to a human reviewer.",
    href: "/comparison",
    action: "Explore product comparison",
    detail: "Bounded extraction · deterministic policy · human judgment",
  },
] as const;

export default function LabHomePage() {
  return (
    <main id="main-content" className="lab-home">
      <section className="lab-home__hero" aria-labelledby="lab-home-title">
        <div>
          <p className="eyebrow">Field guide / Agentic Systems Lab</p>
          <h1 id="lab-home-title">Small experiments. Inspectable work.</h1>
        </div>
        <div className="lab-home__intro">
          <p>
            This is a working collection of agentic product and engineering
            experiments by Erik Florida. Each starts with a bounded task, shows
            what the system actually did, and leaves consequential decisions
            with a person.
          </p>
          <p>
            Start with a sample. Then inspect the result, the evidence behind
            it, and the limits of what was verified.
          </p>
          <Link
            className="control-button control-button--primary"
            href="/comparison"
          >
            Start with a product comparison <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section
        className="lab-home__experiments"
        aria-labelledby="experiments-title"
      >
        <div className="lab-home__section-head">
          <div>
            <p className="eyebrow">Open specimens</p>
            <h2 id="experiments-title">Two ways to put agents to work</h2>
          </div>
          <span>02 / active investigations</span>
        </div>
        <div className="lab-home__cards">
          {experiments.map((experiment) => (
            <article className="lab-home__card" key={experiment.number}>
              <div className="lab-home__card-top">
                <span>
                  {experiment.number} / {experiment.label}
                </span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{experiment.title}</h3>
              <p>{experiment.description}</p>
              <small>{experiment.detail}</small>
              <Link href={experiment.href}>{experiment.action} →</Link>
            </article>
          ))}
        </div>
      </section>

      <aside className="lab-home__note" aria-labelledby="lab-note-title">
        <div>
          <p className="eyebrow">Reading the evidence</p>
          <h2 id="lab-note-title">What counts here?</h2>
        </div>
        <p>
          A sample input is not proof of model quality. The original{" "}
          <Link href="/reference">reference scenario</Link> is an authored
          design specimen, and the{" "}
          <Link href="/quick-review">one-shot review</Link> is an earlier,
          narrower runtime. Live results are labeled separately from
          deterministic checks and human judgments.
        </p>
      </aside>
    </main>
  );
}
