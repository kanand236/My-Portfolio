import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/95 backdrop-blur-md text-white z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.jpg"
              alt="AK Logo"
              className="w-20 h-20 object-contain"
            />

            <span className="text-xl sm:text-2xl font-bold tracking-wide">
              <span className="text-sky-400">Anand</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              Work
            </a>

            <a
              href="#experience"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              Experience
            </a>

            <a
              href="#why-me"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              Why Me
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-sky-400 transition"
            >
              Contact
            </a>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className="bg-sky-500 hover:bg-sky-600 px-5 py-2.5 rounded-lg font-semibold transition"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-200 hover:text-sky-400 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-800 py-5">

            <div className="flex flex-col gap-4">

              <a
                href="#home"
                onClick={closeMenu}
                className="text-gray-300 hover:text-sky-400 transition py-2"
              >
                Home
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="text-gray-300 hover:text-sky-400 transition py-2"
              >
                Services
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="text-gray-300 hover:text-sky-400 transition py-2"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="text-gray-300 hover:text-sky-400 transition py-2"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="text-gray-300 hover:text-sky-400 transition py-2"
              >
                Work
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="text-gray-300 hover:text-sky-400 transition py-2"
              >
                Experience
              </a>

              <a
                href="#why-me"
                onClick={closeMenu}
                className="text-gray-300 hover:text-sky-400 transition py-2"
              >
                Why Me
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-gray-300 hover:text-sky-400 transition py-2"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="bg-sky-500 hover:bg-sky-600 text-center px-5 py-3 rounded-lg font-semibold transition mt-2"
              >
                Hire Me
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;