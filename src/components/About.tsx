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
      className="relative min-h-screen w-full overflow-hidden text-white bg-gradient-to-b from-black via-[#0f1522] to-[#101828] flex items-center justify-center px-6 py-12 sm:py-20"
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-30 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(0,120,255,0.35), transparent 70%), radial-gradient(circle at 70% 80%, rgba(0,255,200,0.28), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl sm:max-w-2xl text-center">
        {/* Name */}
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Kishore Balaji P
        </h1>

        {/* Subtitle */}
        <h2
          className={`text-base sm:text-lg md:text-xl text-sky-200 mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software Developer | AWS Solutions Architect
        </h2>

        {/* Bio */}
        <p
          className={`text-base sm:text-lg text-gray-300 leading-relaxed mx-auto mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          AWS Certified Solution Architect and motivated Software Developer with
          hands-on experience in building scalable web applications and implementing
          cloud and DevOps practices. Seeking a Software Developer Intern role to
          contribute to innovative projects and further develop technical expertise.
        </p>

        {/* Resume Button */}
        <a
          href="/pdf/resume.pdf"
          download="Kishore_Balaji_Resume.pdf"
          className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-xl px-8 py-4 rounded-xl shadow-lg font-semibold hover:bg-white/20 transition-all ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Download size={22} />
          Download My Resume
        </a>
      </div>
    </section>
  );
}
