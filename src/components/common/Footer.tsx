import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Navigation Links */}
        <div>
          <h4 className="font-bold mb-4">Home</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">For Businesses</a></li>
            <li><a href="#" className="hover:underline">For Nano-contractors</a></li>
            <li><a href="#" className="hover:underline">For Workers</a></li>
            <li><a href="#" className="hover:underline">For Learners</a></li>
            <li><a href="#" className="hover:underline">Our Expertise</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4">Contact Info</h4>
          <p>24/1-4, 19th 'A' Main 9th Cross,<br />JP Nagar 2nd Phase,<br />Bengaluru – 560078, Karnataka, India</p>
          <p className="mt-4"><strong>Phone:</strong> 080 4450 4459 / 080 4450 4459</p>
          <p><strong>Email:</strong> contactus@labournet.in</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start md:items-center">
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-white hover:text-orange-600"><FaLinkedin size={24} /></a>
            <a href="#" className="text-white hover:text-orange-600"><FaFacebook size={24} /></a>
            <a href="#" className="text-white hover:text-orange-600"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-orange-600"><FaYoutube size={24} /></a>
          </div>
          <div className="text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        &copy; 2023 LabourNet, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
