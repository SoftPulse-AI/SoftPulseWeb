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
        <title>SoftpulseAI Technologies - Leading IT Solutions | Custom Software, AI, Healthcare, Mobile Apps</title>
        <meta name="description" content="SoftpulseAI Technologies LLP - Leading IT solutions provider in India. Expert in custom software development, AI automation, healthcare technology, mobile apps, web development, WhatsApp marketing, and digital transformation services." />
        <meta name="keywords" content="SoftpulseAI, SoftpulseAI Technologies, Softpulse, custom software development, AI solutions automation, healthcare technology, mobile app development, web development design, WhatsApp SMS chatbot marketing, digital marketing, IT outsourcing support, dashboard analytics development, healthcare solutions, AI automation, custom software, digital transformation, India IT company" />
        <meta name="author" content="SoftpulseAI Technologies LLP" />
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
            "name": "SoftpulseAI Technologies LLP",
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
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  How We Help You Grow — More Than Just Technology
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're not here to simply write code. We're here to transform how you operate, engage, and scale.
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