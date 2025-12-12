import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import BackToHome from "../components/BackToHome";
import WelcomeMsg from "../components/WelcomeMsg";
import { useForm } from "react-hook-form";
import { validations } from "../features/auth/validations";
import { useRegister } from "../features/auth/useRegister";
import SpinnerMini from "../components/SpinnerMini";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

function Signup() {
  const { mutate, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const loading = isLoading || isSubmitting;

  function onSubmit(data) {
    // console.log(data);

    mutate(data);
  }
  return (
    <>
      <BackToHome />
      <WelcomeMsg msg="Let's Get Started" />
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md shadow-black/25 border border-color rounded-lg max-w-sm m-auto p-6 my-10 smooth-transition"
        >
          <Input
            label="Name"
            name="name"
            type="text"
            register={register}
            options={validations.name}
            error={errors?.name?.message}
          />
          <Input
            label="Email"
            name="email"
            type="text"
            register={register}
            options={validations.email}
            error={errors?.email?.message}
          />
          <Input
            label="Phone"
            name="phone"
            type="text"
            register={register}
            options={validations.phone}
            error={errors?.phone?.message}
          />
          <Input
            label="Address"
            name="address"
            type="text"
            register={register}
            options={validations.address}
            error={errors?.address?.message}
          />
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
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            register={register}
            options={validations.confirmPassword(watch)}
            error={errors?.confirmPassword?.message}
          />
          <Button disabled={loading} style="gradient" type="submit" className="group">
            {loading ? <SpinnerMini /> :
              <span>
                Sign Up
                <ArrowRight size={18} className="inline ms-2 transition-transform duration-300 group-hover:translate-x-2" />
              </span>}
          </Button>
          <p className="text-sm text-center">
            Have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
