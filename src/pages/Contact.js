export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6">
      <h1 className="text-5xl font-bold mb-6">📬 Contact Us</h1>
      
      <form className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4">
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
  );
}
