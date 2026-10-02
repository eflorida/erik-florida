# Editorial-readiness Loop Contract

- **Version:** `0.1`
- **Applicable goal:** [G004-001](../goals/G004-001/contract.md) only
- **Owner and recipient:** Erik Florida
- **Operator:** a person or coding harness acting within G004-001 authority
- **Status:** Operating for this Step 4 goal under Erik's instruction to execute the approved contract; broader reuse requires a new decision

## Input and valid start

Each invocation names a round ID, the current [Goal State](../goals/G004-001/state.md), the exact revision of the [M003 overview](../../apps/site/content/pages/agentic-engineering.mdx), and the relevant [M003 mission](../../docs/missions/M003/mission.md), [source assessment](../../docs/reference/agentic-source-assessment.md), [overview guide](../../docs/guides/editing-agentic-overview.md), [Mission Control concepts](../../docs/guides/mission-control-concepts.md), and [source authority notes](../../docs/reconciliation/canonical-reference-notes.md). Inspect the MDX registry, route, and draft metadata when making publication claims. The companion [article](../../apps/site/content/writing/verification-over-understanding.mdx) is context, not an automatic edit target.

Preflight confirms that the inputs exist, the active goal and round budget are known, the editorial question is bounded, and no required source is unavailable or contradictory. A failed preflight is an invalid run. Record the cause and at most one recovery attempt in Goal State; it is not product evidence.

## Work and mutation

One round addresses an attributable gap in M003 editorial readiness. Review the current overview for supported career attribution, correct Mission Control/Flight Deck boundaries, usefulness and concision for a hiring audience, accessible explanation, and draft/publication treatment. Compare against source limits and current repository behavior. A reasoned no-change finding is a valid result.

Within the active Goal Contract, the operator may edit the M003 overview and directly related editorial guidance or tests when the evidence supports that edit, then update Goal State. The operator may not change the Goal Contract or its evaluation rules, infer private career facts, mark editorial acceptance, publish, deploy, change metadata to `published`, modify the Lab, introduce infrastructure, or create a Flight Deck dependency. A needed protected change is a versioned proposal to Erik, not a loop action.

## Evaluation and evidence

Record the round input revision, specific claim or gap, source paths, diff or justified no-change result, observed route and metadata behavior, check command and result tied to the evaluated revision, residual judgment, and next action. Use `corepack pnpm check` as the retained deterministic floor. If visitor-facing copy, behavior, or navigation changes, also use `corepack pnpm test:e2e` and inspect affected presentation as the overview guide requires. Check local Markdown links and relevant routes. A passing check does not establish editorial sufficiency.

Evaluate three separate questions: whether the run was valid, whether the retained floor holds, and whether the result makes M003 ready for Erik's editorial decision. Report uncertainty. The operator may recommend candidate completion only under the Goal Contract's protected conditions. Erik alone may accept editorial sufficiency and land the goal; publication is a separate decision.

## Budget, re-entry, and transfer

At most three valid product rounds under Goal Contract `0.1`, with one recovery attempt for the same invalid environment/harness condition. On a valid failure, record the gap and next bounded round without erasing prior evidence. On a deterministic regression, restore the floor or revert the round. Stop and escalate on unsupported claims, protected-criterion pressure, scope or authority changes, exhausted budget, or consequential ambiguity.

Transfer to Erik consists of the Goal Contract and State, round record, source-linked findings, diff or no-change rationale, deterministic and browser evidence as applicable, unresolved judgment, and editorial recommendation. Erik may accept, request re-entry, revise the contract, pause, or abandon. A recommendation is not an accepted transfer or Landing.
