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
        <main className="min-h-screen pt-28 pb-16 relative overflow-hidden bg-[radial-gradient(ellipse_at_50%_-10%,oklch(40%_0.13_78/0.18),transparent_29rem),radial-gradient(ellipse_at_50%_100%,oklch(76%_0.18_82/0.12),transparent_45rem),linear-gradient(180deg,oklch(6%_0.012_250),oklch(3.4%_0.01_250)_78%)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(oklch(95%_0.01_85/0.025)_1px,transparent_1px),linear-gradient(90deg,oklch(95%_0.01_85/0.02)_1px,transparent_1px)] before:mask-[radial-gradient(ellipse_at_50%_40%,black,transparent_78%)] before:bg-[size:4.8rem_4.8rem] before:opacity-55">
            <div className="relative z-10 mx-auto w-[min(100%,92rem)] px-[clamp(1rem,4vw,2rem)]">
                {/* Back Link */}
                <div className="mb-6">
                    <a
                        href="#menu"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-yellow hover:text-yellow-300 transition-colors border border-brand-yellow/20 bg-brand-yellow/5 hover:bg-brand-yellow/10 px-4 py-2.5 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-transform"
                    >
                        &larr; Back to Home
                    </a>
                </div>

                {/* Title Lockup in identical style as bestsellers header */}
                <div className="text-center mb-10">
                    <div className="best-sellers-title-lockup text-brand-yellow mx-auto flex w-max max-w-full items-center justify-center gap-[clamp(0.48rem,2.8vw,1.45rem)] mb-4">
                        <span
                            className="best-sellers-rays h-[clamp(2.15rem,8vw,4.5rem)] aspect-[112/122] -rotate-[10deg] bg-current opacity-90"
                            style={
                                {
                                    mask: `url(${bestSellersRays}) center / contain no-repeat`,
                                    WebkitMask: `url(${bestSellersRays}) center / contain no-repeat`,
                                } as React.CSSProperties
                            }
                            aria-hidden="true"
                        />
                        <h1 className="best-sellers-heading relative w-max max-w-full text-center font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(2.35rem,8vw,4.8rem)] leading-[0.9] font-black tracking-[0.035em] uppercase [text-shadow:0_0.15rem_0_oklch(48%_0.15_74/0.72),0_0.75rem_1.5rem_oklch(0%_0_0/0.58)]">
                            Our Full Menu
                        </h1>
                        <span
                            className="best-sellers-rays h-[clamp(2.15rem,8vw,4.5rem)] aspect-[112/122] rotate-[10deg] scale-x-[-1] bg-current opacity-90"
                            style={
                                {
                                    mask: `url(${bestSellersRays}) center / contain no-repeat`,
                                    WebkitMask: `url(${bestSellersRays}) center / contain no-repeat`,
                                } as React.CSSProperties
                            }
                            aria-hidden="true"
                        />
                    </div>
                    <p className="text-[clamp(0.88rem,1vw,1.02rem)] text-brand-white/80 max-w-xl mx-auto leading-relaxed">
                        Hot grilled sandwiches and crispy snacks, served fresh at street-friendly prices.
                    </p>
                </div>

                {/* Categories Tab Bar Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto border-b border-brand-yellow/10 pb-6">
                    {menuCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeCategory === category.id
                                    ? "bg-brand-yellow text-neutral-950 shadow-md shadow-brand-yellow/10"
                                    : "bg-white/5 text-brand-white/70 border border-white/5 hover:border-brand-yellow/20 hover:bg-white/10 hover:text-brand-white"
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Dynamic Items Grid */}
                {filteredItems.length === 0 ? (
                    <div className="text-center py-16 text-brand-white/45 text-sm uppercase tracking-widest">
                        No items listed under this category.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-[clamp(0.72rem,2.4vw,1.05rem)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredItems.map((item) => (
                            <BestSellerCard item={item} key={item.name} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
