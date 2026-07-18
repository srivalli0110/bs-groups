import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

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
      desc: "Personal, Business, Education and Home Loans with quick approvals and expert guidance.",
    },
    {
      image: solarImage,
      title: "Solar Panels",
      desc: "Smart solar solutions for residential, commercial and industrial projects.",
    },
    {
      image: insuranceImage,
      title: "Insurance",
      desc: "Health, Life and General Insurance plans to protect your family and business.",
    },
    {
      image: farmhouseImage,
      title: "Farm House Rentals",
      desc: "Premium farmhouses for vacations, family gatherings and corporate events.",
    },
    {
      image: openPlotsImage,
      title: "Open Plots",
      desc: "Secure residential and commercial plot investments in prime locations.",
    },
    {
      image: tensileImage,
      title: "Tensile Structures",
      desc: "Modern tensile roofing and architectural solutions with premium quality.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-[#07131F] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 right-0 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black text-white">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
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
              className="group overflow-hidden rounded-3xl bg-[#0B1B2B] border border-slate-700 hover:border-cyan-400 transition-all duration-500 shadow-xl"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07131F] via-[#07131F]/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col h-[250px]">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-7 flex-grow">
                  {service.desc}
                </p>

                <button
                  className="mt-6 inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all duration-300"
                >
                  Learn More
                  <FaArrowRight />
                </button>

                <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;