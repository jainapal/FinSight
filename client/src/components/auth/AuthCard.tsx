import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-2xl backdrop-blur-2xl">
      {children}
    </div>
  );
};

export default AuthCard;