import chocolateSandwich480 from "../assets/best-sellers/chocolate-sandwich-480.webp";
import chocolateSandwich768 from "../assets/best-sellers/chocolate-sandwich-768.webp";
import chocolateSandwich1024 from "../assets/best-sellers/chocolate-sandwich-1024.webp";
import crispyVegFinger480 from "../assets/best-sellers/crispy-veg-finger-480.webp";
import crispyVegFinger768 from "../assets/best-sellers/crispy-veg-finger-768.webp";
import crispyVegFinger1024 from "../assets/best-sellers/crispy-veg-finger-1024.webp";
import masalaFries480 from "../assets/best-sellers/masala-fries-480.webp";
import masalaFries768 from "../assets/best-sellers/masala-fries-768.webp";
import masalaFries1024 from "../assets/best-sellers/masala-fries-1024.webp";
import paneerCheeseSandwich480 from "../assets/best-sellers/paneer-cheese-sandwich-480.webp";
import paneerCheeseSandwich768 from "../assets/best-sellers/paneer-cheese-sandwich-768.webp";
import paneerCheeseSandwich1024 from "../assets/best-sellers/paneer-cheese-sandwich-1024.webp";
import vegGrilledSandwich480 from "../assets/best-sellers/veg-grilled-sandwich-480.webp";
import vegGrilledSandwich768 from "../assets/best-sellers/veg-grilled-sandwich-768.webp";
import vegGrilledSandwich1024 from "../assets/best-sellers/veg-grilled-sandwich-1024.webp";
import specialVegJumbo480 from "../assets/best-sellers/special-veg-jumbo-480.webp";
import specialVegJumbo768 from "../assets/best-sellers/special-veg-jumbo-768.webp";
import specialVegJumbo1024 from "../assets/best-sellers/special-veg-jumbo-1024.webp";
import plainCrispyCorn480 from "../assets/best-sellers/plain-crispy-corn-480.webp";
import plainCrispyCorn768 from "../assets/best-sellers/plain-crispy-corn-768.webp";
import plainCrispyCorn1024 from "../assets/best-sellers/plain-crispy-corn-1024.webp";
import vegetableCrispyCorn480 from "../assets/best-sellers/vegetable-crispy-corn-480.webp";
import vegetableCrispyCorn768 from "../assets/best-sellers/vegetable-crispy-corn-768.webp";
import vegetableCrispyCorn1024 from "../assets/best-sellers/vegetable-crispy-corn-1024.webp";
import nutellaCreamSandwich480 from "../assets/best-sellers/nutella-cream-sandwich-480.webp";
import nutellaCreamSandwich768 from "../assets/best-sellers/nutella-cream-sandwich-768.webp";
import nutellaCreamSandwich1024 from "../assets/best-sellers/nutella-cream-sandwich-1024.webp";
import kitkatCheeseChocolate480 from "../assets/best-sellers/kitkat-cheese-chocolate-sandwich-480.webp";
import kitkatCheeseChocolate768 from "../assets/best-sellers/kitkat-cheese-chocolate-sandwich-768.webp";
import kitkatCheeseChocolate1024 from "../assets/best-sellers/kitkat-cheese-chocolate-sandwich-1024.webp";
import grilledCheeseBurger480 from "../assets/best-sellers/grilled-cheese-burger-480.webp";
import grilledCheeseBurger768 from "../assets/best-sellers/grilled-cheese-burger-768.webp";
import grilledCheeseBurger1024 from "../assets/best-sellers/grilled-cheese-burger-1024.webp";
import galleryBurgerImage from "../assets/gallery/gallery-burger.webp";
import galleryEventDecorImage from "../assets/gallery/gallery-event-decor.webp";
import galleryEventEntranceImage from "../assets/gallery/gallery-event-entrance.webp";
import galleryGrillSandwichImage from "../assets/gallery/gallery-grill-sandwich.webp";
import galleryKitkatSandwichImage from "../assets/gallery/gallery-kitkat-sandwich.webp";
import galleryPartyArchImage from "../assets/gallery/gallery-party-arch.webp";
import gallerySandwichCloseImage from "../assets/gallery/gallery-sandwich-close.webp";
import galleryStallImage from "../assets/gallery/gallery-stall.webp";
import monkeyLogo128 from "../assets/monkey-logo-128.webp";
import monkeyLogo256 from "../assets/monkey-logo-256.webp";
import hero768 from "../assets/monkeys-captain-hero-v2-768.webp";
import hero1024 from "../assets/monkeys-captain-hero-v2-1024.webp";
import hero1536 from "../assets/monkeys-captain-hero-v2-1536.webp";
import heroMobile480 from "../assets/monkeys-captain-hero-mobile-v2-480.webp";
import heroMobile768 from "../assets/monkeys-captain-hero-mobile-v2-768.webp";
import heroMobile1024 from "../assets/monkeys-captain-hero-mobile-v2-1024.webp";

