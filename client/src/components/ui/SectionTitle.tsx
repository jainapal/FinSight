import type { ReactNode } from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
}

const SectionTitle = ({
  badge,
  title,
  description,
}: SectionTitleProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {badge && (
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;