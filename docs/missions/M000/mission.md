# M000 — Establish the Erik Florida Repository Bones

**State:** Landed — 2026-09-01

## Change intent

### Why

The career site and Agentic Systems Lab need a deterministic, multi-application foundation that demonstrates the agentic-engineering practices the work advocates. Durable project context must exist before feature implementation so later sessions do not depend on conversation history.

### What

Initialize the repository, establish governing context and architecture decisions, scaffold the static-first site, enforce strict verification, configure CI, and produce a live Vercel walking skeleton.

### How

Use the smallest adopted stack: Git, Markdown project artifacts, pnpm workspaces, Turborepo, strict TypeScript, Next.js, Tailwind CSS, Vitest, Testing Library, Playwright, GitHub Actions, and Vercel.

## Desired outcome

A new executor can clone the repository, understand its purpose and current state, install dependencies, run deterministic checks, start the website, and deploy it without relying on the conversations that created it.

## Scope

- Git repository on `main`;
- durable README, agent entry point, current state, product summary, architecture, and ADRs;
- pnpm/Turborepo workspace with `apps/site`;
- strict TypeScript and ESLint configuration;
- minimal professional walking-skeleton page;
- Vitest/Testing Library verification and Playwright smoke test;
- GitHub Actions CI;
- claimable Vercel preview.

## Non-goals

- final content, information architecture, branding, or visual design;
- Agentic Systems Lab implementation;
- database, authentication, API, worker, queue, AI runtime, CMS, analytics, or motion library;
- canonical domain selection;
- GitHub remote or hosted repository-policy configuration.

## Applicable loops

- Intent/Product — established by the supplied career-site plan and subsequent clarification.
- Architecture — adapt Flight Deck patterns and record Erik Florida decisions.
- Implementation — create the repository bones.
- Verification — prove install, static checks, tests, build, E2E, and deployment.
- Landing — update durable current state and evidence only after checks succeed.

## Human authority

Human approval established the monorepo scope, Mission Control/Flight Deck relationship, Vercel target, and deliberate deferral of visual design. Claiming the preview into a Vercel account and configuring production domains remain human-controlled hosted actions.

## Landing criteria

- [x] Git repository initialized on `main`.
- [x] Supplied career-site plan preserved as reference material.
- [x] Project identity and current truth are durable and navigable.
- [x] Consequential bootstrap architecture decisions are recorded.
- [x] Dependency installation succeeds from the workspace root.
- [x] Formatting, lint, typecheck, unit/component tests, and production build pass.
- [x] Playwright smoke test passes.
- [x] CI workflow represents the verified local pipeline.
- [x] Vercel walking skeleton is live and its preview evidence is recorded.

## Evidence

- `corepack pnpm check` passes: formatting, ESLint, strict TypeScript, Vitest, and the production build are green.
- Next.js reports `/` as statically prerendered content.
- `corepack pnpm test:e2e` passes the Chromium positioning and metadata smoke test.
- `.github/workflows/ci.yml` reproduces the local verification and browser-test pipeline.
- Vercel preview: `https://erik-florida-r87426dqm-erik-floridas-projects-a4a28da6.vercel.app`.
- Live verification confirmed title `Erik Florida`, primary heading `Engineering leadership for the agentic era.`, and visible Mission Control content.
- Vercel's Node.js 22 build completed successfully using the monorepo deployment adapter recorded in ADR-003.

## Landing result

M000 is landed. The repository bones are documented, deterministic, locally verified, browser-tested, and deployed. Production promotion, domain configuration, and GitHub remote/hosted policy remain intentionally outside M000.
