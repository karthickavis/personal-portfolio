import { FaGithub, FaLinkedin } from 'react-icons/fa';
 
 import About from './About';
 import Projects from './Projects';
 import Contact from './Contact';

export default function Home() {
  return (
    <>
    <section className="min-h-[100vh] bg-[#0f172a] text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 lg:px-20 gap-10 py-10 ">
      
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Hi, I'm Karthick 👋
        </h1>
        <h2 className="text-emerald-300 text-2xl mt-2">
          Frontend Developer | React Enthusiast
        </h2>
        <p className="text-gray-200 mt-4 max-w-md">
          I build responsive, user-friendly web apps with modern tech like React, Tailwind CSS, and JavaScript. Let's create something great together!
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start mt-6 text-2xl">
          <a href="https://github.com/karthickavis" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/karthiavis21" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1G7s96QfHNlQYDRDVyqGzZbflTR8tEx1h/view?usp=sharing"
          download
          className="inline-block mt-6 px-6 py-2 bg-emerald-300 text-[#0f172a] font-semibold rounded shadow-md hover:bg-cyan-400 transition"
        >
          View Resume
        </a>
      </div>

      {/* Developer Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="https://i.pinimg.com/originals/e1/f3/41/e1f3413bf5036045713341394f617225.gif"
          alt="Developer Avatar"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}
