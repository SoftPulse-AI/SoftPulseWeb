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
          margin-top: 80px;
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden "> 
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left space-y-8 slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 mt-mobile">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/80">Pioneering Next-Generation Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">SoftpulseAI</span>
              <br />
              <span className="text-foreground">Technologies</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Leading IT Solutions in Website Development, App Development, Healthcare & AI-Powered Systems
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to deliver scalable, innovative digital solutions that fuel business growth, enhance operational efficiency, and elevate customer experiences across diverse industries.
            </p>

            {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/services">
    <Button
      size="lg"
      className="gradient-primary hover:shadow-primary transition-smooth group px-8 py-6 text-lg"
    >
      Explore Solutions
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </Link>

  <Link to="/products">
    <Button
      variant="outline"
      size="lg"
      className="border-primary/20 hover:border-primary/50 px-8 py-6 text-lg"
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
      className="w-full h-auto rounded-2xl shadow-2xl "
      loading="eager"
    />
  </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl hover-lift border-primary/10">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-muted-foreground">Hospitals Using Our Systems</div>
          </div>
          <div className="glass-card p-6 rounded-xl hover-lift border-primary/10">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-muted-foreground">Expert Team Members</div>
          </div>
          <div className="glass-card p-6 rounded-xl hover-lift border-primary/10">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;