// components/Navbar.tsx
import React from "react";
import logoheader from '../assets/footer-image.svg';

const Navbar = () => {
  return (
    <nav className="relative z-50 p-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={logoheader} 
            alt="Logo" 
            className="h-16 w-auto object-contain" 
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-white">
          {["about", "services", "portfolio", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-blue-300 transition-all duration-300 relative group capitalize"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
