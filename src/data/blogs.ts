import { IMAGES } from "./images";

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  tags: string[];
  intro: string[];
  sections: BlogSection[];
  outro: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch",
    category: "Development",
    date: "Jan 15, 2025",
    readTime: "6 min read",
    image: IMAGES.blog[0],
    excerpt:
      "AI-assisted tooling, edge rendering, and component-driven architecture are reshaping how we build for the web. Here is what actually matters.",
    tags: ["Web Development", "AI", "Edge Computing", "Trends"],
    intro: [
      "The web platform evolves in waves, and most waves turn out to be ripples. But a few shifts happening right now are genuinely changing how teams build and ship software — and ignoring them has a real cost.",
      "After spending the past year working across backend systems, AI tooling, and frontend delivery, these are the trends I think are structural rather than fashionable, and what they mean for engineers and the products they build.",
    ],
    sections: [
      {
        heading: "AI-assisted development grows up",
        paragraphs: [
          "AI coding assistants moved past autocomplete in 2024. The useful ones now reason about whole repositories: they refactor across files, write tests against existing patterns, and explain unfamiliar codebases in minutes instead of days.",
          "The practical impact is not that developers write less code — it is that the boring parts of the job shrink. Boilerplate, migrations, test scaffolding, and documentation drafts get automated, while architecture decisions, security review, and product judgment matter more than ever. Teams that treat AI as a junior engineer with infinite patience get a real multiplier; teams that treat it as an autopilot ship bugs faster.",
        ],
      },
      {
        heading: "The edge becomes the default deployment target",
        paragraphs: [
          "Rendering close to users used to mean a CDN for static assets. Now entire application runtimes execute at the edge: server components, API routes, and even database reads happen within tens of milliseconds of your users.",
          "For products with globally distributed audiences — and especially for African products serving users on variable networks — this is transformative. A server component that renders in Lagos instead of Virginia is not a marginal optimization; it is the difference between an app that feels instant and one that feels broken.",
        ],
      },
      {
        heading: "Component-driven architecture wins",
        paragraphs: [
          "Design systems matured from style guides into actual engineering infrastructure. Typed component libraries with live documentation now let product teams assemble screens from proven pieces instead of rewriting interfaces per feature.",
          "The teams moving fastest are the ones where design tokens, components, and backend contracts are all versioned and tested like any other code. Consistency stops being a design review problem and becomes a compile-time guarantee.",
        ],
      },
      {
        heading: "Security shifts left — again, for real this time",
        paragraphs: [
          "Supply-chain attacks, leaked API keys, and prompt injection in AI features have made security a build-time concern rather than a pre-launch audit. Dependency scanning, secret detection, and threat modeling are moving into CI pipelines and code review checklists.",
          "I expect 'AI red teaming' — adversarially testing AI-powered features before release — to become as routine as penetration testing did for web apps. If your product talks to a language model, someone will try to make it misbehave; the only question is whether you find out first.",
        ],
      },
    ],
    outro: [
      "The through-line across all of these trends is the same: the fundamentals — understanding users, writing clean code, and delivering value — remain constant, but the leverage available to small teams keeps compounding.",
      "The engineers who will thrive are not the ones chasing every new framework. They are the ones who adopt the shifts that remove real friction and stay skeptical of everything else.",
    ],
  },
  {
    id: 2,
    title: "Building Scalable Design Systems for Growing Teams",
    category: "Design",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    image: IMAGES.blog[1],
    excerpt:
      "A design system is engineering infrastructure, not a Figma library. Here is how to build one that survives contact with a growing product team.",
    tags: ["Design Systems", "React", "TypeScript", "Tooling"],
    intro: [
      "Every growing product team hits the same wall: five engineers can keep an interface consistent through conversation, but fifteen cannot. Buttons drift, spacing arguments resurface every sprint, and every new feature reintroduces old debates.",
      "A design system is the answer — but most attempts fail because they are treated as a design deliverable instead of what they actually are: engineering infrastructure with users, an API, and a maintenance burden. Here is what I have learned building them for teams from four to forty engineers.",
    ],
    sections: [
      {
        heading: "Start with tokens, not components",
        paragraphs: [
          "The foundation of every durable design system is a set of design tokens: named values for color, spacing, typography, and radius that are consumed by both design tools and code. Components built on raw values will fork; components built on tokens stay coherent when the brand evolves.",
          "Define tokens once and generate everything from them — CSS variables, Tailwind config, mobile constants. The day your brand team changes the primary blue, you want that to be a one-line change, not a grep across forty repositories.",
        ],
      },
      {
        heading: "Treat components like a public API",
        paragraphs: [
          "A component library is an API, and APIs need the same discipline: semantic versioning, deprecation periods, typed props, and tests. When a team of twenty depends on your Button, changing its behavior on a whim is not refactoring — it is an outage.",
          "TypeScript is non-negotiable here. Well-typed props turn most misuse into compile errors, and autocomplete becomes the documentation. Pair that with a small surface area: a component with twelve boolean props is a component nobody understands, and eventually nobody uses correctly.",
        ],
      },
      {
        heading: "Documentation is the product",
        paragraphs: [
          "Engineers will not read a Confluence page to learn your components. Adoption comes from documentation that lives where the code does: live examples in Storybook, copy-paste snippets, and prop tables generated from the types themselves.",
          "The best metric I know for a design system's health is not coverage or downloads — it is how often people copy-paste from your docs versus screenshotting someone else's UI. Optimize relentlessly for the first one.",
        ],
      },
      {
        heading: "Governance without a bottleneck",
        paragraphs: [
          "Design systems die two ways: chaos, where anyone adds anything, and bureaucracy, where every new component waits six weeks on a committee. The fix is a thin contribution model — a clear process for proposing components, fast review turnaround, and ownership that rotates.",
          "Measure adoption, not output. The number of components you shipped means nothing if product teams keep building parallel ones. When adoption stalls, the problem is almost always ergonomics or documentation, not missing components.",
        ],
      },
    ],
    outro: [
      "A great design system is invisible: product teams stop debating spacing and start shipping features, and the interface stays coherent as the team doubles and triples.",
      "Build it like the infrastructure it is — versioned, tested, documented, and owned — and it will quietly become the highest-leverage investment your engineering org makes.",
    ],
  },
  {
    id: 3,
    title: "Why Your Startup Needs a Strong Digital Presence",
    category: "Strategy",
    date: "Jan 5, 2025",
    readTime: "5 min read",
    image: IMAGES.blog[2],
    excerpt:
      "Your website is your most underpriced employee. The technical foundations of credibility — and how to build them without overbuilding.",
    tags: ["Strategy", "Startups", "Web Development", "Growth"],
    intro: [
      "Founders often treat their website as a brochure: something that needs to exist, ideally look decent, and otherwise stay out of the way. That framing undersells what a digital presence actually does for an early-stage company.",
      "Before a customer, investor, or hire ever speaks to you, they will spend ninety seconds on your site forming a judgment about whether you are real, competent, and worth their time. Your digital presence is your most underpriced employee — it works every hour, in every market, for free.",
    ],
    sections: [
      {
        heading: "Credibility is a technical property",
        paragraphs: [
          "Users judge trustworthiness in milliseconds, and most of the signals are technical: load speed, mobile rendering, visual consistency, and whether links work. A slow page does not just lose visitors — it quietly tells them your company is careless.",
          "This is especially true in B2B and fintech, where the product itself is a promise of reliability. If your marketing site janks on a mid-range Android, nobody is trusting you with their money or their data. Performance budgets and real-device testing are credibility work.",
        ],
      },
      {
        heading: "Founders can build this lean",
        paragraphs: [
          "A strong presence does not require an agency retainer. A modern stack — Next.js, a headless CMS or even a markdown file, and a platform like Vercel — gets you a fast, secure site that a single engineer can own end to end.",
          "The lean playbook: five pages done excellently beat twenty done averagely. Clear positioning, proof (case studies, metrics, testimonials), and one obvious call to action. Ship it fast, then let analytics tell you what to improve instead of guessing.",
        ],
      },
      {
        heading: "Content compounds, ads expire",
        paragraphs: [
          "Paid acquisition stops the day the budget stops. Technical content — engineering blog posts, documentation, comparison pages, changelogs — keeps earning traffic and trust for years. Every serious company you admire has a content flywheel running quietly in the background.",
          "The bar is lower than founders think. Two honest posts a month about what you are building and what you learned will outperform a silent 'coming soon' page in every metric that matters: inbound leads, hiring quality, and investor warmth.",
        ],
      },
      {
        heading: "Own the channel you control",
        paragraphs: [
          "Algorithms change, ad prices rise, platforms pivot. Your website is the one channel where you set the rules — and it is where every other channel eventually points. Social profiles, marketplaces, and app stores are rented land.",
          "Treat your digital presence like infrastructure: instrument it with analytics, keep it fast, keep it secure, and review it quarterly the way you would review any other asset. The startups that do this boring work well compound an advantage that is very hard to buy later.",
        ],
      },
    ],
    outro: [
      "You do not need a big budget to look like a serious company. You need speed, clarity, consistency, and the discipline to maintain them.",
      "In a market where attention is scarce and trust is expensive, a strong digital presence is not a nice-to-have — it is the shortest distance between an unknown startup and a credible one.",
    ],
  },
  {
    id: 4,
    title: "React vs Next.js: Choosing the Right Framework",
    category: "Development",
    date: "Dec 28, 2024",
    readTime: "7 min read",
    image: IMAGES.blog[3],
    excerpt:
      "It is not a rivalry — Next.js is React with opinions. A practical guide to when those opinions help and when they get in the way.",
    tags: ["React", "Next.js", "Architecture", "Web Development"],
    intro: [
      "The question 'React or Next.js?' gets asked in nearly every project kickoff, and it is slightly the wrong question. Next.js is not an alternative to React — it is React with a set of strong opinions about routing, rendering, and data fetching baked in.",
      "The real question is whether those opinions fit your product. Having shipped production apps with both, here is the honest decision framework I use.",
    ],
    sections: [
      {
        heading: "What Next.js actually adds",
        paragraphs: [
          "Next.js gives you file-based routing, server-side and static rendering, an API layer, image optimization, and build-time performance work — all configured by convention rather than by you gluing libraries together.",
          "The value is not any single feature; it is that these decisions are made coherently for you. A React SPA forces you to choose and integrate a router, a data-fetching layer, and an SSR story yourself. Next.js hands you a working default for all of it on day one.",
        ],
      },
      {
        heading: "When plain React is the right call",
        paragraphs: [
          "If you are building an interface that lives inside an existing app — a dashboard embedded in a Rails app, a widget, a kiosk UI, or a desktop app with Electron — a plain React SPA is lighter and simpler. There is no server rendering to reason about and no framework lifecycle to fight.",
          "Plain React also makes sense when your backend is already a fully formed API and your team has deep SPA expertise. Adding a server-rendering layer nobody asked for is architecture astronautics, not engineering.",
        ],
      },
      {
        heading: "When Next.js clearly wins",
        paragraphs: [
          "For anything public-facing where SEO, first-load speed, or content freshness matters — marketing sites, commerce, blogs, marketplaces, SaaS dashboards — Next.js is the pragmatic default. Server components render on the server and stream to the client, so users see content fast even on slow networks.",
          "It also shines for small teams shipping full products: one codebase for frontend, backend API routes, and background work means fewer deployment targets and fewer integration boundaries. For a startup where the same engineer owns the feature end to end, that coherence is a genuine velocity win.",
        ],
      },
      {
        heading: "The practical checklist",
        paragraphs: [
          "Ask four questions. Does the product need SEO or fast first paint? Is there a small team that benefits from convention over configuration? Will you deploy to a platform that runs Node or edge functions? Do you want built-in image, font, and routing optimization? Three or more yeses — take Next.js.",
          "And remember the exit doors are not locked: components written for Next.js are mostly plain React components. Starting with Next.js does not trap you, and starting with React does not prevent you from adopting Next.js later when the product demands it.",
        ],
      },
    ],
    outro: [
      "Framework debates make better content than decisions. The boring truth is that both options are excellent, and the wrong choice is rarely fatal.",
      "Pick based on your product's actual constraints — SEO needs, team size, deployment targets — ship something, and let real usage data guide the next architectural conversation.",
    ],
  },
  {
    id: 5,
    title: "Mobile-First Design: Best Practices for 2025",
    category: "Design",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    image: IMAGES.blog[4],
    excerpt:
      "Mobile-first is no longer a responsive technique — for most products it is the primary platform. Engineering and design practices that respect that reality.",
    tags: ["Mobile", "Design", "Performance", "UX"],
    intro: [
      "The phrase 'mobile-first' is old enough to sound like advice from another era, but the reality behind it has only sharpened: for most products — and overwhelmingly for products serving African markets — the phone is not the small version of your app. It is the app.",
      "Yet many teams still design for a 1440-pixel canvas and squeeze the result into a viewport. Here is what mobile-first actually demands in 2025, from both the design and engineering sides.",
    ],
    sections: [
      {
        heading: "Design for thumbs, not cursors",
        paragraphs: [
          "A cursor is precise; a thumb is not. Touch targets below 44 pixels, actions buried in hover states, and dense tables that assume a mouse all fail on the device your users actually hold. Mobile-first design starts with the interaction model, not the breakpoint.",
          "Concretely: primary actions live in the bottom third of the screen, navigation collapses to a few high-value destinations, and every flow is tested one-handed. If a task needs pinch-zoom or landscape rotation to complete, it is broken by definition.",
        ],
      },
      {
        heading: "Performance is the first feature",
        paragraphs: [
          "On a mid-range Android over a congested network — the median real-world condition for huge user bases — a heavy page is not a slightly slow page, it is a page that never arrives. Every 100 kilobytes of JavaScript is a design decision with a human cost.",
          "The engineering practices that matter: aggressive code splitting, modern image formats served at device-appropriate sizes, fonts loaded with sensible fallbacks, and caching treated as a first-class feature. Measure on real devices, not your MacBook, and budget performance like you budget scope.",
        ],
      },
      {
        heading: "Offline is a feature, not an edge case",
        paragraphs: [
          "Intermittent connectivity is the norm for hundreds of millions of users. Apps that silently fail when the network drops lose trust instantly; apps that queue actions, show optimistic states, and sync gracefully feel almost magical by comparison.",
          "Design the empty and degraded states before the happy path. What does the screen show offline? What happens to the form the user spent two minutes filling in? Answering those questions is mobile-first work as much as any layout decision.",
        ],
      },
      {
        heading: "Progressive enhancement over parity",
        paragraphs: [
          "Chasing pixel parity between phone and desktop is a losing game — the contexts are different, so the experiences should be too. Mobile-first done well means designing the core task for the smallest, weakest context first, then enhancing for larger screens.",
          "The desktop version becomes an expansion — more columns, more data density, keyboard shortcuts — rather than the source of truth. Teams that invert this order consistently ship products that feel native on the device that matters most.",
        ],
      },
    ],
    outro: [
      "Mobile-first in 2025 is less about CSS and more about respect: for your users' devices, their networks, their hands, and their time.",
      "Design for the worst realistic context first. If the experience is great there, it will be effortless everywhere else.",
    ],
  },
  {
    id: 6,
    title: "API Architecture Patterns for Modern Applications",
    category: "Development",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: IMAGES.blog[5],
    excerpt:
      "REST, GraphQL, gRPC, events — the API landscape has real trade-offs. A field guide to picking the right pattern for each part of your system.",
    tags: ["APIs", "Architecture", "Backend", "System Design"],
    intro: [
      "Every backend conversation eventually becomes an API conversation, because an API is where your architecture meets reality: it is the contract your frontend, your partners, and your future self are stuck with.",
      "There is no universal best API style — there is the right pattern for each boundary in your system. After designing APIs for fintech, healthcare, and analytics platforms, here is how I think about the main patterns and when each one earns its place.",
    ],
    sections: [
      {
        heading: "REST: the pragmatic default",
        paragraphs: [
          "REST remains the right answer for most public-facing and CRUD-shaped APIs. It is cacheable with standard HTTP semantics, trivially debuggable with curl, understood by every engineer you will ever hire, and supported by every tool on earth.",
          "Where teams go wrong is not in choosing REST but in modeling it poorly: verbs in URLs, endpoints shaped like database tables, and responses that leak internal structure. A good REST API models your domain's resources and operations — getting the nouns right is eighty percent of the work.",
        ],
      },
      {
        heading: "GraphQL: for complex client needs",
        paragraphs: [
          "GraphQL shines when many clients need different slices of overlapping data — a mobile app, a web dashboard, and a partner portal all reading the same domain with different shapes. One endpoint, client-driven selection, no over-fetching or under-fetching.",
          "The honest cost: caching becomes your problem, N+1 queries become your problem, and authorization must be enforced field-by-field rather than endpoint-by-endpoint. Reach for GraphQL when client diversity is a real, present pain — not because it is fashionable.",
        ],
      },
      {
        heading: "gRPC and events: the internal plumbing",
        paragraphs: [
          "Inside the system, the calculus changes. Service-to-service calls benefit from gRPC's typed contracts, streaming, and low overhead — it makes refactors safer because the contract is checked by the compiler, not by production incidents.",
          "And where services need to tell each other that something happened — order placed, payment settled, anomaly detected — asynchronous events on a broker like Kafka beat request-response entirely. Events decouple producers from consumers, absorb traffic spikes, and give you a replayable history. Most robust systems I have built are REST at the edge, events in the middle.",
        ],
      },
      {
        heading: "The patterns that matter regardless of style",
        paragraphs: [
          "Whatever style you pick, a small set of cross-cutting patterns decides whether the API ages well: versioning strategy agreed up front, consistent error shapes, idempotency keys on every mutation, pagination everywhere, and rate limiting with clear headers.",
          "And treat the contract as an artifact: OpenAPI specs, generated clients, and contract tests in CI mean that backend and frontend teams can work in parallel without integration week becoming integration month. The API is a product — give it the same discipline you give the product itself.",
        ],
      },
    ],
    outro: [
      "Architecture is choosing trade-offs with your eyes open, and API design is where those trade-offs become contracts.",
      "Default to REST at your edges, use events to decouple your internals, reach for GraphQL and gRPC where specific pain justifies them — and spend most of your energy on the boring cross-cutting patterns that make any API trustworthy at scale.",
    ],
  },
];

export const getBlogPost = (id: number): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.id === id);

export const getRelatedPosts = (post: BlogPost, count = 3): BlogPost[] =>
  BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, count);
