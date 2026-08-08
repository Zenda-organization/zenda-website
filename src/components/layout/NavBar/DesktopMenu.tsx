import { NavigationItem } from "./NavigationItem";
import { DesktopMenuProps } from "./Navbar.types";

export function DesktopMenu({ items }: DesktopMenuProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {items.map((item) => (
        <NavigationItem key={item.href} item={item} />
      ))}
    </nav>
  );
}
