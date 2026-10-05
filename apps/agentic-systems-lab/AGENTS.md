# AGENTS.md — Agentic Systems Lab

## Mission

Start with the root `../../AGENTS.md` and `../../docs/product/current-state.md`, then read `../../docs/product/agentic-systems-lab.md`, `../../docs/plans/agentic-systems-lab.md`, and the active `LAB-*` mission. LAB-M003 is the active implementation checkpoint; its repository-native Goal Contract and State are in `../../.mission-control/goals/G008-001/`. LAB-M001 remains ready for human review; LAB-M002 remains ready for credentialed validation. This application is a demonstration surface, not Flight Deck or a general Mission Control runtime.

For methodology claims, read `../../docs/guides/mission-control-concepts.md` and `../../docs/reconciliation/canonical-reference-notes.md`. The repository has a LAB-M003 Goal Contract and Loop Contract for engineering execution, but the Lab application does not implement those Mission Control primitives. Its run events are app-specific.

## Commands

- Develop: `corepack pnpm --filter @erik-florida/agentic-systems-lab dev`
- Verify app: `corepack pnpm --filter @erik-florida/agentic-systems-lab lint && corepack pnpm --filter @erik-florida/agentic-systems-lab typecheck && corepack pnpm --filter @erik-florida/agentic-systems-lab test && corepack pnpm --filter @erik-florida/agentic-systems-lab build`
- E2E: `corepack pnpm --filter @erik-florida/agentic-systems-lab test:e2e`

## Rules

1. Label reference-scenario, recorded, simulated, and live behavior accurately.
2. Validate authored and external run data once at an app-local boundary; infer TypeScript types from schemas.
3. Server Components coordinate data. Presentational components receive typed props and do not fetch.
4. Keep the existing API and OpenAI runtime inside ADR-008 and LAB-M002's bounds. LAB-M003 and ADR-009 authorize only the bounded Mastra workflow, run store, and separate local worker. Tools, repository access, public enablement, auth, sandbox, and shared packages need later decisions.
5. Preserve independent deployment from `apps/site` and do not import site implementation details.
6. Every success claim links to inspectable evidence; deterministic checks and human judgments remain distinguishable.
7. Public safety, accessibility, performance, and accurate provenance are requirements.
8. The original reference scenario carries an approved disclosure that its source execution artifacts are not retained here. Preserve that boundary; do not strengthen execution or verification claims without attributable evidence and a new reviewed change.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
