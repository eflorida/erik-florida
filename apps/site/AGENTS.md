# AGENTS.md — Site

## Context route

Start with the root `../../AGENTS.md` and `../../docs/product/current-state.md`. For site work, read `../../docs/product/personal-site.md`, this app's `README.md`, and the applicable `M00*` mission. M003 is editorially accepted and landed; publication is still a separate decision.

For Mission Control or agentic-development claims, use `../../docs/guides/mission-control-concepts.md`, `../../docs/reconciliation/canonical-reference-notes.md`, and the applicable source assessment. The site explains selected ideas; it is not the Mission Control runtime or Flight Deck.

Use the documented content guide for the surface being changed. Step 4's landed M003 editorial pilot is routed by `../../.mission-control/README.md`; read its Goal Contract, State, and editorial-readiness Loop Contract when reviewing that goal. The pilot does not make ordinary site work a Mission Control runtime task or authorize publication.

## Site rules

- Server Components coordinate content and data by default; presentational components render typed props and do not fetch.
- Keep the site static-first, independently deployable, and free of the Lab's API/runtime dependencies.
- Preserve draft labeling and `noindex, nofollow` until publication is explicitly approved.
- Apply public-safety, accessibility, performance, source-provenance, and accurate-attribution requirements to every change.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
