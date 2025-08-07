
export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A responsive e-commerce platform with product filters, cart functionality, and sleek UI using React.js & Tailwind CSS.",
      image: "https://pagecreative.co.uk/wp-content/uploads/2023/10/AdobeStock_223290240-1-2-scaled.jpeg", // Replace with your own screenshot later
      link: "https://shopeasy21.netlify.app/",
    },
    {
      title: "Travel Website",
      description:
        "A modern travel booking interface with sections for destinations, packages, and a responsive layout.",
      image: "https://www.justrunlah.com/wp-content/uploads/2016/12/Travel-the-world.jpg",
      link: "https://tripeasy1.netlify.app/",
    },
    {
      title: "Blog Application",
      description:
        "A minimalistic blog platform where users can write, edit, and manage blogs with beautiful typography.",
      image: "https://cdn.dribbble.com/users/7254608/screenshots/16471235/blog_app_4x.png",
      link: "https://mindwrite1.netlify.app/",
    },
     {
      title: "Appointment Booking Application",
      description:
        "MediConnect is a modern healthcare appointment platform that helps patients book doctor consultations seamlessly.",
      image: "https://static.vecteezy.com/system/resources/previews/013/141/034/non_2x/book-doctor-appointment-card-template-schedule-hospital-visit-editable-social-media-post-design-flat-color-illustration-for-poster-web-banner-ecard-vector.jpg",
      link: "https://mediconnect21.netlify.app/",
    },
    {
      title: "Expense Tracker App",
      description:
        "A Responsive App to add, delete and filter daily expense with real-time updates.Built using React and Tailwindcss,optimized for smooth performance and clean UI.",
      image: "https://www.arkasoftwares.com/blog/wp-content/uploads/2022/04/expense-tracker-app.png",
      link: "https://expensetrackerapp2111.netlify.app/",
    },
    {
      title: "Task Progress App",
      description:
        "Track and manage tasks with dynamic  progress indicators and live status updates.Designed with React to provide an intuitive and interactive user experience.",
      image: "https://i.pinimg.com/originals/8d/ea/30/8dea3013c47e185451bdcf39e2b3bac8.png",
      link: "https://progresspoint2111.netlify.app/",
    },

  ];

  return (
    <section id="projects" className="bg-[#0f172a] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-400 text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-center"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
