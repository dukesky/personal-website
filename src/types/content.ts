// Site configuration
export interface Site {
  title: string;
  description: string;
  author: string;
  version: string;
  year: string;
}

// Common interfaces
export interface Button {
  text: string;
  href: string;
  type?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  icon?: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttons: Button[];
}

export interface PageHero {
  title: string;
  description: string;
}

// About page interfaces
export interface Highlight {
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple';
}

export interface Journey {
  title: string;
  image: string;
  paragraphs: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

export interface About {
  hero: PageHero;
  highlights: Highlight[];
  journey: Journey;
  skills: Skill[];
  experiences: Experience[];
}

// Portfolio interfaces
export interface PortfolioCard {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  projectCount: number;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  status: string;
}

export interface CallToAction {
  text: string;
  buttonText: string;
  buttonLink: string;
}

export interface Portfolio {
  hero: PageHero;
  badge: string;
  cards: PortfolioCard[];
  projects: Project[];
  categories: string[];
  callToAction: CallToAction;
}

// Projects interfaces
export interface ProjectStats {
  stars: number;
  forks: number;
  commits: number;
}

export interface FeaturedProject {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  category: string;
  stats: ProjectStats;
}

export interface AllProject {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  category: string;
  featured: boolean;
  stats: ProjectStats;
}

export interface Projects {
  hero: PageHero;
  featured: FeaturedProject[];
  all: AllProject[];
}

// Contact interfaces
export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string | null;
  description: string;
}

export interface QuickAction {
  icon: string;
  text: string;
  href: string;
}

export interface ContactLink {
  text: string;
  href: string;
  icon?: string;
  color: string;
  external?: boolean;
}

export interface ContactForm {
  title: string;
  description: string;
  successTitle: string;
  successMessage: string;
}

export interface ContactInfoSection {
  title: string;
  description: string;
  items: ContactInfo[];
}

export interface QuickActions {
  title: string;
  items: QuickAction[];
}

export interface Contact {
  hero: PageHero;
  form: ContactForm;
  info: ContactInfoSection;
  quickActions: QuickActions;
  links: ContactLink[];
}

// Footer interface
export interface Footer {
  text: string;
}

// Main content interface
export interface SiteContent {
  site: Site;
  hero: Hero;
  about: About;
  portfolio: Portfolio;
  projects: Projects;
  contact: Contact;
  footer: Footer;
}
