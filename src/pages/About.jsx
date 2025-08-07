
import { FaGraduationCap, FaRoad, FaCode } from "react-icons/fa";
 

export default function About() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Git & GitHub", level: 75 },
  ];

  return (
    <section id="about" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="https://camo.githubusercontent.com/66066b22abacaf358032bb15ab64fe18654e8d00e2ed4d07747d89eccb6596ae/68747470733a2f2f63646e622e61727473746174696f6e2e636f6d2f702f6173736574732f696d616765732f696d616765732f3032382f3939312f3939392f6f726967696e616c2f616e6e612d68617672796c79756b682d2e6769663f31353936313235313132"
            alt="Karthick Avatar"
            className="rounded-2xl w-72 sm:h-72 md:h-[400px] md:w-[400px] object-cover border-4 border-emerald-400 shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">About Me</h2>
          <p className="text-gray-200 leading-relaxed mb-6 text-lg">
            Hi, I'm <span className="text-cyan-300 font-semibold">Karthick</span>, a passionate
            <span className="text-yellow-300 font-semibold"> Frontend Developer</span> skilled in{" "}
            <span className="text-yellow-300">HTML, CSS, JavaScript, React.js</span>. I transitioned from a biotechnology background to tech through self-learning and real-world project development.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaGraduationCap className="text-yellow-400 text-xl mt-1" />
              <p>I hold a post-graduation degree in <span className="text-white font-medium">Biotechnology</span>.</p>
            </div>
            <div className="flex items-start gap-3">
              <FaRoad className="text-pink-400 text-xl mt-1" />
              <p>
                I’ve built projects like a <span className="text-blue-300">Travel Website</span>,{" "}
                 <span className="text-blue-300">E-commerce App</span>,{" "}
  <span className="text-blue-300">Blog Platform</span>,{" "}
  <span className="text-blue-300">Medical Appointments Booking Platform</span>,{" "}
  <span className="text-blue-300">Expense Tracker App</span>, and{" "}
  <span className="text-blue-300">Task Progress Tracker App</span>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCode className="text-green-400 text-xl mt-1" />
              <p>
                I love crafting clean UIs with <span className="text-teal-300">React.js</span> and{" "}
                <span className="text-teal-300">TailwindCSS</span>, and I’m constantly improving in{" "}
                <span className="text-teal-300">My-Self</span>.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm italic text-gray-400">
            My goal is to join a forward-thinking team, build meaningful user interfaces, and grow every day 🚀
          </p>
        </div>
      </div>

      {/* Skill Bars */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-3xl text-center font-bold text-emerald-300 mb-8">Skills</h3>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-4 bg-gray-800 rounded-full">
                <div
                  className="h-4 bg-emerald-400 rounded-full"
                  style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

