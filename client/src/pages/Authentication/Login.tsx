import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import AuthLayout from "@/layouts/AuthLayout";

import { useAuthStore } from "@/store/auth.store";

import {
  loginSchema,
  type LoginFormData,
} from "@/validators/auth.validator";

import {
  AuthCard,
  AuthDivider,
  AuthFooter,
  AuthHeader,
  AuthInput,
  PasswordInput,
  RememberMe,
} from "@/components/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [rememberMe, setRememberMe] = useState(false);

  const login = useAuthStore((state) => state.login);

  const isLoading = useAuthStore((state) => state.isLoading);

  const authError = useAuthStore((state) => state.error);

  const clearError = useAuthStore((state) => state.clearError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    try {
      clearError();

      await login(
        data.email,
        data.password
      );

      navigate(from);
    } catch {
      // Store already contains the error
    }
  };

  const from =(location.state as {from?: {pathname: string;};})?.from?.pathname || "/dashboard";

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to your workspace."
        />

        <form
          className="space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            autoFocus
            {...register("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
          />

          <RememberMe
            checked={rememberMe}
            onChange={setRememberMe}
          />

          {authError && (
            <p className="text-sm text-red-500">
              {authError}
            </p>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading
              ? "Signing In..."
              : "Sign In"}
          </Button>
        </form>

        <AuthDivider />

        <AuthFooter
          text="Don't have an account?"
          linkText="Sign Up"
          to="/signup"
        />
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;