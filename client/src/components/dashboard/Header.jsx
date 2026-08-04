import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Analyze your financial reports with AI
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-full p-2 transition hover:bg-slate-100">
          <Bell size={22} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          K
        </div>
      </div>
    </header>
  );
};

export default Header;