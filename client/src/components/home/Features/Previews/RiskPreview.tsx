const RiskPreview = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full rounded-2xl border border-amber-200 bg-amber-50 p-8">
        <h3 className="text-xl font-semibold text-amber-900">
          High Debt Ratio
        </h3>

        <p className="mt-3 text-amber-700">
          Debt increased by <strong>18%</strong> compared
          to last year.
        </p>

        <div className="mt-8 h-3 rounded-full bg-amber-200">
          <div className="h-3 w-[94%] rounded-full bg-amber-500" />
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="font-medium text-amber-800">
            Confidence
          </span>

          <span className="font-bold text-amber-900">
            94%
          </span>
        </div>
      </div>
    </div>
  );
};

export default RiskPreview;