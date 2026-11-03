export interface ResearchArtifact {
  name: string;
  repo: string;
  slug: string;
  doctrine: string;
  what: string;
  proves: string;
  doesNotProve: string;
  status: string;
}

export const RESEARCH_ARTIFACTS: ResearchArtifact[] = [
  {
    name: "tieout",
    repo: "https://github.com/Teamthy/Tie-out-",
    slug: "tieout",
    doctrine: "The report is a claim. The bundle is a record a stranger can re-derive.",
    what: "An evaluation harness that emits evidence: one bound, chained, re-derivable record per verdict, with the raw inputs and outputs stored in the bundle.",
    proves:
      "That every verdict in a run can be re-derived from stored raw output by someone who trusts neither the tool nor the operator — on a cold clone, with no model, key or network.",
    doesNotProve:
      "That the judge is right. It measures the judge's own agreement, perturbation flips and self-preference, and reports them, rather than certifying it.",
    status: "v0.3.0 · MIT",
  },
  {
    name: "gatecheck",
    repo: "https://github.com/Teamthy/gatecheck",
    slug: "gatecheck",
    doctrine: "Block only when the agent got easier to break.",
    what: "A CI gate that fingerprints findings, diffs them against a committed baseline, and fails a pull request only on new or worsened issues — with SARIF and a PR comment.",
    proves:
      "That a security gate can stay switched on: known findings stop being news, fixed ones are announced, and coverage from extra engines adds findings instead of duplicates.",
    doesNotProve:
      "That the corpus is complete. It says what this set of attacks found relative to the last run — a baseline, not a clean bill of health.",
    status: "MIT · GitHub Action",
  },
  {
    name: "host-failure-benchmark",
    repo: "https://github.com/Teamthy/host-failure-benchmark",
    slug: "host-failure-benchmark",
    doctrine: "What the record knows is what was written down before the host died.",
    what: "A standard-library benchmark for crash consistency in agent audit trails: deliberate mid-work process death, then verification by a program that trusts none of the artefacts.",
    proves:
      "Which failure rows survive a crash, which are recoverable, and how strong the resulting gap is — including the case where the benchmark itself cannot tell that an action happened.",
    doesNotProve:
      "Production key security or anyone's institutional trust; the demo key derives from a fixed seed and is labelled as internal consistency only.",
    status: "MIT · stdlib only",
  },
  {
    name: "ai-redteam-five-tests",
    repo: "https://github.com/Teamthy/ai-redteam-five-tests",
    slug: "ai-redteam-five-tests",
    doctrine: "The method, not pre-baked results.",
    what: "A runnable harness for five recurring AI failures: prompt injection, poisoned retrieval, unread tool descriptions, monolingual refusals, and metrics without sample sizes.",
    proves:
      "How often a specific failure fires on a specific input type for your model — with the sample size next to every rate, and the multilingual cases that real customers write.",
    doesNotProve:
      "Anything about a model you have not run it against. There are no stored results in the repository to borrow.",
    status: "MIT · any OpenAI-compatible model",
  },
];

export const PILLARS: { id: string; title: string; body: string }[] = [
  {
    id: "P1",
    title: "Verdict event",
    body: "One record per check result with a four-part binding: action, policy version, decision and effect reference. Ids are pre-assigned before the first attempt, so a missing item is a gap rather than a shorter history.",
  },
  {
    id: "P2",
    title: "Provenance",
    body: "Exact harness version, model, dataset hash, environment, decoding settings, seed, and the resolved endpoint of every judge call.",
  },
  {
    id: "P3",
    title: "Negative controls",
    body: "Every suite carries known-hold and known-broken items it does not generate. The check cannot write its own grade, and false positives and negatives are reported per run.",
  },
  {
    id: "P4",
    title: "Named gaps",
    body: "Anything unverifiable is recorded with its reason and scope, never dropped silently. A named gap is more honest than a green bundle.",
  },
  {
    id: "P5",
    title: "Re-derivation",
    body: "`verify` re-walks the hash chain, re-hashes the manifest and re-runs the detectors on stored raw output. No model, no key, no network.",
  },
  {
    id: "P6",
    title: "Judge audit",
    body: "The judge's own numbers every run: anchor agreement, perturbation flips, disagreement rate and a self-preference probe.",
  },
];

export const ENGAGEMENTS = [
  {
    title: "Failure-mode audit",
    length: "1–2 weeks",
    body: "Your bot, a real endpoint, and the five boring failures — injection, poisoned retrieval, tool descriptions, multilingual refusals and unmeasured rates. You get raw transcripts and a rate with its interval, not a score.",
    deliverables: ["Test corpus fitted to your system prompt", "Raw outputs and runnable harness", "Findings by input type with sample sizes", "Named gaps and what was not tested"],
  },
  {
    title: "Evidence bundle for an eval run",
    length: "2–4 weeks",
    body: "For teams that already run evals and need the result to survive a review: bound verdict events, provenance, negative controls, judge audit and a verification command a stranger can run.",
    deliverables: ["Chained, hashed bundle format", "`verify` command with no model or key", "Judge reliability report", "Documentation a non-author can follow"],
  },
  {
    title: "CI security gate",
    length: "1–2 weeks",
    body: "A gate that only fails when the agent got easier to break, so the team leaves it switched on. Baseline committed, findings fingerprinted, SARIF on the pull request.",
    deliverables: ["Corpus and threshold configuration", "Baseline and diff workflow", "GitHub Action and SARIF output", "Runbook for triage and baseline updates"],
  },
];

export const STANDARDS = [
  "OWASP Top 10 for Agentic Applications",
  "MITRE ATLAS",
  "NIST AI Risk Management Framework",
  "Promptfoo · PyRIT · DeepTeam (via gatecheck engines)",
];

export const REPORTING = [
  "Every rate ships with its sample size and, where it matters, an exact confidence interval.",
  "Anything the run cannot verify is written down as a named gap with its scope.",
  "Raw inputs and outputs are bundled, so a reviewer can check the claim instead of trusting it.",
  "The judge is measured, not assumed correct — agreement, flips and self-preference per run.",
];
