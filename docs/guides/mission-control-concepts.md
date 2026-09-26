# Mission Control concepts for this repository

**Established:** 2026-09-25, approved Step 2a scope.
**Read with:** [source authority and clarification](../reconciliation/canonical-reference-notes.md) and the [canonical reference index](../mission-control-reference/README.md).

Mission Control is a generally tool- and team-agnostic methodology for moving intent toward observable outcomes through bounded work, evidence and governed decisions. Apply its principles to this repository's work with the capabilities available today. Adopting the method does not require Flight Deck, an AI executor, a particular team organization, or a new runtime.

Flight Deck is a future, opinionated implementation of a Mission Control engineering team, providing an important observability layer along with other coordination and governance capabilities. Existing tools and operating practices could collectively fulfill all of those responsibilities. Its product-specific architecture must follow current Mission Control principles; it does not govern this repository by default.

## Outcomes and execution

The [operating model](../mission-control-reference/mission-control-operating-model.md) distinguishes strategic intent from executable outcomes:

`Mission → Goal Contract → Loop Invocations → Rounds → Evidence → Landing`

This describes relationships and authority, not a fixed board or stage sequence. A mission may contain several goals; a goal may invoke several reusable loops. Plans and tasks are revisable routes toward the outcome. Re-entry follows new evidence, and an invoked loop may enforce its own internal protocol.

| Concept                  | Meaning and practical distinction                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mission**              | The organizational change being pursued and why it matters. It supplies purpose for one or more bounded goals.                                                                                                                                                                                                                                        |
| **Goal / Goal Contract** | A durable, versioned agreement defining an observable desired state, scope/exclusions, completion conditions and persistent effects, retained constraints, approved scenarios, evidence/reliability requirements, authority, budget, stop/escalation rules and Landing authority. Execution cannot silently change its outcome or protected criteria. |
| **Goal State**           | The mutable operational companion: current gap and round, failures, evidence, next action, blockers and status. State claims retain their supporting provenance. The operating model recommends `proposed`, `active`, `blocked`, `candidate-complete`, `landed` and `abandoned`; these are not a migration instruction for existing app enums.        |
| **Loop / Loop Contract** | A reusable contract for accepted inputs/context, valid starting conditions, work boundaries, evaluation, artifacts/evidence, budget/retry/stop rules and permitted transfers. A person, deterministic automation or agent can execute it while satisfying the same contract.                                                                          |
| **Round**                | One bounded attempt to close an attributable causal gap. The change may cross several implementation layers; a replay step, API call or retry is not automatically a round.                                                                                                                                                                           |
| **Evidence**             | Attributable observations that support claims about behavior, persistent effects, reliability and retained constraints. A summary or schema-valid response is not sufficient proof of the behavior it describes.                                                                                                                                      |
| **Transfer**             | A policy-permitted handoff of artifacts and evidence with explicit ownership, recipient acceptance and return/rejection paths. A recommendation to transfer is not an accepted transfer.                                                                                                                                                              |
| **Landing**              | The governed decision that sufficient evidence satisfies a goal. Candidate completion is a claim ready for that decision. Only the named authority may land the goal; an executor may do so only if policy grants that authority. A passing build, commit, merge, release or production check does not independently establish Landing.               |
| **Autonomous Flight**    | The execution/control model for pursuing goals through verified baselines, bounded rounds, evaluation and governed transfers. Autonomy belongs to the system's contracts and policy, not an independently trusted agent.                                                                                                                              |
| **Flight Deck**          | An optional product implementation of a Mission Control engineering team. Its observability, governance and coordination choices are application design, not universal methodology. It can configure/orchestrate specialized coding harnesses rather than replacing them.                                                                             |
| **Telemetry**            | Observations/events about operation. Normalized, attributable events can support aggregate loop analysis; per-request token/latency metrics describe a narrower concern. Git provides provenance, but is not by itself a complete event history.                                                                                                      |
| **Mission Log**          | The named history/provenance concern in the supplied model. The exact schema and storage/projection contract remain unspecified; this guide does not adopt one.                                                                                                                                                                                       |

The [loop architecture](../mission-control-reference/agentic-loop-architecture.md) defines execution contracts and authority; [Autonomous Flight](../mission-control-reference/autonomous-flight.md) defines round and completion semantics. The [reconciliation plan](../RECONCILIATION_PLAN.md) calls for later normalized events and analytics. None of these requires putting all work into one application.

