import { NavLink, useLocation } from "react-router-dom";
import { adminNavItems, userNavItems } from "../utils/constants";
import { LogOut, Menu, User, X } from "lucide-react";
import { useState } from "react";

function NavBar() {
  const location = useLocation();
  const isAdmin = location?.pathname.split("/").at(1) === "admin";
  const navItems = isAdmin ? adminNavItems : userNavItems;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between px-5 md:px-40 bg-white shadow-lg mb-5">
      <section className="flex items-center gap-2">
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
      </section>

      <button className="lg:hidden " onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Links Desktop */}
      <nav className="hidden lg:flex">
        <ul className="flex gap-6 text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={`/${item.path}`}
                end={item.end}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold "
                    : "text-gray-700 hover:text-primary"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="hidden lg:flex">
        <ul className="flex gap-3 text-gray-700 cursor-pointer">
          <li className="hover:text-primary">
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <User size={25} />
            </NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink to="/login">
              <LogOut size={25} />
            </NavLink>
          </li>
        </ul>
      </nav>
      {isOpen ? <MobileMenu navItems={navItems} /> : ""}
    </div>
  );
}

export default NavBar;

function MobileMenu({ navItems }) {
  return (
    <div className="absolute bg-white w-full top-full left-0 flex flex-col py-5 px-8">
      <nav className="lg:hidden flex">
        <ul className="flex flex-col gap-6 text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={`/${item.path}`}
                end={item.end}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold "
                    : "text-gray-700 hover:text-primary"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="lg:hidden flex my-5 w-full">
        <ul className="flex gap-3 text-gray-700 cursor-pointer w-full">
          <li className="hover:text-primary flex flex-1 ">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive ? "text-primary flex " : "flex"
              }
            >
              <User size={25} /> Profile
            </NavLink>
          </li>
          <li className="hover:text-primary flex flex-1 border border-primary-light rounded p-2">
            <NavLink to="/login" className="flex gap-2">
              <LogOut size={25} /> Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
