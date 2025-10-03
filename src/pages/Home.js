export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 text-center">
      
      {/* Hero Title */}
      <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
        🚀 Welcome to MyApp
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl max-w-2xl mb-6">
        Build modern, responsive websites with <span className="font-semibold">React + Tailwind CSS</span>.
      </p>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <a 
          href="/about" 
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Learn More
        </a>
        <a 
          href="/contact" 
          className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Hero Image (Optional) */}
      <div className="mt-10">
        <img 
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" 
          alt="App Preview"
          className="w-64 md:w-96 drop-shadow-xl"
        />
      </div>
    </section>
  );
}
