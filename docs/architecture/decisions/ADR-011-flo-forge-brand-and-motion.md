# ADR-011 — Independent Flo Forge brand app and coordinated motion

- **Status:** Accepted; visual direction reviewed by Erik on 2026-10-31; hosting pending
- **Date:** 2026-10-31

## Context

Erik requested a third app for his umbrella SaaS company, Flo Forge, including coordinated transitions, sparks, concrete texture, and research into an animation library with reusable elements. This explicit app-specific request authorizes the motion capability; it does not change the personal site's CSS-only default or require another approval before a concrete preview can be built.

## Decision

Use an independently deployable Next.js App Router app at `apps/flo-forge`, port 3200, with the repository's strict TypeScript and shared lint configuration. Keep the page server-rendered and pre-renderable. Use local font files, semantic HTML, and app-owned CSS/Tailwind v4. Preserve supplied SVG originals; create derivative hero/favicons from their mark paths and procedural concrete texture locally.

Use `motion` 14.9.0 only inside this app for coordinated entrances and spring-based pointer response. Reusable app-local Reveal, MotionProvider, MotionToggle, and ForgeScene components own the effects. CSS owns simple hover/continuous visual effects; a bounded 2D canvas owns decorative sparks. Pause when offscreen or the document is hidden, respect reduced motion, and provide a pause control. Content stays visible without JS. No shared UI package is justified.

[Motion's React guide](https://motion.dev/docs/react), [reduced-motion API](https://motion.dev/docs/react-use-reduced-motion), and [React Bits introduction](https://reactbits.dev/get-started/introduction) were reviewed on 2026-10-31. React Bits offers reusable component source, but no React Bits code or additional effect engine is copied into this implementation. This page needs one lightweight motion dependency and tailored reusable components; no premium template/package purchase is necessary.

No database, auth, API, worker, AI provider runtime, CMS, or analytics is added. AI-first is company positioning, not an assertion that this marketing page executes AI. Vercel and domain setup remain deferred by the user.

## Revisit when

Real product entries need authored-data validation; a verified contact workflow is selected; a measurable interaction cannot be maintained by the existing components; or Erik authorizes hosting/publication. No effect library is adopted repository-wide.
