import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const dispatch = useDispatch();
  const onlineStatus = useOnlineStatus();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://file.aiquickdraw.com/imgcompressed/img/compressed_8be4f67d7f11642c6c18678310a7c569.webp"
          alt="logo"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-2xl font-bold text-white ml-2">Bite Bliss</span>
      </div>

      {/* Search Input */}
      <div className="flex items-center mt-4 lg:mt-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for food..."
            className="px-4 py-2 rounded-full w-64"
            onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
          />
          <BiSearch className="absolute right-2 top-2 text-xl text-gray-500" />
        </div>

        {/* Online Status */}
        <span
          className={`text-sm ml-4 ${
            onlineStatus ? "text-green-500" : "text-red-500"
          }`}
        >
          {onlineStatus ? "Online 🟢" : "Offline 🔴"}
        </span>

        {/* Menu Button (Mobile) */}
        <button
          className="lg:hidden ml-4 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`lg:flex items-center ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-4 lg:space-y-0 mt-4 lg:mt-0">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
