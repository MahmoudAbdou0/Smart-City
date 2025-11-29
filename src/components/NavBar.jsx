import { Link, NavLink, useLocation } from "react-router-dom";
import { adminNavItems, userNavItems } from "../utils/constants";
import { LogOut, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const location = useLocation();
  const isAdmin = location?.pathname.split("/").at(1) === "admin";
  const navItems = isAdmin ? adminNavItems : userNavItems;

  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuth();

  return (
    <div className="relative z-20">
      <div className=" bg-white shadow-md shadow-black/10 mb-5 py-2 relative z-30">
        <div className="container relative flex items-center justify-between ">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/src/assets/logo.jpeg"
              alt="Website Logo"
              className="w-15 md:w-20"
            />
            <div>
              <p className="text-primary font-semibold text-lg md:text-xl">
                Smart City
              </p>
              <p className="max-md:hidden text-sm text-gray-500">
                Pharaonic Heritage
              </p>
            </div>
          </Link>

          <div className="md:hidden flex items-center gap-4 text-gray-700">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `flex gap-2 items-center smooth-transition hover:scale-110 ${isActive ? "text-primary" : ""
                }`
              }
            >
              <User size={20} />
            </NavLink>

            <NavLink
              to="/login"
              className="smooth-transition hover:scale-110 "
              onClick={logout}
            >
              <LogOut size={20} />
            </NavLink>

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="smooth-transition hover:scale-110 cursor-pointer" />
              ) : (
                <Menu className="smooth-transition hover:scale-110 cursor-pointer" />
              )}
            </button>
          </div>

          {/* Links Desktop */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-gray-700">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={`/${item.path}`}
                    end={item.end}
                    className={({ isActive }) =>
                      `smooth-transition ${isActive
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-3 text-gray-700 cursor-pointer">
              <li className="hover:text-primary">
                <NavLink
                  to="profile"
                  className={({ isActive }) =>
                    `smooth-transition ${isActive ? "text-primary" : ""}`
                  }
                >
                  <User size={20} />
                </NavLink>
              </li>
              <li className="hover:text-primary">
                <NavLink to="/login" onClick={logout}>
                  <LogOut size={20} />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* ✅ Mobile Menu تحت النافبار باستخدام z-index */}
      <div
        className={`absolute left-0 top-full w-full z-10 
    ${isOpen
            ? "animate-slideDown opacity-100 pointer-events-auto"
            : "animate-slideUp opacity-0 pointer-events-none"
          }`}
        aria-hidden={!isOpen}
      >
        <MobileMenu navItems={navItems} />
      </div>
    </div>
  );
}

export default NavBar;

function MobileMenu({ navItems }) {
  return (
    <div className="shadow-md shadow-black/10 rounded-b-xl bg-white w-[90%] mx-auto top-full flex flex-col py-5 px-5 md:hidden">
      <nav className="md:hidden block text-gray-700">
        <ul className="flex flex-col w-full gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={`/${item.path}`}
              end={item.end}
              className={({ isActive }) =>
                ` block px-4 py-2 rounded-xl smooth-transition ${isActive
                  ? "bg-primary-light/25 text-primary font-semibold"
                  : "text-gray-700 hover:text-primary hover:bg-primary-light/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}
