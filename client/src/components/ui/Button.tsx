import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200",
        variant === "primary"
          ? " px-6 py-3 bg-blue-600 text-white hover:bg-blue-700"
          : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;