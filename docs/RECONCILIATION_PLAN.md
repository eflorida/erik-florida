# Mission Control Repository Reconciliation Plan

Status: governing reconciliation plan; current phase is tracked separately

> **Current routing:** This plan preserves the original sequence and gates. Do not infer the active phase from its historical startup instruction. Read `docs/product/current-state.md`, `docs/reconciliation/mission-control-sync-audit.md`, and `docs/reconciliation/mission-control-sync-evaluation.md` for dated approvals, results, corrections, and the next authorized action.

## Objective

Reconcile this monorepo's durable documentation and engineering context with the current Mission Control model before making further demo/product architecture decisions.

Canonical references are in `docs/mission-control-reference/`.

## Operating rules

- Investigation before modification.
- Every material phase produces a durable artifact.
- Preserve repository-specific truth.
- Surface ambiguity instead of silently resolving product decisions.
- Mission Control is tool-agnostic; Git, GitHub Actions, Flight Deck, MCP, and particular coding harnesses are implementation choices.
- Do not reduce Mission Control to Agile/Kanban stages.
- Preserve specialized coding harnesses such as Codex, Cursor, and Claude Code. Flight Deck configures/orchestrates them rather than replacing them.
- Use progressive context retrieval. `AGENTS.md` should route agents to authoritative context rather than duplicate the methodology.
- Keep evaluation independent where practical.

# Step 1 — Investigation-only reconciliation audit

Do not edit application code or existing repository documentation.

Inspect at minimum:

- root and package-level READMEs;
- `AGENTS.md`, Cursor rules, skills, or equivalent agent configuration;
- architecture and technical-design docs;
- product/PRD/thesis docs;
- existing Mission Control, Autonomous Flight, and Flight Deck docs;
- public/site content about Mission Control or agentic development;
- AI/demo-app documentation;
- Mastra agents, workflows, tools, evals, and observability design;
- Turborepo app/package boundaries relevant to the demo;
- CI/CD and GitHub Actions;
- schemas, structured state, event logging, and telemetry;
- external-system/MCP assumptions;
- coding-agent workflow documentation.

Create:

`docs/reconciliation/mission-control-sync-audit.md`

The audit must include:

## A. Repository context
Summarize product/application structure and documentation surfaces inspected.

## B. Still aligned
Identify concepts that remain consistent. Avoid unnecessary churn.

## C. Terminology drift
Check Mission, Goal/Goal Contract, Goal State, Loop/Loop Contract, Round, Evidence, Transfer, Landing, Autonomous Flight, Flight Deck, Telemetry, and Mission Log. Cite repository paths.

## D. Architectural conflicts
Check especially for obsolete assumptions that:
- Flight Deck must physically own all mission artifacts;
- Flight Deck is primarily a web app;
- coding agents must get core repo context through Flight Deck/MCP;
- Flight Deck replaces coding harnesses;
- AI chat/session history is durable organizational memory;
- boards/stages are the canonical workflow;
- Git history alone is sufficient aggregate telemetry.

## E. Missing or underdeveloped concepts
Check for:
- durable artifacts vs operational state vs telemetry/events;
- conversation as working surface vs artifact as organizational memory;
- intent as source;
- repository-native intent as an optional implementation pattern;
- goal-to-localized implementation intent;
- structured event history and aggregate loop analytics;
- Flight Deck Runtime, Control Plane, and Experience;
- Deployment Topology;
- repository, automation, external-system, and agent adapters;
- GitHub Actions/CI as event producers;
- coding-harness adapters;
- `AGENTS.md` as context routing;
- skills/rules as executor adapters to Loop Contracts;
- repository-context-first with MCP/API for external context/actions;
- progressive enhancement and tool independence.

## F. Documentation changes proposed
For each: path, current problem, proposed change, reason, canonical reference, risk, and whether human approval is needed. Do not implement yet.

## G. Code/architecture changes suggested
List separately. These are proposals only.

## H. Public-content implications
Identify public Mission Control/agentic-development claims that would become misleading.

