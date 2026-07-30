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
        "inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;