# ADR-002 — Static-First Next.js Site

- **Status:** Accepted
- **Date:** 2026-08-31

## Context

The personal website is primarily editorial content and must be exceptionally fast, accessible, machine-readable, and simple to operate. It does not need application infrastructure merely because future applications may be dynamic.

## Decision

Use strict TypeScript, Next.js App Router, React Server Components by default, Tailwind CSS v4, and Git-backed typed content. Pre-render site content wherever practical and ship minimal client JavaScript.

## Revisit when

A specific user interaction requires a different rendering or client-data profile. Apply that change to the affected surface rather than globally.
