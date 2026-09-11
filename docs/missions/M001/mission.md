# M001 — Establish the Content and Visual Golden Path

**State:** Landed — 2026-09-10

## Change intent

### Why

M000 proved that the repository can be installed, verified, built, and deployed. The site now needs one blessed path from authored content to a public-quality editorial surface so later feature work does not scatter copy, validation, metadata, or visual decisions across page components.

### What

Create the first schema-validated, Git-backed MDX article and render it through an app-local content-access layer. Establish the provisional visual system, responsive site shell, navigation, footer, editorial and evidence primitives, accessible diagram convention, and page-metadata helper needed to present that article coherently.

### How

Use Zod at the authored-content boundary, Next.js App Router and Server Components for orchestration, local MDX for article bodies, pure typed renderers, semantic CSS tokens, and CSS-only transitions. Keep the implementation app-local while the personal site remains its only consumer.

## Desired outcome

A future executor can add a writing entry by following one documented path: author one MDX module, register its slug, pass build-time schema validation, and receive consistent routing, metadata, typography, evidence, diagram, and draft-publication behavior without inventing another content system.

## Scope

- article metadata and evidence schemas with inferred TypeScript types;
- an app-local article registry and content loader;
- one complete draft article derived from existing Mission Control source material;
- a static writing index and statically generated article route;
- responsive header, navigation, page shell, and footer;
- provisional typography, color, spacing, focus, and motion tokens;
- pure editorial, evidence, callout, and flow-diagram renderers;
- metadata generation that prevents draft articles from being indexed;
- content-boundary, component, navigation, route, and build verification;
- a documented golden path and visual-system decision record.

## Non-goals

- final visual identity, logo, personal photography, or social-card artwork;
- final résumé, experience, biography, contact, LinkedIn, or availability copy;
- publication approval for the draft article;
- all v1 routes or job-application readiness;
- canonical domains, analytics, CMS, database, authentication, API, worker, AI runtime, client state, or a motion library;
- a shared content, contracts, or UI package before a second consumer exists.

## Decisions resolved

- **Content location:** schemas, loaders, and renderers begin in `apps/site`; a future second consumer is the trigger for package extraction.
- **Authored format:** local MDX modules export metadata which is treated as unknown and validated once by the content-access layer.
- **Publication safety:** the first article is visibly marked `draft`, is excluded from the writing index's published count, and emits `noindex` metadata until Erik approves publication.
- **Visual posture:** dark, editorial, technical, calm, and high-signal. The foundation is intentionally revisable; it is not a final brand decision.
- **Motion:** short CSS transitions only, with reduced-motion support. Coordinated motion remains behind the existing library trigger.

## Human authority retained

Erik retains authority over personal claims, career details, links and contact information, résumé publication, final brand direction, final article wording, and changing any content status from `draft` to `published`.

## Landing criteria

- [x] Article metadata is validated at one framework-independent boundary and types are inferred from the schema.
- [x] One MDX article renders through a content loader and statically generated route.
- [x] Invalid metadata and slug mismatches fail deterministic tests or builds.
- [x] Draft content is visibly labeled and produces `noindex` metadata.
- [x] Home, writing index, and article use a responsive semantic site shell.
- [x] Evidence and diagram primitives are accessible and receive typed render-ready props.
- [x] The visual foundation has documented tokens and uses no motion library.
- [x] Formatting, linting, strict TypeScript, tests, production build, and E2E checks pass.
- [x] The local review surface is inspected at desktop and mobile widths.
- [x] Golden-path and current-state documentation reflect the implementation.
- [x] Erik reviews the visual direction and draft article before M001 lands.

## Accepted review and landing

Erik approved the design and typography, and endorsed the first article's matter-of-fact tone. The requested visual adjustment keeps the upper green glow fixed relative to the viewport while scrolling and increases its opacity from 24% to 30%. CSS handles the effect behind the content with no JavaScript or motion dependency.

The homepage should lead more strongly with Erik's experience and perspective. That direction is recorded in the product summary and M002 preparation plan; its implementation will use the experience document Erik has offered. The first article retains its draft publication status.

## Evidence

- `corepack pnpm check` passes formatting, ESLint, strict TypeScript, eight unit/component tests, and production build.
- `corepack pnpm test:e2e` passes both browser journeys against the production server with the development server stopped.
- The homepage, writing index, and registered article are statically prerendered.
- Desktop (1440 × 1000) and mobile (390 × 844) browser inspection confirmed that the glow remains fixed at the same viewport coordinates after scrolling, decorative layers do not intercept input, and home/article layouts have no horizontal overflow.
- The design guide, article guide, product summary, current state, and M002 preparation record the accepted outcome.

M001 is complete. The development server is restored for continued local review; M002 starts from the experience source material.
