# ADR-006 — App-Local Content and Visual Golden Path

- **Status:** Accepted
- **Date:** 2026-09-10

## Context

The site needs structured editorial content, consistent presentation, and safe publication behavior. Agentic Systems Lab is not yet implemented, so there is no demonstrated second consumer for site content schemas or UI primitives. The canonical domain and final brand identity also remain undecided.

## Decision

Author articles as local MDX modules with metadata exports. Register supported slugs explicitly and treat exported metadata as unknown until an app-local Zod boundary validates it. Infer the accepted TypeScript type from the schema. Server Components load content; typed presentational components render it without fetching.

Keep the schema, loader, and editorial components inside `apps/site` until a second application needs the same contract or primitive. Draft status must be visible in the interface and must emit `noindex, nofollow`; only a deliberate metadata change may publish an article.

Use the M001 visual foundation: self-hosted variable fonts, semantic color and spacing tokens, accessible dark editorial surfaces, restrained CSS transitions, and an ordered-list diagram convention with a text equivalent. These are coherent working defaults, not final brand approval. Do not set canonical metadata until a canonical domain exists.

M001 review approved the design and typography on 2026-09-10. The upper green glow now stays fixed to the viewport with a slightly stronger opacity. Broader brand identity and canonical domains remain deferred.

## Consequences

- Adding an article requires a source module and an explicit registry entry.
- Schema errors and slug drift fail deterministic verification rather than leaking into page components.
- The writing route stays static and ships no article-specific client JavaScript.
- Package extraction remains a mechanical future refactor based on real reuse.
- Publication, brand selection, and canonical-domain decisions stay visible and human-controlled.

## Revisit when

- Agentic Systems Lab needs the same contract or visual primitive;
- Git-backed authoring constrains publishing enough to trigger a CMS evaluation;
- approved prototypes require coordinated motion that CSS cannot maintain cleanly;
- or Erik approves a final brand and canonical domain.
