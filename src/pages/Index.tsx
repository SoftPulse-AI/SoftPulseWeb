import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Target, DollarSign, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SoftpulseAI Technologies - #1 AI Solutions & Custom Software Development Company in India | Healthcare HIS/CMS, Mobile Apps</title>
        <meta name="description" content="#1 IT solutions provider in India. Expert in custom software development, AI automation, healthcare technology (HIS/CMS), mobile apps, web development, WhatsApp marketing, and digital transformation. 100+ successful projects, 80+ happy clients. Free consultation available." />
        <meta name="keywords" content="SoftpulseAI, SoftpulseAI Technologies, Softpulse, custom software development India, AI solutions automation, healthcare technology, hospital information system HIS, clinic management system CMS, mobile app development, web development design, WhatsApp SMS chatbot marketing, digital marketing, IT outsourcing support, dashboard analytics development, AI automation, digital transformation, India IT company, software development company, AI company India, healthcare software, MedPulse, SoftPulse, DocPulse, PatientPulse, best IT company India, top software development company, AI automation services, healthcare IT solutions, custom web development, mobile app development company, digital marketing services, WhatsApp business API, chatbot development, business intelligence dashboard, IT consulting services" />
        <meta name="author" content="SoftpulseAI Technologies" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SoftpulseAI Technologies - Leading IT Solutions | Custom Software, AI, Healthcare" />
        <meta property="og:description" content="Transform your business with our innovative digital solutions. Expert in custom software development, AI automation, healthcare technology, and mobile app development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softpulseai.in" />
        <meta property="og:image" content="https://softpulseai.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SoftpulseAI Technologies - Leading IT Solutions" />
        <meta name="twitter:description" content="Expert IT solutions in custom software development, AI automation, healthcare technology, and digital transformation." />
        <link rel="canonical" href="https://softpulseai.in" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "TechnologyCompany"],
            "name": "SoftpulseAI Technologies",
            "alternateName": ["SoftpulseAI", "Softpulse"],
            "description": "Leading IT solutions provider specializing in custom software development, AI automation, healthcare technology, mobile app development, web development, WhatsApp marketing, and digital transformation services",
            "url": "https://softpulseai.in",
            "logo": "https://softpulseai.in/logo.png",
            "foundingDate": "2024",
            "founders": [
              {
                "@type": "Person",
                "name": "SoftpulseAI Team"
              }
            ],
            "services": [
              "Custom Software Development",
              "AI Solutions & Automation", 
              "Healthcare Technology Solutions",
              "Mobile App Development",
              "Web Development & Design",
              "WhatsApp, SMS & Chatbot Marketing",
              "Digital Marketing",
              "Dashboard & Analytics Development",
              "IT Outsourcing & Support"
            ],
            "areaServed": "Worldwide",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "Customer Service",
              "email": "info@softpulseai.in",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressRegion": "India"
            },
            "sameAs": [
              "https://linkedin.com/company/softpulseai",
              "https://twitter.com/softpulseai",
              "https://facebook.com/softpulseai",
              "https://instagram.com/softpulseai"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-x-hidden relative z-10">
          <FloatingShapes />
        <Navigation />
        
        <main>
          <Hero />
          
          {/* How We Help You Grow Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-2">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  How We Help You Grow — More Than Just Technology
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're not here to simply write code. We're here to transform how you operate, engage, and scale. As India's leading custom software development and AI solutions company, we deliver measurable results that drive business growth.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: TrendingUp,
                    title: "Boost Operational Efficiency",
                    description: "Automate repetitive tasks, streamline workflows, and reduce human error."
                  },
                  {
                    icon: Users,
                    title: "Enhance Customer Engagement", 
                    description: "With personalized digital experiences, WhatsApp marketing, and AI chatbots."
                  },
                  {
                    icon: BarChart3,
                    title: "Empower Decision-Making",
                    description: "Actionable dashboards and real-time data insights for faster, smarter moves."
                  },
                  {
                    icon: Target,
                    title: "Expand Revenue Streams",
                    description: "Launch new digital products, monetize platforms, and enter untapped markets."
                  },
                  {
                    icon: Zap,
                    title: "Improve Retention & Loyalty",
                    description: "With mobile apps, patient/CRM portals, and timely digital communication."
                  },
                  {
                    icon: DollarSign,
                    title: "Increase Your ROI",
                    description: "Everything we build is designed to drive measurable return on investment."
                  }
                ].map((item, index) => (
                  <Card key={index} className="glass-card hover-lift border-primary/10">
                    <CardContent className="p-6">
                      <item.icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
         
            </div>
          </section>

          {/* SEO-Optimized Company Expertise Section */}
          <section className="py-20 relative bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container mx-auto px-2">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  Why Choose SoftpulseAI Technologies?
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  As India's premier custom software development and AI solutions company, we specialize in healthcare technology, mobile app development, and digital transformation services that deliver exceptional ROI.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Card className="glass-card hover-lift border-primary/10">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Healthcare Technology Experts</h3>
                    <p className="text-muted-foreground mb-4">Specialized in Hospital Information Systems (HIS), Clinic Management Systems (CMS), and AI-powered healthcare solutions that improve patient care and operational efficiency.</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• SoftPulse HIS - Complete hospital management</li>
                      <li>• MedPulse CMS - Clinic operations</li>
                      <li>• DocPulse - Doctor scheduling</li>
                      <li>• PatientPulse - Patient engagement</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card hover-lift border-primary/10">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">AI & Automation Solutions</h3>
                    <p className="text-muted-foreground mb-4">Cutting-edge AI automation, machine learning, and intelligent systems that streamline operations and boost productivity across industries.</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI-powered chatbots and virtual assistants</li>
                      <li>• Predictive analytics and business intelligence</li>
                      <li>• Process automation and workflow optimization</li>
                      <li>• Machine learning model development</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card hover-lift border-primary/10">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Proven Track Record</h3>
                    <p className="text-muted-foreground mb-4">100+ successful projects, 80+ happy clients, and 98% success rate across healthcare, e-commerce, real estate, and enterprise sectors.</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 5+ years of industry experience</li>
                      <li>• 100+ completed projects</li>
                      <li>• 80+ satisfied clients</li>
                      <li>• 98% project success rate</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          <Services />
          <Products />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;