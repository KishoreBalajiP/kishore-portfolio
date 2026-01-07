import { Github, Download, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  deployment: string;
  image: string;
  liveUrl: string;
  githubBackendUrl?: string;
  githubFrontendUrl?: string;
  report: string;
  debugReport: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "JayaStores E-Commerce Platform",
      description:
        "A complete e-commerce system with authentication, secure checkout, AI chatbot, admin dashboard, Email notifications. Backend: AWS Lambda, Frontend: Vercel, Database: Neon PostgreSQL.",
      stack: ["React", "Node.js", "Express.js", "PostgreSQL", "AWS Lambda"],
      deployment: "AWS",
      image: "/projects/project1.png",
      liveUrl: "https://jayastores.vercel.app",
      githubBackendUrl: "https://github.com/KishoreBalajiP/eco_backend",
      githubFrontendUrl: "https://github.com/KishoreBalajiP/eco_frontend",
      report: "/pdf/jayastores-project-report.pdf",
      debugReport: "/pdf/jayastores-debug-report.pdf",
    },
    {
      id: 2,
      title: "VivasayiAI - GenAI Farming Assistant",
      description:
        "A bilingual GenAI assistant for farmers with RAG pipeline, weather data, voice input, domain knowledge. Backend on AWS Lambda+Docker, frontend on Vercel.",
      stack: ["React", "Node.js", "LangChain", "ChromaDB", "MongoDB", "AWS"],
      deployment: "AWS Lambda + Vercel",
      image: "/projects/project2.png",
      liveUrl: "https://vivasayiai.vercel.app",
      githubBackendUrl: "https://github.com/KishoreBalajiP/VivasayiAI",
      githubFrontendUrl: "https://github.com/KishoreBalajiP/VivasayiAI-Frontend",
      report: "/pdf/vivasayiai-project-report.pdf",
      debugReport: "/pdf/vivasayiai-debug-report.pdf",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 w-full overflow-hidden text-white bg-gradient-to-b from-black via-[#0f1522] to-[#101828]"
    >
      <motion.div
        className="absolute inset-0 opacity-[0.25] blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(0,120,255,0.35), transparent 70%), radial-gradient(circle at 70% 80%, rgba(0,255,200,0.30), transparent 70%)",
        }}
        animate={{ x: ["0%", "5%", "-5%", "0%"], y: ["0%", "-4%", "4%", "0%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-6">

        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Full-stack and cloud-native applications built using industry practices.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white/10 border border-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:scale-[1.03] cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 line-clamp-2 mb-3">{project.description}</p>
                <p className="text-sky-300 hover:text-sky-400 flex items-center gap-1 font-medium">
                  View Details
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#0f1522] text-white rounded-xl max-w-3xl w-full p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto"
              style={{ zIndex: 9999 }} // ensures X is always visible
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
                style={{ zIndex: 10000 }}
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              {/* Image - NO link click */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 sm:h-80 object-contain mb-6 rounded-lg cursor-pointer"
              />

              <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">{selectedProject.description}</p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">

                {/* Live Demo First */}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-sky-600 px-4 py-2 rounded-lg hover:bg-sky-700 w-full sm:w-auto"
                  >
                    Live Demo
                  </a>
                )}

                {selectedProject.githubBackendUrl && (
                  <a
                    href={selectedProject.githubBackendUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 w-full sm:w-auto"
                  >
                    <Github size={16} />
                    Backend
                  </a>
                )}

                {selectedProject.githubFrontendUrl && (
                  <a
                    href={selectedProject.githubFrontendUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 w-full sm:w-auto"
                  >
                    <Github size={16} />
                    Frontend
                  </a>
                )}

                <a
                  href={selectedProject.report}
                  download
                  className="flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
                >
                  <Download size={16} />
                  Report
                </a>

                {/* <a
                  href={selectedProject.debugReport}
                  download
                  className="flex items-center justify-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 w-full sm:w-auto"
                >
                  <Download size={16} />
                  Debug
                </a> */}

                <button
                  className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 w-full sm:w-auto"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
