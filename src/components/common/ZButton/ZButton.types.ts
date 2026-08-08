import { ButtonHTMLAttributes, ReactNode } from "react";

export type ZButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";

export type ZButtonSize = "sm" | "md" | "lg" | "icon";

export interface ZButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ZButtonVariant;

  size?: ZButtonSize;

  loading?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}
