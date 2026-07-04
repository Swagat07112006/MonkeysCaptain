import { AboutSection } from "./components/AboutSection";
import { BestSellersSection } from "./components/BestSellersSection";
import { GallerySection } from "./components/GallerySection";
import { HeroBestSellersDivider } from "./components/HeroBestSellersDivider";
import { HeroSection } from "./components/HeroSection";
import { SiteHeader } from "./components/SiteHeader";
import { useNavigationState } from "./hooks/useNavigationState";

export function App() {
  useNavigationState();

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HeroBestSellersDivider />
        <BestSellersSection />
        <HeroBestSellersDivider />
        <AboutSection />
        <HeroBestSellersDivider />
        <GallerySection />
      </main>
    </>
  );
}
