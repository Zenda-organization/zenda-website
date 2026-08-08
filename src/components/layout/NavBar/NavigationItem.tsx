import { NavLink } from "react-router-dom";
import { NavigationItem as NavigationItemType } from "./Navbar.types";

interface Props {
  item: NavigationItemType;
  onClick?: () => void;
}

export function NavigationItem({ item, onClick }: Props) {
  return (
    <NavLink
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        `
        transition-colors
        duration-300
        font-medium
        ${isActive ? "text-primary" : "text-slate-700 hover:text-primary"}
      `
      }
    >
      {item.label}
    </NavLink>
  );
}
