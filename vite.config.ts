import { defineConfig } from "vite";
import type { Plugin } from "vite";
import type { PluginContext } from "rollup";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import {
  BASE_URL,
  BLOG_POSTS,
  HIDDEN_KEYWORD_PAGES,
  PRODUCT_PAGES,
  SERVICE_PAGES,
} from "./src/seo/seoConfig";

type RouteMeta = {
  path: string;
  title: string;
  description: string;
};

const STATIC_ROUTE_META: RouteMeta[] = [
  {
    path: "/",
    title: "SoftpulseAI Technologies - AI Solutions & Custom Software Development",
    description:
      "Leading IT solutions provider in India. Custom software, AI automation, healthcare technology (HIS/CMS), mobile apps, web development, and digital transformation.",
  },
  {
    path: "/about",
    title: "About SoftpulseAI Technologies | AI & Software Company",
    description:
      "Learn about SoftpulseAI Technologies — AI automation, healthcare software, CRM, and custom development for hospitals, clinics, and growing businesses.",
  },
  {
    path: "/services",
    title: "IT Services | SoftpulseAI Technologies",
    description:
      "Custom software, AI automation, mobile apps, web development, digital marketing, and IT outsourcing services from SoftpulseAI.",
  },
  {
    path: "/healthtech",
    title: "Healthcare Software Solutions | SoftPulse HIS, MedPulse CMS, AI & Dashboards",
    description:
      "Healthcare software for hospitals and clinics: SoftPulse HIS, MedPulse CMS, DocPulse, PatientPulse, AI Healthcare Solutions, and BI Dashboards.",
  },
  {
    path: "/products",
    title: "Healthcare Products | SoftPulse HIS, MedPulse CMS & AI HealthTech",
    description:
      "Explore SoftPulse HIS, MedPulse CMS, DocPulse, PatientPulse, AI healthcare tools, and BI dashboards built for hospitals and clinics.",
  },
  {
    path: "/growth",
    title: "Growth Suite | SoftpulseAI Technologies",
    description:
      "Growth Suite for patient acquisition, CRM journeys, WhatsApp automation, and performance marketing analytics.",
  },
  {
    path: "/growth-suite",
    title: "Growth Suite | SoftpulseAI Technologies",
    description:
      "Growth Suite for patient acquisition, CRM journeys, WhatsApp automation, and performance marketing analytics.",
  },
  {
    path: "/portfolio",
    title: "Portfolio | SoftpulseAI Technologies",
    description:
      "See SoftpulseAI project outcomes across healthcare software, AI automation, CRM, and custom development.",
  },
  {
    path: "/contact",
    title: "Contact SoftpulseAI Technologies",
    description:
      "Contact SoftpulseAI for custom software, healthcare solutions, AI automation, and digital transformation. Book a demo today.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | SoftpulseAI Technologies",
    description: "Privacy policy for SoftpulseAI Technologies websites and services.",
  },
  {
    path: "/softpulse-his",
    title: "SoftPulse HIS | Hospital Information System",
    description:
      "SoftPulse HIS — hospital information system with modules, integrations, AI automation, and real-time dashboards.",
  },
  {
    path: "/medpulse-cms",
    title: "MedPulse CMS | Clinic Management System",
    description:
      "MedPulse CMS — clinic management system for OPD workflows, appointments, billing, and patient engagement.",
  },
  {
    path: "/docpulse",
    title: "DocPulse | Doctor Platform & Dashboard",
    description:
      "DocPulse doctor platform for scheduling, communication, and clinical productivity dashboards.",
  },
  {
    path: "/patientpulse",
    title: "PatientPulse | Patient Engagement App",
    description:
      "PatientPulse patient engagement app for appointments, reminders, and healthcare communication.",
  },
  {
    path: "/ai-healthcare",
    title: "AI Healthcare Solutions | SoftpulseAI",
    description:
      "AI healthcare solutions for diagnostics support, automation, predictions, and hospital operations.",
  },
  {
    path: "/dashboard",
    title: "BI Dashboard Analytics | SoftpulseAI",
    description:
      "Business intelligence dashboards for healthcare KPIs, CRM conversion, and operational performance.",
  },
];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function collectAllRouteMeta(): RouteMeta[] {
  const seoLanding = [...PRODUCT_PAGES, ...SERVICE_PAGES, ...HIDDEN_KEYWORD_PAGES].map((p) => ({
    path: p.path,
    title: p.metaTitle,
    description: p.metaDescription,
  }));

  const blogs = BLOG_POSTS.map((b) => ({
    path: `/blog/${b.slug}`,
    title: b.metaTitle,
    description: b.metaDescription,
  }));

  const byPath = new Map<string, RouteMeta>();
  for (const route of [...STATIC_ROUTE_META, ...seoLanding, ...blogs]) {
    byPath.set(route.path, route);
  }
  return Array.from(byPath.values());
}

