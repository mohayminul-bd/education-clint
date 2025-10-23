import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/New-folder/education2.jpeg";
import UseAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { PiUserCircleFill } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../contexts/auth/AuthContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(AuthContext);
  const { user, signOutUser } = UseAuth();

  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    signOutUser()
      .then(() => toast.success("You’re now logged out. See you again soon!"))
      .catch((error) => toast.error(error.message));
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinkClass = ({ isActive }) =>
    `transition-all duration-200 ${
      isActive
        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
        : "text-gray-500 hover:text-blue-500"
    }`;

  const navItems = (
    <>
      <li>
        <NavLink onClick={scrollToTop} to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={scrollToTop} to="/courses" className={navLinkClass}>
          Courses
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/add-course" className={navLinkClass}>
              Add Course
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage-courses" className={navLinkClass}>
              Manage Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-courses" className={navLinkClass}>
              Enrolled Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
          <li className="sm:hidden">
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works" className={navLinkClass}>
              How it Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
          <li className="sm:hidden">
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
          </li>
          <li className="sm:hidden">
            <NavLink to="/register" className={navLinkClass}>
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 py-3 ${
        isSticky
          ? "bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-gradient-to-r from-white via-gray-50 to-white"
      }`}
    >
      <div className="navbar container mx-auto flex justify-between items-center px-3 sm:px-6">
        {/* Left side */}
        <div className="flex items-center">
          {/* Hamburger button */}
          <button
            className="lg:hidden text-gray-600 mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <Link onClick={scrollToTop} to="/">
            <img
              className="w-28 sm:w-36 rounded-2xl"
              src={logoImg}
              alt="Education Logo"
            />
          </Link>
        </div>

        {/* Center for Desktop */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-10 text-base font-medium">{navItems}</ul>
        </div>

        {/* Right side (Login/Logout/User/DarkMode) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn border-none shadow text-black shadow-gray-200 btn-outline btn-sm p-2 mr-2"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          {user ? (
            <>
              <div className="relative hidden sm:block">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    data-tooltip-id="user-tooltip"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <PiUserCircleFill
                    size={40}
                    data-tooltip-id="user-tooltip"
                    className="cursor-pointer"
                  />
                )}
                <Tooltip id="user-tooltip" place="bottom">
                  {user?.displayName}
                </Tooltip>
              </div>
              <button
                onClick={handleLogout}
                className="hidden sm:block text-white bg-blue-600 hover:bg-blue-700 rounded-full px-5 py-2 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden sm:block text-base rounded-full border-0 font-medium py-2 px-4"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hidden sm:block text-base bg-blue-600 text-white rounded-full py-2 px-6 hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Fullscreen Blur Menu for Mobile */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-start pt-24 z-40"
        >
          <ul className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-lg text-center space-y-4 text-gray-700 font-medium text-lg">
            {navItems}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
