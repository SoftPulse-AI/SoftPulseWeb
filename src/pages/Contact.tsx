import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - SoftpulseAI Technologies</title>
        <meta name="description" content="Get in touch with SoftpulseAI Technologies for your digital transformation needs. Contact us for custom software development, healthcare solutions, and AI automation." />
        <meta name="keywords" content="contact softpulseai, healthcare software development, custom software solutions, digital transformation services" />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <FloatingShapes />
        <Navigation />
        <div className="pt-20 relative z-10">
          <Contact />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default ContactPage;