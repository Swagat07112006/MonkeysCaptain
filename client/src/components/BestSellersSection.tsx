import { bestSellers } from "../content/siteContent";
import bestSellersRays from "../assets/best-sellers-rays.svg";
import type { CSSProperties } from "react";
import { BestSellerCard } from "./BestSellerCard";
import { BestSellersDivider } from "./BestSellersDivider";
import { MenuLink } from "./MenuLink";

export function BestSellersSection() {
  return (
    <section
      className={`best-sellers-section relative -mt-px overflow-hidden
        bg-[radial-gradient(ellipse_at_50%_-10%,oklch(40%_0.13_78/0.18),transparent_29rem),radial-gradient(ellipse_at_50%_100%,oklch(76%_0.18_82/0.12),transparent_45rem),linear-gradient(180deg,oklch(6%_0.012_250),oklch(3.4%_0.01_250)_78%)]
        px-[clamp(1rem,4vw,2rem)] pt-[clamp(2.7rem,8vw,3.8rem)]
        pb-[clamp(2.8rem,8vw,3rem)] text-[oklch(96%_0.008_85)]
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[linear-gradient(oklch(95%_0.01_85/0.025)_1px,transparent_1px),linear-gradient(90deg,oklch(95%_0.01_85/0.02)_1px,transparent_1px)]
        before:mask-[radial-gradient(ellipse_at_50%_40%,black,transparent_78%)]
        before:bg-size-[4.8rem_4.8rem] before:opacity-55
        after:pointer-events-none after:absolute after:inset-0
        after:bg-[linear-gradient(180deg,oklch(0%_0_0/0.22),transparent_16%),radial-gradient(ellipse_at_6%_56%,oklch(76%_0.18_82/0.1),transparent_18rem),radial-gradient(ellipse_at_94%_56%,oklch(76%_0.18_82/0.1),transparent_18rem)]`}
      id="menu"
      aria-labelledby="best-sellers-title"
    >
      <div className="relative z-1 mx-auto w-[min(100%,92rem)]">
        <div
          className={`best-sellers-title-lockup text-brand-yellow mx-auto
            flex w-max max-w-full items-center justify-center
            gap-[clamp(0.48rem,2.8vw,1.45rem)]`}
        >
          <span
            className={`best-sellers-rays h-[clamp(2.15rem,8vw,5.4rem)]
              aspect-[112/122] -rotate-[10deg] bg-current opacity-90`}
            style={
              {
                mask: `url(${bestSellersRays}) center / contain no-repeat`,
                WebkitMask: `url(${bestSellersRays}) center / contain no-repeat`,
              } as CSSProperties
            }
            aria-hidden="true"
          />
          <h2
            className={`best-sellers-heading relative
              w-max max-w-full text-center
              font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
              text-[clamp(2.35rem,11vw,5.7rem)] leading-[0.9] font-black
              tracking-[0.035em] uppercase
              [text-shadow:0_0.15rem_0_oklch(48%_0.15_74/0.72),0_0.75rem_1.5rem_oklch(0%_0_0/0.58)]`}
            id="best-sellers-title"
          >
            <span>Best</span>
            <span>Sellers</span>
          </h2>
          <span
            className={`best-sellers-rays h-[clamp(2.15rem,8vw,5.4rem)]
              aspect-[112/122] rotate-[10deg] scale-x-[-1] bg-current
              opacity-90`}
            style={
              {
                mask: `url(${bestSellersRays}) center / contain no-repeat`,
                WebkitMask: `url(${bestSellersRays}) center / contain no-repeat`,
              } as CSSProperties
            }
            aria-hidden="true"
          />
        </div>

        <BestSellersDivider />
        <div
          className={`best-sellers-grid grid grid-cols-1
            gap-[clamp(0.72rem,2.4vw,1.05rem)] sm:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-6`}
          aria-label="Best-selling menu items"
        >
          {bestSellers.map((item) => (
            <BestSellerCard
              item={item}
              key={item.name}
            />
          ))}
        </div>
        <MenuLink />
      </div>
    </section>
  );
}
