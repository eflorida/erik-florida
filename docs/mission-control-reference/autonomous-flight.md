# Autonomous Flight

Autonomous Flight defines how work executes.

Principles:
- Autonomous work pursues an explicit Goal Contract rather than an activity list.
- Autonomy belongs to the system, not an individual agent.
- Loops produce artifacts and evidence.
- Transfers occur only when policy permits.
- Re-entry is expected when new evidence changes understanding.
- Humans participate by policy, not by default.
- The implementation may change the product, but it may not silently change the goal or protected measures that judge the product.

## Goal-directed flight

A Goal Contract provides the stable outcome boundary for autonomous execution. It defines the desired state, exclusions, completion conditions, evidence requirements, authority, budget, and stop rules. Goal State records the mutable queue, failures, next action, and accumulated evidence.

A goal is not an exhaustive plan. When a capability is not fully understood in advance, realistic use reveals the next gap while the Goal Contract preserves direction.

## Floor, direction, and sufficiency

Autonomous Flight uses three distinct measures:

- The **floor** is deterministic. Tests, schemas, validators, contracts, and effect checks protect capabilities already earned.
- The **direction** is evidentiary. Approved realistic scenarios expose the most important remaining shortfall.
- **Sufficiency** is governed. Policy or a human Landing authority decides whether the accumulated evidence satisfies the goal.

A green floor proves that known behavior has not regressed. It does not, by itself, decide what should be built next or whether a product outcome is sufficient.

## Valid runs

A round begins from a reproducible and verified world. Data, services, models, configuration, fixtures, and served code must be healthy enough to make evaluation meaningful.

- An **invalid run** cannot support a product judgment because the world or harness was unhealthy.
- A **valid failure** is reproducible evidence of a goal shortfall under a verified environment.

Invalid runs route to environment or harness recovery, not indiscriminate product repair.

## One round, one causal gap

A round closes one attributable causal gap. That gap may cross the data model, operation contract, runtime, agent instruction, interface, and effect verification. The constraint is causal coherence, not a one-file or one-layer change.

The preferred proof path is:

`real demand -> representation -> operation -> persistent effect -> visible proof`

## Loops at different speeds

Autonomous Flight separates three kinds of feedback loop:

1. The **product loop** closes capability gaps within the current goal.
2. The **harness loop** improves fixtures, drivers, evaluators, and standing procedure when repeated evidence shows a development-system failure.
3. The **direction loop** decides whether to continue, redirect, revise, stop, or land the goal.

The product loop may propose changes to the other two. It does not own their authority.

## Candidate completion

An autonomous system may mark a goal `candidate-complete` when the required evidence has been assembled and the floor remains green. Only the authority named in the Goal Contract may mark it `landed`.

## Progressive enhancement and execution choices

An organization can establish a Mission Control loop before it delegates execution to AI. Humans, deterministic automation, and agents can operate behind a stable Loop Contract when they satisfy its inputs, boundaries, evaluation, and transfer policy. Human participation is an explicit operating-policy choice, including during initial adoption.

Improving the loop's process, data, evidence, or human visibility does not automatically grant greater autonomous authority. Evaluate the readiness of each proposed action separately. A human-operated loop may be ready to provide value while AI access is still being established; an AI-assisted loop may be useful before its outputs can transfer without review.

Changes in authority require evidence appropriate to the case mix and consequences, an effective evaluation and recovery path, and approval from the governing authority. Authority can remain unchanged or be reduced when observed performance or conditions warrant it. The organization has no mandatory autonomy destination.

During coexistence with existing processes, retain one authoritative location for each state claim, explicit ownership at transfers, and protection against duplicate actions. Contract changes remain versioned and governed.

See [Mission Control Implementation](07_Mission_Control_Implementation.md) for the adoption method and its three-part assessment of data collection, AI usability, and human visibility.
