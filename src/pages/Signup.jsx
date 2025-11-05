import { Link } from "react-router-dom";
import Button from "../components/ButtonSubmit";
import Input from "../components/Input";
import BackToHome from "../components/BackToHome";
import WelcomeMsg from "../components/WelcomeMsg";

function Signup() {
  return (
    <>
      <BackToHome />
      <WelcomeMsg msg="Let's Get Started" />
      <form className="bg-light shadow-md shadow-black/25 border border-primary-light rounded-lg max-w-sm m-auto p-6 mt-10">
        <Input label="Full Name" name="fullName" type="text" />
        <Input label="Email" name="email" type="email" />
        <Input label="Phone" name="phone" type="text" />
        <Input label="Address" name="address" type="text" />
        <Input label="National ID" name="nationalID" type="text" />
        <Input label="Password" name="password" type="password" />
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
        <Button>Sign Up &rarr;</Button>
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
