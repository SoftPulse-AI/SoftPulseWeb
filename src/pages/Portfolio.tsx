import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import portfolioHero from "@/assets/portfolio-hero-new.webp";
import { 
  Building2, 
  ShoppingCart, 
  Home, 
  GraduationCap,
  Truck,
  Heart,
  Briefcase,
  Users,
  ExternalLink,
  Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      category: "Healthcare",
      icon: Heart,
      title: "Hospital Management System",
      description: "Complete HIS solution for a 200-bed multi-specialty hospital",
      tech: ["React", "Node.js", "PostgreSQL", "AI Integration"],
      features: ["Patient Management", "Billing", "Inventory", "Analytics"],
      results: "40% efficiency improvement, 99.9% uptime",
      image: "🏥"
    },
    {
      category: "E-commerce",
      icon: ShoppingCart,
      title: "Multi-vendor Marketplace",
      description: "Scalable e-commerce platform with vendor management",
      tech: ["Next.js", "Express", "MongoDB", "Stripe"],
      features: ["Vendor Portal", "Payment Gateway", "Inventory", "Analytics"],
      results: "300% increase in sales, 50+ vendors onboarded",
      image: "🛍️"
    },
    {
      category: "Real Estate",
      icon: Home,
      title: "Property Management Platform",
      description: "Comprehensive real estate CRM and listing platform",
      tech: ["React", "Django", "PostgreSQL", "AWS"],
      features: ["Property Listings", "CRM", "Lead Management", "Analytics"],
      results: "60% faster lead processing, 25% increase in conversions",
      image: "🏢"
    },
    {
      category: "Education",
      icon: GraduationCap,
      title: "Learning Management System",
      description: "Complete LMS with virtual classroom capabilities",
      tech: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      features: ["Virtual Classes", "Assessment", "Progress Tracking", "Reports"],
      results: "10,000+ active students, 95% satisfaction rate",
      image: "📚"
    },
    {
      category: "Logistics",
      icon: Truck,
      title: "Fleet Management System",
      description: "GPS tracking and fleet optimization platform",
      tech: ["React Native", "Node.js", "MongoDB", "IoT"],
      features: ["GPS Tracking", "Route Optimization", "Fuel Management", "Reports"],
      results: "30% reduction in fuel costs, 95% on-time delivery",
      image: "🚛"
    },
    {
      category: "Healthcare",
      icon: Heart,
      title: "Clinic Management System",
      description: "OPD management for multi-doctor clinic",
      tech: ["React", "Express", "MySQL", "WhatsApp API"],
      features: ["Appointment Booking", "EMR", "Billing", "Patient Reminders"],
      results: "50% reduction in waiting time, 200+ daily patients",
      image: "🏥"
    },
    {
      category: "Business",
      icon: Briefcase,
      title: "CRM & Project Management",
      description: "All-in-one business management platform",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Microservices"],
      features: ["Lead Management", "Project Tracking", "Team Collaboration", "Reports"],
      results: "40% productivity increase, 500+ users",
      image: "💼"
    },
    {
      category: "Social",
      icon: Users,
      title: "Community Platform",
      description: "Social networking platform for professional communities",
      tech: ["React", "GraphQL", "MongoDB", "Real-time"],
      features: ["Social Feed", "Messaging", "Events", "Groups"],
      results: "25,000+ active users, 80% engagement rate",
      image: "👥"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "100+" },
    { label: "Happy Clients", value: "80+" },
    { label: "Years Experience", value: "5+" },
    { label: "Success Rate", value: "98%" }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Hospital Director",
      company: "Apollo Medical Center",
      content: "SoftpulseAI delivered an exceptional HIS that transformed our operations. The system is intuitive, robust, and has significantly improved our efficiency.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "E-commerce Manager",
      company: "ShopEasy Pvt Ltd",
      content: "The marketplace platform exceeded our expectations. Sales increased by 300% within 6 months of implementation.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Real Estate Developer",
      company: "Prime Properties",
      content: "The property management system streamlined our entire sales process. Lead conversion improved dramatically.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - SoftpulseAI Technologies</title>
        <meta name="description" content="Explore our portfolio of successful projects across healthcare, e-commerce, real estate, education, and more. See how we've helped businesses transform digitally." />
        <meta name="keywords" content="portfolio, case studies, healthcare software, e-commerce development, digital transformation, success stories" />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <FloatingShapes />
        <Navigation />
        
        <div className="pt-20 relative z-10">
          {/* Header */}
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <div className="relative mb-12">
                <img 
                  src={portfolioHero} 
                  alt="Software development portfolio and successful projects showcase"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Discover how we've helped businesses across various industries achieve 
                digital transformation and drive sustainable growth through innovative solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-card border-white/10 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-foreground/60">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="container mx-auto px-6 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card key={index} className="glass-card border-white/10 hover-lift group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-accent border-accent/30">
                          {project.category}
                        </Badge>
                        <div className="text-3xl">{project.image}</div>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                      
                      <p className="text-foreground/80 mb-4">{project.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Key Features:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <h4 className="font-medium text-primary mb-1">Results:</h4>
                          <p className="text-sm text-foreground/80">{project.results}</p>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-4 group-hover:bg-primary/10 group-hover:border-primary/30"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div className="container mx-auto px-6 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="glass-card border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">{testimonial.role}</div>
                      <div className="text-sm text-accent">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-6 py-20">
            <Card className="glass-card border-white/10 text-center">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Ready to Be Our Next Success Story?
                </h2>
                <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Join 80+ satisfied clients who have transformed their businesses with our innovative solutions. 
                  Let's discuss your project and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gradient-primary hover:shadow-primary">
                    Start Your Project
                  </Button>
                  <Button size="lg" variant="outline">
                    View Case Studies
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

export default Portfolio;