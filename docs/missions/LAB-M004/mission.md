# LAB-M004 — Experiment-led Lab and product comparison

**State:** Implementation checkpoint; credentialed comparison evaluation and human product review pending

## Outcome

A first-time visitor understands that the Lab is a collection of working investigations in agentic product and engineering systems. The change-review workspace remains one engineering specimen. A second, customer-facing specimen compares fictional supplier records against explicit buyer requirements and leaves the purchasing decision with a person.

Erik authorized this direction on 2026-10-26 after reviewing a proposal to reframe the Lab, retain change review as an engineering-systems specimen, finish its evidence checks, and build a bounded product-comparison example. The original [Step 8 direction](../../reconciliation/step-8-demo-direction.md) permitted a different product task while preserving honest execution and evidence. This mission extends the Lab; it does not revise LAB-M003's Goal Contract or mark its missing validation complete.

## Scope

- Make `/` an experiment-led entrance with clear sample-first paths. Move the original one-shot review to `/quick-review` without changing its ADR-008 runtime.
- Add `/comparison` with three explicitly fictional chair-catalog cases, visible source notes and hard requirements, a one-step Mastra extraction agent, deterministic rule checks, measured request usage, and a human decision boundary.
- Accept only listed case IDs. Do not accept arbitrary supplier content, browse, contact a supplier, place orders, or persist comparison requests/results. The paid call is disabled by default and rejected on Vercel; controlled local enablement requires a server key and `LAB_COMPARISON_ENABLED=true`.
- Keep Mission Control methodology and Flight Deck product separate from both experiments. Do not build a generalized workflow platform or shared app package.

## Evidence required before claiming completion

- [x] Authored cases and model output have app-local schema boundaries; invalid source IDs cannot count as evidence.
- [x] Deterministic policy overrides model extraction for hard mismatches and unresolved requirements, covered by meaningful tests.
- [x] An unconfigured visitor can inspect the cases without seeing a fabricated model result.
- [x] Complete repository checks and seven Lab browser journeys pass on the implementation checkpoint.
- [ ] Run the three [retained comparison cases](../../reference/lab-m004-quality-cases.md) with a credentialed model, record actual outputs and usage, and inspect extraction and abstention quality.
- [ ] Erik reviews the visitor framing and visual result.

LAB-M003's own credentialed smoke and three-case review-quality assessment remain open. Public paid operation, hosted deployment, site-to-Lab linking, and publication are separate decisions.
