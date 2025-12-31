import { Calendar, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  images: string[];
  expiry?: string;
  file?: string;
  verifyLink: string;
}

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedCert) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedCert, currentIndex]);

  const handlePrev = () => {
    if (!selectedCert) return;
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!selectedCert) return;
    if (currentIndex < selectedCert.images.length - 1)
      setCurrentIndex((prev) => prev + 1);
  };

  const certificates: Certificate[] = [
    {
      id: 5,
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2025",
      expiry: "Valid until 2028",
      description:
        "Validated skills in designing scalable, resilient, and secure cloud solutions using AWS services.",
      images: [
        "/certificates/aws-saa-1.jpg",
        "/certificates/aws-saa-2.png",
        "/certificates/aws-saa-3.jpg",
      ],
      verifyLink:
        "https://www.credly.com/badges/6e171721-2c30-43b0-a00f-7b264d450fe0/public_url",
    },

    {
      id: 3,
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "2024",
      description:
        "Certification demonstrating proficiency in Python programming fundamentals and problem-solving.",
      images: ["/certificates/hackerrank-python.png"],
      file: "/certificates/hackerrank-python.pdf",
      verifyLink:
        "https://www.hackerrank.com/certificates/iframe/a71532c85c45",
    },

    {
      id: 4,
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "2024",
      description:
        "Certification covering core Java concepts, OOP principles, and coding best practices.",
      images: ["/certificates/hackerrank-java.png"],
      file: "/certificates/hackerrank-java.pdf",
      verifyLink:
        "https://www.hackerrank.com/certificates/iframe/a4b31aefdfe5",
    },

    {
      id: 6,
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2024",
      description:
        "Certification demonstrating understanding of SQL fundamentals, queries, and database operations.",
      images: ["/certificates/hackerrank-sql.png"],
      verifyLink:
        "https://www.hackerrank.com/certificates/iframe/9f1230ec4c41",
    },

    {
      id: 1,
      title: "IBM DevOps Fundamentals",
      issuer: "IBM",
      date: "2025",
      description:
        "Comprehensive training in DevOps practices, CI/CD pipelines, and modern development workflows.",
      images: ["/certificates/ibm-devops.png"],
      file: "/certificates/ibm-devops.pdf",
      verifyLink:
        "https://courses.vit.skillsnetwork.site/certificates/9b48215b7c63400abd616dd6b7e36d5b",
    },

    {
      id: 2,
      title: "IBM Agile and Design Thinking",
      issuer: "IBM",
      date: "2025",
      description:
        "Training in Agile methodologies, Scrum framework, and user-centered design thinking principles.",
      images: ["/certificates/ibm-agile.png"],
      file: "/certificates/ibm-agile.pdf",
      verifyLink:
        "https://courses.vit.skillsnetwork.site/certificates/904610c2705b4549a8840a24281692cf",
    },
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative py-20 w-full overflow-hidden text-white bg-gradient-to-b from-black via-[#0f1522] to-[#101828]"
    >
      <motion.div
        className="absolute inset-0 opacity-[0.25] blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(0,120,255,0.35), transparent 65%), radial-gradient(circle at 80% 20%, rgba(0,255,200,0.30), transparent 65%), radial-gradient(circle at 50% 80%, rgba(150,80,255,0.35), transparent 70%)",
        }}
        animate={{ x: ["0%", "6%", "-4%", "0%"], y: ["0%", "-4%", "4%", "0%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certificates</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications showcasing expertise in development, DevOps, and programming.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`rounded-xl bg-white/10 border border-white/10 shadow-lg overflow-hidden backdrop-blur-md transition-all duration-1000 hover:scale-105 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => {
                setSelectedCert(cert);
                setCurrentIndex(0);
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.images[0]}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-300 mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
                <button className="flex items-center gap-2 text-sky-300 font-medium hover:text-sky-400">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-[#0f1522] text-white rounded-xl max-w-3xl w-full p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>

              {/* Arrows Disabled on Limit */}
              {selectedCert.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`absolute left-4 top-[45%] -translate-y-1/2 p-2 rounded-full backdrop-blur-sm ${
                      currentIndex === 0
                        ? "bg-gray-500/40 cursor-not-allowed"
                        : "bg-black/45 hover:bg-black/70"
                    }`}
                  >
                    <ChevronLeft size={30} />
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={currentIndex === selectedCert.images.length - 1}
                    className={`absolute right-4 top-[45%] -translate-y-1/2 p-2 rounded-full backdrop-blur-sm ${
                      currentIndex === selectedCert.images.length - 1
                        ? "bg-gray-500/40 cursor-not-allowed"
                        : "bg-black/45 hover:bg-black/70"
                    }`}
                  >
                    <ChevronRight size={30} />
                  </button>
                </>
              )}

              {/* Swipe Image */}
              <motion.img
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100 && currentIndex < selectedCert.images.length - 1)
                    handleNext();
                  if (info.offset.x > 100 && currentIndex > 0)
                    handlePrev();
                }}
                src={selectedCert.images[currentIndex]}
                alt={`${selectedCert.title} ${currentIndex + 1}`}
                className="w-full h-48 sm:h-80 object-contain rounded-lg mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedCert.title}</h3>
              <p className="text-gray-300 mb-2 text-sm sm:text-base">{selectedCert.issuer}</p>

              <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm sm:text-base">
                <Calendar size={16} />
                <span>{selectedCert.date}</span>
              </div>

              {selectedCert.expiry && (
                <p className="text-gray-400 text-sm mb-4">{selectedCert.expiry}</p>
              )}

              <p className="text-gray-200 mb-6 text-sm sm:text-base">{selectedCert.description}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  <ExternalLink size={20} /> Verify Certificate
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/10 transition-colors"
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
