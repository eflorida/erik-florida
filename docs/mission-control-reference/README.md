# Mission Control Canonical Reference Package

This directory contains the supplied canonical reference package for reconciling this repository with Mission Control. Read it with the [2026-09-25 source authority clarification](../reconciliation/canonical-reference-notes.md).

The methodology documents take precedence over older Mission Control or Flight Deck assumptions. Mission Control is generally tool- and team-agnostic. Flight Deck is an optional, opinionated engineering-team implementation, including observability, coordination and governance; its functions could instead be supplied by a combination of existing tools. Product-specific Flight Deck choices do not become methodology requirements. Existing product plans must be reassessed against current principles before implementation.

## Methodology sources

1. [Mission Control Operating Model](mission-control-operating-model.md) — missions, goals, state and progressive enhancement.
2. [Autonomous Flight](autonomous-flight.md) — execution/control, rounds, evidence and authority.
3. [Agentic Loop Architecture](agentic-loop-architecture.md) — reusable contracts and protected evaluation.
4. [Mission Control Implementation](mission-control-implementation.md) — adoption method and worksheets.
5. [Document-suite alignment](document-suite-alignment.md) — responsibilities across the methodology and related work.

## Product reference

[Flight Deck product boundary](flight-deck-product-boundary.md) records product reasoning. Its proposed ownership, interfaces and storage apply to the future Flight Deck application, not to every implementation of Mission Control. It is not an adopted implementation plan for this repository.

## Reading and reconciliation

Use the [local concept guide](../guides/mission-control-concepts.md) for a concise mapping. The six imported documents remain unchanged; the [link map](../reconciliation/canonical-reference-notes.md#imported-reference-link-map) resolves four stale implementation-document links without rewriting their supplied form. Missing definitions and documents are recorded in the same notes.

The [reconciliation plan](../RECONCILIATION_PLAN.md) defines the phases; the [audit and approval record](../reconciliation/mission-control-sync-audit.md) records current authorized scope. Step 1 was investigation-only. Erik approved Step 2a on 2026-09-25; later changes remain subject to their recorded scope and gates. These reference inputs are not automatically public documentation, application requirements or publication approval.
