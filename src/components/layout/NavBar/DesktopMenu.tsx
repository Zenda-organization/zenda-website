import { NavigationItem } from "./NavigationItem";

import type { DesktopMenuProps } from "./Navbar.types";

export function DesktopMenu({ items }: DesktopMenuProps) {
  return (
    <nav
      className="
        hidden
        items-center
        gap-8
        lg:flex
      "
    >
      {items.map((item) => (
        <NavigationItem key={item.href} item={item} />
      ))}
    </nav>
  );
}
