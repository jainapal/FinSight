import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",

        // Sizes
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-5 py-2.5 text-sm": size === "md",
          "px-6 py-3 text-base": size === "lg",
        },

        // Variants
        {
          "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg":
            variant === "primary",

          "bg-slate-100 text-slate-900 hover:bg-slate-200":
            variant === "secondary",

          "border border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50":
            variant === "outline",
        },

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;