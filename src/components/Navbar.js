import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">MyApp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>{" "}
        {/* ✅ new link */}
      </div>
    </nav>
  );
}
