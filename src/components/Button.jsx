import { Link } from "react-router-dom";

const buttonStyle = {
  main: "px-4 py-2 my-4 rounded-xl font-heading smooth-transition font-medium border h-fit cursor-pointer",
  light:
    "bg-white border-primary text-primary hover:bg-primary-light hover:text-light",
  gradient:
    "bg-gradient-red border-gradient-red  rounded-xl  text-light  hover:opacity-80 ",
};
function Button({
  children,
  style,
  type,
  to,
  className = "button",
  disabled,
  onClick,
}) {
  if (type === "submit") {
    return (
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`${buttonStyle.main} ${buttonStyle[style]} ${className} w-full`}
      >
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${buttonStyle.main} ${buttonStyle[style]} ${className} `}
      >
        {children}
      </Link>
    );
  }

  // لو مفيش to → Button عادي
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonStyle.main} ${buttonStyle[style]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
