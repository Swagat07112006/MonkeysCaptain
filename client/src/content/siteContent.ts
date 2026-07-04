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

export const bestSellers = [
  {
    name: "Chocolate Sandwich",
    description: "Crispy outside, rich chocolate inside. A perfect sweet bite.",
    price: "\u20b969",
    image: chocolateSandwichImage,
    alt: "Chocolate sandwich",
  },
  {
    name: "Crispy Corn",
    description:
      "Crispy, spicy and full of flavor. Everyone's favorite crunch!",
    price: "\u20b979",
    image: crispyCornImage,
    alt: "Crispy corn",
  },
  {
    name: "Dum Biryani",
    description: "Aromatic rice, juicy chicken and perfect spices.",
    price: "\u20b9149",
    image: dumBiryaniImage,
    alt: "Dum biryani",
  },
  {
    name: "Paneer Momos",
    description: "Soft momos packed with spicy paneer delight.",
    price: "\u20b989",
    image: paneerMomosImage,
    alt: "Paneer momos",
  },
  {
    name: "Veg Noodles",
    description: "Wok tossed noodles with fresh veggies and bold taste.",
    price: "\u20b989",
    image: vegNoodlesImage,
    alt: "Veg noodles",
  },
  {
    name: "Chilli Potato",
    description: "Crispy, spicy and tangy chilli potatoes.",
    price: "\u20b979",
    image: chilliPotatoImage,
    alt: "Chilli potato",
  },
];

export type BestSeller = (typeof bestSellers)[number];

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
