import { brandAssets } from "../content/siteContent";
import { HeroActions } from "./HeroActions";
import { HeroCopy } from "./HeroCopy";
import { MobileHeroStall } from "./MobileHeroStall";
import { TrustHighlights } from "./TrustHighlights";

export function HeroSection() {
  return (
    <section
      className={`hero-section relative min-h-[calc(100vh-3.5rem)]
        w-full overflow-hidden pt-28 max-[40rem]:isolate
        max-[40rem]:min-h-svh max-[40rem]:pt-[clamp(10.6rem,38vw,13rem)]
        max-[40rem]:pb-[1.35rem]`}
      aria-labelledby="hero-title"
    >
      <div
        className={`hero-media absolute inset-y-0 right-0 z-0
          max-[40rem]:hidden`}
      >
        <img
          className="h-full w-auto max-w-none"
          src={brandAssets.heroImage}
          alt="The Monkey's Captain food stall"
          width={1672}
          height={941}
          fetchPriority="high"
        />
      </div>
      <div
        className={`hero-grid relative z-10 mx-auto grid w-full
          max-w-7xl grid-cols-12 px-10 max-[40rem]:block
          max-[40rem]:px-[clamp(1.15rem,5vw,1.75rem)]`}
      >
        <div
          className={`hero-copy col-span-5 mt-12 max-[40rem]:relative
            max-[40rem]:col-span-full max-[40rem]:mt-0`}
        >
          <HeroCopy />
          <HeroActions />
          <MobileHeroStall />
          <TrustHighlights />
        </div>
      </div>
    </section>
  );
}
