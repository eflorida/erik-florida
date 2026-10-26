# ADR-010 — Bounded product-comparison experiment

**Status:** Accepted for LAB-M004 local implementation, 2026-10-26

## Context

The Lab's change-review workflow demonstrates offloaded engineering work but makes the application look like a code-review product. Erik chose an experiment-led Lab that also demonstrates customer-facing AI product judgment. A catalog-substitution question connects to his public-safe applied-AI background without using previous employer assets.

## Decision

- Use three authored, fictional chair-catalog cases and fixed buyer requirements. Parse that content at an app-local Zod boundary. The route accepts only a case ID, never arbitrary catalog text or a repository.
- Give one Mastra agent the selected supplier notes. It extracts five typed facts, a source-note ID for each supported fact, and an uncertainty note. It has no tools, external access, or action authority. Limit output to 850 tokens, 30 seconds, one step, and no model retries; request provider `store: false`.
- Apply seat-height, load, lumbar, and armrest requirements in deterministic code after model output validation. Unknown values or unrecognized source IDs cannot pass. A hard mismatch blocks substitution; missing evidence calls for supplier review. The result is advisory and does not purchase or approve a product.
- Keep this experiment request-bound and stateless. The browser labels actual measured usage and latency only after a real response. It does not promise a resumable run; LAB-M003 remains the separate durable/background example.
- Require `LAB_COMPARISON_ENABLED=true` and a server key for local/controlled operation. Reject paid calls on Vercel pending an explicit hosted access, abuse, cost, privacy, and credential decision. No public release is approved.

## Consequences

This deliberately uses one model step: unstructured extraction benefits from a model, while the buyer's stated requirements are code. Note-ID validation proves a citation names an available source, not that the source semantically supports the extracted value; credentialed case evaluation must test that. Fictional cases demonstrate interaction and architecture, not supplier accuracy. A future real product would need provenance, catalog freshness, policy ownership, user permissions, correction flow, and representative evaluation before it could support purchasing decisions.
