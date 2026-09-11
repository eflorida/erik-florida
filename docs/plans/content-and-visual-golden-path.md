# M001 Plan — Content and Visual Golden Path

**Status:** Complete — 2026-09-10

**Mission:** [`../missions/M001/mission.md`](../missions/M001/mission.md)

## Execution sequence

1. Record the M001 boundary and active project state.
2. Add the smallest official MDX and schema dependencies.
3. Implement article schemas, a static registry, and the validated content loader.
4. Author one clearly marked draft article from existing Mission Control material.
5. Implement the visual tokens, site shell, editorial primitives, and accessible flow diagram.
6. Add the writing index and statically generated article route with safe metadata.
7. Update the homepage to exercise the shell and link into the golden path.
8. Add schema, rendering, navigation, metadata, and E2E verification.
9. Run the complete local pipeline and inspect desktop and mobile output.
10. Start the development server for human review; incorporate bounded feedback before landing M001.

## Verification evidence

- `corepack pnpm check` passes formatting, ESLint, strict TypeScript, eight Vitest tests, and the Next.js production build.
- Next.js statically prerenders `/`, `/writing`, and `/writing/verification-over-understanding`.
- `corepack pnpm test:e2e` passes the desktop content journey and mobile primary-navigation check against the production server.
- Desktop and 390-pixel mobile screenshots of the homepage and article were visually inspected for hierarchy, legibility, responsive stacking, and overflow.
- The local review server is available at `http://localhost:3000`.

## Accepted outcome

- Erik approved the design, typography, and matter-of-fact article tone.
- The requested fixed green glow and small opacity increase are implemented and visually verified before landing.
- Verification passed after the final application change; the retrospective is recorded in `docs/missions/M001/retrospective.md`.
- M002 preparation records the experience-led homepage direction and the offered source document. M001 has no remaining work.

## Constraints

- Keep content and components app-local until a second consumer proves a shared abstraction.
- Do not represent draft copy as approved or published.
- Do not invent personal history, metrics, employer details, contact data, or résumé facts.
- Do not add client JavaScript where server-rendered HTML and CSS suffice.
- Do not add a motion library during this mission.

## Decision log

- M001 uses authored MDX module exports rather than YAML frontmatter. Next.js supports local MDX modules directly, and treating exported metadata as unknown preserves a single Zod validation boundary without another parser.
- The article registry is explicit rather than discovered by a runtime glob. This keeps supported slugs reviewable, statically importable, and deterministic for Next.js route generation.
- Draft status controls both visible labeling and search indexing; publication is a deliberate content change.
