# Step 6 — Normalized event contract proposal

- **Status:** Proposed logical contract, 2026-10-02; no emitter, event store, Mission Log projection, or analytics runtime is adopted
- **Observed case:** [G004-001 Goal State](../../.mission-control/goals/G004-001/state.md) and its [editorial Loop Contract](../../.mission-control/loops/editorial-readiness.md)
- **Authority:** [Reconciliation plan Step 6](../RECONCILIATION_PLAN.md#step-6--structured-telemetry-and-automation), current [Mission Control concepts](../guides/mission-control-concepts.md), and [implementation options](../architecture/mission-control-implementation-options.md#event-history-and-telemetry)

## Purpose and boundary

Step 6 asks how attributable observations from a governed goal could become comparable event history. The [operating model](../mission-control-reference/mission-control-operating-model.md) names a Mission Log but does not supply a schema, store, or projection contract. This proposal defines a minimum logical envelope, event families, authority rules, correction behavior, and metric inputs against one real case. It does not turn Git commits, CI checks, agent transcripts, or this document into emitted Mission Control events.

Durable source artifacts remain the authority for intent and decisions; [Goal State](../../.mission-control/goals/G004-001/state.md) remains the current operational record for the pilot. An event would describe an attributable fact from one of those sources. Normalization may make history queryable, but it cannot grant the producer authority that the source did not have. Mission Control remains tool- and team-agnostic; Flight Deck is an optional later consumer or producer, not the event system's required owner.

## Proposed envelope, version `0.1`

Every accepted event would carry these logical fields. This is a design contract, not a JSON schema or storage migration.

| Field                          | Meaning and constraint                                                                                                                                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schemaVersion`, `type`        | Versioned interpretation and a registered event type. A producer cannot silently change the meaning of an existing type.                                                                                                              |
| `producer`                     | Source system and stable source-event ID; retries reuse that identity. Identify the system that observed or reported the fact, separately from the actor who made a decision.                                                         |
| `actor`                        | Human, coding harness, evaluator, CI job, or deployment verifier responsible for the underlying action, when known. An agent transcribing a human decision remains the producer, not the human decision authority.                    |
| `subject`                      | The source-identified goal, mission, contract, loop, round, and/or repository revision. A CI run may know only a revision; goal correlation requires separate evidence. Unknown relationships stay unknown rather than being guessed. |
| `occurredAt`                   | Source-reported time plus precision (`instant`, `date`, or `unknown`) and timezone when supplied. Date-only evidence cannot support elapsed-time metrics.                                                                             |
| `recordedAt`                   | Time the normalized event is accepted by a future store. It is not a substitute for `occurredAt`.                                                                                                                                     |
| `sourceRef`, `evidenceRefs`    | Stable references to the authoritative record and supporting observations, including its version or commit where possible. Store pointers and permitted summaries, not private source text.                                           |
| `correlationId`, `causationId` | Optional identifiers tying related attempts and direct cause together. They do not imply a universal cross-system trace.                                                                                                              |
| `payload`                      | Type-specific, bounded fields needed to interpret the observation. The event family below sets the required meaning.                                                                                                                  |
| `supersedesEventId`            | Present only on an explicit correction. A correction preserves the earlier record and explains what was wrong; it does not silently rewrite history.                                                                                  |

The deduplication key is the producer system plus its stable source-event ID and event type. A future store must reject a retry with the same key but different content for review, not treat it as a second fact. Source time alone does not establish global order; state transitions must be checked against the authoritative source and its version. When a source lacks a precise time, record `date` or `unknown` rather than replacing it with a Git commit or ingestion timestamp.

The proposed validation rules are:

1. Require `schemaVersion`, `type`, a producer system and stable source-event ID, at least one source-identified subject key, `occurredAt` with explicit precision, `recordedAt`, `sourceRef`, and the type-specific `payload`. `actor`, correlation/causation IDs, and additional evidence references may be absent only when the source does not provide them.
2. Use an offset-bearing ISO instant for `occurredAt` only when the source reports an instant; use `YYYY-MM-DD` for date precision and `null` for unknown. `recordedAt` is an offset-bearing UTC instant assigned by the accepting store. These times serve different questions and must not be substituted for each other.
3. Require an authority and decision-source reference for `goal.contract.approved`, `goal.state.transitioned` to `landed`, `transfer.decided`, and `decision.recorded`. A CI actor cannot satisfy a human Landing authority merely by citing a green check.
4. Require an evaluated repository revision and run/check reference for `check.completed`; do not assign a goal ID from branch name, merge, or file path alone. Require `validity` and `outcome` on `loop.round.completed`; invalid runs remain visible but cannot count as valid product rounds.
5. Keep accepted events immutable. `record.corrected` must identify the original event and authoritative correction source; a conflicting duplicate or missing authority is quarantined rather than projected into Goal State or metrics.

## Event families and authority

| Event family                                  | Minimum type-specific fact                                                                           | Permitted authority                                                                                                                               |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `goal.contract.approved`                      | Goal ID, approved version, decision reference, approver                                              | Named contract authority. A harness may report the decision only with the retained human source.                                                  |
| `goal.state.transitioned`                     | Previous and new status, source-state version, reason/evidence                                       | The Goal Contract's policy. Candidate completion may be executor-reported when conditions hold; `landed` requires the named Landing authority.    |
| `loop.round.started` / `loop.round.completed` | Goal/loop/round IDs; inputs; validity and outcome on completion                                      | The operator or evaluator within the Loop Contract. An invalid run is recorded with its reason and is excluded from product-round success counts. |
| `evaluation.completed`                        | Evaluation kind (`floor`, `direction`, or `sufficiency-input`), result, evaluated revision, evidence | The identified evaluator. A passing floor or recommendation is not Landing.                                                                       |
| `check.completed`                             | Command/check identity, result, repository revision, run reference                                   | CI or a local check runner may report only the check it ran. It cannot emit editorial acceptance or goal Landing.                                 |
| `transfer.requested` / `transfer.decided`     | Sender, recipient, evidence bundle, acceptance/rejection and reason                                  | The sender may request; the named recipient or policy authority decides. Candidate transfer is not accepted transfer.                             |
| `decision.recorded`                           | Decision kind, authority, decision source, affected goal/contract                                    | The named human or delegated policy authority. Includes adoption, pause, abandonment, or approved contract revision.                              |
| `deployment.verified`                         | Environment, deployed revision, observed effect, verifier and evidence                               | A deployment/production verifier. A deploy event alone does not prove production effect or goal sufficiency.                                      |
| `record.corrected`                            | Original event ID, correction reason, replacement source reference                                   | A governed correction path with permission to amend the event record's interpretation; it cannot alter the underlying Goal Contract by itself.    |

These families are the smallest vocabulary needed to discuss the plan's proposed producers and measurements. They are not proof that every family needs an emitter now. A future implementation must define type-specific payload schemas, producer permissions, accepted source references, and transition validation before events are ingested.

## Dry run against G004-001

The table maps real retained evidence to candidate event families. It does not backfill events or claim timestamps absent from the source.

| Source fact                                                                                                                                              | Potential event                                                                        | What is actually known                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erik approved the initial Goal Contract and later version `0.2`; version `0.1` is retained at `b83e0c6`                                                  | `goal.contract.approved`, `decision.recorded`                                          | Authority and calendar date are recorded in [State](../../.mission-control/goals/G004-001/state.md); exact decision instants are not.                 |
| Editorial round `G004-001/R1` produced a source-backed no-change finding                                                                                 | `loop.round.completed`, `evaluation.completed`                                         | One valid round and its input revision `8377395` are recorded; no precise round-start/end timestamps are retained.                                    |
| Checks passed, candidate completion was committed at `00ee815`, and Erik later accepted M003 and landed G004-001 at `845b650`                            | `check.completed`, `goal.state.transitioned`, `transfer.requested`, `transfer.decided` | Commit and CI times are observable, but they are not the time of Erik's decision. The State records the human decision on 2026-10-02.                 |
| The latest [GitHub Actions CI run](https://github.com/eflorida/erik-florida/actions/runs/37059964216) passed verification and browser jobs for `35d2214` | `check.completed`                                                                      | The run establishes check results for that revision. It does not itself name G004-001, retroactively land the goal, or establish a hosted deployment. |
| No production promotion or verification was recorded                                                                                                     | none                                                                                   | Intake-to-production and Landing-to-production measures are unavailable, not zero.                                                                    |

The pilot supports a rounds-per-goal observation of one from Goal State. It does not supply trustworthy elapsed loop time, blocked duration, or production lead time. The contract-revision defect and independent evaluator's two provenance findings are retained narrative evidence; they should not be converted into invented failure counts without an approved classification rule.

## Metrics as projections, not event claims

| Planned measure                                             | Minimum trustworthy inputs                                                            | G004-001 result                                                             |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Rounds per goal and re-entry                                | Distinct valid round IDs; causal link from a rejection or new gap to the next round   | One valid round; no re-entry.                                               |
| Loop duration and blocked time                              | Precise start/end or status-transition instants with matching goal/loop identity      | Not measurable from date-only decisions and missing start/end observations. |
| Evaluation failures and invalid runs                        | Evaluator result with validity classification and stable scenario/revision            | No normalized classification was emitted; do not infer a rate from prose.   |
| Transfer rejection and human intervention                   | Request/decision pairs with recipient and decision source                             | One human Landing decision is known; a rejection rate is not established.   |
| Intake-to-production and Landing-to-production verification | Goal intake/Landing source times, deployment revision, and observed production effect | Not measurable; no current production verification for this goal.           |

Aggregation must distinguish missing, invalid, and zero. Metrics should retain their denominator, time precision, source coverage, and correction history. A dashboard must not turn an unknown interval into a measured zero or treat one successful case as a reliability rate.

## Storage, access, automation, and adoption boundary

No authoritative event store, Mission Log projection, retention period, redaction policy, or producer credential is selected here. Before implementing an emitter or analytics job, choose the source of authority for each event family; a physical store and replay/correction policy; permissions for human, harness, CI, deployment, and external producers; reference retention and private-data handling; and failure behavior when source systems are unavailable. A manual observation remains valid while its provenance and maintenance cost are visible.

GitHub Actions is a plausible first producer for `check.completed` because [CI](../../.github/workflows/ci.yml) already knows the command, result, revision, and run URL. It must not emit `goal.landed` from a green build or merge. No workflow change is made now: one case does not justify storage, credentials, deduplication, or replay infrastructure. A second real goal with a demonstrated cross-goal history or analytics question would test whether an emitter is worth its operating cost.

**Step 6 result:** a concrete, source-tested logical event contract proposal and an explicit implementation gate. No normalized event records, automated event producer, analytics, Mission Log service, or Flight Deck capability are claimed. Step 7 topology work can use this proposal as input, but it must not treat the proposed store, adapter, or permissions as selected.
