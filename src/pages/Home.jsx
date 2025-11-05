import { Link } from "react-router-dom";
import logo from '../assets/logo.jpeg'
import ButtonLight from "../components/ButtonLight";
import ButtonGradient from "../components/ButtonGradient";

const Home = () => {
  return (
    <>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-5 h-20 ">
          <img
            src={logo}
            alt="logo"
            className="h-full object-contain"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl text-dark tracking-wide">Smart City</h1>
            <p className="text-sm text-gray-600">Pharaonic Heritage Meets Innovation</p>
          </div>
        </div>

        <div className="flex gap-2">
          <ButtonGradient to="/register">Sign Up</ButtonGradient>
          <ButtonLight to="/login">Login</ButtonLight>
        </div>
      </div>
    </>
  );
};

export default Home;
