// All site content in one place.

export const profile = {
  name: 'Kishore Balaji P',
  handle: 'KishoreBalajiP',
  roles: ['Software Developer', 'Full Stack Developer', 'Cloud Engineer', 'Backend Engineer'],
  tagline: 'CLOUD • BACKEND • DEVOPS',
  bio: 'A Software Engineer focused on building scalable backend systems, reliable cloud infrastructure on AWS, and automated CI/CD pipelines that keep applications running smoothly in production.',
  email: 'kishorebalaji880@gmail.com',
  location: 'Chennai, Tamil Nadu',
  resume: '/pdf/resume.pdf',
  github: 'https://github.com/KishoreBalajiP',
  linkedin: 'https://www.linkedin.com/in/KishoreBalajiP',
};

// Services: used in structured data, llms.txt and the chatbot.
export const services = [
  'Backend & REST API development (Node.js, Express)',
  'AWS cloud setup and deployment (EC2, Lambda, S3)',
  'CI/CD pipelines and Docker containerization',
  'Database design (MongoDB, PostgreSQL)',
  'Full stack web applications',
];

export const skills = [
  'AWS', 'Node.js', 'Express.js', 'JavaScript', 'Java', 'Docker', 'CI/CD', 'MongoDB',
  'PostgreSQL', 'Redis', 'BullMQ', 'REST APIs', 'Git',
];

export const experience = [
  {
    company: 'Buymyplot',
    type: 'Internship',
    role: 'Full Stack Intern',
    period: 'June 2026 - Present',
    place: 'Remote',
    points: [
      'Stabilized the first production version of the real-estate platform by fixing critical frontend, backend and authentication issues, helping onboard 150+ users.',
      'Built a Meta Ads marketing workflow so users can promote their property listings directly from the platform, with no manual campaign setup.',
      'Deployed and maintain the production platform on AWS EC2, keeping releases reliable and downtime to a minimum.',
    ],
  },
];

export const education = [
  {
    school: 'VIT-AP University',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2023 - 2027',
    place: 'Amaravati, Andhra Pradesh',
  },
];

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  live: string;
  frontend: string;
  backend: string;
  report: string;
};

export const projects: Project[] = [
  {
    title: 'Analivo - Multi-tenant SaaS Analytics Platform',
    summary:
      'Built a multi-tenant analytics SaaS with 145 REST endpoints, tenant isolation and 6 built-in RBAC roles. Teams connect data, ask questions in plain English and publish dashboards, reports, alerts and embeds.',
    highlights: [
      '145 REST endpoints with server-side tenant isolation and 6 RBAC roles',
      '4 connector types and 6 visualization types, synced in the background with BullMQ and Redis',
      'AI query planner whose output must pass the engine validator before it runs',
      'Audit logging, AWS S3 object storage and Pino structured logs',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'React', 'AWS S3'],
    live: 'https://analivo.vercel.app',
    frontend: 'https://github.com/KishoreBalajiP/saas-analytics-frontend',
    backend: 'https://github.com/KishoreBalajiP/saas-analytics-backend',
    report: '/pdf/analivo-project-report.pdf',
  },
  {
    title: 'VivasayiAI - GenAI Farming Assistant',
    summary:
      'Built an AI agricultural assistant that gives Tamil Nadu farmers context-aware guidance in Tamil or English, using RAG over curated agricultural knowledge, plus an auditable crop-loss claim pipeline.',
    highlights: [
      'RAG with LangChain, Gemini, Cohere embeddings and Chroma',
      'Dockerized backend on AWS Lambda, deployed by GitHub Actions',
      'Amazon Cognito sign-in and Amazon S3 for images and documents',
      'AI overclaiming detection that flags unsupported claims for human review',
    ],
    stack: ['Node.js', 'AWS', 'RAG', 'LangChain', 'MongoDB', 'Docker', 'Cognito', 'S3'],
    live: 'https://vivasayiai.vercel.app',
    frontend: 'https://github.com/KishoreBalajiP/VivasayiAI-Frontend',
    backend: 'https://github.com/KishoreBalajiP/VivasayiAI',
    report: '/pdf/vivasayiai-project-report.pdf',
  },
];

export const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    period: '2025 - 2028',
    verify: 'https://www.credly.com/badges/6e171721-2c30-43b0-a00f-7b264d450fe0/public_url',
  },
  {
    title: 'IBM DevOps Fundamentals',
    issuer: 'IBM',
    period: '2025',
    verify: 'https://courses.vit.skillsnetwork.site/certificates/9b48215b7c63400abd616dd6b7e36d5b',
  },
];
