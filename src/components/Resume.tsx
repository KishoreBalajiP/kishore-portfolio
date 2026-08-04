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
    <section id="resume" ref={sectionRef} className="bg-canvas">
      <div className="container-wide">
        <div className="section-y">
          {/* Section Header */}
          <div
            className={`text-center mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-section font-semibold text-ink-900 mb-3">Resume</h2>
            <p className="text-[14px] text-slate-600 max-w-2xl mx-auto">
              A comprehensive overview of my education, technical skills, and projects.
            </p>
          </div>

          {/* Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-3 mb-8">
            {/* Education */}
            <div
              className={`card-surface p-5 transition-all duration-1000 delay-100 hover:shadow-card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center mb-3 mx-auto">
                <GraduationCap className="text-brand-600" size={18} />
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-2 text-center">Education</h3>
              <p className="text-[13px] text-slate-600 text-center">
                B.Tech in Computer Science & Engineering (CSE CORE) <br />
                VIT-AP University
              </p>
            </div>

            {/* Technical Skills */}
            <div
              className={`card-surface p-5 transition-all duration-1000 delay-200 hover:shadow-card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-10 h-10 bg-success-50 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Code className="text-success-600" size={18} />
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-2 text-center">Technical Skills</h3>
              <p className="text-[13px] text-slate-600 text-center">
                Skilled in AWS Cloud and DevOps with a strong foundation in modern web development.
              </p>
            </div>

            {/* Projects */}
            <div
              className={`card-surface p-5 transition-all duration-1000 delay-300 hover:shadow-card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Briefcase className="text-orange-600" size={18} />
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-2 text-center">Projects</h3>
              <p className="text-[13px] text-slate-600 text-center">
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
              className="inline-flex h-10 items-center gap-2 bg-brand-600 text-white px-5 rounded-lg font-medium hover:bg-brand-700 transition-all hover:shadow-card-hover"
            >
              <Download size={16} />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
