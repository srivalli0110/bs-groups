import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050B18] text-white">

      {/* Background Glow */}

      <div className="absolute -top-32 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="B&S GROUPS"
              className="w-24 mb-5"
            />

            <h2 className="text-3xl font-bold">

              B<span className="text-cyan-400">&</span>S GROUPS

            </h2>

            <p className="mt-5 text-slate-300 leading-8">

              Your trusted partner for Business Solutions,
              Loans, Insurance, Solar Solutions,
              Open Plots, Farm House Rentals and
              Tensile Structures.

            </p>

            <div className="flex gap-4 mt-8">

              {[

                <FaFacebookF />,
                <FaInstagram />,
                <FaLinkedinIn />,
                <FaYoutube />,

              ].map((icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 flex items-center justify-center transition duration-300"
                >
                  {icon}
                </a>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Services

            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>Personal Loans</li>

              <li>Business Loans</li>

              <li>Home Loans</li>

              <li>Insurance</li>

              <li>Solar Solutions</li>

              <li>Open Plots</li>

              <li>Farm House Rentals</li>

              <li>Tensile Structures</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Contact

            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <FaPhoneAlt className="text-cyan-400 mt-1" />

                <div>

                  <p className="text-slate-300">

                    +91 98483 78055

                  </p>

                  <p className="text-slate-300">

                    +91 99599 85050

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-cyan-400 mt-1" />

                <p className="text-slate-300 break-all">

                  info.believeandservice@gmail.com

                </p>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-cyan-400 mt-1" />

                <p className="text-slate-300 leading-7">

                  12A02B, 13th Floor

                  <br />

                  Manjeera Trinity Corporate

                  <br />

                  JNTU - Hitech City Road

                  <br />

                  Kukatpally

                  <br />

                  Hyderabad - 500072

                </p>

              </div>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {[
                ["Home", "#hero"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Why Choose Us", "#whychooseus"],
                ["Testimonials", "#reviews"],
                ["Apply Now", "#apply"],
                ["Contact", "#contact"],
              ].map(([title, link]) => (

                <li key={title}>

                  <a
                    href={link}
                    className="text-slate-300 hover:text-cyan-400 transition"
                  >

                    {title}

                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-400 text-center">

            © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">B&S GROUPS</span>.
            All Rights Reserved.

          </p>

          <a
            href="#hero"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center hover:scale-110 transition"
          >

            <FaArrowUp />

          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;