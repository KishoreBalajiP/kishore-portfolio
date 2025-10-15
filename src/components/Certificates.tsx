import { Download, Calendar, ExternalLink, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;      // PNG preview
  file: string;       // PDF file
  verifyLink: string; // Official verification link
}

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
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

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'IBM DevOps Fundamentals',
      issuer: 'IBM',
      date: '2024',
      description:
        'Comprehensive training in DevOps practices, CI/CD pipelines, and modern development workflows.',
      image: '/certificates/ibm-devops.png',
      file: '/certificates/ibm-devops.pdf',
      verifyLink: 'https://courses.vit.skillsnetwork.site/certificates/9b48215b7c63400abd616dd6b7e36d5b',
    },
    {
      id: 2,
      title: 'IBM Agile and Design Thinking',
      issuer: 'IBM',
      date: '2024',
      description:
        'Training in Agile methodologies, Scrum framework, and user-centered design thinking principles.',
      image: '/certificates/ibm-agile.png',
      file: '/certificates/ibm-agile.pdf',
      verifyLink: 'https://courses.vit.skillsnetwork.site/certificates/904610c2705b4549a8840a24281692cf',
    },
    {
      id: 3,
      title: 'Python (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      description:
        'Certification demonstrating proficiency in Python programming fundamentals and problem-solving.',
      image: '/certificates/hackerrank-python.png',
      file: '/certificates/hackerrank-python.pdf',
      verifyLink: 'https://www.hackerrank.com/certificates/iframe/a71532c85c45',
    },
    {
      id: 4,
      title: 'Java (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      description:
        'Certification covering core Java concepts, OOP principles, and coding best practices.',
      image: '/certificates/hackerrank-java.png',
      file: '/certificates/hackerrank-java.pdf',
      verifyLink: 'https://www.hackerrank.com/certificates/iframe/a4b31aefdfe5',
    },
  ];

  return (
    <section id="certificates" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional certifications showcasing expertise in development, DevOps, and programming.
          </p>
        </div>

        {/* Certificates Grid */}
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
              {/* Certificate Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
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

        {/* Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full p-6 relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>

              {/* Preview Image */}
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-80 object-contain mb-6 rounded-lg"
              />

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCert.title}</h3>
              <p className="text-gray-600 mb-2">{selectedCert.issuer}</p>
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <Calendar size={16} />
                <span>{selectedCert.date}</span>
              </div>
              <p className="text-gray-700 mb-6">{selectedCert.description}</p>

              <div className="flex flex-wrap gap-4">
                {/* Download PDF */}
                <a
                  href={selectedCert.file}
                  download
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} />
                  Download PDF
                </a>

                {/* Verification Link */}
                <a
                  href={selectedCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  Verify Certificate
                </a>

                {/* Close */}
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
