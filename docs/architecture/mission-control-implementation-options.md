# Mission Control implementation options

**Status:** Step 2c option analysis; a bounded repository-native pilot later landed, while generalized runtime/topology remains deferred
**Established:** 2026-09-25, reconciliation Step 2c

## Purpose

This document records implementation responsibilities and viable options without turning Mission Control into a tool prescription. It was written before the bounded [G004-001 repository-native pilot](../../.mission-control/goals/G004-001/state.md), which later landed. This option analysis itself does not authorize a database, Flight Deck, MCP, Mastra, workflow orchestration, application changes, or a portfolio demo.

Mission Control is generally tool- and team-agnostic. The methodology requires clear intent, bounded outcomes, durable contracts/state, evidence, governed transfers, authority, and inspectable history. A repository, existing work systems, automation, and human operating practices can satisfy those responsibilities. Flight Deck is an optional, opinionated product implementation and must be designed against the current methodology rather than treated as its prerequisite.

## Step 2c footing and later pilot

At the Step 2c baseline, this repository used Markdown missions/plans/current state, Git provenance, application schemas, deterministic checks, GitHub Actions, browser tests, and human review, without explicit Goal Contracts, Goal State, Loop Contracts, a Mission Log, normalized Mission Control events, or a deployed control plane. Step 4 later added and landed one explicit [Goal Contract, State, and Loop Contract](../../.mission-control/README.md). It did not add a Mission Log, normalized events, or a deployed control plane. Use [current state](../product/current-state.md) for live status.

The site and Lab remain independently deployable. The Lab's recorded fixture and bounded live-review request are application-specific contracts; neither is a general Mission Control runtime. The [evidence assessment](../reference/lab-evidence-assessment.md) records their current proof limits.

## Logical responsibilities

| Responsibility              | Required property                                                                                                            | Current footing                                                        | Design still needed                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Intent and Goal Contract    | Durable, versioned outcome, exclusions, completion/effect evidence, authority, budget/stop/escalation and Landing authority. | Historical missions preserve portions of this information.             | Future goal format, version/approval mechanism, protected surfaces and migration policy.         |
| Goal State                  | Current gap/round, failures, evidence, next action, blockers and status with provenance.                                     | Current-state/plans provide project summaries; UI state is disposable. | Per-goal authority, update mechanism, conflict handling and recovery.                            |
| Loop Contract               | Reusable input, context/preflight, work, evaluation, artifact/evidence, budget and transfer rules.                           | Golden paths and checks encode parts of procedures.                    | Contract identity/version, accepted cases, authority, executor adapters and transfer acceptance. |
| Durable artifacts/evidence  | Inspectable results tied to claims and effects.                                                                              | Code, docs, tests, mission evidence and source assessments.            | Evidence identity, retention, hashes/links, evaluator attribution and effect proof.              |
| Event history / Mission Log | Attributable state changes and operational observations that support reconstruction and aggregate analysis.                  | Git/CI logs and narrative records exist in separate forms.             | Event contract, ordering/deduplication, retention, access, projections and corrections.          |
| Human/agent visibility      | Relevant state, evidence, uncertainty, decisions and permitted actions are discoverable.                                     | Repository documents and application UIs provide partial views.        | Audience-specific projections, freshness, permission and exception handling.                     |

These are logical responsibilities, not required services. A small implementation can combine several in one reviewed document; a larger implementation can distribute them across specialist systems while retaining explicit authority and provenance.

## Deployment patterns to evaluate

The patterns can coexist and evolve. None is selected here.

| Pattern                         | Strength                                                                                              | Limitation / decision pressure                                                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Repository-native**           | Versioned intent/contracts near code; direct coding-harness access; familiar review and provenance.   | Operational updates, permissions, cross-repository work, event ingestion and real-time views may become awkward. Repository-native intent is an option, not a methodology rule.  |
| **Existing specialist systems** | Preserves adopted issue, document, CI, observability and communication workflows; low migration cost. | Authority and relationships can fragment; adapters or disciplined manual promotion may be needed. A combination of these systems can fulfill all Flight Deck responsibilities.   |
| **Dedicated control plane**     | Can normalize state, policy, evidence, events, permissions and projections across tools.              | Adds a new system of record, integration/operations burden and migration risk. Flight Deck would be one opinionated product in this category, not the only valid implementation. |
| **Hybrid/federated**            | Keeps artifacts in appropriate origins while one governed representation connects them.               | Requires explicit source authority, synchronization, conflict resolution, snapshots and duplicate-action prevention.                                                             |

