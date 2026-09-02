# Career Website — Build Plan and Technical Architecture

**Status:** Build-ready v1 plan  
**Primary goal:** Create a credible, evidence-rich career website that supports immediate applications for engineering leadership roles while demonstrating technical depth, AI/agentic leadership, product judgment, and hands-on engineering credibility.  
**Explicitly out of scope for this document:** the detailed design of the interactive agentic / Mission Control demo application. This plan reserves a place and technical seam for that experience, but it should be designed separately.

---

## 1. Product goal

This site is not a conventional online résumé and should not become an open-ended portfolio project.

Its job is to help a hiring manager answer three questions quickly:

1. **Who is Erik as an engineering leader?**
2. **What evidence supports the claims on the résumé?**
3. **Why is his experience particularly relevant to engineering organizations adapting to AI and agentic software development?**

The site should provide progressively deeper evidence:

- **30-second scan:** positioning, current scope, strongest differentiators.
- **3–5 minute review:** selected leadership stories, AI/agentic work, technical perspective, patent, career progression.
- **15+ minute deep dive:** Mission Control methodology, detailed case studies, architecture thinking, diagrams, technical writing, and eventually the interactive agentic demo.

The site should make a hiring manager more confident, not require them to consume everything.

---

## 2. Positioning

### Core positioning statement

> Engineering leader and hands-on technical architect focused on building high-performing teams, modern software systems, and AI-native engineering workflows.

The wording can evolve, but the positioning should consistently combine:

- Engineering leadership
- Technical architecture
- AI / agentic software development
- Developer experience and SDLC transformation
- Product delivery
- Hands-on credibility

Avoid positioning primarily as:

- a front-end specialist,
- a generic engineering manager,
- an “AI enthusiast,”
- or an individual-contributor portfolio developer.

The site should show that front-end and product engineering are part of a broader technical career, not the ceiling of it.

---

## 3. Primary audiences

### A. Hiring manager / VP Engineering / CTO

Likely questions:

- Can this person lead a team and still make strong technical decisions?
- Has he actually implemented AI-driven engineering practices?
- Can he improve how the organization ships software?
- Can he work across product, architecture, people, and process?
- Is he operating at Head of Engineering / senior engineering leadership level?

### B. Recruiter

Needs fast, obvious signals:

- role fit,
- years and progression,
- leadership scope,
- technical stack,
- AI experience,
- location / remote preference if included,
- résumé download,
- LinkedIn.

### C. Senior engineer / technical interviewer

Likely to inspect:

- architecture thinking,
- implementation credibility,
- opinions and tradeoffs,
- agentic SDLC methodology,
- code / public repos,
- demo architecture,
- written technical material.

### D. Founder / startup executive

Likely looking for:

- builder mentality,
- 0→1 capability,
- pragmatism,
- ability to create systems rather than bureaucracy,
- AI leverage,
- ability to lead small teams with high output.

---

## 4. Site principles

### 4.1 Evidence over claims

Do not say only:

> “I lead AI transformation.”

Show:

- a methodology,
- diagrams,
- specific process changes,
- technical artifacts,
- examples of evaluation and guardrails,
- a patent,
- public code or demos,
- clear before/after descriptions when safe to publish.

### 4.2 Progressive disclosure

The homepage should be concise. Deep material belongs behind links.

A hiring manager should never need to read a 2,000-word page to understand the value proposition.

### 4.3 Public-safe by design

The site must never expose employer-confidential information.

For every case study or artifact, distinguish among:

- public information,
- generalized experience,
- reconstructed/synthetic examples,
- personal methodology,
- open-source/demo code.

When using experience from current or former employers, describe architecture and process at an appropriate abstraction level unless the detail is already public.

### 4.4 Opinionated, not dogmatic

The site should show clear technical beliefs and decision criteria.

Preferred pattern:

> “This is the default I favor, and this is the trigger that would make me choose something else.”

This mirrors the existing architecture methodology: defaults plus explicit escalation triggers.

### 4.5 The site itself is evidence

The implementation should reflect the engineering standards being described:

- strict TypeScript,
- clear contracts,
- accessibility,
- strong performance,
- simple architecture,
- high-quality content structure,
- test coverage,
- agent-friendly repo documentation,
- deterministic builds,
- clean observability.

### 4.6 Shipping beats completeness

The website is a job-search tool, not a prerequisite that can expand indefinitely.

