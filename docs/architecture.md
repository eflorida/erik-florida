# Erik Florida — Application Architecture

- **Status:** Adopted for repository bootstrap
- **Last updated:** 2026-09-01

This architecture adapts the general agentic-first reference in the separate Flight Deck project to Erik Florida's concrete needs. The reference provides patterns and option triggers; this document and the ADRs under `docs/architecture/decisions/` record what Erik Florida has actually adopted.

## Principles

1. Stable seams matter more than package names.
2. Verification and machine-enforced guardrails take precedence over prose-only guidance.
3. The repository is durable context and should contain one blessed implementation path per recurring task.
4. Use mature, high-training-density technology and no more tools than demonstrated needs require.
5. State the trigger that would justify additional complexity.
6. Applications are independently deployable; shared packages contain proven contracts and primitives, not speculative abstractions.

## Repository profile

- pnpm workspaces and Turborepo coordinate applications and packages.
- `apps/site` is a static-first Next.js App Router application deployed to Vercel.
- `apps/agentic-systems-lab` is a planned dynamic application, not created until its mission defines its needs.
- Shared configuration begins under `packages/`. Content contracts and shared UI are introduced when their first real implementation requires them.

## Site profile

- TypeScript with maximum practical strictness.
- React Server Components and server-rendered/static content by default.
- Tailwind CSS v4 with semantic CSS variables and owned components.
- Minimal client JavaScript for isolated interactions only.
- No database, authentication, public API, background worker, CMS, query library, global state library, AI runtime, or motion library in M000.

## Stable seams

### Schema seam

Authored and external data is validated once at the boundary with framework-independent schemas. TypeScript types are inferred rather than maintained in parallel. M001 will implement the first content schemas.

### Rendering seam

Server Components coordinate content and data. Presentational renderers receive typed, render-ready props and do not fetch. Components stay app-local until a second consumer demonstrates a shared package.

### Data/content seam

The site's first data source is Git-backed content. Pages consume a content-access layer rather than parsing source files directly. Persistence is added only when a feature requires durable application state.

### Work seam

No work runtime is implemented. The first operation that must outlive a request triggers an owned job contract and a separate worker evaluation. Agentic Systems Lab will define its own work contracts from product requirements.

## Rendering profiles

Rendering is selected per application or surface:

- Personal site: static/pre-rendered editorial content with explicit revalidation only when needed.
- Agentic Systems Lab: dynamic behavior may be adopted without changing the site's profile.

## Verification

- Formatting, linting, strict type checking, unit/component tests, and production build run on every change.
- Playwright covers a thin set of critical user journeys.
- CI must remain deterministic from a cold clone and should return useful feedback quickly.
- Accessibility and public-safety criteria are product requirements, not optional polish.

## Escalation triggers

| Capability         | Default                   | Trigger                                                                                                   |
| ------------------ | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Shared UI package  | App-local components      | A second application consumes the same owned primitive or tokens                                          |
| Client fetching    | Server-rendered props     | Polling, optimistic updates, live data, or another interaction that needs client orchestration            |
| Client state store | URL and local React state | Measured high-frequency shared state that simpler mechanisms cannot handle                                |
| Database           | None                      | Durable user/application state is required                                                                |
| Authentication     | None                      | Private or user-specific behavior exists                                                                  |
| Background worker  | None                      | Important work must outlive a web request                                                                 |
| Standalone API     | None                      | A second non-web consumer, long-lived connection, independent scaling, or deployment boundary requires it |
| Motion library     | CSS transitions only      | Approved visual prototypes demonstrate coordinated motion that CSS cannot maintain cleanly                |
| CMS                | Git-backed content        | Publishing frequency or non-technical contributors make Git an actual constraint                          |
