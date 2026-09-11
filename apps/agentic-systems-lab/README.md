# Agentic Systems Lab

Independent public evidence application for inspecting bounded agentic work.

## LAB-M002 live review

Copy `.env.example` to `.env.local`, add a server-side `OPENAI_API_KEY`, set `LAB_LIVE_REVIEW_ENABLED=true`, and restart the development server. `OPENAI_MODEL` defaults to `gpt-5.6-terra`.

The live route accepts one TypeScript unified diff of at most 12,000 characters. It sends no tools, executes no submitted code, requests no repository access, sets OpenAI response storage to false, and leaves every merge or deployment decision with a human.

The live route is a local validation surface. Do not enable it in a public deployment until a later mission defines abuse controls and a cost budget.

## LAB-M001 reference replay

The LAB-M001 golden path is:

`content/runs/*.json` → `src/contracts/run.ts` → `src/data/runs.ts` → Server Component → typed run explorer at `/reference`.

The local development server uses `http://localhost:3100`, leaving port 3000 available for the professional site.