**Launch v1 as soon as the core pages are credible.**

After v1:

> No additional website work is allowed to become a prerequisite for submitting an application.

---

# 5. Information architecture

Recommended top-level navigation:

- **Home**
- **Experience**
- **AI & Agentic Engineering**
- **Mission Control**
- **Selected Work**
- **Writing / Notes**
- **About**
- **Résumé**

The exact labels can be simplified in the visual design, but the underlying content model should support these areas.

---

# 6. Page-by-page plan

## 6.1 Home

### Goal

Communicate the complete positioning in less than 30 seconds and direct different audiences toward the most relevant evidence.

### Hero

Include:

- Name
- Current identity / positioning
- 1–2 sentence summary
- Primary CTA: **View Experience**
- Secondary CTA: **How I Build with AI**
- Tertiary utility link: **Résumé**

Example direction:

> **Engineering leadership for the agentic era**  
> I lead teams, architecture, and software delivery with a focus on AI-native development, strong developer experience, and pragmatic product execution.

Do not over-polish the copy before implementation; structure matters first.

### Credibility strip

A compact set of proof points, such as:

- Engineering leadership
- Technical lead → engineering manager progression
- AI-integrated SDLC
- U.S. patent co-inventor
- React / Next.js / Node / TypeScript
- Enterprise + startup experience

Avoid “badge soup.” These should read as concise evidence.

### Featured evidence

Three or four large editorial cards:

1. **Mission Control**
   - “An operating model for agentic software engineering.”
2. **AI-Native Engineering**
   - How agents, architecture, documentation, evaluation, and human judgment fit together.
3. **Leadership & Delivery**
   - How teams are structured and how technical quality and product execution reinforce each other.
4. **Agentic Systems Lab**
   - Placeholder / coming later until the demo is ready.

### Selected career highlights

A concise timeline or 3–5 highlighted transitions:

- building automation / GUI engineering,
- freelance / product engineering,
- Macy’s technical leadership,
- B2B procurement,
- technical lead,
- software engineering manager,
- AI/agentic engineering transformation.

The purpose is to demonstrate breadth and progression, not recreate LinkedIn.

### Footer / contact

- LinkedIn
- GitHub if public work is available
- Email
- Résumé
- Optional location

---

## 6.2 Experience

### Goal

Turn a résumé chronology into evidence of increasing scope and leadership.

### Structure

Use a narrative timeline with each major career chapter.

Each role should contain:

**Role / company / dates**

**Scope**

- team / product / technical responsibility

**What changed because I was there**

- architectural modernization,
- platform work,
- team growth,
- development standards,
- product improvements,
- AI adoption,
- developer-experience improvements.

**Technical context**

- only the most relevant technologies and architectural concerns.

**Leadership evidence**

- hiring,
- mentoring,
- process,
- technical decision-making,
- cross-functional collaboration,
- distributed teams where appropriate.

### Important editorial rule

Older roles need less detail.

The page should increasingly focus on the most recent 7–10 years, with earlier experience establishing breadth and longevity.

### Public-safety rule

Do not publish proprietary metrics, internal architecture, customer information, private product roadmaps, or non-public organizational details.

Use generalized descriptions where needed.

---

## 6.3 AI & Agentic Engineering

### Goal

Establish that AI is not an isolated side interest; it is part of product engineering, developer experience, architecture, and organizational design.

This should be one of the site's strongest pages.

### Suggested sections

#### A. My evolution with AI

A concise chronology:

- AI inside products
- API-based LLM integration
- model experimentation / custom model or labeling workflows where publishable
- AI-assisted engineering
- agent-driven implementation
- agentic review / verification
- redesigning software-development processes around agents

#### B. What changes when agents write most of the code

Introduce the core principles already developed:

- verification over understanding,
- guardrails over guidance,
- the codebase as prompt,
- feedback loops as the agent's senses,
- durable artifacts over ephemeral conversational state,
- one blessed path over many competing patterns,
- humans concentrated on specification and judgment.

#### C. Architecture for agentic development

Link to deeper architecture notes.

Use one clear diagram showing:

```text
Intent / Acceptance Criteria
        ↓
Durable Plan + Context
        ↓
Agent Implementation
        ↓
Types / Lint / Tests / Policy
        ↓
Evaluation + Review
        ↓
Verified Artifact
```

This should not duplicate the full Mission Control methodology.

