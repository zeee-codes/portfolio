// ─────────────────────────────────────────────────────────────────────────────
// src/types/portfolio.ts — Single Source of Truth for all portfolio data types
// ─────────────────────────────────────────────────────────────────────────────

/* ── Primitives ── */

export type HexColor = `#${string}`;

export type ProjectStatus = "Live" | "In Development" | "Prototype" | "Shipped";

export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

/* ── Social & Contact ── */

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "twitter"
  | "email"
  | "phone"
  | "website";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  url: string;
  ariaLabel: string;
};

export type ContactInfo = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  socials: SocialLink[];
};

/* ── Skills ── */

export type Skill = {
  name: string;
  level: SkillLevel;
  /** Identifier for an icon (react-icons key or custom SVG name) */
  icon?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  accentColor: HexColor;
  skills: Skill[];
};

/* ── Projects ── */

export type ProjectLink = {
  label: string;
  url: string;
  type: "github" | "live" | "demo" | "video" | "docs";
};

export type ProjectFeature = {
  title: string;
  description: string;
  /** Optional metric, e.g. "98% accuracy" */
  metric?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  role: string;
  timeline: string;
  impact: string;
  results: string[];
  highlights: string[];
  features: ProjectFeature[];
  stack: string[];
  category: "health" | "ai" | "education" | "portfolio" | "automation";
  status: ProjectStatus;
  links: ProjectLink[];
  featured?: boolean;
  /** Primary accent color for project cards/scenes */
  accentColor: HexColor;
  /** Gradient pair used for backgrounds */
  gradient: [HexColor, HexColor];
  /** Optional demo video URL for background playback */
  videoUrl?: string;
  image?: string;
  /** Year the project was started */
  year: number;
};

/* ── Experience ── */

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
  type: "work" | "education" | "freelance" | "open-source";
};

/* ── Profile ── */

export type Profile = {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  tagline: string;
  summary: string;
  philosophy: string;
  focusAreas: string[];
  quickFacts: Array<{ label: string; value: string }>;
  whyHire: Array<{ title: string; description: string; metric?: string }>;
  resumeUrl?: string;
};

/* ── Navigation / Sections ── */

export type NavSection = {
  id: string;
  label: string;
  icon: string;
};

/* ── Root ── */

export type PortfolioData = {
  profile: Profile;
  contact: ContactInfo;
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  navigation: NavSection[];
};
