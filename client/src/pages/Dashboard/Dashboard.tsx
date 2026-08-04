import DashboardLayout from "@/layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          Welcome to FinSight 🚀
        </h2>

        <p className="mt-4 text-slate-500">
          Your AI-powered financial analysis workspace is ready.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;