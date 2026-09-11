import Link from "next/link";

import type { Career } from "@/content/career";
import type { CareerRole } from "@/content/career-schema";

import { CareerPeriod } from "./career-period";

function Role({ role }: { role: CareerRole }) {
  return (
    <li id={role.id} className="career-role">
      <div className="career-role__heading">
        <div>
          <h4>{role.title}</h4>
          <p className="career-role__organization">{role.organization}</p>
        </div>
        <CareerPeriod start={role.start} end={role.end} />
      </div>
      <p>{role.summary}</p>
      {role.highlights.length > 0 ? (
        <ul className="career-highlights">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

const grantFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
});

export function ExperienceView({ career }: { career: Career }) {
  return (
    <div className="experience-page">
      <header className="experience-header">
        <p className="section-kicker">Experience / {career.name}</p>
        <h1>From building products to leading engineering.</h1>
        <p>{career.experienceIntroduction}</p>
        <nav className="experience-jump-nav" aria-label="Experience sections">
          <a href="#career">
            Career <span aria-hidden="true">↓</span>
          </a>
          <a href="#selected-work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
          <a href="#patent">
            Patent <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </header>

      <section
        id="career"
        className="career-timeline"
        aria-labelledby="career-title"
      >
        <div className="home-section-heading">
          <div>
            <p className="section-kicker">Career progression</p>
            <h2 id="career-title">Growing scope. Consistent involvement.</h2>
          </div>
          <p>
            Product, architecture, and people have remained connected throughout
            the work.
          </p>
        </div>
        {career.chapters.map((chapter) => (
          <article
            key={chapter.id}
            id={chapter.id}
            className="career-chapter"
            aria-labelledby={`${chapter.id}-title`}
          >
            <header className="career-chapter__header">
              <p className="section-kicker">{chapter.context}</p>
              <h3 id={`${chapter.id}-title`}>{chapter.organization}</h3>
              <p>{chapter.summary}</p>
              <p className="career-technologies">
                {chapter.technologies.join(" · ")}
              </p>
            </header>
            <ol className="career-roles">
              {chapter.roles.map((role) => (
                <Role key={role.id} role={role} />
              ))}
            </ol>
          </article>
        ))}

        <section
          id="earlier-experience"
          className="earlier-experience"
          aria-labelledby="earlier-title"
        >
          <div>
            <p className="section-kicker">Earlier foundations</p>
            <h3 id="earlier-title">
              Software, interfaces, and physical systems.
            </h3>
            <p>
              Earlier work in UI/UX, client delivery, and building automation
              established a practical connection between how systems work and
              how people use them.
            </p>
          </div>
          <div>
            <p className="career-overlap-note">
              Independent work and some early responsibilities overlapped.
            </p>
            <ul className="earlier-roles">
              {career.earlierRoles.map((role) => (
                <li key={role.id} id={role.id}>
                  <h4>{role.organization}</h4>
                  <p className="earlier-roles__title">{role.title}</p>
                  <CareerPeriod start={role.start} end={role.end} />
                  <p>{role.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <section
        id="selected-work"
        className="selected-work"
        aria-labelledby="selected-work-title"
      >
        <div className="home-section-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="selected-work-title">Decisions behind the delivery.</h2>
          </div>
          <p>
            A closer look at the problems, contributions, and architectural
            choices behind three projects.
          </p>
        </div>
        {career.work.map((work, index) => (
          <article
            key={work.id}
            id={work.id}
            className="work-account"
            aria-labelledby={`${work.id}-title`}
          >
            <header>
              <p className="section-kicker">
                {String(index + 1).padStart(2, "0")} / {work.category}
              </p>
              <h3 id={`${work.id}-title`}>{work.title}</h3>
              <p className="career-technologies">
                {work.disciplines.join(" · ")}
              </p>
            </header>
            <dl>
              <div>
                <dt>The problem</dt>
                <dd>{work.context}</dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>{work.contribution}</dd>
              </div>
              <div>
                <dt>What changed</dt>
                <dd>{work.outcome}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section
        id="patent"
        className="patent-detail"
        aria-labelledby="patent-title"
      >
        <div>
          <p className="section-kicker">
            Public record / {career.patent.attribution}
          </p>
          <h2 id="patent-title">{career.patent.number}</h2>
          <p className="patent-detail__date">
            Granted{" "}
            <time dateTime={career.patent.granted}>
              {grantFormatter.format(
                new Date(`${career.patent.granted}T00:00:00Z`),
              )}
            </time>
          </p>
        </div>
        <div>
          <h3>{career.patent.title}</h3>
          <p>{career.patent.summary}</p>
          <a
            className="text-link"
            href={career.patent.href}
            target="_blank"
            rel="noopener noreferrer"
            title="Open the USPTO patent PDF in a new tab"
          >
            <span>
              Read the patent (USPTO PDF){" "}
              <span className="sr-only">(opens in a new tab)</span>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <nav className="article-next" aria-label="Continue from experience">
        <p>Architecture & engineering leadership</p>
        <Link href="/writing">
          Read the writing <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </div>
  );
}
