# Erik Florida — Current Project State

**Last intentionally established:** 2026-10-02, M003 and Step 4 goal G004-001 landed by Erik

This document is current working truth, not an activity log. Historical mission files preserve what was true at their checkpoints; a commit or merge does not by itself establish Landing, editorial acceptance, publication, deployment, or completion of an unchecked validation item.

## Product identity

- Erik Florida is a multi-application personal platform whose immediate purpose is to support Erik's search for an engineering-leadership role through concrete professional and technical evidence.
- `apps/site` is the static-first professional website.
- `apps/agentic-systems-lab` is the independently deployable evidence application. It is present in this checkout and contains an original reference-scenario explorer plus a bounded, opt-in live review workflow.
- Mission Control is the generally tool- and team-agnostic engineering methodology informing work here. Its current terminology is mapped in the [concept guide](../guides/mission-control-concepts.md).
- Flight Deck is a possible future, opinionated implementation of a Mission Control engineering team, including observability, coordination, and governance. Existing tools could collectively fulfill all of its responsibilities. Its product-specific plans do not govern this repository or replace specialized coding harnesses.
- The site, Lab, Mission Control, and Flight Deck retain distinct purposes. Neither application in this repository is Flight Deck.

## Reconciliation state

Documentation reconciliation is complete under the [reconciliation plan](../RECONCILIATION_PLAN.md), [audit](../reconciliation/mission-control-sync-audit.md), and [independent evaluation](../reconciliation/mission-control-sync-evaluation.md).

- Step 1's investigation-only audit is complete.
- Step 2a established source authority and the Mission Control / Flight Deck concept boundary.
- Step 2b reconciled current repository facts and routed agent contexts to authoritative local documents. It changed no application behavior.
- Step 2c reconciled Lab evidence/product claims, editorial guidance, and unselected implementation options. It changed no application behavior or public copy.
- Human Gate 2 was explicitly approved on 2026-09-25 after the complete repository check and browser suite passed.
- The independent [Step 3 evaluation](../reconciliation/mission-control-sync-evaluation.md) found two material failures: unresolved replay provenance conflicted with the Lab's visitor-facing verification claims, and the retained agent handoff conflicted with the current authorized phase.
- Erik authorized one bounded closure batch. The reference-scenario provenance treatment, agent routing, draft site terminology, and volatile Git-state wording were corrected. The full repository check and both browser suites pass.
- A fresh focused re-evaluation found no remaining material failure. Erik's conditional authorization accepted Human Gate 3 and closed documentation reconciliation.
- Erik approved the proposed Step 4 adoption goal by instructing execution on 2026-10-02. The [repository-native pilot](../../.mission-control/README.md) now contains one Goal Contract, Goal State, and editorial-readiness Loop Contract for M003. Its [State](../../.mission-control/goals/G004-001/state.md) is the live record of rounds, evidence, blockers, and next action.
- Goal Contract `0.1` had a protected ordering defect: it listed Human Landing and the final adoption decision as prerequisites for `candidate-complete`. Erik approved version `0.2`, which places those decisions after candidate transfer while preserving their requirements. A fresh-context evaluation and the retained check passed. Erik then accepted M003 editorially, landed G004-001, and chose to continue the repository-native pattern narrowly. The [Goal State](../../.mission-control/goals/G004-001/state.md) retains the decision and limits.

The repository has one explicit Goal Contract, Goal State, and Loop Contract under `.mission-control/`. It has no Mission Log, normalized event runtime, Flight Deck adapter, or generalized Mission Control service. Historical missions contain useful intent, scope, evidence, and human decisions, but are not silently relabeled as complete implementations of the newer model.

## Website state

**Latest landed website mission:** [M003 — AI & Agentic Engineering](../missions/M003/mission.md), editorially accepted 2026-10-02

**Current checkpoint:** M003 wording accepted; publication and launch readiness remain separate

M001 established the schema-validated Git-backed article path and approved visual foundation. M002 landed the reviewed homepage and Experience page using one curated, schema-validated career record. The homepage connects first-version product ownership, hands-on architectural and organizational leadership, earned complexity, and agentic engineering; Experience retains the detailed career and project accounts. The patent is presented early with co-inventor attribution and a USPTO PDF destination. The raw career sources remain outside the repository and deployment.

M003 adds `/agentic-engineering`, connecting applied-AI experience, current engineering practice, the developing Mission Control methodology, and organizational adoption. Its MDX uses the existing content registry and has one explicit route. Home, primary navigation, and footer link to it. The overview and the original “Verification Over Understanding” article remain visible drafts with `noindex, nofollow`; neither has publication approval.

M003's mission records passing formatting, linting, strict TypeScript, 21 unit/component tests, static build, 12 production browser journeys, and responsive inspection. Erik's later editorial Landing supplies the formerly outstanding human decision. It does not authorize publication or a hosted deployment.

## Agentic Systems Lab state

The Lab was integrated into this checkout by commit `06f1ff5`. It remains independently deployable from the site and uses port 3100 during local development.

