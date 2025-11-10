import { motion } from "framer-motion";

const technicalSkills = [
  { 
    name: "AWS Solution Architect", 
    logo: "https://cdn-icons-png.flaticon.com/512/873/873120.png" 
  },
  { 
    name: "DevOps", 
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png" 
  },
  { 
    name: "JavaScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
  },
  { 
    name: "MERN Stack", 
    logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" 
  },
  { 
    name: "PostgreSQL", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
  },
  { 
    name: "Git / GitHub", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
  },
  { 
    name: "REST API", 
    logo: "https://cdn-icons-png.flaticon.com/512/1688/1688400.png" 
  }
];

const softSkills = [
  { name: "Problem Solving", logo: "https://cdn-icons-png.flaticon.com/512/1995/1995612.png" },
  { name: "Teamwork", logo: "https://cdn-icons-png.flaticon.com/512/1995/1995503.png" },
  { name: "Time Management", logo: "https://cdn-icons-png.flaticon.com/512/2920/2920224.png" },
  { name: "Adaptability", logo: "https://cdn-icons-png.flaticon.com/512/1995/1995543.png" },
  { name: "Communication", logo: "https://cdn-icons-png.flaticon.com/512/1995/1995667.png" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-black via-[#0f1522] to-[#101828] text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold mb-10 sm:mb-12"
      >
        <span className="bg-gradient-to-r from-white via-sky-200 to-teal-200 bg-clip-text text-transparent">
          Skills & Expertise
        </span>
      </motion.h2>

      {/* Technical Skills */}
      <div className="max-w-6xl mx-auto px-6 mb-14 sm:mb-16">
        <h3 className="text-xl sm:text-2xl font-bold mb-6">Technical Skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-white/10 border border-white/10 rounded-2xl backdrop-blur-md p-4 sm:p-6 flex flex-col items-center hover:scale-105 transition-all"
            >
              <img src={skill.logo} className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
              <p className="text-xs sm:text-sm text-teal-200 font-semibold text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-6">Soft Skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {softSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-white/10 border border-white/10 rounded-2xl backdrop-blur-md p-4 sm:p-6 flex flex-col items-center hover:scale-105 transition-all"
            >
              <img src={skill.logo} className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
              <p className="text-xs sm:text-sm text-teal-200 font-semibold text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
