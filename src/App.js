import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ import Footer
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"; // ✅ import new page
import Gallery from "./pages/Gallery"; // ✅ import Gallery page
import NotFound from "./components/NotFound";
import TeamPage from "./pages/TeamPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<TeamPage />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer /> {/* ✅ Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
