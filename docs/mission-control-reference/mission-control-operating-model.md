# Mission Control Operating Model

Mission Control is the organizational operating system for engineering.

Core concepts:
- Change is represented as durable artifacts.
- Work progresses through bounded loops rather than fixed stages.
- Leadership governs missions, goals, priorities, authority, and policy.
- Execution occurs through feedback loops connected by evidence-backed transfers.
- Human and autonomous execution are interchangeable behind stable loop contracts.
- Agents may establish candidate completion; Landing authority determines whether evidence is sufficient to close a goal.

## Control hierarchy

Mission Control distinguishes strategic intent from executable outcomes:

`Mission -> Goal Contract -> Loop Invocations -> Rounds -> Evidence -> Landing`

- A **Mission** defines the organizational change being pursued and why it matters.
- A **Goal Contract** defines an observable outcome, its boundaries, and the evidence required to consider it complete.
- A **Loop** defines how a class of work executes, evaluates, and transfers.
- A **Round** is a bounded attempt to close one attributable causal gap within a goal.
- **Evidence** demonstrates behavior, persistent effects, reliability, and retained constraints.
- **Landing** is the governed decision that the goal has been satisfied and may close or transfer.

A mission may contain multiple goals. A goal may invoke several loops, and a loop may be reused by many goals. Tasks and plans are candidate routes through the work; neither defines the outcome.

## Goal Contract

A Goal Contract is a durable, versioned control artifact. It should contain:

- objective and desired state;
- relationship to the parent mission;
- scope and explicit exclusions;
- completion conditions and observable persistent effects;
- deterministic regression floor;
- approved scenarios or demand examples;
- required evidence and reliability thresholds;
- authority boundaries and protected evaluation surfaces;
- budget, stop, and escalation rules;
- Landing authority;
- provenance and version history.

The Goal Contract remains stable during autonomous execution unless its governing authority approves a versioned change. The implementation may change; the loop may not silently rewrite the outcome or the standard that judges it.

## Goal State

Goal State is the mutable operational companion to the Goal Contract. It records the active round, current gap, known failures, accumulated evidence, next action, blockers, and status.

Recommended statuses are: `proposed`, `active`, `blocked`, `candidate-complete`, `landed`, and `abandoned`.

Goal State enables disposable agent sessions without disposable organizational memory. Every material state claim should retain provenance to the evidence that supports it.

Major concepts:
- Command Deck
- Mission Profile
- Goal Contract
- Goal State
- Flight Deck
- Telemetry
- Mission Log
- Landing

## Implementation through progressive enhancement

Mission Control is adopted through progressive enhancement of the organization that exists today. A team can adapt a bounded area of work around goals, loop contracts, durable artifacts, evidence, and governed transfers while people continue performing the execution. Working loops create knowledge and evidence that guide further improvements and the addition of other loops.

Progressive enhancement includes process, data, evaluation, human visibility, tooling, and execution. Progressive autonomy is one possible improvement within it. Loop capability and machine authority are assessed separately; authority changes only when the proposed scope is supported by evidence and policy. Different loops may use different combinations of human, deterministic, and AI execution indefinitely.

Readiness is specific to a loop, its accepted case types, and its proposed authority. For required data, assess three dimensions independently:

1. **Collection and existence:** do we collect or have it?
2. **AI access and usability:** can we easily and appropriately share it with AI?
3. **Human visibility and use:** can people inspect and act on the relevant state, evidence, and outcomes?

Accuracy, freshness, provenance, ownership, and permissions apply across all three. Access alone does not establish truth, and agent context cannot substitute for durable organizational state.

Leadership selects adoption goals, allocates operating capacity, resolves decision rights, and funds prerequisites in relation to observable outcomes. Existing systems and useful practices can remain in place while contracts define how new loops connect to them. Expensive migrations and shared foundations require a demonstrated dependency or credible reuse case.

The adoption effort itself operates through goals, bounded improvements, evidence reviews, and governed decisions to continue, enhance, expand, redirect, stop, or land. Its success is sustained organizational value, including downstream quality and total operating effort.

The [Mission Control Implementation method](07_Mission_Control_Implementation.md) provides current-state assessment, loop selection, readiness analysis, operating arrangements, reusable worksheets, and expansion decisions.
