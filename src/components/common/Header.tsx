import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
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
    </header>
  );
};

export default Header;