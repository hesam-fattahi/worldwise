import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const handleLogin = ({ email, password }) => login(email, password);

  useEffect(() => {
    if (isAuthenticated) navigate("/app/cities", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <section className="py-8 px-4 md:p-8">
      <h2 className="mb-6">Welcome back!</h2>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <FormRow label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            defaultValue="john@example.com"
            {...register("email", {
              required: "Please enter your email address.",
            })}
            error={errors.email?.message}
          />
        </FormRow>

        <FormRow label="Password" error={errors.password?.message}>
          <Input
            id="password"
            type="password"
            defaultValue="john1234"
            {...register("password", {
              required: "Please enter your password.",
            })}
            error={errors.password?.message}
          />
        </FormRow>

        <Button variant="primary" className="mt-4 ml-auto w-full">
          Login
        </Button>
      </Form>
    </section>
  );
};

export default Login;
