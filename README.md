# Erik Florida

This repository is Erik Florida's personal platform: an immediate, public implementation of agentic-engineering ideas and a home for multiple related applications.

The first application is a professional website designed to support an engineering-leadership job search. Agentic Systems Lab will become a second application when its product mission begins.

## Relationship to Mission Control and Flight Deck

- **Mission Control** is an engineering operating methodology for maximizing customer value, organizational output, quality, autonomy, and visibility in agentic software development.
- **Flight Deck** is a future engineering-department harness that can bring together the tools, context, evidence, and work informing software delivery.
- **Erik Florida** is neither a Flight Deck competitor nor a substitute. It applies the available patterns now, before the full methodology and harness exist.

## Latest mission

[`M000 — Establish the Erik Florida Repository Bones`](docs/missions/M000/mission.md)

M000 is landed. M001 will establish the typed content golden path and initial visual foundation. Current project truth lives in [`docs/product/current-state.md`](docs/product/current-state.md). Conversations are working memory; accepted repository artifacts are project memory.

## Commands

```bash
corepack pnpm install
corepack pnpm dev
corepack pnpm check
corepack pnpm test:e2e
```

The site runs at `http://localhost:3000` during development.

## Repository map

- `apps/site` — static-first Next.js professional website.
- `packages/typescript-config` — shared strict TypeScript configuration.
- `packages/eslint-config` — shared Next.js lint policy.
- `docs/product` — product framing and current state.
- `docs/architecture` — adopted technical decisions.
- `docs/missions` — bounded change missions and landing evidence.
- `docs/plans` — durable multi-session execution state.
- `docs/reference` — preserved source material, not automatically governing truth.
