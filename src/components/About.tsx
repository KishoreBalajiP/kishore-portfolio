import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden text-white 
      bg-gradient-to-b from-black via-[#0f1522] to-[#101828]
      flex items-center justify-center px-4 sm:px-6 py-10 sm:py-20"
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-30 blur-[90px] sm:blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(0,120,255,0.35), transparent 70%), radial-gradient(circle at 70% 80%, rgba(0,255,200,0.28), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[min(92vw,42rem)] text-center">
        {/* Name */}
        <h1
          className={`font-extrabold mb-4
          text-[clamp(1.75rem,6vw,3.75rem)]
          bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent
          transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Kishore Balaji P
        </h1>

        {/* Subtitle */}
        <h2
          className={`mb-6 text-sky-200
          text-[clamp(0.95rem,3.5vw,1.25rem)]
          transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          AWS Solutions Architect | DevOps Engineer
        </h2>

        {/* Bio */}
        <p
          className={`mx-auto mb-10 leading-relaxed text-gray-300
          text-[clamp(0.95rem,3.8vw,1.1rem)]
          transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
AWS Certified Solutions Architect - Associate and DevOps Engineer with hands-on experience across the full application lifecycle, specializing in scalable and secure AWS cloud architectures, CI/CD pipelines, Docker-based containerization, and infrastructure automation, with a strong focus on improving deployment efficiency, system reliability, and performance at scale.        </p>

        {/* Resume Button */}
        <a
          href="/pdf/resume.pdf"
          download="Kishore_Balaji_Resume.pdf"
          className={`inline-flex items-center gap-2
          px-6 sm:px-8 py-3 sm:py-4
          text-[clamp(0.9rem,3.5vw,1rem)]
          bg-white/10 border border-white/20 backdrop-blur-xl
          rounded-xl shadow-lg font-semibold
          hover:bg-white/20 transition-all ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Download size={20} />
          Download My Resume
        </a>
      </div>
    </section>
  );
}
