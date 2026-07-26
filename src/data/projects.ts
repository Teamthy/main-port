import { IMAGES } from "./images";

export type ProjectCategory = "Web Apps" | "Mobile Apps" | "AI & ML" | "SaaS";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  category: ProjectCategory;
  date: string;
  image: string;
  cover: string;
  gallery: string[];
  service: string;
  industry: string;
  client: string;
  summary: string;
  description: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  metrics: ProjectMetric[];
  stack: string[];
  similar: number[];
}

export const PROJECT_CATEGORIES: ProjectCategory[] = ["Web Apps", "Mobile Apps", "AI & ML", "SaaS"];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fincash — Modern Fintech Mobile App",
    type: "MOBILE APP",
    category: "Mobile Apps",
    date: "3 July 2026",
    image: IMAGES.fincash1.src,
    cover: IMAGES.fincash1.src,
    gallery: [IMAGES.fincash2.src, IMAGES.fincash3.src],
    service: "MOBILE APP DEVELOPMENT",
    industry: "Fintech / Personal Finance",
    client: "Fincash Inc.",
    summary:
      "An all-in-one personal finance app that tracks spending, automates saving, and turns financial data into confident decisions — from a single unified dashboard.",
    description: [
      "Building a modern fintech mobile experience requires clarity, security, and seamless money flow. Fincash is an all-in-one financial app that tracks spending, automates saving, and provides insights to help users grow their wealth with confidence — all from a single unified dashboard.",
      "I owned the experience end to end: an intuitive home screen that consolidates balance, transactions, and quick actions, instant payment flows, integrated card management, and an onboarding journey reduced to three simple steps.",
    ],
    challenges: [
      "Users needed a way to manage multiple financial tools — payments, transfers, cards, and analytics — without switching between disconnected apps. Every extra tap was a place people dropped off.",
      "Security was a critical concern, as the platform would handle thousands of daily transactions and manage significant user assets. Trust had to be engineered into every screen, not bolted on at the end.",
    ],
    solutions: [
      "I designed an intelligent unified dashboard that consolidates balance, transactions, and quick actions into a single intuitive home screen, so the most common tasks are always one tap away.",
      "I built instant payment flows, integrated card management, and streamlined onboarding into three simple steps — backed by a secure session layer, biometric auth, and clear, jargon-free explanations of every fee and movement of money.",
    ],
    results: [
      "The launched platform significantly improved user financial control. Users reported 4× faster access to key financial actions, and the streamlined dashboard reduced navigation time by nearly 60% compared to traditional finance apps.",
      "The combination of a calm, legible interface and a secure-by-default flow translated into stronger activation and retention, with onboarding completion and repeat usage both climbing after release.",
    ],
    metrics: [
      { value: "4×", label: "Faster key actions" },
      { value: "-60%", label: "Navigation time" },
      { value: "3", label: "Step onboarding" },
      { value: "1", label: "Unified dashboard" },
    ],
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    similar: [2, 6],
  },
  {
    id: 2,
    title: "LandSecure — Verified Property Infrastructure Platform",
    type: "FULL-STACK PLATFORM",
    category: "Web Apps",
    date: "3 July 2026",
    image: IMAGES.land1.src,
    cover: IMAGES.land1.src,
    gallery: [IMAGES.land2.src, IMAGES.land3.src],
    service: "FULL-STACK PLATFORM DEVELOPMENT (Web + Mobile + Blockchain)",
    industry: "PropTech / Fintech / LegalTech",
    client: "LandSecure Technologies",
    summary:
      "A PropTech platform that verifies land ownership, secures transactions with escrow, and permanently protects property documents on-chain.",
    description: [
      "Building secure real estate infrastructure in Nigeria requires more than listings — it requires trust, verification, and financial protection. LandSecure is an all-in-one PropTech platform that verifies land ownership, secures transactions with escrow, and permanently protects property documents using blockchain technology.",
      "I built the verified property marketplace, the verification and document-authentication pipeline, GIS boundary mapping, escrow smart contracts, an AI valuation engine, and a BankDesk API for institutional workflows — a full-stack system spanning web, mobile, and on-chain components.",
    ],
    challenges: [
      "Property transactions relied heavily on paper documentation that could be lost or forged. Fraud and duplicate sales were common, and payments lacked escrow protection, creating high financial risk for buyers.",
      "Institutional partners needed verifiable, auditable records and a way to integrate the platform into existing banking and legal workflows without manual reconciliation.",
    ],
    solutions: [
      "I developed a verified property marketplace with GIS boundary mapping, document authentication, blockchain stamping, and escrow smart contracts — so ownership, boundaries, and payments are all provable rather than asserted.",
      "An AI valuation engine and a BankDesk API were added to support institutional workflows, giving banks and legal teams the structured, auditable data they need to plug LandSecure into their own processes.",
    ],
    results: [
      "The platform reduced verification turnaround to under 72 hours, eliminated direct-transfer payment risk with escrow, and provided tamper-proof document records, improving confidence and reliability in real estate transactions.",
      "Buyers and institutions gained a single source of truth for each property — verified, time-stamped, and protected — turning a historically high-risk process into one with a clear, auditable trail from search to settlement.",
    ],
    metrics: [
      { value: "<72h", label: "Verification turnaround" },
      { value: "100%", label: "Escrow-protected payments" },
      { value: "On-chain", label: "Tamper-proof records" },
      { value: "GIS", label: "Boundary mapping" },
    ],
    stack: ["Next.js", "TypeScript", "Solidity", "PostgreSQL", "Node.js", "AWS"],
    similar: [1, 4],
  },
  {
    id: 3,
    title: "Crypto Trading Platform",
    type: "WEB APP",
    category: "Web Apps",
    date: "Aug 2024",
    image: IMAGES.projects[2],
    cover: IMAGES.projects[2],
    gallery: [IMAGES.projects[3], IMAGES.projects[5]],
    service: "BACKEND ENGINEERING",
    industry: "Fintech",
    client: "CryptoVault",
    summary:
      "A high-throughput trading backend with a matching engine, hardened wallet flows, and the security posture of an exchange.",
    description: [
      "CryptoVault was launching a trading product for retail users in emerging markets and needed a backend that could match orders quickly, survive traffic spikes, and treat security as a first-class requirement rather than an afterthought.",
      "I built the core trading services in Go: a matching engine, an order lifecycle API, and a wallet service with withdrawal controls and multi-signature approvals. Everything is instrumented, rate-limited, and covered by automated abuse-detection checks.",
    ],
    challenges: [
      "Order matching had to stay consistent under bursty traffic — a double-spend or a lost order on a trading platform is not a bug, it is a liability. The team also had to integrate multiple liquidity providers with very different API contracts.",
      "Security was the constant constraint: wallet endpoints are prime targets for attackers, and the platform needed to pass an external penetration test before launch without delaying the roadmap.",
    ],
    solutions: [
      "I designed the matching engine around a single-writer event log with idempotent order operations, so retries and network failures can never produce duplicate fills. Balances are enforced with database-level constraints, not application-level checks.",
      "I hardened the wallet layer with withdrawal allowlists, time-locks, multi-sig approval above thresholds, and anomaly alerts on unusual patterns. I then ran structured red-team exercises against the APIs before the external pentest, so we entered it already knowing our weak points.",
    ],
    results: [
      "The platform sustained 10,000 matched orders per minute in load testing with sub-50ms matching latency, and it handled launch-week traffic spikes without intervention.",
      "The external penetration test closed with zero critical or high findings — a direct result of the internal red-teaming pass — and the platform has run since launch with no security incidents.",
    ],
    metrics: [
      { value: "10k", label: "Orders matched / min" },
      { value: "<50ms", label: "Matching latency" },
      { value: "0", label: "Critical pentest findings" },
      { value: "99.99%", label: "Uptime since launch" },
    ],
    stack: ["Golang", "PostgreSQL", "Redis", "Kafka", "Kubernetes"],
    similar: [1, 8],
  },
  {
    id: 4,
    title: "E-commerce Redesign",
    type: "WEB APP",
    category: "Web Apps",
    date: "May 2024",
    image: IMAGES.projects[3],
    cover: IMAGES.projects[3],
    gallery: [IMAGES.projects[4], IMAGES.projects[6]],
    service: "FULL-STACK DEVELOPMENT",
    industry: "E-commerce",
    client: "ShopNova",
    summary:
      "A headless storefront rebuild that cut page load times in half and lifted conversion by nearly a third.",
    description: [
      "ShopNova's monolithic store had grown slow and brittle — product pages took over four seconds to load on mid-range phones, which is exactly where most of their customer base shops. Conversion had plateaued while traffic kept growing.",
      "I rebuilt the storefront as a headless Next.js application talking to their existing commerce backend through a thin API layer, with aggressive caching, image optimization, and a checkout flow rewritten to remove three unnecessary steps.",
    ],
    challenges: [
      "The old storefront coupled rendering, business logic, and third-party scripts into one slow pipeline, and any change risked breaking checkout. Mobile performance was the biggest revenue leak, but the team could not ship a long feature freeze to fix it.",
      "Checkout abandonment data showed users dropping at payment and address steps. The flow had accumulated years of edge cases and had never been redesigned end-to-end.",
    ],
    solutions: [
      "I moved to a headless architecture: Next.js handles presentation, product pages are statically generated and revalidated in the background, and images are served in modern formats at the right size per device. Time to interactive on mid-range phones dropped from over four seconds to around one.",
      "I rebuilt checkout as a single, progressive flow with saved addresses, inline validation, and payment options that work reliably in low-bandwidth conditions. Every step is measured, so the team can now run experiments on the funnel directly.",
    ],
    results: [
      "Conversion rate rose by 32% in the first quarter after launch, with the largest gains coming from mobile sessions — exactly where the old site was losing customers.",
      "Bounce rate fell by 28% and average revenue per session climbed by 21%. The team now ships storefront changes daily through CI/CD instead of coordinating risky weekly releases.",
    ],
    metrics: [
      { value: "+32%", label: "Conversion rate" },
      { value: "1.1s", label: "Mobile LCP" },
      { value: "-28%", label: "Bounce rate" },
      { value: "+21%", label: "Revenue per session" },
    ],
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Vercel"],
    similar: [2, 7],
  },
  {
    id: 5,
    title: "Health & Fitness App",
    type: "MOBILE APP",
    category: "Mobile Apps",
    date: "Jan 2024",
    image: IMAGES.projects[4],
    cover: IMAGES.projects[4],
    gallery: [IMAGES.projects[0], IMAGES.projects[7]],
    service: "MOBILE APP DEVELOPMENT",
    industry: "Healthcare",
    client: "HealthSync",
    summary:
      "A cross-platform health companion with offline-first syncing, medication reminders, and privacy-conscious data handling.",
    description: [
      "HealthSync wanted a companion app for patients managing chronic conditions: logging vitals, tracking medication, and sharing summaries with clinicians. Reliability offline mattered as much as design, since many users have intermittent connectivity.",
      "I built the app in React Native with an offline-first architecture — every action writes to a local store first and syncs when the network allows, with conflict resolution rules agreed on with their clinical team. Sensitive records are encrypted on-device and in transit.",
    ],
    challenges: [
      "Patients could not be told their log was lost because the network dropped, so the app had to work fully offline and reconcile data later without creating duplicate or contradictory records.",
      "Health data demanded careful handling: consent flows, encryption at rest, and strict access rules for the clinician portal. The app also had to stay simple enough for non-technical users of all ages.",
    ],
    solutions: [
      "I implemented an offline-first sync engine: actions queue locally, sync incrementally when connectivity returns, and server-side rules resolve conflicts deterministically. Users see instant feedback regardless of network state, and nothing is ever silently dropped.",
      "I layered in device-level encryption for health records, granular consent controls per data type, and a read-only clinician view that only sees explicitly shared summaries. Reminder scheduling runs locally so medication alerts fire even offline.",
    ],
    results: [
      "The app passed 50,000 downloads in its first six months with a 4.7 store rating, and 30-day retention landed at 89% — well above the category average for health apps.",
      "Sync reliability measured at 99.5% of queued actions reconciled without user intervention, and the clinician portal became the primary channel for patient check-ins at two pilot clinics.",
    ],
    metrics: [
      { value: "50k+", label: "Downloads in 6 months" },
      { value: "4.7★", label: "Store rating" },
      { value: "89%", label: "30-day retention" },
      { value: "99.5%", label: "Sync success rate" },
    ],
    stack: ["React Native", "Node.js", "PostgreSQL", "SQLite", "AWS"],
    similar: [1, 6],
  },
  {
    id: 6,
    title: "Banking App Interaction",
    type: "MOBILE APP",
    category: "Mobile Apps",
    date: "Jun 2023",
    image: IMAGES.projects[6],
    cover: IMAGES.projects[6],
    gallery: [IMAGES.projects[1], IMAGES.projects[5]],
    service: "MOBILE APP DEVELOPMENT",
    industry: "Banking",
    client: "NeoBank",
    summary:
      "A redesigned mobile banking experience with biometric auth, instant transfers, and flows rebuilt around task completion.",
    description: [
      "NeoBank's mobile app worked, but analytics showed users abandoning core tasks — transfers, bill payments, card controls — halfway through. They hired me to rebuild the interaction layer and the API contracts behind it.",
      "I reworked the key flows around measured task-completion funnels, added biometric authentication with a secure session layer, and rebuilt the backend-for-frontend so each screen gets exactly the data it needs in one round trip.",
    ],
    challenges: [
      "Funnel data showed a 40% drop-off during transfers: users faced redundant confirmation screens, unclear fee displays, and slow loading between steps. Support tickets about 'stuck' transactions were the app's top complaint.",
      "The backend returned large, generic payloads per screen, which made every interaction feel slow on modest devices and networks — the reality for much of their user base.",
    ],
    solutions: [
      "I rebuilt transfers, bill payments, and card controls as progressive flows with optimistic UI: actions confirm instantly and reconcile with the server in the background, with clear recovery paths when something genuinely fails.",
      "I introduced a BFF layer that assembles per-screen payloads, cutting response sizes dramatically, and moved authentication to biometrics backed by short-lived tokens and device binding. Every flow is instrumented so the product team can watch task completion in real time.",
    ],
    results: [
      "Task completion on core flows rose to 92%, and transfer-related support calls dropped by 38% in the first quarter after release. App store reviews shifted from complaints about stuck transfers to praise for speed.",
      "New-user onboarding now completes in about 90 seconds on average, down from several minutes, contributing to a 4.8 store rating and materially lower cost-to-serve per customer.",
    ],
    metrics: [
      { value: "92%", label: "Task completion rate" },
      { value: "-38%", label: "Transfer support calls" },
      { value: "90s", label: "Avg. onboarding time" },
      { value: "4.8★", label: "Store rating" },
    ],
    stack: ["React Native", "Golang", "PostgreSQL", "Redis", "OAuth 2.0"],
    similar: [1, 5],
  },
  {
    id: 7,
    title: "SaaS Dashboard UI",
    type: "WEB APP",
    category: "SaaS",
    date: "Nov 2024",
    image: IMAGES.projects[1],
    cover: IMAGES.projects[1],
    gallery: [IMAGES.projects[7], IMAGES.projects[0]],
    service: "FRONTEND ENGINEERING",
    industry: "SaaS",
    client: "CloudMetrics Inc.",
    summary:
      "A real-time product analytics dashboard with role-based views, live charts, and a component system that cut feature delivery time in half.",
    description: [
      "CloudMetrics sells infrastructure analytics, but their dashboard had grown into a slow, inconsistent interface that customers complained about weekly. They needed a rebuild that could stream live metrics without freezing the browser.",
      "I rebuilt the dashboard in Next.js with a WebSocket layer for live updates and a small internal component library so every chart, table, and filter behaves consistently. Role-based views ensure operators, admins, and executives each see exactly what matters to them.",
    ],
    challenges: [
      "The legacy dashboard polled the API every few seconds and re-rendered the entire page, which made it unusable for accounts with high-volume data. Feature delivery was also slow because every screen reimplemented its own charts and filters.",
      "Customer churn interviews pointed directly at the interface: it felt sluggish, looked inconsistent, and hid key metrics behind too many clicks. The team needed a rebuild that would not pause new feature work for months.",
    ],
    solutions: [
      "I replaced polling with a WebSocket feed and virtualized every large table and chart, so the UI stays responsive even with tens of thousands of live data points. Updates are batched and diffed to avoid unnecessary renders.",
      "I extracted a typed component library — charts, metric cards, filters, and data tables — documented with live examples. New screens are now assembled from proven building blocks, which cut average feature delivery time roughly in half.",
    ],
    results: [
      "Daily active usage of the dashboard rose by 45% within two months of launch, and dashboard-related support tickets fell by roughly a third. Customers specifically called out the speed improvement in reviews.",
      "The internal component library is now used across three product areas, and the engineering team ships interface features in days instead of weeks while keeping a consistent look and feel.",
    ],
    metrics: [
      { value: "+45%", label: "Daily active usage" },
      { value: "-33%", label: "Support tickets" },
      { value: "95+", label: "Lighthouse performance" },
      { value: "2x", label: "Faster feature delivery" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Recharts"],
    similar: [4, 8],
  },
  {
    id: 8,
    title: "Analytics Dashboard",
    type: "WEB APP",
    category: "AI & ML",
    date: "Mar 2023",
    image: IMAGES.projects[7],
    cover: IMAGES.projects[7],
    gallery: [IMAGES.projects[2], IMAGES.projects[6]],
    service: "AI / DATA ENGINEERING",
    industry: "Analytics",
    client: "DataPulse",
    summary:
      "An ML-powered analytics platform that detects anomalies in event streams and turns millions of daily events into actionable alerts.",
    description: [
      "DataPulse ingested millions of business events a day, but their dashboards only showed what analysts already knew to look for. Genuine anomalies — fraud spikes, broken funnels, data pipeline failures — were discovered hours late, usually by a customer.",
      "I built a streaming pipeline that scores events with anomaly-detection models in near real time, and a dashboard that surfaces the anomalies that matter with explainable context: what changed, versus what baseline, and which segment is affected.",
    ],
    challenges: [
      "The volume — over five million events a day — made manual review impossible, and naive threshold alerting produced so many false positives that the team had started ignoring alerts altogether.",
      "Analysts also needed to trust the system: a black-box alert that says something is anomalous without explaining why would never be acted on in time. Explainability was a hard requirement, not a nice-to-have.",
    ],
    solutions: [
      "I built a Kafka-based streaming pipeline feeding seasonal decomposition and isolation-forest models tuned per metric, which cut false positives dramatically compared with static thresholds. Alerts fire within two minutes of an anomaly starting.",
      "Every alert ships with an explanation — contribution scores showing which dimensions drove the anomaly — and a one-click drill-down into the affected segment. Analysts can confirm or dismiss alerts, and that feedback continuously retrains the detectors.",
    ],
    results: [
      "Anomaly detection precision reached 94% with feedback-driven retraining, and mean time to detect real incidents fell from hours to under two minutes.",
      "Manual data review effort dropped by roughly 80%, freeing the analytics team to work on strategy instead of watching dashboards — and the alert explanations became the feature customers cited most in renewal conversations.",
    ],
    metrics: [
      { value: "94%", label: "Detection precision" },
      { value: "<2min", label: "Time to detect" },
      { value: "5M+", label: "Events processed / day" },
      { value: "-80%", label: "Manual review effort" },
    ],
    stack: ["Python", "FastAPI", "Kafka", "PostgreSQL", "scikit-learn", "Docker"],
    similar: [3, 7],
  },
];

export const getProject = (id: number): Project | undefined =>
  PROJECTS.find((p) => p.id === id);

export const getSimilarProjects = (project: Project): Project[] =>
  project.similar
    .map((id) => getProject(id))
    .filter((p): p is Project => Boolean(p));
