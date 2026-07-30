import {
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const RiskScene = () => {
  return (
    <div className="flex h-full flex-col">

      {/* Header */}

      <div>

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-amber-100 p-3">
            <AlertTriangle
              size={24}
              className="text-amber-600"
            />
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Financial Risk Summary
            </h2>

            <p className="text-slate-500">
              AI identified key financial observations.
            </p>

          </div>

        </div>

      </div>

      {/* Risk Cards */}

      <div className="mt-10 space-y-4">

        {/* Card */}

        <div className="rounded-2xl border border-red-200 bg-red-50 p-4">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-slate-900">
                Debt Ratio Increased
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Confidence • 94%
              </p>

            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
              High
            </span>

          </div>

        </div>

        {/* Card */}

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-slate-900">
                Liquidity Risk
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Confidence • 94%
              </p>

            </div>

            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
              Medium
            </span>

          </div>

        </div>

        {/* Card */}

        <div className="rounded-2xl border border-green-200 bg-green-50 p-4">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-slate-900">
                Revenue Growth Stable
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Confidence • 98%
              </p>

            </div>

            <CheckCircle2
              className="text-green-600"
              size={24}
            />

          </div>

        </div>

      </div>

      {/* Score */}

      <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50 p-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <ShieldCheck
              size={22}
              className="text-blue-600"
            />

            <span className="font-semibold text-slate-800">
              Financial Health
            </span>

          </div>

          <span className="text-2xl font-bold text-slate-900">
            72/100
          </span>

        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">

          <div className="h-full w-[72%] rounded-full bg-blue-600" />

        </div>

      </div>

    </div>
  );
};

export default RiskScene;