## Three information responsibilities

| Responsibility       | What it preserves                                                                                             | Possible implementation, not a requirement                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Durable artifacts    | Approved intent, contracts, decisions, outputs and evidence that remain useful beyond a conversation.         | Versioned documents, code, issue records, retained evidence or artifacts in specialist systems. |
| Operational state    | What is currently true, the active gap, next action, ownership and blockers, with evidence behind the claims. | A maintained Goal State document or governed record in an existing system.                      |
| Telemetry and events | Attributable changes and execution observations from which history and aggregate measures can be derived.     | Normalized records from CI, harnesses, reviewers, deployments and production verification.      |

These are logical responsibilities. One small document may serve more than one initially; no separate database or service is implied. Durable state must survive conversation loss. Conversations are working surfaces where intent and decisions develop; accepted artifacts and state carry organizational memory. Trace detail can have different retention needs from decision and effect evidence.

Intent is an authoritative input to work. A localized implementation brief should relate a goal and its approved constraints to the current gap, affected surfaces, permitted changes, context, evidence and escalation conditions. That relationship does not freeze a task list or select a file layout. Repository-native Markdown is an available pattern here; the proposed `.mission-control` structure remains a later evaluation, not a methodology requirement.

## Evaluation and authority

[Autonomous Flight](../mission-control-reference/autonomous-flight.md) separates three judgments:

- **Floor:** deterministic checks preserve capabilities and constraints already earned.
- **Direction:** approved realistic scenarios expose the next meaningful shortfall.
- **Sufficiency:** the governing authority determines whether the accumulated evidence satisfies the goal.

Preflight establishes whether the world and harness are valid. An invalid run calls for environment/harness recovery and cannot support a product score; a valid failure is evidence of a capability gap. A successful stochastic run demonstrates possibility, not reliability. Verify persistent effects and visible proof where the goal requires them, not just generated text or tool return values.

The [loop architecture's authority model](../mission-control-reference/agentic-loop-architecture.md#authority-model) distinguishes free implementation surfaces, changes that may only be proposed, and frozen goal/evaluation surfaces. Keep evaluation independent where practical. The product loop can propose harness or direction changes; it cannot silently change its own exam, weaken retained checks or grant itself new authority. Contract revisions require governed version changes.

## Progressive enhancement

The [implementation method](../mission-control-reference/mission-control-implementation.md) starts with real work, a useful bounded outcome, owners/recipients, available capabilities and evidence. People and existing tools may operate a useful loop indefinitely. Improving data, evaluation, visibility or handoffs does not require increasing machine authority.

Assess data collection/existence, AI access/usability and human visibility/use separately, with accuracy, freshness, provenance, ownership and permissions across all three. Keep gaps explicit. Authority may expand, remain unchanged or contract based on evidence and policy. Team roles, meetings and tools can remain where they satisfy the contracts; there is no mandatory migration or autonomy destination.

## Applying the concepts here

Existing `M000`–`M003` and `LAB-*` documents contain useful intent, scope, evidence and acceptance records. Preserve their IDs and historical decisions. Map future work explicitly to goals and loops as needed; do not relabel old records as fully compliant Goal Contracts or infer new acceptance from a merge. This concept alignment neither lands M003 nor validates LAB-M002's pending credentialed run.

Repository context remains directly discoverable through local documents and golden paths. Future skills/rules can adapt a coding harness to a Loop Contract, with the contract retaining authority. MCP/API access is useful for external context or actions when needed; it is not a prerequisite for reading local context. GitHub Actions can contribute facts/evidence without owning the completion decision. Codex, Cursor and Claude Code remain specialized execution environments; no Flight Deck dependency is introduced.

The site and Lab retain their adopted application boundaries and publication rules. This guide defines concepts, not new infrastructure, runtime behavior, public claims or demo scope. Root/app routing and stale inventory corrections belong to Step 2b; claim assessments belong to Step 2c under the [audit sequence](../reconciliation/mission-control-sync-audit.md#j-proposed-reconciliation-sequence).

Exact Flight Deck Runtime / Control Plane / Experience boundaries, a Mission Log contract and concrete deployment topology remain [open design questions](../reconciliation/canonical-reference-notes.md#definitions-and-decisions-still-open). They do not block applying the methodology with current tools.
