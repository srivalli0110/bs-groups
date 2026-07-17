import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const gallery = [
  {
    title: "Loan Services",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Solar Panels",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Insurance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Open Plots",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Farm House Rentals",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Tensile Structures",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#111827] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A227] uppercase tracking-[5px] font-semibold">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our Gallery
          </h2>

          <div className="w-28 h-1 bg-[#C9A227] mx-auto rounded-full mt-6"></div>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            Explore some of the services and business solutions
            offered by B&S GROUPS.
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-110 duration-700"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/40 to-transparent flex flex-col justify-end p-8">

                <h3 className="text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <div className="mt-5 flex items-center gap-2 text-[#C9A227] font-semibold group-hover:gap-4 duration-300">

                  Learn More

                  <FaArrowRight />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;