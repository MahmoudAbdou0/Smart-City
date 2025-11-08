import { Link } from "react-router-dom";

const buttonStyle = {
  main: "px-4 py-2 my-4 rounded-xl font-heading smooth-transition font-medium border h-fit cursor-pointer",
  light:
    "bg-white border-primary text-primary hover:bg-primary-light hover:text-light",
  gradient:
    "bg-gradient-red border-gradient-red  rounded-xl  text-light  hover:opacity-80 ",
};
function Button({ children, style, type, to, className = "" }) {
  if (type === "submit")
    return (
      <button
        type={type}
        className={`${buttonStyle.main} ${buttonStyle[style]} ${className} w-full`}
      >
        {children}
      </button>
    );
  return (
    <Link to={to} className={`${buttonStyle.main} ${buttonStyle[style]} ${className} `}>
      {children}
    </Link>
  );
}

export default Button;
