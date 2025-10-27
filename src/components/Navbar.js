import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-4 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">MyApp</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/about" className="hover:text-blue-400">About</Link>
            <Link to="/gallery" className="hover:text-blue-400">Gallery</Link>
            <Link to="/team" className="hover:text-blue-400">Team</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            <Link to="/login" className="hover:text-blue-400">Login</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 space-y-2 flex flex-col items-start px-2 pb-4 bg-gray-900">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 w-full rounded hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 w-full rounded hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 w-full rounded hover:bg-gray-800"
            >
              Gallery
            </Link>
            <Link
              to="/team"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 w-full rounded hover:bg-gray-800"
            >
              Team
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 w-full rounded hover:bg-gray-800"
            >
              Contact
            </Link>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 w-full rounded hover:bg-gray-800"
            >
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-6"></div>
    </>
  );
}
