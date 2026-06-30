import { ArrowRightIcon, MenuBookIcon } from "./icons/SiteIcons";

export function MenuLink() {
  return (
    <a
      className={`text-brand-yellow hover:bg-brand-yellow
        focus-visible:bg-brand-yellow border-brand-yellow mx-auto mt-4
        flex min-h-[3.25rem] w-max items-center justify-center gap-4
        rounded-full border-2 px-6 py-2.5 text-[1.05rem] font-black
        uppercase transition duration-200 ease-out
        hover:-translate-y-0.5 hover:text-[oklch(7%_0.014_80)]
        focus-visible:-translate-y-0.5
        focus-visible:text-[oklch(7%_0.014_80)]
        focus-visible:outline-none`}
      href="#menu"
    >
      <MenuBookIcon className="size-8" />
      View Full Menu
      <ArrowRightIcon
        className="size-[1.65rem]"
        strokeWidth="2.5"
      />
    </a>
  );
}
