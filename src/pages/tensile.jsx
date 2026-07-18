import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

import tensileImage from "../assets/images/tensile.jpeg";

function Tensile() {
  const features = [
    "Tensile Roofing",
    "Parking Structures",
    "Architectural Solutions",
    "Custom Design Solutions",
  ];

  return (
    <div className="min-h-screen bg-[#07131F] text-white">

      {/* Hero Section */}
      <section className="relative min-h-[550px] flex items-center overflow-hidden">

        <img
          src={tensileImage}
          alt="Tensile Structures"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07131F]/80" />

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
            Tensile Structures
          </h1>

          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-8 max-w-2xl">
            Modern and durable tensile roofing solutions designed
            for functional and attractive spaces.
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
                Modern Infrastructure
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-8">
                Modern
                <span className="text-cyan-400"> Tensile Solutions</span>
              </h2>

              <p className="text-slate-300 text-lg leading-8 mb-6">
                B&S GROUPS provides modern tensile roofing and
                architectural solutions designed to combine functionality,
                durability and attractive design.
              </p>

              <p className="text-slate-300 text-lg leading-8">
                Tensile structures can be used for residential,
                commercial and architectural applications, creating
                practical covered spaces with a modern appearance.
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
                    Practical and modern structural solutions
                    designed for different applications.
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

export default Tensile;