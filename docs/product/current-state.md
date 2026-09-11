# Erik Florida — Current Project State

**Last intentionally established:** 2026-09-11, M002 landing and M003 scope review

This document is current working truth, not an activity log.

## Product identity

- Erik Florida is a multi-application personal platform.
- Its immediate purpose is to help Erik secure an engineering-leadership role where agentic development can materially improve customer value, organizational output, quality, and visibility.
- The first application is a professional personal website.
- Agentic Systems Lab is the second application, developed in a separate track, and will provide executable evidence of the ideas described by the site. Its implementation is not yet integrated into this checkout.
- Mission Control is the engineering operating methodology informing this work.
- Flight Deck is a future engineering-department harness; Erik Florida is an implementation informed by its patterns, not a competitor or replacement.

## Mission state

**M002 — Experience and Professional Positioning: Landed**

M002 is the latest landed mission, accepted for commit after local review. M001 established the schema-validated Git-backed article path, writing routes, and approved visual foundation. Erik approved the design, typography, and article tone. The upper green glow stays fixed while scrolling and is slightly stronger.

The landed mission is [`../missions/M002/mission.md`](../missions/M002/mission.md). Following the supplementary positioning guidance, the homepage connects first-version product ownership, hands-on architectural and organizational leadership, earned complexity, and agentic engineering as a whole-system change. It demonstrates audience fit through experience and principles rather than job-search filters or a management-ladder narrative. A compact patent credential sits beside the current role in the opening. Detailed career progression and three project accounts remain on `/experience`; the homepage no longer presents a linked project list. Both pages consume one schema-validated career record. Selection and provenance are recorded in [`../reference/career-source-assessment.md`](../reference/career-source-assessment.md); both supplied source files stay outside the repository and deployment. The first article remains a draft.

Agentic engineering leads the narrative immediately after the hero. First-version building, team ownership, and earned complexity each have their own section with two brief paragraphs; the former combined history block is removed. The career-content boundary validates section IDs and caps narrative sections at two paragraphs.

Formatting, linting, strict TypeScript, 16 unit/component tests, the static production build, seven production browser journeys, and desktop/mobile inspection pass. Patent links use the USPTO PDF and open a new tab following review feedback about Google's traffic block. The local development server remains on port 3000. M002 is committed locally; no remote push or deployment has occurred for this mission. Acceptance for commit does not publish the draft article.

M003 is in scope review, not feature implementation. The historical plan's numbered phases do not map directly to missions: its Phase 3 deep dive assumes an AI/agentic page and Mission Control overview, neither of which exists yet. The proposed next slice is that focused introduction; résumé/contact and launch readiness remain an alternative pending Erik's direction.

## Parallel application ownership

This track owns `apps/site/**` and website missions in the saved checkout, using port 3000. Agentic Systems Lab is owned by a separate worktree on `codex/agentic-systems-lab`, using port 3100, as reported by the coordinating task. Do not edit `apps/agentic-systems-lab/**` or `LAB-*` documents here. No lockfile change is required for M002; reconcile the separate branch's lockfile during explicitly coordinated integration after landing.

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
- Use curated JSON and Zod for shared career facts on Home and Experience; keep long-form writing on the MDX path. Do not ship the raw career master record.
- Preserve Qmerit/Raiven career continuity and distinguish individual implementation, team delivery, and patent co-invention. Exclude private business details and unsupported metrics.
- Keep draft editorial content visibly labeled and emit `noindex, nofollow` until Erik approves publication. Indexing directives do not make draft routes private.
- Lead the homepage with experience, judgment, and perspective; use a matter-of-fact voice and let hiring interest follow from the evidence.
- Tell a connected story on Home; keep detailed accomplishments on Experience. Present the patent early and modestly as one supporting credential.
- Position Erik as builder, architect, and organizational leader, with agentic engineering as the central differentiator. Use earned complexity and autonomous teams as principles; omit literal desired team size, company stage, and title from public copy.
- Git remote `origin` is `https://github.com/eflorida/erik-florida.git`; `main` tracks `origin/main`.

## Intentionally deferred

- Canonical domain names.
- Final logo, imagery, broader brand identity, and coordinated motion.
- Agentic Systems Lab integration with the website; the Lab's scope and implementation belong to its separate track.
- Analytics provider.
- Whether a shared UI package is justified by a second consumer.
- Repository visibility changes and hosted GitHub controls.

## What happens next

1. Confirm M003's scope and drafting sources before feature implementation; do not equate the historical Phase 3 with an approved M003 mission.
2. Before the full career-site launch, establish canonical résumé/contact links and make explicit publication decisions. These missing inputs do not reopen the landed M002 scope.
3. Share the M002 landing commit with the coordinating task so the independent Lab track can synchronize. Keep Lab implementation and integration outside website mission work.