#### D. AI product experience

Describe public-safe examples of AI-powered product engineering.

Include the patent as a major credibility artifact:

**U.S. Patent 12,327,222 B2**  
_System and Method Providing an Improved, Automated Procurement System Using Artificial Intelligence_

Explain the relevance in plain language:

- automated product identification,
- normalization,
- supplier search,
- recommendation/ranking,
- organization-specific rules,
- ML-assisted cross-referencing,
- automated procurement workflow.

Link to the public patent or an internal site summary.

#### E. What I would bring into a new organization

This should read like an executive-level implementation philosophy rather than a wishlist:

- map current delivery loops,
- identify agent-ready work,
- improve context and architecture,
- create verification surfaces,
- move deterministic policy out of prompts,
- establish observability and evaluation,
- increase autonomy as evidence and controls improve.

Link to **Mission Control** for the full operating model.

---

## 6.4 Mission Control

### Goal

Publish the full methodology the user wants to implement in a future engineering organization.

This is not a software-product sales page.

It is an engineering leadership / operating-model document.

### Recommended structure

#### 1. The problem

Human-centric SDLC tooling and process becomes a bottleneck when implementation can operate at machine speed.

Explain the mismatch:

- agents create parallel work,
- review becomes the bottleneck,
- context becomes infrastructure,
- CI / evaluation throughput becomes critical,
- chat is not durable organizational state,
- traditional workflow boards can show activity without showing verified state.

#### 2. The Mission Control thesis

Define Mission Control as an operating model for moving work from intent to verified landing.

Core loop:

```text
Input
  ↓
Work
  ↓
Evaluate
  ↓
Artifact + Evidence
  ↓
Policy-Controlled Transfer
```

Possible outcomes:

- complete,
- return / revise,
- reject,
- escalate,
- re-enter another loop.

#### 3. Core primitives

Explain:

- work loops,
- artifacts,
- evidence,
- evaluation,
- policy,
- gates,
- telemetry,
- state,
- re-entry.

#### 4. Humans and agents

The important distinction should not be:

> human task vs AI task

The system should support different executors behind stable work contracts.

Autonomy should be governed by:

- risk,
- permissions,
- evidence quality,
- evaluation confidence,
- reversibility,
- auditability,
- policy.

#### 5. Durable artifacts vs ephemeral execution

Strongly emphasize this distinction.

Durable:

- requirements,
- decisions,
- plans,
- code,
- test evidence,
- release evidence,
- support assessments,
- accepted outputs.

Ephemeral / telemetry:

- agent reasoning traces,
- intermediate prompts,
- temporary branches,
- retries,
- token-level execution detail.

The organization should understand work from durable state, not replay the agent's entire activity stream.

#### 6. Example engineering loops

Do not try to define every loop in v1.

Show 2–3:

**Feature Delivery**

```text
Intent → Specification → Architecture → Implementation
→ Verification → Review → Release
```

**Production Support**

```text
Signal → Triage → Support Assessment → Evaluation
→ Risk / Autonomy Decision → Fix / Escalation → Verification
```

**Research / Product Discovery**

```text
Question → Research → Evidence → Synthesis
→ Evaluation → Decision Artifact
```

#### 7. Flight Deck / control plane

Briefly explain that a Mission Control operating model benefits from a control plane that makes work, evidence, risks, gates, and outcomes visible.

Do not make the methodology dependent on a specific future software product.

#### 8. From methodology to implementation

Connect to:

- agentic architecture,
- durable planning docs,
- evals,
- observability,
- policy,
- repo context,
- automated guardrails,
- the future Agentic Systems Lab.

---

## 6.5 Selected Work

### Goal

Show a small number of substantial proof points.

This is not a gallery of everything ever built.

### Recommended categories

#### A. Agentic Systems Lab

Reserved for the future demo.

The card can remain hidden until a useful version exists.

#### B. Patent / AI procurement

Create a polished summary page:

- problem,
- conceptual system,
- your role as co-inventor,
- key AI / automation concepts,
- public patent link,
- selected diagrams redrawn or linked if legally/publicly appropriate.

Do not imply every patented component was personally implemented by one inventor.

#### C. Architecture reference

Publish a condensed and editorialized version of the current agentic-first TypeScript architecture methodology.

Possible title:

> **A TypeScript Architecture for Agent-First Teams**

Topics:

