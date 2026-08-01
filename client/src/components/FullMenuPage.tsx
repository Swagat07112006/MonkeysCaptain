import React, { useState } from "react";
import { fullMenu, menuCategories } from "../content/siteContent";
import { BestSellerCard } from "./BestSellerCard";
import bestSellersRays from "../assets/best-sellers-rays.svg";

export function FullMenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? fullMenu
      : fullMenu.filter((item) => item.category === activeCategory);

  return (
    <main
      className={`relative min-h-screen overflow-hidden
        bg-[radial-gradient(ellipse_at_50%_-10%,oklch(40%_0.13_78/0.18),transparent_29rem),radial-gradient(ellipse_at_50%_100%,oklch(76%_0.18_82/0.12),transparent_45rem),linear-gradient(180deg,oklch(6%_0.012_250),oklch(3.4%_0.01_250)_78%)]
        pt-28 pb-16 before:pointer-events-none before:absolute
        before:inset-0
        before:bg-[linear-gradient(oklch(95%_0.01_85/0.025)_1px,transparent_1px),linear-gradient(90deg,oklch(95%_0.01_85/0.02)_1px,transparent_1px)]
        before:mask-[radial-gradient(ellipse_at_50%_40%,black,transparent_78%)]
        before:bg-[size:4.8rem_4.8rem] before:opacity-55`}
    >
      <div
        className={`relative z-10 mx-auto w-[min(100%,92rem)]
          px-[clamp(1rem,4vw,2rem)]`}
      >
        {/* Back Link */}
        <div className="mb-6">
          <a
            href="/#menu"
            className={`text-brand-yellow border-brand-yellow/20
              bg-brand-yellow/5 hover:bg-brand-yellow/10 inline-flex
              cursor-pointer items-center gap-2 rounded-full border px-4
              py-2.5 text-xs font-black tracking-wider uppercase
              transition-colors transition-transform duration-200
              hover:-translate-y-0.5 hover:text-yellow-300`}
          >
            &larr; Back to Home
          </a>
        </div>

        {/* Title Lockup in identical style as bestsellers header */}
        <div className="mb-10 text-center">
          <div
            className={`best-sellers-title-lockup text-brand-yellow
              mx-auto mb-4 flex w-max max-w-full items-center
              justify-center gap-[clamp(0.48rem,2.8vw,1.45rem)]`}
          >
            <span
              className={`best-sellers-rays aspect-[112/122]
                h-[clamp(2.15rem,8vw,4.5rem)] -rotate-[10deg] bg-current
                opacity-90`}
              style={
                {
                  mask: `url(${bestSellersRays}) center / contain no-repeat`,
                  WebkitMask: `url(${bestSellersRays}) center / contain no-repeat`,
                } as React.CSSProperties
              }
              aria-hidden="true"
            />
            <h1
              className={`best-sellers-heading relative w-max max-w-full
                text-center
                font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
                text-[clamp(2.35rem,8vw,4.8rem)] leading-[0.9]
                font-black tracking-[0.035em] uppercase
                [text-shadow:0_0.15rem_0_oklch(48%_0.15_74/0.72),0_0.75rem_1.5rem_oklch(0%_0_0/0.58)]`}
            >
              Our Full Menu
            </h1>
            <span
              className={`best-sellers-rays aspect-[112/122]
                h-[clamp(2.15rem,8vw,4.5rem)] scale-x-[-1]
                rotate-[10deg] bg-current opacity-90`}
              style={
                {
                  mask: `url(${bestSellersRays}) center / contain no-repeat`,
                  WebkitMask: `url(${bestSellersRays}) center / contain no-repeat`,
                } as React.CSSProperties
              }
              aria-hidden="true"
            />
          </div>
          <p
            className={`text-brand-white/80 mx-auto max-w-xl
              text-[clamp(0.88rem,1vw,1.02rem)] leading-relaxed`}
          >
            Hot grilled sandwiches and crispy snacks, served fresh at
            street-friendly prices.
          </p>
        </div>

        {/* Categories Tab Bar Selector */}
        <div
          className={`border-brand-yellow/10 mx-auto mb-10 flex
            max-w-2xl flex-wrap justify-center gap-2 border-b pb-6`}
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`cursor-pointer rounded-full px-5 py-2.5
              text-xs font-black tracking-wider uppercase transition-all
              duration-200 ${
                activeCategory === category.id
                  ? `bg-brand-yellow shadow-brand-yellow/10
                    text-neutral-950 shadow-md`
                  : `text-brand-white/70 hover:border-brand-yellow/20
                    hover:text-brand-white border border-white/5
                    bg-white/5 hover:bg-white/10`
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Dynamic Items Grid */}
        {filteredItems.length === 0 ? (
          <div
            className={`text-brand-white/45 py-16 text-center text-sm
              tracking-widest uppercase`}
          >
            No items listed under this category.
          </div>
        ) : (
          <div
            className={`grid grid-cols-1
              gap-[clamp(0.72rem,2.4vw,1.05rem)] sm:grid-cols-2
              lg:grid-cols-3 xl:grid-cols-4`}
          >
            {filteredItems.map((item) => (
              <BestSellerCard
                item={item}
                key={item.name}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
