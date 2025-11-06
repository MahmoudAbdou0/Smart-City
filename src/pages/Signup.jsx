import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import BackToHome from "../components/BackToHome";
import WelcomeMsg from "../components/WelcomeMsg";
import { useForm } from "react-hook-form";
import { validations } from "../features/auth/validations";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <BackToHome />
      <WelcomeMsg msg="Let's Get Started" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-light shadow-md shadow-black/25 border border-primary-light rounded-lg max-w-sm m-auto p-6 mt-10"
      >
        <Input
          label="Full Name"
          name="fullName"
          type="text"
          register={register}
          options={validations.fullName}
          error={errors?.fullName?.message}
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
          name="nationalID"
          type="text"
          register={register}
          options={validations.nationalID}
          error={errors?.nationalID?.message}
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
        <Button style="gradient" type="submit">
          Sign Up &rarr;
        </Button>
        <p className="text-sm text-center">
          Have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </form>
    </>
  );
}

export default Signup;
