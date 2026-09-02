# ADR-001 — Personal-Platform Monorepo

- **Status:** Accepted
- **Date:** 2026-08-31

## Context

The professional site is the first application, and Agentic Systems Lab will follow. Whole-system context and shared contracts are valuable for agentic development, but the applications require independent runtime and deployment profiles.

## Decision

Use a pnpm-workspace/Turborepo monorepo named `erik-florida`. The first application is `apps/site`. Add `apps/agentic-systems-lab` only when its product mission begins. Keep applications independently deployable and promote code into shared packages only after a real second consumer exists.

## Revisit when

Repository scale or ownership boundaries can no longer be expressed safely within one repository.
