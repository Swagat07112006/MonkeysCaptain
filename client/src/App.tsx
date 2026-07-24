import { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { BestSellersSection } from "./components/BestSellersSection";
import { ContactSection } from "./components/ContactSection";
import { GallerySection } from "./components/GallerySection";
import { HeroBestSellersDivider } from "./components/HeroBestSellersDivider";
import { HeroSection } from "./components/HeroSection";
import { SiteHeader } from "./components/SiteHeader";
import { FullMenuPage } from "./components/FullMenuPage";
import { useNavigationState } from "./hooks/useNavigationState";

export function App() {
  const [currentView, setCurrentView] = useState<"home" | "full-menu">("home");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#full-menu") {
        setCurrentView("full-menu");
        window.scrollTo(0, 0);
      } else {
        setCurrentView("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useNavigationState(currentView);

  return (
    <>
      <SiteHeader />
      {currentView === "full-menu" ? (
        <FullMenuPage />
      ) : (
        <main>
          <HeroSection />
          <HeroBestSellersDivider />
          <BestSellersSection />
          <HeroBestSellersDivider />
          <AboutSection />
          <HeroBestSellersDivider />
          <GallerySection />
          <HeroBestSellersDivider />
          <ContactSection />
        </main>
      )}
    </>
  );
}
