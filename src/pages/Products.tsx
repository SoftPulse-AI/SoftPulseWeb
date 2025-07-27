import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import healthcareHero from "@/assets/healthcare-hero.webp";
import { 
  Building2, 
  Stethoscope, 
  Brain, 
  User, 
  Users, 
  BarChart3,
  Monitor,
  Database,
  Shield,
  Zap,
  Clock,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState("softpulse-his");

  const products = [
    {
      id: "softpulse-his",
      name: "SoftPulse HIS",
      icon: Building2,
      description: "Complete Hospital Information System",
      modules: [
        "Front Office", "IPD", "Physician", "Nursing", "Pharmacy", "Inventory",
        "Discharge Summary", "Daycare", "Masters", "MIS Reports", "Billing",
        "Emergency", "CRM", "Dashboard", "OT Management", "Housekeeping", "Diet", "Employee"
      ],
      benefits: [
        "End-to-End Automation: Automate all hospital workflows",
        "Smart Workflows: Tailored for clinical & administrative processes",
        "Built-in AI Features: Enhance decision-making & patient care",
        "Real-Time Monitoring: Monitor patient status & performance",
        "Comprehensive Reporting: Generate detailed reports"
      ],
      stats: { modules: "18+", hospitals: "5+", uptime: "99.9%" }
    },
    {
      id: "medpulse-cms",
      name: "MedPulse CMS",
      icon: Stethoscope,
      description: "Clinical Management System for OPD & Clinics",
      modules: [
        "OPD Registration", "Doctor Dashboard", "Visit History", "Follow-Up",
        "Appointment Booking", "Reminders", "e-Prescriptions", "Ads Management",
        "SMS/WhatsApp", "OPD Analytics"
      ],
      benefits: [
        "Streamlines operations for multi-doctor clinics",
        "Speeds up OPD processes with paperless workflows",
        "Reduces administrative overhead and paperwork",
        "Improves patient return rates through automated engagement",
        "Provides data-driven insights for practice improvement"
      ],
      stats: { clinics: "50+", patients: "10K+", efficiency: "40%" }
    },
    {
      id: "ai-healthcare",
      name: "AI Healthcare Solutions",
      icon: Brain,
      description: "AI-Powered Healthcare Innovation",
      modules: [
        "AI-Generated Prescriptions", "AI Nurse Care Plans", "No-Show Prediction",
        "Visit History Analysis", "EMR Automation", "Operative Notes Automation",
        "Consultation Chatbot", "Document Analysis", "Predictive Patient Health Monitoring",
        "AI-Driven Risk Assessment", "AI-Powered Diagnostic Assistance", "Patient Engagement"
      ],
      benefits: [
        "Automate routine tasks with AI",
        "Enhanced clinical decision-making",
        "Improved patient outcomes",
        "Predictive analytics for better care",
        "Reduced medical errors"
      ],
      stats: { accuracy: "95%", automation: "60%", reduction: "30%" }
    },
    {
      id: "docpulse",
      name: "DocPulse",
      icon: User,
      description: "Doctor Platform & Dashboard",
      modules: [
        "Create & Share e-Prescriptions", "Access Patient Records & Visit History",
        "Real-time Availability Management", "Internal Messaging & Alerts",
        "View Patient Reports & Lab", "Manage Appointments & Availability"
      ],
      benefits: [
        "Streamlined prescription management",
        "Complete patient history access",
        "Efficient appointment scheduling",
        "Real-time communication with staff",
        "Mobile-friendly interface"
      ],
      stats: { doctors: "200+", prescriptions: "5K+", satisfaction: "98%" }
    },
    {
      id: "patientpulse",
      name: "PatientPulse",
      icon: Users,
      description: "Patient Engagement App",
      modules: [
        "Appointment & Follow-up Reminders", "Secure Chat with Providers",
        "Access to Prescriptions & Records", "Feedback & Experience Ratings",
        "Branded Clinic/Hospital App Interface"
      ],
      benefits: [
        "Boost patient satisfaction",
        "Streamline communication",
        "Reduce no-shows with reminders",
        "Improve patient engagement",
        "Custom branding for hospitals"
      ],
      stats: { users: "15K+", satisfaction: "96%", engagement: "80%" }
    },
    {
      id: "bi-dashboard",
      name: "BI Dashboard",
      icon: BarChart3,
      description: "Business Intelligence & Analytics",
      modules: [
        "Real-time KPI Monitoring", "Financial Analytics", "Patient Flow Analysis",
        "Revenue Tracking", "Department Performance", "Inventory Management",
        "Staff Productivity", "Predictive Analytics", "Custom Reports", "Data Visualization"
      ],
      benefits: [
        "Data-driven decision making",
        "Real-time performance monitoring",
        "Predictive insights for planning",
        "Custom dashboard creation",
        "Enhanced operational efficiency"
      ],
      stats: { insights: "24/7", accuracy: "99%", decisions: "3x faster" }
    }
  ];

  const currentProduct = products.find(p => p.id === selectedProduct);

  return (
    <>
      <Helmet>
        <title>Healthcare Products - SoftpulseAI Technologies</title>
        <meta name="description" content="Comprehensive healthcare products including Hospital Information System (HIS), Clinical Management System (CMS), AI solutions, and patient engagement platforms." />
        <meta name="keywords" content="healthcare software, hospital management system, clinic management, AI healthcare, medical software" />
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
                  src={healthcareHero} 
                  alt="Healthcare technology solutions and digital innovation"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Healthcare Products
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Comprehensive suite of healthcare solutions designed to streamline operations, 
                enhance patient care, and drive digital transformation in healthcare.
              </p>
            </div>
          </div>

          {/* Product Interface */}
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
              {/* Sidebar */}
              <div className="lg:w-1/3">
                <Card className="glass-card border-white/10 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 gradient-text">Our Products</h3>
                    <div className="space-y-3">
                      {products.map((product) => {
                        const Icon = product.icon;
                        return (
                          <button
                            key={product.id}
                            onClick={() => setSelectedProduct(product.id)}
                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                              selectedProduct === product.id
                                ? 'bg-primary/20 border border-primary/30 shadow-primary'
                                : 'hover:bg-white/5 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Icon className={`w-6 h-6 ${
                                selectedProduct === product.id ? 'text-primary' : 'text-foreground/60'
                              }`} />
                              <div>
                                <div className={`font-medium ${
                                  selectedProduct === product.id ? 'text-primary' : 'text-foreground'
                                }`}>
                                  {product.name}
                                </div>
                                <div className="text-sm text-foreground/60">
                                  {product.description}
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
                    {currentProduct && (
                      <div className="space-y-8">
                        {/* Header */}
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center">
                            <currentProduct.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold gradient-text">{currentProduct.name}</h2>
                            <p className="text-foreground/80">{currentProduct.description}</p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(currentProduct.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-white/5 rounded-xl">
                              <div className="text-2xl font-bold text-primary">{value}</div>
                              <div className="text-sm text-foreground/60 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        {/* Modules */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <Monitor className="w-5 h-5 mr-2 text-accent" />
                            Key Modules
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {currentProduct.modules.map((module, index) => (
                              <Badge key={index} variant="outline" className="p-2 text-center justify-center">
                                {module}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <CheckCircle2 className="w-5 h-5 mr-2 text-accent" />
                            Key Benefits
                          </h3>
                          <div className="space-y-3">
                            {currentProduct.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-foreground/80">{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                          <Button className="gradient-primary hover:shadow-primary flex-1">
                            Request Demo
                          </Button>
                          <Button variant="outline" className="flex-1">
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
          <div className="container mx-auto px-6 py-20">
            <Card className="glass-card border-white/10 text-center">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Ready to Transform Your Healthcare Operations?
                </h2>
                <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Join 5+ hospitals and 50+ clinics already using our solutions to enhance patient care and operational efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gradient-primary hover:shadow-primary">
                    Schedule Demo
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Sales
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

export default Products;