import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      number: "01",
      link: "/services/loans",
      desc: "Personal, Business, Education and Home Loans with quick approvals and expert guidance.",
    },
    {
      image: solarImage,
      title: "Solar Solutions",
      number: "02",
      link: "/services/solar",
      desc: "Smart solar solutions for residential, commercial and industrial projects.",
    },
    {
      image: insuranceImage,
      title: "Insurance",
      number: "03",
      link: "/services/insurance",
      desc: "Health, Life and General Insurance plans to protect your family and business.",
    },
    {
      image: farmhouseImage,
      title: "Farm House Rentals",
      number: "04",
      link: "/services/farmhouse",
      desc: "Premium farmhouses for vacations, family gatherings and corporate events.",
    },
    {
      image: openPlotsImage,
      title: "Open Plots",
      number: "05",
      link: "/services/open-plots",
      desc: "Explore residential and commercial plot opportunities in carefully selected locations.",
    },
    {
      image: tensileImage,
      title: "Tensile Structures",
      number: "06",
      link: "/services/tensile",
      desc: "Modern tensile roofing and architectural solutions designed for quality and durability.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-[#07131F] overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute -top-40 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[160px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <span className="inline-flex items-center gap-3 uppercase tracking-[5px] text-cyan-400 font-semibold text-sm">
            <span className="w-10 h-[1px] bg-cyan-400" />
            Our Services
            <span className="w-10 h-[1px] bg-cyan-400" />
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
            Everything You Need
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-3xl mx-auto">
            B&S GROUPS provides complete financial, real estate, insurance,
            infrastructure and renewable energy solutions with transparency,
            professionalism and customer satisfaction.
          </p>

        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >

              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-[#0B1B2B] border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-cyan-500/10">

                {/* Image */}
                <div className="relative h-64 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-[#07131F]/20 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-500" />

                  {/* Number */}
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <span className="text-cyan-300 font-bold">
                      {service.number}
                    </span>
                  </div>

                  {/* Bottom Label */}
                  <div className="absolute bottom-5 left-6">
                    <span className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-xs text-cyan-300 uppercase tracking-wider">
                      B&S GROUPS
                    </span>
                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-7 min-h-[84px]">
                    {service.desc}
                  </p>

                  {/* Link */}
                  <Link
                    to={service.link}
                    className="mt-7 inline-flex items-center gap-3 text-cyan-400 font-semibold group/link"
                  >
                    <span className="relative">
                      Explore Service

                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-cyan-400 group-hover/link:w-full transition-all duration-300" />
                    </span>

                    <span className="w-9 h-9 rounded-full border border-cyan-400/30 flex items-center justify-center group-hover/link:bg-cyan-400 group-hover/link:text-[#07131F] transition-all duration-300">
                      <FaArrowRight className="text-sm transition-transform duration-300 group-hover/link:translate-x-1" />
                    </span>
                  </Link>

                  {/* Animated Bottom Line */}
                  <div className="mt-7 h-[2px] w-full bg-white/5 overflow-hidden">
                    <div className="h-full w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700" />
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >

          <p className="text-slate-400 mb-5">
            Not sure which service is right for you?
          </p>

          <button
            onClick={() => {
              const element = document.getElementById("apply");

              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border border-cyan-400/30 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-[#07131F] transition-all duration-300"
          >
            Talk to Our Experts
            <FaArrowRight />
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Services;