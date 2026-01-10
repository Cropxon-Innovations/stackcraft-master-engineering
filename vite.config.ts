import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://www.stackcraft.io";

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
      if (route === "/playbooks") return "0.9";
      if (["/platform", "/community"].includes(route)) return "0.8";
      if (["/about", "/roadmap"].includes(route)) return "0.7";
      return "0.3";
    };

    const changefreqFor = (route: string) => {
      if (route === "/") return "daily";
      if (["/playbooks", "/platform", "/community"].includes(route)) return "weekly";
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

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n${urlsXml}\n\n</urlset>\n`;

    const outPath = path.resolve(__dirname, "public/sitemap.xml");
    fs.writeFileSync(outPath, xml, "utf8");
  } catch (e) {
    // Do not fail builds if sitemap generation fails
    console.warn("[stackcraft-sitemap] Failed to generate sitemap:", e);
  }
}

function sitemapPlugin(): Plugin {
  return {
    name: "stackcraft-sitemap",
    configureServer() {
      generateSitemap();
    },
    closeBundle() {
      generateSitemap();
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), sitemapPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
