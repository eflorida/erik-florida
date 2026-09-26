# Edit the AI & Agentic Engineering Overview

## Supported path

`apps/site/content/pages/agentic-engineering.mdx` → the explicit registry and `getArticle()` in `src/content/articles.ts` → `/agentic-engineering` → typed `AgenticOverview` and `OverviewSection` renderers.

This reuses the M001 MDX compiler, metadata schema, and content-access boundary. It is not a second ingestion system. The registry gives the overview its one path; it is deliberately excluded from the Writing index and `/writing/[slug]` static parameters. Do not add a duplicate alias or copy its body into a route component.

## Editorial rules

- Retain the source and claim boundaries in `docs/reference/agentic-source-assessment.md`.
- Use `docs/guides/mission-control-concepts.md` and `docs/reconciliation/canonical-reference-notes.md` for current terminology. The historical build plan is editorial input, not methodology authority.
- Distinguish applied-AI experience, current personal engineering practice, developing Mission Control methodology, optional future Flight Deck product work, and the separate Lab. Do not imply a completed organizational transformation, measured productivity result, available Mission Control runtime, or inevitable Flight Deck adoption.
- Use brief paragraphs inside `OverviewSection`; each section has an explicit ID, kicker, and heading. Keep the overview concise rather than expanding it into the full methodology manual.
- If section IDs change, update the native contents links in `AgenticOverview` and the browser journey. The browser tests check that each target exists and is reachable without JavaScript.
- Reuse `SystemDiagram` for the delivery loop. Its figure, ordered steps, and text equivalent remain meaningful without color or scripting. Explain revision and escalation near the diagram so it does not imply automatic acceptance.
- Label the diagram as an example rather than a universal workflow. Goals, applicable loops, evidence-backed re-entry, candidate completion, and governed Landing must not be collapsed into fixed Agile/Kanban-style stages.
- Present progressive enhancement separately from progressive autonomy. Do not imply that more machine authority is a required destination; authority changes only for a supported scope under evidence and policy.
- Link to existing Experience evidence and the Writing article. Do not copy the raw career record, add unapproved contact destinations, or link to a local/private Lab endpoint.
- Do not cite the Lab reference scenario as verified execution evidence; `docs/reference/lab-evidence-assessment.md` records its provenance boundary. A public Lab link requires separate evidence, positioning, and deployment approval.
- The overview starts as `draft`. Publishing requires explicit approval and an ISO `publishedAt` date, following the existing metadata schema. The route derives indexing from status; drafts emit `noindex, nofollow` and carry a visible review notice. Draft status does not make a route private.

## Verification

For an approved visitor-facing change, run `corepack pnpm check` and `corepack pnpm test:e2e` with the website dev server stopped so browser tests use production. Inspect Home, Experience, Writing, and the overview after navigation changes, including 320px width. Check native anchors, keyboard use, draft metadata, and the absence of `/writing/agentic-engineering` as a duplicate route. Restore only the site dev server on port 3000; the Lab owns port 3100.

Documentation reconciliation alone does not authorize an MDX edit, publication, or status change. Record the applicable editorial decision before changing visitor-facing claims.
