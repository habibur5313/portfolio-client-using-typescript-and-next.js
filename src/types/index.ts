export interface IAuthor {
  id: number | string;
  name: string;
  email: string;
  password?: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProject {
  id: number | string;
  projectName: string;
  projectCategory: string;
  description: string;
  feature: string;
  technologyUsed: string[];
  npmPackageUsed: string[];
  startDate: string; 
  endDate: string; 
  image: string;
  githubLink: string;
  githubLinkServer?: string;
  liveLink: string;
  isFeatured: boolean;
  views: number;
  authorId: number | string;
  author: IAuthor;
  createdAt: string;
  updatedAt: string;
}

export interface IBlog {
  id: number | string;
  title: string;
  content: string;
  tags: string[];
  thumbnail: string;
  isFeatured: boolean;
  views: number;
  authorId: number | string;
  author: IAuthor;
  createdAt: string; 
  updatedAt: string; 
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
  isActive: "ACTIVE" | "BLOCKED";
}