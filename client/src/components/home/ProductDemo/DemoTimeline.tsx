import clsx from "clsx";
import { Check } from "lucide-react";
import { DEMO_STEPS } from "./data";

interface DemoTimelineProps {
  currentStep?: number;
}

const DemoTimeline = ({
  currentStep = 0,
}: DemoTimelineProps) => {
  return (
    <div className="space-y-8">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Live Analysis
        </p>

        <h3 className="mt-2 text-3xl font-bold text-slate-900">
          AI Workflow
        </h3>

        <p className="mt-2 text-slate-600">
          Watch how FinSight transforms an annual report into
          meaningful financial insights.
        </p>
      </div>

      <div className="space-y-6">
        {DEMO_STEPS.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={step.id}
              className="relative flex gap-4"
            >
              {/* Line */}

              {index !== DEMO_STEPS.length - 1 && (
                <div className="absolute left-[18px] top-10 h-16 w-[2px] bg-slate-200" />
              )}

              {/* Circle */}

              <div
                className={clsx(
                  "relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all",
                  {
                    "border-green-500 bg-green-500 text-white":
                      isCompleted,

                    "border-blue-600 bg-blue-600 text-white":
                      isActive,

                    "border-slate-300 bg-white text-slate-400":
                      !isCompleted && !isActive,
                  }
                )}
              >
                {isCompleted ? (
                  <Check size={18} />
                ) : (
                  <span className="text-sm font-semibold">
                    {index + 1}
                  </span>
                )}
              </div>

              {/* Content */}

              <div className="pb-8">
                <h4
                  className={clsx(
                    "font-semibold transition-colors",
                    {
                      "text-green-600": isCompleted,

                      "text-blue-600": isActive,

                      "text-slate-500":
                        !isCompleted && !isActive,
                    }
                  )}
                >
                  {step.title}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default DemoTimeline;