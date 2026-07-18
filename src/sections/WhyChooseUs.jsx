import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserTie,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaShieldAlt />,
      title: "Trusted & Reliable",
      desc: "We focus on transparency, professionalism and reliable solutions to build long-term relationships with our customers.",
    },
    {
      icon: <FaUserTie />,
      title: "Expert Guidance",
      desc: "Our team helps you understand your options and guides you toward solutions that match your individual requirements.",
    },
    {
      icon: <FaHandshake />,
      title: "Customer First",
      desc: "Your needs and satisfaction are our priority. We believe in creating a smooth and comfortable experience from start to finish.",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      desc: "We are here to assist you throughout your journey and help you get the information and support you need.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#07131F] py-28 px-6 text-white"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute -top-40 left-[-150px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="absolute bottom-[-200px] right-[-150px] w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="uppercase tracking-[6px] text-cyan-400 font-semibold text-sm md:text-base">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Why Choose
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              B&S GROUPS?
            </span>
          </h2>

          <p className="mt-7 text-slate-300 text-base md:text-lg leading-8">
            We bring together multiple services under one roof, combining
            professional guidance, transparent communication and customer
            focused support to help you move forward with confidence.
          </p>
        </motion.div>

        {/* ================= REASONS ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl bg-[#0B1B2B] border border-white/10 p-8 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 shadow-xl hover:shadow-cyan-500/10">

                {/* Card Glow */}

                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-400/5 blur-3xl group-hover:bg-cyan-400/10 transition-all duration-500" />

                {/* Number */}

                <div className="absolute top-6 right-7 text-5xl font-black text-white/5 group-hover:text-cyan-400/10 transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Icon */}

                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {reason.icon}
                </div>

                {/* Title */}

                <h3 className="relative mt-7 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}

                <p className="relative mt-4 text-slate-400 leading-7">
                  {reason.desc}
                </p>

                {/* Bottom Line */}

                <div className="relative mt-7 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700" />

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;