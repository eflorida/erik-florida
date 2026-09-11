# Agentic Systems Lab — Product Summary

## Product identity

Agentic Systems Lab is a public evidence surface for inspecting how bounded agentic work is directed, evaluated, and transferred. It is part of the Erik Florida platform, but it is independently deployable from the professional website.

Mission Control is the methodology that informs the run model. Flight Deck is the future project-centric workspace and control plane. The Lab is neither: it demonstrates selected workflows without becoming a general project-management or orchestration product.

## Primary audience and task

The first audience is an engineering leader or technically curious hiring stakeholder evaluating whether agentic-development claims are concrete and trustworthy.

Their primary task is to inspect a run and answer:

1. What outcome was requested?
2. What did the agent do?
3. What evidence supports the result?
4. What was evaluated mechanically or through judgment?
5. What still requires human authority?

## First product slice

The first slice is a **reference run explorer** for a bounded TypeScript change. It uses a schema-validated recorded fixture and clearly states that no live model call is occurring. The fixture exists to establish the run contract, information hierarchy, and verification story before introducing runtime cost, nondeterminism, or public-input risk.

The stable conceptual path is:

`Intent → Work → Evaluation → Evidence → Transfer`

The interface exposes the mission, acceptance criteria, ordered steps, artifacts, verification evidence, and transfer recommendation. It does not manufacture live activity or autonomy claims.

## Second product slice

The second slice adds one bounded live workflow: review a pasted TypeScript diff through the OpenAI Responses API. The application accepts no repository, runs no code, gives the model no tools, stores no run, and treats the structured response as review assistance rather than authority.

The live surface exposes model identity, request latency, token usage, estimated token cost, the fixed evaluation contract, and the final human decision boundary. The recorded reference run remains available as a deterministic explanation of the broader methodology.

## Product rules

- Evidence over animation or claims.
- Label recorded, simulated, and live behavior accurately.
- Make failures and human authority visible rather than polishing them away.
- Keep the primary run inspection surface in the first viewport.
- Treat arbitrary public input, code execution, persistence, authentication, and long-running work as separate product and architecture decisions.
- Keep contracts and components app-local until a real second consumer exists.
- Do not introduce Flight Deck concepts such as projects, activity ingestion, integrations, or durable knowledge graphs into the Lab without a separate mission.

## Success boundary

The first slice succeeds when a visitor can understand the requested change, inspect the work and evidence, and identify the transfer decision in three minutes without believing the replay is a live autonomous run.
