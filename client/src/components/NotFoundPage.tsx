export function NotFoundPage() {
  return (
    <main
      className={`text-brand-white grid min-h-screen place-items-center
        bg-neutral-950 px-6 text-center`}
    >
      <div>
        <p
          className={`text-brand-yellow text-sm font-black
            tracking-[0.18em] uppercase`}
        >
          404 · Lost at sea
        </p>
        <h1
          className={`mt-4
            font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]
            text-[clamp(3.5rem,12vw,8rem)] leading-none uppercase`}
        >
          Page not found
        </h1>
        <p
          className={`text-brand-white/75 mx-auto mt-5 max-w-lg text-lg
            leading-8`}
        >
          This page is not on the Captain&apos;s map. Head back to the stall or
          explore the full menu.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            className={`bg-brand-yellow rounded-full px-6 py-3
              font-black text-neutral-950 uppercase`}
            href="/"
          >
            Go home
          </a>
          <a
            className={`border-brand-yellow text-brand-yellow
              rounded-full border-2 px-6 py-3 font-black uppercase`}
            href="/menu/"
          >
            View menu
          </a>
        </div>
      </div>
    </main>
  );
}