- stable seams,
- schema contracts,
- RSC-first data,
- verification,
- dependency boundaries,
- queue/work seam,
- deterministic environments,
- golden path,
- ADRs,
- explicit escalation triggers.

#### D. One or two historical engineering case studies

Choose examples that demonstrate different strengths.

Potential themes:

- major modernization / migration,
- building a platform foundation,
- 0→1 product architecture,
- engineering-process transformation.

Only include if the public-safe story is strong enough.

---

## 6.6 Writing / Notes

### Goal

Provide a durable place for technical positions without creating an obligation to become a blogger.

Use “Notes,” “Essays,” or “Writing” rather than “Blog” if avoiding cadence expectations.

### Initial content can be adapted from existing material

Potential first articles:

1. **Verification Over Understanding**
2. **The Codebase Is the Prompt**
3. **Why Agentic Engineering Changes the SDLC**
4. **Guardrails Over Guidance**
5. **Artifacts, Evidence, and Durable State**
6. **Why CI Throughput Matters More in an Agentic Team**
7. **Architecture Should State Its Escalation Triggers**
8. **Mission Control: Engineering Work as Observable Loops**

Short, strong pieces are better than a large quantity.

---

## 6.7 About

### Goal

Humanize the site without weakening the professional signal.

Include:

- career summary,
- builder / product orientation,
- combination of design, UX, software, architecture, and leadership,
- preference for remaining technically involved,
- interest in creating high-output engineering environments.

Avoid a long autobiography.

An optional brief paragraph can explain that the breadth of the career—from user-interface design through platform engineering to engineering leadership—is intentional and informs current leadership style.

---

## 6.8 Résumé

Provide:

- embedded web résumé,
- PDF download,
- LinkedIn link.

The web version can be more readable than the PDF but should not diverge materially.

The PDF remains the canonical application artifact.

---

# 7. Cross-site content model

Use structured content rather than burying everything in page components.

Recommended content types:

```ts
type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  status: "published" | "draft";
  featured: boolean;
  tags: string[];
  period?: string;
  role?: string;
  evidence: EvidenceRef[];
  body: MDXContent;
};

type Article = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  body: MDXContent;
};

type Experience = {
  company: string;
  role: string;
  start: string;
  end?: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
};

type EvidenceRef = {
  type: "patent" | "repo" | "document" | "diagram" | "public-link" | "demo";
  label: string;
  href?: string;
  description?: string;
};
```

Do not over-model v1. These types are illustrative boundaries, not a requirement to build a CMS.

---

# 8. Visual and interaction direction

## 8.1 General character

The site should feel:

- technical,
- editorial,
- calm,
- high-signal,
- contemporary,
- intentionally designed.

Avoid:

- loud “AI” visual tropes,
- glowing gradients everywhere,
- circuit-board graphics,
- animated neural networks,
- portfolio-template aesthetics,
- excessive cards,
- dashboard styling for normal editorial content.

The site should resemble a thoughtful engineering leader's publication more than a design-agency portfolio.

## 8.2 Typography

Prioritize readability.

Suggested hierarchy:

- strong editorial display type for major headings,
- highly readable sans-serif for body and interface,
- monospace sparingly for code / system diagrams / labels.

## 8.3 Diagrams

Diagrams are central evidence.

Use a consistent visual language for:

- system flows,
- architecture,
- Mission Control loops,
- human/agent gates,
- data / control boundaries.

Prefer custom SVG or HTML/CSS diagrams over screenshots from whiteboarding tools.

Diagrams must:

- work in light/dark mode if both are supported,
- have text equivalents or accessible descriptions,
- remain legible on mobile,
- use semantic labels instead of decorative complexity.

## 8.4 Motion

Use only where it improves comprehension.

Good:

- subtle transitions,
- diagram step highlighting,
- expandable evidence,
- trace/flow animations in the future agentic demo.

Avoid:

- scroll-jacking,
- continuous decorative animation,
- parallax,
- dramatic page transitions.

---

# 9. Technical architecture

This architecture intentionally follows the existing agentic-first architecture principles while remaining proportional to a personal career site.

## 9.1 Repository strategy

Use a monorepo now because:

- the future agentic demo will likely become a distinct application or service boundary,
- shared content/contracts can remain stable,
- agent coding tools benefit from full-system context,
- future apps/packages remain additive.

Recommended layout:

