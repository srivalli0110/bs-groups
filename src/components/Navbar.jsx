import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07131F]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)] border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-24 flex items-center justify-between">

          {/* LOGO SECTION */}
          <a href="#hero" className="flex items-center gap-4">

            <img
              src={logo}
              alt="B&S GROUP"
              className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-500/30"
            />

            <div>
              <h1 className="text-3xl font-extrabold text-white">
                B<span className="text-cyan-400">&</span>S
              </h1>

              <p className="text-sm text-slate-300">
                Believe and services
              </p>
            </div>

          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">

            {[
              ["Home", "#hero"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="relative text-slate-200 font-medium hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {name}
              </a>
            ))}

            <a
              href="#apply"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition duration-300"
            >
              Apply Now
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#07131F]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6">

          <div className="flex flex-col gap-6">

            <a href="#hero" onClick={closeMenu} className="text-slate-200 hover:text-cyan-400">
              Home
            </a>

            <a href="#about" onClick={closeMenu} className="text-slate-200 hover:text-cyan-400">
              About
            </a>

            <a href="#services" onClick={closeMenu} className="text-slate-200 hover:text-cyan-400">
              Services
            </a>

            <a href="#contact" onClick={closeMenu} className="text-slate-200 hover:text-cyan-400">
              Contact
            </a>

            <a
              href="#apply"
              onClick={closeMenu}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold text-white"
            >
              Apply Now
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;