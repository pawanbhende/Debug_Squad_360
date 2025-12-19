import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black/70 text-white px-6 py-4 fixed top-0 left-0 z-20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Monastery360
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
          <Link to="/signup" className="hover:text-yellow-400">Signup</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col items-center">
          <Link to="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/travel-tourism" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
          </Link>
          <Link to="/hotels" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
          </Link>
          <Link to="/login" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/signup" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}