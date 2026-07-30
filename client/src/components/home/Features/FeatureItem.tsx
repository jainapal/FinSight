import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  active: boolean;
  onClick: () => void;
}

const FeatureItem = ({
  icon: Icon,
  title,
  subtitle,
  active,
  onClick,
}: FeatureItemProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "group w-full rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        active
          ? "border-blue-500 bg-blue-50 shadow-md"
          : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
            active
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
          )}
        >
          <Icon 
          size={22} 
          className="transition-transform duration-300 group-hover:rotate-6"
          />
        </div>

        <div>
          <h3
            className={clsx(
              "font-semibold transition-colors",
              active ? "text-blue-700" : "text-slate-900"
            )}
          >
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>
    </button>
  );
};

export default FeatureItem;