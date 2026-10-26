# Agentic Systems Lab — Product Summary

## Product identity

Agentic Systems Lab is an experiment-led evidence surface for inspecting how bounded agentic product and engineering work is directed, evaluated, and returned to a person. It is part of the Erik Florida platform, but it is independently deployable from the professional website. The visual metaphor is a working ledger: each experiment names a real user question, exposes its inputs and result, and distinguishes model judgment from checks and human authority.

Mission Control is the generally tool- and team-agnostic methodology that informs the Lab. Flight Deck is an optional, opinionated implementation of a Mission Control engineering team. The Lab is neither: it demonstrates selected interaction and evidence patterns without becoming a general project-management, Mission Control, or Flight Deck runtime.

## Primary audience and task

The first audience is an engineering leader or technically curious hiring stakeholder evaluating whether agentic-development claims are concrete and trustworthy.

Their primary task is to explore a working specimen and answer:

1. What outcome was requested?
2. What did the agent do?
3. What evidence supports the result?
4. What was evaluated mechanically or through judgment?
5. What still requires human authority?

The professional site establishes Erik's experience and perspective; the Lab shows selected implementation choices in action. It is a small collection rather than a claim to offer a general agent platform or a competitive code-review service. A visitor should reach one usable sample quickly, then find deeper architecture and evidence when interested.

## First product slice

The first slice is a **reference-scenario explorer** for a bounded TypeScript change. It uses the original schema-validated design scenario and clearly states that no live model call is occurring. The scenario established the data contract, information hierarchy, and evidence-presentation story while the Lab and Mission Control model were still evolving, before runtime cost, nondeterminism, or public-input risk.

The stable conceptual path is:

`Intent → Work → Evaluation → Evidence → Transfer`

The interface exposes a mission label, acceptance criteria, ordered steps, artifacts, evidence claims, and a transfer recommendation. These are earlier Lab vocabulary and a scenario projection, not proof that the Lab implements the current Mission/Goal/Loop/Round model.

The repository verifies the fixture's schema, reference integrity, rendering, navigation, responsive presentation, and explicit provenance disclosure. It does not retain a source run, raw command output, evaluator identity, or source revision supporting the fixture's scenario assertions. The [Lab evidence assessment](../reference/lab-evidence-assessment.md) records the approved treatment: present it as the original reference scenario, not as independently verified execution history.

## Second product slice

The second slice adds one bounded live workflow: review a pasted TypeScript diff through the OpenAI Responses API. The application accepts no repository, runs no code, gives the model no tools, stores no run, and treats the structured response as review assistance rather than authority.

The live surface exposes model identity, request latency, token usage, estimated token cost, a fixed structured review request, and the final human decision boundary. It is bounded model assistance, not an autonomous engineering workflow: it has no tools, repository context, effect verification, durable Goal State, event history, transfer acceptance, or Landing authority.

Automated tests verify request validation, safe unconfigured behavior, error mapping, structured rendering, and a mocked success path. LAB-M002's credentialed provider smoke test remains pending. The reference scenario remains available as a deterministic explanation of the Lab's inspection model, subject to the evidence boundary above.

## Third product slice — change review workspace

LAB-M003 adds `/workspace`: a bounded diff starts a separate-worker Mastra workflow with parallel risk and test reports followed by an advisory brief. The visitor can reopen a 24-hour run URL, inspect each validated report as it arrives, and open a drawer of actual app-level transitions. This is a new local opt-in implementation checkpoint, not a public launch or evidence of review reliability. A credentialed run and three-case quality assessment remain pending. See [LAB-M003](../missions/LAB-M003/mission.md) and [ADR-009](../architecture/decisions/ADR-009-lab-mastra-worker-and-run-store.md).

Erik selected the [Experiment Ledger visual direction](../design/lab-experiment-ledger.md) for the Lab on 2026-10-05. Its light notebook canvas, navy and blue structure, orange markers, boxed artifacts, and restrained handwritten accent deliberately distinguish the Lab from the professional website. The generated concept image is visual inspiration only; its extra controls and sample findings do not describe implemented behavior or evidence.

## Fourth product slice — experiment entrance and product comparison

LAB-M004 makes `/` the visitor entrance, retains the offloaded `/workspace` as an engineering-systems specimen, and moves the earlier one-shot route to `/quick-review`. A second specimen at `/comparison` asks whether a fictional supplier chair meets a buyer's explicit replacement requirements. One Mastra extraction agent reads only fixed catalog notes and returns typed facts with source-note IDs. Deterministic code applies the buyer's seat-height, load, lumbar, and armrest rules; a person makes any purchasing decision. The route accepts only three authored cases, stores no comparison run, is disabled by default, and is unavailable on Vercel. It is a local implementation checkpoint, not a validated public product. See [LAB-M004](../missions/LAB-M004/mission.md) and [ADR-010](../architecture/decisions/ADR-010-bounded-lab-comparison.md).

The two specimens show complementary patterns: offloaded parallel engineering review and request-bound customer-product extraction with hard rules outside the model. A future field note can connect a real repository delivery decision to its evidence without inventing a Flight Deck runtime. It should use attributable public-safe artifacts before appearing in the visitor interface.

## Mission Control concepts demonstrated and absent

| Demonstrated in a bounded form                                                     | Not established by the Lab                                                                      |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Explicit input limits, schema validation, and a Lab-specific run record            | A Lab application Goal Contract or Mission Control Goal State                                   |
| Presentation of intent, steps, artifacts, activity, and human authority            | Mission Control governed rounds, transfer acceptance, or Landing in the app runtime             |
| Separation of model judgment from request measurements                             | Independent quality evaluation, calibrated reliability, or persistent-effect verification       |
| Safe failure/configuration states, offloaded work, and app-local provider boundary | Crash-transparent mid-call continuation, Mission Log, normalized events, or aggregate analytics |
| One human-owned review recommendation                                              | Agent tools, code execution, coding-harness orchestration, or automated engineering authority   |
| An app-local Mastra change-review workflow                                         | Flight Deck, generalized orchestration, or public workflow release                              |

## Product rules

- Evidence over animation or claims.
- Label reference-scenario, recorded, simulated, and live behavior accurately.
- Make failures and human authority visible rather than polishing them away.
- Keep the primary run inspection surface in the first viewport.
- Treat public enablement, code execution, authentication, and broader long-running work as separate product and architecture decisions.
- Keep contracts and components app-local until a real second consumer exists.
- Do not introduce Flight Deck concepts such as projects, activity ingestion, integrations, or durable knowledge graphs into the Lab without a separate mission.
- Do not promote scenario assertions or mocked provider responses into execution/reliability claims. Link success claims to attributable evidence and keep the approved provenance boundary visible.

## Success boundary

The first slice's interface goal is that a visitor can understand the requested change, inspect the presented work/evidence model, and identify the human decision boundary in three minutes without mistaking the original reference scenario for live or independently verified historical execution.
