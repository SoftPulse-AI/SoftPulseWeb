import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AIHealthcare from "./pages/AIHealthcare";
import SoftPulseHIS from "./pages/SoftPulseHIS";
import MedPulseCMS from "./pages/MedPulseCMS";
import DocPulse from "./pages/DocPulse";
import PatientPulse from "./pages/PatientPulse";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect } from "react";
import FloatingShapes from "@/components/FloatingShapes";
import Chatbot from "@/components/Chatbot";

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Custom cursor component
// const CustomCursor = () => {
//   useEffect(() => {
//     const cursor = document.createElement('div');
//     cursor.className = 'custom-cursor';
//     document.body.appendChild(cursor);

//     const moveCursor = (e: MouseEvent) => {
//       cursor.style.left = e.clientX + 'px';
//       cursor.style.top = e.clientY + 'px';
//     };

//     const clickCursor = () => {
//       cursor.classList.add('clicked');
//       setTimeout(() => cursor.classList.remove('clicked'), 100);
//     };

//     document.addEventListener('mousemove', moveCursor);
//     document.addEventListener('click', clickCursor);

//     return () => {
//       document.removeEventListener('mousemove', moveCursor);
//       document.removeEventListener('click', clickCursor);
//       if (document.body.contains(cursor)) {
//         document.body.removeChild(cursor);
//       }
//     };
//   }, []);

//   return null;
// };

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="softpulse-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* <CustomCursor /> */}
          <FloatingShapes />
          <ScrollToTopOnRouteChange />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product detail pages (SEO + direct landing pages) */}
            <Route path="/softpulse-his" element={<SoftPulseHIS />} />
            <Route path="/medpulse-cms" element={<MedPulseCMS />} />
            <Route path="/docpulse" element={<DocPulse />} />
            <Route path="/patientpulse" element={<PatientPulse />} />
            <Route path="/ai-healthcare" element={<AIHealthcare />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
