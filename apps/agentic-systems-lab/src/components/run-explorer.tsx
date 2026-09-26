"use client";

import { useState } from "react";

import type { RunEvidence, RunRecord } from "@/contracts/run";

const phaseLabels = {
  intent: "Intent",
  work: "Work",
  evaluation: "Evaluation",
  transfer: "Transfer",
} as const;

const authoredAtFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "UTC",
});

function EvidenceCard({ evidence }: { evidence: RunEvidence }) {
  return (
    <article className="evidence-card">
      <div className="evidence-card__heading">
        <span className={`evidence-kind evidence-kind--${evidence.kind}`}>
          {evidence.kind}
        </span>
        <span className="evidence-status">Scenario claim</span>
      </div>
      <h3>{evidence.label}</h3>
      <p>{evidence.summary}</p>
      {evidence.command ? <code>{evidence.command}</code> : null}
    </article>
  );
}

export function RunExplorer({ run }: { run: RunRecord }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = run.steps[activeIndex] ?? run.steps[0];

  if (!activeStep) {
    return null;
  }

  const activeEvidence = activeStep.evidenceIds.flatMap((evidenceId) => {
    const evidence = run.evidence.find((item) => item.id === evidenceId);
    return evidence ? [evidence] : [];
  });
  const isLastStep = activeIndex === run.steps.length - 1;

  return (
    <div className="lab-workspace">
      <aside className="mission-rail" aria-labelledby="mission-title">
        <div className="run-mode">
          <span className="run-mode__pulse" aria-hidden="true" />
          <div>
            <p>Reference scenario</p>
            <span>No live model call</span>
          </div>
        </div>

        <section className="mission-summary">
          <p className="eyebrow">Mission</p>
          <h1 id="mission-title">{run.title}</h1>
          <p>{run.scenario.intent}</p>
        </section>

        <section className="run-metadata" aria-label="Run metadata">
          <dl>
            <div>
              <dt>Run</dt>
              <dd>{run.id}</dd>
            </div>
            <div>
              <dt>Source</dt>
              <dd>{run.scenario.repository}</dd>
            </div>
            <div>
              <dt>Authored</dt>
              <dd>
                <time dateTime={run.authoredAt}>
                  {authoredAtFormatter.format(new Date(run.authoredAt))} UTC
                </time>
              </dd>
            </div>
          </dl>
        </section>

        <section className="acceptance" aria-labelledby="acceptance-title">
          <p className="eyebrow" id="acceptance-title">
            Acceptance criteria
          </p>
          <ol>
            {run.scenario.acceptanceCriteria.map((criterion, index) => (
              <li key={criterion}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {criterion}
              </li>
            ))}
          </ol>
        </section>
      </aside>

      <section className="run-surface" aria-labelledby="run-title">
        <header className="run-surface__header">
          <div>
            <p className="eyebrow">Active run</p>
            <h2 id="run-title">{run.scenario.title}</h2>
          </div>
          <div
            className="run-progress"
            aria-label={`${activeIndex + 1} of ${run.steps.length} steps`}
          >
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span aria-hidden="true">/</span>
            <span>{String(run.steps.length).padStart(2, "0")}</span>
          </div>
        </header>

        <section className="input-contract" aria-labelledby="provenance-title">
          <p className="eyebrow">Provenance</p>
          <h2 id="provenance-title">Original reference scenario</h2>
          <p>{run.provenance.disclosure}</p>
        </section>

        <div className="input-contract">
          <p className="eyebrow">Change request</p>
          <p>{run.scenario.input}</p>
        </div>

        <ol className="step-list" aria-label="Run steps">
          {run.steps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  className={
                    isActive ? "step-button step-button--active" : "step-button"
                  }
                  aria-current={isActive ? "step" : undefined}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="step-sequence">
                    {String(step.sequence).padStart(2, "0")}
                  </span>
                  <span className="step-copy">
                    <span className="step-phase">
                      {phaseLabels[step.phase]}
                    </span>
                    <strong>{step.label}</strong>
                    <span>{step.summary}</span>
                  </span>
                  <span className={`step-state step-state--${step.status}`}>
                    {step.status === "scenario-complete"
                      ? "Scenario complete"
                      : "Human"}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="replay-controls">
          <button
            type="button"
            className="control-button"
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
          >
            Previous step
          </button>
          <button
            type="button"
            className="control-button control-button--primary"
            onClick={() => setActiveIndex(isLastStep ? 0 : activeIndex + 1)}
          >
            {isLastStep ? "Reset replay" : "Advance replay"}
          </button>
        </div>
      </section>

      <aside
        className="evidence-rail"
        aria-labelledby="evidence-title"
        aria-live="polite"
      >
        <header className="evidence-rail__header">
          <div>
            <p className="eyebrow">Inspector</p>
            <h2 id="evidence-title">Evidence & artifact</h2>
          </div>
          <span className={`step-state step-state--${activeStep.status}`}>
            {activeStep.status === "scenario-complete"
              ? "Scenario complete"
              : "Human review"}
          </span>
        </header>

        <section className="active-step" aria-labelledby="active-step-title">
          <p className="eyebrow">
            {String(activeStep.sequence).padStart(2, "0")} ·{" "}
            {phaseLabels[activeStep.phase]}
          </p>
          <h2 id="active-step-title">{activeStep.label}</h2>
          <p>{activeStep.detail}</p>
        </section>

        {activeStep.artifact ? (
          <figure className="artifact">
            <figcaption>
              <span>{activeStep.artifact.kind}</span>
              {activeStep.artifact.label}
            </figcaption>
            <pre>
              <code>{activeStep.artifact.content}</code>
            </pre>
          </figure>
        ) : null}

        <div className="evidence-stack">
          {activeEvidence.map((evidence) => (
            <EvidenceCard key={evidence.id} evidence={evidence} />
          ))}
        </div>

        {activeStep.phase === "transfer" ? (
          <section className="transfer-card" aria-labelledby="transfer-title">
            <p className="eyebrow">Transfer recommendation</p>
            <h3 id="transfer-title">{run.transfer.recommendation}</h3>
            <p>{run.transfer.summary}</p>
            <span>{run.transfer.authority} owns the decision</span>
          </section>
        ) : null}

        <noscript>
          <section className="no-script-transcript">
            <h2>Complete run transcript</h2>
            {run.steps.map((step) => (
              <article key={step.id}>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </section>
        </noscript>
      </aside>
    </div>
  );
}
