import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-pink-600 text-white px-6 text-center">
      <h1 className="text-9xl font-extrabold mb-4 drop-shadow-lg">404</h1>
      <h2 className="text-4xl font-bold mb-6">Oops! Page Not Found</h2>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        The page you are looking for doesn’t exist or has been moved.
        Don’t worry, you can return to the homepage and start fresh.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="bg-white text-red-500 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        🏠 Go Home
      </Link>

      {/* Optional Illustration */}
      <img
  src="/404.jpg"
  alt="404 Illustration"
  className="mt-12 rounded-xl shadow-lg w-64 h-40 sm:w-96 sm:h-64 md:w-[500px] md:h-[500px] object-cover"
/>

    </div>
  );
}