- [LAB-M001 — Reference Run Explorer](../missions/LAB-M001/mission.md) is recorded as **Ready for human review**. `/reference` loads the original schema-validated, Git-backed reference scenario through an app-local run contract and renders its steps, artifacts, scenario claims, provenance disclosure, and human-transfer recommendation.
- [LAB-M002 — Bounded Live Review](../missions/LAB-M002/mission.md) is recorded as **Ready for credentialed validation**. `/` accepts a bounded TypeScript diff and `/api/reviews` makes one request-bound OpenAI Responses API call when a server credential and `LAB_LIVE_REVIEW_ENABLED=true` are configured.
- [ADR-008](../architecture/decisions/ADR-008-bounded-openai-responses-runtime.md) governs the live route: no tools, submitted-code execution, repository access, application persistence, or automatic merge/deployment authority. The Lab has no database, authentication, worker, queue, saved run history, or public runtime approval.
- Automated verification and safe unconfigured behavior are recorded in LAB-M002. Its credentialed live provider smoke test remains unchecked. The merge does not complete that validation.

The original reference scenario explicitly discloses that its source execution artifacts are not retained in this checkout. Its contract and interface distinguish scenario claims from repository-verified structure and presentation. This treatment resolves the public-claim conflict without converting the scenario into execution evidence or accepting LAB-M001.

## Application and ownership boundaries

- Both applications now live in the same `main` checkout. Earlier separate-worktree instructions are historical coordination records, not current ownership constraints.
- `apps/site/**` remains the site's independently deployable boundary and local development uses port 3000.
- `apps/agentic-systems-lab/**` remains the Lab's independently deployable boundary and local development uses port 3100.
- Shared root configuration, the lockfile, and `packages/**` are cross-application integration surfaces. Shared code still requires a proven second consumer.
- The professional site does not import the Lab implementation. Public site-to-Lab integration remains a separate product, content, deployment, and evidence decision.

## Decisions established

- Use one pnpm/Turborepo monorepo with independently deployable applications.
- Use strict TypeScript, Next.js App Router, React Server Components by default, Tailwind CSS, Vitest, Testing Library, and Playwright.
- Validate authored and external data once at app-local Zod boundaries and infer TypeScript types from schemas.
- Keep Server Components responsible for coordination; presentational components receive typed, render-ready props and do not fetch.
- Keep the site static-first and content-led. Its no-database/auth/API/worker/AI-runtime defaults remain intact.
- Permit the Lab's narrowly bounded API and OpenAI runtime only under ADR-008 and LAB-M002. Persistence, authentication, background work, repository/tool access, and public enablement require later decisions.
- Preserve independent application deployment and promote only proven cross-app contracts or primitives to shared packages.
- Preserve the approved site typography and visual foundation; final logo, imagery, broader brand identity, and coordinated motion remain deferred.
- Keep the site content paths distinct: MDX for long-form editorial content and curated JSON for career facts. Do not ship the raw career master record.
- Preserve Qmerit/Raiven career continuity and distinguish individual implementation, team delivery, and patent co-invention. Exclude private business details and unsupported metrics.
- Keep draft editorial content visibly labeled and emit `noindex, nofollow` until Erik approves publication. Indexing directives do not make draft routes private.
- Apply Mission Control as a tool- and team-agnostic methodology. Flight Deck is optional product architecture whose old plans must be reconciled against current principles before implementation.
- Git remote `origin` is `https://github.com/eflorida/erik-florida.git`. Ahead/behind state is volatile operational information and must be inspected when needed rather than retained here as product truth.

## Intentionally deferred or unresolved

- Publication decisions for the accepted M003 overview and the separate draft article; the article's own editorial/publication state remains unchanged.
- Canonical résumé/contact links and full career-site launch readiness.
- Canonical domains, production promotion, and current hosted deployment verification.
- Final logo, imagery, broader brand identity, and coordinated motion.
- Public enablement, abuse controls, cost budget, and credentialed smoke validation for the Lab live route.
- Saved/shareable Lab runs, persistence, authentication, workers, code execution, repository ingestion, multiple workflows, and generalized orchestration.
- Public integration between the site and Lab, including the evidence and deployment boundary needed to link them.
- Any future attributable execution evidence for, or replacement of, the original reference scenario. The current provenance disclosure is approved.
- Shared UI/content/domain packages without demonstrated reuse.
- Expansion of the one-goal repository-native pilot, normalized events, adapters, deployment topology, Flight Deck product design, and final portfolio-demo scope. Step 2c records options but adopts none beyond the bounded Step 4 pilot.
- Repository visibility changes and hosted GitHub controls.

## What happens next

1. Read the landed [G004-001 State](../../.mission-control/goals/G004-001/state.md) for Step 4's evidence, human decision, and narrow adoption limit. Scope selected-harness integration for Step 5 separately; this pilot did not prove a need for a harness adapter or authorize Step 6 telemetry.
2. Decide publication and deployment of the accepted M003 overview separately. The article retains its own draft state.
3. Resolve LAB-M001's human-review boundary and run LAB-M002's credentialed smoke test before claiming live-provider validation.
4. Before the full career-site launch, establish canonical résumé/contact links and explicit publication/deployment decisions.
