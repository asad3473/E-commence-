import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/store" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="p-4 bg-white textColor shadow-md">
      <div className="mx-6 flex justify-between items-center relative">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden textColor focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Logo */}
        <div className="text-xl font-bold">
          LARQ
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg font-bold flex-1 justify-center">
          {
            nav.map((item) => (
              <Link
                key={item}
                to={item.link}
                className="textColor"
              >
                {item.name}
              </Link>
            ))}
        </div>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          {[{ icon: <BsCartPlus size={24} />, link: '/', label: 'AddCart' },
          { icon: <FaRegUser size={22} />, link: '/login', label: 'Login' }].map((item, index) => (
            <div key={index} className="relative group">
              <Link to={item.link} className="textColor transition">
                {item.icon}
              </Link>
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-35px] bgColor text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-[40%] bg-white shadow-lg p-6 flex flex-col items-center pt-24 gap-16 text-lg font-bold z-50 transition-transform transform translate-x-0">
          <button
            className="absolute top-4 right-4 textColor focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
          {
            nav.map((item) => (
              <Link key={item} to={item.link} className="block hover:text-blue-400">
                {item.name}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
