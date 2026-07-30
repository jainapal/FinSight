const metrics = [
  {
    title: "Revenue",
    value: "+12%",
    trend: "↑ YoY",
    color: "text-green-600",
  },
  {
    title: "Net Profit",
    value: "+8%",
    trend: "↑ YoY",
    color: "text-green-600",
  },
  {
    title: "Debt Ratio",
    value: "42%",
    trend: "Normal",
    color: "text-amber-600",
  },
  {
    title: "Cash Flow",
    value: "Positive",
    trend: "Healthy",
    color: "text-blue-600",
  },
];

const MetricsPreview = () => {
  return (
    <div className="grid h-full grid-cols-2 gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
        >
          <p className="text-sm text-slate-500">
            {metric.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {metric.value}
          </h2>

          <p className={`mt-3 text-sm font-medium ${metric.color}`}>
            {metric.trend}
          </p>

          <div className="mt-4 h-1 rounded-full bg-slate-100">
            <div className="h-full w-3/4 rounded-full bg-blue-500" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsPreview;