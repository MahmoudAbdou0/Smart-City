import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import BackToHome from "../components/BackToHome";
import WelcomeMsg from "../components/WelcomeMsg";
import { useForm } from "react-hook-form";
import { validations } from "../features/auth/validations";
import { useLogin } from "../features/auth/useLogin";
import SpinnerMini from "../components/SpinnerMini";

function Login() {
  const { mutate, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const loading = isLoading || isSubmitting;

  async function onSubmit(data) {
    mutate(data);
  }
  return (
    <>
      <BackToHome />
      <WelcomeMsg msg="Welcome Back" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-light shadow-md shadow-black/25  border border-primary-light rounded-lg max-w-sm m-auto p-6 mt-10"
      >
        <Input
          label="National ID"
          name="nationalId"
          type="text"
          register={register}
          options={validations.nationalId}
          error={errors?.nationalId?.message}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          register={register}
          options={validations.password}
          error={errors?.password?.message}
        />
        {/* <Link to="#" className="text-primary text-sm underline">
          Forgot Password?
        </Link> */}
        <Button disabled={loading} style="gradient" type="submit">
          {loading ? <SpinnerMini /> : <span>Sign In &rarr;</span>}
          {/* <SpinnerMini /> */}
        </Button>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Create account
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;
