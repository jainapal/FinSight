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
} from "@/components/auth";

const Signup = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Create Account"
          subtitle="Start analyzing financial reports with AI."
        />

        <form className="space-y-5">
          <AuthInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
          />

          <AuthInput
            label="Email"
            type="email"
            placeholder="john@example.com"
          />

          <PasswordInput
            label="Password"
            placeholder="Create a password"
          />

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />

            I agree to the Terms & Conditions
          </label>

          <Button className="w-full">
            Create Account
          </Button>
        </form>

        <AuthDivider />

        <AuthFooter
          text="Already have an account?"
          linkText="Sign In"
          to="/login"
        />
      </AuthCard>
    </AuthLayout>
  );
};

export default Signup;