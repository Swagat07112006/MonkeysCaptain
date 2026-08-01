import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { loadEnv } from "vite";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const clientDirectory = resolve(scriptDirectory, "..");
const distDirectory = resolve(clientDirectory, "dist");
const serverDirectory = resolve(clientDirectory, ".ssr");
const templatePath = resolve(distDirectory, "index.html");
const serverEntryPath = resolve(serverDirectory, "entry-server.js");
const fileEnvironment = loadEnv(
  process.env.NODE_ENV || "production",
  clientDirectory,
  "",
);

function getSiteUrl() {
  const configuredUrl =
    process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    fileEnvironment.SITE_URL ||
    fileEnvironment.VITE_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:4173");
  const url = new URL(configuredUrl);

  if (!/^https?:$/.test(url.protocol)) {
    throw new Error("SITE_URL must use http or https.");
  }

  return url.origin;
}

function outputPathForRoute(route) {
  if (route === "/") {
    return resolve(distDirectory, "index.html");
  }

  return resolve(distDirectory, route.replace(/^\//, ""), "index.html");
}

function injectPage(template, appHtml, headHtml, route) {
  const routeTemplate =
    route === "/"
      ? template
      : template.replace(
          /\s*<!--home-image-preloads-start-->[\s\S]*?<!--home-image-preloads-end-->/,
          "",
        );
  const withHead = routeTemplate.replace(
    /<!--app-seo-head-start-->[\s\S]*?<!--app-seo-head-end-->/,
    `<!--app-seo-head-start-->\n    ${headHtml}\n    <!--app-seo-head-end-->`,
  );

  return withHead.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteUrl(siteUrl, route) {
  return new URL(route, `${siteUrl}/`).href;
}

const siteUrl = getSiteUrl();
const isVercelPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_TARGET_ENV === "preview";
const lastModified =
  process.env.SITE_LAST_UPDATED ||
  fileEnvironment.SITE_LAST_UPDATED ||
  "2026-08-01";

if (!/^\d{4}-\d{2}-\d{2}$/.test(lastModified)) {
  throw new Error("SITE_LAST_UPDATED must use YYYY-MM-DD format.");
}

if (siteUrl.startsWith("http://localhost")) {
  console.warn(
    "SEO build note: SITE_URL is not set, so local canonical URLs were generated. Vercel automatically uses VERCEL_PROJECT_PRODUCTION_URL in deployment builds.",
  );
}

try {
  const [{ indexableRoutes, renderPage }, template] = await Promise.all([
    import(pathToFileURL(serverEntryPath).href),
    readFile(templatePath, "utf8"),
  ]);

  for (const route of indexableRoutes) {
    const { appHtml, headHtml } = renderPage(route, siteUrl, isVercelPreview);
    const outputPath = outputPathForRoute(route);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, injectPage(template, appHtml, headHtml, route));
  }

  const notFoundPage = renderPage("/404/", siteUrl, true);
  await writeFile(
    resolve(distDirectory, "404.html"),
    injectPage(template, notFoundPage.appHtml, notFoundPage.headHtml, "/404/"),
  );

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexableRoutes.map(
      (route) =>
        `  <url><loc>${escapeXml(absoluteUrl(siteUrl, route))}</loc><lastmod>${lastModified}</lastmod></url>`,
    ),
    "</urlset>",
    "",
  ].join("\n");
  await writeFile(resolve(distDirectory, "sitemap.xml"), sitemap);

  const robots = [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: OAI-SearchBot",
    "Allow: /",
    "",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "",
    `Sitemap: ${absoluteUrl(siteUrl, "/sitemap.xml")}`,
    "",
  ].join("\n");
  await writeFile(resolve(distDirectory, "robots.txt"), robots);

  const llms = [
    `# The Monkey's Captain`,
    "",
    "> Vegetarian street-food stall in Dumduma, Bhubaneswar, Odisha, India.",
    "",
    "## Canonical pages",
    "",
    `- [Home](${absoluteUrl(siteUrl, "/")}): Business details, best sellers, story, event services and contact information.`,
    `- [Menu and prices](${absoluteUrl(siteUrl, "/menu/")}): Complete current stall menu with item descriptions and INR prices.`,
    "",
    "## Key facts",
    "",
    "- Location: Dumduma, Bhubaneswar, Odisha, India",
    "- Coordinates: 20.2440627, 85.7864376",
    "- Hours: Daily, 4:00 PM–11:30 PM",
    "- Phone: +91 82492 46576",
    "- Service: Food is served offline at the stall; event enquiries are available by phone or WhatsApp",
    "- Google Maps: https://maps.app.goo.gl/6bfpNfa3rMrX4bt28",
    "",
  ].join("\n");
  await writeFile(resolve(distDirectory, "llms.txt"), llms);

  console.log(
    `Pre-rendered ${indexableRoutes.length} indexable pages plus 404.html for ${siteUrl}.`,
  );
} finally {
  await rm(serverDirectory, { recursive: true, force: true });
}
