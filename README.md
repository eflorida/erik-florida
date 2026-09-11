# Erik Florida

This repository is Erik Florida's personal platform: an immediate, public implementation of agentic-engineering ideas and a home for multiple related applications.

The first application is a professional website designed to support an engineering-leadership job search. Agentic Systems Lab is being developed in a separate application track; it is not a prerequisite for the website launch.

## Relationship to Mission Control and Flight Deck

- **Mission Control** is an engineering operating methodology for maximizing customer value, organizational output, quality, autonomy, and visibility in agentic software development.
- **Flight Deck** is a future engineering-department harness that can bring together the tools, context, evidence, and work informing software delivery.
- **Erik Florida** is neither a Flight Deck competitor nor a substitute. It applies the available patterns now, before the full methodology and harness exist.

## Latest landed mission

[`M002 — Experience and Professional Positioning`](docs/missions/M002/mission.md)

M002 is landed: the reviewed homepage and Experience page use curated, validated career content, with agentic engineering leading the homepage narrative and a compact patent credential in the hero. M001's typed MDX path and approved visual foundation remain intact. [M003](docs/missions/M003/mission.md) adds a draft AI/agentic overview for editorial review; its verified implementation is a coordination checkpoint, not publication approval. Current project truth lives in [`docs/product/current-state.md`](docs/product/current-state.md). Conversations are working memory; accepted repository artifacts are project memory.

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