```text
career-site/
├── AGENTS.md
├── apps/
│   └── web/
│       ├── AGENTS.md
│       ├── public/
│       └── src/
│           ├── app/
│           ├── components/
│           ├── features/
│           ├── server/
│           └── styles/
├── packages/
│   ├── contracts/
│   ├── content/
│   ├── ui/
│   └── config/
├── docs/
│   ├── architecture.md
│   ├── content-plan.md
│   ├── adr/
│   └── plans/
├── pnpm-workspace.yaml
└── turbo.json
```

Reserve future additions without creating them now:

```text
apps/
  agentic-lab/       # only if separation from web becomes useful
packages/
  ai/                # Mastra agents/workflows/evals later
  observability/     # only if needed
```

Do not add these until the demo design establishes a real need.

---

## 9.2 Stack

### Language

**TypeScript with maximum practical strictness**

Enable:

- `strict`
- `noUncheckedIndexedAccess`
- exhaustive handling where appropriate.

### Framework

**Next.js App Router**

Use Server Components by default.

Most site content should render on the server with no client JavaScript beyond navigation and isolated interactions.

### Styling

**Tailwind CSS v4 + owned components**

Prefer simple, owned primitives rather than a heavy design-system dependency.

Use CSS variables for design tokens:

- background,
- foreground,
- muted text,
- borders,
- accent,
- surface levels,
- diagram series colors if needed.

### Content

**MDX / file-backed content in Git**

Reasons:

- version controlled,
- agent-editable,
- reviewable,
- portable,
- no CMS complexity,
- content and code evolve together.

Use frontmatter plus schema validation.

Potential tooling:

- MDX through the standard Next-compatible pipeline,
- Zod validation for frontmatter,
- custom components for callouts, diagrams, evidence, and code.

Do not add a headless CMS unless publishing frequency or non-technical contributors create a real need.

### Database

**None for v1.**

The public career site does not need Postgres merely because the broader architecture reference prefers Postgres for applications with state.

Escalation trigger:

Add persisted storage only when a feature actually requires it—for example, saved/public agentic runs, user-created artifacts, or private analytics that cannot be handled elsewhere.

### Authentication

**None for v1.**

The public site should not create accounts.

### API

**None for v1.**

Use static/server-rendered pages.

Add route handlers only for concrete needs.

### Background worker

**None for v1.**

Add a worker only when work must outlive a web request.

The future agentic demo may trigger this decision.

---

# 10. Architectural seams

Preserve the same fundamental philosophy as the existing architecture reference without creating unnecessary machinery.

## 10.1 Content/schema seam

`packages/contracts`

Zod schemas for:

- article metadata,
- case-study metadata,
- experience,
- evidence references,
- future agentic-demo public run summaries.

Content is parsed once at ingestion.

Do not hand-maintain parallel TypeScript interfaces.

## 10.2 Rendering seam

Components in `packages/ui` or pure web feature components should primarily be pure renderers:

```text
validated content → typed props → rendered UI
```

Avoid data fetching inside presentational components.

## 10.3 Data/content seam

For v1, the “data layer” is a content-access layer rather than a database DAL.

Example:

```text
MDX files
  ↓
content loader
  ↓
frontmatter/schema validation
  ↓
view model
  ↓
Server Component
  ↓
renderer
```

Pages should not directly parse filesystem data ad hoc.

This allows future content sources to change without rewriting page components.

## 10.4 Work seam

Do not implement yet.

Reserve a clean package boundary for future agentic work:

```ts
runWorkflow(input): Promise<WorkflowResult>
```

The actual contract will be designed with the demo.

The website should consume public workflow state through an explicit interface rather than importing Mastra internals throughout UI code.

---

# 11. Rendering and caching

The content site is a strong candidate for static generation.

Recommended posture:

- static/pre-rendered editorial pages,
- explicit revalidation only where needed,
- minimal dynamic server work,
- no client fetching for initial content,
- no global client-state library.

Do not introduce TanStack Query, Zustand, or similar tools until an interaction specifically requires them.

The future agentic demo can use a different rendering profile inside its own route/app boundary.

---

# 12. Agent-friendly repository design

This site should itself demonstrate agent-first development discipline.

## 12.1 Root `AGENTS.md`

Keep under one page.

Include:

- install command,
- dev command,
- test command,
- build command,
- formatting command,
- architecture rules,
- content location,
- golden-path feature,
- explicit forbidden patterns.

Example hard rules:

- schemas remain framework independent,
- pages do not parse raw content,
- presentational components do not fetch,
- no dependency added without rationale,
- no confidential employer details,
- accessibility is required,
- update docs with architecture changes.

## 12.2 Golden path

Create one exemplary content type end-to-end.

For example:

**Mission Control article**

```text
schema
→ MDX file
→ content loader
→ page
→ renderer components
→ metadata
→ tests
```

Mark it as the reference implementation.

Future Codex/agent sessions should copy this pattern.

## 12.3 ADRs

Seed with concise decisions:

- ADR-001: Next.js App Router
- ADR-002: Git-backed MDX instead of CMS
- ADR-003: Monorepo for future agentic-demo expansion
- ADR-004: Static-first public site
- ADR-005: No database until persistent product state exists
- ADR-006: Strict public-evidence / confidentiality boundary

Each ADR:

- context,
- decision,
- consequence,
- trigger to revisit.

## 12.4 Durable plans

Use:

```text
docs/plans/<slug>.md
```

for multi-session work.

Each plan:

- goal,
- current state,
- implementation steps,
- done,
- remaining,
- decisions,
- open questions.

Do not rely on chat history as implementation state.

---

# 13. Quality strategy

## 13.1 Static checks

Every PR / change:

- TypeScript
- ESLint
- formatting
- content-schema validation
- link validation where practical.

## 13.2 Unit tests

Use Vitest for:

- content loaders,
- frontmatter parsing,
- view-model transforms,
- utilities,
- metadata generation where custom.

## 13.3 Component tests

Use Testing Library selectively for:

- navigation,
- interactive evidence disclosure,
- complex diagrams if they have interaction,
- accessibility-sensitive components.

Do not test trivial static markup merely for coverage.

## 13.4 End-to-end

Use Playwright.

Core smoke tests:

1. homepage renders,
2. primary navigation works,
3. Mission Control page opens,
4. article/case-study routing works,
5. résumé download exists,
6. no broken critical links,
7. mobile navigation works.

## 13.5 Accessibility

Target WCAG 2.2 AA practices.

At minimum:

- semantic headings,
- keyboard navigation,
- visible focus,
- proper landmarks,
- adequate contrast,
- reduced-motion support,
- diagram descriptions,
- no information conveyed by color alone,
- accessible external-link behavior.

---

# 14. Performance requirements

A career site should be exceptionally fast.

Targets:

- near-zero unnecessary client JavaScript,
- optimized local/static fonts,
- responsive images,
- SVG for diagrams,
- no giant animation libraries,
- no heavy analytics bundle,
- good Core Web Vitals,
- pages useful before hydration.

Run Lighthouse periodically, but do not optimize vanity scores at the expense of useful content.

---

# 15. SEO and machine readability

This site should work for both humans and automated systems.

## 15.1 Metadata

Every substantial page:

- unique title,
- description,
- canonical URL,
- Open Graph metadata,
- social preview image where useful.

## 15.2 Structured data

Use appropriate Schema.org JSON-LD:

- `Person`
- `WebSite`
- `Article`
- `CreativeWork`
- possibly `ProfilePage`.

Do not invent ratings, credentials, or other unsupported structured claims.

## 15.3 Semantic content

Use real HTML structure.

Do not bury key professional information inside canvas, images, or client-render-only interfaces.

AI search / recruiter tooling should be able to understand:

- who the person is,
- current professional identity,
- skills,
- experience,
- public work,
- articles,
- patent.

## 15.4 `llms.txt`

Consider adding a small public `llms.txt` later if it becomes a useful convention, but do not make it an MVP blocker.

---

# 16. Analytics and observability

Keep analytics lightweight and privacy-conscious.

Useful questions:

- Which pages are viewed?
- Do visitors reach Mission Control?
- Do they open case studies?
- Do they download the résumé?
- Are referral sources visible?
- How long do deep technical pages retain attention?

Potential options can be chosen during implementation.

Do not add invasive tracking simply because it is available.

Technical observability for v1:

- hosting/platform request logs,
- error tracking if useful,
- build failures,
- broken link checks.

The future agentic demo will require substantially richer traces/evals/observability; do not prematurely build that system into the content site.

---

# 17. Security and privacy

Even a static career site needs basic discipline.

