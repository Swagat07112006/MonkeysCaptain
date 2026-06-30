import { bestSellers } from "../content/siteContent";
import { BestSellerCard } from "./BestSellerCard";
import { BestSellersDivider } from "./BestSellersDivider";
import { EventCateringBanner } from "./EventCateringBanner";
import { MenuLink } from "./MenuLink";

export function BestSellersSection() {
  return (
    <section
      className={`relative -mt-px hidden overflow-hidden
        bg-[radial-gradient(ellipse_at_50%_-10%,oklch(40%_0.13_78/0.18),transparent_29rem),radial-gradient(ellipse_at_50%_100%,oklch(76%_0.18_82/0.12),transparent_45rem),linear-gradient(180deg,oklch(6%_0.012_250),oklch(3.4%_0.01_250)_78%)]
        px-8 pt-[3.8rem] pb-12 text-[oklch(96%_0.008_85)]
        before:pointer-events-none before:absolute before:inset-0
        before:bg-[linear-gradient(oklch(95%_0.01_85/0.025)_1px,transparent_1px),linear-gradient(90deg,oklch(95%_0.01_85/0.02)_1px,transparent_1px)]
        before:[mask-image:radial-gradient(ellipse_at_50%_40%,black,transparent_78%)]
        before:bg-[length:4.8rem_4.8rem] before:opacity-55
        after:pointer-events-none after:absolute after:inset-0
        after:bg-[linear-gradient(180deg,oklch(0%_0_0/0.22),transparent_16%),radial-gradient(ellipse_at_6%_56%,oklch(76%_0.18_82/0.1),transparent_18rem),radial-gradient(ellipse_at_94%_56%,oklch(76%_0.18_82/0.1),transparent_18rem)]
        min-[64rem]:block`}
      id="menu"
      aria-labelledby="best-sellers-title"
    >
      <div className="relative z-1 mx-auto w-[min(100%,92rem)]">
        <h2
          className={`best-sellers-heading text-brand-yellow relative
            mx-auto w-max text-center
            [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
            text-[clamp(3.8rem,5.8vw,5.7rem)] leading-[0.9] font-black
            tracking-[0.035em] uppercase
            [text-shadow:0_0.15rem_0_oklch(48%_0.15_74/0.72),0_0.75rem_1.5rem_oklch(0%_0_0/0.58)]`}
          id="best-sellers-title"
        >
          Best Sellers
        </h2>
        <BestSellersDivider />
        <div
          className={`best-sellers-grid grid grid-cols-3
            gap-[clamp(0.8rem,1.25vw,1.05rem)] min-[80rem]:grid-cols-6`}
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
        <EventCateringBanner />
      </div>
    </section>
  );
}
