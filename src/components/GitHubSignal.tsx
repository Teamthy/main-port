import Link from "next/link";
import { formatRelativeDate, getGitHubSnapshot } from "../lib/github";
import { SITE } from "../data/site";

const FALLBACK = {
  publicRepos: 115,
  languages: [
    { name: "Go", count: 0 },
    { name: "TypeScript", count: 0 },
    { name: "Python", count: 0 },
  ],
  lastPush: "",
  recent: [
    { name: "host-failure-benchmark", url: `${SITE.github}/host-failure-benchmark`, language: "Python", description: null, pushedAt: "", stars: 0 },
    { name: "EduMart-OS", url: `${SITE.github}/EduMart-OS`, language: "Go", description: null, pushedAt: "", stars: 0 },
    { name: "ai-redteam-five-tests", url: `${SITE.github}/ai-redteam-five-tests`, language: "Python", description: null, pushedAt: "", stars: 0 },
    { name: "Tie-out-", url: `${SITE.github}/Tie-out-`, language: "Python", description: null, pushedAt: "", stars: 0 },
  ],
};

const LANG_COLOR: Record<string, string> = {
  Go: "#00ADD8",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  JavaScript: "#F1E05A",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Rust: "#DEA584",
  Shell: "#89E051",
};

export default async function GitHubSignal() {
  const snapshot = await getGitHubSnapshot();
  const data = snapshot ?? FALLBACK;

  return (
    <div className="rounded-[20px] border border-[#E9E9EA] bg-white overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E9E9EA]">
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className="fill-black">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-black hover:text-gray-600 transition"
          >
            github.com/{SITE.githubHandle}
          </a>
        </div>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-2 animate-ping rounded-full bg-[#84CC16] opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-[#65A30D]" />
          </span>
          {snapshot ? "live" : "snapshot"}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#E9E9EA] border-b border-[#E9E9EA]">
        <div className="p-5">
          <p className="text-3xl font-semibold text-black -tracking-[0.96px]">{data.publicRepos}</p>
          <p className="mt-1 font-mono text-xs text-gray-500">public repositories</p>
        </div>
        {data.languages.slice(0, 2).map((lang) => (
          <div key={lang.name} className="p-5">
            <p className="flex items-center gap-2 text-lg font-medium text-black">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: LANG_COLOR[lang.name] ?? "#9CA3AF" }}
              />
              {lang.name}
            </p>
            <p className="mt-2 font-mono text-xs text-gray-500">
              {lang.count > 0 ? `${lang.count} own repos` : "primary language"}
            </p>
          </div>
        ))}
        <div className="p-5">
          <p className="text-lg font-medium text-black">
            {data.lastPush ? formatRelativeDate(data.lastPush) : "This week"}
          </p>
          <p className="mt-2 font-mono text-xs text-gray-500">last push</p>
        </div>
      </div>

      <ul className="divide-y divide-[#E9E9EA]">
        {data.recent.slice(0, 4).map((repo) => (
          <li key={repo.name}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 px-6 py-3.5 hover:bg-[#FBFBFB] transition"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="font-mono text-sm text-black truncate group-hover:underline underline-offset-4">
                  {repo.name}
                </span>
                {repo.language && (
                  <span className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-gray-500">
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: LANG_COLOR[repo.language] ?? "#9CA3AF" }}
                    />
                    {repo.language}
                  </span>
                )}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-gray-400">
                {repo.pushedAt ? formatRelativeDate(repo.pushedAt) : "2026"}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="border-t border-[#E9E9EA] px-6 py-3.5">
        <Link
          href="/portfolio"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500 hover:text-black transition"
        >
          All work →
        </Link>
      </div>
    </div>
  );
}
