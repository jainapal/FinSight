import {
    CheckCircle2,
    Circle,
    LoaderCircle,
    BrainCircuit,
  } from "lucide-react";
  
  const ProcessingScene = () => {
    const completed = [
      "Balance Sheet",
      "Income Statement",
    ];
  
    const current = "Cash Flow Statement";
  
    const pending = [
      "Financial Ratios",
      "Management Discussion",
    ];
  
    return (
      <div className="flex h-full flex-col justify-between">
  
        {/* Header */}
  
        <div>
  
          <div className="flex items-center gap-3">
  
            <div className="rounded-xl bg-blue-100 p-3">
              <BrainCircuit
                className="text-blue-600"
                size={24}
              />
            </div>
  
            <div>
  
              <h3 className="text-2xl font-bold text-slate-900">
                AI Analysis
              </h3>
  
              <p className="text-slate-500">
                FinSight is reading your annual report.
              </p>
  
            </div>
  
          </div>
  
          {/* Checklist */}
  
          <div className="mt-10 space-y-5">
  
            {completed.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={22}
                  className="text-green-500"
                />
  
                <span className="font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
  
            <div className="flex items-center gap-3">
  
              <LoaderCircle
                size={22}
                className="animate-spin text-blue-600"
              />
  
              <span className="font-medium text-blue-700">
                {current}
              </span>
  
            </div>
  
            {pending.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <Circle
                  size={20}
                  className="text-slate-300"
                />
  
                <span className="text-slate-400">
                  {item}
                </span>
              </div>
            ))}
  
          </div>
  
        </div>
  
        {/* Progress */}
  
        <div className="mt-12">
  
          <div className="mb-3 flex justify-between">
  
            <span className="font-medium text-slate-600">
              Analysis Progress
            </span>
            
              <span className="font-semibold text-slate-900">
                68%
              </span>
          
            
  
          </div>
  
          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
  
            <div className="h-full w-[68%] rounded-full bg-blue-600" />
  
          </div>
  
          <p className="mt-4 text-sm text-slate-500">
            Estimated time remaining:{" "}
            <span className="font-semibold">
              2 seconds
            </span>
          </p>
  
        </div>
  
      </div>
    );
  };
  
  export default ProcessingScene;