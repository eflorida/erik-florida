# G004-001 — Step 4 adoption Goal Contract

- **Goal ID:** `G004-001`
- **Contract version:** `0.2`
- **Owner:** Erik Florida
- **Landing authority:** Erik Florida
- **Parent mission:** proposed `M004 — Dogfood Mission Control through M003 editorial readiness`
- **Status:** Approved for Step 4 execution; version `0.2` was approved by Erik's explicit correction instruction

This is the operating copy of the [approved proposal](../../../docs/reconciliation/step-4-goal-contract-draft.md). Version `0.1` is retained in Git commit `b83e0c6`. Version `0.2` changes only the order of the existing completion requirements: candidate prerequisites precede Erik's Landing and final adoption decision. See the [Goal State](state.md) for approval and execution evidence.

## Why this goal

The repository has completed documentation reconciliation but has not yet operated an explicit Goal Contract, Goal State, or Loop Contract. Step 4 should prove the smallest useful repository-native implementation on real career-platform work rather than create a speculative framework.

M003 is the strongest first case. Its AI & Agentic Engineering overview is implemented, verified, and still awaiting editorial acceptance. That creates a real bounded outcome with established sources, existing deterministic checks, a named human authority, visible public-safety constraints, and a meaningful Landing decision. It can exercise re-entry and learning without requiring credentials, deployment, publication, or new infrastructure.

## Desired observable outcome

M003 reaches an evidence-backed human editorial Landing decision through a repository-native Mission Control loop, while the repository demonstrates that a fresh coding-harness session can discover and operate the active goal from durable state.

The desired persistent state is:

1. the approved Goal Contract, current Goal State, and one applicable Loop Contract are versioned and discoverable;
2. at least one valid bounded round reviews the real M003 overview against its current claim, product, and publication boundaries;
3. findings, changes, evaluation, evidence, state transitions, and human decisions survive the executing conversation;
4. M003 becomes `candidate-complete` only when the required evidence is assembled;
5. Erik records the Landing decision to accept M003 editorially or directs evidence-backed re-entry; and
6. the bootstrap produces enough evidence to decide whether the repository-native pattern should continue, change, narrow, or stop.

Editorial Landing and publication remain separate. Landing this goal may accept the M003 wording while leaving its application metadata as `draft`, `noindex, nofollow` until a later publication decision.

## Initial scope

- Evaluate the smallest repository-native artifact layout against this goal rather than pre-creating the full directory proposed in the reconciliation plan.
- Create only the approved durable artifacts needed to operate this goal: a Mission Control routing README, this goal's contract and state, and one editorial-readiness Loop Contract.
- Link existing product, source, architecture, mission, and test evidence instead of duplicating it into the runtime.
- Review and, where evidence supports it, revise the M003 overview and its directly related editorial guidance/tests.
- Record bounded rounds, evidence, failures, re-entry, candidate completion, and the human Landing decision.
- Test whether a fresh coding-harness context can locate the active contract, state, next action, permitted surfaces, and required evidence from root routing.

## Explicit exclusions

- Publishing either site draft, changing publication metadata, choosing canonical domains, or deploying the site.
- Accepting LAB-M001, validating LAB-M002 with a provider credential, or changing the Lab.
- Building Flight Deck, adopting Mastra, selecting the portfolio demo, or integrating an external project-management system.
- Implementing normalized events, aggregate telemetry, analytics, adapters, MCP access, a database, API, worker, queue, authentication, or a state library.
- Configuring coding-harness-specific adapters; that belongs to Step 5 after the repository-native artifacts are understood.
- Bulk-converting historical missions or relabeling them as compliant Goal Contracts.
- Creating empty `config`, `missions`, `policies`, `schemas`, or `context` directories without a requirement demonstrated by this goal.
- Using private career source files as repository or application content.

## Baseline and measurement limits

- Reconciliation is accepted at Human Gate 3 and current governing documentation distinguishes Mission Control, Flight Deck, the site, and the Lab.
- M003 is an implemented and mechanically verified checkpoint with editorial acceptance still open.
- The overview and “Verification Over Understanding” article remain visible drafts with `noindex, nofollow`; draft status is not privacy.
- The complete repository check currently covers formatting, lint, strict TypeScript, 37 unit/component/contract/route tests, and production builds. The browser suite currently covers 12 site and 3 Lab journeys.
- One goal and one editorial case can establish usefulness and expose design gaps. They cannot establish reliability for every goal type, team, repository, or executor.
- This is a solo-project adoption case: Erik is both accountable owner and direct recipient of the editorial review. Hiring stakeholders are downstream beneficiaries, not Landing authorities.

## Completion conditions and persistent effects

The goal may become `candidate-complete` only when all of conditions 1–8 are true:

