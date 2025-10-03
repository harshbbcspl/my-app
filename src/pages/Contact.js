export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500 flex flex-col items-center justify-center px-6 py-12">
      
      {/* Contact Info Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10 w-full max-w-6xl">
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
          <div className="text-indigo-600 text-3xl mb-3">📍</div>
          <h2 className="text-xl font-semibold">Our Address</h2>
          <p className="text-gray-600">123 Main Street, San Francisco, CA</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
          <div className="text-indigo-600 text-3xl mb-3">📞</div>
          <h2 className="text-xl font-semibold">Call Us</h2>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
          <div className="text-indigo-600 text-3xl mb-3">✉️</div>
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-600">support@example.com</p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-6xl grid md:grid-cols-2 gap-10">
        
        {/* Left - Contact Form */}
        <div>
          <h1 className="text-4xl font-bold text-indigo-600 mb-6">📬 Get in Touch</h1>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea 
                rows="4"
                placeholder="Write your message" 
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092982678911!2d-122.4194152846813!3d37.774929279759554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a0634f9d1%3A0x5df9e0e7f6ad3e85!2sSan%20Francisco%20CA!5e0!3m2!1sen!2sus!4v1674852379287!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ minHeight: "400px", border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