- No secrets in public environment variables.
- No employer-confidential documents committed to the repo.
- No hidden “private” content shipped in the client bundle.
- No personal phone number unless intentionally public.
- Avoid exposing home address or precise location.
- Sanitize/limit any future user-generated content.
- Use dependency scanning in CI if convenient.
- Keep dependencies minimal.

---

# 18. Content evidence and confidentiality policy

Create a small checklist used before publishing any work-derived content.

For each claim/artifact ask:

### Is it public?

If yes, cite/link it.

### Is it mine to publish?

Public existence does not automatically mean internal implementation details are publishable.

### Does it expose employer IP?

If uncertain, generalize.

### Is the example necessary?

Prefer synthetic examples when the methodology is the important part.

### Is attribution accurate?

Particularly for patents and team work:

- describe your role,
- do not claim sole authorship of collaborative systems,
- distinguish personal methodology from employer-owned implementations.

This policy can live in `docs/content-publication-policy.md`.

---

# 19. Initial content backlog

## Must exist for v1 launch

- [ ] Home
- [ ] Experience
- [ ] AI & Agentic Engineering
- [ ] Mission Control v1
- [ ] About
- [ ] Résumé
- [ ] Contact / LinkedIn links
- [ ] Patent evidence page or section
- [ ] One architecture / technical-thinking piece
- [ ] Mobile-ready responsive design
- [ ] Basic SEO metadata
- [ ] Basic tests and CI
- [ ] Deployment

## Strongly preferred shortly after v1

- [ ] Agent-first TypeScript architecture article
- [ ] 1 historical case study
- [ ] Mission Control diagrams
- [ ] Writing index
- [ ] 2–3 short technical essays
- [ ] analytics
- [ ] polished social preview cards

## Later / explicitly non-blocking

- [ ] Agentic Systems Lab
- [ ] sophisticated interactive Mission Control visualization
- [ ] additional case studies
- [ ] searchable writing archive
- [ ] dynamic résumé tailoring
- [ ] visitor-personalized content
- [ ] AI “ask about Erik” experience
- [ ] CMS
- [ ] newsletter
- [ ] complex animation

---

# 20. Suggested build phases

## Phase 0 — Repository skeleton

**Goal:** deterministic working system before visual design.

Build:

- pnpm + Turborepo,
- Next.js app,
- shared config,
- contracts package,
- content package,
- UI package,
- TypeScript / ESLint / formatting,
- Vitest,
- Playwright,
- CI,
- root `AGENTS.md`,
- architecture ADRs,
- deploy walking skeleton.

**Exit criterion:** clone → install → test → build → deploy works.

---

## Phase 1 — Content system + visual foundation

Build:

- typography,
- tokens,
- page shell,
- navigation,
- footer,
- MDX content pipeline,
- content schemas,
- evidence component,
- diagram component conventions,
- SEO helpers.

**Exit criterion:** one complete golden-path article renders from typed MDX metadata.

---

## Phase 2 — Application-ready website

Build the minimum site that supports real applications:

- Home
- Experience
- AI & Agentic Engineering
- About
- Résumé
- patent proof
- Mission Control overview / v1

Do not wait for the future demo.

**Exit criterion:** a hiring manager can understand the positioning and find credible evidence without any unfinished route being necessary.

**Career rule:** normal job applications begin no later than this phase.

---

## Phase 3 — Mission Control deep dive

Expand the Mission Control page into a substantive methodology.

Add:

- polished diagrams,
- core primitives,
- human/agent model,
- durable artifact model,
- loop examples,
- implementation guidance,
- link to architecture article.

**Exit criterion:** the page can stand alone as a serious technical/leadership artifact.

---

## Phase 4 — Supporting evidence

Add:

- agent-first architecture article,
- one public-safe historical case study,
- selected technical essays,
- better evidence linking,
- polished metadata/social cards.

These improvements happen **while applications continue**.

---

## Phase 5 — Agentic Systems Lab integration

Defined separately.

This site architecture should only need to:

- add a route/app surface,
- consume typed workflow result contracts,
- link runs/evidence into existing Selected Work,
- share visual tokens and UI primitives.

Do not refactor the editorial site around the demo.

---

# 21. MVP acceptance criteria

The website is “ready enough to apply” when all are true:

### Positioning

- A visitor can identify the target professional identity from the homepage in under 15 seconds.
- AI/agentic engineering is visibly a major differentiator.
- The site does not position Erik primarily as a front-end developer.

