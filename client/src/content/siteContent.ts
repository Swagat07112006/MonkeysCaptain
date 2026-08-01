import chocolateSandwichImage from "../assets/best-sellers/chocolate-sandwich.png";
import crispyCornImage from "../assets/best-sellers/crispy-corn.png";
import crispyVegFingerImage from "../assets/best-sellers/crispy-veg-finger.png";
import masalaFriesImage from "../assets/best-sellers/masala-fries.png";
import paneerCheeseSandwichImage from "../assets/best-sellers/paneer-cheese-sandwich.png";
import vegGrilledSandwichImage from "../assets/best-sellers/veg-grilled-sandwich.png";
import galleryBurgerImage from "../assets/gallery/gallery-burger.webp";
import galleryEventDecorImage from "../assets/gallery/gallery-event-decor.webp";
import galleryEventEntranceImage from "../assets/gallery/gallery-event-entrance.webp";
import galleryGrillSandwichImage from "../assets/gallery/gallery-grill-sandwich.webp";
import galleryKitkatSandwichImage from "../assets/gallery/gallery-kitkat-sandwich.webp";
import galleryPartyArchImage from "../assets/gallery/gallery-party-arch.webp";
import gallerySandwichCloseImage from "../assets/gallery/gallery-sandwich-close.webp";
import galleryStallImage from "../assets/gallery/gallery-stall.webp";
import monkeyLogo from "../assets/monkey-logo.png";
import heroImage from "../assets/monkeys-captain-hero.png";
import heroMobileImage from "../assets/monkeys-captain-hero-mobile.png";
import heroTabletImage from "../assets/monkeys-captain-hero-tablet-v2.png";

export const brandAssets = {
  monkeyLogo,
  heroImage,
  heroMobileImage,
  heroTabletImage,
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export interface MenuItem {
  name: string;
  description: string;
  price: string | { label: string; value: string }[];
  image: string;
  alt: string;
  category: string;
  isBestSeller?: boolean;
}

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "snacks", label: "Crispy Snacks" },
];

export const fullMenu: MenuItem[] = [
  {
    name: "Veg Grilled Sandwich",
    description: "A hot, crisp grilled vegetable sandwich with your choice of bread.",
    price: [
      { label: "Milk Bread", value: "₹50" },
      { label: "Brown Bread", value: "₹60" },
    ],
    image: vegGrilledSandwichImage,
    alt: "Vegetable grilled sandwich",
    category: "sandwiches",
    isBestSeller: true,
  },
  {
    name: "Special Veg Grilled Jumbo",
    description: "Our extra-large special vegetable grilled sandwich for a bigger appetite.",
    price: "₹120",
    image: vegGrilledSandwichImage,
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
    image: chocolateSandwichImage,
    alt: "Grilled chocolate sandwich",
    category: "sandwiches",
    isBestSeller: true,
  },
  {
    name: "Paneer Cheese Sandwich",
    description: "A hearty grilled sandwich filled with paneer and melted cheese.",
    price: [
      { label: "Milk Bread", value: "₹60" },
      { label: "Brown Bread", value: "₹70" },
    ],
    image: paneerCheeseSandwichImage,
    alt: "Paneer cheese grilled sandwich",
    category: "sandwiches",
    isBestSeller: true,
  },
  {
    name: "Nutella / KitKat Sandwich",
    description: "Choose Choco Nutella & Cream or KitKat Cheese Chocolate.",
    price: [
      { label: "Milk Bread", value: "₹70" },
      { label: "Brown Bread", value: "₹80" },
    ],
    image: galleryKitkatSandwichImage,
    alt: "Nutella and KitKat chocolate sandwich",
    category: "sandwiches",
    isBestSeller: false,
  },
  {
    name: "Plain Crispy Corn",
    description: "Golden, crunchy corn served hot and simply seasoned.",
    price: "₹60",
    image: crispyCornImage,
    alt: "Plain crispy corn",
    category: "snacks",
    isBestSeller: false,
  },
  {
    name: "Vegetable Crispy Corn",
    description: "Crunchy corn tossed with chopped vegetables and seasoning.",
    price: "₹70",
    image: crispyCornImage,
    alt: "Vegetable crispy corn",
    category: "snacks",
    isBestSeller: true,
  },
  {
    name: "Crispy Veg Finger",
    description: "Crisp, golden vegetable fingers with a tender savoury centre.",
    price: "₹70",
    image: crispyVegFingerImage,
    alt: "Crispy vegetable fingers",
    category: "snacks",
    isBestSeller: true,
  },
  {
    name: "Masala French Fries",
    description: "Hot, crisp fries tossed in a punchy masala seasoning.",
    price: "₹70",
    image: masalaFriesImage,
    alt: "Masala french fries",
    category: "snacks",
    isBestSeller: true,
  },
];

export const bestSellers = fullMenu.filter((item) => item.isBestSeller);

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

export const MAPS_URL =
  "https://maps.app.goo.gl/6bfpNfa3rMrX4bt28";
