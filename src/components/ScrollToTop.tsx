import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed transition-all duration-300 z-20 
      sm:bottom-8 sm:right-24 
      bottom-24 right-6 
      ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
      <Button
        onClick={scrollToTop}
        variant="default"
        size="lg"
        className="rounded-full w-14 h-14 shadow-elevated hover:shadow-primary glow-primary bg-gradient-to-r from-primary to-accent text-primary-foreground"
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ScrollToTop;