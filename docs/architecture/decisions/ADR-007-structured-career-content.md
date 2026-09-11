# ADR-007 — Structured Career Content

- **Status:** Accepted
- **Date:** 2026-09-10

## Context

The homepage and Experience page need consistent career facts, with a connected homepage narrative and detailed Experience accounts. The supplied career master record is a working source containing both usable facts and material that does not belong in the site. Short structured records differ from the long-form article bodies already served through MDX.

## Decision

Curate visitor-facing career data into app-local JSON, validate it at one Zod boundary, and resolve the current-role reference in the content-access layer. Infer all content types. Server Components coordinate the content; presentation receives typed props. Keep project URLs stable through checked, unique IDs.

M002 review replaces homepage project selections with validated narrative paragraphs. The unused featured-project selector and resolver are removed; detailed project accounts and their existing fragment URLs remain on Experience.

Keep source provenance and editorial selection in repository documents, and leave the original master record outside the repository and deployment. Retain the M001 MDX path for long-form writing. This extends the existing content seam without adding a CMS or shared package.

## Consequences

- A career fact used on two surfaces is edited once.
- Invalid dates, duplicate anchors, missing narrative paragraphs, and broken current-role references fail verification.
- Schema validation proves structure; source review remains responsible for accuracy and suitability of claims.
- No runtime filesystem read or request-dependent fetching is needed; both pages are prerendered.

## Revisit when

A second application needs these contracts or publishing requirements justify the existing CMS trigger.
