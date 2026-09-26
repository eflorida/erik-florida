# LAB-M002 — Bounded Live Review

**State:** Ready for credentialed validation

## Change intent

### Why

The reference replay proves the inspection model but cannot demonstrate a real request lifecycle. The next proof point is a live, intentionally constrained workflow whose cost, failure modes, and human-authority boundary are visible.

### What

Accept one pasted TypeScript diff and ask the OpenAI Responses API for a structured review against fixed criteria. Show the resulting findings, usage, estimated token cost, latency, model, and human-review transfer without executing code or persisting the request.

### How

Add an app-local server route backed by the official OpenAI JavaScript SDK. Validate input and structured output with Zod, use GPT-5.6 Terra with low reasoning and no tools, set `store: false`, cap input and output, map provider failures to safe public states, and progressively enhance a server-rendered live-review surface.

## Desired outcome

A visitor with a configured server-side API key can submit a bounded TypeScript diff, receive an inspectable structured review, understand the request's measured resource use, and see that the final decision remains human-owned.

## Scope

- one TypeScript unified-diff input capped at 12,000 characters;
- one server-side Responses API request using Structured Outputs;
- verdict, risk, strengths, findings, and human-review notes;
- model, latency, token usage, and estimated token cost;
- explicit ready, running, success, setup-required, validation, rate-limit, and provider-failure states;
- preserved reference replay at `/reference`;
- app-local unit/component and browser verification.
- local-only runtime enablement until a later mission defines public abuse controls.

## Non-goals

- code execution, repository access, tools, web search, uploads, or patch application;
- persistence, authentication, sharing, histories, or background work;
- authoritative security certification or automatic merge decisions;
- exact billing reconciliation beyond the documented token-price estimate;
- Flight Deck orchestration or professional-site integration.

## Landing criteria

- [x] The live input and its boundaries are visible in the first viewport.
- [x] Invalid, oversized, and unavailable-provider requests fail safely.
- [x] The API key remains server-only and model output is schema-validated.
- [x] Successful reviews expose findings, usage, latency, and estimated cost.
- [x] The interface distinguishes model judgment from deterministic facts and human authority.
- [x] The reference replay remains available and clearly labeled.
- [x] Formatting, linting, strict TypeScript, unit/component tests, production build, and browser journeys pass.
- [ ] A credentialed live Responses API smoke test passes locally.

## Verification evidence

- Six test files pass 16 contract, runtime, route, and component tests.
- Three production browser journeys pass for live review output, reference-run inspection, and mobile overflow.
- The app passes formatting, linting, strict TypeScript, and the production build.
- The local server returns successful responses for `/` and `/reference` on port 3100 while the website remains isolated on port 3000.
- The live server route returns a safe setup-required response while runtime enablement and the API credential are absent.

## Runtime decision

LAB-M002 activates the AI-runtime trigger. The approved provider is OpenAI through the Responses API. The first model is `gpt-5.6-terra`, chosen for the documented balance of intelligence and cost; it remains configurable through `OPENAI_MODEL`. The request uses low reasoning, Structured Outputs, no tools, no persistence, and a bounded request lifetime. The route additionally requires `LAB_LIVE_REVIEW_ENABLED=true` and must remain disabled in public environments until abuse controls and a cost budget are approved.

## Human authority

The model may recommend approval or changes. A human reviewer owns interpretation, validation against the complete repository, and every merge or deployment decision.

## Reconciliation note — 2026-09-25

The [Lab evidence assessment](../../reference/lab-evidence-assessment.md) records that automated tests cover request boundaries, safe configuration/error states, and mocked success rendering. They do not replace the unchecked credentialed provider smoke test or establish review reliability across representative cases. No mission status, public enablement, or human authority changed during documentation reconciliation.
