# Alignment

Mission Control = organizational operating model.

Autonomous Flight = execution/control model.

Agentic Architecture Reference = application architecture optimized for this execution model.

To the Moon = communication/book layer.

## Shared goal model

All layers use the same definition of a goal: a durable, versioned contract for a bounded, observable outcome.

| Layer | Responsibility for goals |
| --- | --- |
| Mission Control | Defines the relationship among missions, Goal Contracts, authority, evidence, and Landing. |
| Autonomous Flight | Defines how rounds pursue goals, preserve the floor, discover direction, and reach candidate completion. |
| Agentic Loop Architecture | Defines loop contracts, state, evaluator separation, protected surfaces, and executable control flow. |
| Agentic Architecture Reference | Defines the technical seams that make demand, behavior, effects, and proof observable and reproducible. |
| Flight Deck | Exposes Goal Contracts, Goal State, evidence, provenance, exceptions, and decisions to humans and external agents. |
| To the Moon | Explains goal-directed autonomous delivery as a leadership and organizational model. |

A Mission may contain multiple goals. A goal may invoke multiple loops. A round closes one causal gap. Landing is the governed acceptance event.

## Shared implementation model

**Progressive enhancement** is the adoption principle: establish useful bounded loops with current capabilities, improve them through evidence, and use the resulting knowledge and foundations to enable further improvements and loops.

**Progressive autonomy** concerns the allocation of execution and authority within that approach. It is assessed per loop and proposed action. It is not a prerequisite for adoption or a mandatory destination.

All layers distinguish data collection/existence, AI access/usability, and human visibility/use. Reliability, provenance, freshness, ownership, and permissions apply across these dimensions.

| Layer | Responsibility for implementation |
| --- | --- |
| Mission Control | Establishes progressive enhancement, adoption goals, leadership ownership, and investment decisions. |
| Autonomous Flight | Defines how execution and authority change while contracts and governing policy remain effective. |
| Agentic Loop Architecture | Defines readiness, valid inputs, evaluation, coexistence boundaries, evidence, and governed contract changes. |
| Mission Control Implementation | Maps organizational starting conditions to loop selection, prerequisites, operating arrangements, measurement, and expansion using reusable worksheets. |
| Agentic Architecture Reference | Supports the technical boundaries, observable effects, and checks required by a selected implementation. |
| Flight Deck | Makes goals, state, data, evidence, uncertainty, and decisions accessible to the appropriate humans and agents. Existing tools can supply initial views. |
| To the Moon | Leads readers through the initial sell, explanation, final commitment, and practical implementation using the shared method. |

The [implementation document](07_Mission_Control_Implementation.md) owns the reusable adoption method. The book teaches that method; it does not create a separate maturity ladder, mandatory loop sequence, or tool dependency.
