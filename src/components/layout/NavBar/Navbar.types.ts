export interface NavigationItem {
  label: string;
  href: string;
}

export interface DesktopMenuProps {
  items: NavigationItem[];
}

export interface MobileMenuProps {
  items: NavigationItem[];
}
