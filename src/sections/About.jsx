import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaCheckCircle,
  FaHandshake,
} from "react-icons/fa";

import office2 from "../assets/images/team1.jpeg";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#07131F] py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative"
        >

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">

            <img
              src={office2}
              alt="B&S GROUP"
              className="rounded-3xl w-full h-[560px] object-cover"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 left-10 bg-[#0F1E2F]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 shadow-2xl">

            <h2 className="text-4xl font-bold text-cyan-400">

              1000+

            </h2>

            <p className="text-slate-300 mt-2">

              Happy Customers

            </p>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">

            ABOUT US

          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black leading-tight text-white">

            Complete

            <br />

            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">

              Business Solutions

            </span>

          </h2>

          <p className="mt-8 text-slate-300 leading-8 text-lg">

            <strong>B&S GROUPS</strong> is a trusted financial and business
            consultancy providing complete solutions for individuals,
            entrepreneurs and businesses.

            <br /><br />

            We specialize in Personal Loans, Business Loans,
            Home Loans, Insurance, Solar Solutions,
            Real Estate Services, Farm House Rentals,
            and Tensile Structure Projects with complete
            transparency and customer satisfaction.

          </p>

          {/* Mission & Vision */}

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400 duration-300">

              <FaBullseye className="text-cyan-400 text-4xl mb-4"/>

              <h3 className="text-2xl font-bold text-white">

                Our Mission

              </h3>

              <p className="text-slate-400 mt-3 leading-7">

                Deliver transparent,
                reliable and customer-focused
                business solutions with excellence.

              </p>

            </div>

            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400 duration-300">

              <FaEye className="text-cyan-400 text-4xl mb-4"/>

              <h3 className="text-2xl font-bold text-white">

                Our Vision

              </h3>

              <p className="text-slate-400 mt-3 leading-7">

                Become India's most trusted
                business and financial
                solutions company.

              </p>

            </div>

          </div>

          {/* Why Choose */}

          <div className="mt-12 space-y-5">

            {[
              "100% Transparent Services",
              "Professional Financial Guidance",
              "Fast Loan Processing",
              "Dedicated Customer Support",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <FaCheckCircle className="text-cyan-400 text-xl"/>

                <p className="text-slate-300 text-lg">

                  {item}

                </p>

              </div>

            ))}

          </div>

          {/* Bottom Card */}

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px]">

            <div className="rounded-3xl bg-[#07131F] px-8 py-7 flex items-center gap-5">

              <FaHandshake className="text-cyan-400 text-5xl"/>

              <div>

                <h3 className="text-2xl font-bold text-white">

                  Trusted Business Partner

                </h3>

                <p className="text-slate-400 mt-2">

                  Building long-term relationships through
                  trust, commitment and quality service.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;