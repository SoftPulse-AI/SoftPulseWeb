import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Users, 
  Award,
  Lightbulb,
  Shield,
  Zap,
  Globe
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Pioneering cutting-edge solutions that shape the future"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "Building trust through transparency and reliability"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering exceptional quality in every project"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership",
      description: "Growing together through collaborative relationships"
    }
  ];

  const industries = [
    "Healthcare & Diagnostics",
    "Automotive & Service Centers", 
    "Retail & E-commerce",
    "Real Estate",
    "Education & EdTech",
    "Manufacturing",
    "Finance & FinTech",
    "Logistics & Supply Chain",
    "NGOs & Government",
    "Agencies & Tech Startups"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">SoftpulseAI</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            A forward-thinking solutions partner fueled by innovation, integrity, and excellence. 
            We empower organizations to grow smarter, faster, and more sustainably through 
            bespoke technology solutions.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Our Story</h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Founded by passionate engineers and problem-solvers, SoftpulseAI began with a simple mission: 
                <strong className="text-foreground"> make technology work for people</strong>.
              </p>
              <p>
                We started with a custom-built Hospital Information System (HIS) and Clinic Management System (CMS) 
                for healthcare. That first implementation helped a clinic streamline appointments, prescriptions, 
                and billing in revolutionary ways.
              </p>
              <p>
                Today, we're proud to serve <strong className="text-accent">5+ hospitals across India</strong> and 
                numerous other organizations with customized platforms, mobile apps, and automation tools.
              </p>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <h4 className="text-xl font-semibold mb-6 text-center">Our Growth Journey</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div>
                  <div className="font-medium">First Healthcare Solution</div>
                  <div className="text-sm text-foreground/60">Custom HIS & CMS development</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div>
                  <div className="font-medium">Expansion to 5 Hospitals</div>
                  <div className="text-sm text-foreground/60">Scaling across healthcare institutions</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <div>
                  <div className="font-medium">Multi-Industry Solutions</div>
                  <div className="text-sm text-foreground/60">Serving diverse sectors with AI & automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="glass-card border-white/10 p-8">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                To become a globally trusted technology partner — empowering organizations to embrace innovation, 
                drive sustainable growth, and shape a smarter, future-ready world.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10 p-8">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                To design and deliver exceptional, cost-effective solutions powered by automation, AI, and actionable 
                insights — helping every client scale, innovate, and thrive at the forefront of their industry.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card border-white/10 hover-lift text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-foreground/70 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="glass-card border-white/20 px-4 py-2 text-sm hover:border-accent/50 transition-colors"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;