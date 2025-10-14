import { Download, GraduationCap, Code, Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my education, technical skills, and projects.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {/* Education */}
          <div
            className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-1000 delay-100 hover:shadow-xl hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <GraduationCap className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Education</h3>
            <p className="text-gray-600 text-center">
              B.Tech in Computer Science & Engineering (CSE CORE) <br />
              VIT-AP University
            </p>
          </div>

          {/* Technical Skills */}
          <div
            className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-1000 delay-200 hover:shadow-xl hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Code className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Technical Skills</h3>
            <p className="text-gray-600 text-center">
              MERN Stack, AWS Solution Architect (90%), React.js, Python, PostgreSQL, Git/GitHub
            </p>
          </div>

          {/* Projects */}
          <div
            className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-1000 delay-300 hover:shadow-xl hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Briefcase className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Projects</h3>
            <p className="text-gray-600 text-center">
              Developed full-stack web applications delivering scalable, maintainable real-world solutions.
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div
          className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="/pdf/resume.pdf"
            download="Kishore_Balaji_Resume.pdf"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
