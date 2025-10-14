import { Award, Download, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
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

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'IBM DevOps Fundamentals',
      issuer: 'IBM',
      date: '2024',
      description: 'Comprehensive training in DevOps practices, CI/CD pipelines, and modern development workflows',
    },
    {
      id: 2,
      title: 'IBM Agile and Design Thinking',
      issuer: 'IBM',
      date: '2024',
      description: 'Training in Agile methodologies, Scrum framework, and user-centered design thinking principles',
    },
  ];

  return (
    <section id="certificates" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in modern development practices
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000 hover:shadow-2xl hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center">
                <Award size={80} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
                <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white rounded-xl max-w-2xl w-full p-8 animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCert.title}</h3>
                  <p className="text-gray-600">{selectedCert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{selectedCert.description}</p>
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <Calendar size={16} />
                <span>{selectedCert.date}</span>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  <Download size={20} />
                  Download Certificate
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
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

export default Certificates;
