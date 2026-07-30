import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({
  title,
  subtitle,
  children,
}: Props) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          {subtitle}
        </p>
      </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;