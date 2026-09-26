# Agentic Systems Lab — Product Summary

## Product identity

Agentic Systems Lab is a public evidence surface for inspecting how bounded agentic work is directed, evaluated, and transferred. It is part of the Erik Florida platform, but it is independently deployable from the professional website.

Mission Control is the generally tool- and team-agnostic methodology that informs the Lab. Flight Deck is an optional, opinionated implementation of a Mission Control engineering team. The Lab is neither: it demonstrates selected interaction and evidence patterns without becoming a general project-management, Mission Control, or Flight Deck runtime.

## Primary audience and task

The first audience is an engineering leader or technically curious hiring stakeholder evaluating whether agentic-development claims are concrete and trustworthy.

Their primary task is to inspect a run and answer:

1. What outcome was requested?
2. What did the agent do?
3. What evidence supports the result?
4. What was evaluated mechanically or through judgment?
5. What still requires human authority?

## First product slice

The first slice is a **reference run explorer** for a bounded TypeScript change. It uses a schema-validated replay fixture and clearly states that no live model call is occurring. The fixture exists to establish the data contract, information hierarchy, and evidence-presentation story before introducing runtime cost, nondeterminism, or public-input risk.

The stable conceptual path is:

`Intent → Work → Evaluation → Evidence → Transfer`

The interface exposes a mission label, acceptance criteria, ordered steps, artifacts, evidence claims, and a transfer recommendation. These are earlier Lab vocabulary and a scenario projection, not proof that the Lab implements the current Mission/Goal/Loop/Round model.

The repository verifies the fixture's schema, reference integrity, rendering, navigation, and responsive presentation. It does not retain the source run, raw command output, evaluator identity, or source revision supporting the fixture's embedded execution claims. The [Lab evidence assessment](../reference/lab-evidence-assessment.md) records that boundary and the human decision still required before treating the replay as verified portfolio evidence.

## Second product slice

The second slice adds one bounded live workflow: review a pasted TypeScript diff through the OpenAI Responses API. The application accepts no repository, runs no code, gives the model no tools, stores no run, and treats the structured response as review assistance rather than authority.

The live surface exposes model identity, request latency, token usage, estimated token cost, a fixed structured review request, and the final human decision boundary. It is bounded model assistance, not an autonomous engineering workflow: it has no tools, repository context, effect verification, durable Goal State, event history, transfer acceptance, or Landing authority.

Automated tests verify request validation, safe unconfigured behavior, error mapping, structured rendering, and a mocked success path. LAB-M002's credentialed provider smoke test remains pending. The reference replay remains available as a deterministic explanation of the Lab's inspection model, subject to the evidence boundary above.

## Mission Control concepts demonstrated and absent

| Demonstrated in a bounded form                                                                    | Not established by the Lab                                                                    |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Explicit input limits and schema validation                                                       | A versioned Goal Contract or durable Goal State                                               |
| Presentation of intent, steps, artifacts, evidence claims, evaluation labels, and human authority | A reusable Loop Contract, governed rounds, re-entry, transfer acceptance, or Landing          |
| Separation of model judgment from request measurements                                            | Independent quality evaluation, calibrated reliability, or persistent-effect verification     |
| Safe failure/configuration states and an app-local provider boundary                              | Durable Mission Log, normalized events, aggregate loop analytics, or multi-session memory     |
| One human-owned review recommendation                                                             | Agent tools, code execution, coding-harness orchestration, or automated engineering authority |
| Independent deployment from the professional site                                                 | Flight Deck, Mastra, a generalized agent framework, or a chosen portfolio-demo architecture   |

## Product rules

- Evidence over animation or claims.
- Label recorded, simulated, and live behavior accurately.
- Make failures and human authority visible rather than polishing them away.
- Keep the primary run inspection surface in the first viewport.
- Treat arbitrary public input, code execution, persistence, authentication, and long-running work as separate product and architecture decisions.
- Keep contracts and components app-local until a real second consumer exists.
- Do not introduce Flight Deck concepts such as projects, activity ingestion, integrations, or durable knowledge graphs into the Lab without a separate mission.
- Do not promote fixture assertions or mocked provider responses into execution/reliability claims. Link success claims to attributable evidence and keep unresolved provenance visible.

## Success boundary

The first slice's interface goal is that a visitor can understand the requested change, inspect the presented work/evidence model, and identify the human decision boundary in three minutes without believing the replay is executing live. Whether its fixture qualifies as verified historical evidence remains a separate provenance decision.
