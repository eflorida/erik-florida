# FF-M001 — Flo Forge company website

- **Status:** Visual/copy direction accepted with requested edits; source push authorized, hosting pending
- **Authorized by:** Erik's 2026-10-31 request
- **Application:** `apps/flo-forge`

## Outcome

A complete single-page website for Flo Forge, the umbrella company for Erik's SaaS products, emphasizing AI-first engineering and useful modern software. Deliver a dark graphite industrial identity, concrete texture, preserved logo sources, purposeful transitions, ambient sparks, and a running local preview.

## Constraints and assumptions

This is a standalone static-first app. The user explicitly requests a motion library and authorizes brand and content assumptions; ADR-011 records the app-specific decision. No product catalog or commercial evidence is invented. The final contact destination is the email address Erik supplied, `erik@floforge.tech`; visitor-facing profile links are removed. No hosting, domain changes, AI runtime, or application persistence is included.

## Verification

- [x] Repository formatting, lint, strict TypeScript, existing tests, and builds pass.
- [x] Production browser journeys cover navigation, forge interaction/pause, reduced motion, small screens, and no-JavaScript content.
- [x] Desktop and mobile visuals inspected.
- [x] Local server running and preview opened for Erik.
- [x] Erik's visual/copy review, with the requested slogan and email-only contact edits.

Automated evidence will be recorded here. An implementation or passing check does not establish human acceptance, Landing, publication, or deployment.

## Implementation evidence — 2026-10-31

- `corepack pnpm check`: formatting, lint, strict types, 48 existing unit/component/route tests, and all three production builds passed. Flo Forge's final motion-preference refinement also passed its scoped lint, typecheck, and build.
- Flo Forge production Playwright: **5/5 passed**, covering browser errors/assets/indexing and anchors, stoke/pause/resume, OS reduced motion, 320/390/768/1440px content bounds and mobile navigation, and usable content without JavaScript. The controls stay disabled until hydration; device preferences use a native media-query subscription. Browser workers are bounded at two for this graphics-heavy page.
- Existing production journeys: personal site **12/12 passed**; Lab **7/7 passed**. An initial parallel repository run hit a Lab worker-readiness 503; its affected test and then its complete seven-test suite passed in separate runs. This is app-by-app evidence, not a claim that the original parallel invocation passed.
- In-app browser inspection covered the desktop hero/approach, mobile hero and navigation, and mobile ethos panel. Browser diagnostics reported no errors or warnings in the final preview. Original SVG files were compared byte-for-byte with Erik's supplied files.
- Development preview: `http://127.0.0.1:3200`, running through `corepack pnpm --filter @erik-florida/flo-forge dev`. The preview tab is retained for Erik.
- Erik reviewed the preview and requested “AI is the engine, People are the driver.” plus email-only contact at `erik@floforge.tech`. Those edits replace the previous slogan and provisional profile links. He authorized pushing the source to origin and will configure Vercel himself.

Human visual/copy acceptance is recorded by Erik’s follow-up, subject to the implemented edits. No formal mission Landing, Vercel deployment, DNS change, or publication is inferred from the source push.

## Final source review — 2026-10-31

The final wording is “AI is the engine, People are the driver.” Both company contact links use `mailto:erik@floforge.tech`, explicitly confirmed by Erik after correcting the initial email typo. No visitor-facing code-profile links remain. Repository checks and all five Flo Forge production browser journeys pass for these corrections. The browser checks use an ignored temporary configuration on port 3211 because port 3201 belongs to another local application; the no-JavaScript journey now respects the configured base URL. The delivery branch is `codex/flo-forge`, based on the current checkout’s existing Lab commits. Unrelated template-planning changes are excluded from the company-site commit. Vercel setup remains Erik’s next step; no hosting, DNS, or indexing changes are included.

## Hosted deployment repair — 2026-10-31

Erik connected the independent `flo-forge` Vercel project and reported deployment `dpl_4kAdavUhz7m8kho7dy6ymgo5ybJE`. Its Git source is `main` at `6afa992`; Root Directory is correctly `apps/flo-forge`. The retained build logs show the repository-root config ran `pnpm --filter @erik-florida/site build`, then expected `apps/site/.next` beneath the Flo Forge root. The personal site built successfully, but packaging failed with `NEXT_OUTPUT_DIR_MISSING` at `/vercel/path0/apps/flo-forge/apps/site/.next`.

The repair adds `apps/flo-forge/vercel.json` to explicitly select Flo Forge and the app-relative `.next` output. The repository-root personal-site configuration is unchanged. Hosted verification is pending; no DNS or indexing changes are included.
