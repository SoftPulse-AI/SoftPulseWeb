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
  Building2, 
  Users, 
  Activity, 
  Pill, 
  ClipboardList, 
  FileText,
  Calendar,
  BarChart3,
  Shield,
  Zap,
  Check,
  ArrowRight
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

const SoftPulseHIS = () => {
  const seoCfg = PRODUCT_PAGES.find((p) => p.path === "/softpulse-his");
  if (!seoCfg) return null;

  const canonicalUrl = `${BASE_URL}${seoCfg.path}`;
  const metaTitle = clamp(seoCfg.metaTitle, 60);
  const metaDescription = clamp(seoCfg.metaDescription, 150);

  const productLinks = cyclePick(PRODUCT_PAGES, seoCfg.order, 3, (p) => p.path === seoCfg.path);
  const serviceLinks = cyclePick(SERVICE_PAGES, seoCfg.order + 1, 3);
  const hiddenLinks = cyclePick(HIDDEN_KEYWORD_PAGES, seoCfg.order + 2, 2, (h) => h.path === seoCfg.path);
  const blog = BLOG_POSTS[(seoCfg.order + 3) % BLOG_POSTS.length];

  const modules = [
    { name: "Front Office", icon: <Building2 className="w-6 h-6" />, description: "Patient registration, appointments, and front desk operations" },
    { name: "IPD", icon: <Users className="w-6 h-6" />, description: "Inpatient department management and bed allocation" },
    { name: "Physician", icon: <Activity className="w-6 h-6" />, description: "Doctor workflows and clinical decision support" },
    { name: "Nursing", icon: <Shield className="w-6 h-6" />, description: "Nursing care plans and patient monitoring" },
    { name: "Pharmacy", icon: <Pill className="w-6 h-6" />, description: "Medication management and inventory control" },
    { name: "Inventory", icon: <ClipboardList className="w-6 h-6" />, description: "Supply chain and inventory management" },
    { name: "Discharge Summary", icon: <FileText className="w-6 h-6" />, description: "Automated discharge summaries and documentation" },
    { name: "Daycare", icon: <Calendar className="w-6 h-6" />, description: "Day care procedures and outpatient services" },
    { name: "Masters", icon: <BarChart3 className="w-6 h-6" />, description: "Master data management and configuration" },
    { name: "MIS Reports", icon: <FileText className="w-6 h-6" />, description: "Management information system reports" },
    { name: "Billing", icon: <ClipboardList className="w-6 h-6" />, description: "Financial management and billing processes" },
    { name: "Emergency", icon: <Zap className="w-6 h-6" />, description: "Emergency department management" },
    { name: "CRM", icon: <Users className="w-6 h-6" />, description: "Customer relationship management" },
    { name: "Dashboard", icon: <BarChart3 className="w-6 h-6" />, description: "Real-time analytics and insights" },
    { name: "OT Management", icon: <Activity className="w-6 h-6" />, description: "Operating theater management" },
    { name: "Housekeeping", icon: <Building2 className="w-6 h-6" />, description: "Facility management and housekeeping" },
    { name: "Diet", icon: <Pill className="w-6 h-6" />, description: "Nutrition and diet management" },
    { name: "Employee", icon: <Users className="w-6 h-6" />, description: "Human resource management" }
  ];

  const benefits = [
    "Comprehensive end-to-end hospital management solution",
    "Customizable workflows to match your hospital processes",
    "Real-time data synchronization across all departments",
    "Seamless integration with medical devices and lab equipment",
    "Enhanced patient safety through medication verification",
    "Reduced administrative burden with automation",
    "Improved financial performance through better billing practices",
    "End-to-End Automation: Automate all hospital workflows, from registration to discharge",
    "Smart Workflows: Tailored workflows for clinical, administrative, and financial processes",
    "Built-in AI Features: Leverage AI to enhance decision-making, patient care, and operational efficiency",
    "Real-Time Monitoring: Monitor patient status, bed occupancy, and hospital performance in real-time",
    "Comprehensive Reporting: Generate real-time, detailed reports for management and healthcare teams"
  ];

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
            <Badge className="gradient-primary mb-6">Complete HIS Solution</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SoftPulse HIS: A Solution to Optimize <span className="gradient-text">Hospital Operations</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              SoftPulse HIS is a comprehensive hospital information system that streamlines operations across all departments, 
              enabling healthcare providers to focus on what matters most – patient care. With 18+ integrated modules, 
              SoftPulse HIS provides end-to-end digitization for hospitals of all sizes.
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

      {/* Unified Platform Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SoftPulse: One Unified Platform for All Your <span className="gradient-text">Hospital Management Needs</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              SoftPulse is a comprehensive Hospital Information System (HIS) that brings together every hospital function — 
              from Front Office, IPD, Emergency, and Nursing to Pharmacy, OT, Billing, and beyond. Below is a complete suite 
              of powerful, easy-to-use modules designed to simplify workflows, improve patient care, and boost efficiency at every step.
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
              Why Choose <span className="gradient-text">SoftPulse HIS</span>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Hospital Operations?</span>
            </h3>
            <p className="text-xl text-foreground/80 mb-8">
              Join MUltiple hospitals across India who trust SoftPulse HIS for their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Contact Sales
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
              SoftPulse HIS connects healthcare workflows with CRM, AI automation, HR/payroll insights, and marketing journeys (including WhatsApp automation), delivered through web portals and mobile-ready experiences for staff and patients.
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

export default SoftPulseHIS;