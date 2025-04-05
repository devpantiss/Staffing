import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const quickLinks = [
    "Admissions",
    "Joint Placement Drive",
    "Alumni Portal",
    "Online Fee Payment",
    "Apply Certificate",
    "Academics",
    "Campus Life",
    "Placements",
  ];

  const socialIcons = [
    { icon: <FaLinkedin className="text-2xl" />, label: "LinkedIn", href: "#" },
    { icon: <FaFacebook className="text-2xl" />, label: "Facebook", href: "#" },
    { icon: <FaTwitter className="text-2xl" />, label: "Twitter", href: "#" },
    { icon: <FaYoutube className="text-2xl" />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-black text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-purple-700 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-purple-700 pb-2">
            Contact Info
          </h4>
          <address className="not-italic text-sm leading-relaxed text-gray-300">
            <strong>Pantiss Foundation</strong><br />
            E-102, 1st Floor, Crystal Plaza,<br />
            Hiranandani Link Road, Andheri (West),<br />
            Mumbai – 400053, Maharashtra, India
          </address>
          <p className="mt-4 text-sm">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+912212345678"
              className="hover:text-orange-500 transition-colors"
            >
              +91-22-1234-5678
            </a>
          </p>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@pantiss.org"
              className="hover:text-orange-500 transition-colors"
            >
              info@pantiss.org
            </a>
          </p>
        </div>

        {/* Social & Legal */}
        <div className="flex flex-col items-start md:items-center justify-between h-full">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-purple-700 pb-2">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-4">
              {socialIcons.map(({ icon, label, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className="text-white text-xl hover:text-orange-500 transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-400 space-x-2">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-purple-800 pt-4">
        &copy; {new Date().getFullYear()} Pantiss Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;