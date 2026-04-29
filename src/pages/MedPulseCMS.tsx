import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { BASE_URL, BLOG_POSTS, HIDDEN_KEYWORD_PAGES, PRODUCT_PAGES, SERVICE_PAGES } from "@/seo/seoConfig";
import { 
  UserPlus, 
  Monitor, 
  History, 
  Calendar,
  Bell,
  FileText,
  MessageSquare,
  Smartphone,
  BarChart3,
  Check,
  ArrowRight,
  Clock,
  Users
} from "lucide-react";

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

const MedPulseCMS = () => {
  const seoCfg = PRODUCT_PAGES.find((p) => p.path === "/medpulse-cms");
  if (!seoCfg) return null;

  const canonicalUrl = `${BASE_URL}${seoCfg.path}`;
  const metaTitle = clamp(seoCfg.metaTitle, 60);
  const metaDescription = clamp(seoCfg.metaDescription, 150);

  const productLinks = cyclePick(PRODUCT_PAGES, seoCfg.order, 3, (p) => p.path === seoCfg.path);
  const serviceLinks = cyclePick(SERVICE_PAGES, seoCfg.order + 1, 3);
  const hiddenLinks = cyclePick(HIDDEN_KEYWORD_PAGES, seoCfg.order + 2, 2, (h) => h.path === seoCfg.path);
  const blog = BLOG_POSTS[(seoCfg.order + 3) % BLOG_POSTS.length];

  const modules = [
    { name: "OPD Registration", icon: <UserPlus className="w-6 h-6" />, description: "Quick patient registration and check-in process" },
    { name: "Doctor Dashboard", icon: <Monitor className="w-6 h-6" />, description: "Comprehensive doctor interface for patient management" },
    { name: "Visit History", icon: <History className="w-6 h-6" />, description: "Complete patient visit history and medical records" },
    { name: "Follow-Up", icon: <Clock className="w-6 h-6" />, description: "Automated follow-up scheduling and reminders" },
    { name: "Appointment Booking", icon: <Calendar className="w-6 h-6" />, description: "Online and offline appointment management" },
    { name: "Reminders", icon: <Bell className="w-6 h-6" />, description: "SMS and WhatsApp appointment reminders" },
    { name: "e-Prescriptions", icon: <FileText className="w-6 h-6" />, description: "Digital prescription generation and management" },
    { name: "Ads Management", icon: <MessageSquare className="w-6 h-6" />, description: "Marketing and promotional campaign management" },
    { name: "SMS/WhatsApp", icon: <Smartphone className="w-6 h-6" />, description: "Integrated communication platform" },
    { name: "OPD Analytics", icon: <BarChart3 className="w-6 h-6" />, description: "Real-time analytics and performance insights" }
  ];

  const benefits = [
    "Streamlines operations for multi-doctor clinics and polyclinics",
    "Speeds up OPD processes with paperless workflows",
    "Reduces administrative overhead and paperwork",
    "Improves patient return rates through automated engagement",
    "Enables efficient appointment management and resource allocation",
    "Provides data-driven insights for practice improvement",
    "Enhances patient communication through integrated messaging",
    "Supports both online and in-person consultation workflows",
    "Improves prescription accuracy and patient medication adherence",
    "Customizable to match your clinic's specialty and workflow",
    "Efficient OPD Management: Keep your clinic organized and running smoothly",
    "Enable faster communication with patients via SMS appointments"
  ];

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${BASE_URL}/favicon.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${BASE_URL}/favicon.png`} />

        {/* Structured data: Organization + Product + FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: seoCfg.primaryKeyword,
              description: metaDescription,
              brand: { "@type": "Organization", name: "SoftpulseAI Technologies LLP", url: BASE_URL },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: seoCfg.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }),
          }}
        />
      </Helmet>

      <div className="min-h-screen bg-background relative">
        <FloatingShapes />
        <Navigation />
        <div className="pt-20 relative z-10">
          <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-2">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="gradient-primary mb-6">Clinical Management System</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              MedPulse CMS: Transforming <span className="gradient-text">Outpatient Clinics</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              MedPulse CMS is designed specifically for outpatient clinics and practices, bringing organization and efficiency 
              to busy healthcare environments. With intuitive workflows and powerful features, MedPulse transforms how clinics operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Streamline Operations Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              MedPulse: Streamline <span className="gradient-text">OPD & Clinic Operations</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              MedPulse CMS is designed specifically for outpatient clinics and practices, bringing organization and efficiency 
              to busy healthcare environments. With intuitive workflows and powerful features, MedPulse transforms how clinics operate.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {modules.map((module, index) => (
              <Card key={index} className="glass-card border-white/10 hover-lift group">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:glow-accent transition-all duration-300">
                    <div className="text-primary-foreground">
                      {module.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{module.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-sm">
                    {module.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">MedPulse CMS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 glass-card p-6 rounded-xl border border-white/10">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">50%</div>
              <div className="text-foreground/80">Reduction in Wait Time</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">90%</div>
              <div className="text-foreground/80">Paperless Operations</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">30%</div>
              <div className="text-foreground/80">Increase in Patient Return</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Clinic Operations?</span>
            </h3>
            <p className="text-xl text-foreground/80 mb-8">
              Join leading clinics across India who trust MedPulse CMS for efficient patient management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Internal Linking + FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-2">
          <div className="glass-card border-white/10 p-8 rounded-2xl max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Explore Related Solutions</h2>
            <p className="text-foreground/80 mb-6">
              MedPulse CMS supports clinic operations with CRM conversion journeys, AI-assisted workflows, and HR/payroll visibility, plus marketing journeys (including WhatsApp automation) delivered through web portals and mobile-ready experiences.
            </p>

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
                  <Link to={`/blog/${blog.slug}`} className="text-primary hover:underline">
                    {blog.title}
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {seoCfg.faq.map((item) => (
                  <div key={item.question} className="glass-card border-white/10 p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default MedPulseCMS;