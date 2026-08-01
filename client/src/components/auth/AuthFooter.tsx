import { Link } from "react-router-dom";

interface AuthFooterProps {
  text: string;
  linkText: string;
  to: string;
}

const AuthFooter = ({
  text,
  linkText,
  to,
}: AuthFooterProps) => {
  return (
    <div className="mt-6 text-center text-sm text-slate-600">
      {text}{" "}
      <Link
        to={to}
        className="font-semibold text-blue-600 hover:text-blue-700"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default AuthFooter;