const AIChatPreview = () => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          AI Financial Assistant
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Ask questions about your reports using natural language.
        </p>
      </div>

      <div className="mt-6 flex-1 space-y-5">
        <div className="flex justify-end">
          <div className="max-w-md rounded-2xl bg-blue-600 px-5 py-3 text-white shadow">
            <p className="text-xs font-medium opacity-80">You</p>

            <p className="mt-1">
              Why did operating profit decline compared to FY2024?
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="max-w-lg rounded-2xl bg-slate-100 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              FinSight AI
            </p>

            <p className="mt-2 text-slate-700 leading-7">
              Operating expenses increased by{" "}
              <strong>14%</strong>, while revenue
              increased only <strong>8%</strong>.
              Administrative expenses were the
              largest contributor to the decline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatPreview;