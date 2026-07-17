import { motion } from "framer-motion";
import {
  FaUsers,
  FaMoneyCheckAlt,
  FaSolarPanel,
  FaHeadset,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "500+",
      title: "Happy Customers",
    },
    {
      icon: <FaMoneyCheckAlt />,
      number: "1000+",
      title: "Loan Assistance",
    },
    {
      icon: <FaSolarPanel />,
      number: "100+",
      title: "Solar Projects",
    },
    {
      icon: <FaHeadset />,
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section
      id="stats"
      className="relative py-24 px-6 bg-[#07131F] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Our Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Numbers That Speak
          </h2>

          <p className="text-slate-300 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Our commitment to quality service, transparency and customer
            satisfaction has helped B&S GROUPS become a trusted partner for
            loans, insurance, solar solutions and real estate services.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.05,
              }}
              className="
                bg-[#0D1B2A]
                rounded-3xl
                border
                border-slate-700
                shadow-xl
                p-8
                text-center
                hover:border-cyan-400
                hover:shadow-cyan-500/20
                transition-all
                duration-300
              "
            >

              {/* Icon */}

              <div
                className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  text-4xl
                  mb-6
                "
              >
                {item.icon}
              </div>

              {/* Number */}

              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {item.number}
              </h3>

              {/* Title */}

              <p className="mt-4 text-slate-300 text-lg font-medium">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;