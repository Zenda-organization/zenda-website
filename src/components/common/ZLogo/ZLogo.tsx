import { Link } from "react-router-dom";

interface ZLogoProps {
  variant?: "full" | "icon";
}

export function ZLogo({ variant = "full" }: ZLogoProps) {
  return (
    <Link to="/" className="flex items-center gap-3">
      {/* Depois substituiremos pelo SVG oficial */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold">
        Z
      </div>

      {variant === "full" && (
        <span className="font-heading text-2xl font-bold tracking-tight">Zenda</span>
      )}
    </Link>
  );
}
