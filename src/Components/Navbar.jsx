import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaUser, FaUserPlus } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-[#ffffff] text-[#007aff] shadow-md">
      <div className="mx-[30px] flex justify-between items-center">
        {/* Left Side - Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-[#007aff] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Headings for larger screens */}
        <div className="hidden md:flex space-x-6 text-lg font-bold">
          <Link
            to="/services"
            className="relative after:block after:h-[2px] after:w-full after:bg-[#007aff] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Services
          </Link>
          <Link
            to="/shop"
            className="relative after:block after:h-[2px] after:w-full after:bg-[#007aff] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="relative after:block after:h-[2px] after:w-full after:bg-[#007aff] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Center - Logo */}
        <div className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
          <span className="text-lg font-bold">LARQ</span>
        </div>

        {/* Right Side - Login & Sign Up Icons with Tooltips */}
        <div className="flex space-x-4 items-center">
          <div className="relative group">
            <Link
              to="/login"
              className="text-[#007aff] hover:text-blue-500 transition text-[28px]"
            >
              <FaUser />
            </Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] bg-[#007aff] text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Login
            </span>
          </div>

          <div className="relative group">
            <Link
              to="/signup"
              className="text-[#007aff] hover:text-blue-500 transition text-[30px]"
            >
              <FaUserPlus/>
            </Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-35px] bg-[#007aff] text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              SignUp
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Headings with Links) */}
      {isOpen && (
        <div className="md:hidden mt-6 space-y-6 text-center text-lg font-bold">
          <Link to="/services" className="block hover:text-blue-400">
            Services
          </Link>
          <Link to="/shop" className="block hover:text-blue-400">
            Shop
          </Link>
          <Link to="/contact" className="block hover:text-blue-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;