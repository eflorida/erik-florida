# ADR-004 — Methodology and Product Provenance

- **Status:** Accepted
- **Date:** 2026-08-31
- **Clarification:** 2026-09-25, approved Step 2a and Erik's methodology/product boundary direction.

## Context

Mission Control, Flight Deck, the personal site, and Agentic Systems Lab are intentionally interconnected but have different purposes and maturity. Treating them as interchangeable would make both product positioning and repository authority unclear.

## Original decision — 2026-08-31

Mission Control is the engineering operating methodology. Flight Deck is a future engineering-department harness. Erik Florida is a specific implementation and public evidence surface informed by both, not a competitor or replacement. Public editorial content lives in this repository with clear provenance; Flight Deck remains independent source material rather than a runtime dependency.

## Current interpretation — 2026-09-25

Mission Control is generally tool- and team-agnostic; apply its principles to work in this repository. Flight Deck is a future, opinionated implementation of a Mission Control engineering team, providing a key observability layer along with other coordination and governance capabilities. A combination of existing tools and practices could fulfill all of its responsibilities. Flight Deck is optional rather than a required eventual destination.

The original “engineering-department harness” wording does not mean a replacement for Codex, Cursor, Claude Code or another specialized coding harness. Flight Deck may configure/orchestrate those executors. Its ownership, storage, MCP/API, UI and deployment choices belong to that product's design and are not universal Mission Control requirements or adopted Erik Florida architecture. Existing Flight Deck plans must be reassessed against current Mission Control principles; inconsistent product assumptions do not override the methodology.

This clarification preserves Erik Florida's independent applications and publication authority. It adopts no Flight Deck runtime, demo scope or new infrastructure. The [concept guide](../../guides/mission-control-concepts.md) maps current terminology; the [source authority notes](../../reconciliation/canonical-reference-notes.md) record provenance and unresolved design details.

## Revisit when

Flight Deck provides a stable content, context, or operational interface that Erik Florida can consume without losing deployment independence or publication control.
