import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react"; // beautiful modern icons

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex flex-col items-center px-6 pt-28 pb-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-white text-center mb-12"
      >
        Get in <span className="text-yellow-300">Touch</span> 💬
      </motion.h1>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 w-full max-w-6xl">
        {[
          {
            icon: <MapPin className="w-8 h-8 text-indigo-600" />,
            title: "Our Address",
            info: "123 Main Street, San Francisco, CA",
          },
          {
            icon: <Phone className="w-8 h-8 text-indigo-600" />,
            title: "Call Us",
            info: "+1 (555) 123-4567",
          },
          {
            icon: <Mail className="w-8 h-8 text-indigo-600" />,
            title: "Email",
            info: "support@example.com",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow"
          >
            <div className="flex justify-center mb-3">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-1">{card.title}</h2>
            <p className="text-gray-600">{card.info}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 w-full max-w-6xl grid md:grid-cols-2 gap-10"
      >
        {/* Left - Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-indigo-600 mb-6">📬 Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition"
            >
              Send Message ✉️
            </motion.button>
          </form>
        </div>

        {/* Right - Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092982678911!2d-122.4194152846813!3d37.774929279759554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a0634f9d1%3A0x5df9e0e7f6ad3e85!2sSan%20Francisco%20CA!5e0!3m2!1sen!2sus!4v1674852379287!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ minHeight: "420px", border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>

    </div>
  );
}
