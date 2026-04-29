import { defineConfig } from 'vite';
import type { Plugin } from "vite";
import type { PluginContext } from "rollup";
import react from "@vitejs/plugin-react-swc";
import path from 'path';
import fs from "fs";
import { BASE_URL, BLOG_POSTS, HIDDEN_KEYWORD_PAGES, PRODUCT_PAGES, SERVICE_PAGES } from "./src/seo/seoConfig";

function sitemapGeneratorPlugin(): Plugin {
  return {
    name: "softpulse-sitemap-generator",
    generateBundle(this: PluginContext) {
      const lastmod = new Date().toISOString().slice(0, 10);

      const staticPaths = [
        "/",
        "/about",
        "/services",
        "/products",
        "/growth-suite",
        "/portfolio",
        "/contact",
        "/growth",
        "/healthtech",
        "/privacy-policy",
        "/softpulse-his",
        "/medpulse-cms",
        "/docpulse",
        "/patientpulse",
        "/ai-healthcare",
        "/dashboard",
      ];

      const seoLandingPaths = [
        ...PRODUCT_PAGES.map((p) => p.path),
        ...SERVICE_PAGES.map((p) => p.path),
        ...HIDDEN_KEYWORD_PAGES.map((p) => p.path),
      ];

      const blogPaths = BLOG_POSTS.map((b) => `/blog/${b.slug}`);

      const allPaths = Array.from(new Set([...staticPaths, ...seoLandingPaths, ...blogPaths]));

      const toXmlItem = (locPath: string, priority: number) => {
        const loc = `${BASE_URL}${locPath}`;
        return [
          "  <url>",
          `    <loc>${loc}</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          "    <changefreq>weekly</changefreq>",
          `    <priority>${priority.toFixed(2)}</priority>`,
          "  </url>",
        ].join("\n");
      };

      const xmlBody = allPaths
        .sort((a, b) => {
          if (a === "/") return -1;
          if (b === "/") return 1;
          return a.localeCompare(b);
        })
        .map((p) => {
          const priority = p === "/" ? 1.0 : p.startsWith("/blog/") ? 0.60 : 0.80;
          return toXmlItem(p, priority);
        })
        .join("\n");

      const sitemapXml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        xmlBody,
        "</urlset>",
        "",
      ].join("\n");

      // Emit sitemap.xml into dist/ so crawlers always see the complete URL set.
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: sitemapXml,
      });

      // Keep source sitemap in sync too (useful for quick verification in repo).
      fs.writeFileSync(path.resolve(__dirname, "public/sitemap.xml"), sitemapXml, "utf8");
    },
  };
}

export default defineConfig({
  base: '/', // Correct base for your repo!
  
  plugins: [
    react(),
    sitemapGeneratorPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
