// src/components/auth/AuthInput.tsx

import type { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const AuthInput = ({ label, ...props }: AuthInputProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        {...props}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-900
          outline-none
          hover:shadow-lg
          hover:-translate-y-0.5
          placeholder:text-slate-400
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-500/10
          transition-all
          duration-200
        "
      />
    </div>
  );
};

export default AuthInput;