Step 4 of the reconciliation plan treated `.mission-control/{config,missions,goals,loops,policies,schemas,context}` as a hypothesis for a small repository-native runtime. G004-001 evaluated it against M003 editorial readiness and adopted only the four artifacts needed for that case. This document does not make that directory a methodology requirement or assume it remains authoritative if another topology proves better.

## Authority and topology record

Before implementing a primitive, record:

- its governing authority and system of record;
- physical storage and retention;
- who or what may change it, under which identity and approval policy;
- how humans and agents observe it, including freshness and uncertainty;
- relationships to source artifacts and evidence;
- conflict, correction, re-entry, duplicate-action and unavailable-system behavior;
- permission boundaries and audit requirements;
- events/telemetry that establish state changes and operational facts.

Flight Deck-specific adapters and storage belong only to the future product's topology. A different Mission Control implementation may use Git, an issue tracker, CI and documents directly. “Logically authoritative” does not necessarily mean “physically stored in Flight Deck.”

## Event history and telemetry

Git is valuable provenance for versioned repository changes. It does not by itself describe blocked time, invalid runs, transfer rejection, human intervention, state derived from external systems, or post-Landing production verification. Provider latency/tokens/cost are useful request measurements but do not constitute the complete Mission Log or outcome evidence.

A later normalized event contract should be derived from a real governed loop. Candidate producers include:

- repository and code-host events such as reviewed commits, pull requests and merges;
- GitHub Actions/CI checks and build facts;
- coding harnesses and other agent executors;
- independent evaluators and human decisions;
- deployment and production verification systems;
- issue/document/communication systems when their facts affect governed state;
- Flight Deck, if built, as a consumer/producer within its approved authority.

CI can report that a check passed against a revision. It cannot silently decide that evidence is sufficient to land a goal. A merge event is not automatically Landing; a deployment event is not automatically verified production effect.

Before adopting a schema, decide event identity/correlation, producer identity, source time versus receipt time, goal/loop/round/contract versions, evidence references, state-transition semantics, invalid/corrected events, deduplication, retention, access and redaction. Analytics such as loop duration or rounds per goal are projections over trustworthy events, not reasons to invent events the system did not observe.

## Adapter boundaries

| Adapter class              | Responsibility                                                                                                                   | Boundary to preserve                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Repository**             | Read/write versioned intent, code, contracts and evidence where authorized.                                                      | Repository context remains directly available; do not require MCP or Flight Deck to read local files.                                         |
| **Automation**             | Convert CI, deployment and deterministic-check facts into attributable evidence/events.                                          | Automation reports facts within its scope; policy/Landing remains with the named authority.                                                   |
| **External system**        | Retrieve or act on issues, documents, communication, observability and production systems.                                       | Preserve source identity, permissions, freshness and conflict handling. MCP/API is an interface choice, not the authority itself.             |
| **Coding harness / agent** | Localize goal/context into executable work and return artifacts/evidence. Skills/rules may adapt the harness to a Loop Contract. | Preserve Codex, Cursor, Claude Code and other specialized executors. Harness-specific instructions cannot override the Goal or Loop Contract. |
| **Evaluator**              | Assess floor, direction, effects and sufficiency inputs.                                                                         | Keep protected evaluation independent where practical; record invalid runs and evaluator provenance.                                          |

Manual adapters are valid initial implementations when their cost and ownership are visible. Build integrations only when access cost, freshness, reliability, action volume or demonstrated reuse justifies them.

## Flight Deck terms left open

The supplied sources do not define an exact Flight Deck Runtime / Control Plane / Experience decomposition. A later Flight Deck product design may use those labels to separate execution/integration capabilities, governed state/policy, and human interaction, but this repository must not infer services or package boundaries from the names alone.

Existing Flight Deck plans are historical product inputs. Reassess their web-app, ownership, MCP, artifact, workflow and deployment assumptions against current methodology before implementation. The current portfolio demo has not been selected; Mastra agents/workflows/evals/observability are a stated evaluation objective in the reconciliation plan, not an adopted dependency or architecture.

## Decisions deferred to later steps

- expansion beyond the one landed career-platform Goal Contract and its named Landing authority;
- whether repository-native, existing-system, dedicated, or hybrid state is authoritative for each primitive;
- the Mission Log/event contract, storage, retention, permissions and analytics;
- coding-harness and external-system adapters;
- Flight Deck product scope, Runtime/Control Plane/Experience definitions and deployment topology;
- any Mastra adoption and the final portfolio-demo option;
- application integration, persistence, workers, public runtime enablement and hosted deployment.

These decisions require observed needs and explicit authority. Documentation reconciliation supplies shared language; it does not pre-approve their implementation.
