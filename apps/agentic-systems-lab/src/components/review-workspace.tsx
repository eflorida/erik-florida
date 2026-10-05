"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { MAX_DIFF_CHARACTERS } from "@/contracts/review";
import {
  workflowRequestSchema,
  workflowRunSchema,
  type WorkflowRun,
} from "@/contracts/workflow-review";

const sampleDiff = `diff --git a/src/redirect.ts b/src/redirect.ts
--- a/src/redirect.ts
+++ b/src/redirect.ts
@@ -1,5 +1,9 @@
 export function redirectTo(target: string) {
-  window.location.assign(target);
+  if (!target.startsWith("/")) {
+    return;
+  }
+
+  window.location.assign(target);
 }`;

export function ReviewWorkspace({
  initialRun,
  isConfigured,
  model,
}: {
  initialRun?: WorkflowRun;
  isConfigured: boolean;
  model: string;
}) {
  const router = useRouter();
  const [diff, setDiff] = useState(sampleDiff);
  const [run, setRun] = useState(initialRun);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const drawer = useRef<HTMLDialogElement>(null);
  const validation = workflowRequestSchema.safeParse({ diff });

  useEffect(() => {
    if (!run || (run.status !== "queued" && run.status !== "running")) return;
    let active = true;
    const refresh = async () => {
      try {
        const response = await fetch(`/api/workflow-runs/${run.id}`, {
          cache: "no-store",
        });
        const parsed = workflowRunSchema.safeParse(await response.json());
        if (active && parsed.success) {
          setRun(parsed.data);
          setError(null);
        }
        if (active && !parsed.success)
          setError(
            "The run record could not be read. Refresh the page to retry.",
          );
      } catch {
        if (active)
          setError("Connection lost. The run can be reopened from this URL.");
      }
    };
    const timer = window.setInterval(refresh, 1500);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [run]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validation.success || !isConfigured || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/workflow-runs", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const body: unknown = await response.json();
      if (
        !response.ok ||
        !body ||
        typeof body !== "object" ||
        !("url" in body) ||
        typeof body.url !== "string"
      ) {
        setError(
          body &&
            typeof body === "object" &&
            "error" in body &&
            typeof body.error === "string"
            ? body.error
            : "The run could not be started.",
        );
        return;
      }
      router.push(body.url);
    } catch {
      setError("The Lab server could not be reached. Try again shortly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="workflow-workspace">
      <section className="workflow-hero" aria-labelledby="workflow-title">
        <div className="live-badge">
          <span aria-hidden="true" /> Agentic workflow · two specialists
        </div>
        <p className="eyebrow">Change review workspace</p>
        <h1 id="workflow-title">Send a change. Follow the work.</h1>
        <p className="workflow-lede">
          Delegate a bounded TypeScript diff to a risk reviewer and test
          strategist. Their reports become a human decision brief you can
          inspect, not an automated approval.
        </p>
        <div className="workflow-facts">
          <span>Two parallel review tasks</span>
          <span>Live run record</span>
          <span>24-hour run link</span>
        </div>
        <p className="workflow-boundary">
          The agents see only the diff you submit. They cannot inspect your
          repository, execute tests, or change code. Anyone with a run URL can
          read its reports until it expires; avoid private source.
        </p>
      </section>

      <div className="workflow-grid">
        <section
          className="workflow-input"
          aria-labelledby="workflow-input-title"
        >
          <div className="workflow-section-head">
            <div>
              <p className="eyebrow">01 / Dispatch</p>
              <h2 id="workflow-input-title">A bounded change</h2>
            </div>
            <span>
              {diff.length.toLocaleString()} /{" "}
              {MAX_DIFF_CHARACTERS.toLocaleString()}
            </span>
          </div>
          <form onSubmit={submit}>
            <label htmlFor="workflow-diff">TypeScript unified diff</label>
            <textarea
              id="workflow-diff"
              value={diff}
              spellCheck={false}
              onChange={(event) => setDiff(event.target.value)}
              aria-describedby="workflow-guidance"
            />
            <p id="workflow-guidance">
              {validation.success
                ? "Sample loaded. Replace it with your own diff if you like."
                : validation.error.issues[0]?.message}
            </p>
            <div className="workflow-actions">
              <button
                type="button"
                className="control-button"
                onClick={() => setDiff(sampleDiff)}
              >
                Load sample
              </button>
              <button
                className="control-button control-button--primary"
                type="submit"
                disabled={!isConfigured || !validation.success || submitting}
              >
                {submitting ? "Queuing…" : "Delegate review"}
              </button>
            </div>
          </form>
          {!isConfigured ? (
            <div className="setup-state" role="status">
              <strong>Review service unavailable</strong>
              <span>
                This environment is not ready to accept live workflow runs. You
                can still inspect the reference scenario.
              </span>
            </div>
          ) : null}
          <dl className="workflow-meta">
            <div>
              <dt>Model</dt>
              <dd>{model}</dd>
            </div>
            <div>
              <dt>Input limit</dt>
              <dd>12,000 characters</dd>
            </div>
            <div>
              <dt>Execution</dt>
              <dd>Separate worker</dd>
            </div>
          </dl>
        </section>

        <section
          className="workflow-results"
          aria-labelledby="workflow-results-title"
          aria-live="polite"
        >
          <div className="workflow-section-head">
            <div>
              <p className="eyebrow">02 / Inspect</p>
              <h2 id="workflow-results-title">Review packet</h2>
            </div>
            <span className={`run-state run-state--${run?.status ?? "ready"}`}>
              {run?.status ?? "ready"}
            </span>
          </div>
          {run ? (
            <div className="run-toolbar">
              <div>
                <span>Run {run.id.slice(0, 8)}</span>
                <small>
                  Expires {new Date(run.expiresAt).toLocaleString()}
                </small>
              </div>
              <button
                type="button"
                className="control-button"
                onClick={() => drawer.current?.showModal()}
              >
                Activity <span aria-hidden="true">↗</span>
              </button>
            </div>
          ) : null}
          {error ? (
            <p className="workflow-error" role="alert">
              {error}
            </p>
          ) : null}
          {!run ? (
            <div className="workflow-empty">
              <span>◌</span>
              <h3>The packet starts with a real run</h3>
              <p>
                Risk findings, test ideas, and a decision brief will appear here
                as the workflow finishes each task.
              </p>
            </div>
          ) : null}
          {run ? (
            <div className="workflow-card-stack">
              <article className="workflow-card">
                <header>
                  <span className="eyebrow">Risk review · model judgment</span>
                  <span
                    className={`workflow-dot ${run.output.risk ? "workflow-dot--done" : ""}`}
                  />
                </header>
                {run.output.risk ? (
                  <>
                    <div className="workflow-card-title">
                      <h3>{run.output.risk.summary}</h3>
                      <span className={`risk risk--${run.output.risk.level}`}>
                        {run.output.risk.level}
                      </span>
                    </div>
                    {run.output.risk.findings.length ? (
                      <ul>
                        {run.output.risk.findings.map((finding, index) => (
                          <li key={index}>
                            <strong>{finding.title}</strong>
                            <p>{finding.reason}</p>
                            {finding.reference ? (
                              <code>{finding.reference}</code>
                            ) : null}
                            <p>
                              <b>Try:</b> {finding.action}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>
                        No actionable risks returned from the supplied diff.
                        This is not proof of correctness.
                      </p>
                    )}
                    <p className="workflow-limits">
                      Uncertainty: {run.output.risk.uncertainty}
                    </p>
                  </>
                ) : (
                  <p className="workflow-pending">
                    Waiting for the risk reviewer.
                  </p>
                )}
              </article>
              <article className="workflow-card">
                <header>
                  <span className="eyebrow">Test strategy · proposal</span>
                  <span
                    className={`workflow-dot ${run.output.tests ? "workflow-dot--done" : ""}`}
                  />
                </header>
                {run.output.tests ? (
                  <>
                    <h3>{run.output.tests.strategy}</h3>
                    <ul>
                      {run.output.tests.cases.map((test, index) => (
                        <li key={index}>
                          <strong>
                            {test.title} <em>{test.priority}</em>
                          </strong>
                          <p>{test.purpose}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="workflow-limits">
                      Not executed: {run.output.tests.limits}
                    </p>
                  </>
                ) : (
                  <p className="workflow-pending">
                    Waiting for the test strategist.
                  </p>
                )}
              </article>
              <article className="workflow-card workflow-card--brief">
                <header>
                  <span className="eyebrow">
                    Human decision brief · advisory
                  </span>
                  <span
                    className={`workflow-dot ${run.output.brief ? "workflow-dot--done" : ""}`}
                  />
                </header>
                {run.output.brief ? (
                  <>
                    <h3>
                      {run.output.brief.recommendation === "consider-approval"
                        ? "Consider approval"
                        : "Request changes"}
                    </h3>
                    <p>{run.output.brief.rationale}</p>
                    <ol>
                      {run.output.brief.nextActions.map((action, index) => (
                        <li key={index}>{action}</li>
                      ))}
                    </ol>
                    <p className="workflow-limits">
                      A person verifies the full repository and owns every merge
                      or deployment.
                    </p>
                  </>
                ) : (
                  <p className="workflow-pending">
                    The brief follows both delegated reports.
                  </p>
                )}
              </article>
              {run.status === "failed" ? (
                <div className="workflow-error" role="alert">
                  <strong>Review stopped.</strong> {run.error} You can submit a
                  new run from the input panel.
                </div>
              ) : null}
              <div className="workflow-usage">
                <span>Measured usage</span>
                <strong>
                  {run.inputTokens.toLocaleString()} in ·{" "}
                  {run.outputTokens.toLocaleString()} out
                </strong>
                <small>
                  {run.estimatedCostUsd === null
                    ? "Provider tokens; billing estimate unavailable for this model."
                    : `Estimated cost $${run.estimatedCostUsd.toFixed(4)} at current standard rates; billing may differ.`}
                </small>
              </div>
            </div>
          ) : null}
        </section>
      </div>

      <dialog
        className="activity-drawer"
        ref={drawer}
        aria-labelledby="activity-title"
        onClick={(event) => {
          if (event.target === drawer.current) drawer.current.close();
        }}
      >
        <div className="activity-drawer__panel">
          <header>
            <div>
              <p className="eyebrow">Actual run events</p>
              <h2 id="activity-title">Workflow activity</h2>
            </div>
            <button
              type="button"
              className="control-button"
              onClick={() => drawer.current?.close()}
              aria-label="Close activity"
            >
              Close
            </button>
          </header>
          <p>
            These are recorded app-level transitions. Model prompts and private
            provider traces are not shown.
          </p>
          <ol>
            {run?.events.map((event) => (
              <li key={event.sequence}>
                <time dateTime={event.at}>
                  {new Date(event.at).toLocaleTimeString()}
                </time>
                <span>
                  {event.step} / {event.state}
                </span>
                <p>{event.message}</p>
              </li>
            ))}
          </ol>
        </div>
      </dialog>
    </div>
  );
}
