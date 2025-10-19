import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="hidden md:flex items-center space-x-10 font-poppins relative">
      <Link
        to="/"
        className="relative text-white text-lg font-bold tracking-wide transition-all duration-300 hover:text-red-600"
      >
        Home
      </Link>

      {/* Our Product with Dropdown */}
      <div              
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className="relative text-white text-lg font-bold tracking-wide transition-all duration-300 hover:text-red-600">
          Our Product
        </button>

        <div
          className={`absolute mt-2 w-48 bg-white rounded-md shadow-lg z-50 transition-all duration-200 ${
            isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Link
            to="/health-care"
            className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            Health Care
          </Link>
          <Link
            to="/home-automation"
            className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600"
          >
            Home Automation
          </Link>
        </div>
      </div>

      <Link
        to="/blog"
        className="relative text-white text-lg font-bold tracking-wide transition-all duration-300 hover:text-red-600"
      >
        Blogs
      </Link>

      <Link
        to="/team"
        className="relative text-white text-lg font-bold tracking-wide transition-all duration-300 hover:text-red-600"
      >
        Our Team
      </Link>
      
      <Link
        to="/demo"
        className="relative text-white text-lg font-bold tracking-wide transition-all duration-300 hover:text-red-600"
      >
        Demo
      </Link>
      <Link
        to="/contact"
        className="relative text-white text-lg font-bold tracking-wide transition-all duration-300 hover:text-red-600"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavbarLinks;
