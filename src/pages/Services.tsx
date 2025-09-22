import { useState } from "react";
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
  Heart,
  Monitor,
  Database,
  Shield,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const [selectedService, setSelectedService] = useState("custom-development");

  const services = [
    {
      id: "custom-development",
      name: "Custom Software & Web Development",
      icon: Code,
      description: "Tailored software solutions for your business",
      features: [
        "Web Applications", "Custom Portals", "E-commerce Platforms", 
        "SaaS Development", "API Integration", "Cloud Solutions",
        "Database Design", "Security Implementation"
      ],
      benefits: [
        "Scalable architecture designed for growth",
        "Modern tech stack with latest frameworks",
        "Security-first development approach",
        "Mobile-responsive design",
        "SEO optimized solutions"
      ],
      deliverables: ["Source Code", "Documentation", "Deployment", "Training", "Support"]
    },
    {
      id: "mobile-development",
      name: "Mobile App Development & UI/UX",
      icon: Smartphone,
      description: "High-performance mobile applications",
      features: [
        "Native iOS Apps", "Native Android Apps", "Cross-platform Development",
        "UI/UX Design", "App Store Optimization", "Push Notifications",
        "Offline Functionality", "Integration Services"
      ],
      benefits: [
        "Stunning, intuitive user interfaces",
        "High performance and smooth experience",
        "Cross-platform compatibility",
        "App store submission assistance",
        "Ongoing maintenance and updates"
      ],
      deliverables: ["Mobile Apps", "Design Assets", "App Store Listing", "Analytics Setup", "Support"]
    },
    {
      id: "ai-automation",
      name: "AI Solutions & Business Automation",
      icon: Bot,
      description: "Smart AI-driven automation tools",
      features: [
        "Chatbot Development", "Process Automation", "Predictive Analytics",
        "Machine Learning", "Image Recognition", "Natural Language Processing",
        "Workflow Automation", "Decision Support Systems"
      ],
      benefits: [
        "Reduce operational costs by 40%",
        "24/7 automated customer support",
        "Data-driven decision making",
        "Improved accuracy and efficiency",
        "Scalable AI solutions"
      ],
      deliverables: ["AI Models", "Automation Scripts", "Analytics Dashboard", "Integration", "Training"]
    },
    {
      id: "analytics-dashboard",
      name: "Dashboard Analytics & Business Intelligence",
      icon: BarChart3,
      description: "Real-time insights and data visualization",
      features: [
        "Real-time Dashboards", "KPI Monitoring", "Custom Reports",
        "Data Visualization", "Predictive Analytics", "Business Intelligence",
        "Performance Metrics", "Automated Reporting"
      ],
      benefits: [
        "Make informed data-driven decisions",
        "Real-time performance monitoring",
        "Custom KPIs and metrics",
        "Automated report generation",
        "Interactive data visualization"
      ],
      deliverables: ["BI Dashboard", "Custom Reports", "Data Pipeline", "Analytics", "Training"]
    },
    {
      id: "marketing-automation",
      name: "WhatsApp, SMS & Chatbot Marketing",
      icon: MessageCircle,
      description: "Automated marketing and lead generation",
      features: [
        "WhatsApp Marketing", "SMS Campaigns", "Chatbot Development",
        "Lead Generation", "Customer Segmentation", "Automated Workflows",
        "Analytics & Tracking", "Multi-channel Integration"
      ],
      benefits: [
        "Increase customer engagement by 60%",
        "Automated lead qualification",
        "Personalized customer communication",
        "Higher conversion rates",
        "Cost-effective marketing"
      ],
      deliverables: ["Marketing Campaigns", "Chatbots", "Analytics", "Automation", "Training"]
    },
    {
      id: "digital-marketing",
      name: "Social Media & Digital Growth",
      icon: Megaphone,
      description: "Comprehensive digital marketing strategies",
      features: [
        "Social Media Management", "Content Creation", "Paid Advertising",
        "SEO Optimization", "Influencer Marketing", "Brand Strategy",
        "Campaign Management", "Performance Analytics"
      ],
      benefits: [
        "Expand your digital reach",
        "Build strong brand presence",
        "Generate qualified leads",
        "Improve ROI on marketing spend",
        "Engage with target audience"
      ],
      deliverables: ["Marketing Strategy", "Content Calendar", "Ad Campaigns", "Reports", "Growth Plan"]
    },
    {
      id: "it-outsourcing",
      name: "IT Outsourcing & Technical Support",
      icon: Settings,
      description: "Dedicated teams and technical support",
      features: [
        "Dedicated Development Teams", "Technical Support", "DevOps Services",
        "Cloud Infrastructure", "System Maintenance", "Security Services",
        "Performance Monitoring", "Backup Solutions"
      ],
      benefits: [
        "Cost-effective IT solutions",
        "24/7 technical support",
        "Scalable team resources",
        "Latest technology expertise",
        "Reduced operational overhead"
      ],
      deliverables: ["Dedicated Team", "Support SLA", "Infrastructure", "Monitoring", "Documentation"]
    },
    {
      id: "healthcare-solutions",
      name: "Healthcare Digital Solutions",
      icon: Heart,
      description: "Specialized healthcare technology",
      features: [
        "Hospital Management Systems", "Clinic Management", "Patient Portals",
        "Telemedicine Solutions", "Medical Records", "Appointment Systems",
        "Billing & Insurance", "Compliance Management"
      ],
      benefits: [
        "Improve patient care quality",
        "Streamline hospital operations",
        "Ensure compliance with regulations",
        "Reduce administrative costs",
        "Enhanced patient experience"
      ],
      deliverables: ["Healthcare Software", "Integration", "Training", "Compliance", "Support"]
    }
  ];

  const currentService = services.find(s => s.id === selectedService);

  return (
    <>
      <Helmet>
        <title>IT Services & Digital Solutions - SoftpulseAI Technologies | Custom Software, AI, Healthcare</title>
        <meta name="description" content="Comprehensive IT services in India: custom software development, mobile app development, AI automation, healthcare technology (HIS/CMS), digital marketing, WhatsApp business API, and IT outsourcing. 100+ successful projects." />
        <meta name="keywords" content="IT services India, custom software development, mobile app development, AI solutions automation, healthcare technology, hospital information system HIS, clinic management system CMS, digital marketing, WhatsApp business API, chatbot development, IT outsourcing, business intelligence dashboard, AI automation services, healthcare IT solutions, custom web development, mobile app development company, digital marketing services, software development company India, AI company India, healthcare software, MedPulse, SoftPulse, DocPulse, PatientPulse, IT consulting services, technology solutions, digital transformation" />
        <meta name="author" content="SoftpulseAI Technologies LLP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softpulseai.in/services" />
        <meta property="og:title" content="IT Services & Digital Solutions - SoftpulseAI Technologies" />
        <meta property="og:description" content="Comprehensive IT services: custom software development, AI automation, healthcare technology, mobile apps, digital marketing, and IT outsourcing. 100+ successful projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softpulseai.in/services" />
        <meta property="og:image" content="https://softpulseai.in/services-hero.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services & Digital Solutions - SoftpulseAI Technologies" />
        <meta name="twitter:description" content="Comprehensive IT services: custom software development, AI automation, healthcare technology, mobile apps, digital marketing, and IT outsourcing." />
        <meta name="twitter:image" content="https://softpulseai.in/services-hero.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IT Services & Digital Solutions",
            "description": "Comprehensive IT services including custom software development, mobile app development, AI automation, healthcare technology, digital marketing, and IT outsourcing",
            "provider": {
              "@type": "Organization",
              "name": "SoftpulseAI Technologies LLP",
              "url": "https://softpulseai.in"
            },
            "serviceType": "IT Services",
            "areaServed": "Worldwide",
            "offers": {
              "@type": "Offer",
              "description": "Custom software development, AI solutions, mobile apps, healthcare technology, digital marketing services",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Services Catalog",
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
                    "name": "Healthcare Technology Solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing Services"
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
        
        <div className="pt-20 relative z-10">
          {/* Header */}
          <div className="container mx-auto px-2 py-12">
            <div className="text-center mb-12">
              <div className="relative mb-12">
                <img 
                  src={servicesHero} 
                  alt="IT services and digital transformation solutions"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Our Services
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Comprehensive IT services designed to accelerate your digital transformation 
                and drive business growth through innovative technology solutions.
              </p>
            </div>
          </div>

          {/* Services Interface */}
          <div className="container mx-auto px-2">
            <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
              {/* Sidebar */}
              <div className="lg:w-1/3">
                <Card className="glass-card border-white/10 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 gradient-text">Our Services</h3>
                    <div className="space-y-3">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                              selectedService === service.id
                                ? 'bg-primary/20 border border-primary/30 shadow-primary'
                                : 'hover:bg-white/5 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Icon className={`w-6 h-6 ${
                                selectedService === service.id ? 'text-primary' : 'text-foreground/60'
                              }`} />
                              <div>
                                <div className={`font-medium ${
                                  selectedService === service.id ? 'text-primary' : 'text-foreground'
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
                  <CardContent className="p-8">
                    {currentService && (
                      <div className="space-y-8">
                        {/* Header */}
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center">
                            <currentService.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold gradient-text">{currentService.name}</h2>
                            <p className="text-foreground/80">{currentService.description}</p>
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <Monitor className="w-5 h-5 mr-2 text-accent" />
                            Service Features
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {currentService.features.map((feature, index) => (
                              <Badge key={index} variant="outline" className="p-2 text-center justify-center">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <Zap className="w-5 h-5 mr-2 text-accent" />
                            Key Benefits
                          </h3>
                          <div className="space-y-3">
                            {currentService.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-foreground/80">{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
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
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                          <Button
  className="gradient-primary hover:shadow-primary flex-1"
  onClick={() => { window.location.href = '/contact' }}
>
  Get Quote
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
          <div className="container mx-auto px-2 py-20">
            <Card className="glass-card border-white/10 text-center">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
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