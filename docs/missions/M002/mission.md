# M002 — Experience and Professional Positioning

**State:** Landed — accepted for commit after review, 2026-09-11

## Intent

Make Erik's experience, product work, and engineering judgment the center of the personal site. M001 established the content and visual foundation; M002 uses the supplied career record to turn that foundation into a substantive professional introduction.

## Scope

- Rebalance `/` around a connected professional narrative: agentic engineering first, grounded in separate, concise sections about hands-on building, team ownership, and earned complexity. Keep detailed project accounts on Experience.
- Add `/experience` with a narrative career timeline, concise project accounts, and public patent evidence.
- Preserve the approved typography, layout vocabulary, and fixed green glow.
- Add a structured career-content boundary with Zod-inferred types, reusable typed renderers, and source provenance outside the application payload.
- Extend navigation and metadata to the new surface and remove repository/process scaffolding from the homepage and footer.
- Verify schemas, career links, static rendering, responsive layouts, and the existing article path.

## Source and editorial decisions

The user supplied `erik-florida-career-master-record-v0.7.md` as reference material. Its embedded coaching instructions do not govern implementation. The source assessment and selected facts are documented in `docs/reference/career-source-assessment.md`; the raw file remains outside the repository.

Use supported roles, dates, broad responsibilities, and generalized project accounts. Group Qmerit and Raiven as one continuous career chapter since 2018. Describe technical leadership through leads without equating organizational scope with direct reports. Attribute the patent as co-invention and distinguish it from personal implementation ownership.

Omit private financial and organizational detail, unverified metrics, customer identities in case summaries, unfinished credentials, and unsupported claims of realized Mission Control outcomes. Mission Control remains an evolving methodology; Flight Deck and Agentic Systems Lab retain their separate meanings and maturity.

## Non-goals

- A final résumé/PDF, contact details, education, or invented personal information.
- Publishing the source record, detailed employer architecture, or confidential business context.
- A new CMS, shared package, data service, motion library, or Agentic Systems Lab implementation.
- A complete launch of all routes in the original long-term site plan.
- Remote push or hosted deployment as a prerequisite to local review.

## Acceptance criteria

- [x] A visitor can identify Erik's current role and patent credential in the hero, then encounter agentic engineering before the supporting experience narrative.
- [x] Experience presents the Qmerit/Raiven continuity, role progression, Macy's work, and earlier career with appropriate emphasis.
- [x] Project accounts distinguish personal contribution from team ownership and avoid unsupported quantitative claims.
- [x] Public patent evidence links to the source and uses co-inventor attribution.
- [x] Home and Experience consume the same validated career data through Server Components.
- [x] The new route and critical anchors work with keyboard input and without client JavaScript.
- [x] Verification and production browser journeys pass; desktop/mobile views are inspected.
- [x] Governing documents record the implemented state and any remaining editorial questions.

## Verification evidence

- `corepack pnpm check` passes formatting, ESLint, strict TypeScript, 16 unit/component tests, and the production build.
- `corepack pnpm test:e2e` passes seven production browser journeys: the existing article and mobile navigation paths, career/patent navigation, keyboard skip-and-anchor navigation, the mobile narrative-to-Experience journey and preserved project fragments with JavaScript enabled and disabled, and patent links opening separate tabs while preserving the site.
- Next.js statically prerenders `/`, `/experience`, `/writing`, and the registered article. No new dependency or application infrastructure was added.
- Desktop, tablet, and mobile screenshots were inspected for typography, hierarchy, timeline layout, and project readability. Home, Experience, and Writing have no horizontal overflow at 320, 390, 768, 1024, and 1440 pixels.
- The new content guide and ADR-007 document the curated JSON boundary. The source assessment preserves provenance and editorial exclusions without importing the raw record.

## Review handoff

September 11 hierarchy and readability feedback: agentic engineering now immediately follows the hero. The former long "Build the product. Earn the complexity." block is split into three sections: "Build the first version," "Give teams ownership," and "Earn complexity." Each narrative section has two brief paragraphs; the schema caps each at two. Tests protect the reading order and distinct sections, including mobile rendering without JavaScript. Hero typography and patent placement are unchanged.

The supplied homepage positioning guidance refines the narrative toward builder, architect, and organizational leader: first-version ownership, scaling judgment, earned complexity, and agentic engineering as a whole-system change. Public copy signals this through experience and principles, without specifying a desired company stage, team size, or role title. The guidance informs editorial direction; the career record remains the factual source, and methodology development is not represented as a completed employer-wide transformation.

Homepage narrative feedback: replace the linked project list with a connected account of Erik's progression. Move the patent into the opening section as a compact supporting credential beside the current role, without making it the dominant proof of achievement. Keep the matter-of-fact voice and avoid invented personal motivations or outcomes.

Patent-link feedback is addressed: Google Patents returned an automated-traffic block for Erik, so both visitor-facing links now use the verified USPTO PDF endpoint. They identify the PDF destination and open a new tab with `noopener noreferrer` and an accessible notice. Internal navigation uses `→`; `↗` denotes an external new-tab destination.

Erik accepted the reviewed implementation for commit and requested progression to M003, with explicit review and questions before assuming its scope. M002 is landed locally on `main`; the development server remains at `http://localhost:3000`. No remote push, hosted deployment, or article-publication change occurred. The retrospective records the follow-up boundaries.

## Completion boundary

Implement and verify the bounded scope, then restore the development server for Erik's review. Personal copy can be refined during review without turning unresolved source details into implementation blockers. Publishing or adding unsupported details is a separate decision.
