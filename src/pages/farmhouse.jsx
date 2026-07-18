import { Link } from "react-router-dom";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

import farmhouseImage from "../assets/images/farmhouse.jpeg";

function Farmhouse() {
  return (
    <div className="min-h-screen bg-[#07131F] text-white">

      <div className="relative h-[450px] overflow-hidden">
        <img
          src={farmhouseImage}
          alt="Farm House Rentals"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07131F]/65" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-5">
              B&S GROUPS
            </p>

            <h1 className="text-5xl md:text-7xl font-black">
              Farm House Rentals
            </h1>

            <p className="mt-6 text-slate-300 text-lg max-w-2xl">
              Comfortable and peaceful spaces for vacations, celebrations
              and memorable gatherings.
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
          Your Perfect Getaway
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-8">
          B&S GROUPS offers premium farmhouse rental options for people
          looking for a relaxing environment away from the busy city.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-12">
          Whether you are planning a family gathering, weekend vacation,
          celebration or corporate event, our farmhouse spaces are designed
          to make your experience comfortable and memorable.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            "Family Gatherings",
            "Weekend Vacations",
            "Corporate Events",
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
          Enquire Now
        </a>

      </div>
    </div>
  );
}

export default Farmhouse;