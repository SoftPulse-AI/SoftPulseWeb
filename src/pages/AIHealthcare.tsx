import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  FileText, 
  Calendar, 
  History,
  Bot,
  FileSearch,
  MessageSquare,
  ScanLine,
  Activity,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useEffect } from "react";

const AIHealthcare = () => {
  useEffect(() => {
    document.title = "AI Healthcare Solutions - Transforming Medicine with Artificial Intelligence | SoftpulseAI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-powered healthcare solutions including prescription generation, predictive analytics, diagnostic assistance, and patient monitoring. Transform healthcare delivery with advanced AI tools.');
    }
  }, []);

  const aiSolutions = [
    { 
      name: "AI-Generated Prescriptions", 
      icon: <FileText className="w-6 h-6" />, 
      description: "Intelligent prescription generation based on patient history and symptoms",
      features: ["Drug interaction checking", "Dosage optimization", "Allergy alerts", "Treatment recommendations"]
    },
    { 
      name: "AI Nurse Care Plans", 
      icon: <Users className="w-6 h-6" />, 
      description: "Automated nursing care plan generation and monitoring",
      features: ["Personalized care protocols", "Risk assessment", "Progress tracking", "Alert systems"]
    },
    { 
      name: "No-Show Prediction", 
      icon: <Calendar className="w-6 h-6" />, 
      description: "Predict and prevent appointment no-shows with ML algorithms",
      features: ["Behavioral analysis", "Risk scoring", "Automated reminders", "Schedule optimization"]
    },
    { 
      name: "Visit History Analysis", 
      icon: <History className="w-6 h-6" />, 
      description: "Deep analysis of patient visit patterns and trends",
      features: ["Pattern recognition", "Health trends", "Outcome prediction", "Care optimization"]
    },
    { 
      name: "EMR Automation", 
      icon: <Bot className="w-6 h-6" />, 
      description: "Automated electronic medical record documentation",
      features: ["Voice-to-text", "Template generation", "Data extraction", "Compliance checking"]
    },
    { 
      name: "Operative Notes Automation", 
      icon: <FileSearch className="w-6 h-6" />, 
      description: "AI-powered operative notes generation and documentation",
      features: ["Procedure templates", "Real-time documentation", "Medical coding", "Quality assurance"]
    },
    { 
      name: "Consultation Chatbot", 
      icon: <MessageSquare className="w-6 h-6" />, 
      description: "Intelligent chatbot for patient consultation and triage",
      features: ["Symptom assessment", "Triage assistance", "24/7 availability", "Multi-language support"]
    },
    { 
      name: "Document Analysis", 
      icon: <ScanLine className="w-6 h-6" />, 
      description: "AI-powered medical document processing and analysis",
      features: ["OCR processing", "Data extraction", "Report summarization", "Anomaly detection"]
    },
    { 
      name: "Predictive Patient Health Monitoring", 
      icon: <Activity className="w-6 h-6" />, 
      description: "Continuous patient health monitoring with predictive analytics",
      features: ["Vital sign analysis", "Early warning systems", "Health forecasting", "Risk alerts"]
    },
    { 
      name: "AI-Driven Risk Assessment", 
      icon: <Shield className="w-6 h-6" />, 
      description: "Comprehensive risk assessment for better patient outcomes",
      features: ["Readmission prediction", "Complication risk", "Mortality prediction", "Intervention recommendations"]
    },
    { 
      name: "AI-Powered Diagnostic Assistance", 
      icon: <Brain className="w-6 h-6" />, 
      description: "Advanced diagnostic support with machine learning",
      features: ["Image analysis", "Differential diagnosis", "Evidence-based recommendations", "Clinical decision support"]
    },
    { 
      name: "Patient Engagement and Retention", 
      icon: <TrendingUp className="w-6 h-6" />, 
      description: "AI-driven patient engagement strategies and retention programs",
      features: ["Personalized communication", "Engagement scoring", "Retention strategies", "Satisfaction prediction"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-2">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="gradient-primary mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Healthcare Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Driven Healthcare Innovation: Transforming the <span className="gradient-text">Future of Medicine</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Our AI-powered healthcare solutions leverage the latest advances in artificial intelligence to automate routine tasks, 
              enhance clinical decision-making, and improve patient outcomes. From prescription generation to predictive analytics, 
              our AI tools are transforming healthcare delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Explore AI Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Innovation Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Innovation in <span className="gradient-text">Healthcare</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              Transform Healthcare with AI features—available separately or easily integrated with your HIS systems.
            </p>
          </div>

          {/* AI Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => (
              <Card key={index} className="glass-card border-white/10 hover-lift group h-full">
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:glow-accent transition-all duration-300">
                    <div className="text-primary-foreground">
                      {solution.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{solution.name}</CardTitle>
                  <CardDescription className="text-foreground/70">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-foreground/60">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
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
              Why Choose Our <span className="gradient-text">AI Healthcare Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced AI Technology</h3>
              <p className="text-foreground/70">
                Cutting-edge machine learning algorithms trained on vast medical datasets for accurate predictions and insights.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">HIPAA Compliant</h3>
              <p className="text-foreground/70">
                All AI solutions are built with privacy and security at the core, ensuring full compliance with healthcare regulations.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Results</h3>
              <p className="text-foreground/70">
                Demonstrable improvements in efficiency, accuracy, and patient outcomes across multiple healthcare settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Seamless Integration with Your <span className="gradient-text">Existing Systems</span>
            </h3>
            <p className="text-xl text-foreground/80 mb-8">
              Our AI solutions integrate seamlessly with SoftPulse HIS, MedPulse CMS, or can be deployed as standalone solutions 
              compatible with your existing healthcare infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Schedule AI Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Integration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcare;