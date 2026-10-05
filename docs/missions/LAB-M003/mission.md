# LAB-M003 — Change review workspace

**State:** Implemented checkpoint; credentialed and hosted validation pending

## Outcome

A visitor can submit a bounded TypeScript diff, leave or refresh the page, and return to a run URL showing the real progress and results of Mastra-managed risk review, test strategy, and advisory synthesis. The result appears in task-specific components with a drawer of persisted workflow transitions. A human retains every engineering decision.

Erik selected this concrete Step 8 direction on 2026-10-05 after reviewing its intended user journey and infrastructure consequences. The related [Goal Contract](../../../.mission-control/goals/G008-001/contract.md) and [ADR-009](../../architecture/decisions/ADR-009-lab-mastra-worker-and-run-store.md) set the bounds.

## Scope and authority

- Add `/workspace`, resumable `/workspace/runs/[id]`, bounded create/read APIs, a Mastra workflow, one background worker, and an app-local run store.
- Parallel risk and test agents operate only on submitted diff text; a synthesis agent receives only their validated reports. No code execution, repository access, external tools, patch application, or automatic approval.
- Persist a 24-hour run record with status, partial outputs, actual activity events, and measured token usage. Completed input is cleared. Input limits, timeouts, and local queue/admission limits constrain cost.
- Keep the existing request-bound `/` and original `/reference` behavior and their separate evidence states.
- Keep the workflow disabled by default and unavailable for public Vercel deployment. Hosted public use requires another operational decision.

## Candidate completion evidence

- [x] Request and result boundaries are schema-validated; model output selects owned UI components.
- [x] The workflow runs typed preflight, two delegated model tasks, and synthesis through Mastra.
- [x] A separate worker executes after request acceptance; stored runs can be reopened after refresh.
- [x] Curated activity events correspond to real transitions, including failure; provider prompts are not displayed.
- [x] An interrupted worker does not leave a run claiming success; new admissions require a fresh worker heartbeat, and capacity and 24-hour read expiry are bounded.
- [x] The original LAB-M001 and LAB-M002 routes remain intact.
- [x] Complete repository checks and responsive browser verification are retained in the Goal State.
- [ ] Credentialed Mastra/OpenAI smoke test produces a real packet, measured usage, and a reopened run.
- [ ] Evaluate the [three retained cases](../../reference/lab-m003-quality-cases.md) against expected risks, test ideas, and uncertainty before any public claim of reliability.

## Separate release gates

This implementation checkpoint is not a public launch or human Landing. Before public enablement, choose and verify a persistent worker and shared remote database, access and abuse controls, a cost ceiling, privacy/retention treatment, provider credentials, and a hosted failure-recovery exercise. Erik owns public release and final product acceptance. LAB-M001's human review and LAB-M002's unchecked credentialed smoke remain separate.
