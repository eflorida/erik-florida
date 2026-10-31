# Flo Forge — implementation plan

## Current scope

[FF-M001](../missions/FF-M001/mission.md) implements the local company-site preview in `apps/flo-forge`. Read the [product summary](../product/flo-forge.md) and [ADR-011](../architecture/decisions/ADR-011-flo-forge-brand-and-motion.md).

Erik accepted the initial direction on 2026-10-31 with two final edits: “AI is the engine, People are the driver.” and email-only contact at `erik@floforge.tech`. Those edits are implemented. Five Flo Forge production browser journeys cover the preview. Erik authorized a commit/push to origin and will connect Vercel himself.

## Sequence

1. Preserve the supplied SVG originals, establish the graphite/ember brand, and create the isolated Next.js app.
2. Build a server-rendered single page: company introduction, approach, engineering principles, and founder connection.
3. Add small app-local Motion components, a forge emblem, particle sparks, reduced-motion handling, and a pause control. All primary content and navigation remain usable without JavaScript.
4. Run repository checks, focused production browser checks, and responsive visual inspection.
5. Leave the development server running at `http://127.0.0.1:3200` for Erik's review.

## Deferred

Real portfolio entries, Vercel connection, DNS and `floforge.tech`, publication/indexing, and production operational checks. Erik confirmed `erik@floforge.tech` after correcting the initial email typo.
