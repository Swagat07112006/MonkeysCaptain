import {
  MAPS_URL,
  businessDetails,
  fullMenu,
  getMenuItemPath,
  menuCategories,
  type MenuItem,
} from "../content/siteContent";
import { BestSellerCard } from "./BestSellerCard";

function priceLabel(price: MenuItem["price"]): string {
  if (typeof price === "string") {
    return price;
  }

  return price.map((option) => `${option.label} ${option.value}`).join(" · ");
}

export function MenuItemPage({ item }: { item: MenuItem }) {
  const category =
    menuCategories.find((candidate) => candidate.id === item.category)?.label ??
    "Street Food";
  const relatedItems = fullMenu
    .filter(
      (candidate) =>
        candidate.category === item.category && candidate.name !== item.name,
    )
    .slice(0, 3);

  return (
    <main
      className={`text-brand-white min-h-screen
        bg-[radial-gradient(ellipse_at_50%_-10%,oklch(40%_0.13_78/0.18),transparent_34rem),linear-gradient(180deg,oklch(6%_0.012_250),oklch(3.4%_0.01_250)_78%)]
        px-[clamp(1rem,4vw,2rem)] pt-28 pb-20`}
    >
      <article className="mx-auto w-[min(100%,76rem)]">
        <nav
          className={`text-brand-white/60 mb-7 flex flex-wrap
            items-center gap-2 text-xs font-bold tracking-[0.08em]
            uppercase`}
          aria-label="Breadcrumb"
        >
          <a
            className="hover:text-brand-yellow transition"
            href="/"
          >
            Home
          </a>
          <span aria-hidden="true">/</span>
          <a
            className="hover:text-brand-yellow transition"
            href="/menu/"
          >
            Menu
          </a>
          <span aria-hidden="true">/</span>
          <span
            aria-current="page"
            className="text-brand-yellow"
          >
            {item.name}
          </span>
        </nav>

        <div
          className={`grid items-center gap-[clamp(2rem,6vw,5rem)]
            lg:grid-cols-2`}
        >
          <figure
            className={`border-brand-yellow/65 overflow-hidden
              rounded-2xl border bg-black
              shadow-[0_1.6rem_3rem_oklch(0%_0_0/0.4)]`}
          >
            <img
              className="aspect-square size-full object-cover"
              src={item.image}
              srcSet={item.imageSrcSet}
              sizes="(max-width: 1024px) calc(100vw - 2rem), 50vw"
              alt={item.alt}
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <div>
            <p
              className={`text-brand-yellow mb-4 text-sm font-black
                tracking-[0.16em] uppercase`}
            >
              {category} · Vegetarian
            </p>
            <h1
              className={`font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
                text-[clamp(3.2rem,8vw,6.4rem)] leading-[0.88]
                tracking-[0.02em] text-balance uppercase`}
            >
              {item.name}
            </h1>
            <p
              className={`text-brand-white/85 mt-6 max-w-2xl
                text-[clamp(1.05rem,2vw,1.3rem)] leading-8`}
            >
              {item.description}
            </p>

            <section
              className={`border-brand-yellow/35 bg-brand-yellow/6 mt-8
                rounded-xl border p-5`}
              aria-labelledby="item-price-title"
            >
              <h2
                className={`text-brand-white/60 text-xs font-black
                  tracking-[0.16em] uppercase`}
                id="item-price-title"
              >
                Stall price
              </h2>
              {typeof item.price === "string" ? (
                <p
                  className={`text-brand-yellow mt-2
                    font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
                    text-5xl`}
                >
                  {item.price}
                </p>
              ) : (
                <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                  {item.price.map((option) => (
                    <div key={option.label}>
                      <dt className="text-brand-white/65 text-sm">
                        {option.label}
                      </dt>
                      <dd
                        className={`text-brand-yellow
                          font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
                          text-4xl`}
                      >
                        {option.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </section>

            <p className="text-brand-white/75 mt-6 leading-7">
              Get {item.name} at {businessDetails.name} in{" "}
              {businessDetails.neighbourhood}, {businessDetails.city}. Served at
              the stall during evening hours; food ordering is offline.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className={`bg-brand-yellow rounded-full px-6 py-3
                  text-sm font-black text-neutral-950 uppercase
                  transition hover:bg-yellow-300`}
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
              <a
                className={`border-brand-yellow text-brand-yellow
                  hover:bg-brand-yellow rounded-full border-2 px-6 py-3
                  text-sm font-black uppercase transition
                  hover:text-neutral-950`}
                href="/menu/"
              >
                View full menu
              </a>
            </div>
          </div>
        </div>

        <section
          className={`border-brand-yellow/20 mt-[clamp(4rem,10vw,7rem)]
            border-t pt-12`}
          aria-labelledby="item-facts-title"
        >
          <h2
            className={`text-brand-yellow
              font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
              text-[clamp(2.2rem,6vw,4rem)] tracking-[0.025em]
              uppercase`}
            id="item-facts-title"
          >
            Quick details
          </h2>
          <dl className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt
                className={`text-brand-white/50 text-xs font-black
                  tracking-widest uppercase`}
              >
                Item
              </dt>
              <dd className="mt-1 font-bold">{item.name}</dd>
            </div>
            <div>
              <dt
                className={`text-brand-white/50 text-xs font-black
                  tracking-widest uppercase`}
              >
                Price
              </dt>
              <dd className="mt-1 font-bold">{priceLabel(item.price)}</dd>
            </div>
            <div>
              <dt
                className={`text-brand-white/50 text-xs font-black
                  tracking-widest uppercase`}
              >
                Location
              </dt>
              <dd className="mt-1 font-bold">Dumduma, Bhubaneswar</dd>
            </div>
            <div>
              <dt
                className={`text-brand-white/50 text-xs font-black
                  tracking-widest uppercase`}
              >
                Hours
              </dt>
              <dd className="mt-1 font-bold">Daily, 4:00 PM–11:30 PM</dd>
            </div>
          </dl>
        </section>

        {relatedItems.length > 0 && (
          <section
            className="mt-[clamp(4rem,9vw,6rem)]"
            aria-labelledby="related-items-title"
          >
            <h2
              className={`text-brand-yellow
              font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
              text-[clamp(2.2rem,6vw,4rem)] tracking-[0.025em]
              uppercase`}
              id="related-items-title"
            >
              More from {category}
            </h2>
            <div
              className={"mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}
            >
              {relatedItems.map((relatedItem) => (
                <BestSellerCard
                  item={relatedItem}
                  key={getMenuItemPath(relatedItem)}
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
