import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex flex-col justify-center items-center p-8 pt-28 text-gray-800">
      
      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto flex flex-col md:flex-row items-center"
      >
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center bg-gradient-to-br from-indigo-100 to-pink-100 p-10"
        >
          <img
            src="https://img.freepik.com/free-vector/office-concept-illustration_114360-1741.jpg"
            alt="About illustration"
            className="w-80 md:w-96 rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="w-full md:w-1/2 p-10 text-center md:text-left"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">
            About Us
          </h1>
          <p className="text-lg mb-4 text-gray-700 leading-relaxed">
            We’re a passionate team of developers and designers creating modern
            digital experiences using <b>React</b> ⚛️ and <b>Tailwind CSS</b>.
            Our mission is to turn creative ideas into beautiful, high-performing
            web applications.
          </p>
          <p className="text-md text-gray-600 mb-6 leading-relaxed">
            Whether you’re a startup, business, or individual — we help you grow
            your online presence through sleek design, responsive layouts, and
            seamless performance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mission / Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 max-w-5xl text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          Our mission is to build products that make technology effortless and
          enjoyable. We believe in empowering people and businesses through
          elegant design, robust code, and meaningful innovation.
        </p>
        <p className="text-lg text-gray-200 mt-4">
          Our vision is a world where every brand — no matter the size — has a
          digital presence that truly represents its value.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {[
          { value: "10+", label: "Projects Completed" },
          { value: "5+", label: "Team Members" },
          { value: "100%", label: "Client Satisfaction" },
          { value: "24/7", label: "Support Availability" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white border border-white/20 shadow-lg"
          >
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-sm mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
