export interface ServiceItem {
  slug: string;
  name: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string; // name of lucide icon
  details: string[];
  subservices?: {
    title: string;
    description: string;
    bullets?: string[];
  }[];
  process?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface SolutionItem {
  slug: string;
  title: string;
  industry: string;
  icon: string;
  challenges: string[];
  aiAnalysis: string;
  strategy: string[];
  results: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or rich HTML structure
  category: string;
  date: string;
  author: string;
  readTime: string;
  isFeatured?: boolean;
  image: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceNeeded: string;
  message: string;
}
