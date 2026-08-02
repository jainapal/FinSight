import {forwardRef, type InputHTMLAttributes,} from "react";

interface AuthInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const AuthInput = forwardRef<
  HTMLInputElement,
  AuthInputProps
>(({ label, error, className = "", ...props }, ref) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        ref={ref}
        {...props}
        className={`
          w-full
          rounded-xl
          border
          bg-white
          px-4
          py-3
          text-slate-900
          outline-none
          placeholder:text-slate-400
          transition-all
          duration-200
          ${
            error
              ? "border-red-500 focus:ring-4 focus:ring-red-100"
              : "border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          }
          ${className}
        `}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

AuthInput.displayName = "AuthInput";

export default AuthInput;