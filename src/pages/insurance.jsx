import { Link } from "react-router-dom";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

import insuranceImage from "../assets/images/insurance.jpeg";

function Insurance() {
  return (
    <div className="min-h-screen bg-[#07131F] text-white">

      <div className="relative h-[450px] overflow-hidden">
        <img
          src={insuranceImage}
          alt="Insurance"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07131F]/75" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-5">
              B&S GROUPS
            </p>

            <h1 className="text-5xl md:text-7xl font-black">
              Insurance
            </h1>

            <p className="mt-6 text-slate-300 text-lg max-w-2xl">
              Protection and peace of mind for you, your family and your business.
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
          Protect What Matters Most
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-8">
          B&S GROUPS helps customers explore insurance solutions designed
          to provide financial protection and security against unexpected
          situations.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-12">
          Our insurance assistance covers a range of protection needs for
          individuals, families and businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            "Life Insurance",
            "Health Insurance",
            "General Insurance",
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

export default Insurance;