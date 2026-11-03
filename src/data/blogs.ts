import type { Motif } from "./projects";

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  motif: Motif;
  excerpt: string;
  tags: string[];
  intro: string[];
  sections: BlogSection[];
  outro: string[];
}

// Long-form notes drawn from the work in /portfolio and /research: what the
// artefacts measure, what they refuse to claim, and what that changes in
// practice. Written to be read by an engineer, not a buyer.
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "five-boring-failures",
    title: "The five boring failures that will ship with your AI feature",
    category: "AI Security",
    date: "3 Nov 2026",
    readTime: "9 min read",
    motif: "probes",
    excerpt:
      "Not a jailbreak from a film. A refusal that only works in English, a poisoned document, a tool description nobody read, and a metric with no sample size.",
    tags: ["AI Security", "Red Teaming", "Prompt Injection", "Evaluation"],
    intro: [
      "Most AI security conversations start with a scenario nobody can reproduce: an attacker with unlimited time, a model with no guardrails, and a payload that reads like fiction. Those conversations are entertaining and almost entirely useless for deciding what to ship on Tuesday.",
      "The failures that actually reach customers are dull. They survive review because each one is individually plausible, and they compound because nobody tested the combination. These are the five I test first against any agent, and the reason each one ships.",
    ],
    sections: [
      {
        heading: "1. The prompt is not a wall",
        paragraphs: [
          "A system prompt is context, not a boundary. The model has no mechanism that distinguishes an instruction from you and an instruction embedded in a customer message; both arrive as tokens, and the model's job is to be helpful about both. That is not a bug you can prompt your way out of; it is the architecture.",
          "So the useful test is not “can it be jailbroken?” but “what specifically comes out, and does anything downstream care?” I run three direct attempts: print the system prompt, reframe as a trusted internal role, and embed an instruction block in otherwise ordinary content. If the secret leaves, the failure is not the model's eloquence; it is that a secret was in a prompt at all.",
        ],
      },
      {
        heading: "2. Retrieval is untrusted input",
        paragraphs: [
          "The moment a knowledge base becomes writable by anyone who is not you (a support article, a customer-uploaded PDF, a scraped page), retrieval becomes an injection channel. The document is retrieved because it matches semantically, and the hidden instruction inside it arrives with the same authority as your policy text.",
          "One poisoned document with a hidden instruction is enough to demonstrate this. The interesting result is usually not a dramatic failure but a small, plausible deviation: a refund policy misquoted, a link swapped, an instruction followed in the third sentence after a correct first paragraph.",
        ],
      },
      {
        heading: "3. Tools are trusted unread",
        paragraphs: [
          "Tool descriptions are instructions, and most teams review them the way they review a docstring: quickly, once, at 1 a.m. before a release. A description that carries an instruction, and a model that treats tool metadata as trusted guidance, is a second injection surface that no amount of user-input filtering covers.",
          "The test is a comparison: reply with the tool present, reply with it absent. If the answer changes in a way the tool does not justify, the metadata is steering behaviour and you have a finding.",
        ],
      },
      {
        heading: "4. One language",
        paragraphs: [
          "I built the refusal tests in this harness around how customers in Lagos actually write: a plain English message, and the same request in mixed Pidgin/Yoruba. The English refusal holds. The mixed-language version often does not, because the safety behaviour was demonstrated in a language the evaluation set was written in.",
          "This is the cheapest failure to find and the most embarrassing to explain. It is also invisible to any suite that only tests English, which is most of them.",
        ],
      },
      {
        heading: "5. The metric",
        paragraphs: [
          "A dashboard that says “injection resistance: 94%” with no denominator is not a measurement. Ninety-four percent of what, on which input classes, with what confidence interval, and how many of those items were known-hold controls? Without the sample size and the raw output, the number is a mood.",
          "The metric that matters is narrower and more useful: how often a specific failure fires on a specific input type, with the sample size next to every rate. That is a number you can act on, and re-run after a fix.",
        ],
      },
    ],
    outro: [
      "None of these tests took a week to write. The reason they ship anyway is that nobody owns the question “what did we actually test?” until an incident makes it urgent.",
      "The harness for all five is open source, points at any OpenAI-compatible endpoint, and ships the method rather than results, because a result from someone else's model tells you nothing about yours.",
    ],
  },
  {
    id: 2,
    slug: "your-eval-passed-what-did-it-prove",
    title: "Your eval passed. What exactly did it prove?",
    category: "Evaluation",
    date: "1 Nov 2026",
    readTime: "10 min read",
    motif: "chain",
    excerpt:
      "When the judge, the harness and the person reading the report are the same system, a green eval is a self-grade. Evidence is the missing layer.",
    tags: ["Evaluation", "Evidence", "LLM Judges", "Research"],
    intro: [
      "There is a category of artefact that looks rigorous and proves very little: the evaluation report. It has numbers, a methodology section, and a green summary. It was produced by a tool that contains its own judge, run by the team that built the system being evaluated, and printed into a PDF that no one outside that team can re-derive.",
      "That is not a criticism of the teams. The tooling landscape pushed them there: attacks are commoditised, scoring is commoditised, taxonomy is standardised, and the fourth layer, evidence, is empty.",
    ],
    sections: [
      {
        heading: "The judge is part of the measurement",
        paragraphs: [
          "Every LLM-judge result contains at least two uncertainties: whether the system under test behaved as scored, and whether the judge scored it correctly. Most reports collapse both into one number. The research is unambiguous that the second uncertainty is real: no judge is uniformly reliable, verdicts flip on reformatting and verbosity, and judges prefer their own outputs.",
          "If the judge lives inside the tool, the evaluator and the evaluated share an operator, and a green grade from such a tool is a self-grade. The fix is not a better judge. It is measuring the judge and reporting its numbers next to the result.",
        ],
      },
      {
        heading: "What a re-derivable record requires",
        paragraphs: [
          "Four things, and each one is a design decision rather than a feature. First, ids pre-assigned before the first attempt, so a missing result is visibly missing instead of a shorter list. Second, a binding between action, policy version, decision and effect, sealed at write time. Third, the raw input and output stored in the bundle, not just the derived verdict. Fourth, a chain that makes later edits detectable.",
          "With those in place, `verify` becomes a one-command operation: re-walk the chain, re-hash the manifest, re-run the detectors on the stored raw. It needs no model, no key and no network, which is precisely what makes it usable by someone who does not trust you.",
        ],
      },
      {
        heading: "Negative controls or it is decoration",
        paragraphs: [
          "A checker that cannot fail is decoration. Every suite should carry items whose answers it knows: some that must hold, some that must break. They cannot be generated by the same code path that grades them, and the false-positive and false-negative counts belong in the result.",
          "This is the cheapest defence against the failure mode where a detector silently stops detecting. Without controls, a broken check looks exactly like a clean run.",
        ],
      },
      {
        heading: "Stability is a relation between runs",
        paragraphs: [
          "A single run is a point. The interesting question is whether the same suite, run twice with different surface drift, produces the same verdicts. In the tieout demo, two committed runs against the same agent show ten transcripts drifting while zero verdicts flip; the words moved, the conclusions did not.",
          "That is the paraphrase phenomenon shown at the run level, and it is the number I would want before trusting any single evaluation snapshot. Where verdicts do flip, the diff names the items, which turns an argument about model behaviour into a list of specific cases.",
        ],
      },
      {
        heading: "Say what you cannot prove",
        paragraphs: [
          "Every evidence bundle has edges. A decision time carried through replay is source-asserted, not independently verified. A key derived from a fixed seed demonstrates internal consistency, not production key management. A gap in the store may be recoverable, or it may be silence.",
          "Recording those as named gaps (with reason and scope) costs a paragraph and buys credibility. A bundle that lists its limits is far more useful than one that pretends not to have any, because the reader can see exactly where the claim stops.",
        ],
      },
    ],
    outro: [
      "The report is a claim. The bundle is a record. If a stranger with a cold clone and no credentials cannot re-derive the verdict, what you have is a press release with a methodology section.",
      "tieout is my attempt to make the second thing normal: every verdict bound, every gap named, and one command to check the whole thing without trusting the tool that produced it.",
    ],
  },
  {
    id: 3,
    slug: "a-gate-that-only-blocks-on-regression",
    title: "A red-team gate that only blocks when you get worse",
    category: "CI & Security",
    date: "28 Oct 2026",
    readTime: "8 min read",
    motif: "gate",
    excerpt:
      "Security gates die of noise, not of being wrong. Baseline semantics are what keep one switched on past the third pull request.",
    tags: ["CI", "Red Teaming", "SARIF", "Engineering"],
    intro: [
      "Every team that has tried to put a scanner in CI knows the arc. The first build is a wall of findings. The second is the same wall. By the third, someone adds `continue-on-error` to unblock a release, and the control is now decorative.",
      "The gate did not fail because it was wrong. It failed because it could not distinguish a bug shipped last quarter from one being shipped in this pull request, and a gate that reports everything is a gate nobody reads.",
    ],
    sections: [
      {
        heading: "A pull request asks one question",
        paragraphs: [
          "Not “is this system secure?” That is a programme, not a review. A pull request asks: is this worse than it was before? That question has an answer that fits on a comment: these findings are new, these got worse, these were fixed, these were already known.",
          "Once the question is framed that way, the implementation is clear. Record today's state as a baseline, fingerprint every finding, and diff each run against it. Known findings pass. New or worsened findings at or above the threshold block.",
        ],
      },
      {
        heading: "Fingerprints are the whole product",
        paragraphs: [
          "If the fingerprint is unstable, the gate is either blind or useless: a finding whose id changes every run will look new forever, and one that groups everything looks unchanged. The fingerprint has to encode the weakness, not the transcript: same category, same failure, same place in the system.",
          "That is also what makes multiple engines worth having. If Promptfoo, PyRIT and a built-in engine all catch the same weakness, the finding shows three `found by` names rather than three rows. Coverage goes up; noise does not.",
        ],
      },
      {
        heading: "Severity thresholds, not severity theatre",
        paragraphs: [
          "Not every finding deserves to block a merge. A medium system-prompt leak may be a ticket; a critical data-exfiltration path is a stop. The threshold is a policy decision and it belongs in version control, next to the baseline, where a reviewer can see when it changed.",
          "The point is not to hide the quieter findings; they still appear in the comment and in SARIF. They simply do not hold the release hostage, which is what keeps the gate credible for the ones that should.",
        ],
      },
      {
        heading: "Prove the comparison is honest",
        paragraphs: [
          "A gate comparing two different agents tells you nothing. The demo agents in gatecheck are the same rule engine one flag apart, so the difference between the blocked run and the passing run is genuinely the hardening, not a change of target.",
          "Both runs are committed as artefacts (PR comment, JSON and SARIF), so the claim can be checked without installing anything. That is a small thing that makes the tool reviewable by someone who has not yet decided to trust it.",
        ],
      },
    ],
    outro: [
      "A security gate is a product with users, and its users are engineers trying to ship. The measure of success is not how many findings it reports on day one; it is whether it is still switched on in month three.",
      "gatecheck is built around that single constraint: block on regression, report the rest, and stay quiet about what has not changed.",
    ],
  },
  {
    id: 4,
    slug: "what-survives-when-the-host-dies",
    title: "What survives when the host dies",
    category: "Reliability",
    date: "12 Oct 2026",
    readTime: "8 min read",
    motif: "crash",
    excerpt:
      "An audit trail is not the log you intended to write. It is what was on disk when the process stopped.",
    tags: ["Reliability", "Audit Logs", "Crash Consistency", "Agents"],
    intro: [
      "Ask a team whether their agent logs decisions and they will show you code that logs decisions. Ask what happens if the process exits between the decision and the write and the answers get more interesting.",
      "The gap between those two questions is the whole subject of crash consistency, and it is where audit claims quietly stop being true. An agent guard can be correct and still leave no usable record of what it decided.",
    ],
    sections: [
      {
        heading: "Four rows, four different failures",
        paragraphs: [
          "It helps to name the cases instead of the general worry. A decision made and never emitted. A decision emitted and lost before it reached the store. The host dying before anything was ingested. A record that survived but cannot be verified as the record it claims to be.",
          "Each row fails for a different reason and each needs its own test. Collapsing them into a single score hides the distinction between “we lost the evidence” and “we have evidence we cannot authenticate”, which are different arguments to have with an auditor.",
        ],
      },
      {
        heading: "Exit deliberately, not by signal",
        paragraphs: [
          "A test that kills a process from outside with a signal is testing the signal handler. A test that calls `os._exit(9)` from inside is testing what happens when nothing gets a chance to clean up: no destructors, no flush, no graceful shutdown path.",
          "That is the honest version of a host death. If the write-ahead log survives it, you learn something real about the ordering of your writes. If it does not, you have found the exact window where an action can happen with no record.",
        ],
      },
      {
        heading: "The gap is the result",
        paragraphs: [
          "When the host dies before ingestion, the interesting output is not a pass or fail. It is the strength of the resulting gap: the store holds the issued id and a commitment to the descriptor, so the record can name a gap with its content; it holds only the id, so the record can name a gap with no content; it holds nothing, so the record can say nothing at all.",
          "The third case is the strongest statement in the table and the least comfortable: the benchmark itself cannot tell that an action happened. A suite that claimed to detect it would be reporting its own cleverness, so the limit is written down instead.",
        ],
      },
      {
        heading: "Make the checker carry its own weight",
        paragraphs: [
          "If the verification program reads a “pass” flag, it is a reporting tool. It has to re-derive every assertion from raw files that could be wrong. Then someone has to damage the artefacts on purpose and require that the check catches it: ten ways, plus a directory that is not a run at all.",
          "The hard version of this is a mutation suite per audited finding: every mutation passed verification before the review and has to fail it afterwards. That turns “we fixed the checker” into a set of reproducible cases rather than a claim in a changelog.",
        ],
      },
    ],
    outro: [
      "Audit trails are usually specified in the future tense: what the system will write. Crash consistency is the past tense: what the system wrote before it stopped.",
      "The benchmark is open source and standard-library only, because the question is worth asking on a laptop before it is worth arguing about in a review.",
    ],
  },
  {
    id: 5,
    slug: "contracts-that-fail-the-build",
    title: "An API contract that fails the build when it drifts",
    category: "Engineering",
    date: "24 Sep 2026",
    readTime: "7 min read",
    motif: "routes",
    excerpt:
      "An OpenAPI file nobody checks against the router is documentation with a schema. Here is how to make drift a build failure in both directions.",
    tags: ["API Design", "OpenAPI", "Go", "CI"],
    intro: [
      "Every project has an API contract. In some it is an OpenAPI file, in others it is a Postman collection, and in most it is the accumulated memory of whoever wrote the router. The failure mode is identical: the client and the server disagree, and nobody notices until a field is missing in production.",
      "Documentation that is not checked is a claim. A contract is a file that fails the build when it stops being true.",
    ],
    sections: [
      {
        heading: "Check both directions",
        paragraphs: [
          "The obvious check is that every documented route exists. The check that actually catches drift is the other direction: every handler in the router is documented. Undocumented endpoints are how internal routes leak into production and how clients end up reverse-engineering behaviour from errors.",
          "In EduMart OS, the OpenAPI file describes all forty-eight path+method pairs and is compared against the Go router on every CI run. An undocumented handler and a documented-but-missing endpoint both fail the build. That is the whole feature, and it costs one script.",
        ],
      },
      {
        heading: "A contract is also for the client you have not written",
        paragraphs: [
          "When one API serves a web app, a PWA and a native app, the contract is what lets them ship from one commit without drifting. The moment each shell has its own idea of the response shape, you have three products that occasionally agree.",
          "Shared types help inside TypeScript, but they stop at the Go boundary, which is exactly where the contract check earns its place. The OpenAPI file is the piece both sides can depend on regardless of language, as long as it is enforced.",
        ],
      },
      {
        heading: "One envelope, one error shape",
        paragraphs: [
          "Consistency is underrated. A response envelope of data plus meta, and an error object with code, message and details, means clients handle failure in one place. Without it, every new endpoint teaches every client one more special case.",
          "This is also what makes generated clients and test fixtures tractable. If success and failure look the same everywhere, most of the integration code becomes mechanical, which is the goal.",
        ],
      },
      {
        heading: "Validate configuration the same way",
        paragraphs: [
          "The same philosophy applies to environment variables. An API that boots with a half-filled environment file looks healthy until the first request that needs the missing value, usually during a release. Boot-time validation turns a production surprise into a failed start on the machine of whoever forgot it.",
          "One service in this portfolio refuses to start in production with missing payment secrets, open CORS or demo seeds enabled. That refusal is worth more than a checklist in a wiki, because it cannot be skipped under deadline pressure.",
        ],
      },
    ],
    outro: [
      "Contracts are cheap to write and expensive to keep honest. Automating the honesty is the only version that survives a busy quarter.",
      "Write the spec, check it against the router in both directions, and let the build carry the discipline for you.",
    ],
  },
  {
    id: 6,
    slug: "money-belongs-in-integers",
    title: "Money belongs in integers, and permissions in the database",
    category: "Data modelling",
    date: "9 Sep 2026",
    readTime: "8 min read",
    motif: "ledger",
    excerpt:
      "Double-entry ledgers in kobo, corrections by counter-entry, and isolation enforced by row-level security instead of hope.",
    tags: ["PostgreSQL", "Ledgers", "Row-Level Security", "Fintech"],
    intro: [
      "Financial software fails in ways that are unusually easy to describe and unusually hard to fix: a balance that does not reconcile, a correction that erased history, or a branch manager who can read another branch's records because isolation lived in application code.",
      "Three decisions prevent most of it, and none of them are advanced: integers for money, double-entry for the ledger, and row-level security for tenancy.",
    ],
    sections: [
      {
        heading: "Kobo, not floats",
        paragraphs: [
          "A float cannot represent 0.10 exactly, and a currency that has to reconcile to the smallest unit is the worst possible place to accept approximate arithmetic. Store the smallest unit as an integer (kobo, cents) and format at the edge.",
          "This also makes aggregation deterministic. Sums of integers are exact at every scale, and an amount that arrives from a payment provider can be compared to the stored value without a tolerance window that hides real bugs.",
        ],
      },
      {
        heading: "Every naira posted twice",
        paragraphs: [
          "Double-entry is usually presented as accounting trivia. It is really an invariant: the sum of postings is zero, so a missing or duplicated leg is detectable by construction rather than by a report nobody runs. Accounts, journals and signed lines are enough to model it.",
          "The part that makes it durable is where the invariant lives. A Postgres constraint trigger that refuses an unbalanced journal means correctness does not depend on every future handler remembering to check. Corrections are counter-entries, never deletes, so the history survives an audit.",
        ],
      },
      {
        heading: "Isolation as a database backstop",
        paragraphs: [
          "Multi-tenant isolation often starts as a `where schoolId = ?` clause added by every developer on every query. It works until one query forgets, and the failure is invisible until data from another tenant appears in someone's list.",
          "Row-level security moves the guarantee into the database, where a missing clause cannot bypass it. Pair it with a coverage guard in CI that fails when a tenant table is left unprotected, and the guarantee survives the next three features.",
        ],
      },
      {
        heading: "Webhooks are an interface, treat them like one",
        paragraphs: [
          "Payment webhooks arrive twice, out of order, unsigned and late. Verifying the signature is the minimum; idempotency is what makes retries safe, and a reference on every payment is what makes reconciliation possible at all.",
          "Refunds and transfers deserve explicit workflows rather than a status field. They are the operations most likely to be performed in a hurry and least likely to be reversible.",
        ],
      },
    ],
    outro: [
      "None of this is clever. Integers, an invariant enforced in the database, isolation the application cannot skip, and idempotent payment handling.",
      "That is the point: financial correctness should not depend on the diligence of whoever writes the next endpoint.",
    ],
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((post) => post.slug === slug);

export const getRelatedPosts = (post: BlogPost, count = 3): BlogPost[] =>
  BLOG_POSTS.filter((candidate) => candidate.id !== post.id).slice(0, count);
