import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

import office from "../assets/images/office1.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#07131F] text-white pt-36 pb-24 px-6"
    >
      <div className="absolute -top-52 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <FaCheckCircle />
            Trusted Business & Financial Partner
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-black leading-tight">
            Building
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-yellow-300 bg-clip-text text-transparent">
              Dreams Into Reality
            </span>
          </h1>

          <p className="mt-8 text-slate-300 leading-8 text-lg max-w-xl">
            B&S GROUPS is a trusted business and financial consulting company
            offering Personal Loans, Business Loans, Home Loans, Insurance,
            Solar Solutions, Real Estate Services, Farm House Rentals and
            Infrastructure Solutions.
            <br />
            <br />
            Our mission is to deliver reliable, transparent and
            customer-focused services that help individuals and businesses
            grow with confidence.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#apply"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold shadow-xl shadow-cyan-500/30 hover:scale-105 duration-300"
            >
              Apply Now
              <FaArrowRight className="group-hover:translate-x-1 duration-300" />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-lg px-8 py-4 font-semibold hover:bg-white/10 duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <img
            src={office}
            alt="B&S GROUP Office"
            className="relative w-full max-w-[560px] h-[620px] object-cover rounded-3xl border border-white/10 shadow-[0_35px_90px_rgba(0,0,0,.55)]"
          />

          <div className="absolute bottom-8 left-0 rounded-2xl bg-[#0E1C2F]/95 backdrop-blur-xl border border-white/10 px-6 py-5 shadow-2xl">
            <h3 className="text-cyan-400 text-3xl font-bold">99%</h3>
            <p className="text-slate-300">
              Customer Satisfaction
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;