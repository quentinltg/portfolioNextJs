export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  demoUrl?: string;
  sourceUrl?: string;
  ecoScore: {
    label: string;
    value: number; // 1-5, 5 étant le plus écologique
  };
  completionDate: string; // Format ISO: YYYY-MM
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
}
