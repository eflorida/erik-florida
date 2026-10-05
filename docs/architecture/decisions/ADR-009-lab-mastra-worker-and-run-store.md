# ADR-009 — Lab change-review workflow and run store

**Status:** Accepted for LAB-M003 local implementation, 2026-10-05

## Context

The Lab's LAB-M002 request-bound Responses call cannot keep working after navigation or expose a run on a later visit. Erik selected a change-review product slice with Mastra-managed tasks, result-specific UI, a truthful activity view, and a run that can be reopened after refresh. A Vercel request handler alone cannot provide the required background execution guarantee. ADR-003 explicitly calls for revisiting deployment when an application's runtime no longer fits Vercel.

## Decision

- Keep LAB-M002 and ADR-008 unchanged. Add an app-local LAB-M003 workspace at `/workspace` and an independent workflow API.
- Use `@mastra/core` for a typed preflight, parallel risk-review and test-strategy agent steps, and advisory synthesis. Agents receive only the bounded TypeScript diff, have no tools, and return Zod-validated data rendered by application-owned components. Set OpenAI `store: false` on each Mastra call.
- Persist a random run ID, input needed for execution, partial outputs, status, measured token counts, and curated transitions in an app-local LibSQL database. Run URLs act as bearer links; no raw diff is returned by the read API. Completed input is deleted. The read API rejects runs after 24 hours, and the worker purges expired records while it is running. A stopped worker delays physical cleanup until it restarts.
- Run one separate Node worker process against the same database as the Next server. The worker refreshes a short database heartbeat; the web server rejects new runs while that heartbeat is absent or stale. The HTTP request only validates and queues work. The worker claims one run at a time, runs the Mastra workflow, and records each result as it arrives. Risk and test calls run in parallel within that one run. Browser refresh or disconnect does not cancel the worker; the run page reads persisted state.
- A worker restart marks any in-flight run failed. Its partial results remain visible and the visitor can submit a new run. We do not claim mid-call checkpoint recovery. This workflow has no external effects, so a fresh run is safe but can incur additional model cost.
- Bound one diff to 12,000 characters, each agent invocation to 1,300 output tokens and 45 seconds with no model retry, one worker run at a time, three active/queued runs, and 20 admissions per rolling 24 hours. Estimate cost conservatively for the default model using [current OpenAI standard rates](https://platform.openai.com/docs/models/gpt-5.6-sol); billing may differ and model overrides show no estimate. Disable the workflow by default. `LAB_WORKFLOW_ENABLED=true` and a server-side OpenAI key opt in. Vercel deployments reject new workflow runs because the companion worker is absent there.
- No anonymous public launch is approved. The Lab's normal development/start commands bind Next to loopback. A hosted release needs a persistent worker and shared database, access/abuse controls, a cost ceiling, privacy review, and credentialed validation. The website remains independently deployable. Lab run events are product-specific activity, not the proposed Mission Control event contract or Flight Deck telemetry.

## Consequences and limits

The run record survives a browser refresh and is inspectable from its URL while the worker is alive. Local file storage is appropriate for development only; a hosted worker and Next server must share durable remote LibSQL storage. A run URL is readable by anyone holding it until expiry, so the UI warns against private source. Deleting input after success reduces retention but means replay is a new run. The visitor console exposes curated transitions, while server logs may contain operational errors; those logs must remain operator-only. Model output is judgment, not verified execution or a merge decision.
