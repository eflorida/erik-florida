# Flight Deck Product Boundary and Lessons from Macro

## Purpose

This document captures the product conclusions reached after reviewing [Macro](https://macro.com/) and comparing its unified-workspace approach with the emerging Flight Deck concept.

It is a product-boundary and positioning reference, not an implementation plan. Detailed MCP design, integration architecture, data models, and initial product scope remain subjects for later work.

---

## Executive conclusion

Macro provides useful validation for the idea that humans and AI benefit from shared context across communication, documents, tasks, and operational systems. It also demonstrates the adoption difficulty and competitive burden of building an all-in-one company workspace.

Flight Deck should not require an organization to replace Slack, email, documents, issue trackers, or other established systems. It should require buy-in primarily from engineering and provide useful external projections for leadership and other teams.

The clearest current definition is:

> **Flight Deck is the engineering change control plane. It federates context from the tools where work already happens, owns the operational state and governance of change, and publishes that state to engineers, leaders, and external agents.**

Flight Deck is therefore neither:

- a passive aggregation dashboard; nor
- a universal workspace in which all company information must originate.

It sits between those positions. It gathers distributed evidence, constructs an authoritative model of engineering change, governs execution, and makes that model available through human and machine interfaces.

---

## What Macro validates

Macro combines email, channels, documents, tasks, calls, CRM, code, and agents within a shared workspace and data model. Several aspects reinforce Flight Deck's direction:

- AI becomes substantially more useful when it can operate against shared organizational context.
- Purpose-built objects are stronger than treating every kind of work as an undifferentiated page or chat.
- Bidirectional relationships between messages, documents, tasks, calls, code, and agents improve traceability.
- A consistent search and permissions layer reduces the burden of reconstructing context across disconnected systems.
- Agents should be able to create or update durable work products rather than leave useful output trapped in chat.
- Existing coding agents should be able to access organizational context through a machine interface such as MCP.
- Fast, keyboard-oriented, multi-pane interaction is appropriate for technical users doing deep work.

Macro is strong evidence that shared context is valuable. It is not evidence that Flight Deck should reproduce Macro's scope.

---

## The adoption problem Flight Deck should avoid

Macro's maximum value appears to depend on a company moving substantial portions of email, chat, documents, tasks, calls, CRM, and agent interaction into Macro. That creates a significant change-management problem.

Such a transition may be possible in a new or very small startup. It becomes progressively harder when an organization already has established systems, permissions, communication norms, compliance requirements, and years of accumulated information.

Flight Deck should have a much smaller adoption boundary:

- Engineering is the primary adopting organization.
- Other functions do not need to replace their existing tools.
- Leadership and partner teams can consume status without participating in Flight Deck's internal engineering workflow.
- Useful value should emerge from connecting existing engineering systems before requiring major process changes.
- Adoption should be progressive rather than an all-at-once migration.

The product should be capable of entering an established company rather than depending on a clean organizational slate.

---

## The system boundary

### Existing tools remain systems of origin

| System | Continues to own |
| --- | --- |
| GitHub or another source host | Code, commits, branches, pull requests, and code review |
| Linear, Jira, or another issue tracker | General backlog and issue-management workflows |
| Slack or Teams | Human conversation and informal coordination |
| Notion, Google Docs, or similar tools | General documents and collaborative writing |
| CI/CD systems | Builds, tests, deployments, and delivery events |
| Observability systems | Runtime telemetry, incidents, and operational signals |
| Email | External and organizational communication |

Flight Deck should not duplicate these capabilities merely to claim that everything happens inside one application.

### Flight Deck becomes authoritative for governed engineering change

Flight Deck should own the information and state that existing systems do not adequately represent together:

- change intent: why a change exists and what outcome is expected;
- mission identity and mission state;
- the loops applicable to a mission and the current state of each loop;
- artifacts produced or consumed by those loops;
- evidence requirements and collected evidence;
- evaluation results;
- transfer readiness and transfer history;
- approval requirements and autonomy policy;
- risks, contradictions, blockers, and unresolved questions;
- re-entry caused by new evidence or failed evaluation;
- landing status and post-landing verification;
- the provenance and relationships connecting all of the above.

For example:

- Slack may contain a conversation that changes a requirement. Flight Deck owns the resulting normalized requirement state and retains the conversation as evidence.
- GitHub owns the pull request. Flight Deck owns what the pull request means within the mission, which intent it implements, which evaluations apply, and whether sufficient evidence exists to transfer or land.
- CI owns the test run. Flight Deck records that run as evidence, interprets it against mission policy, and determines its effect on mission state.
- A document system may hold the original specification. Flight Deck retains its relationship to the mission and may own mission-specific requirements, decisions, or plans derived from it.

This makes Flight Deck a **system of governed and derived truth** rather than the source of every raw event.

---

## A control-plane model

A useful analogy is an infrastructure control plane.

The control plane does not create application code, container images, or monitoring data. It owns desired state, observes actual state, applies policy, and coordinates reconciliation.

Similarly, Flight Deck should:

1. Receive change intent and policy.
2. Observe evidence and activity from connected systems.
3. Maintain an explicit representation of current mission state.
4. Determine which work or evaluation is required next.
5. Permit or prevent transfers according to policy and evidence.
6. Route execution to humans or autonomous systems behind stable loop contracts.
7. Re-enter prior loops when new evidence invalidates current understanding.
8. Preserve the mission log and verified landing outcome.

This is more consequential than a hub that merely places several feeds on one screen.

---

## Product interaction principle

The working boundary can be summarized as:

> **Read where information originates. Own what must be governed. Publish where people already work.**

### Read where information originates

Flight Deck should connect to the systems already used by engineering and selectively ingest, index, reference, or observe relevant information.

### Own what must be governed

Flight Deck should persist mission state, loop state, artifacts, evidence relationships, policies, approvals, transfers, and other objects whose lifecycle is necessary for trustworthy execution.

### Publish where people already work

Flight Deck should send useful outputs back into established workflows when appropriate:

- status updates in Slack or Teams;
- links and checks in GitHub;
- task changes in Linear or Jira;
- leadership summaries through email;
- stable external status views;
- machine-readable context for coding and operational agents.

This approach reduces application switching without requiring an organization-wide migration.

---

## Progressive adoption

Flight Deck should support adoption in increasingly consequential layers.

### 1. Connect and observe

Connect repositories, issue tracking, CI, and selected communication or document sources. Flight Deck constructs feature or mission context, provides catch-up, and produces better status views without immediately changing engineering workflows.

### 2. Structure important changes

Engineering begins representing larger features, migrations, incidents, infrastructure changes, or risky work as missions. Small and routine work can continue through normal issue and pull-request systems.

### 3. Govern execution

Teams introduce loop contracts, evidence requirements, evaluation policy, transfers, approval rules, and progressive autonomy.

### 4. Delegate bounded work

Humans and autonomous systems become interchangeable executors behind stable loop contracts. Autonomy expands per loop as verification and organizational trust improve.

### 5. Expose useful projections

Leadership, product, support, customers, and other stakeholders receive views appropriate to their needs without being required to operate inside Flight Deck.

This permits Flight Deck to prove value before asking engineering to reorganize all of its work around the product.

---

## External views are projections, not separate workspaces

Leadership and adjacent teams often need answers such as:

- What is the status of this feature?
- What changed this week?
- What is blocked?
- What decisions have been made?
- What is the expected landing date?
- What requires leadership attention?

Flight Deck should provide stable, current answers derived from internal engineering state. These views may be shareable pages, reports, messages, or APIs.

They should not require external stakeholders to understand internal loop mechanics, inspect raw agent execution, or move their normal collaboration into Flight Deck.

External visibility is a projection of the engineering control plane, not an attempt to turn Flight Deck into a company-wide communication system.

---

## Durable artifacts and external content

The principle that useful AI outcomes should become durable artifacts remains valid, but Flight Deck does not need to physically own every document.

Three forms of durable content may coexist:

1. **Flight Deck-native objects**

   Mission intent, requirements, decisions, plans, evidence records, evaluations, approvals, transfers, risks, and mission state may live directly in Flight Deck when their lifecycle is part of governed execution.

2. **Externally housed artifacts**

   Specifications, design files, issue records, pull requests, and other materials may remain in their specialist systems while Flight Deck stores their identity, relationships, provenance, relevant metadata, and current role within the mission.

3. **Snapshots or extracted representations**

   When reproducibility, auditability, or change detection requires it, Flight Deck may retain a versioned snapshot, structured extraction, or content hash while preserving the original source relationship.

The governing question is not simply where a document is stored. It is whether Flight Deck can reliably understand its role in the mission and preserve the evidence necessary to explain current state.

---

## MCP and external agent access

Detailed MCP design is intentionally deferred, but this discussion establishes it as a foundational product requirement rather than a later integration convenience.

Flight Deck should be consumable through multiple first-class interfaces:

- the Flight Deck user interface;
- an application API;
- an MCP server for compatible agents;
- event ingestion and webhooks;
- status views and reports;
- integrations embedded in GitHub, Slack, issue trackers, and other systems.

A representative workflow is:

> "Go to Flight Deck, find this feature, gather its requirements, relevant decisions, documents, conversations, and implementation constraints, and prepare an implementation plan."

An engineer working in Cursor, Codex, Claude Code, or another agent environment should be able to request that context without individually querying every source system and reconstructing its relationships.

Flight Deck should provide a coherent, permission-filtered mission context package containing, as appropriate:

- current mission state;
- change intent;
- requirements and decisions;
- relevant artifacts and evidence;
- source links and provenance;
- current risks and unresolved questions;
- applicable policies and constraints;
- recent state changes;
- permitted next actions.

The external agent may then produce a draft plan or other artifact and attach it to the mission. Flight Deck remains responsible for applying permissions, evidence requirements, approval policy, and transfer rules.

This preserves a clean responsibility boundary:

- the coding agent performs engineering work;
- GitHub holds the code;
- communication systems hold conversation;
- Flight Deck knows what the work means, what state it is in, and what is allowed to happen next.

Important subjects for the later MCP discussion include authorization, user versus service identity, read and write tool boundaries, context packaging, provenance, least privilege, agent attribution, approval requirements, and protection against an external agent bypassing loop policy.

---

## Product lessons to borrow from Macro

Flight Deck should consider adopting or adapting:

- purpose-built domain objects rather than an infinitely generic page model;
- bidirectional references and visible backlinks;
- a universal way to reference exact context for humans and agents;
- one permissions model across user and agent access;
- unified search across native and connected information;
- embedded agent actions within the relevant mission context;
- fast keyboard navigation, previews, and side-by-side work surfaces;
- easy promotion of raw activity into durable objects;
- integration access for external coding agents;
- product language emphasizing shared context between teams and agents.

---

## Product choices not to inherit from Macro

Flight Deck should deliberately avoid:

- requiring organization-wide replacement of email, chat, documents, tasks, calls, and CRM;
- using a unified inbox or unread stream as the dominant information architecture;
- treating broad, opaque team memory as the source of truth;
- preserving AI chats as the principal durable record of work;
- relying only on inherited user permissions as the safety model for autonomous action;
- representing agents as independently trusted teammates without system-level policy and evidence controls;
- expanding into generic office-suite features that do not strengthen engineering execution.

Flight Deck's primary experience should answer:

> **What engineering change is in flight, what is currently true, what evidence supports that understanding, and what requires intervention?**

---

## Refined relationship among the Mission Control concepts

- **Mission Control** is the organizational operating model for engineering.
- **Autonomous Flight** is the execution and control model.
- **Flight Deck** is the product surface and control plane through which humans and autonomous systems observe, govern, and participate in execution.
- **Connected systems** remain the specialist tools in which code, communication, tasks, documents, delivery activity, and telemetry originate.
- **External views and machine interfaces** publish the relevant engineering state to stakeholders and agents without requiring them to adopt the complete Flight Deck workflow.

---

## Refined positioning

The broad statement "one workspace where humans and AI share context" is no longer sufficiently differentiated. Macro already occupies much of that territory.

A stronger statement for Flight Deck is:

> **Flight Deck is the control plane where engineering teams and autonomous systems move change from intent to verified landing. It connects the tools where work happens, governs the loops that execute it, and preserves the artifacts and evidence that make progress trustworthy.**

An adoption-oriented variation is:

> **Flight Deck gives engineering one governed view of change across the tools the team already uses—then makes that state accessible to leadership, connected systems, and external agents.**

---

## Open questions retained for later work

- What is the smallest useful Flight Deck mission that can be derived primarily from existing systems?
- Which objects must be Flight Deck-native in the initial product?
- Which integrations form the strongest initial wedge?
- How should a mission be created and associated with existing issues, conversations, documents, and pull requests?
- What state may be inferred automatically, and what must be explicitly promoted or approved?
- How should Flight Deck detect conflicts between external sources and its current derived state?
- What external status views are valuable enough to support early adoption?
- What is the correct authorization and policy model for MCP clients and other external agents?
- How can the product provide individual or single-team value before becoming an engineering-wide control plane?

---

## Macro references

- [Macro homepage](https://macro.com/)
- [Macro open-source repository and product architecture](https://github.com/macro-inc/macro)
- [Macro blocks](https://docs.macro.com/concepts/blocks)
- [Macro mentions and bidirectional references](https://docs.macro.com/concepts/mentions)
- [Macro unified memory](https://docs.macro.com/product/unified-memory)
- [Macro agents](https://docs.macro.com/product/agents)
- [Macro unified inbox](https://docs.macro.com/product/inbox)
- [Macro agent recipes](https://docs.macro.com/AI/recipes)
