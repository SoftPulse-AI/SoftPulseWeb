import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import logo from '@/assets/cropped_image (1).png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "HealthTech", href: "/healthtech" },
    { name: "Growth", href: "/growth" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
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
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <img 
                src={logo} 
                alt="SoftpulseAI Logo" 
                className="relative rounded-lg p-1" 
                style={{width: '46px', height: '58px'}} 
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold gradient-text">SOFTPULSEAI</span>
              <span className="text-xs text-muted-foreground tracking-wider">TECHNOLOGIES</span>
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-[14px] text-foreground/80 hover:text-foreground transition-smooth relative group",
                  location.pathname === item.href && "text-primary font-semibold"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary/50 transition-all duration-300",
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              className="gradient-primary hover:shadow-primary"
              onClick={() => window.open("https://calendly.com/softpulseai/30min", "_blank")}
            >
              Book Demo
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
          <div className="absolute top-full left-0 w-full border-t border-primary/10 md:hidden z-50 bg-background/95 backdrop-blur-lg max-h-[calc(100vh-78px)] overflow-y-auto overscroll-contain">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-foreground/80 hover:text-foreground transition-colors py-1.5 text-sm font-medium block",
                    location.pathname === item.href && "text-primary font-semibold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
                <ThemeToggle />
                <Button
                  className="gradient-primary hover:shadow-primary"
                  onClick={() => window.open("https://calendly.com/softpulseai/30min", "_blank")}
                >
                  Book Demo
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