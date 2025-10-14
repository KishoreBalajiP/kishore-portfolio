import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center text-blue-600 text-8xl font-bold">
                KB
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Kishore Balaji P
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-200 mb-6">
              Software Developer
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Seeking a Software Developer Intern role where I can apply my skills in
                designing and building scalable web applications to contribute to
                innovative projects. Skilled in AWS Solution Architecture and DevOps
                practices.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:+916381858714"
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Phone size={20} />
                +91 6381858714
              </a>
              <a
                href="mailto:kishorebalaji880@gmail.com"
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Mail size={20} />
                Email
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kishore-balaji-p-b765672ab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-50 transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/KishoreBalajiP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-50 transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
