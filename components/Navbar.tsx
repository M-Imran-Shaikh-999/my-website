// export default Navbar;
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md"; // Shopping Cart Icon
import { FaRegCircleUser } from "react-icons/fa6"; // User Avatar Icon
import { FaSearch } from "react-icons/fa"; // Search Icon (Standard)

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full h-[52px] flex items-center justify-between px-4 bg-white shadow-md">
        {/* Left: Custom Search Icon */}
        <div className="relative flex items-center">
          <div
            className="w-[20px] h-[20px] bg-[#2A254B] flex items-center justify-center rounded-full p-2"
          >
            <FaSearch className="text-white" />
          </div>
        </div>

        {/* Center: Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-lg font-bold">Avion</h1>
        </div>

        {/* Right: Icons (Cart & User Avatar) */}
        <div className="flex items-center gap-4">
          <MdOutlineShoppingCart className="text-gray-800 w-5 h-5" />
          <div className="rounded-full border-2 border-gray-800 p-1">
            <FaRegCircleUser className="text-gray-800 w-4 h-4" />
          </div>
        </div>
      </nav>

      {/* Main Links */}
      <div className="w-full flex justify-center mt-6 gap-4 text-center">
        <a href="#" className="link-item">Plant pots</a>
        <a href="#" className="link-item">Ceramics</a>
        <a href="#" className="link-item">Tables</a>
        <a href="#" className="link-item">Chairs</a>
        <a href="#" className="link-item">Crockery</a>
        <a href="#" className="link-item">Tableware</a>
        <a href="#" className="link-item">Cutlery</a>
      </div>

      {/* Divider */}
      <div className="w-full mt-4" style={{ borderTop: "1px solid #E0E0E0" }} />
    </div>
  );
};

export default Navbar;
