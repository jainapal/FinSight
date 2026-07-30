import type { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-semibold tracking-wide text-blue-700",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;