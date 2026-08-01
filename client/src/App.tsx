import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { BestSellersSection } from "./components/BestSellersSection";
import { ContactSection } from "./components/ContactSection";
import { GallerySection } from "./components/GallerySection";
import { HeroBestSellersDivider } from "./components/HeroBestSellersDivider";
import { HeroSection } from "./components/HeroSection";
import { SiteHeader } from "./components/SiteHeader";
import { FullMenuPage } from "./components/FullMenuPage";
import { MenuItemPage } from "./components/MenuItemPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { useNavigationState } from "./hooks/useNavigationState";
import { resolveRoute } from "./lib/routes";

export function App({ initialPath = "/" }: { initialPath?: string }) {
  const route = resolveRoute(initialPath);

  useEffect(() => {
    if (window.location.hash === "#full-menu") {
      window.location.replace("/menu/");
    }
  }, []);

  useNavigationState(route.kind);

  return (
    <>
      <SiteHeader isHome={route.kind === "home"} />
      {route.kind === "home" && (
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
      {route.kind === "menu" && (
        <>
          <FullMenuPage />
          <ContactSection />
        </>
      )}
      {route.kind === "menu-item" && <MenuItemPage item={route.item} />}
      {route.kind === "not-found" && <NotFoundPage />}
    </>
  );
}
