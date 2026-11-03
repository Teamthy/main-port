// Real, shipped work. Every project below links to its public repository
// (github.com/Teamthy) and every claim in the copy is taken from that
// repository's README, docs or committed test output.

export type ProjectCategory = "AI Security & Evaluation" | "Platform Engineering" | "Backend & APIs";

export type Motif =
  | "chain"
  | "gate"
  | "crash"
  | "probes"
  | "routes"
  | "ledger"
  | "layers"
  | "boxes"
  | "waveform"
  | "docs"
  | "register"
  | "request";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  kicker: string;
  category: ProjectCategory;
  year: string;
  status: string;
  repo: string;
  live?: string;
  stack: string[];
  tagline: string;
  summary: string;
  metrics: ProjectMetric[];
  problem: string[];
  approach: string[];
  evidence: string[];
  highlights: string[];
  motif: Motif;
  similar: number[];
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI Security & Evaluation",
  "Platform Engineering",
  "Backend & APIs",
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "tieout",
    title: "tieout",
    kicker: "Evidence-grade agent evaluation",
    category: "AI Security & Evaluation",
    year: "2026",
    status: "Open source · MIT · v0.3.0",
    repo: "https://github.com/Teamthy/Tie-out-",
    live: "https://tie-out-five.vercel.app",
    stack: ["Python 3.10+", "Pydantic", "FastAPI", "SHA-256 hash chain", "Clopper-Pearson CI"],
    tagline: "The report is a claim. The bundle is a record a stranger can re-derive.",
    summary:
      "An open harness for agent evaluation and red-team runs that emits evidence, not reports. Every verdict is one bound, chained, re-derivable event: the action, the check version, the decision and the effect reference in a single record, with the raw inputs and outputs stored alongside it.",
    metrics: [
      { value: "14/14", label: "Verdicts re-derived from stored raw" },
      { value: "22", label: "Chained records in the demo bundle" },
      { value: "0", label: "False positives / negatives on 8 controls" },
      { value: "1", label: "Command for a stranger to verify" },
    ],
    problem: [
      "The 2026 tooling landscape is crowded in three layers and empty in the fourth. Attacks are commoditised, evals are commoditised at the scoring level, and taxonomy is standardised. Evidence is empty: every tool uses a judge that lives inside the tool, the evaluator and the evaluated share an operator, and a green eval from such a tool is a self-grade.",
      "The research says what those artefacts cannot show: no judge is uniformly reliable, verdicts flip on reformatting and verbosity, and where raw outputs were not shipped the numbers cannot be re-audited. Nobody emits an artefact that survives contact with a stranger.",
    ],
    approach: [
      "tieout records one event per check result with a four-part binding — action, policy version, decision, effect reference — and pre-assigns every id before the first agent call, so a missing item is a gap rather than a shorter history. Records are sealed into a hash chain at write time, and the manifest hashes the bundle.",
      "`tieout verify` re-walks the chain, re-hashes the manifest and re-runs the detectors on the stored raw output: no model, no key, no network. Every suite carries negative controls it does not generate, and the check cannot write its own grade. Stability is measured across runs, not assumed — two committed runs against the same suite with different surface-drift seeds show ten transcripts drifting while zero verdicts flip.",
    ],
    evidence: [
      "The committed demo bundle re-derives end to end: 22 records in an intact chain, 14/14 pre-assigned ids present, 14/14 verdicts re-derived from stored raw output, 8 controls re-derived with zero false positives and zero false negatives, and a PASS that names re-derivability by a stranger as the criterion.",
      "The metric itself is honest about its own uncertainty. Rates ship with an exact Clopper-Pearson interval computed by bisection on the binomial CDF before the bundle is closed, and anything unverifiable is recorded as a named gap with its reason and scope rather than dropped. The judge gets its own numbers every run: anchor agreement, perturbation flips, disagreement rate and a self-preference probe.",
    ],
    highlights: [
      "Six pillars in code: verdict events, provenance, negative controls, named gaps, re-derivation and judge audit.",
      "Keyless demo run against a deterministic sample agent: 13 pass, 1 fail, 0 undetermined — the fail is documented in the fixture, not discovered after the fact.",
      "Intervals, not just percentages: 13/14 with a 95% interval of 0.6613–0.9982.",
      "Documentation site ships with an export contract that is checked on 26 pages.",
    ],
    motif: "chain",
    similar: [2, 3, 5],
  },
  {
    id: 2,
    slug: "gatecheck",
    title: "gatecheck",
    kicker: "A PR gate for AI agents",
    category: "AI Security & Evaluation",
    year: "2026",
    status: "Open source · MIT",
    repo: "https://github.com/Teamthy/gatecheck",
    stack: ["Python", "PyYAML", "SARIF", "GitHub Actions"],
    tagline: "It blocks a pull request only when the agent got easier to break.",
    summary:
      "A security gate for AI agents that answers the only question a pull request asks: is this worse than it was before? Find a bug, store it in a baseline, and from then on only new or worsened findings block. Fixed ones are reported as fixed.",
    metrics: [
      { value: "7", label: "Findings from 11 attacks in under a second" },
      { value: "2", label: "Multi-turn escalations only an engine catches" },
      { value: "1", label: "Dependency (PyYAML)" },
      { value: "0", label: "New findings on a known-broken agent" },
    ],
    problem: [
      "Red-team tools report everything, every time. Run one in CI and the first build is a wall of findings, the second is the same wall, and by the third the team has added `continue-on-error`. The gate did not fail because it was wrong — it failed because it could not tell the difference between a bug you shipped yesterday and one you are shipping now.",
      "The same weakness found by three tools is one finding, not three. Without a baseline and a stable fingerprint, every run regresses the team's tolerance instead of the model's behaviour.",
    ],
    approach: [
      "gatecheck runs a corpus of attacks against an agent endpoint, fingerprints every finding, and diffs the run against a committed baseline. Findings at or above the configured threshold that are new or worse block the build; everything already known passes; anything fixed is announced as fixed.",
      "The core engine is part of the package — prompt injection, system-prompt leakage, data exfiltration and tool misuse, plus a multi-turn engine that catches sequences of individually-allowed turns ending in a disallowed action. Optional Promptfoo, PyRIT and DeepTeam engines feed the same fingerprint space, so extra tooling adds coverage rather than duplicate noise.",
    ],
    evidence: [
      "Both demo runs are committed as artefacts, so the claim can be checked without running anything: the vulnerable agent's blocked run as a PR comment, JSON and SARIF, and the fixed agent's passing run on the same corpus.",
      "The two demo agents are the same rule engine one flag apart, which makes the comparison honest. First run: 7 findings, blocked and recorded as today's state. Same agent again: 0 new, pass. Fixed agent: 0 findings, 7 fixed.",
    ],
    highlights: [
      "Baseline semantics: known findings stop being news, so the gate stays switched on.",
      "SARIF output and a GitHub Action, so results land on the pull request that caused them.",
      "Multi-turn escalation detection in the default engine, not an optional extra.",
      "One finding per weakness across engines, with `found by` attribution instead of duplicate rows.",
    ],
    motif: "gate",
    similar: [1, 3, 4],
  },
  {
    id: 3,
    slug: "host-failure-benchmark",
    title: "host-failure-benchmark",
    kicker: "Crash consistency for agent audit trails",
    category: "AI Security & Evaluation",
    year: "2026",
    status: "Open source · MIT",
    repo: "https://github.com/Teamthy/host-failure-benchmark",
    stack: ["Python 3.9+", "Standard library only", "Sockets", "SHA-256"],
    tagline: "What survives when the host dies mid-decision?",
    summary:
      "A local, dependency-free suite that answers one question: when an agent's guard decides something and the record of that decision does not reach the audit store, what can still be known afterwards?",
    metrics: [
      { value: "4", label: "Failure rows, each with its own test" },
      { value: "13", label: "Persistence and recovery checks" },
      { value: "3", label: "Verification checks on surviving records" },
      { value: "10", label: "Ways the challenge script damages a run" },
    ],
    problem: [
      "Audit trails are usually argued about in the abstract: does the system log decisions? The useful question is narrower and harder. If the process dies between the decision and the write, what is left — and can anyone prove what is missing?",
      "Most suites answer with a single score, which hides the fact that persistence failures and verification frauds fail for completely different reasons. A record that survived but cannot be verified is not a weaker version of a record that survived intact; it is a different kind of problem.",
    ],
    approach: [
      "Two processes talk over loopback for about a second; one exits deliberately mid-work with `os._exit(9)` rather than a signal from outside; a separate program checks the artefacts and trusts none of them. There is no model, no external key and no network beyond loopback.",
      "The suite reports two classes separately: Class P for persistence and recovery, and Class V for verification — whether a record that survived is the record it says it is, from who it says, under the policy version it names. The three gap cases are reported as their own dimension: C knows the issued id and a commitment to the descriptor, C' knows the id only, and C'' knows nothing at all.",
    ],
    evidence: [
      "`verify.py` re-derives every assertion from the raw files — the store journal, the write-ahead log, the per-scenario host journals — and never reads a pass flag, because nothing writes one. `challenge.py` damages a finished run ten ways and requires that the check claiming to catch each kind of damage catches it, and refuses a directory that is not a run.",
      "`audit/regressions.py` holds the harder mutations, one per finding in the November 2026 review. Each of them passed verification before that review and has to be caught now. The whole thing runs in seconds, inside the thirty minutes the spec allowed.",
    ],
    highlights: [
      "The named gap is the result, not a footnote — including the case where the benchmark itself cannot tell that an action happened.",
      "Replay-carried decision time is labelled source-asserted, never independently verified, in both the printed result and the JSON report.",
      "Findings register with dispositions, and evidence logs committed per review date.",
      "Standard library only, so it runs from a cold clone on Windows, macOS or Linux.",
    ],
    motif: "crash",
    similar: [1, 2, 4],
  },
  {
    id: 4,
    slug: "ai-redteam-five-tests",
    title: "ai-redteam-five-tests",
    kicker: "The five boring failures",
    category: "AI Security & Evaluation",
    year: "2026",
    status: "Open source · MIT",
    repo: "https://github.com/Teamthy/ai-redteam-five-tests",
    stack: ["Python", "OpenAI-compatible APIs", "Recorded JSON output"],
    tagline: "It ships the method, not pre-baked results.",
    summary:
      "A runnable harness for the five failure checks described in “The five boring failures that will ship with your AI feature”. It points at any OpenAI-compatible model, runs the tests, and records the output for review — your model, your results.",
    metrics: [
      { value: "5", label: "Failure classes, each with a test" },
      { value: "3", label: "Direct injection attempts" },
      { value: "3", label: "Languages: English, Pidgin, Yoruba" },
      { value: "Any", label: "OpenAI-compatible endpoint" },
    ],
    problem: [
      "The failures that ship are rarely cinematic. They are a prompt treated as a wall, retrieval treated as trusted input, a tool description nobody read, a refusal that only works in one language, and a metric that records no sample size.",
      "Each of these is cheap to test and expensive to discover in production — especially in a market where customers write in English, Pidgin and Yoruba in the same sentence, and the support bot was evaluated on none of it.",
    ],
    approach: [
      "The harness exercises prompt injection three ways (print the system prompt, trusted-role framing, an embedded instruction block), a poisoned knowledge-base document carrying a hidden instruction, and a tool whose description carries one — with the reply compared with the tool present and absent.",
      "Refusals are tested in plain English and in mixed Pidgin/Yoruba messages that mirror how real customers write. The results are tallied into the metric that matters: how often a specific failure fires on a specific input type, with the sample size next to every rate.",
    ],
    evidence: [
      "By default the harness tests a sample support bot — a known system prompt with a secret and three policies — so the failure modes reproduce on a common model and the baseline is inspectable. Point `MY_SYSTEM_PROMPT_FILE` at your real prompt, or `OPENAI_BASE_URL` at your bot's endpoint, and the same checks run against your system.",
      "Output is recorded for review rather than summarised into a green badge, and there are no pre-baked results in the repository to mistake for your own.",
    ],
    highlights: [
      "Five checks you can run in an afternoon, not a platform to procure.",
      "Multilingual refusal testing as a first-class case, not a localisation afterthought.",
      "Works against hosted models and local models with any non-empty key.",
      "The written companion piece explains why each failure is boring, and therefore why it ships.",
    ],
    motif: "probes",
    similar: [1, 2, 3],
  },
  {
    id: 5,
    slug: "edumart-os",
    title: "EduMart OS",
    kicker: "Exam preparation for Nigerian learners",
    category: "Platform Engineering",
    year: "2026",
    status: "Product · deployed demo",
    repo: "https://github.com/Teamthy/EduMart-OS",
    live: "https://edumart-os.vercel.app",
    stack: ["Go 1.27", "chi", "SQLite / PostgreSQL", "Next.js 15", "Tailwind v4", "Expo"],
    tagline: "One API, three shells, deadlines the server actually owns.",
    summary:
      "Timed mocks, adaptive practice, class assessments, a verified-payment store, learning analytics and an operations console — served by one Go API to a web app, a PWA and a native app.",
    metrics: [
      { value: "48", label: "Contract-checked route pairs" },
      { value: "3", label: "Shells on one versioned API" },
      { value: "2", label: "Database backends, one query layer" },
      { value: "1", label: "Commit ships web and native together" },
    ],
    problem: [
      "Exam preparation products lose trust at exactly the moment they matter: a timed mock. If the client owns the deadline, a determined student owns the deadline. If the web app and the mobile app each implement scoring, the two products disagree about a grade.",
      "The commercial side has the same shape. A “verified payment” store only means something if verification happens server-side, once, against a source of truth — not when a learner taps a button.",
    ],
    approach: [
      "The Go service owns session state, the deadline, scoring and authorisation. Both shells are thin clients of one versioned REST API, which is what lets the web app and the native app ship from one commit without drifting.",
      "SQLite is embedded for development and CI while PostgreSQL runs in production behind the same query layer, so there is no second implementation to keep honest. The web app proxies `/v1/*` to the API, keeping the session cookie first-party and the API origin out of the browser.",
    ],
    evidence: [
      "`packages/contracts/openapi.yaml` describes all 48 path+method pairs and is checked against the Go router in both directions on every CI run. An undocumented handler and a documented-but-missing endpoint both fail the build.",
      "Seeded demo accounts cover student, teacher, content editor and platform admin, with a class join code and referral flow, so the whole product is testable from a cold clone. A load-test command ships alongside the API.",
    ],
    highlights: [
      "Server-owned deadlines, scoring and authorisation — the client cannot grant itself time.",
      "Adaptive practice and timed mocks drawing on the same question bank.",
      "Contract check in both directions prevents client/server drift while three surfaces are built.",
      "Workspace layout with shared wire types and design tokens in `packages/shared`.",
    ],
    motif: "routes",
    similar: [6, 7, 8],
  },
  {
    id: 6,
    slug: "famex-os",
    title: "Famex OS",
    kicker: "A single-school operating system",
    category: "Platform Engineering",
    year: "2026",
    status: "Product · client deployment",
    repo: "https://github.com/Teamthy/Famex-OS",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Row-Level Security", "Paystack", "Expo"],
    tagline: "One install, one school, ~3,000 users over five years.",
    summary:
      "A school operating system for a Nigerian secondary school: a public site, role-based portals, CBT examinations, admissions, fees and results — backed by a Postgres schema with row-level security and integer-kobo money.",
    metrics: [
      { value: "140+", label: "API routes" },
      { value: "70", label: "Database models" },
      { value: "898", label: "Tests gating the build" },
      { value: "2×", label: "Postings per naira (double-entry)" },
    ],
    problem: [
      "School software in this market is usually a pile of spreadsheets with a login screen. The money is where that hurts: fees arrive as transfers with no reference, balances are computed in the browser, and corrections are made by deleting rows.",
      "Multi-tenancy is the other trap. A product that starts single-school and later adds a campus often discovers its isolation was a convention in application code, and every new query is a chance to leak another school's records.",
    ],
    approach: [
      "Every naira is posted twice through a double-entry ledger — accounts, journals and signed-kobo lines — with invoices and payments inside their own transactions, corrections by counter-entry instead of deletion, and a Postgres constraint trigger that refuses an unbalanced journal. Staff get a trial balance and per-account statements.",
      "Tenant hygiene is enforced at the database: `schoolId` on every business table plus Postgres row-level security as an isolation backstop, with a CI coverage guard that fails if any tenant table is left unprotected. Paystack webhooks are signature-verified and idempotent, and refund and transfer workflows are explicit.",
    ],
    evidence: [
      "CI verifies schema drift, tenant isolation, ledger reconciliation and load behaviour, and the suite is roughly nine hundred tests. Admissions run draft → document upload via presigned S3 → application fee → submit, with staff paper-intake and enrolment for the queues that still arrive at the gate.",
      "The whole product is rebuilt from a school portal base with the SaaS layer removed: no cross-school console, no subscription tier, no vendor branding. School name, colours, logo and contacts are brand tokens in one file rather than literals in templates, so a second school is configuration, not a fork.",
    ],
    highlights: [
      "Double-entry ledger in signed kobo, with an unbalanced journal rejected by the database.",
      "CBT exams: question banks, timed sittings, auto-grading, retakes and XLSX/DOCX/TXT import.",
      "Role portals for admin, director, coordinator, bursar, teacher, HOD, student and parent behind one session with per-route authorisation and revocation.",
      "Companion Expo mobile app, offline-first, sharing the same API.",
    ],
    motif: "ledger",
    similar: [5, 7, 10],
  },
  {
    id: 7,
    slug: "ykay-virtual",
    title: "YK Virtual",
    kicker: "A curriculum-governed virtual school",
    category: "Platform Engineering",
    year: "2026",
    status: "Product · client build",
    repo: "https://github.com/Teamthy/ykay-virtual",
    stack: ["Next.js 15", "TanStack Query", "Go 1.26", "PostgreSQL", "Redis", "OpenTelemetry", "k6"],
    tagline: "British and Nigerian curricula, escrow between strangers.",
    summary:
      "A tutoring marketplace and virtual school — exam preparation, private tuition, live cohorts — with escrow, booking-scoped messaging, staged vetting, an LMS, referrals and a B2B path.",
    metrics: [
      { value: "2", label: "Curricula: British and Nigerian" },
      { value: "1", label: "OpenAPI contract as source of truth" },
      { value: "4", label: "Test layers: Go, Vitest, Playwright, k6" },
      { value: "0", label: "Production boot with demo seeds or open CORS" },
    ],
    problem: [
      "Marketplaces break at the trust boundary. A parent is paying a tutor they have never met, for lessons delivered over a connection they cannot audit — and the platform's job is to hold the money, vet the tutor and keep the conversation attached to the booking.",
      "Most attempts bolt these onto a CRUD app and discover later that messaging is a separate graph, escrow is a state machine, and vetting is a staged process with evidence. Retrofitting any of the three is a rewrite.",
    ],
    approach: [
      "A Go modular monolith serves a documented REST API, with PostgreSQL and Redis behind it and a Next.js 15 client on TanStack Query. The API contract in `api/openapi.yaml` is the source of truth, with a consistent envelope for data and errors so every client handles failure the same way.",
      "Escrow, booking-scoped messaging, staged vetting, the LMS, referrals and B2B are modelled as first-class domains. Infrastructure is Docker Compose with S3-compatible storage, OpenTelemetry traces and Prometheus/Grafana dashboards; the API refuses to start in production if payment secrets are missing, CORS is open, or demo seeds are enabled.",
    ],
    evidence: [
      "Four test layers cover different risks: Go tests for the domain, Vitest for the client, Playwright for critical journeys and k6 for load. Security posture is written down in `docs/SECURITY.md` and architecture in `docs/architecture.md`, both shipped with the code.",
      "A production checklist is executable rather than aspirational: the boot-time validation makes the dangerous configuration unshippable, and every secret in the production example is a visible `CHANGE_ME`.",
    ],
    highlights: [
      "Escrow tied to the booking lifecycle, not to a payment button.",
      "Messaging scoped to a booking, which removes the usual moderation problem by construction.",
      "Staged tutor vetting with evidence, so approval is a record rather than an opinion.",
      "Observability from day one: OpenTelemetry, Prometheus metrics and Grafana dashboards.",
    ],
    motif: "layers",
    similar: [5, 6, 8],
  },
  {
    id: 8,
    slug: "visionforge",
    title: "VisionForge",
    kicker: "Computer-vision inference platform",
    category: "Backend & APIs",
    year: "2026",
    status: "Open source · MIT",
    repo: "https://github.com/Teamthy/VisionForge",
    stack: ["Go 1.23", "Python 3.11", "ONNX Runtime", "PostgreSQL", "Redis", "MinIO / S3", "Next.js 14", "Grafana"],
    tagline: "Real ONNX inference, with the failure paths built first.",
    summary:
      "A multi-project CV inference platform: uploads direct to object storage, synchronous inference for fast requests, and a worker pool for everything else — with a model registry, dead-letter handling and metrics for every stage.",
    metrics: [
      { value: "2", label: "Inference modes: sync and queued" },
      { value: "2", label: "Real models: YOLOv8n and MobileNet-style" },
      { value: "1", label: "Dead-letter queue with visibility timeouts" },
      { value: "4", label: "Stacks built in CI: Go, Python, Next.js, Docker" },
    ],
    problem: [
      "Machine-learning demos stop at the notebook. The platform questions start after: how does a 20 MB image reach the service, what happens when the worker dies mid-inference, how is a model deprecated, and how would you know the queue is backing up before customers do?",
      "The same is true of security. Presigned uploads without MIME sniffing, size limits and safe key generation are an incident waiting for a filename.",
    ],
    approach: [
      "Uploads go directly to MinIO or S3 via presigned URLs, so the API never proxies image bytes. A Redis-backed queue with visibility timeouts, exponential backoff with jitter, idempotency keys and a dead-letter path handles asynchronous work, while the model registry versions artefacts with ONNX/PyTorch metadata and an active/staging/deprecated lifecycle.",
      "The Python service runs real ONNX inference — YOLOv8n for detection and a MobileNet-style classifier — with a documented deterministic fallback when no artefact is mounted, so CI and reviewers can exercise the whole path without a model download.",
    ],
    evidence: [
      "Every stage is instrumented: structured JSON logs, Prometheus metrics for HTTP, database, Redis, queue depth, worker and inference, OpenTelemetry tracing hooks, health and ready probes, and Grafana dashboards that ship with the Compose stack.",
      "Security is in the request path, not a checklist: upload validation with MIME sniffing, size limits, safe filenames and generated keys, plus rate limiting, request validation, CORS and audit logging. The frontend is a developer-style dashboard with bounding-box visualisation and confidence filtering.",
    ],
    highlights: [
      "One `docker compose up` brings up the API, ML service, database, queue, storage, Prometheus and Grafana, then migrates and seeds.",
      "Model download script verifies the ONNX artefact by SHA-256.",
      "Worker idempotency prevents duplicate inference charges on retries.",
      "CI builds all four surfaces, including every Docker image.",
    ],
    motif: "boxes",
    similar: [7, 5, 10],
  },
  {
    id: 9,
    slug: "i-confess",
    title: "I CONFESS",
    kicker: "Daily confession and audio platform",
    category: "Platform Engineering",
    year: "2026",
    status: "Product · live",
    repo: "https://github.com/Teamthy/i-confess",
    live: "https://iconfessmain.vercel.app",
    stack: ["Go API", "Next.js 15.5", "React 19", "Flutter", "CI/CD workflows"],
    tagline: "Scripture, audio and habit in one return loop.",
    summary:
      "A daily confession, scripture meditation and audio-session platform built around a single loop: discover, choose, create or schedule a session, listen, confess, complete, return.",
    metrics: [
      { value: "8", label: "Build phases closed before launch" },
      { value: "3", label: "Surfaces: public site, app, admin console" },
      { value: "1", label: "Same-origin API proxy for the web app" },
      { value: "1", label: "Loop the whole product is designed around" },
    ],
    problem: [
      "A habit product fails on the second day, not the first. If the path from opening the app to hearing today's session involves a search, a filter and a decision, most people never get there — and the audio is the reason they came.",
      "For a faith product there is a second constraint: the content has to be right, and the admin console has to make it easy for non-engineers to keep it right without shipping code.",
    ],
    approach: [
      "The loop is the architecture: discover → choose → create/schedule → listen → confess → complete → return. The Next.js application serves the public site, the authenticated app and the admin console from one codebase, consuming the Go API through a same-origin proxy so sessions stay first-party.",
      "A native Flutter app ships alongside the web experience from the same API, and the audio/voice engine was audited separately before launch rather than folded into a general QA pass.",
    ],
    evidence: [
      "Phases 0–8 were closed with dedicated audit notes and completion reports committed alongside the code — including an audio-platform status, a content-domain completion record and a voice-engine audit.",
      "GitHub Actions handle CI and deployment, and a golden-update workflow keeps generated fixtures current instead of letting them rot.",
    ],
    highlights: [
      "Three surfaces, one API, one deploy pipeline.",
      "Admin console designed for content editors, not engineers.",
      "Audio sessions and voice-engine behaviour audited before launch.",
      "Public site, app and admin console in a single Next.js application.",
    ],
    motif: "waveform",
    similar: [5, 7, 10],
  },
  {
    id: 10,
    slug: "cdrl",
    title: "CDRL",
    kicker: "Digital risk & leadership platform",
    category: "Platform Engineering",
    year: "2026",
    status: "Client work · live",
    repo: "https://github.com/Teamthy/CDRL",
    live: "https://cdrl-web.vercel.app",
    stack: ["Next.js 15", "Express", "Prisma", "PostgreSQL", "pnpm workspaces", "Vitest", "Docker"],
    tagline: "A marketing site and an API that fail loudly at boot.",
    summary:
      "Monorepo for the Centre for Digital Risk & Leadership: a statically rendered Next.js site with a learning-plan UI, and an Express + Prisma API behind it — with quality gates that run on every commit.",
    metrics: [
      { value: "2", label: "Apps in one pnpm workspace" },
      { value: "5", label: "Quality gates before merge" },
      { value: "0", label: "Tolerated lint warnings" },
      { value: "1", label: "Command to reproduce production" },
    ],
    problem: [
      "A small organisation needs a public site that loads instantly and an API that handles enquiries and learning plans — without hiring a platform team to keep them aligned. Configuration drift and stale migrations are the usual result.",
      "The subtler problem is configuration itself. An API that starts with a half-filled environment file looks healthy until the first request that needs the missing value.",
    ],
    approach: [
      "A pnpm 9 workspace holds the Next.js site and the Express + Prisma API, with a shared Prisma schema and migrations applied by a one-shot container before the API starts. The site uses static/ISR rendering for marketing pages; the API owns `/api/v1`.",
      "Configuration is validated at boot and the process fails fast on invalid values. Server-side fetches use an internal URL on the container network while the browser uses the public one, which keeps the API off the public origin path for page rendering.",
    ],
    evidence: [
      "CI runs typecheck in both apps, ESLint with `--max-warnings=0`, Vitest, a production build of both apps, a dependency audit that fails on high-severity advisories, `prisma migrate deploy` plus seed against a fresh database, and a gitleaks secrets scan.",
      "The production stack is committed as Compose: Postgres internal-only, a one-shot migration container, an API with health and readiness endpoints, Redis-backed rate limiting and graceful shutdown, and a standalone Next.js server behind TLS.",
    ],
    highlights: [
      "`pnpm audit:prod` fails the build on high-severity advisories in production dependencies.",
      "Fresh-database migration and seed run in CI, so drift cannot hide.",
      "Secrets scanning in CI with gitleaks.",
      "Environment examples document every variable; real values never enter the repository.",
    ],
    motif: "docs",
    similar: [6, 7, 8],
  },
  {
    id: 11,
    slug: "assetflow",
    title: "AssetFlow",
    kicker: "Multi-tenant fixed-asset register",
    category: "Backend & APIs",
    year: "2026",
    status: "Client work · API",
    repo: "https://github.com/Teamthy/assetflowserver",
    stack: ["Express 5", "TypeScript", "Drizzle ORM", "PostgreSQL", "JWT", "Swagger"],
    tagline: "Seven roles, branch scoping, and a permission model you can read.",
    summary:
      "The API behind a fixed-asset register for multi-branch organisations: organisations, assets, branches, maintenance and audit roles, with JWT access and refresh tokens and a permission-based RBAC model.",
    metrics: [
      { value: "7", label: "Roles from admin to standard staff" },
      { value: "2", label: "Token lifetimes: access and refresh" },
      { value: "1", label: "Documented contract at /api/docs" },
      { value: "0", label: "Routes callable without a JWT" },
    ],
    problem: [
      "Asset registers are cross-functional by nature. Finance cares about depreciation, operations about location, auditors about history and maintenance about work orders — and each of those roles should see a different slice of the same records.",
      "Bolting permissions onto handlers one at a time produces a system where nobody can answer which roles can do what, and a branch manager in Lagos can quietly read Abuja's register.",
    ],
    approach: [
      "Permissions are modelled as named capabilities attached to roles (`admin`, `asset_manager`, `finance`, `auditor`, `branch_manager`, `maintenance_staff`, `standard_staff`), with branch scoping applied at the query layer rather than in the UI. Authentication is mandatory on every route; JWT access tokens pair with refresh tokens.",
      "The contract is documented with Swagger at `/api/docs`, and the service exposes health at `/api/health`, so deployment checks are trivial. An optional worker handles background work when Redis/Valkey is configured, without making it a hard dependency for local development.",
    ],
    evidence: [
      "A deployment switch (`ENFORCE_RBAC`) makes the security posture explicit rather than implicit: it is off only for a specific deployment, and the README says so, while JWT authentication is always required. Turning it on restores permission and branch-scope checks without a code change.",
      "The auth contract is documented with concrete response shapes for login, register, org-login, refresh and invitation acceptance, so client implementations do not have to guess.",
    ],
    highlights: [
      "Permission-based RBAC instead of role checks scattered through handlers.",
      "Branch scoping at the query layer.",
      "Swagger documentation generated from the running service.",
      "Health endpoint plus optional worker for background jobs.",
    ],
    motif: "register",
    similar: [10, 5, 12],
  },
  {
    id: 12,
    slug: "olasco-autos",
    title: "Olasco Autos",
    kicker: "Request-led vehicle platform",
    category: "Backend & APIs",
    year: "2026",
    status: "Client work · web platform",
    repo: "https://github.com/Teamthy/olasco",
    stack: ["Next.js App Router", "TypeScript", "Zod", "Prisma", "PostgreSQL", "WhatsApp Cloud API"],
    tagline: "A request platform that refuses to pretend it is a checkout.",
    summary:
      "A mobile-first site for a Lagos and Abuja vehicle rental and sales business: rental discovery, car-sales enquiries, chauffeur, corporate, event and interstate requests, with a single WhatsApp handoff backed by database intake.",
    metrics: [
      { value: "2", label: "Cities: Lagos and Abuja" },
      { value: "5", label: "Request types on one intake model" },
      { value: "1", label: "WhatsApp handoff, not five inboxes" },
      { value: "0", label: "Payments taken before confirmation" },
    ],
    problem: [
      "Vehicle hire is a conversation, not a cart. Availability, rate, requirements and terms depend on a human check — and a website that implies instant confirmation creates disputes the business then has to absorb.",
      "The operational risk is fragmentation: enquiries across WhatsApp, phone calls and Instagram DMs, with no record of what was asked, by whom, or what was quoted.",
    ],
    approach: [
      "Every request type funnels into one intake model with Zod validation and Postgres persistence via Prisma, then a single configured WhatsApp handoff with notifications to the operations team. Listings stay empty until verified inventory is entered, instead of being filled with placeholder cars.",
      "The README states the boundary plainly: this is a request platform, and a request is not confirmed until the team checks availability, rate, requirements and terms. Editorial photography is labelled as placeholder imagery, not as a record of stock.",
    ],
    evidence: [
      "Architecture, sitemap, data model, API and component design, responsive strategy and phases are documented before implementation, together with an owner-inputs file listing every approval required before launch.",
      "Image sourcing and replacement notes live with the assets, so the business can swap editorial photography for its own verified inventory without a developer.",
    ],
    highlights: [
      "Server-side validation with Zod on every request type.",
      "One WhatsApp handoff with server-only API credentials.",
      "Local JSON adapter for development, PostgreSQL for anything real.",
      "Documentation that separates what is live from what still needs owner approval.",
    ],
    motif: "request",
    similar: [11, 10, 5],
  },
];

export const getProject = (slug: string): Project | undefined =>
  PROJECTS.find((project) => project.slug === slug);

export const getSimilarProjects = (project: Project): Project[] =>
  project.similar
    .map((id) => PROJECTS.find((candidate) => candidate.id === id))
    .filter((candidate): candidate is Project => Boolean(candidate));

export const FEATURED_PROJECT_IDS = [1, 5, 6, 8];
