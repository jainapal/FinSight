import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const DesktopNav = () => {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      <div className="flex items-center gap-8">
        <NavLinks />
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default DesktopNav;