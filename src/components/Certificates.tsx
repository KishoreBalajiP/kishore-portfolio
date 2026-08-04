import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';
import Container from './ui/Container';
import Reveal from './ui/Reveal';

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

const certificates: Certificate[] = [
  {
    id: 5,
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2025',
    expiry: 'Valid until 2028',
    description:
      'Validated skills in designing scalable, resilient, and secure cloud solutions using AWS services.',
    images: [
      '/certificates/aws-saa-1.jpg',
      '/certificates/aws-saa-2.png',
      '/certificates/aws-saa-3.jpg',
    ],
    verifyLink:
      'https://www.credly.com/badges/6e171721-2c30-43b0-a00f-7b264d450fe0/public_url',
  },
  {
    id: 3,
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    date: '2024',
    description:
      'Certification demonstrating proficiency in Python programming fundamentals and problem-solving.',
    images: ['/certificates/hackerrank-python.png'],
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
    images: ['/certificates/hackerrank-java.png'],
    file: '/certificates/hackerrank-java.pdf',
    verifyLink: 'https://www.hackerrank.com/certificates/iframe/a4b31aefdfe5',
  },
  {
    id: 6,
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    date: '2024',
    description:
      'Certification demonstrating understanding of SQL fundamentals, queries, and database operations.',
    images: ['/certificates/hackerrank-sql.png'],
    verifyLink: 'https://www.hackerrank.com/certificates/iframe/9f1230ec4c41',
  },
  {
    id: 1,
    title: 'IBM DevOps Fundamentals',
    issuer: 'IBM',
    date: '2025',
    description:
      'Comprehensive training in DevOps practices, CI/CD pipelines, and modern development workflows.',
    images: ['/certificates/ibm-devops.png'],
    file: '/certificates/ibm-devops.pdf',
    verifyLink:
      'https://courses.vit.skillsnetwork.site/certificates/9b48215b7c63400abd616dd6b7e36d5b',
  },
  {
    id: 2,
    title: 'IBM Agile and Design Thinking',
    issuer: 'IBM',
    date: '2025',
    description:
      'Training in Agile methodologies, Scrum framework, and user-centered design thinking principles.',
    images: ['/certificates/ibm-agile.png'],
    file: '/certificates/ibm-agile.pdf',
    verifyLink:
      'https://courses.vit.skillsnetwork.site/certificates/904610c2705b4549a8840a24281692cf',
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedCert) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCert, currentIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (selectedCert && currentIndex < selectedCert.images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const openCert = (cert: Certificate) => {
    setSelectedCert(cert);
    setCurrentIndex(0);
  };

  return (
    <section
      id="certificates"
      aria-label="Certificates"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      <Container>
        <div className="section-y">
          <Reveal>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div>
                <p className="kicker">Credentials</p>
                <h2 className="mt-3 font-display text-[26px] font-semibold leading-[1.15] tracking-tight text-ink-900 sm:text-[30px] lg:text-[34px]">
                  Certificates &amp; Verification
                </h2>
              </div>
              <p className="max-w-[380px] text-[14px] text-slate-600 lg:text-right">
                Professional certifications in cloud architecture, DevOps, and core
                programming.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <Reveal key={cert.id} delay={index * 40} className="h-full">
                <article
                  className="card-surface flex h-full cursor-pointer flex-col overflow-hidden"
                  onClick={() => openCert(cert)}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#F3F6FA]">
                    <img
                      src={cert.images[0]}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={270}
                      className="h-full w-full object-contain p-2"
                    />
                    <span className="absolute right-2 top-2 hidden max-w-[calc(100%-1rem)] truncate rounded-full border border-brand-600/20 bg-ink-900/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm backdrop-blur-md md:inline-block">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-3 md:gap-2.5 md:p-4">
                    <h3 className="font-display text-[14px] font-semibold leading-[1.3] text-slate-900 md:text-[17px]">
                      {cert.title}
                    </h3>
                    <p className="hidden text-[14px] leading-[1.6] text-slate-600 md:block">
                      {cert.description}
                    </p>

                    <div className="hidden flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] font-medium text-slate-700 md:flex">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} aria-hidden="true" className="text-slate-500" />
                        <span>{cert.date}</span>
                      </span>
                      {cert.expiry && (
                        <span className="inline-flex items-center gap-1 text-success-600">
                          <BadgeCheck size={14} aria-hidden="true" />
                          <span>{cert.expiry}</span>
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => openCert(cert)}
                      className="mt-auto inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-line bg-white px-4 text-[13px] font-semibold text-brand-700 transition-all duration-200 hover:border-brand-600 hover:bg-brand-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                    >
                      View Certificate
                      <ExternalLink size={13} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/70 p-3 backdrop-blur-sm sm:p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-xl border border-line bg-white p-4 shadow-modal sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSelectedCert(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-slate-600 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] transition-colors hover:bg-[#F3F6FA] hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                <X size={16} aria-hidden="true" />
              </button>

              <div className="relative">
                <motion.img
                  key={currentIndex}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -100) handleNext();
                    if (info.offset.x > 100) handlePrev();
                  }}
                  src={selectedCert.images[currentIndex]}
                  alt={`${selectedCert.title} certificate ${currentIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  width={1024}
                  height={640}
                  className="max-h-[52svh] w-full cursor-grab rounded-xl border border-line bg-[#F3F6FA] object-contain p-2 active:cursor-grabbing"
                />

                {selectedCert.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      aria-label="Previous certificate image"
                      className={`absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-colors ${
                        currentIndex === 0
                          ? 'cursor-not-allowed bg-slate-200 text-slate-400'
                          : 'bg-white/95 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <ChevronLeft size={18} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={currentIndex === selectedCert.images.length - 1}
                      aria-label="Next certificate image"
                      className={`absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-colors ${
                        currentIndex === selectedCert.images.length - 1
                          ? 'cursor-not-allowed bg-slate-200 text-slate-400'
                          : 'bg-white/95 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <ChevronRight size={18} aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-[14px] text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
                  {selectedCert.issuer}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} aria-hidden="true" />
                  {selectedCert.date}
                </span>
              </div>

              <h3 className="mt-2 font-display text-[20px] font-bold leading-[1.3] text-slate-900">
                {selectedCert.title}
              </h3>

              {selectedCert.expiry && (
                <p className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-medium text-slate-600">
                  <BadgeCheck size={14} className="text-success-600" aria-hidden="true" />
                  {selectedCert.expiry}
                </p>
              )}

              <p className="mt-3 text-[14px] leading-[1.7] text-slate-600">
                {selectedCert.description}
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <a
                  href={selectedCert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 sm:flex-none"
                >
                  Verify Certificate
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 text-[14px] font-semibold text-slate-700 transition-all duration-200 hover:bg-[#F3F6FA] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 sm:flex-none"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}