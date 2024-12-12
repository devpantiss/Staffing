import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <div className="lg:flex hidden container mx-auto items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-orange-600 text-xl font-bold flex items-center">
          <span>labour</span>
          <span className="text-purple-800">net</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-gray-800">
          <a href="#" className="text-orange-600 border-b-2 border-orange-600 pb-1">Home</a>
          <a href="#" className="hover:text-orange-600">For Businesses</a>
          <a href="#" className="hover:text-orange-600">For Nano-contractors</a>
          <a href="#" className="hover:text-orange-600">For Workers</a>
          <a href="#" className="hover:text-orange-600">For Learners</a>
          <a href="#" className="hover:text-orange-600">Our Expertise</a>
          <a href="#" className="hover:text-orange-600">Careers</a>
          <a href="#" className="hover:text-orange-600">About Us</a>
        </nav>
      </div>

      <div className="container lg:hidden flex mx-auto items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-orange-600 text-xl font-bold flex items-center">
          <span>labour</span>
          <span className="text-purple-800">net</span>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="block lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 bg-white w-full z-10 p-4 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-y-0 lg:flex lg:space-x-6 text-gray-800`}
        >
          <a
            href="#"
            className="block lg:inline text-orange-600 border-b-2 border-orange-600 pb-1 lg:pb-0"
          >
            Home
          </a>
          <a
            href="#"
            className="block lg:inline hover:text-orange-600 mt-2 lg:mt-0"
          >
            For Businesses
          </a>
          <a
            href="#"
            className="block lg:inline hover:text-orange-600 mt-2 lg:mt-0"
          >
            For Nano-contractors
          </a>
          <a
            href="#"
            className="block lg:inline hover:text-orange-600 mt-2 lg:mt-0"
          >
            For Workers
          </a>
          <a
            href="#"
            className="block lg:inline hover:text-orange-600 mt-2 lg:mt-0"
          >
            For Learners
          </a>
          <a
            href="#"
            className="block lg:inline hover:text-orange-600 mt-2 lg:mt-0"
          >
            Our Expertise
          </a>
          <a
            href="#"
            className="block lg:inline hover:text-orange-600 mt-2 lg:mt-0"
          >
            Careers
          </a>
          <a
            href="#"
            className="block lg:inline hover:text-orange-600 mt-2 lg:mt-0"
          >
            About Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;