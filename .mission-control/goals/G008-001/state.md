# G008-001 — Goal State

**Status:** Active implementation; live-provider validation pending

## Current result

LAB-M003 now has a typed Mastra workflow, app-local persisted run queue and events, a separate Node worker, create/read routes, a structured workspace, and a run activity drawer. The original live-review and reference-scenario routes remain. [ADR-009](../../../docs/architecture/decisions/ADR-009-lab-mastra-worker-and-run-store.md) records why the Lab workflow cannot run as a Vercel request-only function and why public enablement is deferred.

Erik selected the [Experiment Ledger visual direction](../../../docs/design/lab-experiment-ledger.md). A light graph-paper shell, distinct Lab typography, blue primary actions, orange labels, boxed surfaces, and a restrained handwritten note now span all three Lab routes. This is a visual implementation checkpoint, not human visual acceptance or a change in runtime authority.

## Evidence and limits

- A deterministic workflow test uses fake reviewers to exercise the actual Mastra graph and database projection. It proves ordered preflight/synthesis, both delegated reports, persisted partial outputs, and run retrieval. It is not provider validation.
- Component verification renders a persisted review packet and human-authority boundary. Existing LAB-M001/LAB-M002 tests remain.
- `corepack pnpm check` passed on 2026-10-05: repository formatting, lint, strict TypeScript, 42 tests across the two applications, and both production builds. The Lab's five Playwright journeys passed, including queue creation, run URL reopening after reload, actual queued activity, and mobile overflow. A separate disabled worker process stayed alive without a credential. Desktop and mobile screenshots were inspected locally; they are not retained as execution evidence.
- After the visual change, `corepack pnpm check` and all five Lab Playwright journeys passed again. Desktop and mobile screenshots of `/workspace`, `/`, and `/reference` were inspected locally. Erik's visual review is pending.
- Three synthetic inputs and expected behaviors are retained in the [quality case set](../../../docs/reference/lab-m003-quality-cases.md); provider scoring has not run.
- Credentialed Mastra/OpenAI execution is pending because this workspace has no configured `OPENAI_API_KEY`.
- A hosted worker, shared remote database, public controls, cost ceiling, and three-case quality assessment are pending. The workflow remains disabled by default.

## Next action

Erik reviews the new Lab visual direction. Run a credentialed local workflow smoke and assess the three retained cases when a server-side provider key is available. Review hosted operating choices before enabling public use. Erik decides whether the product experience and evidence are sufficient for Landing.
