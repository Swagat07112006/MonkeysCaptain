import { Arrow640Icon } from "./icons/SiteIcons";

export function EventLink({
  className,
  href = "#contact",
}: {
  className: string;
  href?: string;
}) {
  return (
    <a
      className={className}
      href={href}
    >
      Book for Your Event
      <Arrow640Icon className="size-4 translate-y-px" />
    </a>
  );
}
