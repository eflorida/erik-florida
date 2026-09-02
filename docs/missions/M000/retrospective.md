# M000 Retrospective — Establish the Erik Florida Repository Bones

- **State:** Complete
- **Landed:** 2026-09-01

## Outcome

M000 established a documented, deterministic pnpm/Turborepo foundation with a static-first Next.js site, strict verification, browser testing, CI, and a live Vercel preview. No speculative application infrastructure or Agentic Systems Lab implementation was added.

## What the mission validated

- A small Mission Control artifact set—current state, mission, plan, architecture, ADRs, and evidence—was enough to make bootstrap decisions durable without copying the entire Flight Deck operating environment.
- The personal site can select a static rendering profile while the monorepo remains open to future dynamic applications.
- Strict compiler options exposed an environment-access issue in Playwright configuration before deployment.
- Separating Vitest and Playwright discovery prevented test-runner boundaries from becoming implicit.
- The live page, not merely the Vercel build status, provided landing evidence.

## Deployment learning

- The bundled claimable-preview endpoint had been retired and redirected to the Vercel CLI, so human device authorization became the applicable hosted authority boundary.
- Vercel's Next.js builder requires the framework version to be visible at the configured project root. The root-level pinned Next.js development dependency is a deployment adapter; `apps/site` remains the application owner.
- Node.js 22 is the shared CI/Vercel baseline. Local verification also passed on the newer available runtime, while the Vercel build proved the declared deployment baseline.

## Follow-up

- M001 should build the typed content seam and designate the first complete article path as the golden path.
- Visual-system and motion-library evaluation should remain a bounded design/architecture decision after the content and layout foundation exists.
- Production deployment, domains, and GitHub-hosted controls should be handled when their next mission requires them.
