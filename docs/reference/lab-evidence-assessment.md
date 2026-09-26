# Agentic Systems Lab evidence assessment

**Established:** 2026-09-25, Mission Control reconciliation Step 2c
**Status:** Repository evidence assessment; replay provenance decision pending human review

## Purpose and boundary

This assessment separates what the repository directly verifies from claims authored inside the Lab's reference fixture and from behavior that still needs external validation. It does not modify the application, declare the fixture fabricated, certify its embedded history, or replace LAB-M001/LAB-M002 acceptance.

The assessment covers the repository at `7f4657e6170536fec6f3016bca18e5bfd892d6fe` plus the documentation-only reconciliation changes. No provider request, external fixture repository, CI artifact store, or separate Flight Deck checkout was inspected.

## Evidence classes

| Class                            | Meaning here                                                                                                                                                   |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Retained repository evidence** | Source, tests, mission records, or Git provenance available in this checkout and attributable to a specific claim.                                             |
| **Authored fixture assertion**   | A statement stored in the reference JSON and validated as data. Schema validity proves its shape and relationships, not the historical execution it describes. |
| **Mocked-path verification**     | A test proves the application handles a controlled response correctly; it does not establish provider behavior or model quality.                               |
| **Pending external validation**  | The relevant check is explicitly incomplete or its supporting artifact is absent from the inspected repository.                                                |

## Reference replay

The reference replay is loaded from [`redirect-safety.json`](../../apps/agentic-systems-lab/content/runs/redirect-safety.json), validated by [`run.ts`](../../apps/agentic-systems-lab/src/contracts/run.ts), and rendered by [`run-explorer.tsx`](../../apps/agentic-systems-lab/src/components/run-explorer.tsx). Git records that the fixture entered the repository in commit `440ab71` with the Lab implementation. The commit and fixture contain no link to an external source repository, source revision, raw command output, evaluator identity, or capture procedure.

| Visitor-facing or fixture claim                                             | Retained support                                                                                             | What remains unestablished                                                                                                                                                                                 |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The item is a “Reference replay” with “No live model call.”                 | The component renders those labels, and component/E2E tests assert them.                                     | Whether the fixture was captured from a real prior agent session or authored as an illustrative scenario.                                                                                                  |
| `recordedAt` and `mode: "recorded"` identify a recorded run.                | The schema requires those fields and ISO timestamp shape.                                                    | Timestamp provenance, capture mechanism, original executor, and immutable source record.                                                                                                                   |
| A call-site inspection found one redirect boundary and no shared validator. | The fixture contains that narrative.                                                                         | The inspected repository/ref, files examined, inspection output, and evaluator attribution.                                                                                                                |
| The displayed patch was implemented.                                        | The fixture retains a short TypeScript code string and label.                                                | A source commit/diff, surrounding implementation, tests, and persistent effect in the claimed source system.                                                                                               |
| Six focused tests passed.                                                   | The fixture states `6 passed · 0 failed`; the Lab E2E test verifies that the text is displayed.              | Test source, raw output, environment, source revision, execution time, and a reproducible command target. The command string in the fixture is descriptive, not an executable artifact in this repository. |
| Strict TypeScript and lint passed with zero errors.                         | The fixture states those results.                                                                            | Raw output, exact configuration/source revision, and execution provenance for the described change.                                                                                                        |
| Four of four acceptance criteria were satisfied.                            | The fixture contains the criteria and evaluation summary; schema checks keep evidence references resolvable. | Evaluator identity, rubric application, effect verification, transfer acceptance, and supporting source evidence.                                                                                          |
| The run is `accepted-for-human-review` and recommends accepting the change. | The fixture and schema preserve this state/recommendation; the UI exposes human authority.                   | An actual recipient's acceptance/rejection and a governed Landing decision.                                                                                                                                |

The run-contract tests prove that the fixture parses, IDs resolve, and step sequencing is contiguous. Component and browser tests prove that visitors can inspect the fixture, see the embedded patch/evidence text, reach the human-transfer presentation, and use the surface on mobile. Those are meaningful product/interface checks. They do not independently validate the redirect behavior or the fixture's execution history.

## Bounded live review

The live route has stronger retained evidence for its boundary behavior than for provider-backed result quality:

- [`route.test.ts`](../../apps/agentic-systems-lab/src/app/api/reviews/route.test.ts) directly verifies invalid input, oversized requests, and the missing-credential setup response without contacting a provider.
- The request and response schemas, error mapping, token-cost calculation, component rendering, and human-authority copy have unit/component coverage recorded in LAB-M002.
- The production browser journey intercepts `/api/reviews` and returns a controlled success payload. It proves the UI can submit and render a valid response, measured fields, and the authority boundary. It is mocked-path verification, not a live provider result.
- LAB-M002 explicitly leaves “A credentialed live Responses API smoke test passes locally” unchecked. No credentialed response artifact was found in the inspected repository.
- No retained evaluation compares model findings with an independent expert judgment across representative cases. Structured output and a successful request would demonstrate contract conformance and possibility, not review reliability.

The Lab accurately limits the live workflow to one submitted diff, no tools, no repository access, no code execution, no application persistence, and human merge/deployment authority. Provider response metadata supports inspection of a request; it is not a Goal State, Mission Log, normalized loop event history, or proof that the review is correct.

## Current public-claim boundary

Until provenance is resolved, repository documentation should describe the replay as a **schema-validated reference scenario or replay fixture whose execution provenance is not retained in this checkout**. It may support claims about the Lab's contract, information hierarchy, navigation, accessibility, and evidence presentation. It should not be used as independent proof that the displayed source inspection, patch, commands, or acceptance evaluation actually occurred.

The live review may be described as an implemented, bounded local workflow with tested safety/configuration paths and mocked success rendering. It should not be described as credentialed-provider validated, reliable across a case mix, an autonomous engineering loop, a Mastra workflow, or a durable Mission Control runtime.

This boundary is deliberately conservative. If attributable source evidence exists elsewhere, it can change the assessment after review; its absence from this checkout is not proof that no execution occurred.

## Human decision required

Before treating the replay as verified portfolio evidence, choose one path:

1. **Supply provenance:** identify the source repository/ref, executor/evaluator, commands, raw results, capture process, and persistent-effect evidence. Retain enough of that material or its hashes/links to reproduce and attribute the claims.
2. **Approve an illustrative disclosure:** explicitly label the fixture as illustrative/synthetic and revise “recorded”/“verified” wording so the interface demonstrates an evidence model rather than asserting a captured execution history.
3. **Replace the fixture:** run a governed scenario with an approved contract and retained attributable evidence, then update the replay and assessment.

No path is selected in Step 2c. Any visitor-facing label, fixture, schema, mission acceptance, or publication change is separate application/product work requiring explicit approval and verification.
