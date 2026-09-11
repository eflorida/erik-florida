"use client";

import { useState } from "react";

import {
  MAX_DIFF_CHARACTERS,
  reviewApiResponseSchema,
  reviewRequestSchema,
  type ReviewApiResponse,
} from "@/contracts/review";

const sampleDiff = `diff --git a/src/redirect.ts b/src/redirect.ts
index 1337abc..7331def 100644
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

function formatCost(cost: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 4,
    maximumFractionDigits: 6,
  }).format(cost);
}

export function LiveReview({
  isConfigured,
  model,
}: {
  isConfigured: boolean;
  model: string;
}) {
  const [diff, setDiff] = useState(sampleDiff);
  const [state, setState] = useState<
    | { status: "ready" }
    | { status: "running" }
    | { status: "complete"; response: Extract<ReviewApiResponse, { ok: true }> }
    | { status: "error"; message: string }
  >({ status: "ready" });

  const validation = reviewRequestSchema.safeParse({ diff });
  const isRunning = state.status === "running";

  async function submitReview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validation.success || !isConfigured || isRunning) {
      return;
    }

    setState({ status: "running" });

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const parsedResponse = reviewApiResponseSchema.safeParse(
        await response.json(),
      );

      if (!parsedResponse.success) {
        setState({
          status: "error",
          message: "The server returned an unreadable review response.",
        });
        return;
      }

      if (!parsedResponse.data.ok) {
        setState({ status: "error", message: parsedResponse.data.message });
        return;
      }

      setState({ status: "complete", response: parsedResponse.data });
    } catch {
      setState({
        status: "error",
        message: "The live review service could not be reached.",
      });
    }
  }

  return (
    <div className="live-workspace">
      <section className="live-intro" aria-labelledby="live-title">
        <div className="live-badge">
          <span aria-hidden="true" />
          Live · bounded
        </div>
        <p className="eyebrow">LAB-M002</p>
        <h1 id="live-title">Review one TypeScript diff</h1>
        <p>
          A live model inspects only the text you submit. It cannot access a
          repository, run code, call tools, or make the final engineering
          decision.
        </p>
        <dl className="boundary-list">
          <div>
            <dt>Model</dt>
            <dd>{model}</dd>
          </div>
          <div>
            <dt>Input</dt>
            <dd>12,000 characters max</dd>
          </div>
          <div>
            <dt>Storage</dt>
            <dd>Disabled for this request</dd>
          </div>
          <div>
            <dt>Authority</dt>
            <dd>Human reviewer</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>Local validation only</dd>
          </div>
        </dl>
      </section>

      <form className="review-form" onSubmit={submitReview}>
        <div className="review-form__heading">
          <div>
            <p className="eyebrow">Untrusted input</p>
            <h2>TypeScript unified diff</h2>
          </div>
          <span
            className={diff.length > MAX_DIFF_CHARACTERS ? "over-limit" : ""}
          >
            {diff.length.toLocaleString("en-US")} /{" "}
            {MAX_DIFF_CHARACTERS.toLocaleString("en-US")}
          </span>
        </div>
        <label className="sr-only" htmlFor="diff-input">
          TypeScript unified diff
        </label>
        <textarea
          id="diff-input"
          value={diff}
          onChange={(event) => {
            setDiff(event.target.value);
            if (state.status !== "ready") {
              setState({ status: "ready" });
            }
          }}
          spellCheck={false}
          aria-describedby="diff-guidance"
        />
        <div className="review-form__footer">
          <p id="diff-guidance">
            {validation.success
              ? "Ready for a bounded review. Verify findings against the full codebase."
              : validation.error.issues[0]?.message}
          </p>
          <button
            type="submit"
            className="control-button control-button--primary"
            disabled={!validation.success || !isConfigured || isRunning}
          >
            {isRunning ? "Reviewing…" : "Run live review"}
          </button>
        </div>
        {!isConfigured ? (
          <div className="setup-state" role="status">
            <strong>API key required</strong>
            <span>
              Add <code>OPENAI_API_KEY</code> and set{" "}
              <code>LAB_LIVE_REVIEW_ENABLED=true</code> in the Lab server
              environment, then restart port 3100.
            </span>
          </div>
        ) : null}
      </form>

      <section
        className="review-output"
        aria-labelledby="review-output-title"
        aria-live="polite"
      >
        <header className="review-output__header">
          <div>
            <p className="eyebrow">Model judgment</p>
            <h2 id="review-output-title">Review result</h2>
          </div>
          <span className={`run-state run-state--${state.status}`}>
            {state.status}
          </span>
        </header>

        {state.status === "ready" ? (
          <div className="empty-review">
            <span aria-hidden="true">01</span>
            <h3>Evidence begins after submission</h3>
            <p>
              The result will separate model findings from measured request
              telemetry and the final human decision.
            </p>
          </div>
        ) : null}

        {state.status === "running" ? (
          <div className="running-review" role="status">
            <span aria-hidden="true" />
            <div>
              <h3>Review in progress</h3>
              <p>Waiting for a structured response. No tools are available.</p>
            </div>
          </div>
        ) : null}

        {state.status === "error" ? (
          <div className="error-review" role="alert">
            <p className="eyebrow">Run failed safely</p>
            <h3>Review unavailable</h3>
            <p>{state.message}</p>
          </div>
        ) : null}

        {state.status === "complete" ? (
          <ReviewResultView response={state.response} />
        ) : null}
      </section>
    </div>
  );
}

function ReviewResultView({
  response,
}: {
  response: Extract<ReviewApiResponse, { ok: true }>;
}) {
  const { review, telemetry } = response;

  return (
    <div className="review-result">
      <div className="verdict-block">
        <div>
          <p className="eyebrow">Recommendation</p>
          <h3>
            {review.verdict === "approve" ? "Approve" : "Request changes"}
          </h3>
        </div>
        <span className={`risk risk--${review.risk}`}>{review.risk} risk</span>
        <p>{review.summary}</p>
      </div>

      {review.findings.length > 0 ? (
        <section className="finding-list" aria-labelledby="findings-title">
          <h3 id="findings-title">Actionable findings</h3>
          {review.findings.map((finding, index) => (
            <article key={`${finding.title}-${index}`}>
              <div>
                <span className={`risk risk--${finding.severity}`}>
                  {finding.severity}
                </span>
                {finding.lineReference ? (
                  <code>{finding.lineReference}</code>
                ) : null}
              </div>
              <h4>{finding.title}</h4>
              <p>{finding.explanation}</p>
              <strong>Recommended change</strong>
              <p>{finding.recommendation}</p>
            </article>
          ))}
        </section>
      ) : (
        <section className="no-findings">
          <h3>No actionable findings returned</h3>
          <p>This is model judgment, not proof that the change is correct.</p>
        </section>
      )}

      {review.strengths.length > 0 ? (
        <section className="strength-list">
          <h3>Observed strengths</h3>
          <ul>
            {review.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="telemetry" aria-labelledby="telemetry-title">
        <div>
          <p className="eyebrow">Deterministic telemetry</p>
          <h3 id="telemetry-title">Request evidence</h3>
        </div>
        <dl>
          <div>
            <dt>Model</dt>
            <dd>{telemetry.model}</dd>
          </div>
          <div>
            <dt>Latency</dt>
            <dd>{telemetry.latencyMs.toLocaleString("en-US")} ms</dd>
          </div>
          <div>
            <dt>Tokens</dt>
            <dd>
              {telemetry.inputTokens.toLocaleString("en-US")} in ·{" "}
              {telemetry.outputTokens.toLocaleString("en-US")} out
            </dd>
          </div>
          <div>
            <dt>Est. cost</dt>
            <dd>
              {telemetry.estimatedCostUsd === null
                ? "Unavailable for override"
                : formatCost(telemetry.estimatedCostUsd)}
            </dd>
          </div>
          <div>
            <dt>Stored</dt>
            <dd>{telemetry.stored ? "Yes" : "No"}</dd>
          </div>
        </dl>
      </section>

      <section className="human-transfer">
        <p className="eyebrow">Human transfer</p>
        <h3>Verify before acting</h3>
        <p>{review.humanReviewNotes}</p>
        <strong>The model does not own merge or deployment authority.</strong>
      </section>
    </div>
  );
}
