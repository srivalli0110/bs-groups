import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      designation: "Business Owner",
      text: "B&S GROUPS helped me secure my business loan quickly. Their team was professional, transparent and supportive throughout the process.",
    },
    {
      name: "Suresh Reddy",
      designation: "Entrepreneur",
      text: "Excellent service and fast loan approval. I highly recommend B&S GROUPS for anyone looking for reliable financial solutions.",
    },
    {
      name: "Priya Sharma",
      designation: "Working Professional",
      text: "The insurance guidance was very clear and professional. The staff patiently explained every detail before helping me choose the best policy.",
    },
    {
      name: "Vijay Kumar",
      designation: "Investor",
      text: "Their property and open plot services are outstanding. I received genuine advice and complete transparency throughout my investment journey.",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative bg-[#07131F] py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[160px]" />

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
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-black text-white">
            What Our
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-3xl mx-auto">
            Customer satisfaction is at the heart of everything we do.
            Here's what our valued clients have to say about B&S GROUPS.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reviews.map((review, index) => (
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
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400 transition-all duration-300 shadow-xl"
            >

              {/* Quote Icon */}
              <FaQuoteLeft className="text-cyan-400 text-3xl mb-6 opacity-80" />

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-300 leading-8 italic">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-6"></div>

              {/* Client */}
              <h3 className="text-xl font-bold text-white">
                {review.name}
              </h3>

              <p className="text-cyan-400 text-sm mt-1">
                {review.designation}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;