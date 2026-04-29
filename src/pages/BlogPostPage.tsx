import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import {
  BASE_URL,
  BLOG_POSTS,
  HIDDEN_KEYWORD_PAGES,
  PRODUCT_PAGES,
  SERVICE_PAGES,
  BlogPostConfig,
} from "@/seo/seoConfig";

const clamp = (value: string, maxChars: number) => {
  if (value.length <= maxChars) return value;
  return value.slice(0, maxChars - 1).trimEnd() + "…";
};

function cyclePick<T>(arr: T[], start: number, count: number, excludeFn?: (item: T) => boolean): T[] {
  if (arr.length === 0 || count <= 0) return [];
  const result: T[] = [];
  let idx = ((start % arr.length) + arr.length) % arr.length;

  for (let tries = 0; tries < arr.length * 2 && result.length < count; tries++) {
    const candidate = arr[idx];
    if (!excludeFn || !excludeFn(candidate)) result.push(candidate);
    idx = (idx + 1) % arr.length;
  }
  return result;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SoftpulseAI Technologies LLP",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
};

function stableHash(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  return hash;
}

function makeParagraph(seed: number, keyword: string, accent: string, index: number) {
  const v1 = [
    `When teams adopt ${keyword}, the goal is rarely “just software”—it’s operational speed, consistency, and measurable outcomes.`,
    `A strong approach to ${keyword} turns scattered workflows into connected systems that can be tracked, improved, and scaled.`,
    `Implementing ${keyword} becomes much easier when you treat integrations as first-class requirements and design for real-world workflows.`,
  ];
  const v2 = [
    `SoftPulseAI connects healthcare operations, CRM journeys, AI automation, HR/payroll workflows, and dashboards so data flows end-to-end.`,
    `Instead of isolating modules, we orchestrate the platform: HIS/HMS/CMS data feeds CRM stages, which trigger marketing actions, while AI insights inform decisions.`,
    `With ${accent} as the integration focus, your teams can reduce manual steps and improve response timing across the entire patient journey.`,
  ];
  const v3 = [
    `From a performance marketing perspective, ${keyword} can help attribute leads to outcomes—so budgets and workflows improve over time.`,
    `From an AI perspective, the system can automate repetitive work and provide predictive signals that reduce delays and improve attendance.`,
    `From an HR perspective, consistent workforce visibility supports staffing readiness and helps operations stay stable.`,
  ];

  const a = v1[seed % v1.length];
  const b = v2[(seed + index) % v2.length];
  const c = v3[(seed + index * 7) % v3.length];

  return `${a} ${b} ${c}`;
}

function generateBlogSections(blog: BlogPostConfig) {
  const seed = stableHash(blog.slug);
  const keyword = blog.primaryKeyword;

  const accentByCategory: Record<BlogPostConfig["category"], string> = {
    healthcare: "HIS/CMS integration",
    crm: "lead management pipelines",
    marketing: "WhatsApp + social conversion funnels",
    ai: "intelligent automation orchestration",
    hr: "attendance-to-payroll workflows",
    development: "secure web/app architecture",
    dashboards: "real-time KPI visibility",
  };

  const accent = accentByCategory[blog.category];

  const intro = [
    makeParagraph(seed, keyword, accent, 0),
    makeParagraph(seed + 11, keyword, accent, 1),
  ];

  const definition = [
    `In practice, ${keyword} means aligning processes, data, and outcomes. It includes the workflows people actually use (appointments, follow-ups, documentation, approvals) and the measurement layer that proves impact.`,
    `The differentiator is integration: connecting HIS/HMS/CMS operations with PulseReach-style CRM, AI automation, HR/payroll, and performance analytics. That combination helps teams move from “activities” to results.`,
  ];

  const integration = [
    `A connected platform makes ${keyword} more valuable because each subsystem improves the others. Healthcare modules keep records accurate; CRM tracks conversion and next steps; marketing automation reaches patients at the right moment; and AI transforms signals into actions.`,
    `When you add dashboards, leadership gets real-time visibility into KPIs like show rate, conversion rate, response timing, workforce readiness, and operational throughput. These KPIs become the basis for continuous improvement.`,
  ];

  const implementationSteps: { heading: string; items: string[] } = {
    heading: `Implementation steps for ${keyword} (high-impact sequence)`,
    items: [
      "Map workflows: define the patient journey, lead stages, and operational handoffs you want to eliminate.",
      "Design integrations first: decide which data flows into HIS/CMS, CRM pipelines, messaging automation, HR/payroll, and dashboards.",
      "Implement a clean KPI framework: choose measurable outcomes and instrument tracking early so results are visible.",
      "Automate with rules before AI: start with event-based triggers and reduce manual follow-ups; then enhance with AI signals.",
      "Pilot in a controlled scope: validate conversion, adherence, and operational speed before expanding.",
      "Operationalize: add monitoring, logging, and support so the platform remains stable after rollout.",
    ],
  };

  const mistakes = [
    `A common mistake is implementing ${keyword} as isolated pages or modules. Even a feature-rich system underperforms when data silos block automation and reporting.`,
    `Another risk is skipping KPI design. Without dashboards and attribution, it becomes difficult to prove ROI or to prioritize what to optimize next.`,
  ];

  const outcomes = [
    `With the right integration design, ${keyword} can reduce administrative overhead, improve appointment adherence, and increase conversion quality by shortening the time between lead capture and follow-up.`,
    `Teams also gain decision clarity: BI dashboards make bottlenecks visible, AI automation helps teams act earlier, and workforce workflows support operational readiness throughout the month.`,
  ];

  const moreDetails: string[] = [];
  for (let i = 0; i < 7; i++) {
    moreDetails.push(makeParagraph(seed + i * 17, keyword, accent, i + 2));
  }

  return [
    { heading: "Introduction", paragraphs: intro },
    { heading: "What You Get from " + keyword, paragraphs: definition },
    { heading: "How It Integrates with the SoftPulseAI Platform", paragraphs: integration },
    {
      heading: implementationSteps.heading,
      list: implementationSteps.items,
    },
    { heading: "Common Mistakes to Avoid", paragraphs: mistakes },
    { heading: "Expected Business Outcomes", paragraphs: outcomes },
    { heading: "Practical Guidance (What to Do Next)", paragraphs: moreDetails },
  ] as const;
}

