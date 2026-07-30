import {
    FileText,
    CheckCircle2,
    AlertTriangle,
    TrendingUp,
  } from "lucide-react";
  
  const HeroDemo = () => {
    return (
      <div className="relative">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
  
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={22} />
  
              <div>
                <p className="font-bold text-xl text-slate-900">
                  Annual_Report_2026.pdf
                </p>
  
                <p className="text-sm text-slate-500">
                  Uploaded Successfully
                </p>
              </div>
            </div>
  
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Analysis Complete
            </span>
          </div>
  
          <div className="space-y-5">
  
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={20}
                className="text-green-500"
              />
  
              <span className="text-slate-700">
                Reading Balance Sheet
              </span>
            </div>
  
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={20}
                className="text-green-500"
              />
  
              <span className="text-slate-700">
                Analysing Cash Flow
              </span>
            </div>
  
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={20}
                className="text-green-500"
              />
  
              <span className="text-slate-700">
                Detecting Financial Risks
              </span>
            </div>
  
          </div>
  
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-center gap-3">
              <AlertTriangle
                size={22}
                className="text-amber-600"
              />
  
              <div>
                <p className="font-semibold text-slate-900">
                  High Debt Ratio Detected
                </p>
  
                <p className="mt-1 text-sm text-slate-600">
                  Debt increased by 18% compared to last year.
                </p>
              </div>
            </div>
          </div>
  
          <div className="mt-6 rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <TrendingUp
                className="text-emerald-600"
                size={22}
              />
  
              <div>
                <p className="font-semibold">
                  Revenue Growth
                </p>
  
                <p className="text-sm text-slate-500">
                  +12.4% YoY
                </p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default HeroDemo;