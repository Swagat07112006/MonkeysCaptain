import {
  MAPS_URL,
  brandAssets,
  businessDetails,
  fullMenu,
  getMenuItemPath,
  menuCategories,
  type MenuItem,
} from "./content/siteContent";
import type { AppRoute } from "./lib/routes";

export interface SeoDocument {
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl: string;
  imageAlt: string;
  robots: string;
  structuredData: Record<string, unknown>;
}

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function absoluteUrl(siteUrl: string, path: string): string {
  return new URL(path, `${siteUrl.replace(/\/$/, "")}/`).href;
}

function numericPrice(price: string): string {
  return price.replace(/[^0-9.]/g, "");
}

function itemOffers(item: MenuItem, siteUrl: string) {
  const url = absoluteUrl(siteUrl, getMenuItemPath(item));

  if (typeof item.price === "string") {
    return {
      "@type": "Offer",
      price: numericPrice(item.price),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url,
    };
  }

  return item.price.map((option) => ({
    "@type": "Offer",
    name: option.label,
    price: numericPrice(option.value),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url,
  }));
}

function menuItemSchema(item: MenuItem, siteUrl: string) {
  const itemUrl = absoluteUrl(siteUrl, getMenuItemPath(item));

  return {
    "@type": "MenuItem",
    "@id": `${itemUrl}#menu-item`,
    name: item.name,
    description: item.description,
    image: absoluteUrl(siteUrl, item.image),
    url: itemUrl,
    suitableForDiet: "https://schema.org/VegetarianDiet",
    offers: itemOffers(item, siteUrl),
  };
}

function restaurantSchema(siteUrl: string) {
  const homeUrl = absoluteUrl(siteUrl, "/");

  return {
    "@type": "Restaurant",
    "@id": `${homeUrl}#restaurant`,
    name: businessDetails.name,
    alternateName: businessDetails.alternateName,
    description: businessDetails.description,
    url: homeUrl,
    logo: absoluteUrl(siteUrl, brandAssets.monkeyLogo),
    image: [
      absoluteUrl(siteUrl, brandAssets.heroImage),
      absoluteUrl(siteUrl, brandAssets.heroMobileImage),
    ],
    telephone: businessDetails.phone,
    priceRange: "₹50–₹120",
    currenciesAccepted: "INR",
    servesCuisine: [
      "Vegetarian street food",
      "Grilled sandwiches",
      "Indian fast food",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: businessDetails.city,
      addressRegion: businessDetails.region,
      addressCountry: businessDetails.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessDetails.latitude,
      longitude: businessDetails.longitude,
    },
    areaServed: {
      "@type": "Place",
      name: `${businessDetails.neighbourhood}, ${businessDetails.city}`,
    },
    hasMap: MAPS_URL,
    menu: absoluteUrl(siteUrl, "/menu/"),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAYS,
      opens: businessDetails.opens,
      closes: businessDetails.closes,
    },
    sameAs: [MAPS_URL, businessDetails.instagramUrl],
  };
}

function breadcrumbSchema(
  siteUrl: string,
  crumbs: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(siteUrl, crumb.path),
    })),
  };
}

function fullMenuSchema(siteUrl: string) {
  return {
    "@type": "Menu",
    "@id": `${absoluteUrl(siteUrl, "/menu/")}#menu`,
    name: `Menu at ${businessDetails.name}`,
    description:
      "Vegetarian grilled sandwiches, burgers and crispy snacks served at The Monkey's Captain in Dumduma, Bhubaneswar.",
    url: absoluteUrl(siteUrl, "/menu/"),
    inLanguage: "en-IN",
    hasMenuSection: menuCategories
      .filter((category) => category.id !== "all")
      .map((category) => ({
        "@type": "MenuSection",
        name: category.label,
        hasMenuItem: fullMenu
          .filter((item) => item.category === category.id)
          .map((item) => menuItemSchema(item, siteUrl)),
      })),
  };
}

function priceSummary(item: MenuItem): string {
  if (typeof item.price === "string") {
    return item.price;
  }
  return item.price.map((option) => option.value).join(" or ");
}

