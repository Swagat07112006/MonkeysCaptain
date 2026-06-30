export function BestSellersDivider() {
  return (
    <div
      className={`text-brand-yellow mx-auto mt-[0.55rem] mb-[1.65rem]
        grid w-[min(28rem,44vw)] grid-cols-[1fr_3.15rem_1fr]
        items-center gap-[0.8rem]`}
      aria-hidden="true"
    >
      <span
        className={`h-[0.13rem]
          bg-[linear-gradient(90deg,transparent,currentColor_24%,currentColor_76%,transparent)]`}
      />
      <span className="best-sellers-divider-icon" />
      <span
        className={`h-[0.13rem]
          bg-[linear-gradient(90deg,transparent,currentColor_24%,currentColor_76%,transparent)]`}
      />
    </div>
  );
}
