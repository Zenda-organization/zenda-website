import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ZContainerProps {
  children: ReactNode;
  className?: string;
}

export function ZContainer({ children, className }: ZContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}
