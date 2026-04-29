import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Globe,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Calendar,
  ArrowRight
} from "lucide-react";
import contactHero from "@/assets/contact-hero.webp";
import { useState } from "react";

const Contact = () => {

  const [status, setStatus] = useState(""); // status message
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiBaseUrl = "https://notificationservice.softpulseai.in";
  const websiteClientId = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // clear previous status
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const payload = {
      client_id: websiteClientId,
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      source: "website",
      campaign: "softpulseai-contact-form",
      page: window.location.href
    };

    try {
      const response = await fetch(`${apiBaseUrl}/partner/public/website-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setStatus("Submitted successfully! Our team will contact you shortly.");
        e.target.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        const msg = data?.error || "There was a problem submitting the form. Please try again.";
        setStatus(msg);
      }
    } catch (_err) {
      setStatus("There was a problem submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
 
  const statusClassName = status.toLowerCase().includes("success")
    ? "text-green-600"
    : "text-red-600";

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "softpulseai@gmail.com",
      link: "mailto:softpulseai@gmail.com"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      value: "softpulseai.com",
      link: "https://softpulseai.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "India",
      link: null
    }
  ];

  const services = [
    "Custom Software Development",
    "AI Solutions & Automation",
    "Mobile App Development",
    "Healthcare Solutions",
    "Digital Marketing",
    "IT Outsourcing"
  ];

  return (
    <section id="contact" className="py-12 relative">
      {/* Hero Image */}
      <div className="relative h-44 md:h-52 mb-8 overflow-hidden rounded-xl mx-3 md:mx-4">
        <img
          src={contactHero}
          alt="Contact Us"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-sm md:text-base opacity-90">Let's build something amazing together</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm md:text-base text-foreground/80 max-w-3xl mx-auto">
            Let's explore how we can co-create solutions that fuel your vision, boost your ROI,
            and build a smarter tomorrow — together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <Card className="glass-card border-white/10 p-5">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-accent" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Name
                  </label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    required
                    className="glass-card border-white/20 focus:border-accent/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="glass-card border-white/20 focus:border-accent/50"
                  />
                </div>

                {/* PhoneNumber */}
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="glass-card border-white/20 focus:border-accent/50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-foreground/80 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project or requirements..."
                    rows={4}
                    required
                    className="glass-card border-white/20 focus:border-accent/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary hover:shadow-primary group"
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {status && (
                  <div className={`text-center mt-4 font-medium ${statusClassName}`}>
                    {status}
                  </div>
                )}
              </form>

            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-5">
            {/* Contact Information */}
            <Card className="glass-card border-white/10 p-4">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        <div className="text-primary-foreground">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground hover:text-accent transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card border-white/10 p-4">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full glass-card border-white/20 hover:border-accent/50 justify-between group"
                    onClick={() => window.open("https://calendly.com/softpulseai/30min", "_blank")}
                  >
                    <span className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      Schedule a Demo
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>


                <Button
  variant="outline"
  className="w-full glass-card border-white/20 hover:border-accent/50 justify-between group"
  onClick={() => {
    const link = document.createElement('a');
    link.href = "/CompanyProfile.pdf"; // If your PDF is in the public folder
    link.download = "CompanyProfile.pdf"; // You can change the download file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <span className="flex items-center gap-3">
    <Globe className="w-5 h-5" />
    Download Company Brochure
  </span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Button>
                </div>
              </CardContent>
            </Card>

            {/* Commitment Message */}
            <Card className="glass-card border-white/10 p-4">
              <CardContent className="p-0 text-center">
                <h3 className="text-base font-semibold mb-2">Our Commitment</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We're committed to your growth. Whether you're a startup or enterprise,
                  we're with you every step of the way — delivering world-class expertise
                  and a partnership you can count on.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;