const responsiveImage = (small: string, medium: string, large: string) => ({
  image: medium,
  imageSrcSet: `${small} 480w, ${medium} 768w, ${large} 1024w`,
});

const chocolateSandwich = responsiveImage(
  chocolateSandwich480,
  chocolateSandwich768,
  chocolateSandwich1024,
);
const crispyVegFinger = responsiveImage(
  crispyVegFinger480,
  crispyVegFinger768,
  crispyVegFinger1024,
);
const masalaFries = responsiveImage(
  masalaFries480,
  masalaFries768,
  masalaFries1024,
);
const paneerCheeseSandwich = responsiveImage(
  paneerCheeseSandwich480,
  paneerCheeseSandwich768,
  paneerCheeseSandwich1024,
);
const vegGrilledSandwich = responsiveImage(
  vegGrilledSandwich480,
  vegGrilledSandwich768,
  vegGrilledSandwich1024,
);
const specialVegJumbo = responsiveImage(
  specialVegJumbo480,
  specialVegJumbo768,
  specialVegJumbo1024,
);
const plainCrispyCorn = responsiveImage(
  plainCrispyCorn480,
  plainCrispyCorn768,
  plainCrispyCorn1024,
);
const vegetableCrispyCorn = responsiveImage(
  vegetableCrispyCorn480,
  vegetableCrispyCorn768,
  vegetableCrispyCorn1024,
);
const nutellaCreamSandwich = responsiveImage(
  nutellaCreamSandwich480,
  nutellaCreamSandwich768,
  nutellaCreamSandwich1024,
);
const kitkatCheeseChocolate = responsiveImage(
  kitkatCheeseChocolate480,
  kitkatCheeseChocolate768,
  kitkatCheeseChocolate1024,
);
const grilledCheeseBurger = responsiveImage(
  grilledCheeseBurger480,
  grilledCheeseBurger768,
  grilledCheeseBurger1024,
);

export const brandAssets = {
  monkeyLogo: monkeyLogo256,
  monkeyLogoSrcSet: `${monkeyLogo128} 128w, ${monkeyLogo256} 256w`,
  heroImage: hero1536,
  heroSrcSet: `${hero768} 768w, ${hero1024} 1024w, ${hero1536} 1536w`,
  heroMobileImage: heroMobile768,
  heroMobileSrcSet: `${heroMobile480} 480w, ${heroMobile768} 768w, ${heroMobile1024} 1024w`,
};

export const businessDetails = {
  name: "The Monkey's Captain",
  alternateName: "The Monkeys Captain",
  description:
    "A vegetarian street-food stall in Dumduma, Bhubaneswar serving fresh grilled sandwiches, burgers, crispy corn, fries and evening snacks.",
  phoneDisplay: "+91 82492 46576",
  phone: "+918249246576",
  whatsappNumber: "918249246576",
  neighbourhood: "Dumduma",
  city: "Bhubaneswar",
  region: "Odisha",
  country: "India",
  countryCode: "IN",
  latitude: 20.2440627,
  longitude: 85.7864376,
  openingHoursDisplay: "Open daily · 4:00 PM–11:30 PM",
  opens: "16:00",
  closes: "23:30",
  instagramUrl: "https://www.instagram.com/the_monkeys_captain/",
} as const;

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Menu", href: "/menu/" },
  { label: "About Us", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export interface MenuItem {
  name: string;
  description: string;
  price: string | { label: string; value: string }[];
  image: string;
  imageSrcSet?: string;
  alt: string;
  category: string;
  isBestSeller?: boolean;
}

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "burgers", label: "Burgers" },
  { id: "snacks", label: "Crispy Snacks" },
];

