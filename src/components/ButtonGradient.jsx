import { Link } from "react-router-dom";

function ButtonGradient({ children, to }) {
    return (
        <Link
            to={to}
            className="bg-gradient-red font-medium border border-gradient-red px-4 py-2 h-fit rounded-xl  text-light font-heading hover:opacity-80 smooth-transition"
        >
            {children}
        </Link>
    );
}

export default ButtonGradient;
