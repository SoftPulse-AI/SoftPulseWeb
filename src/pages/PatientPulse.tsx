import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  MessageSquare, 
  FileText,
  Star,
  Smartphone,
  Calendar,
  ArrowRight,
  Heart,
  Check,
  Users
} from "lucide-react";
import { useEffect } from "react";

const PatientPulse = () => {
  useEffect(() => {
    document.title = "PatientPulse - Patient Engagement & Mobile Health App | SoftpulseAI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'PatientPulse - Mobile health app for patient engagement. Book appointments, access medical records, communicate with providers, and manage your health journey.');
    }
  }, []);

  const features = [
    { 
      name: "Appointment & Follow-up Reminders", 
      icon: <Bell className="w-8 h-8" />, 
      description: "Never miss an appointment with smart automated reminders and notifications",
      benefits: ["SMS & push notifications", "Customizable reminder timing", "Rescheduling options", "Follow-up alerts"]
    },
    { 
      name: "Secure Chat with Providers", 
      icon: <MessageSquare className="w-8 h-8" />, 
      description: "HIPAA-compliant messaging platform for direct communication with healthcare providers",
      benefits: ["End-to-end encryption", "File sharing", "Video consultations", "24/7 messaging"]
    },
    { 
      name: "Access to Prescriptions & Records", 
      icon: <FileText className="w-8 h-8" />, 
      description: "Complete access to your medical history, prescriptions, and health records",
      benefits: ["Digital prescriptions", "Lab results", "Medical history", "Document downloads"]
    },
    { 
      name: "Feedback & Experience Ratings", 
      icon: <Star className="w-8 h-8" />, 
      description: "Share your healthcare experience and help improve quality of care",
      benefits: ["Provider ratings", "Service feedback", "Anonymous reviews", "Quality improvement"]
    },
    { 
      name: "Branded Clinic/Hospital App Interface", 
      icon: <Smartphone className="w-8 h-8" />, 
      description: "Fully customized mobile app interface matching your healthcare facility's branding",
      benefits: ["Custom branding", "White-label solution", "Facility-specific features", "Brand consistency"]
    },
    { 
      name: "Appointment Booking & Management", 
      icon: <Calendar className="w-8 h-8" />, 
      description: "Easy appointment booking and management with real-time availability",
      benefits: ["Real-time booking", "Multiple providers", "Waitlist options", "Cancellation handling"]
    }
  ];

  const benefits = [
    "Improved patient satisfaction through better communication",
    "Reduced no-show rates with automated reminders",
    "Enhanced patient engagement and adherence to treatment",
    "Streamlined appointment booking and management",
    "Secure access to health information anytime, anywhere",
    "Better care coordination between patients and providers",
    "Personalized healthcare experience with branded interface",
    "Reduced administrative burden on healthcare staff"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-2">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="gradient-primary mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Patient Engagement Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              PatientPulse: <span className="gradient-text">Boost Satisfaction</span>, Streamline Communication
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Mobile app for patient engagement with appointment booking, medical records access, and health tracking. 
              Empower patients to take control of their healthcare journey while improving satisfaction and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Download App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                View Demo
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
              Comprehensive <span className="gradient-text">Patient Experience</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              Everything patients need to manage their healthcare journey, communicate with providers, and stay engaged with their care.
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
              Why Patients Love <span className="gradient-text">PatientPulse</span>
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
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-foreground/80">Patient Satisfaction</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">60%</div>
              <div className="text-foreground/80">Reduced No-Shows</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-foreground/80">Access to Records</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-foreground/80">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Download Your <span className="gradient-text">Healthcare App</span> Today
            </h3>
            <p className="text-xl text-foreground/80 mb-8">
              Available for both iOS and Android. Get instant access to your healthcare information and communicate with your providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Download for iOS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientPulse;