# Golden Path — Add a Writing Article

This is the supported article-ingestion path established by M001.

## 1. Author the module

Create `apps/site/content/writing/<slug>.mdx`. Export a `metadata` object with:

- `slug` — lowercase words separated by hyphens;
- `title` and a concise `summary`;
- `status` — start with `draft`;
- `tags` — at least one;
- `evidence` — explicit grounding references, or an empty list.

Drafts must not declare `publishedAt`. Publishing is an editorial decision: change `status` to `published` and add an ISO date only after approval.

Use Markdown for prose. `Callout` and `SystemDiagram` are available in MDX without imports. Diagrams require a clear caption and ordered text steps.

## 2. Register the slug

Add one static importer to `articleImporters` in `apps/site/src/content/articles.ts`. The registry slug and metadata slug must match. Do not import MDX directly into a page or create filesystem parsing inside a route.

## 3. Verify the boundary

Run:

```bash
corepack pnpm check
corepack pnpm test:e2e
```

The loader validates metadata through `articleMetadataSchema`; Next.js statically renders every registered slug. A bad schema, mismatched slug, missing component, or invalid route must fail before landing.

## 4. Review publication behavior

Open `/writing/<slug>` locally. Confirm draft labeling, semantic heading order, keyboard navigation, diagram text equivalence, mobile readability, and the search-indexing decision. Content approval and changing `status` remain human-controlled.
