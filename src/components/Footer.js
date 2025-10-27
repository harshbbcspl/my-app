import { FaFacebookF, FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900  to-gray-900 text-gray-300 py-8  shadow-inner">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-wide mb-1">MyApp</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center space-x-6">
          <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
          <a href="/about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</a>
          <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition transform hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Divider line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        Designed with ❤️ by <span className="text-blue-400 font-medium">Harsh Bhoi</span>
      </div>
    </footer>
  );
}
