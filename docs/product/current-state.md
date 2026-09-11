# Erik Florida — Current Project State

**Last intentionally established:** 2026-09-10, M001 landing

This document is current working truth, not an activity log.

## Product identity

- Erik Florida is a multi-application personal platform.
- Its immediate purpose is to help Erik secure an engineering-leadership role where agentic development can materially improve customer value, organizational output, quality, and visibility.
- The first application is a professional personal website.
- Agentic Systems Lab is the planned second application and will provide executable evidence of the ideas described by the site.
- Mission Control is the engineering operating methodology informing this work.
- Flight Deck is a future engineering-department harness; Erik Florida is an implementation informed by its patterns, not a competitor or replacement.

## Mission state

**M001 — Establish the Content and Visual Golden Path: Landed**

M001 implemented the first schema-validated Git-backed article path, writing routes, and approved visual foundation. Erik approved the design, typography, and article tone. The upper green glow now stays fixed while scrolling and is slightly stronger. Formatting, linting, strict TypeScript, eight unit/component tests, production build, two production browser journeys, and desktop/mobile visual inspection pass.

No mission is currently active. M001's result is recorded in [`../missions/M001/mission.md`](../missions/M001/mission.md). M002 preparation lives in [`../plans/experience-and-positioning.md`](../plans/experience-and-positioning.md) and begins with Erik's work-in-progress experience document. The homepage's emphasis on process will be rebalanced toward experience and perspective during M002. The first article remains a draft.

## Decisions established

- Use one pnpm/Turborepo monorepo with independently deployable applications.
- Name the first application `apps/site`.
- Add `apps/agentic-systems-lab` only when its product mission defines real requirements.
- Use strict TypeScript, Next.js App Router, React Server Components by default, Tailwind CSS, Vitest, Testing Library, and Playwright for the site.
- Keep the site static-first and content-led.
- Deploy applications independently to Vercel; choose canonical domains later.
- Add no database, authentication, API, background worker, CMS, AI runtime, or general client-state layer for the website.
- Preserve the approved typography and visual foundation; defer final logo, imagery, broader brand identity, and motion-library selection.
- Keep M001 content contracts and presentation app-local until another application proves a shared consumer.
- Treat authored MDX metadata as untrusted at the content boundary and infer its TypeScript type from Zod.
- Keep draft editorial content visibly labeled and emit `noindex, nofollow` until Erik approves publication. Indexing directives do not make draft routes private.
- Lead the homepage with experience, judgment, and perspective; use a matter-of-fact voice and let hiring interest follow from the evidence.
- Git remote `origin` is `https://github.com/eflorida/erik-florida.git`; `main` tracks `origin/main`.

## Intentionally deferred

- Canonical domain names.
- Final logo, imagery, broader brand identity, and coordinated motion.
- Agentic Systems Lab product scope and dynamic architecture.
- Analytics provider.
- Whether a shared UI package is justified by a second consumer.
- Repository visibility changes and hosted GitHub controls.

## What happens next

1. Review Erik's experience document as working source material, identify supported claims and remaining questions, and define the bounded M002 mission.
2. Develop the experience content and homepage narrative toward a job-ready website without making Agentic Systems Lab a launch prerequisite.
3. Keep Agentic Systems Lab behind its own future product and architecture mission.
