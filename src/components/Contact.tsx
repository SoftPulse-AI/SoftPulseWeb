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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // clear previous status

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyPBOERk2yqnt5MihmGQV9n911QyO1rX_vkwrXaMxBBcDVZgrKiQ1DhBlNoZNG_dQRGjw/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setStatus("Submitted successfully! We will reach you soon via email.");
        e.target.reset();
      } else {
        setStatus("There was a problem submitting the form. Please try again.");
      }
    } catch (err) {
      setStatus("There was a problem submitting the form. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@softpulseai.in",
      link: "mailto:info@softpulseai.in"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      value: "www.softpulseai.in",
      link: "https://www.softpulseai.in"
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
    <section id="contact" className="py-20 relative">
      {/* Hero Image */}
      <div className="relative h-64 mb-16 overflow-hidden rounded-2xl mx-6">
        <img
          src={contactHero}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">Let's build something amazing together</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Let's explore how we can co-create solutions that fuel your vision, boost your ROI,
            and build a smarter tomorrow — together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card border-white/10 p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl flex items-center gap-3">
                <MessageSquare className="w-7 h-7 text-accent" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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

                {/* Phone Number */}
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

                <Button type="submit" className="w-full gradient-primary hover:shadow-primary group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {status && (
                  <div className="text-center mt-4 text-green-600 font-medium">
                    {status}
                  </div>
                )}
              </form>

            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-card border-white/10 p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
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
            <Card className="glass-card border-white/10 p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
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
            <Card className="glass-card border-white/10 p-6">
              <CardContent className="p-0 text-center">
                <h3 className="text-lg font-semibold mb-3">Our Commitment</h3>
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