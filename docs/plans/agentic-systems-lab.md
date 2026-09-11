# Agentic Systems Lab — Execution Plan

**Track:** Lab

**Current mission:** [`LAB-M002`](../missions/LAB-M002/mission.md)

## Mission sequence

### LAB-M001 — Reference run explorer

Build the independent application shell and one schema-validated recorded run. Prove the content boundary, inspection experience, accessibility, static rendering, verification, and local deployment profile without introducing an AI runtime or stateful infrastructure.

### LAB-M002 — Bounded live run

Accept one pasted TypeScript diff and review it through the OpenAI Responses API. Validate structured output, expose request telemetry and cost estimates, and preserve human authority. Do not accept arbitrary repositories or execute public code.

### LAB-M003 — Durable public evidence

Only if saved or shareable runs are required, add persistence behind an app-local data seam and stable public run URLs. Add a worker only if a run must outlive a request. Define a public run-summary contract and promote it to a shared package only when the professional website becomes a real consumer.

### Later missions

Sandboxed code execution, private runs, authentication, user-provided repositories, multiple workflow authoring, and generalized orchestration each require separate product, architecture, safety, and operational decisions.

## Parallel-work ownership

- The website track owns `apps/site/**` and its site-specific missions.
- The Lab track owns `apps/agentic-systems-lab/**` and `LAB-*` missions.
- Shared root files, the lockfile, and cross-application packages are integration surfaces. Synchronize with the latest landed website work before merging changes to them.
- Flight Deck is a source of product and methodology context, not a code or runtime dependency.

## Current handoff

LAB-M001 is ready for human review and remains available as the reference replay. LAB-M002 is approved to add the bounded OpenAI runtime while the Lab runs independently on port 3100 and the professional site remains on port 3000.
