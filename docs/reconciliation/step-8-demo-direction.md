# Step 8 — Product demo direction

**Status:** Selected direction, 2026-10-05. Erik chose the change-review vertical slice and authorized implementation. [LAB-M003](../missions/LAB-M003/mission.md), [G008-001](../../.mission-control/goals/G008-001/contract.md), and [ADR-009](../architecture/decisions/ADR-009-lab-mastra-worker-and-run-store.md) record the operating scope. The remainder of this document preserves the proposal that led to those decisions.

## Outcome to demonstrate

A visitor should use a coherent product, delegate a bounded task, watch real Mastra-managed work progress, inspect the resulting artifact and its evidence, and understand what remains a human decision. The code and architecture should show production judgment: typed boundaries, durable execution where promised, failure recovery, evaluation, cost controls, safe public operation, and honest observability. The application does not need to implement Mission Control or Flight Deck as products.

The likely first home is the independently deployable [Agentic Systems Lab](../product/agentic-systems-lab.md). Its current `/` route offers one request-bound model review of a TypeScript diff; `/reference` is an explicitly labeled original scenario, not retained execution evidence. LAB-M001 still awaits human review, and [LAB-M002](../missions/LAB-M002/mission.md) still needs a credentialed provider smoke test. Neither is silently accepted by selecting a new demo direction.

## Candidate vertical slice

**Working product task:** a change-review workspace. A visitor starts from a curated sample or submits a bounded TypeScript diff, then receives a review packet useful to an engineer: risks and rationale, test ideas, and a concise human decision brief. This extends the Lab's existing interaction and audience. If Erik chooses a different product task, keep the execution and evidence requirements below while changing the domain and user-facing artifacts.

| Moment   | Visitor experience                                                                                                                           | Required real behavior                                                                                                                                                                         |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start    | Pick a sample or submit bounded input; see what the app will and will not inspect.                                                           | Validate input and cost/size limits before creating a run. Avoid pretending to have repository context.                                                                                        |
| Delegate | See the bounded tasks and their owners: context/preflight, risk review, test strategy, and synthesis/evaluation.                             | Mastra coordinates typed steps/agents and records actual transitions. Separate model judgments from deterministic checks.                                                                      |
| Follow   | A responsive workspace renders task-specific cards as outputs become available; an optional slide-out shows a time-ordered activity console. | Render validated structured data through owned UI components. The console reflects real run events and safe error states, not fabricated logs or raw private prompts.                          |
| Return   | Reopen the same run and see completed, running, failed, or cancelled work.                                                                   | If work truly continues beyond the HTTP request, persist run identity, state, outputs, and event position; define retry and recovery. A request-bound stream alone does not meet this promise. |
| Decide   | Inspect the final packet, evidence limits, usage/cost, and human action.                                                                     | The agent recommends; a person decides. No untrusted code execution, repository mutation, merge, or deployment follows from a review.                                                          |

“Generative UI” means that validated workflow output selects and populates predefined, accessible components appropriate to the result. The model does not emit arbitrary executable UI code. The activity console is a visitor-facing explanation of progress and evidence; developer traces may be richer, but must not be exposed wholesale to a public visitor.

## Architecture consequences to decide in the Goal Contract

- **Mastra scope:** Adopt it for a concrete multi-step workflow, not as a general agent platform. Current Mastra documentation supports typed workflows, streaming adapters, and tracing; the exact package/API versions need verification at implementation time. [Workflows](https://mastra.ai/ai-workflows), [AI SDK integration](https://mastra.ai/blog/ai-sdk-v7-support), and [observability](https://mastra.ai/docs/mastra-platform/overview) are product inputs, not adopted infrastructure.
- **True offloading:** Decide whether a run must continue after navigation, refresh, or a dropped connection. If yes, the existing request-bound route is insufficient. Approve a durable run store, execution mechanism, lifecycle, retention, and reconnect protocol behind an app-local boundary. Mastra's [durable-agent direction](https://mastra.ai/blog/introducing-durable-agents) and workflow storage are options to evaluate, not automatic choices.
- **Public operation:** Before enabling a paid workflow for anonymous visitors, define per-run budgets, rate limiting/abuse controls, concurrency, input retention, safe logging, and failure behavior. LAB-M002's local-only runtime setting does not authorize public use.
- **Evaluation:** Keep deterministic input/output and UI checks separate from agent quality evaluation. Use a small, retained case set with expected risks, test suggestions, and failure/uncertainty behavior. Display measured usage and trace links only for actual runs.
- **Repository boundaries:** Keep the Lab independently deployable from the site. Do not turn it into Flight Deck or a Mission Control system of record, and do not treat its workflow events as the proposed cross-repository [Step 6 Mission Control event stream](step-6-event-contract.md).

## Decisions to lock before implementation

1. **Product task:** extend the existing change-review flow, or choose a more broadly relatable task. This determines the first user journey, sample data, evaluation set, and artifact vocabulary.
2. **Offload promise:** require true resumable/background work in the first release, or explicitly scope the first release to a request-bound streamed workflow. The former better demonstrates production execution but requires storage and operating design.
3. **Public access envelope:** decide whether the first live release is public, invite-limited, or local/preview-only, with a cost ceiling and abuse controls appropriate to that choice.
4. **First release evidence:** name the user journey and independent checks that make the app feel useful, rather than measuring success by the number of agents or screens.

Once these are set, write a bounded next Lab mission and Goal Contract, revising the conditional LAB-M003 placeholder rather than treating it as approved. Record architecture decisions for Mastra and any durable execution infrastructure, then implement the vertical slice. Flight Deck can remain a separate future product; its full build is not a prerequisite for this demo.
