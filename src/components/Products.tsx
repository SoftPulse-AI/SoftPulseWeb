import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Calendar, 
  Users, 
  Smartphone, 
  Brain, 
  BarChart3,
  ExternalLink,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  
    const navigate = useNavigate();
  const products = [
    {
      name: "MedPulse (CMS)",
      description: "End-to-end clinic management system that streamlines appointments, prescriptions, billing, and patient records with intuitive interface.",
      icon: <Heart className="w-8 h-8" />,
      features: ["Patient Management", "Appointment Scheduling", "Billing & Insurance", "Digital Prescriptions"],
      badge: "Popular",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "SoftPulse (HIS)",
      description: "Comprehensive Hospital Information System for large healthcare facilities with advanced patient care and operational management.",
      icon: <Users className="w-8 h-8" />,
      features: ["Multi-department Management", "Inventory Control", "Staff Scheduling", "Report Generation"],
      badge: "Enterprise",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "DocPulse",
      description: "Doctor scheduling and communication platform that enhances collaboration and patient care coordination.",
      icon: <Calendar className="w-8 h-8" />,
      features: ["Smart Scheduling", "Doctor Communication", "Patient Coordination", "Mobile Alerts"],
      badge: "New",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "PatientPulse",
      description: "Mobile app for patient engagement with appointment booking, medical records access, and health tracking.",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Appointment Booking", "Medical Records", "Health Tracking", "Telemedicine"],
      badge: "Mobile",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "AI Healthcare Tools",
      description: "Advanced AI-powered diagnostics, predictions, and analytics for improved patient outcomes and operational efficiency.",
      icon: <Brain className="w-8 h-8" />,
      features: ["Diagnostic AI", "Predictive Analytics", "Image Recognition", "Risk Assessment"],
      badge: "AI-Powered",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "BI Dashboard",
      description: "Smart management dashboard for hospitals and clinics with real-time insights and performance metrics.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time Analytics", "Performance Metrics", "Custom Reports", "Data Visualization"],
      badge: "Analytics",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Healthcare <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-4">
            Empowering healthcare with innovative digital solutions that improve patient care and operational efficiency.
          </p>
          <div className="flex items-center justify-center gap-2 text-foreground/60">
            <span>Visit our healthcare portal:</span>
            <a 
              href="https://healthcare.softpulseai.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-glow transition-colors inline-flex items-center gap-1"
            >
              healthcare.softpulseai.in
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="glass-card border-white/10 hover-lift group cursor-pointer overflow-hidden relative"
            >
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center group-hover:glow-accent transition-all duration-300`}
                  >
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="glass-card border-white/20 text-accent"
                  >
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 mb-6 leading-relaxed">
                  {product.description}
                </CardDescription>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-foreground/60">
                      <Star className="w-3 h-3 text-accent mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

               <Button
  style={{ marginTop: "5px" }}
  variant="outline"
  className="w-full glass-card border-white/20 hover:border-accent/50 group"
  onClick={() => navigate("/products")} // <-- Add this line
>
  Learn More
  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Button>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Currently Serving <span className="gradient-text">5+ Hospitals</span> Across India
            </h3>
            <p className="text-foreground/70 mb-6">
              Join the growing number of healthcare institutions that trust SoftpulseAI for their digital transformation.
            </p>
            <Button className="gradient-primary hover:shadow-primary">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;