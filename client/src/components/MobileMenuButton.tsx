export function MobileMenuButton() {
  return (
    <button
      className={`mobile-menu-toggle text-brand-white absolute top-7
        right-4 z-50 hidden size-12 items-center justify-center
        rounded-full focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-yellow-300
        max-[40rem]:inline-flex`}
      type="button"
      aria-label="Open menu"
      aria-expanded="false"
      aria-controls="mobile-menu"
      data-mobile-menu-toggle
    >
      <svg
        className="size-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path
          className="hamburger-line hamburger-line-top"
          d="M4 6h16"
        />
        <path
          className="hamburger-line hamburger-line-middle"
          d="M4 12h16"
        />
        <path
          className="hamburger-line hamburger-line-bottom"
          d="M4 18h16"
        />
      </svg>
    </button>
  );
}
