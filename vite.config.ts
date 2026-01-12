import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://www.stackcraft.io";

// Blog posts data for RSS generation (synced with src/data/blogPosts.ts)
const blogPostsForRss = [
  {
    slug: 'production-grade-dotnet-api-design',
    title: 'Production-Grade .NET API Design Patterns',
    description: 'Learn battle-tested patterns for building scalable, maintainable APIs with ASP.NET Core. Covers versioning, error handling, authentication, and performance optimization.',
    publishedAt: '2026-01-10T10:00:00Z',
    categories: ['.NET', 'API Design', 'ASP.NET Core'],
  },
  {
    slug: 'microservices-architecture-patterns',
    title: 'Microservices Architecture: From Monolith to Distributed',
    description: 'A comprehensive playbook for designing, building, and operating microservices at scale. Includes service decomposition, communication patterns, and data management.',
    publishedAt: '2026-01-08T12:00:00Z',
    categories: ['Microservices', 'Architecture', 'Distributed Systems'],
  },
  {
    slug: 'java-spring-boot-production-checklist',
    title: 'Java Spring Boot Production Readiness Checklist',
    description: 'Essential checklist for deploying Spring Boot applications to production. Covers security, performance, monitoring, and operational excellence.',
    publishedAt: '2026-01-06T14:00:00Z',
    categories: ['Java', 'Spring Boot', 'Production'],
  },
  {
    slug: 'kubernetes-devops-pipeline',
    title: 'Building a Complete Kubernetes DevOps Pipeline',
    description: 'End-to-end guide for creating robust CI/CD pipelines with Kubernetes. GitOps, Helm, ArgoCD, and progressive delivery strategies.',
    publishedAt: '2026-01-04T09:00:00Z',
    categories: ['Kubernetes', 'DevOps', 'CI/CD'],
  },
  {
    slug: 'aws-cloud-architecture-best-practices',
    title: 'AWS Cloud Architecture Best Practices',
    description: 'Comprehensive guide to building well-architected solutions on AWS. Covers security, reliability, performance, cost optimization, and operational excellence.',
    publishedAt: '2026-01-02T11:00:00Z',
    categories: ['AWS', 'Cloud', 'Architecture'],
  },
  {
    slug: 'llm-integration-patterns',
    title: 'LLM Integration Patterns for Production Systems',
    description: 'Practical patterns for integrating Large Language Models into production applications. Covers prompt engineering, RAG, fine-tuning, and cost optimization.',
    publishedAt: '2025-12-28T10:00:00Z',
    categories: ['AI', 'LLM', 'Machine Learning'],
  },
  {
    slug: 'comprehensive-testing-strategy',
    title: 'Comprehensive Testing Strategy for Modern Applications',
    description: 'Build a robust testing pyramid with unit, integration, and E2E tests. Covers TDD, BDD, contract testing, and performance testing.',
    publishedAt: '2025-12-25T08:00:00Z',
    categories: ['Testing', 'TDD', 'Quality'],
  },
  {
    slug: 'graphql-api-design-guide',
    title: 'GraphQL API Design: The Complete Guide',
    description: 'Design and implement production-ready GraphQL APIs. Covers schema design, resolvers, authentication, subscriptions, and performance optimization.',
    publishedAt: '2025-12-20T14:00:00Z',
    categories: ['GraphQL', 'API', 'Schema'],
  },
];

function generateRssFeed() {
  try {
    const lastBuildDate = new Date().toUTCString();
    
    const itemsXml = blogPostsForRss
      .map((post) => {
        const pubDate = new Date(post.publishedAt).toUTCString();
        const categoriesXml = post.categories
          .map((cat) => `      <category>${cat}</category>`)
          .join('\n');
        
        return `    <item>
      <title>${post.title}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${post.description}</description>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>StackCraft Team</dc:creator>
${categoriesXml}
      <media:content url="${SITE_URL}/og-image.png" medium="image"/>
    </item>`;
      })
      .join('\n\n');

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>StackCraft Engineering Playbooks</title>
    <link>${SITE_URL}</link>
    <description>Production-grade engineering playbooks covering AI, .NET, Java, DevOps, Cloud, System Architecture, Testing, and API Design. Battle-tested patterns from real engineering teams.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <pubDate>${lastBuildDate}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/og-image.png</url>
      <title>StackCraft</title>
      <link>${SITE_URL}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <managingEditor>hello@stackcraft.io (StackCraft Team)</managingEditor>
    <webMaster>hello@stackcraft.io (StackCraft Team)</webMaster>
    <copyright>Copyright 2026 StackCraft. All rights reserved.</copyright>
    <category>Technology</category>
    <category>Software Engineering</category>
    <category>Programming</category>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>StackCraft RSS Generator</generator>

${itemsXml}

  </channel>
</rss>
`;

    const outPath = path.resolve(__dirname, "public/rss.xml");
    fs.writeFileSync(outPath, rssXml, "utf8");
  } catch (e) {
    console.warn("[stackcraft-rss] Failed to generate RSS feed:", e);
  }
}

function generateSitemap() {
  try {
    const appPath = path.resolve(__dirname, "src/App.tsx");
    const appSource = fs.readFileSync(appPath, "utf8");

    const routes = Array.from(appSource.matchAll(/<Route\s+path="([^"]+)"/g))
      .map((m) => m[1])
      .filter((p) => p && p !== "*" && !p.includes(":"));

    const uniqueRoutes = Array.from(new Set(routes));

    // Order: home first, then alphabetically
    uniqueRoutes.sort((a, b) => {
      if (a === "/") return -1;
      if (b === "/") return 1;
      return a.localeCompare(b);
    });

    const lastmod = new Date().toISOString().split("T")[0];

    const priorityFor = (route: string) => {
      if (route === "/") return "1.0";
      if (["/playbooks", "/blog"].includes(route)) return "0.9";
      if (["/platform", "/community", "/search"].includes(route)) return "0.8";
      if (["/about", "/roadmap"].includes(route)) return "0.7";
      return "0.3";
    };

    const changefreqFor = (route: string) => {
      if (route === "/") return "daily";
      if (["/playbooks", "/blog", "/platform", "/community", "/search"].includes(route)) return "weekly";
      if (["/about", "/roadmap"].includes(route)) return "monthly";
      return "yearly";
    };

    const urlsXml = uniqueRoutes
      .map((route) => {
        const loc = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
        const changefreq = changefreqFor(route);
        const priority = priorityFor(route);

        if (route === "/") {
          return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n    <image:image>\n      <image:loc>${SITE_URL}/og-image.png</image:loc>\n      <image:title>StackCraft - Production-Grade Engineering Playbooks</image:title>\n    </image:image>\n  </url>`;
        }

        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
      })
      .join("\n\n");

    // Add blog post URLs
    const blogUrlsXml = blogPostsForRss
      .map((post) => {
        const loc = `${SITE_URL}/blog/${post.slug}`;
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${post.publishedAt.split("T")[0]}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
      })
      .join("\n\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urlsXml}

${blogUrlsXml}

</urlset>
`;

    const outPath = path.resolve(__dirname, "public/sitemap.xml");
    fs.writeFileSync(outPath, xml, "utf8");
  } catch (e) {
    console.warn("[stackcraft-sitemap] Failed to generate sitemap:", e);
  }
}

function seoPlugin(): Plugin {
  return {
    name: "stackcraft-seo",
    configureServer() {
      generateSitemap();
      generateRssFeed();
    },
    closeBundle() {
      generateSitemap();
      generateRssFeed();
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), seoPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
