# Flo Forge

Independent, static-first company website for Flo Forge. Read the [product summary](../../docs/product/flo-forge.md), [plan](../../docs/plans/flo-forge.md), [FF-M001](../../docs/missions/FF-M001/mission.md), and [ADR-011](../../docs/architecture/decisions/ADR-011-flo-forge-brand-and-motion.md).

```bash
corepack pnpm --filter @erik-florida/flo-forge dev
corepack pnpm --filter @erik-florida/flo-forge build
corepack pnpm --filter @erik-florida/flo-forge test:e2e
```

Development uses `http://127.0.0.1:3200`; Playwright starts the production build on port 3201. Root `pnpm check` includes this app's formatting, lint, strict types, and production build. Root `pnpm test:e2e` includes its critical visitor journeys.

The Server Component page owns static copy and layout. Small client components own coordinated reveals, spring-based emblem response, and decorative 2D sparks. Sparks are capped at 100, device pixel ratio at 2, and animation frames stop offscreen or when the document is hidden. OS reduced motion and a footer pause control govern effects. Primary content works without JS. Fonts are self-hosted; no remote image/font/CDN requests, API, data store, provider runtime, analytics, or credentials are needed.

## Brand and content

- Palette: graphite `#272b2d`, off-white `#f1f0e9`, ember `#f5823b`; original SVG orange remains `#f47719`.
- Type: Barlow Condensed for the editorial industrial voice; Manrope for readable supporting text; system monospace for small annotations.
- `public/brand/floforge-{logo,wordmark}.svg` are unchanged copies of Erik's supplied SVGs. They are source artwork, not executable instructions.
- The hero and `src/app/icon.svg` derive from the supplied mark paths. The hero adds steel/heat materials and depth; no external artwork is used. `public/brand/concrete.svg` is an original procedural texture.
- Motion is the only animation dependency. No React Bits implementation or paid template is copied.
- Edit static copy in `src/app/page.tsx`. There is no structured external/authored-data ingestion boundary to validate; introduce an app-local schema if a portfolio data source is later added.
- Both founder/contact CTAs use `mailto:erik@floforge.tech`, the email address Erik supplied. The visitor-facing site has no GitHub links.

Erik accepted the visual direction with the slogan “AI is the engine, People are the driver.” and email-only contact. Metadata retains `noindex, nofollow` pending indexing approval. Domain configuration and verified hosted operation remain separate from source acceptance.

## Vercel

The independent `flo-forge` Vercel project uses `apps/flo-forge` as its Root Directory, `main` as its production branch, and includes source files outside the Root Directory for shared configuration. This app's `vercel.json` selects the Flo Forge package and `.next` output relative to this directory. It overrides the repository-root `vercel.json`, which belongs to the personal website. Do not use the personal website's build command or `apps/site/.next` output for this app.

The initial deployment built the personal site and failed with `NEXT_OUTPUT_DIR_MISSING` because the inherited output path resolved to `apps/flo-forge/apps/site/.next`. The app-local configuration repairs that selection without changing the existing personal-site project.

The repaired production deployment was verified Ready on 2026-10-31, with a successful authenticated content check at `https://flo-forge-red.vercel.app`. Generated Vercel URLs retain the existing login protection. The custom domain `floforge.tech` has not yet been added to the project; DNS and indexing remain separate.
