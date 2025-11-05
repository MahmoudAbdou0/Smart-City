import { Link } from "react-router-dom";
import Button from "../components/ButtonSubmit";
import Input from "../components/Input";
import WelcomeMsg from "../components/WelcomeMsg";

function Login() {
  return (
    <>
      <WelcomeMsg msg="Welcome Back" />
      <form className="bg-light shadow-md shadow-black/25  border border-primary-light rounded-lg max-w-sm m-auto p-6 mt-10">
        <Input label="National ID" name="nationalID" type="text" />
        <Input label="Password" name="password" type="password" />
        <Link to="#" className="text-primary text-sm underline">
          Forgot Password?
        </Link>
        <Button>Sign In &rarr;</Button>
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
