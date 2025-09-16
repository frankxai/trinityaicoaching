import { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";

const now = new Date();

function normalizedBaseUrl() {
  const fallback = "https://trinityaicoaching.vercel.app";
  const raw = process.env.NEXT_PUBLIC_SITE_URL || fallback;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

function appendEntries(base: string, entries: string[]) {
  return entries.map((path) => ({ url: `${base}${path}`, lastModified: now }));
}

function addFromDir(base: string, dir: string, prefix: string, extension = ".md") {
  try {
    const files = readdirSync(dir).filter((file) => file.endsWith(extension));
    return files.map((file) => ({
      url: `${base}${prefix}/${file.replace(extension, "")}`,
      lastModified: statSync(resolve(dir, file)).mtime,
    }));
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = normalizedBaseUrl();

  const coreEntries = appendEntries(base, [
    "/",
    "/app",
    "/app/get-started",
    "/app/coach",
    "/app/super-agent",
    "/app/plans",
    "/app/intake",
    "/app/journal",
    "/app/habits",
    "/app/settings",
    "/app/profile",
    "/app/checkin",
    "/app/review",
    "/hub",
    "/agents",
    "/coaches",
    "/learn",
    "/blog",
    "/docs",
    "/docs/architecture",
    "/docs/agents",
    "/docs/api",
    "/docs/deployment",
    "/docs/mcp",
    "/docs/portal",
    "/docs/experience",
    "/docs/seo",
    "/docs/search-blueprint",
    "/docs/vercel-env",
    "/docs/skool",
    "/roadmap",
    "/pricing",
    "/faq",
    "/methods",
    "/about",
    "/contact",
    "/sign-in",
  ]);

  const dynamicEntries = [
    ...addFromDir(base, resolve(process.cwd(), "content", "blog"), "/blog"),
    ...addFromDir(base, resolve(process.cwd(), "content", "learn"), "/learn"),
  ];

  try {
    const agentsDir = resolve(process.cwd(), "agents");
    const agents = readdirSync(agentsDir).filter((file) => file.endsWith(".yaml"));
    agents.forEach((file) => {
      const slug = file.replace(/\.yaml$/, "");
      dynamicEntries.push({
        url: `${base}/agents/${slug}`,
        lastModified: statSync(resolve(agentsDir, file)).mtime,
      });
    });
  } catch {
    // ignore missing agents directory at build time
  }

  return [...coreEntries, ...dynamicEntries];
}
