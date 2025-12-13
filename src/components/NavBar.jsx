import { Link, NavLink, useLocation } from "react-router-dom";
import { adminNavItems, userNavItems } from "../utils/constants";
import { Bell, LogOut, Menu, User, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const location = useLocation();
  const isAdmin = location?.pathname.split("/").at(1) === "admin";
  const navItems = isAdmin ? adminNavItems : userNavItems;

  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuth();

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-20">
      <div className=" bg-white shadow-md shadow-black/10 mb-5 py-2 relative z-30">
        <div className="container relative flex items-center justify-between ">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
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

          <div className="lg:hidden flex items-center gap-4 text-gray-700">
            <NavLink
              to="notifications"
              className={({ isActive }) =>
                `flex gap-2 items-center smooth-transition hover:scale-110 ${isActive ? "text-primary" : ""
                }`
              }
            >
              <Bell size={20} />
            </NavLink>

            {!isAdmin && (
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  `flex gap-2 items-center smooth-transition hover:scale-110 ${isActive ? "text-primary" : ""
                  }`
                }
              >
                <User size={20} />
              </NavLink>
            )}
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
          <nav className="hidden lg:flex">
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
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-4 text-gray-700 cursor-pointer">
              <li className="hover:text-primary smooth-transition hover:scale-110">
                <NavLink
                  to="notifications"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-primary" : ""}`
                  }
                >
                  <Bell size={20} />
                </NavLink>
              </li>
              {!isAdmin && (
                <li className="hover:text-primary smooth-transition hover:scale-110">
                  <NavLink
                    to="profile"
                    className={({ isActive }) =>
                      ` ${isActive ? "text-primary" : ""}`
                    }
                  >
                    <User size={20} />
                  </NavLink>
                </li>
              )}
              <li className="hover:text-primary smooth-transition hover:scale-110">
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
        ref={menuRef}
        id="mobile-menu"
        className={`absolute left-0 top-full w-full z-10 
    ${isOpen
            ? "animate-slideDown opacity-100 pointer-events-auto"
            : "animate-slideUp opacity-0 pointer-events-none"
          }`}
        aria-hidden={!isOpen}
      >
        <MobileMenu navItems={navItems} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default NavBar;

function MobileMenu({ navItems, setIsOpen }) {
  return (
    <div className="shadow-md shadow-black/10 rounded-b-xl bg-white w-[80%] mx-auto top-full flex flex-col py-5 px-5 lg:hidden">
      <nav className="lg:hidden block text-gray-700">
        <ul className="flex flex-col w-full gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={`/${item.path}`}
              end={item.end}
              onClick={() => setIsOpen(false)}
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
