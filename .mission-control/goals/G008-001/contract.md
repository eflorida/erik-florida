# G008-001 — Lab change-review Goal Contract

- **Version:** 0.1
- **Owner and Landing authority:** Erik Florida
- **Parent mission:** [LAB-M003](../../../docs/missions/LAB-M003/mission.md)
- **Authorization:** Erik's 2026-10-05 “Okay, let's do it!” in response to the specific change-review, Mastra, resumable-run, activity-drawer, and evaluation proposal
- **Status:** Active; implementation underway

## Desired observable outcome

The Lab offers an honest, production-shaped change-review journey: a visitor delegates one bounded diff, sees real delegated work, can return to its run, inspects risk, test, and decision artifacts, and knows what remains human judgment. The code demonstrates typed boundaries, offloaded execution, durable read state, bounded cost, and explicit failure behavior without becoming Mission Control or Flight Deck.

## Allowed mutation and budget

Change `apps/agentic-systems-lab/**`, its dependency lockfile, this goal/state/loop, relevant Lab product/plan/mission/architecture documents, and routing/current-state text. Do not edit the professional site's implementation, public publication status, career claims, or Flight Deck product. Use one diff of at most 12,000 characters, three model calls with output/time caps, one worker run at a time, and local admission limits. No submitted-code execution, repository ingest, model tools, automatic merge, or deployment. A public paid runtime requires a separate release decision.

## Evaluation and completion

The [Lab implementation loop](../../loops/lab-change-review.md) uses contract/route/unit/browser checks and a credentialed provider smoke. Candidate completion needs a persisted real run reopened after refresh, truthful events and failure states, usable responsive UI, passing `corepack pnpm check` and Lab browser tests, and a retained three-case quality assessment. Mocked provider results establish wiring only. If credentials or hosted resources are absent, record the exact validation gap and keep the goal active; do not silently substitute a mock for live proof.

Erik alone accepts Landing. A commit, push, build, or candidate transfer does not approve public enablement or deployment. The existing LAB-M001 and LAB-M002 open reviews are unchanged.
