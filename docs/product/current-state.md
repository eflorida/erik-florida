# Erik Florida — Current Project State

**Last intentionally established:** 2026-09-11, M003 implementation checkpoint and editorial review

This document is current working truth, not an activity log.

## Product identity

- Erik Florida is a multi-application personal platform.
- Its immediate purpose is to help Erik secure an engineering-leadership role where agentic development can materially improve customer value, organizational output, quality, and visibility.
- The first application is a professional personal website.
- Agentic Systems Lab is the second application, developed in a separate track, and will provide executable evidence of the ideas described by the site. Its implementation is not yet integrated into this checkout.
- Mission Control is the engineering operating methodology informing this work.
- Flight Deck is a future engineering-department harness; Erik Florida is an implementation informed by its patterns, not a competitor or replacement.

## Mission state

**M003 — AI & Agentic Engineering: Implemented, editorial review pending**

M002 is the latest landed mission, accepted for commit after local review. M001 established the schema-validated Git-backed article path, writing routes, and approved visual foundation. Erik approved the design, typography, and article tone. The upper green glow stays fixed while scrolling and is slightly stronger.

The landed mission is [`../missions/M002/mission.md`](../missions/M002/mission.md). Following the supplementary positioning guidance, the homepage connects first-version product ownership, hands-on architectural and organizational leadership, earned complexity, and agentic engineering as a whole-system change. It demonstrates audience fit through experience and principles rather than job-search filters or a management-ladder narrative. A compact patent credential sits beside the current role in the opening. Detailed career progression and three project accounts remain on `/experience`; the homepage no longer presents a linked project list. Both pages consume one schema-validated career record. Selection and provenance are recorded in [`../reference/career-source-assessment.md`](../reference/career-source-assessment.md); both supplied source files stay outside the repository and deployment. The first article remains a draft.

Agentic engineering leads the narrative immediately after the hero. First-version building, team ownership, and earned complexity each have their own section with two brief paragraphs; the former combined history block is removed. The career-content boundary validates section IDs and caps narrative sections at two paragraphs.

M002's verification evidence is recorded in its mission and retrospective. Patent links use the USPTO PDF and open a new tab following review feedback about Google's traffic block. The local development server remains on port 3000. M002 is committed locally; acceptance for commit did not publish the draft article.

The active mission is [M003 — AI & Agentic Engineering](../missions/M003/mission.md). Following the scope recommendation, Erik requested continuation with the next phase. `/agentic-engineering` now connects applied-AI experience, current engineering practice, the developing Mission Control methodology, and organizational adoption. The methodology overview is a native section at `#mission-control`, with one accessible diagram and an explanation of revision and escalation. Its MDX uses the existing registry and schema, with a single explicit route and no duplicate Writing entry. Home gains one link; primary/footer navigation include the overview, with a two-row mobile header. Both the new overview and original article remain drafts for review and are excluded from search indexing.

M003 verification passes formatting, linting, strict TypeScript, 21 unit/component tests, the static build, and 12 production browser journeys. Desktop/mobile inspection covers Home, Experience, Writing, and the overview at 320, 390, 768, 1024, and 1440 pixels without horizontal overflow or browser runtime errors on those routes. The coordination task requested a clean checkpoint so it can merge the separately committed Lab; the M003 implementation is committed for that handoff, while final editorial acceptance remains pending. No push, hosted deployment, publication change, dependency change, or lockfile edit is part of this website checkpoint. The full methodology deep dive, résumé/contact, and launch readiness remain outside this slice.

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

1. Review the M003 overview's wording, attribution, and level of detail locally. Treat content approval and publication as explicit decisions; do not proceed to the full methodology deep dive implicitly.
2. Before the full career-site launch, establish canonical résumé/contact links and make explicit publication decisions. These missing inputs do not reopen the landed M002 scope.
3. Hand the clean M003 checkpoint to the coordinating task for its separately authorized Lab integration. Keep Lab implementation, merge resolution, and lockfile reconciliation outside website mission work.
