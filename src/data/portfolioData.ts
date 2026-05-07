import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Zaid Sayyed",
    firstName: "Zaid",
    lastName: "Sayyed",
    headline: "Problem Solver & Systems Architect",
    tagline: "Architecting scalable systems. Crafting immersive digital experiences.",
    summary: "A developer who bridges the gap between complex system design and high-fidelity user interfaces. Focused on performance, scalability, and the intersection of AI and human interaction.",
    philosophy: "Minimal code, maximum impact. If a system isn't elegant, it isn't finished.",
    focusAreas: ["System Design", "DSA", "LLM Integration", "3D Web Graphics"],
    quickFacts: [
      { label: "Role", value: "Full Stack + Systems" },
      { label: "Focus", value: "3D Web + AI Products" },
      { label: "Availability", value: "Open to hire" },
      { label: "Location", value: "Mumbai, India" },
    ],
    whyHire: [
      {
        title: "System-first problem solver",
        description:
          "I map architecture before UI so products scale cleanly and stay maintainable.",
        metric: "End-to-end ownership",
      },
      {
        title: "Performance without compromise",
        description:
          "I build immersive 3D and motion-heavy experiences that still feel fast.",
        metric: "60 FPS focus",
      },
      {
        title: "AI product depth",
        description:
          "Hands-on with computer vision and local LLM systems for real-world workflows.",
        metric: "98% scanner accuracy",
      },
    ],
    resumeUrl: "/resume.pdf",
  },
  contact: {
    name: "Zaid Sayyed",
    title: "Full Stack Developer",
    email: "zaidsayyed3108@gmail.com",
    phone: "+91 8169529929",
    location: "Mumbai, India",
    availability: "Available for high-impact roles",
    socials: [
      {
        platform: "github",
        label: "zeee-codes",
        url: "https://github.com/zeee-codes",
        ariaLabel: "View GitHub Profile",
      },
      {
        platform: "linkedin",
        label: "Zaid Sayyed",
        url: "https://linkedin.com/in/zaid-sayyed-1903az",
        ariaLabel: "Connect on LinkedIn",
      },
    ],
  },
  skills: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      description: "Building fluid, reactive interfaces with a focus on performance.",
      accentColor: "#5f8242",
      skills: [
        { name: "React / Next.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Three.js / R3F", level: "Advanced" },
        { name: "GSAP", level: "Advanced" },
      ],
    },
    {
      id: "backend",
      title: "Systems & Backend",
      description: "Architecting robust server-side logic and database schemas.",
      accentColor: "#c34e52",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "SQL / NoSQL", level: "Advanced" },
        { name: "Java / C++", level: "Expert" },
        { name: "Python (LLMs)", level: "Advanced" },
      ],
    },
    {
      id: "specialties",
      title: "Specialties",
      description: "Core computer science fundamentals and modern AI.",
      accentColor: "#a2d094",
      skills: [
        { name: "System Design", level: "Expert" },
        { name: "DSA", level: "Expert" },
        { name: "Prompt Engineering", level: "Advanced" },
      ],
    },
  ],
  projects: [
    {
      id: "omnifit",
      title: "OmniFit",
      subtitle: "AI Health Ecosystem",
      description: "Comprehensive fitness tracking with AI-powered form correction.",
      longDescription: "A revolutionary health platform integrating macro calculation, weight logging, and goal tracking. Features an Indian food scanner with 98% accuracy and real-time AI exercise analysis using computer vision.",
      role: "Product + Full Stack",
      timeline: "2024",
      impact: "Unified fitness ecosystem with AI form checks and food scanning.",
      results: [
        "98% food scanner accuracy",
        "AI form analysis with instant correction cues",
        "Macro + diet planner in one flow",
      ],
      highlights: ["AI Form Checker", "98% Food Accuracy", "Real-time Metrics"],
      features: [
        { title: "Computer Vision", description: "Real-time posture correction for 20+ exercises.", metric: "99% detection" },
        { title: "Food Scanner", description: "Trained on 10k+ Indian food samples.", metric: "98% Accuracy" }
      ],
      stack: ["React", "TensorFlow.js", "Node.js", "PostgreSQL"],
      category: "health",
      status: "Live",
      links: [
        { label: "Live Demo", url: "#", type: "live" },
        { label: "Source", url: "#", type: "github" }
      ],
      featured: true,
      accentColor: "#5f8242",
      gradient: ["#5f8242", "#1a2414"],
      year: 2024,
    },
    {
      id: "syncell",
      title: "Syncell",
      subtitle: "Universal Health Timeline",
      description: "Real-time health history synchronization for the modern medical age.",
      longDescription: "Eliminating medical paperwork by creating a visually stunning, real-time timeline of health records accessible by doctors, labs, and patients simultaneously.",
      role: "System Design + Frontend",
      timeline: "2024",
      impact: "Real-time health timeline for doctors, labs, and patients.",
      results: [
        "Real-time sync between providers",
        "Encrypted records with role-based access",
        "Paperwork-free collaboration flow",
      ],
      highlights: ["Real-time Sync", "Zero Paperwork", "Secure Encryption"],
      features: [
        { title: "Doctor Portal", description: "Instant access to patient history during consultations." },
        { title: "Lab Integration", description: "Direct results upload from diagnostic centers." }
      ],
      stack: ["Next.js", "Firebase", "WebSockets", "AES-256"],
      category: "health",
      status: "In Development",
      links: [{ label: "Docs", url: "#", type: "docs" }],
      featured: true,
      accentColor: "#c34e52",
      gradient: ["#c34e52", "#2a1112"],
      year: 2024,
    },
    {
      id: "cuda",
      title: "CUDA",
      subtitle: "Privacy-First AI Agent",
      description: "Local-first LLM automation tool acting as a private Jarvis.",
      longDescription: "A desktop assistant that operates completely privately. It can search files, open applications, answer complex queries, and traverse the internet without compromising user data.",
      role: "AI Automation",
      timeline: "2023",
      impact: "Local-first LLM assistant for private desktop automation.",
      results: [
        "100% local inference",
        "Automated system actions",
        "Private file traversal workflow",
      ],
      highlights: ["Local LLM", "Voice Interaction", "File Traversal"],
      features: [
        { title: "Local Processing", description: "No data ever leaves the machine.", metric: "100% Private" },
        { title: "Automation", description: "Cross-platform system control via voice." }
      ],
      stack: ["Python", "Ollama", "Electron", "LangChain"],
      category: "automation",
      status: "Prototype",
      links: [{ label: "Demo Video", url: "#", type: "video" }],
      featured: true,
      accentColor: "#a2d094",
      gradient: ["#a2d094", "#1b2414"],
      year: 2023,
    },
    {
      id: "clg360",
      title: "Clg360",
      subtitle: "Educational Nexus",
      description: "Interconnected portal for Students, Teachers, and Parents.",
      longDescription: "A foundational system built with pure vanilla technologies to master the core of web development while solving complex multi-user routing and data management.",
      role: "Full Stack (Vanilla)",
      timeline: "2022",
      impact: "Unified college portal for students, teachers, and parents.",
      results: [
        "Three role dashboards",
        "Centralized updates and feedback",
        "Vanilla JS foundation",
      ],
      highlights: ["3-Way Portal", "Native JS", "Classic Architecture"],
      features: [
        { title: "Multi-Role", description: "Dedicated dashboards for three distinct user types." },
        { title: "Pure Core", description: "Zero heavy frameworks, maximum optimization." }
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "PHP"],
      category: "education",
      status: "Shipped",
      links: [{ label: "Source", url: "#", type: "github" }],
      accentColor: "#e9f6c6",
      gradient: ["#e9f6c6", "#1b2014"],
      year: 2022,
    },
    {
      id: "portfolio-3d",
      title: "The Hub",
      subtitle: "3D Interactive Portfolio",
      description: "This experience. A showcase of craft and system design.",
      longDescription: "A high-fidelity, scroll-driven 3D experience built to showcase the intersection of technical prowess and visual storytelling.",
      role: "Creative Dev + 3D",
      timeline: "2024",
      impact: "Cinematic 3D portfolio with scroll-synced camera movement.",
      results: [
        "Scroll-driven camera choreography",
        "Immersive UI overlays",
        "Performance-first shaders",
      ],
      highlights: ["R3F Engine", "GSAP Animations", "Custom Shaders"],
      features: [
        { title: "Camera Paths", description: "Mathematical scroll-driven movement." },
        { title: "Responsive 3D", description: "Optimized performance across all devices." }
      ],
      stack: ["React", "Three.js", "GSAP", "Vite"],
      category: "portfolio",
      status: "Live",
      links: [{ label: "Repository", url: "#", type: "github" }],
      accentColor: "#5f8242",
      gradient: ["#5f8242", "#0f140a"],
      year: 2024,
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "System Designer & Full Stack Lead",
      organization: "Independent Projects",
      period: "2022 - Present",
      summary: "Leading the architectural design and development of end-to-end applications.",
      highlights: [
        "Implemented high-accuracy AI scanning systems.",
        "Built multi-user educational portals with zero framework overhead.",
        "Developing local-first LLM agents for secure automation."
      ],
      type: "work",
    }
  ],
  navigation: [
    { id: "hero", label: "Home", icon: "home" },
    { id: "why-hire", label: "Why Hire", icon: "spark" },
    { id: "about", label: "Identity", icon: "user" },
    { id: "projects", label: "Works", icon: "grid" },
    { id: "skills", label: "Stack", icon: "cpu" },
    { id: "contact", label: "Link", icon: "mail" },
  ],
};
