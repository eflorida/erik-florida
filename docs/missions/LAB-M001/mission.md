# LAB-M001 — Reference Run Explorer

**State:** Ready for human review

## Change intent

### Why

Agentic Systems Lab needs a concrete first surface that demonstrates evidence-backed agentic work without prematurely selecting an AI runtime, persistence model, or orchestration stack.

### What

Create an independently runnable application that presents one recorded, schema-validated TypeScript change run. Let a visitor inspect intent, ordered work, artifacts, evidence, evaluation, and the human-review transfer.

### How

Extend the existing pnpm/Turborepo workspace with an app-local Next.js application. Use strict TypeScript, Zod-inferred contracts, Server Components for data coordination, a focused client component for step inspection, and a deterministic Git-backed run fixture. Run locally on port 3100.

## Desired outcome

A visitor can inspect a coherent reference run, understand why it was accepted, and see the boundary between deterministic verification and human judgment. The interface never implies that the recorded fixture is executing live.

## Scope

- `apps/agentic-systems-lab` application boundary;
- one run overview and inspection surface;
- one validated recorded scenario;
- step, artifact, evidence, evaluation, and transfer presentation;
- responsive and keyboard-accessible interaction;
- app-local unit/component and browser verification;
- independent local server on port 3100.

## Non-goals

- Live model calls or provider selection;
- arbitrary visitor input or code execution;
- database, authentication, public API, worker, queue, or AI framework;
- Flight Deck project/workspace behavior;
- shared contracts or UI packages;
- professional-site integration or deployment.

## Landing criteria

- [x] The first viewport exposes the mission, active step, and evidence state.
- [x] The visitor can inspect every step with keyboard and pointer input.
- [x] Every referenced evidence item resolves through the validated run contract.
- [x] Recorded versus live behavior is explicit.
- [x] The application renders usable content without client JavaScript; interactive inspection progressively enhances it.
- [x] Formatting, linting, strict TypeScript, unit/component tests, production build, and a browser journey pass.
- [x] The Lab runs on port 3100 without interfering with the professional site on port 3000.

## Verification evidence

- `corepack pnpm check` passes across the monorepo.
- `corepack pnpm --filter @erik-florida/agentic-systems-lab test:e2e` passes the desktop inspection journey and the mobile overflow check.
- Direct HTTP checks return `200` for the professional site on port 3000 and the Lab on port 3100.
- A desktop browser inspection confirms the three-column mission, run, and evidence hierarchy; the browser console reports no warnings or errors.
- The server-rendered document contains the complete run transcript and the recorded-versus-live disclosure before client JavaScript runs.

## Architecture triggers

- A live model call triggers an AI-runtime/provider ADR.
- Work that must outlive a request triggers the worker/queue decision.
- Saved or shareable runs trigger persistence.
- Private or user-specific runs trigger authentication.
- A second real contract/UI consumer triggers shared-package evaluation.

## Human authority

Erik reviews whether the reference run is the right proof point before LAB-M002 introduces live behavior.
