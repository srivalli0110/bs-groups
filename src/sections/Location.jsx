import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#07131F] py-28 px-6 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Visit Our Office
          </span>

          <h2 className="text-5xl font-bold mt-4">
            We'd Love To Meet You
          </h2>

          <p className="text-slate-300 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Visit our corporate office for professional guidance on
            Loans, Insurance, Solar Solutions, Real Estate and complete
            Business Services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Office Details */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
          >

            <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mb-8">
              <FaMapMarkerAlt className="text-cyan-400 text-4xl" />
            </div>

            <h3 className="text-3xl font-bold mb-6">
              B&S GROUPS
            </h3>

            <p className="text-slate-300 leading-8 text-lg">

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

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:+919848378055"
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold hover:scale-105 transition"
              >
                <FaPhoneAlt />
                Call Office
              </a>

              <a
                href="https://wa.me/919848378055?text=Hello%20B%26S%20GROUPS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-green-600 px-7 py-3 font-semibold hover:bg-green-500 transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >

            <iframe
              title="B&S GROUPS Office"
              src="https://www.google.com/maps?q=Manjeera%20Trinity%20Corporate%20Kukatpally%20Hyderabad&output=embed"
              width="100%"
              height="520"
              style={{ border: 0 }}
              loading="lazy"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Location;