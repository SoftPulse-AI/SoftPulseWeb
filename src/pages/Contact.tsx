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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softpulseai.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softpulseai.com/contact" />
        <meta property="og:title" content="Contact Us - SoftpulseAI Technologies" />
        <meta property="og:description" content="Contact SoftpulseAI Technologies for custom software development, healthcare solutions, and AI automation." />
        <meta property="og:image" content="https://softpulseai.com/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - SoftpulseAI Technologies" />
        <meta name="twitter:description" content="Contact SoftpulseAI Technologies for custom software development, healthcare solutions, and AI automation." />
        <meta name="twitter:image" content="https://softpulseai.com/favicon.png" />
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