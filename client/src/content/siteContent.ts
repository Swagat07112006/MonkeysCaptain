import chocolateSandwichImage from "../assets/best-sellers/chocolate-sandwich.png";
import chilliPotatoImage from "../assets/best-sellers/chilli-potato.png";
import crispyCornImage from "../assets/best-sellers/crispy-corn.png";
import dumBiryaniImage from "../assets/best-sellers/dum-biryani.png";
import paneerMomosImage from "../assets/best-sellers/paneer-momos.png";
import vegNoodlesImage from "../assets/best-sellers/veg-noodles.png";
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
  price: string;
  image: string;
  alt: string;
  category: string;
  isBestSeller?: boolean;
}

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "sandwiches", label: "Sandwiches & Snacks" },
  { id: "mains", label: "Mains & Rice" },
  { id: "sides", label: "Starters & Sides" },
];

export const fullMenu: MenuItem[] = [
  {
    name: "Chocolate Sandwich",
    description: "Crispy outside, rich chocolate inside. A perfect sweet bite.",
    price: "₹69",
    image: chocolateSandwichImage,
    alt: "Chocolate sandwich",
    category: "sandwiches",
    isBestSeller: true,
  },
  {
    name: "KitKat Sandwich",
    description: "Rich chocolate sandwich loaded with crushed KitKat bars.",
    price: "₹89",
    image: galleryKitkatSandwichImage,
    alt: "KitKat chocolate sandwich",
    category: "sandwiches",
    isBestSeller: false,
  },
  {
    name: "Grilled Cheese Sandwich",
    description: "Perfectly toasted local bread stuffed with layers of melted cheese.",
    price: "₹79",
    image: galleryGrillSandwichImage,
    alt: "Vegetable grill cheese sandwich",
    category: "sandwiches",
    isBestSeller: false,
  },
  {
    name: "Spicy Veg Burger",
    description: "Crispy vegetable patty with spicy secret house sauce, lettuce and tomato.",
    price: "₹89",
    image: galleryBurgerImage,
    alt: "Special cheese corn paneer burger",
    category: "sandwiches",
    isBestSeller: false,
  },
  {
    name: "Crispy Corn",
    description: "Crispy, spicy and full of flavor. Everyone's favorite crunch!",
    price: "₹79",
    image: crispyCornImage,
    alt: "Crispy corn",
    category: "sides",
    isBestSeller: true,
  },
  {
    name: "Chilli Potato",
    description: "Crispy, spicy and tangy chilli potatoes.",
    price: "₹79",
    image: chilliPotatoImage,
    alt: "Chilli potato",
    category: "sides",
    isBestSeller: true,
  },
  {
    name: "French Fries",
    description: "Classic golden fries, salted to perfection.",
    price: "₹69",
    image: crispyCornImage,
    alt: "Golden french fries",
    category: "sides",
    isBestSeller: false,
  },
  {
    name: "Masala Fries",
    description: "Classic fries tossed in hot peri-peri and local street spices.",
    price: "₹79",
    image: crispyCornImage,
    alt: "Masala fries",
    category: "sides",
    isBestSeller: false,
  },
  {
    name: "Dum Biryani",
    description: "Aromatic rice, juicy chicken and perfect spices.",
    price: "₹149",
    image: dumBiryaniImage,
    alt: "Dum biryani",
    category: "mains",
    isBestSeller: true,
  },
  {
    name: "Paneer Momos",
    description: "Soft momos packed with spicy paneer delight.",
    price: "₹89",
    image: paneerMomosImage,
    alt: "Paneer momos",
    category: "mains",
    isBestSeller: true,
  },
  {
    name: "Veg Noodles",
    description: "Wok tossed noodles with fresh veggies and bold taste.",
    price: "₹89",
    image: vegNoodlesImage,
    alt: "Veg noodles",
    category: "mains",
    isBestSeller: true,
  },
  {
    name: "Hakka Noodles",
    description: "Street-style noodles wok fried with premium soy sauce and bell peppers.",
    price: "₹99",
    image: vegNoodlesImage,
    alt: "Hakka noodles",
    category: "mains",
    isBestSeller: false,
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
  "https://www.google.com/maps/search/?api=1&query=The+Monkey%27s+Captain+8249246576";
