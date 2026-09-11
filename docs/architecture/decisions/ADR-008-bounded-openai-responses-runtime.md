# ADR-008 — Bounded OpenAI Responses Runtime

**Status:** Accepted for LAB-M002

## Context

Agentic Systems Lab needs one live proof point after the recorded run explorer. The workflow must be inspectable and useful without accepting repositories, executing code, persisting content, or implying that a model owns engineering decisions.

## Decision

Use the official OpenAI JavaScript SDK and Responses API from an app-local Next.js server route.

- Default to `gpt-5.6-terra` with `reasoning.effort: "low"`.
- Use Structured Outputs generated from the same Zod schema that validates the returned review.
- Send no tools and execute no content from the submitted diff.
- Set `store: false`.
- Cap submitted diffs at 12,000 characters and model output at 1,200 tokens.
- Use a 30-second client timeout and one retry.
- Keep `OPENAI_API_KEY` server-only and allow a model override through `OPENAI_MODEL`.
- Require an explicit `LAB_LIVE_REVIEW_ENABLED=true` runtime opt-in and keep the endpoint local-only until public abuse controls exist.
- Return provider metadata required for inspection, but no raw provider error or secret-bearing request detail.
- Estimate token cost from documented GPT-5.6 Terra input, cached-input, and output prices. Label the result as an estimate rather than billing truth, and omit it when a different model is configured.

## Consequences

The live workflow has a small, explicit blast radius and a typed response contract. It incurs provider cost and requires a local server secret. It cannot inspect repository context, run tests, or validate whether a recommendation is correct beyond the submitted diff, so the UI must keep human authority visible.

Persistence, authentication, background execution, tool use, repository ingestion, and a second provider each require a new decision.
