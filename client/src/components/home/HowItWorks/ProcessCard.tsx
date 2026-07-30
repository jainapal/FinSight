import type { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessCard = ({
  icon: Icon,
  title,
  description,
}: ProcessCardProps) => {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-xl
      "
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-100">
        <Icon
          size={30}
          className="text-blue-600"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default ProcessCard;