import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

const Skills = () => {
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

const technicalSkills: Skill[] = [
  { name: 'AWS Solution Architect', level: 90, category: 'technical' },
  { name: 'Devops', level: 80, category: 'technical' },
  { name: 'JavaScript', level: 70, category: 'technical' },
  { name: 'Python', level: 60, category: 'technical' },
  { name: 'MERN Stack', level: 75, category: 'technical' },
  { name: 'PostgreSQL', level: 75, category: 'technical' },
  { name: 'Git/GitHub', level: 85, category: 'technical' },
  { name: 'REST API', level: 70, category: 'technical' },
];


  const softSkills: Skill[] = [
    { name: 'Problem-solving', level: 70, category: 'soft' },
    { name: 'Teamwork', level: 85, category: 'soft' },
    { name: 'Time Management', level: 85, category: 'soft' },
    { name: 'Adaptability', level: 90, category: 'soft' },
    { name: 'Communication', level: 80, category: 'soft' },
  ];

  const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => (
    <div
      className={`transition-all duration-1000`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className="text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1500 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive set of technical and interpersonal skills developed through
            projects and continuous learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 100} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-green-600 rounded-full" />
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
