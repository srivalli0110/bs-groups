import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Call Button */}

      <a
        href="tel:+919848378055"
        className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        title="Call Now"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* WhatsApp Button */}

      <a
        href="https://wa.me/919848378055?text=Hello%20B%26S%20GROUPS,%20I%20need%20more%20information."
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        title="WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>
  );
}

export default FloatingButtons;