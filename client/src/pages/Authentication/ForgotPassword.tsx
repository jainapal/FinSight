import Button from "@/components/ui/Button";
import AuthLayout from "@/layouts/AuthLayout";

import {
  AuthCard,
  AuthFooter,
  AuthHeader,
  AuthInput,
} from "@/components/auth";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Forgot Password?"
          subtitle="Enter your email and we'll send you a reset link."
        />

        <form className="space-y-5">
          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Button className="w-full">
            Send Reset Link
          </Button>
        </form>

        <AuthFooter
          text="Remember your password?"
          linkText="Sign In"
          to="/login"
        />
      </AuthCard>
    </AuthLayout>
  );
};

export default ForgotPassword;