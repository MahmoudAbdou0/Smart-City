import { Link } from "react-router-dom";

function ButtonLight({ children, to }) {
    return (
        <Link
            to={to}
            className="bg-white border font-medium border-primary px-4 py-2 h-fit rounded-xl text-primary font-heading hover:bg-primary-light hover:text-light smooth-transition"
        >
            {children}
        </Link>
    );
}

export default ButtonLight;
