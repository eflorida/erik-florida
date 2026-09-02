# Erik Florida — Site

Static-first professional website for Erik Florida. Repository-level context, architecture, and commands live in the root [`README.md`](../../README.md) and [`AGENTS.md`](../../AGENTS.md).

## Commands

Run from the repository root:

```bash
corepack pnpm dev
corepack pnpm check
corepack pnpm test:e2e
```

## Application rules

- Server Components coordinate content and data by default.
- Presentational components do not fetch.
- Keep initial site content static/pre-rendered and client JavaScript minimal.
- Do not add application infrastructure or a motion library before a documented trigger fires.
- Accessibility and public-safety requirements apply to every feature.
