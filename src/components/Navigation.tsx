import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import logo from '@/assets/cropped_image (1).png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { name: "SoftPulse HIS", href: "/softpulse-his", description: "Hospital Information System" },
    { name: "MedPulse CMS", href: "/medpulse-cms", description: "Clinical Management System" },
    { name: "AI Healthcare", href: "/ai-healthcare", description: "AI-Powered Solutions" },
    { name: "DocPulse", href: "/docpulse", description: "Doctor Platform" },
    { name: "PatientPulse", href: "/patientpulse", description: "Patient App" },
    { name: "BI Dashboard", href: "/dashboard", description: "Analytics Dashboard" },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-2" >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={logo} 
                alt="SoftpulseAI Logo" 
                className="relative rounded-lg p-2" 
                style={{width: '55px', height: '70px'}} 
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold gradient-text">SOFTPULSEAI</span>
              <span className="text-xs text-muted-foreground tracking-wider">TECHNOLOGIES</span>
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-smooth relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-foreground/80 hover:text-foreground transition-smooth relative group",
                    location.pathname === item.href && "text-primary font-semibold"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300",
                    location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              )
            ))}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="default" className="gradient-primary hover:shadow-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="
    md:hidden 
    text-foreground
    hover:text-foreground focus:text-foreground active:text-foreground
    hover:bg-transparent focus:bg-transparent active:bg-transparent
  "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full border-t border-primary/10 md:hidden z-50 bg-background/95 backdrop-blur-lg">
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
                  : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "text-foreground/80 hover:text-foreground transition-colors py-2 font-medium",
                        location.pathname === item.href && "text-primary font-semibold"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
              ))}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
                <ThemeToggle />
                <Button className="gradient-primary hover:shadow-primary">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;