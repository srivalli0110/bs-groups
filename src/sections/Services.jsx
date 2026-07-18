import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Service Images
import solarImage from "../assets/images/solar.jpeg";
import tensileImage from "../assets/images/tensile.jpeg";
import farmhouseImage from "../assets/images/farmhouse.jpeg";
import openPlotsImage from "../assets/images/openplots.jpeg";
import loansImage from "../assets/images/loans.jpeg";
import insuranceImage from "../assets/images/insurance.jpeg";

function Services() {
  const services = [
    {
      image: loansImage,
      title: "Loans",
      category: "Financial Solutions",
      link: "/services/loans",
      desc: "Personal, Business, Education and Home Loans with expert guidance and simple assistance.",
    },
    {
      image: solarImage,
      title: "Solar Panels",
      category: "Renewable Energy",
      link: "/services/solar",
      desc: "Smart and sustainable solar solutions for residential, commercial and industrial projects.",
    },
    {
      image: insuranceImage,
      title: "Insurance",
      category: "Protection & Security",
      link: "/services/insurance",
      desc: "Life, Health and General Insurance solutions to help protect you, your family and your business.",
    },
    {
      image: farmhouseImage,
      title: "Farm House Rentals",
      category: "Lifestyle & Leisure",
      link: "/services/farmhouse",
      desc: "Comfortable and peaceful farmhouses for vacations, family gatherings, celebrations and events.",
    },
    {
      image: openPlotsImage,
      title: "Open Plots",
      category: "Real Estate",
      link: "/services/open-plots",
      desc: "Explore residential and commercial open plots in selected locations for your future investment.",
    },
    {
      image: tensileImage,
      title: "Tensile Structures",
      category: "Infrastructure",
      link: "/services/tensile",
      desc: "Modern tensile roofing and architectural solutions combining durability, functionality and style.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-[#07131F] text-white overflow-hidden"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block uppercase tracking-[6px] text-cyan-400 font-semibold text-sm md:text-base">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>

          <p className="mt-8 text-slate-300 text-base md:text-lg leading-8 max-w-3xl mx-auto">
            B&S GROUPS provides complete financial, real estate, insurance,
            infrastructure and renewable energy solutions with transparency,
            professionalism and customer satisfaction.
          </p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group"
            >
              <Link
                to={service.link}
                className="block h-full rounded-3xl overflow-hidden bg-[#0B1B2B] border border-white/10 hover:border-cyan-400/60 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
              >

                {/* ================= IMAGE ================= */}

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07131F] via-[#07131F]/20 to-transparent opacity-90" />

                  {/* Top Glow */}
                  <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Arrow Circle */}
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:rotate-[-45deg] transition-all duration-300">
                    <FaArrowRight />
                  </div>

                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 leading-7 min-h-[84px]">
                    {service.desc}
                  </p>

                  {/* Learn More */}

                  <div className="mt-7 flex items-center justify-between">

                    <span className="text-cyan-400 font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                      Learn More
                      <FaArrowRight className="text-sm" />
                    </span>

                    <span className="text-slate-600 text-sm font-medium">
                      0{index + 1}
                    </span>

                  </div>

                  {/* Bottom Line */}

                  <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700" />

                </div>

              </Link>
            </motion.div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 mb-6">
            Looking for the right solution for your needs?
          </p>

          <a
            href="/#apply"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Get Started
            <FaArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;