1. **Approved contract:** Erik has approved a numbered version of this Goal Contract, including scope, evidence, budget, authority, and Landing rules.
2. **Minimal runtime:** the repository contains a justified minimal artifact set with no placeholder directories or speculative infrastructure.
3. **Durable operation:** Goal State records the active gap, rounds, evidence, blockers, next action, and status independently of an agent conversation.
4. **Real loop use:** an editorial-readiness Loop Contract has processed the current M003 overview through at least one valid round.
5. **Evidence bundle:** the review retains source/claim assessment, relevant diff or no-change finding, deterministic results, browser evidence where presentation changed, unresolved judgment, and provenance.
6. **Discoverability:** a fresh-context evaluator can reach the active Goal Contract and Goal State from root `AGENTS.md` and correctly identify the next permitted action, protected surfaces, evidence standard, and Landing authority without reconstructing chat history.
7. **Retained floor:** all applicable deterministic checks pass, draft/indexing boundaries remain intact, and no unsupported claim or private source enters the application.
8. **Candidate recommendation:** the executor records why the evidence supports candidate completion or which specific gap requires re-entry.
   After candidate transfer, Landing and closeout additionally require:

9. **Human Landing:** Erik reviews the evidence and explicitly marks the goal `landed`, directs another round, revises the contract through a new version, pauses it, or abandons it.
10. **Adoption decision:** the final record states whether to continue, change, narrow, or retire the repository-native pattern and identifies any demonstrated need for later Step 5 or Step 6 work.

Landing must leave durable updates to the Goal State, M003 mission/current-state records where applicable, and any accepted editorial decision. A merge, green build, or `candidate-complete` state cannot substitute for Erik's Landing decision.

## Deterministic floor and retained constraints

- `corepack pnpm check` passes.
- `corepack pnpm test:e2e` passes when visitor-facing behavior or navigation changes; a documented, narrower command is acceptable for a round that cannot affect either application.
- Local Markdown links and relevant application routes resolve.
- Strict TypeScript and app-local schema boundaries remain intact.
- M003 remains visibly draft and emits `noindex, nofollow` unless a separate publication decision explicitly changes it.
- Existing career attribution, public-safety, accessibility, responsive-layout, and independent-deployment boundaries remain intact.
- Mission Control remains tool- and team-agnostic; repository-native storage is an implementation hypothesis, not a methodology requirement.
- Flight Deck remains optional and is not represented as implemented.
- Goal/evaluation surfaces cannot be weakened by the executing loop.

## Approved scenarios and protected evaluation

### Scenario A — fresh-context discovery

Starting only from root `AGENTS.md`, a fresh coding-harness session identifies the active goal, current state, applicable loop, next action, allowed mutation surfaces, required evidence, stop conditions, and Landing authority. Failure is a routing/runtime gap, not an M003 product failure.

### Scenario B — valid editorial round

The loop receives the current M003 overview and approved sources, evaluates factual support, Mission Control/Flight Deck terminology, hiring-audience usefulness, concision, accessibility implications, and publication boundaries, then returns an attributable finding/change bundle. A no-change result is valid when supported by evidence.

### Scenario C — evidence-backed re-entry

Erik or an independent evaluator rejects candidate completion with a specific gap. Goal State records that gap, the next round addresses it without rewriting the contract or erasing earlier evidence, and the new result remains traceable to the rejection.

### Scenario D — invalid run or missing input

Missing sources, stale or contradictory context, unavailable test infrastructure, or an unauthorized publication/deployment dependency makes the run invalid. The loop records and routes the issue; it does not count the run as product evidence or broaden its own authority.

### Scenario E — contract pressure

Execution discovers that the outcome, protected criteria, scope, budget, or authority must change. The executor proposes a versioned revision and stops dependent work until Erik approves or rejects it.

The Goal Contract, source/claim boundaries, deterministic floor, and Landing authority are protected evaluation surfaces. An executor may propose changes but cannot approve them.

## Required evidence and sufficiency

Required evidence:

- approved Goal Contract and revision history;
- current Goal State with provenance for material claims;
- approved Loop Contract and each invocation's input/round identity;
- source links and claim-boundary references used in editorial judgment;
- attributable changes or a justified no-change result;
- deterministic command results tied to the evaluated revision;
- browser evidence when presentation changes;
- independent discoverability/evaluation result;
- recorded human review, Landing decision, and adoption decision.

One valid M003 case is sufficient to judge whether this minimal bootstrap is useful for this repository. It is not sufficient evidence for cross-repository reliability, automated Landing, expanded machine authority, a normalized event system, or Flight Deck product design.

## Resources, capacity, and budget

- Use the existing repository, Git history, local coding harness, Markdown, schemas, CI commands, and browser tests.
- Add no production dependency, hosted service, credentialed provider request, or paid runtime.
- Permit at most three product rounds across versions `0.1` and `0.2` before a direction review.
- Permit one invalid-run recovery attempt for an environment or harness problem before escalating.
- Prefer links to existing context over copied methodology or duplicated source material.
- Add an artifact, directory, schema, or automation only when this goal demonstrates its immediate need.

