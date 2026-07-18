import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

import loansImage from "../assets/images/loans.jpeg";

function Loans() {
  const features = [
    "Personal Loans",
    "Business Loans",
    "Home Loans",
    "Education Loans",
  ];

  const handleWhatsApp = () => {
    const message = `Hello B&S GROUPS,

I am interested in your Loan Services.

Please provide me with more information.

Thank you.`;

    window.open(
      `https://wa.me/919848378055?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#07131F] text-white">

      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-[550px] flex items-center overflow-hidden">

        <img
          src={loansImage}
          alt="Loans"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-[#07131F]/80" />

        {/* Glow */}

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

          {/* Back Button */}

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-10"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold mb-5">
            B&S GROUPS
          </p>

          <h1 className="text-5xl md:text-7xl font-black max-w-4xl">
            Loan Solutions
          </h1>

          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-8 max-w-2xl">
            Financial solutions designed to support your personal,
            educational, business and home needs.
          </p>

          {/* Contact Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            {/* WhatsApp */}

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-green-500 hover:bg-green-600 font-bold transition hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              Enquire on WhatsApp
            </button>

            {/* Call */}

            <a
              href="tel:+919848378055"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#07131F] font-bold transition"
            >
              <FaPhoneAlt />
              Call Us
            </a>

          </div>

        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}

            <div>

              <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                Our Loan Services
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-8">
                Loan Solutions With
                <span className="text-cyan-400"> Expert Guidance</span>
              </h2>

              <p className="text-slate-300 text-lg leading-8 mb-6">
                B&S GROUPS provides professional assistance for customers
                looking for suitable financial solutions. We help you
                understand available options and guide you through the
                loan process.
              </p>

              <p className="text-slate-300 text-lg leading-8">
                Whether you are planning your dream home, expanding your
                business, funding education or managing personal needs,
                our team is here to help you explore suitable options.
              </p>

            </div>

            {/* Right - Features */}

            <div className="grid sm:grid-cols-2 gap-5">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="group p-7 rounded-2xl bg-[#0B1B2B] border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                >

                  <FaCheckCircle className="text-cyan-400 text-2xl mb-5 group-hover:scale-110 transition" />

                  <h3 className="text-xl font-semibold">
                    {feature}
                  </h3>

                  <p className="text-slate-400 mt-3 leading-6">
                    Get professional guidance and assistance
                    for your financial requirements.
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Loans;