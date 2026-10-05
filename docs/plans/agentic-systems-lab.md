# Agentic Systems Lab — Execution Plan

**Track:** Lab

**Current mission:** [`LAB-M002`](../missions/LAB-M002/mission.md)

## Mission sequence

### LAB-M001 — Reference run explorer

Build the independent application shell and one schema-validated recorded run. Prove the content boundary, inspection experience, accessibility, static rendering, verification, and local deployment profile without introducing an AI runtime or stateful infrastructure.

### LAB-M002 — Bounded live run

Accept one pasted TypeScript diff and review it through the OpenAI Responses API. Validate structured output, expose request telemetry and cost estimates, and preserve human authority. Do not accept arbitrary repositories or execute public code.

### LAB-M003 — Durable public evidence

This remains a conditional proposal, not an approved next mission. Only if saved or shareable runs are required should the project evaluate persistence behind an app-local data seam and stable public run URLs. Add a worker only if a run must outlive a request. Define a public run-summary contract and promote it to a shared package only when the professional website becomes a real consumer.

### Later missions

Sandboxed code execution, private runs, authentication, user-provided repositories, multiple workflow authoring, and generalized orchestration each require separate product, architecture, safety, and operational decisions.

The [Step 8 working direction](../reconciliation/step-8-demo-direction.md) now favors an interactive, production-like Lab app with Mastra-managed work, result-specific UI, and inspectable workflow activity over a full Flight Deck build for the job-search demo. The product task, durable-execution promise, public access envelope, and implementing mission remain unselected. Mastra is not yet an adopted Lab dependency or automatic LAB-M003 scope.

## Application boundaries

- The website track owns `apps/site/**` and its site-specific missions.
- The Lab track owns `apps/agentic-systems-lab/**` and `LAB-*` missions.
- Both applications are now present in the same `main` checkout. Shared root files, the lockfile, and cross-application packages remain integration surfaces; same-checkout presence does not justify cross-app imports.
- Mission Control principles inform the work. Flight Deck is an optional product implementation, not a code/runtime dependency or required roadmap destination for the Lab.
- The replay and live-review contracts remain app-local. They do not establish shared Mission Control primitives.

## Current handoff

LAB-M001 is ready for human review and remains available as the original reference scenario. Its interface now discloses that source execution artifacts are not retained; see the [evidence assessment](../reference/lab-evidence-assessment.md). LAB-M002's bounded OpenAI runtime is implemented and remains ready for credentialed validation, with the live provider smoke test unchecked. The Lab runs independently on port 3100 and the professional site on port 3000.

No current mission authorizes persistence, a worker, public runtime enablement, generalized orchestration, Flight Deck behavior, Mastra adoption, or a site-to-Lab public integration. The Step 8 working direction needs a new bounded mission and architecture decisions before changing those boundaries.
