import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Zaid Sayyed",
    firstName: "Zaid",
    lastName: "Sayyed",
    headline: "Problem Solver & Systems Architect",
    tagline: "Building high-performance systems with cinematic interfaces.",
    summary:
      "Full stack developer focused on scalable system design, immersive 3D interfaces, and AI-driven products that feel effortless.",
    philosophy:
      "Precision over noise. Every detail should serve performance, clarity, and impact.",
    focusAreas: [
      "System Design",
      "3D Web Graphics",
      "AI Product Engineering",
      "Performance Optimization",
    ],
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
    availability: "Available for hire",
    socials: [
      {
        platform: "github",
        label: "zeee-codes",
        url: "https://github.com/zeee-codes",
        ariaLabel: "View GitHub profile",
      },
      {
        platform: "linkedin",
        label: "Zaid Sayyed",
        url: "https://linkedin.com/in/zaid-sayyed-1903az",
        ariaLabel: "Connect on LinkedIn",
      },
      {
        platform: "email",
        label: "Email",
        url: "mailto:zaidsayyed3108@gmail.com",
        ariaLabel: "Send an email",
      },
      {
        platform: "phone",
        label: "Call",
        url: "tel:+918169529929",
        ariaLabel: "Call phone number",
      },
    ],
  },
  skills: [
    {
      id: "languages",
      title: "Languages",
      description: "Core languages used for scalable systems and tooling.",
      accentColor: "#5f8242",
      skills: [
        { name: "TypeScript", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      description: "High-fidelity UI, motion, and immersive experiences.",
      accentColor: "#c34e52",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "Three.js / R3F", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      description: "Services, data layers, and real-time infrastructure.",
      accentColor: "#a2d094",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "WebSockets", level: "Advanced" },
        { name: "SQL Databases", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
      ],
    },
    {
      id: "ai",
      title: "AI",
      description: "Local models, computer vision, and workflow automation.",
      accentColor: "#e9f6c6",
      skills: [
        { name: "Local LLMs", level: "Advanced" },
        { name: "Computer Vision", level: "Advanced" },
        { name: "AI APIs", level: "Advanced" },
        { name: "Prompt Engineering", level: "Advanced" },
      ],
    },
  ],
  projects: [
    {
      id: "omnifit",
      title: "OmniFit",
      subtitle: "All-in-One Health and Fitness App",
      description:
        "Macro calculation, weight logging, and AI-powered form checking in a single health ecosystem.",
      longDescription:
        "A unified fitness platform that combines macro tracking, weight logs, goal systems, and an AI exercise form checker. Includes a 98% accurate Indian food scanner for effortless diet logging.",
      role: "Product + Full Stack",
      timeline: "2024",
      impact: "Unified fitness ecosystem with AI form checks and food scanning.",
      results: [
        "98% food scanner accuracy",
        "AI form analysis with instant correction cues",
        "Macro + diet planner in one flow",
      ],
      highlights: [
        "Macro calculation",
        "AI form checker",
        "98% food scanner accuracy",
      ],
      features: [
        {
          title: "Nutrition Engine",
          description:
            "Macro calculator and diet planner tailored to personal goals.",
        },
        {
          title: "AI Form Analysis",
          description:
            "Computer vision posture checks with instant correction cues.",
        },
        {
          title: "Food Scanner",
          description:
            "Indian food recognition with 98% accuracy.",
          metric: "98% accuracy",
        },
      ],
      stack: [
        "React",
        "Next.js",
        "Node.js",
        "AI Computer Vision APIs",
        "SQL",
      ],
      category: "health",
      status: "Live",
      links: [
        { label: "Case Study", url: "#", type: "docs" },
        { label: "Preview", url: "#", type: "demo" },
      ],
      featured: true,
      accentColor: "#5f8242",
      gradient: ["#5f8242", "#1a2414"],
      videoUrl: "/videos/omnifit.mp4",
      year: 2024,
    },
    {
      id: "syncell",
      title: "Syncell",
      subtitle: "Visually Appealing Health Timeline",
      description:
        "Chronological health data with secure real-time syncing for doctors, labs, and patients.",
      longDescription:
        "A secure, visually rich timeline for health records that syncs across patients, doctors, and labs in real time. Built to remove paperwork, accelerate care, and keep data encrypted end-to-end.",
      role: "System Design + Frontend",
      timeline: "2024",
      impact: "Real-time health timeline for doctors, labs, and patients.",
      results: [
        "Real-time sync between providers",
        "Encrypted records with role-based access",
        "Paperwork-free collaboration flow",
      ],
      highlights: [
        "Real-time sync",
        "Encrypted records",
        "Zero paperwork",
      ],
      features: [
        {
          title: "Unified Timeline",
          description:
            "Chronological health history with instant context for providers.",
        },
        {
          title: "Live Collaboration",
          description:
            "Real-time updates between doctors, labs, and patients.",
        },
        {
          title: "Secure Storage",
          description:
            "Encrypted data layer with access control by role.",
        },
      ],
      stack: [
        "Next.js",
        "Node.js",
        "Real-time WebSockets",
        "Encrypted Database",
        "Tailwind",
      ],
      category: "health",
      status: "In Development",
      links: [{ label: "Product Brief", url: "#", type: "docs" }],
      featured: true,
      accentColor: "#c34e52",
      gradient: ["#c34e52", "#2a1112"],
      videoUrl: "/videos/syncell.mp4",
      year: 2024,
    },
    {
      id: "cuda",
      title: "CUDA",
      subtitle: "Local-First LLM Desktop Automation Assistant",
      description:
        "Private offline assistant that automates deep local tasks like file traversal and app control.",
      longDescription:
        "A Jarvis-style local LLM that runs offline to manage files, launch applications, and execute system operations. Designed for privacy-first automation with powerful desktop integrations.",
      role: "AI Automation",
      timeline: "2023",
      impact: "Local-first LLM assistant for private desktop automation.",
      results: [
        "100% local inference",
        "Automated system actions",
        "Private file traversal workflow",
      ],
      highlights: ["Private by design", "Local automation", "Desktop control"],
      features: [
        {
          title: "Offline LLM",
          description: "All inference runs locally for complete privacy.",
          metric: "100% local",
        },
        {
          title: "System Actions",
          description:
            "Automated workflows for launching apps and managing files.",
        },
        {
          title: "Query Engine",
          description:
            "Runs local and web-based queries without exposing private data.",
        },
      ],
      stack: [
        "Python",
        "Local LLMs",
        "Electron/Desktop environment integrations",
        "Node.js",
      ],
      category: "automation",
      status: "Prototype",
      links: [{ label: "Demo Video", url: "#", type: "video" }],
      featured: true,
      accentColor: "#a2d094",
      gradient: ["#a2d094", "#1b2414"],
      videoUrl: "/videos/cuda.mp4",
      year: 2023,
    },
    {
      id: "clg360",
      title: "Clg360",
      subtitle: "Integrated College Management Web Portal",
      description:
        "Three-tier communication loop connecting students, teachers, and parents.",
      longDescription:
        "A foundational college management portal that connects students, teachers, and parents in one system. Built with vanilla technologies to master core web fundamentals while enabling structured communication.",
      role: "Full Stack (Vanilla)",
      timeline: "2022",
      impact: "Unified college portal for students, teachers, and parents.",
      results: [
        "Three role dashboards",
        "Centralized updates and feedback",
        "Vanilla JS foundation",
      ],
      highlights: ["3-tier portal", "Unified messaging", "Vanilla stack"],
      features: [
        {
          title: "Role-based Dashboards",
          description:
            "Dedicated experiences for students, teachers, and parents.",
        },
        {
          title: "Communication Loop",
          description:
            "Centralized updates, announcements, and academic feedback.",
        },
      ],
      stack: ["Vanilla HTML5", "CSS3", "JavaScript"],
      category: "education",
      status: "Shipped",
      links: [{ label: "Source", url: "#", type: "github" }],
      accentColor: "#e9f6c6",
      gradient: ["#e9f6c6", "#1b2014"],
      videoUrl: "/videos/clg360.mp4",
      year: 2022,
    },
    {
      id: "portfolio-3d",
      title: "Interactive 3D Portfolio",
      subtitle: "Premium Developer Showroom",
      description:
        "A premium, custom-designed, highly animated developer showroom.",
      longDescription:
        "A cinematic 3D portfolio built with scroll-driven camera choreography, performance-first shaders, and immersive UI overlays.",
      role: "Creative Dev + 3D",
      timeline: "2024",
      impact: "Cinematic 3D portfolio with scroll-synced camera movement.",
      results: [
        "Scroll-driven camera choreography",
        "Immersive UI overlays",
        "Performance-first shaders",
      ],
      highlights: ["R3F world", "GSAP motion", "Cinematic UI"],
      features: [
        {
          title: "Scroll Camera",
          description:
            "Camera paths and rotations synchronized to scroll sections.",
        },
        {
          title: "Atmospheric Scene",
          description:
            "Abstract geometry, starfields, and glowing coordinate grids.",
        },
        {
          title: "Performance Focus",
          description:
            "Optimized materials and instanced geometry for 60 FPS.",
        },
      ],
      stack: [
        "React",
        "Three.js",
        "React Three Fiber",
        "GSAP",
        "Tailwind CSS",
        "TypeScript",
      ],
      category: "portfolio",
      status: "Live",
      links: [{ label: "Repository", url: "#", type: "github" }],
      accentColor: "#5f8242",
      gradient: ["#5f8242", "#0f140a"],
      videoUrl: "/videos/portfolio.mp4",
      year: 2024,
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "System Designer and Full Stack Lead",
      organization: "Independent Projects",
      period: "2022 - Present",
      summary:
        "Leading end-to-end builds that combine advanced systems with immersive UI.",
      highlights: [
        "Architected AI-driven health platforms and local-first assistants.",
        "Built real-time health timelines with encrypted data sync.",
        "Delivered immersive 3D web experiences with performance focus.",
      ],
      type: "work",
    },
  ],
  navigation: [
    { id: "hero", label: "Home", icon: "home" },
    { id: "why-hire", label: "Why Hire", icon: "spark" },
    { id: "about", label: "About", icon: "user" },
    { id: "skills", label: "Skills", icon: "cpu" },
    { id: "projects", label: "Projects", icon: "grid" },
    { id: "experience", label: "Experience", icon: "timeline" },
    { id: "contact", label: "Contact", icon: "mail" },
  ],
};
