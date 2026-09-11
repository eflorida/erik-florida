# AGENTS.md — Erik Florida

## Mission

Work is governed by the active mission. Start with `docs/product/current-state.md` and the mission it names. M001 is the latest landed mission; create or identify the next mission before feature implementation.

## Commands

- Install: `corepack pnpm install`
- Develop: `corepack pnpm dev`
- Verify: `corepack pnpm check`
- E2E: `corepack pnpm test:e2e`
- Format: `corepack pnpm format`

## Hard rules

1. Conversations are working memory; durable repository artifacts are project memory.
2. Do not silently invent product, architecture, publication, or confidentiality decisions.
3. Preserve the distinction among Mission Control (methodology), Flight Deck (future engineering harness), and Erik Florida (specific implementation).
4. Keep applications independently deployable and share only proven cross-app contracts or primitives.
5. Use strict TypeScript; validate external or authored data once at its boundary; infer types from schemas.
6. Server Components coordinate data by default; presentational components render typed props and do not fetch.
7. Add no database, auth, API, worker, state library, query library, AI runtime, CMS, or motion library until its documented trigger fires.
8. Accessibility, performance, public safety, and accurate attribution are requirements.
9. Enforce durable rules mechanically where possible and update governing docs when a change makes them false.
10. Verify the requested outcome; changed files alone do not constitute completion.

## Current golden path

M000 establishes verification and deployment. M001 designates `apps/site/content/writing/` → `apps/site/src/content/articles.ts` → `apps/site/src/app/writing/[slug]/page.tsx` as the first typed content path. Follow `docs/guides/adding-an-article.md` rather than creating another ingestion pattern.
