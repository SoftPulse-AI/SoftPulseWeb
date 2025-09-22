import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  History, 
  Calendar,
  MessageSquare,
  FileBarChart,
  Clock,
  ArrowRight,
  Stethoscope,
  Check
} from "lucide-react";
import { useEffect } from "react";

const DocPulse = () => {
  useEffect(() => {
    document.title = "DocPulse - Doctor Scheduling & Communication Platform | SoftpulseAI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DocPulse - Comprehensive doctor scheduling and communication platform. Create e-prescriptions, access patient records, manage appointments, and enhance healthcare communication.');
    }
  }, []);

  const features = [
    { 
      name: "Create & Share e-Prescriptions", 
      icon: <FileText className="w-8 h-8" />, 
      description: "Generate digital prescriptions with drug interaction checking and dosage recommendations",
      benefits: ["Digital prescription pad", "Drug database integration", "Allergy alerts", "Dosage calculator"]
    },
    { 
      name: "Access Patient Records & Visit History", 
      icon: <History className="w-8 h-8" />, 
      description: "Complete patient medical history and visit records at your fingertips",
      benefits: ["Comprehensive medical history", "Visit timeline", "Lab results integration", "Previous prescriptions"]
    },
    { 
      name: "Real-time Availability Management", 
      icon: <Clock className="w-8 h-8" />, 
      description: "Manage your schedule and availability in real-time across multiple locations",
      benefits: ["Multi-location scheduling", "Real-time updates", "Buffer time management", "Emergency slots"]
    },
    { 
      name: "Internal Messaging & Alerts", 
      icon: <MessageSquare className="w-8 h-8" />, 
      description: "Secure communication with hospital staff and receive important alerts",
      benefits: ["HIPAA-compliant messaging", "Priority alerts", "Team collaboration", "Emergency notifications"]
    },
    { 
      name: "View Patient Reports & Lab Results", 
      icon: <FileBarChart className="w-8 h-8" />, 
      description: "Access and review patient diagnostic reports and laboratory results",
      benefits: ["Lab integration", "Report visualization", "Trending analysis", "Abnormal value alerts"]
    },
    { 
      name: "Manage Appointments & Availability", 
      icon: <Calendar className="w-8 h-8" />, 
      description: "Complete appointment management with intelligent scheduling features",
      benefits: ["Smart scheduling", "Appointment reminders", "Waitlist management", "Follow-up scheduling"]
    }
  ];

  const benefits = [
    "Streamlined doctor workflows and reduced administrative burden",
    "Enhanced patient care through better access to medical information",
    "Improved communication between healthcare team members",
    "Real-time synchronization across all devices and platforms",
    "Secure, HIPAA-compliant data handling and storage",
    "Mobile-first design for on-the-go access",
    "Integration with existing hospital and clinic systems",
    "Automated reminders and alerts for better patient management"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-2">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="gradient-primary mb-6">
              <Stethoscope className="w-4 h-4 mr-2" />
              Doctor Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              DocPulse: Empowering <span className="gradient-text">Healthcare Professionals</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Doctor scheduling and communication platform that enhances collaboration and patient care coordination. 
              Access everything you need to provide exceptional patient care, from anywhere, at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="gradient-text">Doctor Solutions</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              Everything healthcare professionals need to deliver exceptional patient care and manage their practice efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-white/10 hover-lift group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center group-hover:glow-accent transition-all duration-300 flex-shrink-0">
                      <div className="text-primary-foreground">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{feature.name}</CardTitle>
                      <CardDescription className="text-foreground/70">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-foreground/60">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Doctors Choose <span className="gradient-text">DocPulse</span>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">40%</div>
              <div className="text-foreground/80">Time Saved</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-foreground/80">Uptime</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-foreground/80">Access</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-foreground/80">Active Doctors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Enhance Your <span className="gradient-text">Medical Practice?</span>
            </h3>
            <p className="text-xl text-foreground/80 mb-8">
              Join hundreds of healthcare professionals who trust DocPulse for their daily practice management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocPulse;