import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";

function ApplyNow() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `*New Application - B&S GROUPS*

Name: ${formData.name}

Phone: ${formData.phone}

Service: ${formData.service}

Message:
${formData.message}`;

    window.open(
      `https://wa.me/919848378055?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-[#07131F] py-28 px-6 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/20 blur-[140px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Apply Now
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build Your Future
          </h2>

          <p className="text-slate-300 mt-6 text-lg leading-8 max-w-3xl mx-auto">
            Fill in your details and our experts will contact you within
            a short time to help you choose the right financial solution.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl space-y-7"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-slate-300 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full bg-[#0E1C2F] border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-slate-300 font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter mobile number"
              className="w-full bg-[#0E1C2F] border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none transition"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block mb-2 text-slate-300 font-medium">
              Select Service
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full bg-[#0E1C2F] border border-slate-700 rounded-xl px-5 py-4 text-white focus:border-cyan-400 outline-none"
            >
              <option value="">Choose Service</option>

              <option>Personal Loan</option>
              <option>Business Loan</option>
              <option>Home Loan</option>
              <option>Education Loan</option>
              <option>Solar Solutions</option>
              <option>Health Insurance</option>
              <option>Life Insurance</option>
              <option>Open Plots</option>
              <option>Farm House Rental</option>
              <option>Tensile Structures</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-slate-300 font-medium">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us your requirement..."
              className="w-full bg-[#0E1C2F] border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition shadow-xl shadow-cyan-500/20"
          >
            <FaWhatsapp className="text-xl" />
            Submit via WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default ApplyNow;