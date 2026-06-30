import { BestSellersSection } from "./components/BestSellersSection";
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
        <BestSellersSection />
      </main>
    </>
  );
}
