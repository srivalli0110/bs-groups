```jsx
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

import loansImage from "../assets/images/loans.jpeg";

function Loans() {
  return (
    <div className="min-h-screen bg-[#07131F] text-white">

      {/* Header */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={loansImage}
          alt="Loans"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07131F]/70" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-cyan-400 uppercase tracking-[6px] font-semibold mb-4">
              B&S GROUPS
            </p>

            <h1 className="text-5xl md:text-6xl font-black">
              Loans
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-12"
        >
          <FaArrowLeft />
          Back to Services
        </Link>

        <h2 className="text-4xl font-bold mb-8">
          Financial Solutions Designed For You
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-8">
          B&S GROUPS helps individuals, families and businesses find suitable
          loan solutions based on their financial needs. We provide guidance
          throughout the process and help customers understand their available
          options.
        </p>

        <p className="text-slate-300 text-lg leading-8 mb-12">
          Our loan assistance includes Personal Loans, Business Loans,
          Education Loans and Home Loans, with professional guidance from
          application to approval.
        </p>

        {/* CTA */}
        <a
          href="tel:+919999999999"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-105 transition"
        >
          <FaPhoneAlt />
          Contact Us
        </a>

      </div>
    </div>
  );
}

export default Loans;
```
