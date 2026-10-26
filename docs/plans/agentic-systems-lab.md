# Agentic Systems Lab — Execution Plan

**Track:** Lab

**Current missions:** [`LAB-M003`](../missions/LAB-M003/mission.md) validation remains open; [`LAB-M004`](../missions/LAB-M004/mission.md) implements the experiment-led visitor entrance and second specimen.

## Mission sequence

### LAB-M001 — Reference run explorer

Build the independent application shell and one schema-validated recorded run. Prove the content boundary, inspection experience, accessibility, static rendering, verification, and local deployment profile without introducing an AI runtime or stateful infrastructure.

### LAB-M002 — Bounded live run

Accept one pasted TypeScript diff and review it through the OpenAI Responses API. Validate structured output, expose request telemetry and cost estimates, and preserve human authority. Do not accept arbitrary repositories or execute public code.

### LAB-M003 — Change review workspace

Erik selected a bounded change-review experience: two Mastra-managed delegated reports, advisory synthesis, a persisted run URL, result-specific UI, and actual activity events. [ADR-009](../architecture/decisions/ADR-009-lab-mastra-worker-and-run-store.md) adopts an app-local run store and separate worker for local execution. It does not approve public runtime enablement; hosted worker/storage, controls, live provider validation, and evaluation remain open.

### LAB-M004 — Experiment-led entrance and product comparison

Make the Lab legible to a first-time hiring visitor as working investigations in agentic product and engineering systems. Retain change review as the offloaded engineering specimen; add a bounded, fictional product-comparison specimen that uses one Mastra extraction agent and deterministic buyer rules. Keep the older one-shot review available at `/quick-review`. [ADR-010](../architecture/decisions/ADR-010-bounded-lab-comparison.md) records the request-bound, local-only runtime and evidence limits. Credentialed three-case evaluation and human product review remain open.

### Later missions

Sandboxed code execution, private runs, authentication, user-provided repositories, multiple workflow authoring, and generalized orchestration each require separate product, architecture, safety, and operational decisions.

The [Step 8 working direction](../reconciliation/step-8-demo-direction.md) selected this bounded product task. The Lab remains separate from Flight Deck and from the Mission Control repository-native pilot.

## Application boundaries

- The website track owns `apps/site/**` and its site-specific missions.
- The Lab track owns `apps/agentic-systems-lab/**` and `LAB-*` missions.
- Both applications are now present in the same `main` checkout. Shared root files, the lockfile, and cross-application packages remain integration surfaces; same-checkout presence does not justify cross-app imports.
- Mission Control principles inform the work. Flight Deck is an optional product implementation, not a code/runtime dependency or required roadmap destination for the Lab.
- The replay and live-review contracts remain app-local. They do not establish shared Mission Control primitives.

## Current handoff

LAB-M001 is ready for human review and remains available as the original reference scenario. Its interface now discloses that source execution artifacts are not retained; see the [evidence assessment](../reference/lab-evidence-assessment.md). LAB-M002's bounded OpenAI runtime is implemented and remains ready for credentialed validation, with the live provider smoke test unchecked. The Lab runs independently on port 3100 and the professional site on port 3000.

LAB-M003 authorizes only its app-local Mastra workflow, run persistence, and one background worker. LAB-M004 adds a separate fixed-case, request-bound comparison agent under ADR-010. Neither authorizes public runtime enablement, generalized orchestration, Flight Deck behavior, or a site-to-Lab public integration. Credentialed and hosted validation remain pending.