## I. Decisions requiring human review
Do not decide final demo scope during this audit.

## J. Proposed reconciliation sequence
Recommend bounded Step 2 changes, with conceptual docs before code architecture.

### Step 1 completion
Stop after the audit exists, relevant surfaces have been inspected, findings are traceable, and unresolved decisions are explicit. Present it for human review.

# Human Gate 1 — Review audit

Record accepted, rejected, modified, and deferred proposals. Do not infer approval from silence.

# Step 2 — Documentation reconciliation

Implement only approved documentation changes. Do not change application behavior unless separately approved.

Update the audit with files changed, deferred items, unresolved questions, and newly discovered contradictions.

Stop for Human Gate 2.

# Human Gate 2 — Validate reconciled documentation

Validate terminology, product boundaries, architecture descriptions, public claims, and unresolved decisions.

# Step 3 — Independent consistency evaluation

Use a fresh agent context where practical.

Inputs:
- canonical references;
- this plan;
- audit;
- reconciled docs;
- relevant repo structure.

Evaluate whether:
1. canonical concepts are consistent;
2. repository-specific facts survived;
3. methodology and implementation choices are distinct;
4. obsolete Flight Deck assumptions remain;
5. public content conflicts with internal architecture;
6. unresolved choices remain unresolved;
7. a coding harness can discover authoritative context.

Create:

`docs/reconciliation/mission-control-sync-evaluation.md`

Do not silently repair failures.

# Human Gate 3 — Accept reconciliation

Material failures return to Step 2. Otherwise accept documentation reconciliation.

# Step 4 — Bootstrap repository-native Mission Control

Define a separate Goal Contract for introducing the smallest useful Mission Control runtime. Evaluate, rather than assume, a structure such as:

`.mission-control/{config,missions,goals,loops,policies,schemas,context}`

Use a real career-platform goal so the repository dogfoods the methodology.

# Step 5 — Coding harness integration

Configure selected harnesses after the runtime structure is understood.

Principles:
- Flight Deck orchestrates/configures coding harnesses; it does not replace them.
- Root `AGENTS.md` is a routing layer, not a methodology dump.
- Agents should discover the active Goal Contract, Goal State, applicable Loop Contract, localized intent, architecture/context, evidence expectations, and permitted state/event mechanisms.
- Skills/rules are executor adapters; Loop Contracts remain authoritative and harness-independent.

# Step 6 — Structured telemetry and automation

Define a normalized Mission Control event contract.

Potential producers: GitHub Actions, CI/CD, coding harnesses, Flight Deck, webhooks, evaluators, deployments, and production verification.

GitHub Actions is strong for facts that become true on governed merges, but is not the only event source.

Design analytics for loop duration, rounds/goal, re-entry, intake-to-production time, blocked time, evaluation failures, transfer rejection, human intervention, and Landing-to-production verification.

Git is provenance; normalized events are the analytics substrate.

# Step 7 — Flight Deck Deployment Topology

For each Mission Control primitive record:
- authority/system of record;
- storage;
- change mechanism;
- observation mechanism;
- Flight Deck adapter;
- agent access;
- permissions;
- telemetry source.

Treat repository-native goals/state + GitHub Actions + Flight Deck analytics as a hypothesis until earlier steps provide evidence.

# Step 8 — Decide and implement the portfolio demo

Only after reconciliation and initial dogfooding choose among:
1. simplified Flight Deck;
2. Mission Control implementation assistant;
3. autonomous Mastra app operated through Mission Control;
4. a combination where Flight Deck manages real development goals for the career platform.

Evaluate against the portfolio goal: demonstrate engineering leadership, agentic architecture, Mastra agents/workflows, evaluation/observability, and Mission Control without proprietary Raiven code.

## End-state principle

`Mission Control methodology -> repository-native implementation -> coding-harness execution -> structured telemetry -> Flight Deck observability -> evidence -> methodology/product refinement`

The original immediate task was Step 1 only. That startup boundary is historical; use the current routing above for active work.
