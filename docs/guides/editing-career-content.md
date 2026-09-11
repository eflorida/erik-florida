# Career content — M002

Short career and project accounts use `apps/site/content/career.json`. Long-form articles continue through the M001 MDX path.

## Content boundary

`career.json` → `careerSchema` → `getCareer()` → Home and Experience Server Components → typed presentational components.

The content-access module validates the curated source once on module load. Dates, unique anchors, current-role references, nonempty narrative paragraphs, and public evidence links are checked by the schema. Types are inferred from the schema and resolved loader output. Pages and components never parse the raw master record.

## Authoring rules

- Keep only selected, visitor-facing content in the JSON. Store source identity, editorial exclusions, and unresolved questions in the source assessment, outside the application payload.
- Preserve Qmerit/Raiven as one continuous career chapter while recording each title and employer label within it.
- Use `YYYY-MM` for role dates and `null` for the current end date. Preserve legitimate overlapping dates in earlier work.
- Give each chapter, role, and project a unique ID. Existing project fragment URLs remain stable even though the homepage no longer links to individual project accounts.
- Set `currentRoleId` to an open-ended role in a career chapter.
- Lead with `perspective.title` and `perspective.paragraphs` immediately after the hero. Follow with the ordered `journey` array: each section has a unique `id`, a `kicker`, a `title`, and `paragraphs`. Both formats use the same narrative schema, allowing one or two nonempty paragraphs per section; keep paragraphs brief and give distinct ideas their own sections. The current progression is agentic engineering → first-version building → team ownership → earned complexity. One Full experience link follows the final section. Keep project detail on Experience; do not turn the homepage back into a linked accomplishments list.
- Follow the positioning guidance recorded in the source assessment: first-version ownership, earned complexity, autonomous engineers, and agents across the engineering system. Keep public copy free of literal job-search filters and unverified transformation outcomes.
- Keep the patent as a compact opening credential beside the current role, with co-inventor attribution and its external new-tab link.
- Keep summaries factual and concise. Distinguish first-version ownership from later team contributions.
- Check new assertions against the source; do not add estimates, confidential details, or an unverified accomplishment simply because the schema accepts the shape.

## Verification

Run `corepack pnpm check` and `corepack pnpm test:e2e`. Inspect `/` and `/experience`, including the narrative's Experience link, existing project fragment URLs, and the patent's new-tab behavior at a mobile width. Check that the public narrative and source assessment stay consistent.
