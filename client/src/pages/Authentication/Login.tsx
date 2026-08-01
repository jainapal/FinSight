import { useState } from "react";

import Button from "@/components/ui/Button";
import AuthLayout from "@/layouts/AuthLayout";

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
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to your workspace."
        />

        <form className="space-y-5">
          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
          />

          <RememberMe
            checked={rememberMe}
            onChange={setRememberMe}
          />

          <Button className="w-full">
            Sign In
          </Button>
        </form>

        <AuthDivider />

        {/* We'll enable this when OAuth is added */}
        {/* <GoogleButton /> */}

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