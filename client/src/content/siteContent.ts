import chocolateSandwichImage from "../assets/best-sellers/chocolate-sandwich.png";
import chilliPotatoImage from "../assets/best-sellers/chilli-potato.png";
import crispyCornImage from "../assets/best-sellers/crispy-corn.png";
import dumBiryaniImage from "../assets/best-sellers/dum-biryani.png";
import paneerMomosImage from "../assets/best-sellers/paneer-momos.png";
import vegNoodlesImage from "../assets/best-sellers/veg-noodles.png";
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

export const eventTypes = [
  "Birthday Parties",
  "Kitty Parties",
  "Office Events",
  "College Events",
  "Beach Decoration",
  "& More",
];
