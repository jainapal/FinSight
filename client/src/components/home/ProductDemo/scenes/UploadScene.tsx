import { CheckCircle2, FileText, Sparkles } from "lucide-react";

const UploadScene = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      {/* Top */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Uploaded Report
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              Annual_Report_2025.pdf
            </h3>
          </div>

          <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            Ready
          </div>
        </div>

        {/* File Card */}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <FileText className="text-blue-600" size={28} />
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-900">
                Annual_Report_2025.pdf
              </p>

              <p className="mt-1 text-sm text-slate-500">
                PDF • 18.6 MB
              </p>
            </div>

            <CheckCircle2
              size={28}
              className="text-green-500"
            />
          </div>
        </div>

        {/* Progress */}

        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">
              Upload Progress
            </span>

            <span className="text-sm font-semibold text-slate-900">
              100%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-full rounded-full bg-blue-600" />
          </div>
        </div>
      </div>

      {/* Bottom Status */}

      <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-blue-100 p-2">
            <Sparkles
              size={18}
              className="text-blue-600"
            />
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              AI Analysis Starting...
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              FinSight is preparing your financial report for
              intelligent analysis. This usually takes only a
              few seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadScene;