import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#07131F] py-28 px-6 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            We're Ready To Help
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Whether you need a loan, insurance, solar solution or property
            consultation, our experts are just one call away.
          </p>

        </motion.div>

        {/* Top Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Phone */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center shadow-xl hover:border-cyan-400 transition"
          >

            <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center">

              <FaPhoneAlt className="text-cyan-400 text-4xl" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Call Us
            </h3>

            <p className="text-slate-300 mt-5">
              +91 98483 78055
            </p>

            <p className="text-slate-300">
              +91 99599 85050
            </p>

            <a
              href="tel:+919848378055"
              className="inline-block mt-7 bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Call Now
            </a>

          </motion.div>

          {/* WhatsApp */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center shadow-xl hover:border-green-400 transition"
          >

            <div className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">

              <FaWhatsapp className="text-green-400 text-4xl" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              WhatsApp
            </h3>

            <p className="text-slate-300 mt-5 leading-7">
              Chat instantly with our team for quick support and enquiries.
            </p>

            <a
              href="https://wa.me/919848378055?text=Hello%20B%26S%20GROUPS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-7 bg-green-600 px-7 py-3 rounded-xl font-semibold hover:bg-green-500 transition"
            >
              Chat Now
            </a>

          </motion.div>

          {/* Email */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center shadow-xl hover:border-cyan-400 transition"
          >

            <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500/20 flex items-center justify-center">

              <FaEnvelope className="text-cyan-400 text-4xl" />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Email
            </h3>

            <p className="text-slate-300 break-all mt-5">
              info.believeandservice@gmail.com
            </p>

            <a
              href="mailto:info.believeandservice@gmail.com"
              className="inline-block mt-7 bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Send Email
            </a>

          </motion.div>

        </div>

        {/* Bottom Section */}

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {/* Address */}

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">

            <FaMapMarkerAlt className="text-cyan-400 text-4xl mb-6" />

            <h3 className="text-2xl font-bold mb-5">
              Office Address
            </h3>

            <p className="text-slate-300 leading-8">

              12A02B, 13th Floor

              <br />

              Manjeera Trinity Corporate

              <br />

              JNTU - Hitech City Road

              <br />

              KPHB Phase-3

              <br />

              Kukatpally

              <br />

              Hyderabad – 500072

            </p>

          </div>

          {/* Working Hours */}

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">

            <FaClock className="text-cyan-400 text-4xl mb-6" />

            <h3 className="text-2xl font-bold mb-5">
              Working Hours
            </h3>

            <div className="space-y-4 text-slate-300">

              <p>
                Monday – Saturday
              </p>

              <p>
                9:00 AM – 7:00 PM
              </p>

              <p>
                Sunday – By Appointment
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;