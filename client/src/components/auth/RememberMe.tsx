import { Link } from "react-router-dom";

interface RememberMeProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const RememberMe = ({ checked, onChange }: RememberMeProps) => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        Remember me
      </label>

      <Link
        to="/forgot-password"
        className="text-sm font-medium text-blue-600 hover:text-blue-600"
      >
        Forgot Password?
      </Link>
    </div>
  );
};

export default RememberMe;