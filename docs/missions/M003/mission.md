# M003 — AI & Agentic Engineering

**State:** Implemented — verified checkpoint, editorial review pending, 2026-09-11

**Predecessor:** [M002](../M002/mission.md), landed on `main` at `d16453d8bb6dfb8447b3b5d2ff6117a83df69405`.

## User direction

After the scope review and recommendation, Erik requested continuation with the next phase. Proceed with the recommended AI/agentic page and concise Mission Control overview, using the existing project documents and supplied career record to draft for review. This interpretation was stated before implementation. No new source or publication approval was supplied.

## Review findings

The original build plan has numbered phases, not approved M003 scope. Its Phase 2 includes an AI/agentic page, a Mission Control overview, About, résumé, and contact paths in addition to the Home/Experience work now landed. Its Phase 3 assumes the methodology overview already exists and expands it into a deep dive.

The current site has Home, Experience, Writing, and one draft article. It has neither an AI/agentic page nor a dedicated Mission Control overview. Résumé and contact destinations are also unconfirmed. The original Phase 3 therefore should not be adopted wholesale as M003.

## Agreed implementation scope

Build a focused AI & Agentic Engineering introduction with a concise Mission Control overview. Lead with Erik's personal practice, connect it to engineering and organizational judgment, and show how context, bounded work, verification, and human responsibility fit together. Keep it relevant to the hiring audience and distinct from a full methodology manual or Flight Deck product pitch.

Use short sections and progressively deeper links, retaining the approved typography and concise homepage. Ground applied-AI examples in supported career facts; distinguish personal practice, co-invention, developing methodology, and future implementation. Keep a full Mission Control deep dive for a later explicit decision.

Résumés, contact destinations, About, a full methodology deep dive, and launch readiness remain outside this content slice. They require separate source and publication decisions.

## Implementation decisions

- One new top-level route, `/agentic-engineering`, with the Mission Control overview at `#mission-control`; no empty or competing methodology route.
- Local MDX uses the existing explicit registry, metadata schema, and content loader. Add an explicit route to each registry entry so the overview has one address and is not duplicated as a Writing article. Do not create a second parser or CMS.
- Short, independently headed sections cover applied AI, current engineering practice, the developing methodology, and organizational adoption. One existing semantic diagram illustrates a delivery loop; a nearby explanation covers revision and escalation.
- Navigation and a restrained homepage link make the overview discoverable without adding another homepage section. Preserve existing homepage text, hero typography, and patent placement.
- New content remains `draft`, visibly in review and `noindex, nofollow`. Existing article publication status is unchanged. These controls are not access restrictions.
- Source provenance and claim boundaries live in `docs/reference/agentic-source-assessment.md`; raw supplied files stay outside the repository.

## Execution

1. Review the chosen source material and record public-safe claims and editorial exclusions. Treat historical reference recommendations as input, not automatically accepted decisions.
2. Establish a bounded page outline and content contract using the site's existing app-local schema and Server Component patterns. Reuse the MDX golden path for long-form material rather than adding another ingestion system.
3. Draft and implement the agreed surface, integrating navigation without recreating a dense homepage or adding unready routes.
4. Verify content boundaries, links, keyboard access, mobile layouts, static rendering, and publication metadata; run the existing checks and browser journeys.
5. Restore the website on port 3000 and hand off for editorial review. Do not publish new content or change the existing article's draft status implicitly.

## Boundaries

- This track owns `apps/site/**` and website mission documents only, with required minimal updates to shared governing documents.
- Do not modify `apps/agentic-systems-lab/**` or `LAB-*` documents. The separate Lab track uses port 3100. No Lab integration or lockfile reconciliation is part of this scope proposal.
- No database, authentication, API, CMS, AI runtime, motion library, shared UI extraction, or new application infrastructure is justified by the proposed editorial scope.
- Do not invent career outcomes, employer-wide transformation results, résumé details, contact destinations, publication approvals, or an available Flight Deck harness.
- Canonical domains, remote pushes, hosted deployment, and the full Mission Control deep dive require their own explicit decisions.

## Acceptance checklist

- [x] Proceed with the recommended priority and existing sources following Erik's continuation request; state the interpretation explicitly.
- [x] The mission records implementation scope, exclusions, and public-safety constraints before feature implementation.
- [x] The visitor-facing content and navigation are implemented and visually inspected; Erik's editorial review remains pending.
- [x] Automated and browser verification pass, including publication metadata and responsive reading order.
- [ ] Final editorial review and landing are explicit; the application-track boundary remains intact.

## Verification and handoff

- `corepack pnpm check` passes formatting, linting, strict TypeScript, 21 unit/component tests, and the static production build.
- `corepack pnpm test:e2e` passes 12 production browser journeys, including native overview anchors at 320px with and without JavaScript, keyboard navigation, draft indexing, evidence links, and rejection of duplicate/unknown Writing URLs. Next.js emits `NoFallbackError` diagnostics for those intentionally unregistered URLs while correctly returning HTTP 404; valid-route browser inspection has no runtime errors.
- Home, Experience, Writing, and the overview were checked at 320, 390, 768, 1024, and 1440 pixels without horizontal overflow. Desktop/mobile screenshots were inspected for typography, the contents list, and diagram readability.
- No dependency, manifest, lockfile, Lab code, or `LAB-*` document changes were made. No push, deployment, or publication-status change occurred.
- The coordinating task requested a clean commit before its separately authorized Lab merge. Commit this verified implementation as an M003 checkpoint, keeping the overview visibly draft and this mission open for Erik's editorial acceptance. Restore the website dev server on port 3000; do not stop the Lab's port 3100 server.
