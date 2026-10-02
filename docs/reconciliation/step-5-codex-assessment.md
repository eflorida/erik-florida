# Step 5 — Codex harness integration assessment

- **Date:** 2026-10-02
- **Scope:** Codex as the first selected coding harness; repository-local routing only
- **Result:** Existing routing is sufficient for the tested case. No Codex-specific skill, rule, MCP adapter, or service is justified yet.

## Question and authority

After Erik landed [G004-001](../../.mission-control/goals/G004-001/state.md) and directed narrow continuation, Step 5 asks whether the current repository-native contract/state/loop can be discovered and used from Codex without adding a parallel harness-specific source of truth. [The reconciliation plan](../RECONCILIATION_PLAN.md#step-5--coding-harness-integration) says to configure selected harnesses after the runtime is understood, keep root `AGENTS.md` as routing, and let Loop Contracts govern execution. Codex is the first harness examined because this repository pilot and its independent fresh-context evaluation used it. This selection does not imply adoption or testing of Cursor, Claude Code, or Flight Deck.

This is an integration assessment of an already landed goal, not a new product round or Goal Contract. G004-001 is closed. No new active goal, publication decision, application change, or Step 6 event authority is created here.

## Existing mapping

| Step 5 responsibility                    | Repository route and observed result                                                                                                                                                                                                                                                      |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active or landed goal discovery          | Root [AGENTS.md](../../AGENTS.md) points to [current state](../product/current-state.md) and the [pilot README](../../.mission-control/README.md). Those documents identify G004-001 as landed and say no other goal is active. A Codex session should not reopen it from a stale prompt. |
| Goal, State, and Loop                    | The pilot README links the [version 0.2 Goal Contract](../../.mission-control/goals/G004-001/contract.md), [landed State](../../.mission-control/goals/G004-001/state.md), and [editorial-readiness Loop Contract](../../.mission-control/loops/editorial-readiness.md).                  |
| Localized intent and application context | The Loop Contract routes to [M003](../missions/M003/mission.md), the [source assessment](../reference/agentic-source-assessment.md), and the [editing guide](../guides/editing-agentic-overview.md); app `AGENTS.md` and product documents retain site/Lab boundaries.                    |
| Evidence and authority                   | The Goal Contract protects evaluation, evidence, mutation, stop, and Landing rules; State retains the round, checks, fresh-context judgment, and Erik's decision. No harness instruction supersedes those documents.                                                                      |
| State and events                         | The approved State was maintained directly as Markdown. No normalized event mechanism exists or was needed to complete this case.                                                                                                                                                         |

## Evidence and limits

G004-001's independent evaluator began with root `AGENTS.md` and no conversation history. It found the then-active contract, State, Loop Contract, next permitted action, mutation/protected surfaces, evidence standard, stop conditions, and Landing authority. It found two minor provenance errors, which were corrected before candidate completion. The full repository check, source-linked editorial round, local draft metadata, and Erik's later Landing are retained in [Goal State](../../.mission-control/goals/G004-001/state.md). This is direct evidence that existing Codex routing worked for one read-only-to-editorial handoff and did not need a Codex-specific adapter.

It does not prove that Codex can safely execute every loop, keep multiple concurrent goals current, operate another harness, write external systems, or produce normalized telemetry. The fresh evaluator did not test a new active goal after Landing. If a later goal exposes a repeatable routing or execution gap, propose the smallest Codex adapter that points to the governing contract rather than copying its rules. Test that gap with a new bounded scenario before adding a skill or automation.

## Decision and next route

Keep root/app `AGENTS.md` and `.mission-control/README.md` as the Codex routing adapter for now. Add no `.codex` skill, harness-specific rule, MCP dependency, or duplicate Goal/Loop policy. When a new approved goal becomes active, update the pilot route to identify it, its current State, applicable Loop Contract, and permitted state/evidence mechanism, then validate fresh-context discovery against that goal. Choose and assess another harness separately if its actual use warrants it.

This focused Codex assessment closes the demonstrated Step 5 need; broader harness integration remains unselected. Step 6 normalized events, Flight Deck design, and application publication retain their own decisions.
