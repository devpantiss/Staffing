import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// Define types for navigation links
interface NavLink {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Academics", path: "/academics" },
    { name: "Jobs Engine", path: "/job-search-engine"},
    { name: "Counselling", path: "/for-nano-contractors" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50 shadow-glow">
      {/* Desktop Header */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-extrabold flex items-center animate-pulse-logo">
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
            Skill
          </span>
          <span className="text-white">Net</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`relative py-2 text-lg font-medium transition-colors duration-300 ${
                isActive(link.path)
                  ? "text-purple-600"
                  : "text-gray-300 hover:text-purple-600 hover"
              }`}
              aria-current={isActive(link.path) ? "page" : undefined}
            >
              {link.name}
              {(isActive(link.path) || link.path === "#") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 animate-glow-underline"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="lg:hidden text-gray-300 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-hover"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-8 h-8"
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
      </div>

      {/* Mobile Navigation Links */}
      <nav
        className={`lg:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md z-100 p-6 transition-all duration-500 transform ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Purple Overlay */}
        <div className="absolute inset-0 purple-overlay z-0"></div>

        <div className="relative flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.path}
              className={`py-2 text-lg font-medium transition-all duration-300 animate-slide-in ${
                isActive(link.path)
                  ? "text-purple-600"
                  : "text-gray-300 hover:text-purple-600 hover"
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={isActive(link.path) ? "page" : undefined}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;