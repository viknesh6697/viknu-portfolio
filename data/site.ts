export const site = {
  name: "Your Name",
  role: "Creative Engineer",
  location: "United States",
  description:
    "I build polished digital products with strong UX, clean architecture, and motion that feels alive.",
  email: "hello@yourdomain.com",
  calendly: "https://calendly.com/your-handle/30min",
  social: {
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
    twitter: "https://x.com/your-handle",
  },
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  bullets: string[];
  tech: string[];
  image: string;
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Rune",
    slug: "rune",
    summary: "AI-first portfolio infrastructure with dynamic themes and modular sections.",
    bullets: [
      "Reduced page load by 38% with route splitting and optimized images",
      "Shipped keyboard command palette for power navigation",
      "Built reusable design tokens for rapid iteration",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    live: "https://example.com",
    github: "https://github.com/your-handle/rune",
  },
  {
    title: "RuneHub",
    slug: "runehub",
    summary: "Creator dashboard with analytics, projects, and integrations.",
    bullets: [
      "Built a composable component system for data-rich layouts",
      "Integrated robust validation and clean API contracts",
      "Improved accessibility score to 100 on Lighthouse",
    ],
    tech: ["Next.js", "Node.js", "Postgres", "Zod"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    live: "https://example.com",
  },
];

export const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "AWS",
  "Figma",
  "CI/CD",
];

export const testimonials = [
  {
    quote:
      "One of the best engineers I’ve worked with — fast, thoughtful, and product-minded.",
    author: "Jane Doe",
    role: "Head of Product, Acme",
  },
  {
    quote: "Turned a rough concept into a polished user experience in record time.",
    author: "John Smith",
    role: "Founder, Startly",
  },
];
