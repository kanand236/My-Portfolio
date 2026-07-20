const Navbar = () => {
  return (
    <nav className="fixed w-full bg-slate-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Anand.dev
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a href="#about" className="hover:text-sky-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-sky-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-sky-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-sky-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;