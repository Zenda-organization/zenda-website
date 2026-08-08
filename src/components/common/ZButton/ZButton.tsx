import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { ZButtonProps } from "./ZButton.types";

const variants = {
  primary: "bg-[#0F4C81] hover:bg-[#0B3B64] text-white",

  secondary: "bg-[#2563EB] hover:bg-[#1D4ED8] text-white",

  outline:
    "border border-[#0F4C81] text-[#0F4C81] bg-transparent hover:bg-[#0F4C81] hover:text-white",

  ghost: "hover:bg-slate-100",

  success: "bg-green-600 hover:bg-green-700 text-white",

  danger: "bg-red-600 hover:bg-red-700 text-white",
};

const sizes = {
  sm: "h-9 px-4",

  md: "h-11 px-6",

  lg: "h-12 px-8",

  icon: "h-11 w-11",
};

export function ZButton({
  variant = "primary",

  size = "md",

  loading = false,

  leftIcon,

  rightIcon,

  className,

  children,

  disabled,

  ...props
}: ZButtonProps) {
  return (
    <Button
      disabled={loading || disabled}

      className={cn(
        "rounded-xl font-medium transition-all duration-300",

        variants[variant],

        sizes[size],

        className,
      )}

      {...props}
    >
      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : leftIcon}

      {children}

      {!loading && rightIcon}
    </Button>
  );
}