const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug ?? "";

  const blog = BLOG_POSTS.find((b) => b.slug === slug);
  const canonicalUrl = `${BASE_URL}/blog/${slug}`;

  if (!blog) {
    return (
      <div className="min-h-screen bg-background relative z-10">
        <FloatingShapes />
        <Navigation />
        <div className="pt-20 relative z-10">
          <main className="container mx-auto px-2 pt-16 pb-24">
            <h1 className="text-4xl font-bold gradient-text mb-4">Blog post not found</h1>
            <p className="text-foreground/80">The requested blog URL does not exist in this SEO set.</p>
            <div className="mt-6">
              <Link to="/" className="text-primary hover:underline">
                Go to Home
              </Link>
            </div>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    );
  }

  const metaTitle = clamp(blog.metaTitle, 60);
  const metaDescription = clamp(blog.metaDescription, 150);

  const productLinks = cyclePick(PRODUCT_PAGES, blog.order, 3);
  const serviceLinks = cyclePick(SERVICE_PAGES, blog.order + 1, 3);
  const hiddenLinks = cyclePick(HIDDEN_KEYWORD_PAGES, blog.order + 2, 2);
  const nextBlog = BLOG_POSTS[(blog.order + 1) % BLOG_POSTS.length];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blog.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: metaDescription,
    author: { "@type": "Organization", name: "SoftpulseAI Technologies LLP" },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: blog.primaryKeyword,
    description: metaDescription,
    brand: { "@type": "Organization", name: "SoftpulseAI Technologies LLP", url: BASE_URL },
  };

  const sections = generateBlogSections(blog);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${BASE_URL}/favicon.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${BASE_URL}/favicon.png`} />

        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background relative z-10">
        <FloatingShapes />
        <Navigation />
        <div className="pt-20 relative z-10">
          <main className="container mx-auto px-2 pt-10 pb-16">
            <article className="max-w-4xl mx-auto">
              <header className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{blog.title}</h1>
                <p className="text-foreground/80 leading-relaxed">
                  {blog.category === "healthcare"
                    ? "Healthcare-first guidance designed for hospitals and clinics."
                    : blog.category === "crm"
                      ? "CRM and operational guidance focused on lead-to-appointment conversion."
                      : blog.category === "marketing"
                        ? "Marketing and automation guidance focused on measurable ROI."
                        : blog.category === "ai"
                          ? "AI automation guidance designed for practical implementation."
                          : blog.category === "hr"
                            ? "HR and workforce guidance for attendance, approvals, and payroll."
                            : blog.category === "development"
                              ? "Engineering guidance for secure web/app delivery and integrations."
                              : "Dashboards and KPI guidance for real-time decision-making."}
                </p>
              </header>

              {sections.map((section) => (
                <section key={section.heading} className="mb-10">
                  <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
                  {"paragraphs" in section && section.paragraphs && (
                    <div className="space-y-4">
                      {section.paragraphs.map((p, idx) => (
                        <p key={idx} className="text-foreground/80 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                  {"list" in section && section.list && (
                    <ul className="space-y-2 text-foreground/80 list-disc pl-5">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6">FAQ</h2>
                <div className="space-y-4">
                  {blog.faq.map((item) => (
                    <div key={item.question} className="glass-card border-white/10 p-6 rounded-2xl">
                      <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                      <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <section className="mt-14">
              <div className="glass-card border-white/10 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">Explore Related Solutions</h2>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Related Products (3)</h3>
                    <ul className="space-y-2 text-foreground/80">
                      {productLinks.map((p) => (
                        <li key={p.path}>
                          <Link to={p.path} className="text-primary hover:underline">
                            {p.anchorText}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Related Services (3)</h3>
                    <ul className="space-y-2 text-foreground/80">
                      {serviceLinks.map((s) => (
                        <li key={s.path}>
                          <Link to={s.path} className="text-primary hover:underline">
                            {s.anchorText}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Hidden Keyword Pages (2)</h3>
                    <ul className="space-y-2 text-foreground/80">
                      {hiddenLinks.map((h) => (
                        <li key={h.path}>
                          <Link to={h.path} className="text-primary hover:underline">
                            {h.anchorText}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Read a Related Blog (1)</h3>
                    <p className="text-foreground/80">
                      <Link to={`/blog/${nextBlog.slug}`} className="text-primary hover:underline">
                        {nextBlog.primaryKeyword}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;

