import { motion } from "framer-motion";
import {
  FaHandshake,
  FaUserShield,
  FaBolt,
  FaClock,
  FaAward,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaHandshake />,
    title: "Trusted Company",
    description:
      "Thousands of customers trust B&S GROUPS for reliable business and financial services.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Processing",
    description:
      "Quick approvals with minimal documentation and maximum efficiency.",
  },
  {
    icon: <FaUserShield />,
    title: "100% Transparency",
    description:
      "Every process is clear, honest and customer-friendly with no hidden surprises.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Our experts assist you from consultation to successful completion.",
  },
  {
    icon: <FaAward />,
    title: "Experienced Professionals",
    description:
      "A knowledgeable team delivering personalized financial and business solutions.",
  },
  {
    icon: <FaClock />,
    title: "Always Available",
    description:
      "Prompt assistance whenever you need support or guidance.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative bg-[#07131F] py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[160px]" />

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
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black text-white">
            Your Success
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Is Our Mission
            </span>
          </h2>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-3xl mx-auto">
            We provide trusted financial, business and infrastructure
            solutions with transparency, professionalism and customer-first
            service.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((reason, index) => (
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
                y: -10,
                scale: 1.02,
              }}
              className="group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-4xl shadow-lg shadow-cyan-500/30 mb-8 group-hover:rotate-6 transition duration-300">
                {reason.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {reason.title}
              </h3>

              <p className="text-slate-300 leading-8">
                {reason.description}
              </p>

              <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}

        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px]"
        >
          <div className="rounded-3xl bg-[#07131F] px-10 py-12 lg:flex lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <h2 className="text-4xl font-bold text-white">
                Partner with B&S GROUPS
              </h2>

              <p className="mt-5 text-slate-300 leading-8 text-lg">
                Whether you need loans, insurance, solar solutions,
                open plots, farmhouse rentals or tensile structures,
                we provide reliable services with complete transparency
                and professional guidance.
              </p>

            </div>

            <div className="mt-10 lg:mt-0 space-y-4">

              {[
                "Professional Team",
                "Fast Processing",
                "Trusted Business Solutions",
                "Customer First Approach",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <FaCheckCircle className="text-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}

              <a
                href="#apply"
                className="inline-block mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 hover:scale-105 transition duration-300"
              >
                Apply Today
              </a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;