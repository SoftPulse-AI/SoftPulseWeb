import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: "Home", path: "/", description: "Main homepage" },
    { name: "Services", path: "/services", description: "Our IT services" },
    { name: "Products", path: "/products", description: "Healthcare solutions" },
    { name: "Portfolio", path: "/portfolio", description: "Our work" },
    { name: "About", path: "/about", description: "About us" },
    { name: "Contact", path: "/contact", description: "Get in touch" }
  ];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | SoftpulseAI Technologies</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our custom software development, AI solutions, healthcare technology, and digital transformation services." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://softpulseai.in/404" />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <FloatingShapes />
        <Navigation />
        
        <div className="pt-20 relative z-10">
          <div className="container mx-auto px-2 py-20">
            <div className="text-center mb-16">
              <div className="text-8xl font-bold gradient-text mb-6">404</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Oops! Page Not Found
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, we've got plenty of amazing content for you to explore!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="gradient-primary hover:shadow-primary"
                  onClick={() => navigate('/')}
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go to Homepage
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>

            {/* Popular Pages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
                Popular Pages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularPages.map((page, index) => (
                  <Card key={index} className="glass-card hover-lift border-primary/10">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {page.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {page.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => navigate(page.path)}
                      >
                        <Search className="w-4 h-4 mr-2" />
                        Visit {page.name}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <Card className="glass-card border-primary/10 text-center">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Need Help Finding Something?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our team is here to help you find exactly what you're looking for. 
                  Get in touch with us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="gradient-primary hover:shadow-primary"
                    onClick={() => navigate('/contact')}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => window.open('mailto:info@softpulseai.in')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Email Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
