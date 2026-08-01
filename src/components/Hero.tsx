import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Stethoscope,
  Brain,
  BarChart3,
  Code,
  Smartphone,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import heroImage from "@/assets/hero-image.webp";

const injectMobileMarginCSS = () => {
  if (!document.getElementById("mobile-margin-style")) {
    const style = document.createElement("style");
    style.id = "mobile-margin-style";
    style.innerHTML = `
      .mt-mobile {
        margin-top: 80px;
        margin-bottom: 0px;
      }
      @media screen and (max-width: 767px) {
        .mt-mobile {
          margin-top: 100px;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

const Hero = () => {
  useEffect(() => {
    injectMobileMarginCSS();
  }, []);

  return (
    <section id="home" className="min-h-[95vh] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-2 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 slide-up">
            <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 rounded-full mb-3 mt-mobile">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs text-foreground/80">
                Healthcare · AI · Software · Web &amp; Apps · Dashboards
              </span>
            </div>

            <h1 className="hero-home-title font-bold leading-[1.05]">
              <span className="gradient-text inline-block">SoftPulseAI</span>
              <span className="text-foreground inline-block ml-3">Technologies</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
              Digital solutions for healthcare and every industry — custom software, AI automation,
              websites, mobile apps, CRM, marketing, and BI dashboards.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Strong in HealthTech (HIS, CMS, DocPulse, PatientPulse) — and equally ready for retail,
              education, real estate, startups, and enterprises that need scalable tech.
            </p>

            {/* Healthcare first */}
            <div>
              <p className="text-xs font-semibold text-foreground/50 mb-2 uppercase tracking-wide">
                Healthcare products
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {[
                  { label: "HIS", to: "/softpulse-his", icon: Stethoscope },
                  { label: "CMS", to: "/medpulse-cms", icon: Stethoscope },
                  { label: "AI Healthcare", to: "/ai-healthcare", icon: Brain },
                  { label: "Dashboards", to: "/dashboard", icon: BarChart3 },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-smooth"
                  >
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other services / industries */}
            <div>
              <p className="text-xs font-semibold text-foreground/50 mb-2 uppercase tracking-wide">
                Services for all industries
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {[
                  { label: "Web & Software", to: "/web-development", icon: Code },
                  { label: "Mobile Apps", to: "/mobile-app-development", icon: Smartphone },
                  { label: "AI Automation", to: "/ai-automation", icon: Brain },
                  { label: "Growth & CRM", to: "/growth", icon: Zap },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-border hover:border-accent/40 hover:bg-accent/5 transition-smooth"
                  >
                    <item.icon className="w-3.5 h-3.5 text-accent" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/services">
                <Button
                  size="lg"
                  className="gradient-primary hover:shadow-primary transition-smooth group px-6 py-5 text-base"
                >
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/healthtech">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary/50 px-6 py-5 text-base"
                >
                  <Stethoscope className="mr-2 w-5 h-5" />
                  HealthTech Products
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src={heroImage}
              alt="SoftpulseAI software, AI, healthcare, and digital solutions for multiple industries"
              className="w-full h-auto object-center rounded-xl shadow-xl"
              loading="eager"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-6xl mx-auto">
          <div className="glass-card p-4 rounded-lg hover-lift border-primary/10">
            <div className="text-2xl font-bold gradient-text mb-1">6+</div>
            <div className="text-sm text-muted-foreground">HealthTech Products</div>
          </div>
          <div className="glass-card p-4 rounded-lg hover-lift border-primary/10">
            <div className="text-2xl font-bold gradient-text mb-1">8+</div>
            <div className="text-sm text-muted-foreground">Core IT Services</div>
          </div>
          <div className="glass-card p-4 rounded-lg hover-lift border-primary/10">
            <div className="text-2xl font-bold gradient-text mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="glass-card p-4 rounded-lg hover-lift border-primary/10">
            <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
