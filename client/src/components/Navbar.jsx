import  { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 text-gray-900 shadow-lg">
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-6 border-b border-gray-800">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <Link to="/" className="text-gray-700 hover:text-gray-900 transition font-serif">
            LOGO
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <ul
          className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg mt-4 lg:mt-0 absolute bg-gray-50 w-full top-12 left-0 p-5 z-50 lg:p-0 lg:w-auto lg:bg-transparent lg:static ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-blue-800 transition font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-800 transition font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-blue-800 transition font-medium"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-blue-800 transition font-medium"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-800 transition font-medium"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="py-2 px-4 rounded font-medium  hover:bg-gray-700 hover:text-gray-50 border-2 border-gray-700 transition"
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;