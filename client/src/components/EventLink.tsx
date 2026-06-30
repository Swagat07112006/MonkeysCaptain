import { Arrow640Icon } from "./icons/SiteIcons";

export function EventLink({ className }: { className: string }) {
  return (
    <a
      className={className}
      href="#contact"
    >
      Book for Your Event
      <Arrow640Icon className="size-4 translate-y-px" />
    </a>
  );
}
