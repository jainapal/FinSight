import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
} from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const PasswordInput = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ label, error, className = "", ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>

      <div className="relative">
        <input
          ref={ref}
          {...props}
          type={showPassword ? "text" : "password"}
          className={`
            w-full
            rounded-xl
            border
            bg-white
            px-4
            py-3
            pr-12
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

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors duration-200 hover:text-blue-600"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;