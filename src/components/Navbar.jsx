import { useState } from "react";
import { Link } from "react-scroll"; // Use react-scroll instead of react-router-dom
import { FaBars } from "react-icons/fa";
import Group from "../assets/Images/Group.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 md:shadow-md bg-[#EEF2FF]  md:bg-white relative">
      {/* Left Side - Mobile Menu Button */}
      <button className="md:hidden text-blue-600" onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="text-2xl" />
      </button>

      {/* Center - Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex items-center space-x-2">
        <img src={Group} alt="Company icon" className="md:ml-8 ml-0 mr-5 md:mr-0" />
      </div>

      {/* Right Side - Contact Button */}
      <Link to="contact" smooth={true} duration={800} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#EEF2FF] flex flex-col items-center justify-center space-y-6 shadow-lg md:hidden">
          <Link to="hero" smooth={true} duration={800} className="text-lg text-gray-700 cursor-pointer" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="process" smooth={true} duration={800} className="text-lg text-gray-700 cursor-pointer" onClick={() => setIsOpen(false)}>
            Process
          </Link>
          <Link to="project" smooth={true} duration={800} className="text-lg text-gray-700 cursor-pointer" onClick={() => setIsOpen(false)}>
            Project
          </Link>
          <Link to="contact" smooth={true} duration={800} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 cursor-pointer" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
