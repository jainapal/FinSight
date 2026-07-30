import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Input from "../ui/Input";

import type {LoginFormData,} from "../../validators/auth.validator";
import  {loginSchema,} from "../../validators/auth.validator";


import { useAuthStore } from "../../store/auth.store";

const LoginForm = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const isLoading = useAuthStore(
    (state) => state.isLoading
  );

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
      await login(
        data.email,
        data.password
      );

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <Card>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          isLoading={isLoading}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;