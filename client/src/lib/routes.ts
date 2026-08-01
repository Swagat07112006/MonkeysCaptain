import {
  fullMenu,
  getMenuItemBySlug,
  getMenuItemPath,
  type MenuItem,
} from "../content/siteContent";

export type AppRoute =
  | { kind: "home"; path: "/" }
  | { kind: "menu"; path: "/menu/" }
  | { kind: "menu-item"; path: string; item: MenuItem }
  | { kind: "not-found"; path: string };

export const indexableRoutes = [
  "/",
  "/menu/",
  ...fullMenu.map((item) => getMenuItemPath(item)),
] as const;

export function normalizePathname(pathname: string): string {
  const withoutQueryOrHash = pathname.split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = withoutQueryOrHash.startsWith("/")
    ? withoutQueryOrHash
    : `/${withoutQueryOrHash}`;

  if (withLeadingSlash === "/") {
    return "/";
  }

  return `${withLeadingSlash.replace(/\/+$/, "")}/`;
}

export function resolveRoute(pathname: string): AppRoute {
  const path = normalizePathname(pathname);

  if (path === "/") {
    return { kind: "home", path };
  }

  if (path === "/menu/") {
    return { kind: "menu", path };
  }

  const match = path.match(/^\/menu\/([^/]+)\/$/);
  if (match) {
    const item = getMenuItemBySlug(decodeURIComponent(match[1]));
    if (item) {
      return { kind: "menu-item", path, item };
    }
  }

  return { kind: "not-found", path };
}
