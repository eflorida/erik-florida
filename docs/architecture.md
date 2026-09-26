# Erik Florida — Application Architecture

- **Status:** Adopted and active
- **Last updated:** 2026-09-25, Step 2b factual reconciliation
- **Conceptual clarification:** 2026-09-25, Step 2a

This architecture adapts the general agentic-first reference in the separate Flight Deck project to Erik Florida's concrete needs. The reference provides patterns and option triggers; this document and the ADRs under `docs/architecture/decisions/` record what Erik Florida has actually adopted.

Mission Control supplies generally tool- and team-agnostic principles for work here. Flight Deck is a future, opinionated implementation of a Mission Control engineering team, including an observability layer and other coordination/governance capabilities. Equivalent responsibilities can be fulfilled by existing tools. Its product-specific plans are inputs for that application and must follow current methodology; they do not impose a runtime, state owner or tool dependency on Erik Florida. See the [concept guide](guides/mission-control-concepts.md), [source authority notes](reconciliation/canonical-reference-notes.md), and the dated clarification in [ADR-004](architecture/decisions/ADR-004-methodology-provenance.md).

## Principles

1. Stable seams matter more than package names.
2. Verification and machine-enforced guardrails take precedence over prose-only guidance.
3. The repository is durable context and should contain one blessed implementation path per recurring task.
4. Use mature, high-training-density technology and no more tools than demonstrated needs require.
5. State the trigger that would justify additional complexity.
6. Applications are independently deployable; shared packages contain proven contracts and primitives, not speculative abstractions.

## Mission Control implementation status

No Mission Control runtime, state/event store, adapter topology, Flight Deck product, MCP layer, or Mastra workflow is adopted here. The [implementation-options document](architecture/mission-control-implementation-options.md) records logical responsibilities, possible deployment patterns, event/adapter boundaries, and decisions deferred to later governed steps. It is proposed architecture context, not authorization to build those components.

## Repository profile

- pnpm workspaces and Turborepo coordinate applications and packages.
- `apps/site` is a static-first Next.js App Router application deployed to Vercel.
- `apps/agentic-systems-lab` is an implemented, independently deployable Next.js application. It contains a Git-backed original reference scenario with an explicit execution-provenance boundary and an opt-in, request-bound OpenAI review route governed by ADR-008. Its recorded mission state remains ready for human review/credentialed validation; integration into this checkout is not evidence of public deployment or mission Landing.
- Shared configuration begins under `packages/`. Content contracts and shared UI are introduced when their first real implementation requires them.

## Site profile

- TypeScript with maximum practical strictness.
- React Server Components and server-rendered/static content by default.
- Tailwind CSS v4 with semantic CSS variables and owned components.
- Minimal client JavaScript for isolated interactions only.
- No database, authentication, public API, background worker, CMS, query library, global state library, AI runtime, or motion library is adopted for the site. The Lab's separate bounded API/runtime does not change this profile.

## Stable seams

### Schema seam

Authored and external data is validated once at the boundary with framework-independent schemas. TypeScript types are inferred rather than maintained in parallel. Article schemas live in `apps/site/src/content/article-schema.ts`; M002 adds structured career schemas in `apps/site/src/content/career-schema.ts`. Boundaries remain app-local until another consumer proves a shared contract.

The Lab separately validates its reference-scenario fixture in `apps/agentic-systems-lab/src/contracts/run.ts` and live-review input/output in `src/contracts/review.ts`. These contracts remain app-local and do not constitute shared Mission Control contracts.

### Rendering seam

Server Components coordinate content and data. Presentational renderers receive typed, render-ready props and do not fetch. Components stay app-local until a second consumer demonstrates a shared package.

### Data/content seam

The site's data sources are Git-backed MDX for editorial content and curated JSON for career records. MDX modules are explicitly registered with one route each and their metadata is validated by the content-access layer. M003's top-level AI/agentic overview uses this same registry and schema; only entries at `/writing/<slug>` enter the Writing index and dynamic article routes. Career data is validated once at module load and resolves the current role, providing connected narrative copy for Home and detailed career/project accounts for Experience. Pages consume these access layers rather than parsing source files directly. The raw career master record is not a runtime dependency. Persistence is added only when a feature requires durable application state.

### Work seam

No durable or background work runtime is implemented. The Lab's live review is a bounded request/response operation: it calls the OpenAI Responses API without tools or repository access, returns validated structured assistance, and persists no submitted run in the application. The first operation that must outlive a request still triggers an owned job contract and worker evaluation. Saved/shareable runs, authentication, broader tool use, and public runtime enablement retain their documented triggers.

## Rendering profiles

Rendering is selected per application or surface:

- Personal site: static/pre-rendered editorial content with explicit revalidation only when needed.
- Agentic Systems Lab: a dynamic live-review surface plus a validated, provenance-disclosed reference scenario, without changing the site's profile.

## Verification

- Formatting, linting, strict type checking, unit/component tests, and production build run on every change.
- Playwright covers a thin set of critical user journeys.
- CI must remain deterministic from a cold clone and should return useful feedback quickly.
- Accessibility and public-safety criteria are product requirements, not optional polish.

## Escalation triggers

| Capability         | Default                   | Trigger                                                                                                                          |
| ------------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Shared UI package  | App-local components      | A second application consumes the same owned primitive or tokens                                                                 |
| Client fetching    | Server-rendered props     | Polling, optimistic updates, live data, or another interaction that needs client orchestration                                   |
| Client state store | URL and local React state | Measured high-frequency shared state that simpler mechanisms cannot handle                                                       |
| Database           | None                      | Durable user/application state is required                                                                                       |
| Authentication     | None                      | Private or user-specific behavior exists                                                                                         |
| Background worker  | None                      | Important work must outlive a web request                                                                                        |
| Standalone API     | None                      | A second non-web consumer, long-lived connection, independent scaling, or deployment boundary requires it                        |
| AI runtime         | Site: none; Lab: ADR-008  | A new or broader workflow demonstrates value and defines its provider, tools, evaluation, cost, safety, and authority boundaries |
| Motion library     | CSS transitions only      | Approved visual prototypes demonstrate coordinated motion that CSS cannot maintain cleanly                                       |
| CMS                | Git-backed content        | Publishing frequency or non-technical contributors make Git an actual constraint                                                 |
