export const personalInfo = {
  name: 'Nihar Kothapalli',
  title: 'Software Engineer',
  roles: [
    'SOFTWARE ENGINEER',
    'DATA ENGINEER',
    'FULL STACK DEVELOPER',
    'JAVA DEVELOPER',
    'BUILDING SCALABLE SOFTWARE',
    'BUILDING DATA PIPELINES',
    'AI APPLICATION BUILDER',
  ],
  location: 'Bhimavaram, Andhra Pradesh, India',
  email: 'niharkothapalli@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nihar-kothapalli-7b1443342',
  github: 'https://github.com/Niharkothapalli',
  about: `Software Engineering enthusiast pursuing a B.Tech in Electronics and Communication Engineering with a Minor in Computer Science. I enjoy building scalable applications, reliable data pipelines, and AI-powered solutions that solve real-world problems. With hands-on experience in full-stack development, Data Engineering, and Generative AI, I work with technologies such as Java, SQL, PySpark, Databricks, and modern web technologies. I focus on turning ideas into practical, maintainable digital products while continuously strengthening my problem-solving and software engineering skills. Currently seeking opportunities in Software Engineering, Full-Stack Development, and Data Engineering.`,
}

export const education = [
  {
    degree: 'B.Tech – Electronics & Communication Engineering',
    school: 'Vishnu Institute of Technology',
    cgpa: '8.75',
    period: '2023 – 2027',
    highlight: 'Minor in Computer Science (CGPA: 9.50)',
  },
]

export const skills = {
  'Languages': [
    'Java', 'Python', 'SQL', 'JavaScript',
  ],
  'Data Engineering': [
    'PySpark', 'Apache Spark', 'Databricks', 'Delta Lake', 'ETL / ELT', 'Data Pipelines', 'Data Transformation',
  ],
  'AI & Generative AI': [
    'RAG', 'FAISS', 'Gemini API', 'Embeddings', 'Sentence Transformers', 'Prompt Engineering',
  ],
  'CS Fundamentals': [
    'Data Structures & Algorithms', 'OOPs', 'DBMS', 'Operating Systems', 'Computer Networks',
  ],
    'Frontend': [
    'React', 'HTML5', 'CSS3',
  ],
  'Backend & Databases': [
    'Node.js', 'Express.js', 'MySQL', 'Firebase',
  ],
    'Tools & Platforms': [
    'Git', 'GitHub', 'Linux', 'VS Code', 'Figma',
  ],
}

export const experience = [
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Skill Dzire',
    period: 'May 2025 – June 2025',
    type: 'Internship',
    points: [
      'Developed and deployed 6+ responsive web applications using modern frontend technologies.',
      'Integrated REST APIs and optimized data flow between frontend and backend systems.',
      'Built reusable dynamic UI components, improving development efficiency by 30%.',
      'Improved application reliability through debugging, testing, and code optimization.',
    ],
  },
  {
    role: 'AI-ML Virtual Intern',
    company: 'AICTE–EduSkills',
    period: 'June 2026 – August 2026',
    type: 'Virtual Internship',
    points: [
      'Completed an 8-week AI-ML virtual internship focused on practical machine learning concepts and applications.',
      'Worked through AI/ML workflows involving data preparation, model development, and evaluation.',
      'Applied machine learning concepts to practical problem-solving and real-world use cases.',
      'Gained hands-on exposure to AI/ML techniques and their application in developing intelligent solutions.',
    ],
  },
]

