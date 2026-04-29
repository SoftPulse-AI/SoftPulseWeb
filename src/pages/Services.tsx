import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import servicesHero from "@/assets/services-hero.webp";
import { 
  Code, 
  Smartphone, 
  Bot, 
  BarChart3, 
  MessageCircle, 
  Megaphone,
  Settings,
  Monitor,
  Database,
  Shield,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const [selectedService, setSelectedService] = useState("custom-software-development");

  const services = [
    {
      id: "custom-software-development",
      name: "Custom Software Development",
      icon: Code,
      description: "Build tailored systems that match your exact workflow",
      features: [
        "Web Applications", "Admin Portals", "SaaS Platforms",
        "API Integration", "Cloud Deployment", "Security Controls"
      ],
      benefits: [
        "Launch faster with a focused roadmap",
        "Scale confidently as operations grow",
        "Reduce manual steps with built-in automation",
        "Improve team productivity and visibility"
      ],
      deliverables: ["Source Code", "Documentation", "Deployment", "Training", "Support"]
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      icon: Smartphone,
      description: "Create patient and staff apps with seamless UX",
      features: [
        "Android & iOS Apps", "Cross-platform Development", "UI/UX Design",
        "Push Notifications", "Offline Support", "Third-party Integrations"
      ],
      benefits: [
        "Increase user adoption and retention",
        "Deliver smoother, faster user journeys",
        "Connect app usage to business goals",
        "Roll out updates without disruption"
      ],
      deliverables: ["Mobile Apps", "Design Assets", "App Store Listing", "Analytics Setup", "Support"]
    },
    {
      id: "ai-automation",
      name: "AI Solutions & Business Automation",
      icon: Bot,
      description: "Automate repetitive tasks and improve decision-making",
      features: [
        "Chatbot Development", "Process Automation", "Predictive Analytics",
        "Machine Learning", "Workflow Automation", "Decision Support Systems"
      ],
      benefits: [
        "Reduce operational effort and turnaround time",
        "Improve service consistency",
        "Enable faster data-backed decisions",
        "Support high-volume operations"
      ],
      deliverables: ["AI Models", "Automation Scripts", "Analytics Dashboard", "Integration", "Training"]
    },
    {
      id: "analytics-dashboard",
      name: "Dashboard Analytics & Business Intelligence",
      icon: BarChart3,
      description: "Track KPIs and performance with real-time clarity",
      features: [
        "Real-time Dashboards", "KPI Monitoring", "Custom Reports",
        "Data Visualization", "Business Intelligence", "Automated Reporting"
      ],
      benefits: [
        "Spot bottlenecks before they affect revenue",
        "Improve accountability across teams",
        "Act on insights with confidence",
        "Measure outcomes continuously"
      ],
      deliverables: ["BI Dashboard", "Custom Reports", "Data Pipeline", "Analytics", "Training"]
    },
    {
      id: "crm-marketing-setup",
      name: "CRM & Marketing Setup",
      icon: MessageCircle,
      description: "Set up CRM journeys that convert more leads",
      features: [
        "Pipeline Setup", "Lead Lifecycle Automation", "WhatsApp & SMS Journeys",
        "Campaign Tracking", "Segmentation", "Conversion Reporting"
      ],
      benefits: [
        "Increase lead-to-customer conversion",
        "Reduce follow-up delays",
        "Create repeatable growth workflows",
        "Align marketing with sales outcomes"
      ],
      deliverables: ["Marketing Campaigns", "Chatbots", "Analytics", "Automation", "Training"]
    },
    {
      id: "social-media-growth-support",
      name: "Social Media Growth Support",
      icon: Megaphone,
      description: "Support your brand growth across high-impact channels",
      features: [
        "Social Media Planning", "Content Calendar", "Creative Support",
        "Campaign Management", "Performance Reviews", "Growth Recommendations"
      ],
      benefits: [
        "Build stronger brand visibility",
        "Generate better inbound demand",
        "Improve audience engagement",
        "Turn social into a growth channel"
      ],
      deliverables: ["Marketing Strategy", "Content Calendar", "Ad Campaigns", "Reports", "Growth Plan"]
    },
    {
      id: "it-outsourcing",
      name: "IT Outsourcing",
      icon: Settings,
      description: "Scale delivery with dedicated technical capacity",
      features: [
        "Dedicated Teams", "DevOps Support", "Cloud Infrastructure",
        "System Maintenance", "Security Monitoring", "Performance Monitoring"
      ],
      benefits: [
        "Increase execution speed",
        "Reduce fixed hiring costs",
        "Access specialized technical skills",
        "Maintain delivery momentum"
      ],
      deliverables: ["Dedicated Team", "Support SLA", "Infrastructure", "Monitoring", "Documentation"]
    },
    {
      id: "technical-support",
      name: "Technical Support",
      icon: Shield,
      description: "Keep business-critical systems stable and available",
      features: [
        "Issue Resolution", "Release Support", "Uptime Monitoring",
        "Incident Management", "Performance Tuning", "Security Updates"
      ],
      benefits: [
        "Reduce downtime and business risk",
        "Protect customer experience",
        "Respond faster to critical incidents",
        "Improve reliability across systems"
      ],
      deliverables: ["Support SLA", "Monitoring", "Incident Reports", "Optimization Plan", "Documentation"]
    }
  ];

  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "");
    if (fromHash && services.some((service) => service.id === fromHash)) {
      setSelectedService(fromHash);
    }
  }, []);

  const currentService = services.find(s => s.id === selectedService);

  return (
    <>
      <Helmet>
        <title>Implementation & Growth Services - SoftpulseAI Technologies</title>
        <meta name="description" content="Implementation and growth services: custom software development, mobile app development, AI automation, dashboard BI, CRM setup, social media growth, IT outsourcing, and technical support." />
        <meta name="keywords" content="custom software development, mobile app development, AI solutions automation, dashboard analytics BI, CRM setup services, social media growth support, IT outsourcing, technical support services" />
        <meta name="author" content="SoftpulseAI Technologies LLP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softpulseai.com/services" />
        <meta property="og:title" content="Implementation & Growth Services - SoftpulseAI Technologies" />
        <meta property="og:description" content="Implementation and growth services to launch faster, scale operations, and improve revenue outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softpulseai.com/services" />
        <meta property="og:image" content="https://softpulseai.com/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Implementation & Growth Services - SoftpulseAI Technologies" />
        <meta name="twitter:description" content="Implementation and growth services to launch faster, scale operations, and improve revenue outcomes." />
        <meta name="twitter:image" content="https://softpulseai.com/favicon.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Implementation & Growth Services",
            "description": "Implementation and growth services including software development, AI automation, BI dashboards, CRM setup, and technical support",
            "provider": {
              "@type": "Organization",
              "name": "SoftpulseAI Technologies LLP",
              "url": "https://softpulseai.com"
            },
            "serviceType": "Implementation and Growth Services",
            "areaServed": "Worldwide",
            "offers": {
              "@type": "Offer",
              "description": "Custom software development, mobile app development, AI automation, dashboard BI, CRM setup, and technical support",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Implementation & Growth Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Solutions & Automation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dashboard Analytics & BI"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CRM & Marketing Setup"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <FloatingShapes />
        <Navigation />
        
        <div className="pt-16 relative z-10">
          {/* Header */}
          <div className="container mx-auto px-2 py-8">
            <div className="text-center mb-8">
              <div className="relative mb-8">
                <img 
                  src={servicesHero} 
                  alt="IT services and digital transformation solutions"
                  className="w-full h-52 md:h-64 object-cover object-center rounded-xl shadow-xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
                Implementation & Growth Services
              </h1>
              <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
                The execution layer behind your growth: build, automate, optimize, and support.
              </p>
            </div>
          </div>

          {/* Services Interface */}
          <div className="container mx-auto px-2">
            <div className="flex flex-col lg:flex-row gap-5 min-h-[560px]">
              {/* Sidebar */}
              <div className="lg:w-1/3 lg:sticky lg:top-24 self-start">
                <Card className="glass-card border-white/10">
                  <CardContent className="p-4 max-h-[62vh] lg:max-h-[80vh] overflow-y-auto">
                    <h3 className="text-lg font-semibold mb-4 gradient-text">Service Tracks</h3>
                    <div className="space-y-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                              selectedService === service.id
                                ? 'bg-muted/70 border border-border'
                                : 'hover:bg-white/5 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Icon className={`w-6 h-6 ${
                                selectedService === service.id ? 'text-foreground' : 'text-foreground/60'
                              }`} />
                              <div>
                                <div className={`font-medium ${
                                  selectedService === service.id ? 'text-foreground' : 'text-foreground'
                                }`}>
                                  {service.name}
                                </div>
                                <div className="text-sm text-foreground/60">
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <Card className="glass-card border-white/10 h-full">
                  <CardContent className="p-5">
                    {currentService && (
                      <div className="space-y-5">
                        {/* Header */}
                        <div className="flex items-center space-x-3" id={currentService.id.includes("development") ? "development" : currentService.id}>
                          <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                            <currentService.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold gradient-text">{currentService.name}</h2>
                            <p className="text-sm text-foreground/80">{currentService.description}</p>
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Monitor className="w-5 h-5 mr-2 text-accent" />
                            Service Features
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {currentService.features.map((feature, index) => (
                              <Badge key={index} variant="outline" className="p-1.5 text-center justify-center text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-accent" />
                            Key Benefits
                          </h3>
                          <div className="space-y-2">
                            {currentService.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-foreground/80">{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Database className="w-5 h-5 mr-2 text-accent" />
                            What You Get
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {currentService.deliverables.map((deliverable, index) => (
                              <Badge key={index} className="bg-accent/20 text-accent border-accent/30">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                          <Button
  className="gradient-primary hover:shadow-primary flex-1"
  onClick={() => { window.location.href = '/contact' }}
>
  Book Demo
</Button>
<Button
  variant="outline"
  className="flex-1"
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/CompanyProfile.pdf'; // Replace this with your actual PDF path
    link.download = 'CompanyProfile.pdf'; // You can set the file name as preferred
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Learn More
</Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-2 py-12">
            <Card className="glass-card border-white/10 text-center">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-sm md:text-base text-foreground/80 mb-5 max-w-2xl mx-auto">
                  Let's discuss how our services can help accelerate your digital transformation 
                  and drive sustainable business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button
  size="lg"
  className="gradient-primary hover:shadow-primary"
  onClick={() => { window.location.href = '/contact'; }}
>
  Start Project
</Button>
<Button
  size="lg"
  variant="outline"
onClick={() => window.open('https://calendly.com/softpulseai/30min', '_blank')}
>
  Schedule Consultation
</Button>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" onClick={() => { window.location.href = "/healthtech"; }}>
                    Explore HealthTech Products
                  </Button>
                  <Button variant="outline" onClick={() => { window.location.href = "/growth"; }}>
                    Explore Growth Systems
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Services;