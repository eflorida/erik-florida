# AGENTS.md — Erik Florida

## Mission

Start with `docs/product/current-state.md`, then read the applicable app's `AGENTS.md`, product summary, plan, and active mission. M003 is the latest landed website mission: its wording is editorially accepted, while publication remains separate. LAB-M001 remains ready for human review, LAB-M002 remains ready for credentialed validation, LAB-M003's change-review validation remains open, and LAB-M004 is the experiment-led visitor implementation checkpoint. A commit or merge does not imply Landing, publication, deployment, or completion of an unchecked validation item.

Flo Forge is the third, independently deployable company-site app. Start at `apps/flo-forge/AGENTS.md` and FF-M001 for its local brand/animation review checkpoint. Its explicit motion authorization under ADR-011 does not change the personal site's defaults. Vercel and `floforge.tech` setup remain separate from the local preview.

For Mission Control terminology or agentic execution, read `docs/guides/mission-control-concepts.md` and `docs/reconciliation/canonical-reference-notes.md`, then follow their links to the authoritative source. Mission Control is generally tool- and team-agnostic. Flight Deck is an optional, opinionated implementation; it does not replace coding harnesses or govern this repository by default.

Step 4's repository-native pilot is landed. Start at `.mission-control/README.md`; G004-001 records that pilot, while G008-001 governs LAB-M003 with its own State and Loop Contract. State records evidence and next action; Erik alone decides Landing. Historical mission files are not fully conforming replacements. Step 6 has a proposed logical event contract; Step 7 records observed and conditional topology. No emitted normalized Mission Control events, event runtime, or Flight Deck runtime exists. Follow `docs/RECONCILIATION_PLAN.md` and its recorded approvals for later work.

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
7. Add or broaden no database, auth, API, worker, state library, query library, AI runtime, CMS, or motion library until the relevant application's documented trigger fires. The Lab's request-bound review is governed by ADR-008; its separate Mastra change-review workflow, run store, and worker by ADR-009; its fixed-case comparison agent by ADR-010. The site retains its no-runtime defaults.
8. Accessibility, performance, public safety, and accurate attribution are requirements.
9. Enforce durable rules mechanically where possible and update governing docs when a change makes them false.
10. Verify the requested outcome; changed files alone do not constitute completion.

## Current golden path

M000 establishes verification and deployment. M001 designates `apps/site/content/writing/` → `apps/site/src/content/articles.ts` → `apps/site/src/app/writing/[slug]/page.tsx` as the first typed content path. Follow `docs/guides/adding-an-article.md` rather than creating another ingestion pattern.

M002 extends the content seam with `apps/site/content/career.json` → `apps/site/src/content/career.ts` → Home/Experience Server Components. Follow `docs/guides/editing-career-content.md`; the raw career master record stays outside the repository and application payload.

M003 reuses the editorial registry for `apps/site/content/pages/agentic-engineering.mdx` → `/agentic-engineering`. Follow `docs/guides/editing-agentic-overview.md`; draft status and editorial acceptance remain human-controlled.

The Lab's reference-scenario path is `apps/agentic-systems-lab/content/runs/*.json` → `src/contracts/run.ts` → `src/data/runs.ts` → `/reference`. Its bounded one-shot path is `src/contracts/review.ts` → `src/app/api/reviews/route.ts` → `/quick-review`, under ADR-008. LAB-M003 adds `src/contracts/workflow-review.ts` → app-local store/worker/Mastra workflow → `/workspace`, under ADR-009. LAB-M004 adds `content/comparisons/*.json` → `src/contracts/comparison.ts` → one Mastra extraction step and deterministic policy → `/comparison`, under ADR-010. None is a Mission Control runtime or Flight Deck architecture.
