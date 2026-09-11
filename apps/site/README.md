# Erik Florida — Site

Static-first professional website for Erik Florida, using Next.js App Router, local MDX, Zod, and Tailwind CSS. Repository-level context, architecture, and commands live in the root [`README.md`](../../README.md) and [`AGENTS.md`](../../AGENTS.md).

M001 landed the approved site shell and the first typed content golden path. M002 adds the career-led homepage and Experience page using curated facts from Erik's source material.

## Content path

Writing starts in `content/writing/`, is registered and validated by `src/content/articles.ts`, and renders through `src/app/writing/[slug]/page.tsx`. Follow the root guide at `docs/guides/adding-an-article.md`; do not parse content directly in a page.

Career data starts in `content/career.json`, is validated and resolved by `src/content/career.ts`, and reaches Home and Experience through Server Components. The corresponding guide is `docs/guides/editing-career-content.md`.

The AI/agentic overview starts in `content/pages/agentic-engineering.mdx` and uses the same editorial registry and metadata validation as Writing, with its own route at `/agentic-engineering`. Follow `docs/guides/editing-agentic-overview.md`. It remains a draft for review, not a duplicate Writing article.

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
