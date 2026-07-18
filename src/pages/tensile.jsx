import { Link } from "react-router-dom";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

import tensileImage from "../assets/images/tensile.jpeg";

function Tensile() {
  return (
    <div className="min-h-screen bg-[#07131F] text-white">

      <div className="relative h-[450px] overflow-hidden">
        <img
          src={tensileImage}
          alt="Tensile Structures"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07131F]/70" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-5">
              B&S GROUPS
            </p>

            <h1 className="text-5xl md:text-7xl font-black">
              Tensile Structures
            </h1>

            <p className="mt-6 text-slate-300 text-lg max-w-2xl">
              Modern and durable tensile roofing solutions for functional
              and attractive spaces.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-12"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Modern Tensile Solutions
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-8">
          B&S GROUPS provides modern tensile roofing and architectural
          solutions designed to combine functionality, durability and
          attractive design.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-12">
          Tensile structures can be used for a variety of residential,
          commercial and architectural applications, providing practical
          covered spaces with a modern appearance.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            "Tensile Roofing",
            "Parking Structures",
            "Architectural Solutions",
          ].map((item) => (
            <div
              key={item}
              className="p-6 rounded-2xl bg-[#0B1B2B] border border-slate-700 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>

        <a
          href="tel:+919999999999"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-105 transition"
        >
          <FaPhoneAlt />
          Contact Us
        </a>

      </div>
    </div>
  );
}

export default Tensile;