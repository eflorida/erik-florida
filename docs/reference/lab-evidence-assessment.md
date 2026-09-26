# Agentic Systems Lab evidence assessment

**Established:** 2026-09-25, Mission Control reconciliation Step 2c
**Status:** Repository evidence assessment; original-reference-scenario treatment approved

## Purpose and boundary

This assessment separates what the repository directly verifies from claims authored inside the Lab's reference fixture and from behavior that still needs external validation. On 2026-09-25, Erik identified the fixture as the original reference scenario used while the Lab and Mission Control model were being designed together and approved an explicit execution-provenance disclosure. That decision does not certify the scenario's embedded history or replace LAB-M001/LAB-M002 acceptance.

The assessment covers the repository at `7f4657e6170536fec6f3016bca18e5bfd892d6fe` plus the documentation-only reconciliation changes. No provider request, external fixture repository, CI artifact store, or separate Flight Deck checkout was inspected.

## Evidence classes

| Class                            | Meaning here                                                                                                                                               |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Retained repository evidence** | Source, tests, mission records, or Git provenance available in this checkout and attributable to a specific claim.                                         |
| **Reference-scenario assertion** | A statement stored in the original reference scenario and validated as data. Schema validity proves its shape and relationships, not historical execution. |
| **Mocked-path verification**     | A test proves the application handles a controlled response correctly; it does not establish provider behavior or model quality.                           |
| **Pending external validation**  | The relevant check is explicitly incomplete or its supporting artifact is absent from the inspected repository.                                            |

## Reference replay

The original reference scenario is loaded from [`redirect-safety.json`](../../apps/agentic-systems-lab/content/runs/redirect-safety.json), validated by [`run.ts`](../../apps/agentic-systems-lab/src/contracts/run.ts), and rendered by [`run-explorer.tsx`](../../apps/agentic-systems-lab/src/components/run-explorer.tsx). Git records that the fixture entered the repository in commit `440ab71` with the Lab implementation. The original commit contains no link to an external source repository, source revision, raw command output, evaluator identity, or capture procedure. Schema version 2 now records `mode: "reference-scenario"`, an authored date, an `original-reference-scenario` classification, and `executionEvidence: "not-retained"`.

| Visitor-facing or fixture claim                                                        | Retained support                                                                                            | What remains unestablished                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The item is the “Original reference scenario” with “No live model call.”               | Erik supplied that classification; the schema and component expose it, and component/E2E tests assert it.   | An attributable source execution record for the behavior described inside the scenario.                                                                                                                    |
| `authoredAt` and `mode: "reference-scenario"` identify the design artifact.            | The schema requires those fields and ISO timestamp shape.                                                   | An original executor, source revision, capture mechanism, and immutable execution record.                                                                                                                  |
| A call-site inspection found one redirect boundary and no shared validator.            | The fixture contains that narrative.                                                                        | The inspected repository/ref, files examined, inspection output, and evaluator attribution.                                                                                                                |
| The displayed patch was implemented.                                                   | The fixture retains a short TypeScript code string and label.                                               | A source commit/diff, surrounding implementation, tests, and persistent effect in the claimed source system.                                                                                               |
| Six focused tests passed.                                                              | The fixture labels `6 passed · 0 failed` as a scenario assertion; UI tests verify the disclosure and label. | Test source, raw output, environment, source revision, execution time, and a reproducible command target. The command string in the fixture is descriptive, not an executable artifact in this repository. |
| Strict TypeScript and lint passed with zero errors.                                    | The fixture labels those results as scenario assertions.                                                    | Raw output, exact configuration/source revision, and execution provenance for the described change.                                                                                                        |
| Four of four acceptance criteria were satisfied.                                       | The fixture contains the criteria and labels the evaluation summary as a scenario assertion.                | Evaluator identity, rubric application, effect verification, transfer acceptance, and supporting source evidence.                                                                                          |
| The scenario is `scenario-ready-for-human-review` and recommends accepting the change. | The fixture and schema preserve this scenario state/recommendation; the UI exposes human authority.         | An actual recipient's acceptance/rejection and a governed Landing decision.                                                                                                                                |

The run-contract tests prove that the fixture parses, IDs resolve, step sequencing is contiguous, and the provenance classification is present. Component and browser tests prove that visitors can see the disclosure, distinguish scenario claims from retained verification, inspect the embedded patch/evidence text, reach the human-transfer presentation, and use the surface on mobile. Those are meaningful product/interface checks. They do not independently validate the redirect behavior or establish execution history.

## Bounded live review

The live route has stronger retained evidence for its boundary behavior than for provider-backed result quality:

- [`route.test.ts`](../../apps/agentic-systems-lab/src/app/api/reviews/route.test.ts) directly verifies invalid input, oversized requests, and the missing-credential setup response without contacting a provider.
- The request and response schemas, error mapping, token-cost calculation, component rendering, and human-authority copy have unit/component coverage recorded in LAB-M002.
- The production browser journey intercepts `/api/reviews` and returns a controlled success payload. It proves the UI can submit and render a valid response, measured fields, and the authority boundary. It is mocked-path verification, not a live provider result.
- LAB-M002 explicitly leaves “A credentialed live Responses API smoke test passes locally” unchecked. No credentialed response artifact was found in the inspected repository.
- No retained evaluation compares model findings with an independent expert judgment across representative cases. Structured output and a successful request would demonstrate contract conformance and possibility, not review reliability.

The Lab accurately limits the live workflow to one submitted diff, no tools, no repository access, no code execution, no application persistence, and human merge/deployment authority. Provider response metadata supports inspection of a request; it is not a Goal State, Mission Log, normalized loop event history, or proof that the review is correct.

## Approved public-claim boundary

Repository and application content describe the fixture as the **original schema-validated reference scenario whose source execution artifacts are not retained in this checkout**. It may support claims about the Lab's contract, information hierarchy, navigation, accessibility, and evidence presentation. It is not independent proof that the displayed source inspection, patch, commands, or acceptance evaluation actually occurred.

The live review may be described as an implemented, bounded local workflow with tested safety/configuration paths and mocked success rendering. It should not be described as credentialed-provider validated, reliable across a case mix, an autonomous engineering loop, a Mastra workflow, or a durable Mission Control runtime.

This boundary is deliberately conservative. “Reference scenario” does not mean that earlier thinking was a failure or that the scenario is disposable. It records the original design artifact while allowing the methodology and implementation to change as use produces new understanding. If attributable source evidence exists elsewhere, a later reviewed change can extend the assessment; its absence from this checkout is not proof that no execution occurred.

## Decision and ongoing boundary — 2026-09-25

Erik selected the reference-scenario treatment and authorized the application disclosure. The app now:

- identifies the fixture as the original reference scenario;
- calls embedded results scenario claims rather than verified evidence;
- discloses that source execution artifacts are not retained here;
- keeps human review and the no-live-model boundary visible.

Future provenance, a replacement governed run, mission acceptance, or publication remains separate work. New learning may revise this scenario or contract, but the durable source of truth must record the change and preserve the distinction between current claims and historical checkpoints.
