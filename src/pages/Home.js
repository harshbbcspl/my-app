export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white px-6 text-center">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-xl animate-fade-in">
          🚀 Welcome to <span className="text-yellow-300">MyApp</span>
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mb-6 opacity-90">
          Build modern, responsive websites with{" "}
          <span className="font-semibold text-yellow-200">React + Tailwind CSS</span>.
        </p>

        <div className="flex space-x-4">
          <a
            href="/about"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-105"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-800 transition transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-10">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="App Preview"
            className="w-64 md:w-96 drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            ✨ Features of <span className="text-indigo-600">MyApp</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">⚡ Fast Performance</h3>
              <p className="text-gray-600">
                Enjoy blazing fast load times and responsive UI with React and Tailwind.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">📱 Responsive Design</h3>
              <p className="text-gray-600">
                Works perfectly on desktop, tablet, and mobile with modern responsive design.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">🔒 Secure</h3>
              <p className="text-gray-600">
                Built with best practices in mind to ensure security and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Testimonials Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">🌟 What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <p className="text-gray-600 italic">
                "This app completely changed how I work. Fast, simple, and powerful!"
              </p>
              <div className="flex items-center mt-6">
                <img src="https://i.pravatar.cc/80?img=1" alt="user" className="w-12 h-12 rounded-full border-2 border-indigo-500" />
                <div className="ml-3">
                  <h4 className="font-bold">Alex Johnson</h4>
                  <span className="text-sm text-gray-500">Product Manager</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <p className="text-gray-600 italic">
                "Sleek design and super easy to use. I recommend it to everyone."
              </p>
              <div className="flex items-center mt-6">
                <img src="https://i.pravatar.cc/80?img=2" alt="user" className="w-12 h-12 rounded-full border-2 border-indigo-500" />
                <div className="ml-3">
                  <h4 className="font-bold">Sophia Lee</h4>
                  <span className="text-sm text-gray-500">Designer</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <p className="text-gray-600 italic">
                "The best tool I’ve used in years. Excellent support too!"
              </p>
              <div className="flex items-center mt-6">
                <img src="https://i.pravatar.cc/80?img=3" alt="user" className="w-12 h-12 rounded-full border-2 border-indigo-500" />
                <div className="ml-3">
                  <h4 className="font-bold">Michael Chen</h4>
                  <span className="text-sm text-gray-500">Developer</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 💰 Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">💰 Our Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Basic Plan */}
            <div className="border rounded-2xl p-8 shadow hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Basic</h3>
              <p className="text-3xl font-bold mb-4">$9<span className="text-gray-500 text-base">/mo</span></p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✔ 5 Projects</li>
                <li>✔ Basic Support</li>
                <li>✔ Limited Features</li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                Choose
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-indigo-600 rounded-2xl p-8 shadow-xl transform scale-105">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Pro</h3>
              <p className="text-3xl font-bold mb-4">$29<span className="text-gray-500 text-base">/mo</span></p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✔ Unlimited Projects</li>
                <li>✔ Priority Support</li>
                <li>✔ Advanced Features</li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                Choose
              </button>
            </div>

            {/* Premium Plan */}
            <div className="border rounded-2xl p-8 shadow hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Premium</h3>
              <p className="text-3xl font-bold mb-4">$59<span className="text-gray-500 text-base">/mo</span></p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✔ All Features</li>
                <li>✔ Dedicated Support</li>
                <li>✔ Team Collaboration</li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                Choose
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
