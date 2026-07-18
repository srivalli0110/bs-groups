import { motion } from "framer-motion";
import {
  FaUsers,
  FaBriefcase,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "500+",
      label: "Happy Customers",
      description: "Customers who have trusted B&S GROUPS",
    },
    {
      icon: <FaBriefcase />,
      number: "6",
      label: "Services",
      description: "Multiple solutions under one roof",
    },
    {
      icon: <FaHandshake />,
      number: "100%",
      label: "Customer Focus",
      description: "Dedicated to customer satisfaction",
    },
    {
      icon: <FaStar />,
      number: "24/7",
      label: "Support",
      description: "Always here when you need us",
    },
  ];

  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-[#07131F] py-24 px-6 text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[6px] text-cyan-400 font-semibold text-sm">
            B&S GROUPS
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Growing With
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Your Trust
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-base md:text-lg leading-8">
            We bring together multiple services and professional support
            to help individuals, families and businesses move forward
            with confidence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >

              {/* Card */}
              <div className="relative h-full min-h-[280px] rounded-3xl bg-[#0B1B2B] border border-white/10 p-8 text-center overflow-hidden hover:border-cyan-400/50 transition-all duration-500 shadow-xl">

                {/* Card Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-400/5 blur-3xl group-hover:bg-cyan-400/10 transition-all duration-500" />

                {/* Number */}
                <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.03] group-hover:text-cyan-400/[0.05] transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {stat.icon}
                </div>

                {/* Number */}
                <h3 className="relative mt-7 text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </h3>

                {/* Label */}
                <h4 className="relative mt-4 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="relative mt-3 text-slate-400 leading-6 text-sm">
                  {stat.description}
                </p>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-2/3 transition-all duration-700" />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;