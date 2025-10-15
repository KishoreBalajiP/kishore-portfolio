import { Github, Download, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  features: string[];
  deployment: string;
  image: string;
  liveUrl: string;
  githubBackendUrl?: string;
  githubFrontendUrl?: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'JayaStores E-Commerce Platform',
      description:
        'A comprehensive e-commerce solution with user authentication, product browsing, shopping cart, and secure payments integration.',
      stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS'],
      features: [
        'Responsive UI with modern design',
        'User authentication and authorization',
        'Product browsing and search',
        'Shopping cart and checkout',
        'Secure payment integration (Razorpay)',
        'AI chatbot for customer support',
        'Order management',
        'Cloud deployment on AWS(lambda), vercel and neon for database',
      ],
      deployment: 'AWS',
      image: 'project1',
      liveUrl: 'https://jayastores.vercel.app',
      githubBackendUrl: 'https://github.com/KishoreBalajiP/eco_backend',
      githubFrontendUrl: 'https://github.com/KishoreBalajiP/jayastores-frontend',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Full-stack applications showcasing modern web development practices and scalable architectures.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="md:flex">
                {/* Left Box */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:w-2/5 bg-gradient-to-br from-blue-500 to-blue-700 p-12 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="text-white text-center">
                    <ExternalLink size={64} className="mx-auto mb-4" />
                    <p className="text-xl font-semibold">{project.title}</p>
                  </div>
                </a>

                {/* Right Section */}
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <a
                      href={project.githubBackendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all flex-2 text-center"
                    >
                      <Github size={18} />
                      Backend
                    </a>

                    <a
                      href={project.githubFrontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all flex-2 text-center"
                    >
                      <Github size={18} />
                      Frontend
                    </a>

                    <a
                      href="/pdf/project-report.pdf"
                      download
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all flex-2 text-center"
                    >
                      <Download size={18} />
                      Project Report
                    </a>

                    <a
                      href="/pdf/debug-report.pdf"
                      download
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-all flex-2 text-center"
                    >
                      <Download size={18} />
                      Debug Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
