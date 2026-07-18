import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

import farmhouseImage from "../assets/images/farmhouse.jpeg";

function Farmhouse() {
  const features = [
    "Family Gatherings",
    "Weekend Vacations",
    "Celebrations",
    "Corporate Events",
  ];

  return (
    <div className="min-h-screen bg-[#07131F] text-white">

      {/* Hero Section */}
      <section className="relative min-h-[550px] flex items-center overflow-hidden">

        <img
          src={farmhouseImage}
          alt="Farm House Rentals"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07131F]/75" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-10"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold mb-5">
            B&S GROUPS
          </p>

          <h1 className="text-5xl md:text-7xl font-black max-w-4xl">
            Farm House Rentals
          </h1>

          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-8 max-w-2xl">
            Comfortable and peaceful spaces for vacations, celebrations
            and memorable gatherings.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>

              <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                Relax & Reconnect
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-8">
                Your Perfect
                <span className="text-cyan-400"> Getaway</span>
              </h2>

              <p className="text-slate-300 text-lg leading-8 mb-6">
                B&S GROUPS offers farmhouse rental options for people
                looking for a peaceful environment away from the busy
                city.
              </p>

              <p className="text-slate-300 text-lg leading-8">
                Whether you are planning a family gathering, weekend
                vacation, celebration or corporate event, our spaces
                are designed to create a comfortable and memorable
                experience.
              </p>

            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="group p-7 rounded-2xl bg-[#0B1B2B] border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                >

                  <FaCheckCircle className="text-cyan-400 text-2xl mb-5 group-hover:scale-110 transition" />

                  <h3 className="text-xl font-semibold">
                    {feature}
                  </h3>

                  <p className="text-slate-400 mt-3 leading-6">
                    Enjoy a comfortable space for your special
                    moments and gatherings.
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Farmhouse;