export const fullMenu: MenuItem[] = [
  {
    name: "Veg Grilled Sandwich",
    description:
      "A hot, crisp grilled vegetable sandwich with your choice of bread.",
    price: [
      { label: "Milk Bread", value: "₹50" },
      { label: "Brown Bread", value: "₹60" },
    ],
    ...vegGrilledSandwich,
    alt: "Vegetable grilled sandwich",
    category: "sandwiches",
    isBestSeller: true,
  },
  {
    name: "Special Veg Grilled Jumbo",
    description:
      "Our extra-large special vegetable grilled sandwich for a bigger appetite.",
    price: "₹120",
    ...specialVegJumbo,
    alt: "Special jumbo vegetable grilled sandwich",
    category: "sandwiches",
    isBestSeller: false,
  },
  {
    name: "Grilled Chocolate Sandwich",
    description: "Golden grilled bread with a warm, rich chocolate centre.",
    price: [
      { label: "Milk Bread", value: "₹50" },
      { label: "Brown Bread", value: "₹60" },
    ],
    ...chocolateSandwich,
    alt: "Grilled chocolate sandwich",
    category: "sandwiches",
    isBestSeller: true,
  },
  {
    name: "Paneer Cheese Sandwich",
    description:
      "A hearty grilled sandwich filled with paneer and melted cheese.",
    price: [
      { label: "Milk Bread", value: "₹60" },
      { label: "Brown Bread", value: "₹70" },
    ],
    ...paneerCheeseSandwich,
    alt: "Paneer cheese grilled sandwich",
    category: "sandwiches",
    isBestSeller: true,
  },
  {
    name: "Choco Nutella & Cream",
    description:
      "A grilled chocolate-hazelnut sandwich layered with smooth cream.",
    price: [
      { label: "Milk Bread", value: "₹70" },
      { label: "Brown Bread", value: "₹80" },
    ],
    ...nutellaCreamSandwich,
    alt: "Choco Nutella and cream grilled sandwich",
    category: "sandwiches",
    isBestSeller: false,
  },
  {
    name: "KitKat Cheese Chocolate",
    description:
      "A grilled chocolate sandwich with crisp wafer pieces and cheese.",
    price: [
      { label: "Milk Bread", value: "₹70" },
      { label: "Brown Bread", value: "₹80" },
    ],
    ...kitkatCheeseChocolate,
    alt: "KitKat-style cheese chocolate grilled sandwich",
    category: "sandwiches",
    isBestSeller: false,
  },
  {
    name: "Grilled Cheese Burger",
    description: "A hot grilled burger layered with melted cheese.",
    price: "₹70",
    ...grilledCheeseBurger,
    alt: "Grilled cheese burger",
    category: "burgers",
    isBestSeller: false,
  },
  {
    name: "Plain Crispy Corn",
    description: "Golden, crunchy corn served hot and simply seasoned.",
    price: "₹60",
    ...plainCrispyCorn,
    alt: "Plain crispy corn",
    category: "snacks",
    isBestSeller: false,
  },
  {
    name: "Vegetable Crispy Corn",
    description: "Crunchy corn tossed with chopped vegetables and seasoning.",
    price: "₹70",
    ...vegetableCrispyCorn,
    alt: "Vegetable crispy corn",
    category: "snacks",
    isBestSeller: true,
  },
  {
    name: "Crispy Veg Finger",
    description:
      "Crisp, golden vegetable fingers with a tender savoury centre.",
    price: "₹70",
    ...crispyVegFinger,
    alt: "Crispy vegetable fingers",
    category: "snacks",
    isBestSeller: true,
  },
  {
    name: "Masala French Fries",
    description: "Hot, crisp fries tossed in a punchy masala seasoning.",
    price: "₹70",
    ...masalaFries,
    alt: "Masala french fries",
    category: "snacks",
    isBestSeller: true,
  },
];

export const bestSellers = fullMenu.filter((item) => item.isBestSeller);

export function getMenuItemSlug(item: Pick<MenuItem, "name">): string {
  return item.name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getMenuItemPath(item: Pick<MenuItem, "name">): string {
  return `/menu/${getMenuItemSlug(item)}/`;
}

export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return fullMenu.find((item) => getMenuItemSlug(item) === slug);
}

export type BestSeller = MenuItem;

export const galleryImages = [
  {
    src: galleryStallImage,
    alt: "The Monkey's Captain food stall lit up at night",
  },
  {
    src: gallerySandwichCloseImage,
    alt: "Fresh grilled sandwich served on a yellow plate",
  },
  {
    src: galleryEventEntranceImage,
    alt: "Colorful event entrance decorated for The Monkey's Captain",
  },
  {
    src: galleryKitkatSandwichImage,
    alt: "KitKat chocolate sandwich being prepared at the stall",
  },
  {
    src: galleryEventDecorImage,
    alt: "Birthday seating decoration with balloon arch",
  },
  {
    src: galleryBurgerImage,
    alt: "Special cheese corn paneer burger on a yellow plate",
  },
  {
    src: galleryGrillSandwichImage,
    alt: "Vegetable grill sandwich topped with cheese",
  },
  {
    src: galleryPartyArchImage,
    alt: "Balloon arch decoration for an outdoor event",
  },
];

export type GalleryImage = (typeof galleryImages)[number];

export const eventTypes = [
  "Birthday Parties",
  "Kitty Parties",
  "Office Events",
  "College Events",
  "Beach Decoration",
  "& More",
];

export const MAPS_URL = "https://maps.app.goo.gl/6bfpNfa3rMrX4bt28";
