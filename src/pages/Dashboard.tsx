import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  PieChart,
  Activity,
  Users,
  Calendar,
  DollarSign,
  Clock,
  Target,
  Zap,
  ArrowRight,
  Eye,
  Check
} from "lucide-react";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "BI Dashboard - Business Intelligence & Analytics for Healthcare | SoftpulseAI";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'BI Dashboard - Comprehensive business intelligence and analytics dashboard for hospitals and clinics. Real-time insights, performance metrics, and data visualization.');
    }
  }, []);

  const dashboardFeatures = [
    { 
      name: "Real-time Analytics", 
      icon: <Activity className="w-8 h-8" />, 
      description: "Live data monitoring and analytics for instant insights into your healthcare operations",
      metrics: ["Patient flow", "Department utilization", "Staff performance", "Resource allocation"]
    },
    { 
      name: "Performance Metrics", 
      icon: <TrendingUp className="w-8 h-8" />, 
      description: "Comprehensive KPIs and performance indicators to track operational excellence",
      metrics: ["Patient satisfaction", "Treatment outcomes", "Efficiency ratios", "Quality indicators"]
    },
    { 
      name: "Custom Reports", 
      icon: <BarChart3 className="w-8 h-8" />, 
      description: "Generate detailed custom reports for management and regulatory compliance",
      metrics: ["Financial reports", "Clinical reports", "Operational reports", "Compliance reports"]
    },
    { 
      name: "Data Visualization", 
      icon: <PieChart className="w-8 h-8" />, 
      description: "Interactive charts, graphs, and visual representations of complex healthcare data",
      metrics: ["Interactive charts", "Heat maps", "Trend analysis", "Comparative views"]
    },
    { 
      name: "Revenue Analytics", 
      icon: <DollarSign className="w-8 h-8" />, 
      description: "Financial performance tracking and revenue optimization insights",
      metrics: ["Revenue streams", "Cost analysis", "Profitability", "Billing efficiency"]
    },
    { 
      name: "Patient Journey Analytics", 
      icon: <Users className="w-8 h-8" />, 
      description: "Track patient flow and experience throughout their healthcare journey",
      metrics: ["Wait times", "Treatment paths", "Satisfaction scores", "Readmission rates"]
    },
    { 
      name: "Operational Efficiency", 
      icon: <Zap className="w-8 h-8" />, 
      description: "Monitor and optimize operational processes for maximum efficiency",
      metrics: ["Resource utilization", "Workflow optimization", "Staff productivity", "Equipment usage"]
    },
    { 
      name: "Predictive Analytics", 
      icon: <Target className="w-8 h-8" />, 
      description: "AI-powered predictions for better planning and decision making",
      metrics: ["Demand forecasting", "Risk prediction", "Capacity planning", "Trend analysis"]
    }
  ];

  const benefits = [
    "Real-time visibility into all aspects of your healthcare operations",
    "Data-driven decision making with comprehensive analytics",
    "Improved operational efficiency through performance monitoring",
    "Enhanced patient care through insights and optimization",
    "Regulatory compliance with automated reporting",
    "Cost reduction through resource optimization",
    "Revenue optimization through financial analytics",
    "Predictive insights for proactive management",
    "Customizable dashboards for different user roles",
    "Mobile-responsive design for access anywhere"
  ];

  const dashboardTypes = [
    {
      name: "Executive Dashboard",
      description: "High-level KPIs and strategic metrics for leadership",
      icon: <Eye className="w-6 h-6" />,
      features: ["Financial overview", "Strategic KPIs", "Trend analysis", "Performance summary"]
    },
    {
      name: "Clinical Dashboard",
      description: "Clinical metrics and patient care indicators",
      icon: <Activity className="w-6 h-6" />,
      features: ["Patient outcomes", "Clinical quality", "Safety metrics", "Care protocols"]
    },
    {
      name: "Operational Dashboard",
      description: "Day-to-day operational metrics and efficiency indicators",
      icon: <Zap className="w-6 h-6" />,
      features: ["Resource utilization", "Staff metrics", "Equipment status", "Workflow efficiency"]
    },
    {
      name: "Financial Dashboard",
      description: "Financial performance and revenue analytics",
      icon: <DollarSign className="w-6 h-6" />,
      features: ["Revenue tracking", "Cost analysis", "Billing metrics", "Profitability"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-2">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="gradient-primary mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Business Intelligence Dashboard
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              BI Dashboard: Smart Management for <span className="gradient-text">Hospitals & Clinics</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Smart management dashboard for hospitals and clinics with real-time insights and performance metrics. 
              Transform your healthcare data into actionable insights that drive better outcomes and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                View Live Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Request Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Specialized <span className="gradient-text">Dashboard Solutions</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              Different dashboards for different roles and requirements, all integrated into one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {dashboardTypes.map((dashboard, index) => (
              <Card key={index} className="glass-card border-white/10 hover-lift group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:glow-accent transition-all duration-300">
                      <div className="text-primary-foreground">
                        {dashboard.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{dashboard.name}</CardTitle>
                      <CardDescription className="text-foreground/70">
                        {dashboard.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {dashboard.features.map((feature, idx) => (
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Analytics Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dashboardFeatures.map((feature, index) => (
              <Card key={index} className="glass-card border-white/10 hover-lift group h-full">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:glow-accent transition-all duration-300">
                    <div className="text-primary-foreground">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-xs text-foreground/60">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                        {metric}
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
              Why Choose Our <span className="gradient-text">BI Dashboard</span>
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
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-foreground/80">KPIs Tracked</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">Real-time</div>
              <div className="text-foreground/80">Data Updates</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-foreground/80">Monitoring</div>
            </div>
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-foreground/80">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-2">
          <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              Transform Your Data into <span className="gradient-text">Actionable Insights</span>
            </h3>
            <p className="text-xl text-foreground/80 mb-8">
              Start making data-driven decisions today with our comprehensive BI dashboard solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary hover:shadow-primary text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 glass-card border-white/20">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;