// Content integrity check: every slug, cross-reference and internal link in the
// data layer has to resolve. Runs in CI next to the build.
//
//   node scripts/check-content.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

/** Transpile a data module to CommonJS and evaluate it in isolation. */
const importsOf = (file) => {
  const js = ts.transpileModule(read(file), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const mod = { exports: {} };
  new Function("exports", "module", "require", js)(mod.exports, mod, (id) => {
    throw new Error(`unexpected runtime import "${id}" in ${file}`);
  });
  return mod.exports;
};

const { PROJECTS, PROJECT_CATEGORIES, BLOG_POSTS, RESEARCH_ARTIFACTS, NAV_LINKS } = {
  ...importsOf("src/data/projects.ts"),
  ...importsOf("src/data/blogs.ts"),
  ...importsOf("src/data/research.ts"),
  ...importsOf("src/data/site.ts"),
};

const errors = [];
const slugs = new Set(PROJECTS.map((project) => project.slug));
const posts = new Set(BLOG_POSTS.map((post) => post.slug));
const staticRoutes = new Set([
  "/",
  "/research",
  "/portfolio",
  "/services",
  "/about",
  "/blogs",
  "/contact",
]);

const checkRoute = (href, context) => {
  if (!href.startsWith("/")) return;
  if (href.startsWith("/portfolio/")) {
    if (!slugs.has(href.replace("/portfolio/", ""))) errors.push(`${context}: unknown project ${href}`);
    return;
  }
  if (href.startsWith("/blog/")) {
    if (!posts.has(href.replace("/blog/", ""))) errors.push(`${context}: unknown post ${href}`);
    return;
  }
  if (!staticRoutes.has(href)) errors.push(`${context}: unknown route ${href}`);
};

// 1. Unique slugs and ids.
const seenSlugs = new Set();
const seenIds = new Set();
for (const project of PROJECTS) {
  if (seenSlugs.has(project.slug)) errors.push(`duplicate project slug: ${project.slug}`);
  if (seenIds.has(project.id)) errors.push(`duplicate project id: ${project.id}`);
  seenSlugs.add(project.slug);
  seenIds.add(project.id);
  if (!PROJECT_CATEGORIES.includes(project.category)) {
    errors.push(`${project.slug}: category not in PROJECT_CATEGORIES (${project.category})`);
  }
  if (project.similar.length < 2) errors.push(`${project.slug}: needs at least two related projects`);
  if (project.metrics.length !== 4) errors.push(`${project.slug}: expected 4 metrics, found ${project.metrics.length}`);
  if (project.highlights.length < 3) errors.push(`${project.slug}: needs at least three highlights`);
  if (!project.repo.startsWith("https://github.com/Teamthy/")) {
    errors.push(`${project.slug}: repository should point at github.com/Teamthy`);
  }
  for (const id of project.similar) {
    const target = PROJECTS.find((candidate) => candidate.id === id);
    if (!target) errors.push(`${project.slug}: similar id ${id} does not exist`);
    else if (target.id === project.id) errors.push(`${project.slug}: similar list references itself`);
  }
}

// 2. Related posts and blog slugs.
const seenPostSlugs = new Set();
for (const post of BLOG_POSTS) {
  if (seenPostSlugs.has(post.slug)) errors.push(`duplicate post slug: ${post.slug}`);
  seenPostSlugs.add(post.slug);
  if (!post.sections.length) errors.push(`${post.slug}: has no sections`);
  if (!post.tags.length) errors.push(`${post.slug}: has no tags`);
}

// 3. Research artefacts must resolve to a project case study.
for (const artifact of RESEARCH_ARTIFACTS) {
  checkRoute(`/portfolio/${artifact.slug}`, `research:${artifact.name}`);
  if (!artifact.repo.includes("Teamthy")) errors.push(`research:${artifact.name}: unexpected repo host`);
}

// 4. Internal links in the data layer and page components.
for (const link of NAV_LINKS) checkRoute(link.href, "nav");

const pageDir = path.join(root, "src", "page-components");
for (const file of fs.readdirSync(pageDir)) {
  const source = fs.readFileSync(path.join(pageDir, file), "utf8");
  for (const match of source.matchAll(/href="(\/[^"]*)"/g)) {
    checkRoute(match[1].split("#")[0], file);
  }
  for (const match of source.matchAll(/href=\{`(\/[^`]*)\$\{[^}]+\}`\}/g)) {
    const prefix = match[1];
    if (prefix.startsWith("/portfolio/")) {
      if (!PROJECTS.every((project) => project.slug)) errors.push(`${file}: empty project slug`);
    } else if (prefix.startsWith("/blog/")) {
      if (!posts.size) errors.push(`${file}: no posts to link to`);
    }
  }
}

if (errors.length) {
  console.error(`Content check failed with ${errors.length} problem(s):`);
  for (const error of errors) console.error(" -", error);
  process.exit(1);
}

console.log(
  `Content check passed: ${PROJECTS.length} projects, ${BLOG_POSTS.length} posts, ${RESEARCH_ARTIFACTS.length} research artefacts, ${NAV_LINKS.length} nav links.`
);