### Evidence

- At least three strong claims have supporting evidence or detailed narrative.
- Patent contribution is represented accurately.
- Mission Control has a coherent published v1.
- Technical architecture thinking is visible.

### Usability

- Works well on phone and desktop.
- Primary navigation is obvious.
- Résumé can be downloaded.
- Contact path is clear.
- No route required for applications says “coming soon.”

### Technical

- Typecheck passes.
- Tests pass.
- Production build passes.
- E2E smoke tests pass.
- Critical content is server-rendered / static.
- No obvious accessibility blockers.
- No known broken links.

### Public-safety

- No confidential employer information.
- No unsupported metrics.
- No misleading ownership claims.
- No private documents or secrets in the repo.

---

# 22. Explicit anti-scope rules

These are important because the site can easily become a reason to delay applications.

1. **No demo app is required for v1.**
2. **No CMS is required.**
3. **No design system beyond the components actually used.**
4. **No database without persistent product state.**
5. **No authentication without private/user-specific functionality.**
6. **No animation whose absence prevents launch.**
7. **No second historical case study before the first site launch.**
8. **No rewriting every old job description before launch.**
9. **No “Ask Erik” chatbot as an MVP requirement.**
10. **No portfolio improvement can stop an application after Phase 2.**

---

# 23. Initial Codex task sequence

The following sequence should let a coding agent begin without inventing the product.

## Task 1 — Bootstrap

> Create a pnpm/Turborepo TypeScript monorepo with `apps/web`, `packages/contracts`, `packages/content`, `packages/ui`, and `packages/config`. Use Next.js App Router and Tailwind CSS v4. Configure strict TypeScript, ESLint, formatting, Vitest, Playwright, and CI. Do not add a database, auth, API service, state-management library, query library, CMS, or AI dependencies.

## Task 2 — Agent context

> Create root `AGENTS.md`, `docs/architecture.md`, `docs/adr/`, and `docs/plans/`. Encode the architectural hard rules from this plan. Keep `AGENTS.md` concise and point to deeper docs.

## Task 3 — Content spine

> Implement Zod schemas for article, case-study, experience, and evidence metadata. Implement a file-backed MDX content loader that validates metadata once at the content boundary and returns typed view models. Page components must not parse frontmatter directly.

## Task 4 — Golden path

> Implement one complete article from MDX source through validation, content loading, metadata generation, routing, typography, evidence components, and tests. Document this as the golden-path content implementation for future agent sessions.

## Task 5 — Site shell

> Build the responsive navigation, page shell, footer, typography, tokens, and reusable editorial layout primitives. Favor semantic HTML and low client JavaScript. Do not add decorative animation libraries.

## Task 6 — Core routes

Implement:

```text
/
/experience
/ai
/mission-control
/work
/writing
/about
/resume
```

Populate with structured placeholder content only where final copy has not yet been supplied. Clearly mark placeholders in source so they cannot be mistaken for publish-ready claims.

## Task 7 — Evidence and diagrams

> Add reusable `Evidence`, `Callout`, `SystemDiagram`, and `Decision` components suitable for technical case studies. Keep diagrams responsive and accessible.

## Task 8 — Quality / deployment

> Add metadata, sitemap, robots, structured data, responsive checks, E2E smoke tests, and production deployment configuration. Produce a final launch checklist.

---

# 24. Source material already available for implementation

The content work can draw from existing project material, including:

- current professional profile / career history,
- U.S. patent 12,327,222 B2,
- the agentic-first TypeScript architecture reference,
- Mission Control methodology work from the separate project/conversations,
- prior career-positioning discussions.

Do not treat these as permission to publish confidential employer material. They are source material for drafting and generalization.

---

# 25. Final product thesis

The site should communicate a coherent professional story:

> **I have spent a long career building software, products, platforms, and teams. I remain technically involved, and my current focus is helping engineering organizations adapt their architecture and operating models to an agentic future.**

The strongest evidence should reinforce three layers:

### I have done the work

Career progression, shipped systems, engineering leadership, AI product work, patent.

### I have a developed point of view

Mission Control, agent-first architecture, developer experience, verification, evaluation, and organizational design.

### I can still build

The site itself, public technical artifacts, and eventually the Agentic Systems Lab.

The purpose is not to prove every possible qualification. It is to make the strongest parts of the career unusually easy to verify.
