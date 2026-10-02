# AGENTS.md — Erik Florida

## Mission

Start with `docs/product/current-state.md`, then read the applicable app's `AGENTS.md`, product summary, plan, and active mission. M002 is the latest landed website mission; M003 is an implemented checkpoint pending editorial acceptance. LAB-M001 remains ready for human review and LAB-M002 remains ready for credentialed validation. A commit or merge does not imply Landing, publication, deployment, or completion of an unchecked validation item.

For Mission Control terminology or agentic execution, read `docs/guides/mission-control-concepts.md` and `docs/reconciliation/canonical-reference-notes.md`, then follow their links to the authoritative source. Mission Control is generally tool- and team-agnostic. Flight Deck is an optional, opinionated implementation; it does not replace coding harnesses or govern this repository by default.

Step 4 has bootstrapped one repository-native pilot. Start at `.mission-control/README.md`, then read the active `G004-001` Goal Contract, Goal State, and editorial-readiness Loop Contract before agentic execution. The state records the current blocker and next action; Erik alone decides Landing. Historical mission files are not fully conforming replacements. No normalized event artifacts or Flight Deck runtime exist. Follow `docs/RECONCILIATION_PLAN.md` and its recorded approvals for later work.

## Commands

- Install: `corepack pnpm install`
- Develop: `corepack pnpm dev`
- Verify: `corepack pnpm check`
- E2E: `corepack pnpm test:e2e`
- Format: `corepack pnpm format`

## Hard rules

1. Conversations are working memory; durable repository artifacts are project memory.
2. Do not silently invent product, architecture, publication, or confidentiality decisions.
3. Preserve the distinction among Mission Control (tool- and team-agnostic methodology), Flight Deck (optional product implementation), and Erik Florida (specific implementation and evidence platform).
4. Keep applications independently deployable and share only proven cross-app contracts or primitives.
5. Use strict TypeScript; validate external or authored data once at its boundary; infer types from schemas.
6. Server Components coordinate data by default; presentational components render typed props and do not fetch.
7. Add or broaden no database, auth, API, worker, state library, query library, AI runtime, CMS, or motion library until the relevant application's documented trigger fires. The Lab's existing bounded API and OpenAI runtime are governed by ADR-008; the site retains its separate no-runtime defaults.
8. Accessibility, performance, public safety, and accurate attribution are requirements.
9. Enforce durable rules mechanically where possible and update governing docs when a change makes them false.
10. Verify the requested outcome; changed files alone do not constitute completion.

## Current golden path

M000 establishes verification and deployment. M001 designates `apps/site/content/writing/` → `apps/site/src/content/articles.ts` → `apps/site/src/app/writing/[slug]/page.tsx` as the first typed content path. Follow `docs/guides/adding-an-article.md` rather than creating another ingestion pattern.

M002 extends the content seam with `apps/site/content/career.json` → `apps/site/src/content/career.ts` → Home/Experience Server Components. Follow `docs/guides/editing-career-content.md`; the raw career master record stays outside the repository and application payload.

M003 reuses the editorial registry for `apps/site/content/pages/agentic-engineering.mdx` → `/agentic-engineering`. Follow `docs/guides/editing-agentic-overview.md`; draft status and editorial acceptance remain human-controlled.

The Lab's reference-scenario path is `apps/agentic-systems-lab/content/runs/*.json` → `src/contracts/run.ts` → `src/data/runs.ts` → `/reference`. Its bounded live path is `src/contracts/review.ts` → `src/app/api/reviews/route.ts` → the live-review UI, under ADR-008. Do not generalize either path into a Mission Control runtime or Flight Deck architecture without a new approved mission.