## Authority and mutation boundaries

### Erik Florida may

- approve or revise the Goal Contract;
- approve the Loop Contract and operating policy;
- change protected evaluation criteria;
- decide editorial sufficiency;
- direct re-entry, pause, abandonment, or Landing;
- separately authorize publication, deployment, or later steps.

### The executing coding harness may

- create and update the approved repository-native Mission Control artifacts;
- update Goal State with evidence-backed facts;
- invoke the approved editorial loop and perform bounded edits within its mutation policy;
- run deterministic checks and assemble evidence;
- mark the goal `candidate-complete` when every precondition is satisfied;
- propose contract, policy, harness, or direction changes.

### The executing coding harness may not

- mark the goal `landed`;
- change this contract, its protected criteria, or its own authority without an approved version;
- publish or deploy content;
- weaken tests, attribution, draft metadata, accessibility, or public-safety boundaries to obtain a passing result;
- introduce infrastructure or later-step architecture outside the explicit scope;
- infer private facts, product decisions, or acceptance from silence.

## Stop, recovery, and escalation rules

Stop dependent work and escalate to Erik when:

- the desired outcome, audience, or editorial standard is materially ambiguous;
- a required career or methodology claim lacks an approved source;
- a change would publish, deploy, expose private material, or alter an application boundary;
- the next action requires infrastructure, credentials, external systems, or authority excluded above;
- a protected criterion or authority boundary appears wrong;
- three valid product rounds do not reach candidate completion;
- the same invalid environment/harness condition survives one recovery attempt; or
- evidence suggests that this goal is too broad, too small to be useful, or the wrong adoption case.

On deterministic regression, restore the floor or revert the attributable round before proceeding. Preserve failed/invalid evidence and the reason for re-entry; do not rewrite history into a successful run.

## Landing and transfer

**Landing authority:** Erik Florida.

The executor transfers a candidate-completion packet containing the current contract/state versions, round history, evidence bundle, unresolved risks, M003 editorial recommendation, and repository-native adoption recommendation. Erik may:

- land the goal;
- return it for a bounded round;
- approve a versioned contract revision;
- pause or abandon the goal; or
- accept the M003 editorial result while rejecting or revising the repository-native runtime pattern.

The goal does not transfer publication or deployment authority. If editorial Landing is accepted, a later publication goal may use the accepted M003 artifact as input.

## Provenance and revision history

- `0.1-proposed` — drafted from the accepted reconciliation, canonical Mission Control worksheets, current M003 mission, and Erik's direction to prepare Step 4. No implementation authority was inferred from the draft alone.
- `0.1` — Erik's 2026-10-02 instruction to execute Step 4 approved the proposed goal, scope, authority, budget, and initial artifact hypothesis. This operating copy preserves the proposed completion criteria. During preflight, the executor found that items 9–10 are post-candidate human decisions inside the candidate prerequisite list; see the pending amendment in Goal State.
- `0.2` — Erik explicitly approved the narrow correction after reviewing the version `0.1` defect. Conditions 1–8 now precede `candidate-complete`; conditions 9–10 remain required for Landing and closeout. No evidence standard, authority, scope, budget, or publication boundary changed. Version `0.1` remains in Git commit `b83e0c6`.
- Contract revisions require a new numbered version, a recorded reason, affected-consumer review, and Erik's approval.
- Historical versions and their evidence remain available after revision.

## Runtime layout adopted for this pilot

The approved minimal hypothesis is the four-artifact layout below; its usefulness and limits are being evaluated through this goal:

```text
.mission-control/
  README.md
  goals/
    G004-001/
      contract.md
      state.md
  loops/
    editorial-readiness.md
```

The root README should route to existing authoritative documents rather than copy them. `config`, `missions`, `policies`, `schemas`, `context`, event storage, and automation should be added only when a concrete requirement cannot be satisfied clearly within the initial artifacts.

- **Companion Goal State:** `.mission-control/goals/G004-001/state.md`
- **Applicable Loop Contract:** `.mission-control/loops/editorial-readiness.md`

## Approval recorded

Version `0.1` was approved to execute Step 4 with:

1. M003 editorial readiness as the real dogfood outcome;
2. Erik as owner and sole Landing authority;
3. permission for bounded M003 draft edits while publication/deployment remain excluded;
4. the three-round and one-recovery budget;
5. the four-artifact minimal runtime hypothesis; and
6. the completion/evidence conditions above.

That approval authorizes Step 4 only. Steps 5–8 and all deferred product/publication decisions remain separate.

Erik's subsequent instruction approved version `0.2`'s completion-order correction and a separate fresh-context evaluation agent. It did not itself constitute editorial acceptance, Landing, or an adoption decision.
