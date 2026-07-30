import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue to FinSight AI"
    >
      <LoginForm />

      <p className="mt-6 text-center text-sm">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-slate-900"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;