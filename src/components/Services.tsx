import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

import { 
  Code, 
  Smartphone, 
  Bot, 
  BarChart3, 
  MessageSquare, 
  Share2, 
  Settings,
  Heart,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {

  const navigate = useNavigate();

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software & Web Development",
      description: "Tailored software, portals, websites, and web apps built for scalability, security, and seamless user experiences.",
      features: ["Scalable Architecture", "Security First", "Modern Tech Stack"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development & UI/UX Design",
      description: "High-performance native and cross-platform apps paired with stunning, intuitive interfaces that boost engagement.",
      features: ["Native & Cross-platform", "Intuitive Design", "High Performance"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Solutions & Business Automation",
      description: "Smart AI-driven tools (chatbots, predictive analytics, image recognition) with automated processes to streamline operations.",
      features: ["Predictive Analytics", "Chatbot Solutions", "Process Automation"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard Analytics & Business Insights",
      description: "Real-time KPIs, BI dashboards, and predictive data tools that help you make informed, data-driven decisions.",
      features: ["Real-time KPIs", "BI Dashboards", "Data-driven Insights"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp, SMS & Chatbot Marketing",
      description: "Personalized WhatsApp and SMS campaigns combined with automated chatbots to qualify leads and grow your customer base.",
      features: ["Personalized Campaigns", "Lead Qualification", "Automated Follow-up"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media & Digital Growth",
      description: "Targeted social media strategies, content creation, influencer outreach, and paid ads to expand your reach and build your brand.",
      features: ["Content Strategy", "Influencer Outreach", "Paid Advertising"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "IT Outsourcing & Technical Support",
      description: "Flexible dedicated teams, hosting solutions, DevOps, and ongoing tech support tailored to fit your timelines and budgets.",
      features: ["Dedicated Teams", "DevOps Solutions", "24/7 Support"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare Solutions",
      description: "Specialized healthcare products including Hospital Information Systems, Clinic Management, and AI diagnostic tools.",
      features: ["HIS & CMS", "AI Diagnostics", "Patient Management"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Core Expertise</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Innovative solutions for a connected world, designed to drive sustainable growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card border-white/10 hover-lift group cursor-pointer"
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <div className="text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
               <Button
  style={{ marginTop: "5px" }}
  variant="outline"
  className="w-full glass-card border-white/20 hover:border-accent/50 group"
  onClick={() => navigate("/services")} // <-- Add this line
>
  Learn More
  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;