# AGENTS.md — Agentic Systems Lab

## Mission

Start with `docs/product/agentic-systems-lab.md`, `docs/plans/agentic-systems-lab.md`, and the active `LAB-*` mission. This application is a public demonstration surface, not Flight Deck.

## Commands

- Develop: `corepack pnpm --filter @erik-florida/agentic-systems-lab dev`
- Verify app: `corepack pnpm --filter @erik-florida/agentic-systems-lab lint && corepack pnpm --filter @erik-florida/agentic-systems-lab typecheck && corepack pnpm --filter @erik-florida/agentic-systems-lab test && corepack pnpm --filter @erik-florida/agentic-systems-lab build`
- E2E: `corepack pnpm --filter @erik-florida/agentic-systems-lab test:e2e`

## Rules

1. Label recorded, simulated, and live behavior accurately.
2. Validate authored and external run data once at an app-local boundary; infer TypeScript types from schemas.
3. Server Components coordinate data. Presentational components receive typed props and do not fetch.
4. Do not add an AI runtime, API, worker, database, auth, sandbox, or shared package until its mission trigger fires.
5. Preserve independent deployment from `apps/site` and do not import site implementation details.
6. Every success claim links to inspectable evidence; deterministic checks and human judgments remain distinguishable.
7. Public safety, accessibility, performance, and accurate provenance are requirements.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
