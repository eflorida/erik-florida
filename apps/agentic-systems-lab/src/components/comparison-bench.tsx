"use client";

import { useState } from "react";

import {
  comparisonResultSchema,
  type ComparisonCase,
  type ComparisonResult,
} from "@/contracts/comparison";

const decisionCopy = {
  "meets-stated-rules": "Meets stated rules",
  "does-not-meet": "Does not meet requirements",
  "needs-review": "Needs supplier evidence",
} as const;

export function ComparisonBench({
  cases,
  isConfigured,
  model,
}: {
  cases: ComparisonCase[];
  isConfigured: boolean;
  model: string;
}) {
  const [selectedId, setSelectedId] = useState(cases[0]?.id ?? "");
  const [result, setResult] = useState<ComparisonResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const selected = cases.find((item) => item.id === selectedId);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected || !isConfigured || busy) return;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch("/api/comparisons", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ caseId: selected.id }),
      });
      const body: unknown = await response.json();
      if (!response.ok) {
        setError(
          body &&
            typeof body === "object" &&
            "error" in body &&
            typeof body.error === "string"
            ? body.error
            : "The comparison could not be completed.",
        );
        return;
      }
      const parsed = comparisonResultSchema.safeParse(body);
      if (!parsed.success || parsed.data.caseId !== selected.id) {
        setError("The result could not be read. Try the case again.");
        return;
      }
      setResult(parsed.data);
    } catch {
      setError("The Lab server could not be reached. Try again shortly.");
    } finally {
      setBusy(false);
    }
  }

  if (!selected) return null;
  return (
    <div className="comparison-bench">
      <section className="comparison-hero" aria-labelledby="comparison-title">
        <div>
          <p className="eyebrow">Experiment 02 / AI inside a product</p>
          <h1 id="comparison-title">A substitute needs evidence.</h1>
        </div>
        <div>
          <p>
            A buyer wants to replace a standard chair with a supplier option.
            One agent extracts specifications from messy catalog notes. Code
            checks the required fit. A person decides whether to buy.
          </p>
          <span>Fictional catalog · real workflow when enabled</span>
        </div>
      </section>

      <div className="comparison-grid">
        <section
          className="comparison-input"
          aria-labelledby="comparison-input-title"
        >
          <p className="eyebrow">01 / Choose a case</p>
          <h2 id="comparison-input-title">What needs a decision?</h2>
          <form onSubmit={submit}>
            <label htmlFor="comparison-case">Catalog case</label>
            <select
              id="comparison-case"
              value={selectedId}
              disabled={busy}
              onChange={(event) => {
                setSelectedId(event.target.value);
                setResult(null);
                setError(null);
              }}
            >
              {cases.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <p className="comparison-question">{selected.question}</p>
            <button
              className="control-button control-button--primary"
              type="submit"
              disabled={!isConfigured || busy}
            >
              {busy ? "Extracting facts…" : "Run comparison"}
            </button>
          </form>
          {!isConfigured ? (
            <p className="setup-state" role="status">
              Live comparison is unavailable here. The cases and rules below
              remain inspectable; no model result is being represented.
            </p>
          ) : null}
          <p className="comparison-caveat">
            These are invented products and supplier notes. The model sees only
            the selected notes; it cannot browse, contact a supplier, or place
            an order. This request-bound result is not stored by the Lab.
            Configured model: {model}.
          </p>
        </section>

        <section
          className="comparison-sources"
          aria-labelledby="comparison-sources-title"
        >
          <p className="eyebrow">02 / Inspect the input</p>
          <h2 id="comparison-sources-title">The buyer&apos;s requirements</h2>
          <p>{selected.requested.name}</p>
          <dl className="comparison-requirements">
            <div>
              <dt>Seat height covers</dt>
              <dd>
                {selected.requested.seatHeightMinCm}–
                {selected.requested.seatHeightMaxCm} cm
              </dd>
            </div>
            <div>
              <dt>Rated load</dt>
              <dd>At least {selected.requested.minLoadKg} kg</dd>
            </div>
            <div>
              <dt>Lumbar support</dt>
              <dd>Adjustable</dd>
            </div>
            <div>
              <dt>Armrests</dt>
              <dd>Adjustable</dd>
            </div>
          </dl>
          <h3>Candidate / {selected.candidate.name}</h3>
          <ol className="comparison-notes">
            {selected.candidate.notes.map((note) => (
              <li key={note.id} id={`note-${note.id}`}>
                <span>
                  {note.id} / {note.label}
                </span>
                <p>{note.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="comparison-result"
          aria-labelledby="comparison-result-title"
          aria-live="polite"
        >
          <p className="eyebrow">03 / Inspect the result</p>
          <h2 id="comparison-result-title">Decision evidence</h2>
          {error ? (
            <p className="workflow-error" role="alert">
              {error}
            </p>
          ) : null}
          {!result ? (
            <div className="comparison-empty">
              <strong>
                {busy
                  ? "The model is reading the supplied notes."
                  : "No model result for this case yet."}
              </strong>
              <p>
                A live result will show extracted facts, source references,
                deterministic rule checks, and the remaining human decision.
              </p>
            </div>
          ) : (
            <>
              <div
                className={`comparison-decision comparison-decision--${result.decision}`}
              >
                <span>Rule outcome</span>
                <strong>{decisionCopy[result.decision]}</strong>
                <p>{result.summary}</p>
              </div>
              <ol className="comparison-checks">
                {result.checks.map((check) => (
                  <li key={check.label}>
                    <span
                      className={`comparison-check comparison-check--${check.result}`}
                    >
                      {check.result}
                    </span>
                    <div>
                      <strong>{check.label}</strong>
                      <small>
                        Needed: {check.required} · Extracted: {check.observed}
                      </small>
                      {check.evidenceId ? (
                        <a href={`#note-${check.evidenceId}`}>
                          Source note {check.evidenceId} ↗
                        </a>
                      ) : (
                        <small>No supporting note</small>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              <div className="comparison-uncertainty">
                <strong>Model uncertainty</strong>
                <p>{result.uncertainty}</p>
              </div>
              <dl className="comparison-telemetry">
                <div>
                  <dt>Model</dt>
                  <dd>{result.model}</dd>
                </div>
                <div>
                  <dt>Measured usage</dt>
                  <dd>
                    {result.inputTokens} in · {result.outputTokens} out
                  </dd>
                </div>
                <div>
                  <dt>Response time</dt>
                  <dd>{(result.latencyMs / 1000).toFixed(1)} s</dd>
                </div>
              </dl>
            </>
          )}
          <p className="comparison-human">
            <strong>Human decision:</strong> confirm the catalog evidence,
            physical fit, comfort, and purchasing terms before substitution.
            This Lab does not approve or order anything.
          </p>
        </section>
      </div>
      <aside className="comparison-method">
        <p className="eyebrow">Why this shape?</p>
        <p>
          The model handles unstructured supplier language. Deterministic code
          applies explicit requirements and rejects unknown source IDs. Missing
          or conflicting facts remain open questions. A one-step model call is
          enough for this task; the separate change-review experiment
          demonstrates offloaded parallel work.
        </p>
        <small>
          Model quality has not been established by these three cases.
        </small>
      </aside>
    </div>
  );
}
