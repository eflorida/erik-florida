# Erik Florida — Current Project State

**Last intentionally established:** 2026-09-01, M000 landing

This document is current working truth, not an activity log.

## Product identity

- Erik Florida is a multi-application personal platform.
- Its immediate purpose is to help Erik secure an engineering-leadership role where agentic development can materially improve customer value, organizational output, quality, and visibility.
- The first application is a professional personal website.
- Agentic Systems Lab is the planned second application and will provide executable evidence of the ideas described by the site.
- Mission Control is the engineering operating methodology informing this work.
- Flight Deck is a future engineering-department harness; Erik Florida is an implementation informed by its patterns, not a competitor or replacement.

## Mission state

**M000 — Establish the Erik Florida Repository Bones: Landed**

The repository has durable context, a pnpm/Turborepo workspace, a static-first Next.js site, strict verification, CI, and a live Vercel walking skeleton. Formatting, linting, type checking, component testing, production build, and the Playwright smoke test pass. The deployed preview was inspected and presents the expected title, primary positioning, and Mission Control content.

No mission is currently active. M001 should establish the typed content golden path and initial visual foundation.

## Decisions established

- Use one pnpm/Turborepo monorepo with independently deployable applications.
- Name the first application `apps/site`.
- Add `apps/agentic-systems-lab` only when its product mission defines real requirements.
- Use strict TypeScript, Next.js App Router, React Server Components by default, Tailwind CSS, Vitest, Testing Library, and Playwright for the site.
- Keep the site static-first and content-led.
- Deploy applications independently to Vercel; choose canonical domains later.
- Add no database, authentication, API, background worker, CMS, AI runtime, or general client-state layer for the website.
- Defer detailed visual identity and motion-library selection until the repository and content bones exist.

## Intentionally deferred

- Canonical domain names.
- Final visual identity, typography, color, and motion system.
- Agentic Systems Lab product scope and dynamic architecture.
- Analytics provider.
- Whether a shared UI package is justified by a second consumer.
- Repository remote, visibility, and hosted GitHub controls.

## What happens next

1. Create M001 for the typed content golden path and initial visual foundation.
2. Create the job-ready website mission without making Agentic Systems Lab a launch prerequisite.
3. Keep Agentic Systems Lab behind its own future product and architecture mission.
