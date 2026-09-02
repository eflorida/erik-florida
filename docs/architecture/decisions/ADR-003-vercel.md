# ADR-003 — Per-Application Vercel Deployment

- **Status:** Accepted
- **Date:** 2026-08-31

## Context

The repository will contain applications with potentially different rendering and runtime profiles. The personal site needs a fast route from a cold clone to a public deployment. Canonical domains are not yet needed.

## Decision

Deploy each application as an independent Vercel project. M000 produces a site preview through the Vercel CLI. The monorepo root exposes the site's pinned Next.js version as a deployment adapter so Vercel can select its Next.js builder while building `apps/site`; application runtime ownership remains in the app. Use Node.js 22 as the shared CI and Vercel baseline. Domain selection and production promotion are separate hosted decisions.

## Revisit when

An application's runtime, cost, compliance, regional, or operational needs no longer fit Vercel.
