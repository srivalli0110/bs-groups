import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaWhatsapp,
  FaUmbrella,
  FaCar,
  FaDraftingCompass,
} from "react-icons/fa";

import tensileImage from "../assets/images/tensile.jpeg";

function Tensile() {
  const features = [
    {
      icon: <FaUmbrella />,
      title: "Tensile Roofing",
      desc: "Modern roofing solutions designed to provide practical covered spaces with an attractive appearance.",
    },
    {
      icon: <FaCar />,
      title: "Parking Structures",
      desc: "Durable tensile structures suitable for creating comfortable and protected parking areas.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Architectural Solutions",
      desc: "Contemporary tensile designs that combine functionality, durability and modern architectural appeal.",
    },
  ];

  const handleWhatsApp = () => {
    const message = `Hello B&S GROUPS,

I am interested in your Tensile Structures.

Please provide me with more information.

Thank you.`;

    window.open(
      `https://wa.me/919848378055?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#07131F] text-white">

      {/* HERO SECTION */}
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
            Modern and durable tensile roofing solutions for functional
            and attractive spaces.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-green-500 hover:bg-green-600 font-bold transition hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              Enquire on WhatsApp
            </button>

            <a
              href="tel:+919848378055"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#07131F] font-bold transition"
            >
              <FaPhoneAlt />
              Call Us
            </a>

          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                Our Tensile Services
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-8">
                Modern
                <span className="text-cyan-400"> Tensile Solutions</span>
              </h2>

              <p className="text-slate-300 text-lg leading-8 mb-6">
                B&S GROUPS provides modern tensile roofing and architectural
                solutions designed to combine functionality, durability and
                attractive design.
              </p>

              <p className="text-slate-300 text-lg leading-8">
                Tensile structures can be used for a variety of residential,
                commercial and architectural applications, providing practical
                covered spaces with a modern appearance.
              </p>

            </div>

            {/* RIGHT */}
            <div className="space-y-5">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-7 rounded-2xl bg-[#0B1B2B] border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                >

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
                      {feature.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {feature.title}
                      </h3>

                      <p className="text-slate-400 mt-3 leading-6">
                        {feature.desc}
                      </p>
                    </div>

                  </div>

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