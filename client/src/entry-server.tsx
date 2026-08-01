import { StrictMode } from "react";
import { renderToString } from "react-dom/server";

import { App } from "./App";
import { indexableRoutes, resolveRoute } from "./lib/routes";
import { getSeoDocument, renderSeoHead } from "./seo";

export { indexableRoutes };

export function renderPage(
  pathname: string,
  siteUrl: string,
  forceNoIndex = false,
) {
  const route = resolveRoute(pathname);
  const appHtml = renderToString(
    <StrictMode>
      <App initialPath={pathname} />
    </StrictMode>,
  );
  const seoDocument = getSeoDocument(route, siteUrl, forceNoIndex);

  return {
    appHtml,
    headHtml: renderSeoHead(seoDocument),
  };
}
