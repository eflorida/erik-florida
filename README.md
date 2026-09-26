# Erik Florida

This repository is Erik Florida's personal platform: an immediate, public implementation of agentic-engineering ideas and a home for multiple related applications.

The first application is a professional website designed to support an engineering-leadership job search. Agentic Systems Lab is the second application and provides a recorded run explorer plus a bounded local live-review workflow. The applications share the monorepo but remain independently deployable; the Lab is not a prerequisite for the website launch.

## Relationship to Mission Control and Flight Deck

- **Mission Control** is a generally tool- and team-agnostic engineering operating methodology. Its principles apply here with the tools available now.
- **Flight Deck** is a possible future, opinionated implementation of a Mission Control engineering team, including observability, coordination, and governance. Existing tools could collectively provide the same capabilities; Flight Deck is not a dependency or mandatory destination for this repository.
- **Erik Florida** is a specific implementation and public evidence platform informed by Mission Control. The [concept guide](docs/guides/mission-control-concepts.md) and [source authority notes](docs/reconciliation/canonical-reference-notes.md) govern this distinction.

## Current mission state

[`M002 — Experience and Professional Positioning`](docs/missions/M002/mission.md)

M002 is landed: the reviewed homepage and Experience page use curated, validated career content, with agentic engineering leading the homepage narrative and a compact patent credential in the hero. M001's typed MDX path and approved visual foundation remain intact. [M003](docs/missions/M003/mission.md) adds a draft AI/agentic overview for editorial review; its verified implementation is a coordination checkpoint, not publication approval. Current project truth lives in [`docs/product/current-state.md`](docs/product/current-state.md). Conversations are working memory; accepted repository artifacts are project memory.

The Lab implementation is present in this checkout. [LAB-M001](docs/missions/LAB-M001/mission.md) remains ready for human review, while [LAB-M002](docs/missions/LAB-M002/mission.md) remains ready for credentialed validation. Its bounded API/runtime is governed by [ADR-008](docs/architecture/decisions/ADR-008-bounded-openai-responses-runtime.md); no persistence, worker, authentication, repository access, or public runtime enablement is implied.

## Commands

```bash
corepack pnpm install
corepack pnpm dev
corepack pnpm check
corepack pnpm test:e2e
```

The site runs at `http://localhost:3000` and the Lab at `http://localhost:3100` during development.

## Repository map

- `apps/site` — static-first Next.js professional website.
- `apps/agentic-systems-lab` — independently deployable Next.js evidence application with recorded replay and bounded live review.
- `packages/typescript-config` — shared strict TypeScript configuration.
- `packages/eslint-config` — shared Next.js lint policy.
- `docs/product` — product framing and current state.
- `docs/architecture` — adopted technical decisions.
- `docs/missions` — bounded change missions and landing evidence.
- `docs/plans` — durable multi-session execution state.
- `docs/reference` — preserved source material, not automatically governing truth.
- `docs/reconciliation` — Mission Control synchronization findings, decisions, and phase records.
