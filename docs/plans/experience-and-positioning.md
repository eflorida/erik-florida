# M002 Plan — Experience and Professional Positioning

**Status:** Landed — accepted for commit after review, 2026-09-11

**Mission:** [`M002`](../missions/M002/mission.md)

**Predecessor:** [`M001`](../missions/M001/mission.md)

## Intended outcome

The site should make Erik's experience, judgment, and perspective apparent quickly. Visitors should understand the professional story and be able to explore supporting evidence. Opportunities can follow from that presentation without the site asking visitors to hire him.

## Accepted direction

- Preserve the approved design, typography, and fixed green glow.
- Make the homepage a connected account of Erik's progression, not a linked accomplishments list. Bring the patent into the opening as a supporting credential, not the centerpiece.
- Lead the narrative with agentic engineering and Mission Control, then ground it in three short sections about building, ownership, and earned complexity.
- Keep writing matter-of-fact and precise, consistent with the first article.
- Keep Agentic Systems Lab independent of the personal site's launch.
- Apply the supplied homepage positioning guidance: combine first-version ownership, earned complexity, technical and organizational leadership, and practical agentic development. Signal fit through this point of view, not explicit job-search filters.

## Starting input

Erik supplied the v0.7 career master record on September 10, 2026. The complete document has been reviewed. See `docs/reference/career-source-assessment.md` for its identity, selected facts, and unresolved details. The raw document remains outside the repository.

The later `homepage-positioning-guidance.md` has also been reviewed in full. Its editorial direction and source identity are recorded in the same assessment; it does not independently substantiate transformation outcomes.

## Execution sequence

1. Review the supplied document against the existing product summary and career-site plan.
2. Identify the strongest supported experience, responsibility, and outcome statements; collect only material gaps for Erik's feedback.
3. Define the M002 mission, including a bounded route and content scope based on the available facts.
4. Rebalance the homepage and implement the agreed experience content using the established validation and rendering boundaries.
5. Verify the professional story, route behavior, responsive presentation, and source accuracy before landing.

## Implementation decisions

- Scope is the revised homepage and `/experience`, including selected-work anchors and public patent evidence.
- Short career entries use curated JSON and an app-local Zod loader; long-form writing retains the M001 MDX path.
- Role dates are structured by month, with explicit open-ended dates and legitimate overlaps preserved.
- Home uses validated narrative paragraphs and one resolved current role. Detailed projects stay on Experience with their existing stable fragment URLs; the unused homepage project selector is removed.
- Preserve the approved visual foundation. Earlier career detail is concise, visible server-rendered HTML; native section anchors provide quick navigation without an interactive disclosure component.

## Implemented outcome

After the hero, the homepage leads with personal AI practice and a thesis about changing the engineering model, with Mission Control clearly described as a developing methodology. Three separate sections ground that direction in first-version work at Qmerit, independent delivery and team ownership, and mature-engineering perspective from Macy's. Each section has two brief paragraphs, replacing the former dense combined block. A compact patent credential remains in the opening. The approved typography and `0.98` hero line-height are preserved; one Experience link follows the narrative. `/experience` retains the career detail, three project accounts, stable fragment URLs, and public patent evidence.

The content guide, source assessment, and ADR-007 document how facts are curated, validated, and rendered. All 16 unit/component tests and seven production browser journeys pass, alongside formatting, linting, strict TypeScript, and the static production build. Desktop, tablet, mobile, keyboard, JavaScript-disabled behavior, and external patent links preserving the site in its original tab were checked.

## Review and landing

Erik accepted the reviewed implementation for commit on `main` and requested M003 scope review before further implementation. Local review remains available at `http://localhost:3000` and `/experience`. Further résumé, contact, customer-permission, and metrics inputs are later editorial work, not blockers to this landed scope. The raw source stays outside the repository. Commit acceptance does not change the article's draft status or authorize a remote push or deployment.

## Boundary with M001

The approved content pipeline and visual foundation are complete. M002 owns the experience synthesis and homepage narrative. The first article remains a draft; approval of its tone and of the M001 foundation does not change its publication metadata.
