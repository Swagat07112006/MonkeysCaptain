import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const clientDirectory = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distDirectory = join(clientDirectory, "dist");

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function countMatches(content, expression) {
  return [...content.matchAll(expression)].length;
}

const htmlFiles = walk(distDirectory).filter((file) => file.endsWith(".html"));
const problems = [];
const canonicals = new Set();

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const requiredTags = [
    ["title", /<title>/g],
    ["description", /<meta name="description"/g],
    ["canonical", /<link rel="canonical"/g],
    ["robots", /<meta name="robots"/g],
    ["H1", /<h1[ >]/g],
    ["JSON-LD", /<script type="application\/ld\+json">/g],
  ];

  for (const [label, expression] of requiredTags) {
    const count = countMatches(html, expression);
    if (count !== 1) {
      problems.push(`${file} has ${count} ${label} tags; expected 1.`);
    }
  }

  if (!/<div id="root"><(?!\/div)/.test(html)) {
    problems.push(`${file} does not contain a pre-rendered React root.`);
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonical) {
    if (canonicals.has(canonical[1])) {
      problems.push(`Duplicate canonical URL: ${canonical[1]}`);
    }
    canonicals.add(canonical[1]);
  }

  const jsonLd = html.match(
    /<script type="application\/ld\+json">([^<]+)<\/script>/,
  );
  if (jsonLd) {
    try {
      JSON.parse(jsonLd[1]);
    } catch (error) {
      problems.push(`${file} contains invalid JSON-LD: ${error.message}`);
    }
  }

  const is404 = file.endsWith("/404.html");
  if (is404 && !/<meta name="robots" content="noindex, follow"/.test(html)) {
    problems.push("404.html must be noindex, follow.");
  }
  if (!is404 && /<meta name="robots" content="noindex/.test(html)) {
    problems.push(`${file} is unexpectedly marked noindex.`);
  }

  const localLinks = [...html.matchAll(/href="(\/[^"]*)"/g)].map(
    (match) => match[1],
  );
  for (const link of localLinks) {
    const { pathname } = new URL(link, "http://local.test");
    if (pathname === "/" || pathname.startsWith("/menu/")) {
      const target =
        pathname === "/"
          ? join(distDirectory, "index.html")
          : join(distDirectory, pathname, "index.html");
      if (!existsSync(target)) {
        problems.push(`${file} links to missing page ${pathname}.`);
      }
    }
  }

  const assetPaths = [...html.matchAll(/\/assets\/[^"'\s<>,()]+/g)].map(
    (match) => match[0],
  );
  for (const assetPath of assetPaths) {
    if (!existsSync(join(distDirectory, assetPath))) {
      problems.push(`${file} references missing asset ${assetPath}.`);
    }
  }
}

const sitemap = readFileSync(join(distDirectory, "sitemap.xml"), "utf8");
const sitemapUrls = countMatches(sitemap, /<url>/g);
if (sitemapUrls !== htmlFiles.length - 1) {
  problems.push(
    `Sitemap has ${sitemapUrls} URLs; expected ${htmlFiles.length - 1} indexable HTML pages.`,
  );
}

if (problems.length > 0) {
  console.error(problems.join("\n"));
  process.exit(1);
}

console.log(
  `SEO validation passed for ${htmlFiles.length - 1} indexable pages plus 404.html.`,
);
