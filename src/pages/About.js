export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center p-6">
      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="https://img.freepik.com/free-vector/business-team-concept-illustration_114360-678.jpg"
            alt="About illustration"
            className="w-72 md:w-80 rounded-lg shadow-md"
          />
        </div>
        
        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-teal-600">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to our React + Tailwind app! 🚀 We are passionate about
            creating modern, responsive, and user-friendly web experiences.
          </p>
          <p className="text-md text-gray-600 mb-6">
            Our mission is to deliver high-quality solutions with clean design
            and powerful functionality, helping businesses and individuals shine online.
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
