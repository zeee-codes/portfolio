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
      id: "kokanam",
      title: "KOKANAM",
      subtitle: "Enterprise E-Commerce Ecosystem",
      description:
        "Full-scale enterprise e-commerce platform with custom UI, role authentication, and live logistics integration.",
      longDescription:
        "A full-scale, enterprise-level e-commerce ecosystem built in collaboration with Aryan. Features a custom user interface, role-based authentication, server-side security, and an integrated ShipRocket gateway for live logistics and tracking. Managed production deployment pipelines on Vercel with automated custom domain routing and pushed 3 major approved PRs to production.",
      role: "Full Stack Architect",
      timeline: "2026",
      impact: "Enterprise e-commerce ecosystem with automated deployment and live logistics tracking.",
      results: [
        "Full-scale enterprise e-commerce ecosystem",
        "Integrated ShipRocket gateway for live logistics and tracking",
        "Pushed 3 major approved PRs to production",
      ],
      highlights: [
        "Next.js & Vercel",
        "ShipRocket API",
        "Custom Secure Gateways",
      ],
      features: [
        {
          title: "Custom UI & Role Auth",
          description:
            "Engineered responsive e-commerce UI with multi-layered role authentication and server security.",
        },
        {
          title: "ShipRocket Logistics",
          description:
            "Integrated live tracking and logistics processing gateway directly into order workflows.",
        },
        {
          title: "Vercel Production CI/CD",
          description:
            "Automated custom domain routing and deployment pipelines with zero-downtime PR merges.",
        },
      ],
      stack: [
        "Next.js",
        "Vercel",
        "ShipRocket API",
        "Custom Secure Payment Gateways",
      ],
      category: "ecommerce",
      status: "Live",
      links: [{ label: "Live Site", url: "https://www.kokanam.in/", type: "live" }],
      featured: true,
      accentColor: "#5f8242",
      gradient: ["#5f8242", "#1a2414"],
      year: 2026,
    },
    {
      id: "qwerty-nova",
      title: "QWERTY NOVA",
      subtitle: "Founder-Led Internal Systems Engine",
      description:
        "Comprehensive internal systems engine with custom relational database schemas and role-based access.",
      longDescription:
        "A founder-led internal systems engine. Designed and completed the entire comprehensive UI, successfully integrated the user authentication layer, and architected the foundational database schema using Supabase.",
      role: "Lead Systems Engineer",
      timeline: "2026",
      impact: "Founder-led internal systems engine with automated workflow orchestration.",
      results: [
        "Designed and completed comprehensive UI from scratch",
        "Integrated secure user authentication layer",
        "Architected foundational Supabase database schema",
      ],
      highlights: [
        "Next.js & Supabase",
        "Relational DB Schema",
        "Custom UI Layouts",
      ],
      features: [
        {
          title: "Comprehensive UI Systems",
          description:
            "Designed structural layouts and user interfaces from scratch.",
        },
        {
          title: "Supabase Schema & Auth",
          description:
            "Architected foundational relational database schemas and secure user authentication.",
        },
      ],
      stack: ["Next.js", "Supabase", "Relational DB Schema"],
      category: "systems",
      status: "In Development",
      links: [{ label: "System Brief", url: "", type: "docs" }],
      featured: true,
      accentColor: "#c34e52",
      gradient: ["#c34e52", "#2a1112"],
      year: 2026,
    },
    {
      id: "genai-resume",
      title: "GEN_AI RESUME PROCESSOR",
      subtitle: "High-Performance Generative Builder",
      description:
        "Algorithmic profile contextualization engine driven by Gemini API with striking Brutalist design tokens.",
      longDescription:
        "First project built during the internship. Features an AI-driven generative text engine utilizing the Gemini API to build resumes, paired with a striking, high-contrast Brutalist interface with bold color constraints.",
      role: "AI & Frontend Engineer",
      timeline: "2026",
      impact: "AI-driven resume engine with high-contrast Brutalist typography constraints.",
      results: [
        "Generative AI resume engine powered by Gemini API",
        "Striking high-contrast Brutalist design interface",
        "Algorithmic profile contextualization",
      ],
      highlights: [
        "Gemini API Engine",
        "Brutalist Design UI",
        "Profile Contextualization",
      ],
      features: [
        {
          title: "Generative Text Engine",
          description:
            "Leverages Gemini API for algorithmic profile contextualization and resume generation.",
        },
        {
          title: "Brutalist Design Tokens",
          description:
            "Striking high-contrast interface utilizing bold color constraints and rigid typography.",
        },
      ],
      stack: ["Next.js", "Gemini API", "Brutalist UI Design Tokens"],
      category: "ai",
      status: "Live",
      links: [{ label: "Live Site", url: "https://ai-resume-w2wi.vercel.app/", type: "live" }],
      featured: true,
      accentColor: "#a2d094",
      gradient: ["#a2d094", "#1b2414"],
      year: 2026,
    },
    {
      id: "clickpoint",
      title: "ClickPoint (MHCIT Academy)",
      subtitle: "Client-Facing Academy Platform",
      description:
        "Structured template-driven client platform engineered to meet strict institutional approval requirements.",
      longDescription:
        "A client-facing project for MHCIT Academy. Iterated closely through client feedback, successfully pivoting from an initial modern experimental UI concept to a structured, template-driven layout to secure strict client approval.",
      role: "Frontend Lead",
      timeline: "2026",
      impact: "Template-driven client platform delivering 100% client satisfaction and approval.",
      results: [
        "Iterated closely through iterative client feedback cycles",
        "Pivoted from experimental UI to structured template layout",
        "Secured strict institutional client approval",
      ],
      highlights: [
        "Client-Centric Pivot",
        "Template Architecture",
        "Production Delivery",
      ],
      features: [
        {
          title: "Iterative Client Adaptation",
          description:
            "Pivoted mid-lifecycle based on strict client feedback cycles.",
        },
        {
          title: "Structured Layout Engine",
          description:
            "Delivered template-driven design system securing full institutional sign-off.",
        },
      ],
      stack: ["Next.js", "Template Systems", "Client UI Framework"],
      category: "education",
      status: "Shipped",
      links: [{ label: "Live Site", url: "https://kick-point.vercel.app/", type: "live" }],
      featured: false,
      accentColor: "#e9f6c6",
      gradient: ["#e9f6c6", "#1b2014"],
      year: 2026,
    },
    {
      id: "ai-lead-processor",
      title: "AI Audit & Lead Gen Processor",
      subtitle: "Algorithmic B2B Pipeline Automation",
      description:
        "Automated system running algorithmic site auditing and targeted B2B lead generation processing pipelines.",
      longDescription:
        "An automated system designed and deployed to run algorithmic site auditing and targeted B2B lead generation processing pipelines in production environments.",
      role: "Automation Architect",
      timeline: "2026",
      impact: "Automated B2B pipeline processing site audits and lead gen.",
      results: [
        "Deployed automated algorithmic site auditing",
        "Targeted B2B lead generation processing pipelines",
        "Production automated workflow orchestration",
      ],
      highlights: [
        "Automated Site Auditing",
        "Targeted Lead Gen",
        "AI Processing Pipelines",
      ],
      features: [
        {
          title: "Algorithmic Site Auditing",
          description:
            "Automated analysis of web properties for optimization and data extraction.",
        },
        {
          title: "Lead Generation Pipeline",
          description:
            "Processes and qualifies targeted B2B leads automatically.",
        },
      ],
      stack: ["Next.js", "AI Pipelines", "Automation Engine"],
      category: "automation",
      status: "Live",
      links: [{ label: "Live Site", url: "https://ai-website-auditor-lac.vercel.app/", type: "live" }],
      featured: false,
      accentColor: "#5f8242",
      gradient: ["#5f8242", "#0f140a"],
      year: 2026,
    },
    {
      id: "syncell",
      title: "Syncell",
      subtitle: "Personal Medical Timeline OS",
      description:
        "Chronological health record timeline connecting doctors, labs, and patients with encrypted real-time sync.",
      longDescription:
        "A Personal Medical Timeline Operating System designed as a chronological, real-time health record timeline. It securely connects doctors, labs, and patients using role-based encryption to automate healthcare data with zero paperwork.",
      role: "System Design + Frontend",
      timeline: "2024",
      impact: "Real-time encrypted medical timeline connecting providers and patients.",
      results: [
        "Real-time sync between doctors, labs, and patients",
        "Encrypted records with role-based access control",
        "Paperwork-free collaborative healthcare flow",
      ],
      highlights: [
        "Real-Time Sync",
        "Encrypted Records",
        "Zero Paperwork",
      ],
      features: [
        {
          title: "Unified Medical Timeline",
          description:
            "Chronological health history providing instant context for healthcare providers.",
        },
        {
          title: "Live Provider Collaboration",
          description:
            "Real-time updates between doctors, labs, and patients via WebSockets.",
        },
        {
          title: "Encrypted Data Layer",
          description:
            "Role-based access control ensuring total privacy and security.",
        },
      ],
      stack: ["Next.js", "Node.js", "WebSockets", "Encrypted DB", "Tailwind CSS"],
      category: "health",
      status: "In Development",
      links: [{ label: "Repository", url: "https://github.com/zeee-codes/SYNCELL", type: "github" }],
      featured: true,
      accentColor: "#c34e52",
      gradient: ["#c34e52", "#2a1112"],
      year: 2024,
    },
    {
      id: "omnifit",
      title: "OmniFit",
      subtitle: "All-in-One Health & Fitness Ecosystem",
      description:
        "Macro calculation, weight logging, and computer vision form analysis with 98% food scanner accuracy.",
      longDescription:
        "A unified health and fitness platform combining custom macro calculation, weight logging, and real-time AI physical form analysis. Includes a specialized scanner for Indian food items engineered with a 98% recognition accuracy rate.",
      role: "Product + Full Stack",
      timeline: "2024",
      impact: "Unified fitness ecosystem with computer vision form checks and 98% food scanner accuracy.",
      results: [
        "98% Indian food recognition scanner accuracy",
        "Computer vision posture analysis with instant cues",
        "Unified macro and diet planner workflow",
      ],
      highlights: [
        "Computer Vision AI",
        "98% Scanner Accuracy",
        "Macro Engine",
      ],
      features: [
        {
          title: "Nutrition Engine",
          description:
            "Custom macro calculator and diet planner tailored to individual goals.",
        },
        {
          title: "AI Form Analysis",
          description:
            "Real-time physical posture checks providing instant correction cues.",
        },
        {
          title: "Indian Food Scanner",
          description:
            "Specialized computer vision scanner with 98% recognition accuracy.",
        },
      ],
      stack: [
        "React",
        "Next.js",
        "Node.js",
        "Computer Vision APIs",
        "SQL",
        "IONOS Hosting",
      ],
      category: "health",
      status: "Live",
      links: [{ label: "Live Site", url: "https://beomnifit.website/", type: "live" }],
      featured: true,
      accentColor: "#5f8242",
      gradient: ["#5f8242", "#1a2414"],
      year: 2024,
    },
    {
      id: "portfolio-3d",
      title: "Cinematic 3D Portfolio",
      subtitle: "Developer Showroom & WebGL World",
      description:
        "Custom 3D showroom built on synchronized GSAP/Lenis master playhead with procedural shaders.",
      longDescription:
        "A premium, cinematic developer showroom built on a synchronized GSAP/Lenis master timeline playhead. Features a procedural, 3-layer 'Processor Monolith' that mathematically shatters and expands in 3D space based on real-time scroll position, custom GLSL post-processing shaders, and a simulated system BIOS boot sequence.",
      role: "Creative Dev + 3D Architect",
      timeline: "2026",
      impact: "Scroll-driven WebGL experience with 60 FPS performance optimization.",
      results: [
        "Synchronized GSAP/Lenis master timeline playhead",
        "Procedural 3-layer Processor Monolith 3D shattering",
        "Performance-first GLSL postprocessing shaders",
      ],
      highlights: [
        "R3F & Three.js",
        "GSAP Master Timeline",
        "Lenis Smooth Scroll",
      ],
      features: [
        {
          title: "Synchronized Scroll Playhead",
          description:
            "Camera paths and 3D object transformations linked to scroll offset.",
        },
        {
          title: "Procedural 3D Monolith",
          description:
            "Mathematically shatters and expands layers dynamically in WebGL space.",
        },
      ],
      stack: [
        "React",
        "TypeScript",
        "Three.js",
        "React Three Fiber",
        "GSAP",
        "Lenis",
        "Tailwind CSS",
      ],
      category: "portfolio",
      status: "Live",
      links: [{ label: "Repository", url: "https://github.com/zeee-codes/portfolio", type: "github" }],
      featured: false,
      accentColor: "#a2d094",
      gradient: ["#a2d094", "#1b2414"],
      year: 2026,
    },
    {
      id: "cuda",
      title: "CUDA",
      subtitle: "Local-First LLM Desktop Automation Assistant",
      description:
        "Offline Jarvis-style assistant executing 100% local inference for private file traversal and system control.",
      longDescription:
        "A local-first desktop automation assistant inspired by a Jarvis-style utility. It runs 100% offline inference locally to securely manage private file system traversal, application launching, and automated system actions without exposing private data online.",
      role: "AI Automation Lead",
      timeline: "2023",
      impact: "100% local offline LLM assistant for private desktop automation.",
      results: [
        "100% local offline inference for zero privacy exposure",
        "Automated system workflows and app launching",
        "Private local file system traversal engine",
      ],
      highlights: [
        "100% Offline LLM",
        "Jarvis-Style Utility",
        "Desktop System Control",
      ],
      features: [
        {
          title: "Offline LLM Inference",
          description:
            "All AI model execution runs locally ensuring complete data privacy.",
        },
        {
          title: "System Workflow Automation",
          description:
            "Launches applications, manipulates files, and automates desktop operations.",
        },
      ],
      stack: ["Python", "Local LLMs", "Electron", "Node.js"],
      category: "automation",
      status: "Prototype",
      links: [{ label: "Demo Video", url: "#", type: "video" }],
      featured: false,
      accentColor: "#e9f6c6",
      gradient: ["#e9f6c6", "#1b2014"],
      year: 2023,
    },
    {
      id: "iot-concert-hall",
      title: "IoT Concert Hall Simulation",
      subtitle: "Multi-Tiered Hardware-Software Architecture",
      description:
        "Architectural simulation for venue crowd management, automated stage hardware, and emergency safety.",
      longDescription:
        "A multi-tiered software-hardware architectural simulation for a modern concert hall venue. It incorporates complex automated subsystems for real-time crowd management, digital stage hardware controls, and automated emergency safety protocols.",
      role: "Systems Architect",
      timeline: "2025",
      impact: "Hardware-software simulation for automated crowd safety and stage control.",
      results: [
        "Real-time crowd density management simulation",
        "Digital stage hardware control protocols",
        "Automated emergency safety subsystem triggers",
      ],
      highlights: [
        "IoT Hardware Integration",
        "Real-Time Crowd Management",
        "Emergency Safety Subsystems",
      ],
      features: [
        {
          title: "Real-Time Crowd Management",
          description:
            "Simulates sensor networks for tracking density and automated crowd flow.",
        },
        {
          title: "Stage Control Protocol",
          description:
            "Digital interface managing lighting, acoustics, and stage mechanics.",
        },
      ],
      stack: ["IoT Systems Architecture", "Node.js", "Real-time Controls"],
      category: "systems",
      status: "Prototype",
      links: [{ label: "Architecture Blueprint", url: "#", type: "docs" }],
      featured: false,
      accentColor: "#5f8242",
      gradient: ["#5f8242", "#1a2414"],
      year: 2025,
    },
    {
      id: "clg360",
      title: "Clg360",
      subtitle: "Integrated College Management Web Portal",
      description:
        "Three-tier communication loop connecting students, teachers, and parents with dedicated dashboards.",
      longDescription:
        "A 3-tier integrated college management portal establishing structured, real-time communication loops and data tracking dashboards for students, teachers, and parents.",
      role: "Full Stack Developer",
      timeline: "2022",
      impact: "3-tier communication loop connecting students, faculty, and parents.",
      results: [
        "Three dedicated role-based dashboards",
        "Centralized academic updates and feedback loop",
        "Solid vanilla web foundation",
      ],
      highlights: [
        "3-Tier Architecture",
        "Role-Based Dashboards",
        "Vanilla Stack",
      ],
      features: [
        {
          title: "Role-Based Dashboards",
          description: "Tailored portals for students, teachers, and parents.",
        },
        {
          title: "Communication Loop",
          description:
            "Centralized announcement and academic feedback channels.",
        },
      ],
      stack: ["Vanilla HTML5", "CSS3", "JavaScript"],
      category: "education",
      status: "Shipped",
      links: [{ label: "Source Code", url: "#", type: "github" }],
      featured: false,
      accentColor: "#c34e52",
      gradient: ["#c34e52", "#2a1112"],
      year: 2022,
    },
  ],
  experience: [
    {
      id: "exp-kaevron",
      role: "Full Stack Developer Intern",
      organization: "Kaevron Technologies",
      period: "2026 - Present",
      summary:
        "Leading production feature development, automated AI processing pipelines, and client-facing web applications.",
      highlights: [
        "Production Version Control: Authored and merged multiple high-stakes Pull Requests directly into live company repositories with 100% approval rate.",
        "Client Interactivity: Successfully pivoted mid-lifecycle from modern experimental UI concepts to structured, template-driven designs based on strict client feedback cycles (ClickPoint / MHCIT Academy).",
        "Automated Workflows: Engineered and deployed automated AI-driven auditing and lead-generation processing pipelines to production.",
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
