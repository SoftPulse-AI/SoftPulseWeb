import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import heroImage from "@/assets/hero-image.webp";

const injectMobileMarginCSS = () => {
  if (!document.getElementById("mobile-margin-style")) {
    const style = document.createElement("style");
    style.id = "mobile-margin-style";
    style.innerHTML = `
      .mt-mobile {
        margin-top: 80px;
        margin-bottom : 0px;
      }
      @media screen and (max-width: 767px) {
        .mt-mobile {
          margin-top: 100 px;
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
     {/* bg-white */}
      {/* Hero Image Background */}
      {/* <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="SoftpulseAI Technologies team working on innovative solutions"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
      </div> */}

      <div className="container mx-auto px-2 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 rounded-full mb-3 mt-mobile">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs text-foreground/80">Where Intelligence Meets Innovation</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-home-title font-bold leading-[1.05] whitespace-nowrap">
              <span className="gradient-text inline-block whitespace-nowrap">SoftPulseAI</span>
              <span className="text-foreground inline-block whitespace-nowrap ml-3">Technologies</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Leading IT Solutions in Website Development, App Development, Healthcare & AI-Powered Systems
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              Our mission is to deliver scalable, innovative digital solutions that fuel business growth, enhance operational efficiency, and elevate customer experiences across diverse industries.
            </p>

            {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-3">
  <Link to="/services">
    <Button
      size="lg"
      className="gradient-primary hover:shadow-primary transition-smooth group px-6 py-5 text-base"
    >
      Explore Solutions
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </Link>

  <Link to="/products">
    <Button
      variant="outline"
      size="lg"
      className="border-primary/20 hover:border-primary/50 px-6 py-5 text-base"
    >
      <Zap className="mr-2 w-5 h-5" />
      View Products
    </Button>
  </Link>
</div>
          </div>

          <div className="lg:w-1/2">
    <img
      src={heroImage}
      alt="Modern software development team collaborating on innovative technology solutions"
      className="w-full h-auto object-center rounded-xl shadow-xl"
      loading="eager"
    />
  </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 max-w-6xl mx-auto">
          <div className="glass-card p-4 rounded-lg hover-lift border-primary/10">
            <div className="text-2xl font-bold gradient-text mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="glass-card p-4 rounded-lg hover-lift border-primary/10">
            <div className="text-2xl font-bold gradient-text mb-1">10+</div>
            <div className="text-sm text-muted-foreground">Expert Team Members</div>
          </div>
          <div className="glass-card p-4 rounded-lg hover-lift border-primary/10">
            <div className="text-2xl font-bold gradient-text mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
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