# Agentic Systems Lab

Independent public evidence application for inspecting bounded agentic work.

Repository context and current status live in the root [`AGENTS.md`](../../AGENTS.md) and [`docs/product/current-state.md`](../../docs/product/current-state.md). Mission Control terminology follows the [concept guide](../../docs/guides/mission-control-concepts.md). The Lab demonstrates selected ideas; it is not Flight Deck or a general Mission Control runtime.

LAB-M001 remains ready for human review. LAB-M002 is implemented in this checkout and remains ready for credentialed validation; its unchecked live provider smoke test has not been converted into an acceptance claim by the merge.

The original reference scenario is a schema-validated design fixture created while the Lab and Mission Control model were evolving. Its structure and presentation are verified, while the source execution artifacts described inside it are not retained in this checkout. The interface and [evidence assessment](../../docs/reference/lab-evidence-assessment.md) disclose that boundary. The Lab demonstrates selected boundaries and presentation patterns; it has no Goal State, Loop Contract runtime, durable event history, effect verification, tools, Mastra workflow, or Flight Deck behavior.

## LAB-M002 live review

Copy `.env.example` to `.env.local`, add a server-side `OPENAI_API_KEY`, set `LAB_LIVE_REVIEW_ENABLED=true`, and restart the development server. `OPENAI_MODEL` defaults to `gpt-5.6-terra`.

The live route accepts one TypeScript unified diff of at most 12,000 characters. It sends no tools, executes no submitted code, requests no repository access, sets OpenAI response storage to false, and leaves every merge or deployment decision with a human.

The live route is a local validation surface. Do not enable it in a public deployment until a later mission defines abuse controls and a cost budget.

## LAB-M001 reference scenario

The LAB-M001 golden path is:

`content/runs/*.json` → `src/contracts/run.ts` → `src/data/runs.ts` → Server Component → typed run explorer at `/reference`.

The local development server uses `http://localhost:3100`, leaving port 3000 available for the professional site.
