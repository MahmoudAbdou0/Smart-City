import { ArrowRight, Sparkles } from "lucide-react";
import logo from "../assets/logo.jpeg";
import Button from "../components/Button";
import heroImg from '../assets/pexels-spencer-4356144.jpg'

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="container flex justify-between items-center pt-16">
        <div className="flex items-center gap-5 h-20 ">
          <img src={logo} alt="logo" className="h-full object-contain" />
          <div>
            <h1 className="text-2xl sm:text-3xl text-dark tracking-wide">
              Smart City
            </h1>
            <p className="text-sm text-gray-600">
              Pharaonic Heritage Meets Innovation
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button style="gradient" to="/register" className="bg-blue-600">
            Register
          </Button>
          <Button style="light" to="/login">
            Login
          </Button>
        </div>
      </div>

      <div className="container grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-20">
        <div>
          <div className="flex items-center gap-2 bg-primary-light/35 py-2 px-4  border border-accent-light/20 rounded-3xl w-fit">
            <Sparkles className="h-4 w-4 text-[rgb(209,169,99)]" />
            <p className="font-normal text-gray-900">Ancient Wisdom, Modern Solutions</p>
          </div>

          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl text-[rgb(19,17,18)] mb-6 leading-tight">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(209,169,99)] to-[rgb(172,65,67)] mt-2">
              Civic Excellence
            </span>
          </h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Experience a revolutionary smart city platform that honors the grandeur of Ancient Egypt
            while delivering cutting-edge digital services for modern citizens.
          </p>

          <Button style="gradient" to="/login" className="font-sans flex w-fit group">
            Get Started
            <ArrowRight className="ms-2 smooth-transition group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-[400px] border-2 border-accent-light/20 shadow-xl shadow-black/20 group">
          <img
            src={heroImg}
            alt="Smart City"
            className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/25  via-transparent to-transparent" />
        </div>
      </div>

      {/* services section */}
      {/* <div className="container py-16">

        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl text-[rgb(19,17,18)] mb-4">Core Services</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[rgb(209,169,99)] to-[rgb(172,65,67)] mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive digital services designed to enhance your urban living experience
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Home;