function injectRouteMeta(html: string, route: RouteMeta) {
  const canonical = route.path === "/" ? `${BASE_URL}/` : `${BASE_URL}${route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const url = escapeHtml(canonical);

  let next = html;
  next = next.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  next = next.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="title" content="${title}" />`
  );
  next = next.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${description}" />`
  );
  next = next.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${url}" />`
  );
  next = next.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${url}" />`
  );
  next = next.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`
  );
  next = next.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`
  );
  next = next.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:url" content="${url}" />`
  );
  next = next.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${title}" />`
  );
  next = next.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${description}" />`
  );
  return next;
}

function softpulseSeoPlugin(): Plugin {
  return {
    name: "softpulse-seo-static-routes",
    generateBundle(this: PluginContext) {
      const lastmod = new Date().toISOString().slice(0, 10);
      const allPaths = collectAllRouteMeta().map((r) => r.path);

      const toXmlItem = (locPath: string, priority: number) => {
        const loc = locPath === "/" ? `${BASE_URL}/` : `${BASE_URL}${locPath}`;
        return [
          "  <url>",
          `    <loc>${loc}</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          "    <changefreq>weekly</changefreq>",
          `    <priority>${priority.toFixed(2)}</priority>`,
          "  </url>",
        ].join("\n");
      };

      const xmlBody = [...allPaths]
        .sort((a, b) => {
          if (a === "/") return -1;
          if (b === "/") return 1;
          return a.localeCompare(b);
        })
        .map((p) => {
          const priority = p === "/" ? 1.0 : p.startsWith("/blog/") ? 0.6 : 0.8;
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

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: sitemapXml,
      });

      fs.writeFileSync(path.resolve(__dirname, "public/sitemap.xml"), sitemapXml, "utf8");
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(distDir, "index.html");
      if (!fs.existsSync(indexPath)) return;

      const baseHtml = fs.readFileSync(indexPath, "utf8");
      const routes = collectAllRouteMeta();

      for (const route of routes) {
        const html = injectRouteMeta(baseHtml, route);
        if (route.path === "/") {
          fs.writeFileSync(indexPath, html, "utf8");
          continue;
        }

        const outDir = path.join(distDir, route.path.replace(/^\//, ""));
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
      }

      // GitHub Pages serves 404.html for unknown paths. Keep SPA shell so users
      // still land in the React app (known routes now have real 200 HTML files).
      fs.writeFileSync(path.join(distDir, "404.html"), baseHtml, "utf8");

      // Ensure custom domain file is present in dist for gh-pages.
      const cnameSrc = path.resolve(__dirname, "CNAME");
      if (fs.existsSync(cnameSrc)) {
        fs.copyFileSync(cnameSrc, path.join(distDir, "CNAME"));
      }

      console.log(`[seo] Generated static HTML for ${routes.length} routes (GitHub Pages 200 OK).`);
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), softpulseSeoPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
