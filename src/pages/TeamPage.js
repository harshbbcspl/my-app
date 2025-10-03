import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function TeamPage() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Project Manager",
      img: "/mimg2.jpg",
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Sophia Lee",
      role: "UI/UX Designer",
      img: "/fimg1.png",
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Michael Chen",
      role: "Frontend Developer",
      img: "/mimg1.jpg",
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Emily Davis",
      role: "Backend Developer",
      img: "/fimg3.jpg",
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 py-12 px-6 text-white">
      <h1 className="text-5xl font-bold text-center mb-12 drop-shadow-lg">
        👥 Meet Our Team
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.twitter} className="text-blue-400 hover:text-blue-500">
                  <FaTwitter />
                </a>
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-700">
                  <FaLinkedin />
                </a>
                <a href={member.github} className="text-gray-800 hover:text-gray-900">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
