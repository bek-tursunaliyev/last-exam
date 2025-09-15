import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger and close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-[#E0E6E3]">
      <div className="container mx-auto flex justify-between items-center py-2.5 px-4 relative">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 items-center font-semibold text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
        </ul>

        {/* Desktop button */}
        <Link
          to="/recipes"
          className="hidden md:inline-block text-white px-4 py-2 bg-[#163A34] rounded-[10px]"
        >
          Browse recipes
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#163A34] p-1.25 rounded-[2px] bg-[#E0E6E3]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg mt-2 w-55 p-4 md:hidden">
            <ul className="flex flex-col gap-4 font-medium text-[#163A34]">
              <li className="text-[#163A34]">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipes" onClick={() => setIsOpen(false)}>
                  Recipes
                </NavLink>
              </li>
            </ul>
            <Link
              to="/recipes"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center text-white px-4 py-2 bg-[#163A34] rounded-[10px]"
            >
              Browse recipes
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
