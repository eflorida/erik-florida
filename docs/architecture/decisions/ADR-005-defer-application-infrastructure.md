# ADR-005 — Defer Stateful Application Infrastructure

- **Status:** Accepted
- **Date:** 2026-08-31

## Context

The website requires no durable user state, accounts, external consumer API, or out-of-request work. Adding infrastructure for anticipated Agentic Systems Lab needs would turn unknown requirements into repository-wide constraints.

## Decision

Add no database, ORM, authentication provider, API service, worker, queue, global state library, query library, CMS, or AI runtime for the website. Evaluate each behind the documented trigger when a mission requires it.

## Revisit when

A defined, accepted product behavior fires one of the triggers in `docs/architecture.md`.
