# Repository-native Mission Control pilot

This directory is this repository's small Step 4 implementation of [Mission Control](../docs/guides/mission-control-concepts.md). The methodology is tool- and team-agnostic; Markdown and Git are this pilot's chosen storage. This is neither Flight Deck nor an application runtime.

## Active route

1. Read root [agent routing](../AGENTS.md) and [current project state](../docs/product/current-state.md).
2. Read the active [G004-001 Goal Contract](goals/G004-001/contract.md) and its [Goal State](goals/G004-001/state.md). State identifies the current gap, latest evidence, blocker, owner, and next action.
3. For an M003 editorial round, use the [editorial-readiness Loop Contract](loops/editorial-readiness.md), [M003 mission](../docs/missions/M003/mission.md), [source assessment](../docs/reference/agentic-source-assessment.md), and [overview editing guide](../docs/guides/editing-agentic-overview.md). Follow links from those documents for source and route details.
4. Read the contract's authority, mutation, evaluation, budget, stop, and Landing rules before editing. The current state records the approved version `0.2` correction, fresh-context evaluation, and candidate transfer; do not infer editorial acceptance or Landing from those milestones.

No other goal or loop is active here. Historical missions remain historical. No normalized event store, adapter, service, or Flight Deck capability is implied by these documents. [The reconciliation plan](../docs/RECONCILIATION_PLAN.md) governs later steps.
