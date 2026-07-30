import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition-all",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;