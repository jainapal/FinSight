import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-12">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Branding */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            FinSight AI
          </h1>

          <p className="mt-2 text-sm text-slate-600">
          Transform Financial Reports into Actionable Insights
          </p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;