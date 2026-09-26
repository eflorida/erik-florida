# Agentic Loop Architecture

## Core concepts

Change Intent
- Why
- What
- How

Control hierarchy
- Mission: strategic intent and organizational outcome
- Goal Contract: bounded, verifiable desired state
- Loop: reusable execution and transfer contract
- Round: one bounded attempt to close one causal gap
- Landing: governed acceptance of completion

Triage outcomes:
- Return (needs information)
- Reject
- Route
- Investigate
- Escalate

Loop Contract
Input -> Work -> Evaluate -> Artifact + Evidence -> Transfer

Expanded semantics:

Goal + Context + Verified Baseline -> Work -> Evaluate Floor and Direction -> Artifact + Evidence -> Next Gap | Escalation | Candidate Landing

A Loop Contract defines:
- Accepted inputs and referenced Goal Contract
- Required context and preflight conditions
- Permitted operations and mutation boundaries
- Deterministic regression floor
- Directional evaluation signals
- Evidence and persistent-effect requirements
- Budget, stop, retry, and escalation rules
- Transfer and Landing policy

## Round lifecycle

1. Restore or establish a reproducible starting state.
2. Run preflight and classify the environment as valid or invalid.
3. Run the deterministic floor.
4. Drive one approved demand scenario through a fresh interaction.
5. Capture behavior, tool use, rejected actions, visible results, and persistent effects.
6. Classify the largest causal gap.
7. Close that gap through every required layer.
8. Add a deterministic check that preserves the newly earned behavior.
9. Repeat the scenario and record attributable evidence.
10. Transfer to the next gap, escalation, or candidate Landing according to policy.

A round may touch many components but should close one causal claim. Independent changes require separate rounds so their effects remain attributable.

## Evaluation model

The floor and direction are intentionally separate:

- The floor protects known behavior and starts green.
- Directional signals reveal missing capability through realistic use.
- A noisy or learned judge remains evidence until calibrated against repeated human judgment.
- No score is recorded when preflight shows that the environment or harness is unhealthy.
- A single successful stochastic run demonstrates possibility, not reliability.

Evaluation must verify persistent effects, not only generated text, tool return values, or rendered surfaces.

## Authority model

Every goal classifies relevant control surfaces:

- **Free:** implementation surfaces the loop may modify within scope.
- **Propose:** surfaces the loop may analyze and recommend changing, but cannot mutate without approval.
- **Frozen:** the goal, approved scenarios, fixtures, existing regression floor, scoring rules, and judgment rubrics that define the exam.

A loop may add a regression check for newly earned behavior. It may not weaken an existing check, lower a threshold, or change an implementation lever and the measure of that same lever within one round.

## Durable control state

The control plane must survive conversation loss and context compression. Durable state should include:

- Goal Contract
- retained facts and governing decisions
- current Goal State
- loop procedure and authority policy
- approved demand scenarios
- round inputs, outputs, scores, screenshots, effects, and decisions

Sessions are disposable. Control state and evidence are not.

Governor responsibilities:
- Policy
- Routing
- Evidence requirements
- Human approval policy
- Dynamic re-routing
- Goal revision and Landing authority
- Evaluator integrity and protected surfaces
- Budget, stop, and escalation enforcement
- Invalid-run classification

Key principles:
- No mandatory sequence is imposed across loops or mission types; an invoked loop may enforce its own internal protocol.
- No bypasses.
- Loops are invoked only when applicable.
- Artifacts are interfaces between loops.
- Agenticity is an execution characteristic, not a loop definition.
- Progressive autonomy is measured per loop.
- Goals define outcomes; plans and tasks remain revisable routes.
- Agents may establish candidate completion but cannot self-authorize Landing unless policy explicitly grants it.

## Readiness and progressive enhancement

The loop's logical contract is independent of its initial executor. A person or existing automation may satisfy the contract while data, tools, and evaluation improve. The round lifecycle above describes an execution protocol where its scenario-driven capability-development work applies; adopting Mission Control does not impose that product-development protocol on every operational loop. Each loop specifies the internal protocol needed to meet its contract.

At implementation time, record readiness for the loop's scope and proposed authority:

- Outcome, accepted input classes, required context, and missing-information paths.
- Data collection/existence, AI access/usability, and human visibility/use as separate assessments.
- Baseline validity, deterministic retained constraints, directional evaluation, and evidence requirements.
- Accountable owner, evaluator, recipient, operating capacity, permitted actions, and recovery.
- Authoritative state, maintenance responsibility, provenance, and the contract with existing processes.

Missing prerequisites may route work to Return, Investigate, or Escalate according to policy, or justify narrower accepted inputs. They must not be silently inferred away. A readiness assessment for one scope does not authorize a broader action.

For coexistence with existing work, specify entry conditions, artifact mapping, acceptance, ownership transfer, duplicate-action prevention, and continuation when the new arrangement is unavailable. A manual adapter may implement this boundary initially. Its operating cost is part of evaluation.

Track execution allocation and authority separately from loop capability. Changing the executor preserves the contract. Changes to scope, evidence requirements, evaluation surfaces, or transfer rules require a governed version change and confirmation that affected consumers remain compatible.

Human-facing views must make current state, source evidence, uncertainty, exceptions, and relevant decisions inspectable. An agent transcript alone does not satisfy durable evidence and operational visibility requirements.

See [Mission Control Implementation](07_Mission_Control_Implementation.md) for selection, worksheets, and evidence-based enhancement decisions.

## Industry validation

Jarred Kenny's 2026 article [Building Autonomous Goal Loops That Deliver](https://jx0.ca/building-autonomous-goal-loops-that-deliver/) provides an implementation-level example of persistent goals, protected evaluation, realistic demand, bounded rounds, and separate product, harness, and direction loops. Mission Control adopts these concepts as supporting validation, not as a dependency on the article's specific repository layout.
