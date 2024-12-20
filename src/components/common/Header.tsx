import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "For Businesses", path: "/for-businesses" },
    { name: "For Nano-contractors", path: "/for-nano-contractors" },
    { name: "For Workers", path: "/for-workers" },
    { name: "For Learners", path: "#" },
    { name: "Our Expertise", path: "#" },
    { name: "Careers", path: "#" },
    { name: "About Us", path: "#" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="lg:flex hidden container mx-auto items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-orange-600 text-xl font-bold flex items-center">
          <span>labour</span>
          <span className="text-purple-800">net</span>
        </div>

        {/* Navigation Links */}
        {/* <nav className="flex space-x-6 text-gray-800">
          <a
            href="/"
            className="text-orange-600 border-b-2 border-orange-600 pb-1"
          >
            Home
          </a>
          <a href="/for-businesses" className="hover:text-orange-600">
            For Businesses
          </a>
          <a href="/for-nano-contractors" className="hover:text-orange-600">
            For Nano-contractors
          </a>
          <a href="#" className="hover:text-orange-600">
            For Workers
          </a>
          <a href="#" className="hover:text-orange-600">
            For Learners
          </a>
          <a href="#" className="hover:text-orange-600">
            Our Expertise
          </a>
          <a href="#" className="hover:text-orange-600">
            Careers
          </a>
          <a href="#" className="hover:text-orange-600">
            About Us
          </a>
        </nav> */}

        {/* nav */}
        <nav>
          {navLinks.map((tab) => (
            <a
              key={tab.name}
              href={tab.path}
              className={`pb-1 mx-2 ${
                isActive(tab.path)
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "hover:text-orange-600"
              }`}
            >
              {tab.name}
            </a>
          ))}
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
          {navLinks.map((tab) => (
            <a
              key={tab.name}
              href={tab.path}
              className={`block lg:inline pb-1 mt-2 lg:mt-0 ${
                isActive(tab.path)
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "hover:text-orange-600"
              }`}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