export function getSeoDocument(
  route: AppRoute,
  siteUrl: string,
  forceNoIndex = false,
): SeoDocument {
  const canonicalUrl = absoluteUrl(siteUrl, route.path);
  const restaurant = restaurantSchema(siteUrl);
  const baseRobots = forceNoIndex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  if (route.kind === "menu") {
    const title = `Menu & Prices | ${businessDetails.name}, Dumduma`;
    const description =
      "See The Monkey's Captain menu and prices: grilled sandwiches, cheese burgers, crispy corn, veg fingers and masala fries in Dumduma, Bhubaneswar.";

    return {
      title,
      description,
      canonicalUrl,
      imageUrl: absoluteUrl(siteUrl, brandAssets.heroImage),
      imageAlt: `Street-food menu at ${businessDetails.name}`,
      robots: baseRobots,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          restaurant,
          {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": `${absoluteUrl(siteUrl, "/")}#website` },
            about: { "@id": `${absoluteUrl(siteUrl, "/")}#restaurant` },
            mainEntity: { "@id": `${canonicalUrl}#menu` },
          },
          breadcrumbSchema(siteUrl, [
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu/" },
          ]),
          fullMenuSchema(siteUrl),
        ],
      },
    };
  }

  if (route.kind === "menu-item") {
    const { item } = route;
    const title = `${item.name} in Dumduma | ${businessDetails.name}`;
    const description = `${item.description} Price: ${priceSummary(item)}. Available daily from 4:00 PM to 11:30 PM at The Monkey's Captain, Dumduma, Bhubaneswar.`;

    return {
      title,
      description,
      canonicalUrl,
      imageUrl: absoluteUrl(siteUrl, item.image),
      imageAlt: item.alt,
      robots: baseRobots,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          restaurant,
          {
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            isPartOf: { "@id": `${absoluteUrl(siteUrl, "/")}#website` },
            about: { "@id": `${canonicalUrl}#menu-item` },
            primaryImageOfPage: {
              "@type": "ImageObject",
              contentUrl: absoluteUrl(siteUrl, item.image),
              caption: item.alt,
            },
          },
          breadcrumbSchema(siteUrl, [
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu/" },
            { name: item.name, path: route.path },
          ]),
          menuItemSchema(item, siteUrl),
        ],
      },
    };
  }

  if (route.kind === "not-found") {
    return {
      title: `Page Not Found | ${businessDetails.name}`,
      description: `Return to ${businessDetails.name} or browse the full street-food menu.`,
      canonicalUrl,
      imageUrl: absoluteUrl(siteUrl, brandAssets.heroImage),
      imageAlt: `${businessDetails.name} food stall`,
      robots: "noindex, follow",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Page not found",
        url: canonicalUrl,
      },
    };
  }

  const title = `${businessDetails.name} | Street Food in Dumduma, Bhubaneswar`;
  const description =
    "Visit The Monkey's Captain in Dumduma, Bhubaneswar for fresh grilled sandwiches, burgers, crispy corn, fries and evening snacks. Open daily 4:00–11:30 PM.";
  const homeUrl = absoluteUrl(siteUrl, "/");

  return {
    title,
    description,
    canonicalUrl,
    imageUrl: absoluteUrl(siteUrl, brandAssets.heroImage),
    imageAlt: `${businessDetails.name} street-food stall in Dumduma, Bhubaneswar`,
    robots: baseRobots,
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${homeUrl}#website`,
          url: homeUrl,
          name: businessDetails.name,
          alternateName: businessDetails.alternateName,
          inLanguage: "en-IN",
          publisher: { "@id": `${homeUrl}#restaurant` },
        },
        restaurant,
        {
          "@type": "WebPage",
          "@id": `${homeUrl}#webpage`,
          url: homeUrl,
          name: title,
          description,
          isPartOf: { "@id": `${homeUrl}#website` },
          about: { "@id": `${homeUrl}#restaurant` },
          primaryImageOfPage: {
            "@type": "ImageObject",
            contentUrl: absoluteUrl(siteUrl, brandAssets.heroImage),
            caption: `${businessDetails.name} food stall`,
          },
        },
      ],
    },
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderSeoHead(document: SeoDocument): string {
  const structuredData = JSON.stringify(document.structuredData).replace(
    /</g,
    "\\u003c",
  );

  return [
    `<title>${escapeHtml(document.title)}</title>`,
    `<meta name="description" content="${escapeHtml(document.description)}" />`,
    `<meta name="robots" content="${escapeHtml(document.robots)}" />`,
    `<meta name="googlebot" content="${escapeHtml(document.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(document.canonicalUrl)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:site_name" content="${escapeHtml(businessDetails.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(document.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(document.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(document.canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(document.imageUrl)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(document.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(document.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(document.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(document.imageUrl)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(document.imageAlt)}" />`,
    `<script type="application/ld+json">${structuredData}</script>`,
  ].join("\n    ");
}
