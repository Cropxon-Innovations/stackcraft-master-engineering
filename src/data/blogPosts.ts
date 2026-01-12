// Centralized blog/playbook data for RSS, search, and blog index
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: BlogCategory;
  author: Author;
  publishedAt: string;
  modifiedAt: string;
  image: string;
  tags: string[];
  readTime: number;
}

export interface Author {
  name: string;
  url: string;
  avatar: string;
}

export type BlogCategory = 'ai' | 'dotnet' | 'java' | 'devops' | 'cloud' | 'architecture' | 'testing' | 'api';

export interface CategoryInfo {
  id: BlogCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    description: 'Artificial intelligence, machine learning patterns, LLM integration, and AI infrastructure',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'dotnet',
    name: '.NET Engineering',
    description: 'C#, ASP.NET Core, Entity Framework, and Microsoft ecosystem best practices',
    icon: 'Code2',
    color: 'from-blue-600 to-purple-600',
  },
  {
    id: 'java',
    name: 'Java & JVM',
    description: 'Java, Spring Boot, Kotlin, and JVM performance optimization',
    icon: 'Coffee',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'devops',
    name: 'DevOps & SRE',
    description: 'CI/CD pipelines, infrastructure as code, monitoring, and reliability engineering',
    icon: 'Container',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure',
    description: 'AWS, Azure, GCP, serverless architecture, and cloud-native patterns',
    icon: 'Cloud',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'architecture',
    name: 'System Architecture',
    description: 'Distributed systems, microservices, event-driven design, and scalability patterns',
    icon: 'Network',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'testing',
    name: 'Testing & Quality',
    description: 'Unit testing, integration testing, TDD, BDD, and quality assurance strategies',
    icon: 'TestTube2',
    color: 'from-emerald-500 to-green-500',
  },
  {
    id: 'api',
    name: 'API Design',
    description: 'RESTful APIs, GraphQL, gRPC, API versioning, and documentation',
    icon: 'Webhook',
    color: 'from-yellow-500 to-orange-500',
  },
];

export const defaultAuthor: Author = {
  name: 'StackCraft Team',
  url: 'https://www.stackcraft.io/about',
  avatar: 'https://www.stackcraft.io/og-image.png',
};

// Sample blog posts / playbooks data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'production-grade-dotnet-api-design',
    title: 'Production-Grade .NET API Design Patterns',
    description: 'Learn battle-tested patterns for building scalable, maintainable APIs with ASP.NET Core. Covers versioning, error handling, authentication, and performance optimization.',
    content: 'Complete guide to building production-ready APIs with .NET...',
    category: 'dotnet',
    author: defaultAuthor,
    publishedAt: '2026-01-10T10:00:00Z',
    modifiedAt: '2026-01-12T08:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['.NET', 'API Design', 'ASP.NET Core', 'REST', 'C#'],
    readTime: 15,
  },
  {
    id: '2',
    slug: 'microservices-architecture-patterns',
    title: 'Microservices Architecture: From Monolith to Distributed',
    description: 'A comprehensive playbook for designing, building, and operating microservices at scale. Includes service decomposition, communication patterns, and data management.',
    content: 'Deep dive into microservices architecture patterns...',
    category: 'architecture',
    author: defaultAuthor,
    publishedAt: '2026-01-08T12:00:00Z',
    modifiedAt: '2026-01-11T09:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['Microservices', 'Architecture', 'Distributed Systems', 'DDD'],
    readTime: 20,
  },
  {
    id: '3',
    slug: 'java-spring-boot-production-checklist',
    title: 'Java Spring Boot Production Readiness Checklist',
    description: 'Essential checklist for deploying Spring Boot applications to production. Covers security, performance, monitoring, and operational excellence.',
    content: 'Complete production readiness guide for Spring Boot...',
    category: 'java',
    author: defaultAuthor,
    publishedAt: '2026-01-06T14:00:00Z',
    modifiedAt: '2026-01-10T11:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['Java', 'Spring Boot', 'Production', 'JVM', 'Performance'],
    readTime: 18,
  },
  {
    id: '4',
    slug: 'kubernetes-devops-pipeline',
    title: 'Building a Complete Kubernetes DevOps Pipeline',
    description: 'End-to-end guide for creating robust CI/CD pipelines with Kubernetes. GitOps, Helm, ArgoCD, and progressive delivery strategies.',
    content: 'Master Kubernetes DevOps pipelines...',
    category: 'devops',
    author: defaultAuthor,
    publishedAt: '2026-01-04T09:00:00Z',
    modifiedAt: '2026-01-09T15:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['Kubernetes', 'DevOps', 'CI/CD', 'GitOps', 'Helm'],
    readTime: 22,
  },
  {
    id: '5',
    slug: 'aws-cloud-architecture-best-practices',
    title: 'AWS Cloud Architecture Best Practices',
    description: 'Comprehensive guide to building well-architected solutions on AWS. Covers security, reliability, performance, cost optimization, and operational excellence.',
    content: 'AWS cloud architecture patterns and best practices...',
    category: 'cloud',
    author: defaultAuthor,
    publishedAt: '2026-01-02T11:00:00Z',
    modifiedAt: '2026-01-08T13:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['AWS', 'Cloud', 'Architecture', 'Serverless', 'Well-Architected'],
    readTime: 25,
  },
  {
    id: '6',
    slug: 'llm-integration-patterns',
    title: 'LLM Integration Patterns for Production Systems',
    description: 'Practical patterns for integrating Large Language Models into production applications. Covers prompt engineering, RAG, fine-tuning, and cost optimization.',
    content: 'Master LLM integration in production systems...',
    category: 'ai',
    author: defaultAuthor,
    publishedAt: '2025-12-28T10:00:00Z',
    modifiedAt: '2026-01-07T16:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['AI', 'LLM', 'Machine Learning', 'RAG', 'GPT'],
    readTime: 19,
  },
  {
    id: '7',
    slug: 'comprehensive-testing-strategy',
    title: 'Comprehensive Testing Strategy for Modern Applications',
    description: 'Build a robust testing pyramid with unit, integration, and E2E tests. Covers TDD, BDD, contract testing, and performance testing.',
    content: 'Complete testing strategy guide...',
    category: 'testing',
    author: defaultAuthor,
    publishedAt: '2025-12-25T08:00:00Z',
    modifiedAt: '2026-01-05T10:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['Testing', 'TDD', 'BDD', 'Quality', 'Automation'],
    readTime: 16,
  },
  {
    id: '8',
    slug: 'graphql-api-design-guide',
    title: 'GraphQL API Design: The Complete Guide',
    description: 'Design and implement production-ready GraphQL APIs. Covers schema design, resolvers, authentication, subscriptions, and performance optimization.',
    content: 'Master GraphQL API design...',
    category: 'api',
    author: defaultAuthor,
    publishedAt: '2025-12-20T14:00:00Z',
    modifiedAt: '2026-01-03T12:00:00Z',
    image: 'https://www.stackcraft.io/og-image.png',
    tags: ['GraphQL', 'API', 'Schema', 'Apollo', 'Federation'],
    readTime: 21,
  },
];

// Helper functions
export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getCategoryInfo = (category: BlogCategory): CategoryInfo | undefined => {
  return categories.find(c => c.id === category);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    post.category.toLowerCase().includes(lowerQuery)
  );
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
};
