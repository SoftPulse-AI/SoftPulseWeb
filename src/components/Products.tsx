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
  Star,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "SoftPulse HIS",
      description:
        "Hospital Information System for end-to-end hospital operations, billing, IPD/OPD, pharmacy, and real-time monitoring.",
      icon: <Users className="w-8 h-8" />,
      features: ["18+ Hospital Modules", "Billing & IPD/OPD", "MIS Reports", "Built-in AI Features"],
      badge: "Hospital",
      color: "from-blue-500 to-cyan-500",
      href: "/softpulse-his",
    },
    {
      name: "MedPulse CMS",
      description:
        "Clinic Management System for multi-doctor OPD clinics — appointments, e-prescriptions, reminders, and analytics.",
      icon: <Heart className="w-8 h-8" />,
      features: ["OPD Registration", "e-Prescriptions", "WhatsApp Reminders", "Clinic Analytics"],
      badge: "Clinic",
      color: "from-red-500 to-pink-500",
      href: "/medpulse-cms",
    },
    {
      name: "DocPulse",
      description:
        "Doctor platform for e-prescriptions, patient history, availability, and staff communication.",
      icon: <Calendar className="w-8 h-8" />,
      features: ["e-Prescriptions", "Patient Records", "Scheduling", "Internal Alerts"],
      badge: "Doctors",
      color: "from-green-500 to-emerald-500",
      href: "/docpulse",
    },
    {
      name: "PatientPulse",
      description:
        "Patient engagement app for appointments, records, secure chat, and branded hospital experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Appointment Reminders", "Medical Records", "Secure Chat", "Branded Apps"],
      badge: "Patients",
      color: "from-purple-500 to-violet-500",
      href: "/patientpulse",
    },
    {
      name: "AI Healthcare",
      description:
        "AI healthcare solutions — prescriptions support, no-show prediction, risk assessment, and clinical automation.",
      icon: <Brain className="w-8 h-8" />,
      features: ["Clinical AI Assist", "No-Show Prediction", "Risk Assessment", "EMR Automation"],
      badge: "AI",
      color: "from-orange-500 to-yellow-500",
      href: "/ai-healthcare",
    },
    {
      name: "BI Dashboard",
      description:
        "Healthcare BI dashboards for KPIs, patient flow, revenue tracking, and predictive operational insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time KPIs", "Patient Flow", "Revenue Analytics", "Custom Reports"],
      badge: "Analytics",
      color: "from-teal-500 to-cyan-500",
      href: "/dashboard",
    },
  ];

  return (
    <section id="products" className="py-12 relative">
      <div className="container mx-auto px-2">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Healthcare <span className="gradient-text">Products</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-3">
            Complete healthtech stack for hospitals and clinics — HIS, CMS, doctor &amp; patient apps,
            AI healthcare tools, and BI dashboards.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/60">
            <Link to="/healthtech" className="text-accent hover:text-accent-glow transition-colors font-medium">
              View all HealthTech solutions
            </Link>
            <span aria-hidden="true">·</span>
            <a
              href="https://healthcare.softpulseai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-glow transition-colors inline-flex items-center gap-1"
            >
              healthcare.softpulseai.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card
              key={product.href}
              className="glass-card border-white/10 hover-lift group overflow-hidden relative"
            >
              <CardHeader className="relative pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center group-hover:glow-accent transition-all duration-300`}
                  >
                    <div className="text-white text-sm">{product.icon}</div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="glass-card border-white/20 text-accent text-xs px-2 py-1"
                  >
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-base font-semibold text-foreground leading-tight">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-foreground/80 mb-3 leading-snug">
                  {product.description}
                </CardDescription>

                <div className="space-y-1 mb-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-xs text-foreground/70">
                      <Star className="w-2.5 h-2.5 text-accent mr-1.5 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full glass-card border-white/20 hover:border-accent/50 group text-xs"
                  onClick={() => navigate(product.href)}
                >
                  View {product.name}
                  <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="glass-card p-5 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Ready to digitize your hospital or clinic?
            </h3>
            <p className="text-sm text-foreground/70 mb-4">
              Get SoftPulse HIS, MedPulse CMS, AI healthcare tools, and dashboards working together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="gradient-primary"
                onClick={() => window.open("https://calendly.com/softpulseai/30min", "_blank")}
              >
                Book HealthTech Demo
              </Button>
              <Button variant="outline" onClick={() => navigate("/healthtech")}>
                Explore All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