export const projects = [
  {
    title: 'RetailPulse',
    description:
      'End-to-end retail data engineering platform implementing a Medallion Architecture. Ingests Olist e-commerce data into Bronze, applies data quality and validation in Silver, and transforms the data into Gold-layer analytical models for business insights.',
    tech: ['Databricks', 'PySpark', 'Python', 'Delta Lake', 'SQL'],
    features: ['BRONZE // RAW INGESTION', 'SILVER // DATA QUALITY', 'GOLD // BUSINESS ANALYTICS', 'SALES & CUSTOMER INSIGHTS', 'PRODUCT & PAYMENT ANALYSIS'],
    github: 'https://github.com/Niharkothapalli/Retailpulse-Databricks',
    demo: null,
    icon: '📊',
  },
  {
    title: 'CareerLens AI',
    description:
      'AI-powered resume analysis and career guidance platform that evaluates ATS compatibility, identifies skill gaps, delivers personalized career recommendations, supports AI-driven mock interviews, and generates contextual technical questions using RAG.',
    tech: ['React.js', 'FastAPI', 'Python', 'Cohere', 'FAISS', 'RAG'],
    features: ['ATS RESUME ANALYSIS', 'CAREER RECOMMENDATIONS', 'MOCK INTERVIEWS', 'AI CAREER ASSISTANT', 'TECHNICAL Q&A GENERATION'],
    github: 'https://github.com/Niharkothapalli/CareerLens-AI',
    demo: null,
    icon: '🤖',
  },
  {
    title: 'HostelOS — Smart Hostel Management System',
    description:
      'Full-stack hostel management platform with role-based authentication for Student, Warden, Host, Cook, and Staff. Built on a MySQL-backed REST API with modular operations covering room allocation, meal management, gate passes, maintenance, and visitor tracking.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'EJS', 'JavaScript'],
    features: ['ROLE-BASED ACCESS', 'ROOM ALLOCATION', 'SMART MEAL MANAGEMENT', 'DIGITAL GATE PASS', 'MAINTENANCE & VISITORS'],
    github: 'https://github.com/Niharkothapalli',
    demo: null,
    icon: '🏠',
  },
]

export const achievements = [
  {
    title: 'Databricks Certified Data Engineer Associate',
    subtitle: 'Databricks Certification • Data Engineering • Medallion Architecture',
    icon: '🏅',
    certificate: '/certificates/DatabricksCertificate.png.jpg',
  },
  {
    title: 'NPTEL – Programming in Java',
    subtitle: 'Elite Certificate • Score: 100/100 • Top 1% Nationwide',
    icon: '🏆',
    certificate: '/certificates/npteljava.png.png',
  },
  {
    title: 'GENERATIVE AI WITH LLMS',
    subtitle: 'SkillDzire • Short-Term Internship • May-July 2026',
    icon: '🤖',
    certificate: '/certificates/SkillDzire.png.png',
  },
  {
    title: 'SQL and Relational Databases 101',
    subtitle: 'IBM Skills Network • Structured Query Language',
    icon: '🗄️',
    certificate: '/certificates/IBMSQL.png.jpg',
  },
  {
    title: 'NPTEL – Cloud Computing',
    subtitle: 'Elite Certificate • Top 5%',
    icon: '☁️',
    certificate: '/certificates/nptelcloud.png.png',
  },
  {
    title: 'Full Stack Web Development',
    subtitle: 'Codinza Certification',
    icon: '💻',
    certificate: '/certificates/codinza.png.png',
  },
  {
    title: 'CCNA: Introduction to Networks',
    subtitle: 'Cisco Networking Academy • Networking Fundamentals',
    icon: '🌐',
    certificate: '/certificates/CCNA.png.png',
  },
  {
    title: 'Deloitte – Data Analytics Job Simulation',
    subtitle: 'Deloitte • Data Analytics • Forage Platform',
    icon: '📊',
    certificate: '/certificates/Deloitte.png.png',
  },
  {
    title: 'Tata – GenAI Powered Data Analytics',
    subtitle: 'Tata Group • Generative AI • Data Analytics • Forage Platform',
    icon: '✨',
    certificate: '/certificates/Tata.png.png',
  },
]

export const whyHireMe = [
  { text: 'Data Engineering Foundation', icon: 'ph-database' },
  { text: 'Strong Java Foundations', icon: 'ph-coffee' },
  { text: 'SQL & Data Processing', icon: 'ph-table' },
  { text: 'Full Stack Development Experience', icon: 'ph-stack' },
  { text: 'AI Application Development', icon: 'ph-robot' },
  { text: 'Strong Problem-Solving Skills', icon: 'ph-puzzle-piece' },
  { text: 'DATABRICKS CERTIFIED DATA ENGINEER ASSOCIATE', icon: 'ph-certificate' },
  { text: 'Top 1% NPTEL Java Performer', icon: 'ph-trophy' },
  { text: 'Academic Excellence (8.75 CGPA)', icon: 'ph-medal' },
  { text: 'Quick Learner & Adaptable', icon: 'ph-lightning' },
]

export const currentlyLearning = [
  'AWS', 'Spring Boot','System Design', 'Advanced DSA',
]

export const snapshot = [
    { label: 'CGPA', value: '8.75' },
  { label: 'Certified', value: 'Databricks' },
  { label: 'Minor CGPA', value: '9.50' },
  { label: 'Internships', value: '4' },  { label: 'Java Rank', value: 'Top 1%' },

  { label: 'Projects build', value: '5 +' },
]
