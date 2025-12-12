import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import BackToHome from "../components/BackToHome";
import WelcomeMsg from "../components/WelcomeMsg";
import { useForm } from "react-hook-form";
import { validations } from "../features/auth/validations";
import { useLogin } from "../features/auth/useLogin";
import SpinnerMini from "../components/SpinnerMini";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

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
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md shadow-black/25  border border-color rounded-lg max-w-sm mx-auto p-6 my-10 smooth-transition"
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
          <Button disabled={loading} style="gradient" type="submit" className="group">
            {loading ? <SpinnerMini /> :
              <span>
                Sign In
                <ArrowRight size={18} className="inline ms-2 transition-transform duration-300 group-hover:translate-x-2" />
              </span>}
            {/* <SpinnerMini /> */}
          </Button>
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Create account
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
