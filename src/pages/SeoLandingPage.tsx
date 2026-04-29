import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import { BASE_URL, BLOG_POSTS, HIDDEN_KEYWORD_PAGES, PRODUCT_PAGES, SERVICE_PAGES, SeoLandingPageConfig } from "@/seo/seoConfig";

const clamp = (value: string, maxChars: number) => {
  if (value.length <= maxChars) return value;
  // Keep it simple; avoid breaking words too aggressively.
  return value.slice(0, maxChars - 1).trimEnd() + "…";
};

function cyclePick<T>(arr: T[], start: number, count: number, excludeFn?: (item: T) => boolean): T[] {
  if (arr.length === 0 || count <= 0) return [];
  const result: T[] = [];
  let idx = ((start % arr.length) + arr.length) % arr.length;

  // We try up to a full cycle + a bit more to satisfy exclusions.
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
  sameAs: [
    "https://linkedin.com/company/softpulseai",
    "https://twitter.com/softpulseai",
    "https://facebook.com/softpulseai",
    "https://instagram.com/softpulseai",
  ],
};

type Props = {
  config: SeoLandingPageConfig;
};

const SeoLandingPage = ({ config }: Props) => {
  const canonicalUrl = `${BASE_URL}${config.path}`;
  const metaTitle = clamp(config.metaTitle, 60);
  const metaDescription = clamp(config.metaDescription, 150);

  const productLinks = cyclePick(PRODUCT_PAGES, config.order, 3, (p) => p.path === config.path);
  const serviceLinks = cyclePick(SERVICE_PAGES, config.order + 1, 3);
  const hiddenLinks = cyclePick(HIDDEN_KEYWORD_PAGES, config.order + 2, 2, (h) => h.path === config.path);

  // One blog link per requirement.
  const blog = BLOG_POSTS[(config.order + 3) % BLOG_POSTS.length];
  const blogUrl = `/blog/${blog.slug}`;

  const productOrServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: config.primaryKeyword,
    description: metaDescription,
    brand: { "@type": "Organization", name: "SoftpulseAI Technologies LLP", url: BASE_URL },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${BASE_URL}/favicon.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${BASE_URL}/favicon.png`} />

        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productOrServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background relative z-10">
        <FloatingShapes />
        <Navigation />
        <div className="pt-20 relative z-10">
          <main className="min-h-[60vh]">
            <section className="py-14">
              <div className="container mx-auto px-2">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                    {config.primaryKeyword}
                  </h1>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                    {config.kind === "product"
                      ? "A unified healthcare platform that connects HIS/CMS workflows with CRM, AI automation, HR/payroll, and measurable marketing outcomes."
                      : config.kind === "service"
                        ? "Implementation and engineering services that turn healthcare workflows into connected systems with CRM, AI automation, HR/payroll, marketing journeys, and dashboards."
                        : "Keyword-focused healthcare/CRM/AI/HR solutions with connected integrations across HIS/CMS, PulseReach CRM, intelligent automation, and real-time dashboards."}
                  </p>
                </div>
              </div>
            </section>

            <section className="py-10">
              <div className="container mx-auto px-2">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Unified Platform Integration (HIS + CRM + AI + HR + Marketing + Web/App)
                  </h2>
                  <p className="text-foreground/80 max-w-4xl mx-auto">
                    SoftPulseAI builds end-to-end solutions so hospital and clinic operations stay connected to patient engagement,
                    automated workflows, workforce visibility, and performance marketing analytics.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                  <div className="glass-card border-white/10 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-3">Healthcare Operations (HIS/HMS/CMS)</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Digitize front office, IPD/OPD workflows, doctor scheduling, billing coordination, visit timelines, and reporting.
                      Keep data accurate so downstream systems (CRM, messaging, AI, HR, and dashboards) have reliable inputs.
                    </p>
                  </div>
                  <div className="glass-card border-white/10 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-3">CRM + Marketing Automation</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Connect leads and patient engagement to appointment journeys. Trigger WhatsApp automation,
                      social campaigns, and follow-ups from CRM stages so response timing improves and no-shows decrease.
                    </p>
                  </div>
                  <div className="glass-card border-white/10 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-3">AI Automation & Intelligent Workflows</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Automate repetitive steps, assist documentation, and add predictive insights. Intelligent automation turns
                      raw signals into actions while dashboards make outcomes visible to teams.
                    </p>
                  </div>
                  <div className="glass-card border-white/10 p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold mb-3">HR/Payroll + Dashboards</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Workforce data from HR/payroll improves operational readiness. Build dashboards for KPIs that leadership
                      can act on quickly—linking operations, workforce, CRM conversion, and marketing performance.
                      We deliver these insights through secure web portals and mobile-ready views so teams stay informed on the go.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-10">
              <div className="container mx-auto px-2">
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass-card border-white/10 p-6 rounded-2xl">
                      <h3 className="text-2xl font-bold mb-3">
                        {config.kind === "service" ? "Use Cases" : "Core Use Cases"}
                      </h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li>Automate appointment confirmations and follow-ups with CRM + WhatsApp automation.</li>
                        <li>Connect HIS/CMS workflows to dashboards for real-time patient flow and performance KPIs.</li>
                        <li>Use AI automation to reduce manual work and support smarter operational decisions.</li>
                        <li>Synchronize workforce/attendance insights to improve scheduling and readiness.</li>
                        <li>Measure marketing ROI by tracking conversion outcomes end-to-end.</li>
                      </ul>
                    </div>
                    <div className="glass-card border-white/10 p-6 rounded-2xl">
                      <h3 className="text-2xl font-bold mb-3">
                        {config.kind === "service" ? "Business Outcomes" : "Business Outcomes"}
                      </h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li>Reduce administrative burden with workflow automation and connected data.</li>
                        <li>Increase appointment adherence by improving response timing and patient engagement.</li>
                        <li>Improve revenue visibility via BI dashboards and measurable KPI frameworks.</li>
                        <li>Scale delivery faster with secure integration patterns and technical support.</li>
                        <li>Enhance patient experience through consistent, AI-assisted communication.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-12">
              <div className="container mx-auto px-2">
                <div className="glass-card border-white/10 p-8 rounded-2xl max-w-6xl mx-auto">
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
                        <Link to={blogUrl} className="text-primary hover:underline">
                          {blog.primaryKeyword}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-12">
              <div className="container mx-auto px-2">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">FAQ</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {config.faq.map((item) => (
                      <div key={item.question} className="glass-card border-white/10 p-6 rounded-2xl">
                        <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                        <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default SeoLandingPage;

