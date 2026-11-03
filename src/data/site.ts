// Single source of truth for identity, links and copy that appears in more
// than one place. Everything here is either verifiable (links, handles) or
// deliberate positioning — no invented clients, metrics or testimonials.

export const SITE = {
  name: "Olusanya Timothy",
  shortName: "Timothy Olusanya",
  initials: "OT",
  role: "Software engineer · AI red team & evaluation",
  location: "Lagos, Nigeria",
  city: "Lagos",
  email: "olusanyatimothy54@gmail.com",
  phone: "+234 812 786 8211",
  github: "https://github.com/Teamthy",
  githubHandle: "Teamthy",
  linkedin: "https://www.linkedin.com/in/olusanya-timothy",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://olusanyatimothy.dev",
  resume: "/olusanya-timothy-resume.pdf",
  tagline: "I build the system, then try to break it.",
  shortBio:
    "Lagos-based software engineer working on production platforms in Go and TypeScript — and on the evaluation infrastructure that tells you whether an AI system actually held.",
} as const;

export const NAV_LINKS = [
  { href: "/research", label: "Research" },
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Writing" },
  { href: "/contact", label: "Contact" },
] as const;

export interface Capability {
  id: string;
  title: string;
  short: string;
  detail: string;
  deliverables: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "red-team",
    title: "AI red team & evaluation",
    short:
      "Adversarial testing that produces evidence instead of a wall of findings — with sample sizes, named gaps and raw outputs you can re-derive.",
    detail:
      "I test agents the way attackers use them: prompt injection through trusted roles, poisoned retrieval, tool descriptions that carry instructions, multi-turn escalation, and refusals in the languages your customers actually write. Every run ships with the raw transcripts, a check version, and a verification command.",
    deliverables: [
      "Failure-mode audit against a live endpoint",
      "Evidence bundle with bundled raw transcripts",
      "Named gaps — what the run cannot prove",
      "CI gate that blocks only when security gets worse",
    ],
  },
  {
    id: "platform",
    title: "Agent & platform engineering",
    short:
      "Go and TypeScript services for products that need sessions, money, permissions and deadlines to be right — not approximately right.",
    detail:
      "I build the unglamorous layer: a server that owns session state and scoring, a ledger that posts every naira twice, retrieval and tool boundaries that are enforced in code, and API contracts checked against the router on every build.",
    deliverables: [
      "Go / TypeScript services with typed contracts",
      "Postgres schema, RLS and migrations",
      "Auth, RBAC and audit trails",
      "Deployment, observability and runbooks",
    ],
  },
  {
    id: "verification",
    title: "Verification & reliability",
    short:
      "Crash consistency, contract drift, queue semantics and the failure cases that only show up after the process dies.",
    detail:
      "Most incidents are not exotic. They are a write that never reached the store, a contract that drifted from the router, a retry that duplicated a fill, or a worker that lost a message without a dead-letter record. I build the benchmarks and CI checks that make those failures visible before a customer finds them.",
    deliverables: [
      "Crash-consistency and recovery tests",
      "Contract checks in both directions",
      "CI gates with committed baselines",
      "Written findings register with dispositions",
    ],
  },
];

export const STACK: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Go", "TypeScript", "Python", "SQL", "Bash"],
  },
  {
    group: "Backend",
    items: ["chi", "Express 5", "Next.js route handlers", "Prisma", "Drizzle", "PostgreSQL", "Redis", "SQLite"],
  },
  {
    group: "Frontend",
    items: ["Next.js 15", "React 19", "Tailwind CSS", "TanStack Query", "Expo / React Native"],
  },
  {
    group: "AI & security",
    items: ["OpenAI-compatible APIs", "ONNX Runtime", "PyRIT", "promptfoo", "DeepTeam", "OWASP Agentic Top 10", "MITRE ATLAS", "NIST AI RMF"],
  },
  {
    group: "Infrastructure",
    items: ["Docker Compose", "GitHub Actions", "OpenTelemetry", "Prometheus / Grafana", "MinIO / S3", "Vercel", "Render"],
  },
];

export const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "A claim is not evidence",
    body: "A green report is a claim made by the thing being tested. I build artefacts a stranger can re-derive from a cold clone — hash chains, stored raw output, and a verify command that needs no model, no key and no network.",
  },
  {
    title: "Named gaps beat green bundles",
    body: "Anything that cannot be verified gets recorded with its reason and scope. Silence about a limit is worse than the limit itself, because it turns a known hole into a false assurance.",
  },
  {
    title: "Contracts over conventions",
    body: "An OpenAPI file that is not checked against the router is documentation, not a contract. I make drift fail the build — in both directions — so the client and server cannot quietly disagree.",
  },
  {
    title: "Money, time and permissions are integers",
    body: "Naira in kobo, deadlines on the server, permissions at the database. Anything that matters is enforced where it cannot be skipped, not in the layer that is easiest to edit.",
  },
  {
    title: "The boring failure is the one that ships",
    body: "Not prompt injection from a movie, but a refusal that only works in English, a retrieval document with a hidden instruction, or a decision that never reached the audit store. Those are the failures that reach customers.",
  },
];
