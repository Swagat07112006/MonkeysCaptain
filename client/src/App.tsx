import { BestSellersSection } from "./components/BestSellersSection";
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
      </main>
    </>
  );
}
