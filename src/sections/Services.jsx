import { motion } from "framer-motion";
import {
  FaMoneyCheckAlt,
  FaHome,
  FaSolarPanel,
  FaShieldAlt,
  FaTree,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaMoneyCheckAlt />,
      title: "Loans",
      desc: "Personal, Business, Education and Home Loans with quick approvals and expert guidance.",
    },
    {
      icon: <FaSolarPanel />,
      title: "Solar Panels",
      desc: "Smart solar solutions for residential, commercial and industrial projects.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance",
      desc: "Health, Life and General Insurance plans to protect your family and business.",
    },
    {
      icon: <FaTree />,
      title: "Farm House Rentals",
      desc: "Premium farmhouses for vacations, family gatherings and corporate events.",
    },
    {
      icon: <FaHome />,
      title: "Open Plots",
      desc: "Secure residential and commercial plot investments in prime locations.",
    },
    {
      icon: <FaBuilding />,
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400 transition-all duration-300 shadow-xl"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-4xl shadow-lg shadow-cyan-500/30 mb-8 group-hover:rotate-6 transition duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-8">
                {service.desc}
              </p>

              {/* Learn More */}
              <div className="mt-8 inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all duration-300">
                Learn More
                <FaArrowRight />
              </div>

              {/* Bottom Glow Line */}
              <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;