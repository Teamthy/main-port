// Server-side GitHub snapshot: no token required, cached hourly, and every
// consumer must degrade gracefully when the API is unavailable (rate limit,
// offline build, preview environment without egress).

export interface GitHubRepo {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  pushedAt: string;
  stars: number;
}

export interface GitHubSnapshot {
  publicRepos: number;
  followers: number;
  languages: { name: string; count: number }[];
  lastPush: string;
  recent: GitHubRepo[];
}

interface ApiRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  stargazers_count: number;
  fork: boolean;
}

const USER = "Teamthy";
const API = "https://api.github.com";

export async function getGitHubSnapshot(): Promise<GitHubSnapshot | null> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "olusanyatimothy-portfolio",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`${API}/users/${USER}`, { headers, next: { revalidate: 3600 } }),
      fetch(`${API}/users/${USER}/repos?per_page=100&sort=pushed`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user = (await userRes.json()) as { public_repos: number; followers: number };
    const repos = (await reposRes.json()) as ApiRepo[];
    if (!Array.isArray(repos)) return null;

    const owned = repos.filter((repo) => !repo.fork);
    const counts = new Map<string, number>();
    for (const repo of owned) {
      if (!repo.language) continue;
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }

    const recent = owned.slice(0, 4).map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      language: repo.language,
      pushedAt: repo.pushed_at,
      stars: repo.stargazers_count,
    }));

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      languages: [...counts.entries()]
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 3),
      lastPush: owned[0]?.pushed_at ?? new Date().toISOString(),
      recent,
    };
  } catch {
    return null;
  }
}

export function formatRelativeDate(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "recently";
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}
