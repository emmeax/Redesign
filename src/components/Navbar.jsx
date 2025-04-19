import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Group from "../assets/Images/Group.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav className="flex justify-between items-center p-4 md:shadow-md bg-[#EEF2FF] md:bg-white relative">
      {/* Mobile Menu Button */}
      <button className="md:hidden text-blue-600" onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="text-2xl" />
      </button>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex items-center space-x-2">
        <img src={Group} alt="Company icon" className="md:ml-8 ml-0 mr-5 md:mr-0" />
      </div>

      {/* Contact Button */}
      <Link
        to="contact"
        smooth={true}
        duration={800}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
      >
        Contact
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <Link to="hero" smooth={true} duration={800} className="text-gray-700 hover:text-blue-500 cursor-pointer">
          Home
        </Link>
        <Link to="process" smooth={true} duration={800} className="text-gray-700 hover:text-blue-500 cursor-pointer">
          Process
        </Link>
        <Link to="project" smooth={true} duration={800} className="text-gray-700 hover:text-blue-500 cursor-pointer">
          Project
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-3/6 h-screen py-10 bg-[#EEF2FF] flex flex-col items-start pl-6 space-y-6 shadow-lg md:hidden z-50 transition-all duration-300">
          {/* Close Icon */}
          <button className="absolute top-4 right-4 text-blue-600" onClick={() => setIsOpen(false)}>
            <FaTimes className="text-2xl" />
          </button>

          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="text-lg text-gray-700 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="process"
            smooth={true}
            duration={800}
            className="text-lg text-gray-700 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Process
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={800}
            className="text-lg text-gray-700 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Project
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
