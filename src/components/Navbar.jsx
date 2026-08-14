import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/95 backdrop-blur-md text-white z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-sky-400">
          Anand.dev
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-sky-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-sky-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-sky-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-slate-800 border-t border-slate-700">

          <ul className="flex flex-col text-center py-4 space-y-5">

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      )}

    </nav>
  );
};

export default Navbar;