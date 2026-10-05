# Agentic Systems Lab

Independent public evidence application for inspecting bounded agentic work.

Repository context and current status live in the root [`AGENTS.md`](../../AGENTS.md) and [`docs/product/current-state.md`](../../docs/product/current-state.md). Mission Control terminology follows the [concept guide](../../docs/guides/mission-control-concepts.md). The Lab demonstrates selected ideas; it is not Flight Deck or a general Mission Control runtime.

LAB-M001 remains ready for human review. LAB-M002 remains ready for credentialed validation. LAB-M003 adds a local-only change-review workspace and remains pending credentialed and hosted validation.

The original reference scenario is a schema-validated design fixture created while the Lab and Mission Control model were evolving. Its structure and presentation are verified, while the source execution artifacts described inside it are not retained in this checkout. The interface and [evidence assessment](../../docs/reference/lab-evidence-assessment.md) disclose that boundary. The Lab now has an app-specific durable review record and Mastra workflow, but no Mission Control Goal State or Loop Contract runtime, effect verification, agent tools, or Flight Deck behavior.

## LAB-M003 change review workspace

`/workspace` delegates one bounded diff to parallel Mastra risk and test agents, then prepares an advisory brief. The separate worker processes a persisted queue while `/workspace/runs/[id]` reads partial results and actual activity events. Run links remain readable for 24 hours; anyone holding a link can see its reports, so do not submit private source.

For local use, copy `.env.example` to `.env.local`, add `OPENAI_API_KEY`, set `LAB_WORKFLOW_ENABLED=true`, and run `corepack pnpm --filter @erik-florida/agentic-systems-lab dev`. This starts Next on port 3100 and the worker. The default database is `.lab-data/reviews.db`; `LAB_DATABASE_URL` and `LAB_DATABASE_AUTH_TOKEN` can point both processes at shared LibSQL. The workflow is disabled by default and rejects new runs on Vercel, where this worker is absent. Do not expose it publicly until the LAB-M003 release conditions are met. See [ADR-009](../../docs/architecture/decisions/ADR-009-lab-mastra-worker-and-run-store.md).

## LAB-M002 live review

Copy `.env.example` to `.env.local`, add a server-side `OPENAI_API_KEY`, set `LAB_LIVE_REVIEW_ENABLED=true`, and restart the development server. `OPENAI_MODEL` defaults to `gpt-5.6-terra`.

The live route accepts one TypeScript unified diff of at most 12,000 characters. It sends no tools, executes no submitted code, requests no repository access, sets OpenAI response storage to false, and leaves every merge or deployment decision with a human.

The live route is a local validation surface. Do not enable it in a public deployment until a later mission defines abuse controls and a cost budget.

## LAB-M001 reference scenario

The LAB-M001 golden path is:

`content/runs/*.json` → `src/contracts/run.ts` → `src/data/runs.ts` → Server Component → typed run explorer at `/reference`.

The local development server uses `http://localhost:3100`, leaving port 3000 available for the professional site.
