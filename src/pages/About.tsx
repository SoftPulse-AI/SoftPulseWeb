import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.webp";
import {
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Lightbulb, 
  Users,
  Award,
  Globe,
  Code,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices."
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in every project we undertake."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building long-term relationships and growing together with our clients."
    }
  ];

  const team = [
    { role: "Leadership Team", count: "3+", description: "Experienced executives and visionaries" },
    { role: "Developers", count: "8+", description: "Full-stack and specialized developers" },
    { role: "AI/ML Engineers", count: "2+", description: "Machine learning and AI specialists" },
    { role: "UI/UX Designers", count: "2+", description: "Creative and user experience experts" }
  ];

  const achievements = [
    { icon: Globe, title: "5+ Hospitals", description: "Successfully implemented HIS across multiple hospitals" },
    { icon: Users, title: "80+ Clients", description: "Served diverse clients across various industries" },
    { icon: Code, title: "100+ Projects", description: "Completed projects ranging from startups to enterprises" },
    { icon: Award, title: "98% Success Rate", description: "Exceptional project delivery and client satisfaction" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - SoftpulseAI Technologies</title>
        <meta name="description" content="Learn about SoftpulseAI Technologies - a forward-thinking IT solutions partner specializing in healthcare technology, AI automation, and digital transformation." />
        <meta name="keywords" content="about softpulseai, healthcare technology, AI solutions, digital transformation, IT company India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softpulseai.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softpulseai.com/about" />
        <meta property="og:title" content="About Us - SoftpulseAI Technologies" />
        <meta property="og:description" content="Learn about SoftpulseAI Technologies - a forward-thinking IT solutions partner specializing in healthcare technology, AI automation, and digital transformation." />
        <meta property="og:image" content="https://softpulseai.com/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - SoftpulseAI Technologies" />
        <meta name="twitter:description" content="Learn about SoftpulseAI Technologies - a forward-thinking IT solutions partner specializing in healthcare technology, AI automation, and digital transformation." />
        <meta name="twitter:image" content="https://softpulseai.com/favicon.png" />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <FloatingShapes />
        <Navigation />
        
        <div className="pt-16 relative z-10">
          {/* Hero Section */}
          <div className="container mx-auto px-2 py-8">
            <div className="text-center mb-8">
              <div className="relative mb-6">
                <img 
                  src={aboutHero} 
                  alt="SoftpulseAI Technologies team collaboration and innovation"
                  className="w-full h-52 md:h-64 object-cover rounded-xl shadow-xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-3">
                About SoftpulseAI Technologies
              </h1>
              <p className="text-sm md:text-base text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                {/* Leading IT Solutions in Website Development, App Development, Healthcare & AI-Powered Systems. 
                Our mission is to deliver scalable, innovative digital solutions that fuel business growth, 
                enhance operational efficiency, and elevate customer experiences across diverse industries. 
                Partner with SoftpulseAI to accelerate your digital transformation journey and amplify your 
                brand's online presence for lasting success. */}
              </p>
            </div>
          </div>

          {/* Company Overview */}
          <div className="container mx-auto px-2 mb-10">
            <Card className="glass-card border-white/10">
              <CardContent className="p-5 md:p-6">
                <h2 className="text-2xl font-bold gradient-text mb-4">Who We Are</h2>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                  SoftpulseAI Technologies is a forward-thinking solutions partner fueled by innovation, 
                  integrity, and a commitment to excellence. Our passionate team of technology experts empowers 
                  organizations across diverse industries to grow smarter, faster, and more sustainably — crafting 
                  bespoke software, AI-driven automation, responsive websites, engaging mobile apps, and insightful 
                  strategies that inspire progress.
                </p>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  From launching robust SaaS platforms to delivering specialized healthcare solutions, we build 
                  scalable, future-ready systems that help our clients navigate change with confidence and achieve 
                  long-term success.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <div className="container mx-auto px-2 mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-3">Our Story — From a Spark to a Revolution</h2>
              <p className="text-sm md:text-base text-foreground/80 max-w-3xl mx-auto">
                Founded by a group of passionate engineers and problem-solvers, SoftpulseAI began with a simple 
                mission: make technology work for people.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  We observed countless businesses struggling to adapt, scale, or even survive in a rapidly 
                  evolving digital age. That's when we decided to build something different — not just another 
                  IT firm, but a true innovation partner.
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  We started with a single product — a custom-built Hospital Information System (HIS) and Clinic 
                  Management System (CMS) tailored for the healthcare sector. It wasn't perfect, but it worked — 
                  and most importantly, it delivered value.
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Our first implementation helped a clinic streamline appointments, prescriptions, and billing 
                  in ways they'd never imagined possible. That one success opened the door to many.
                </p>
              </div>
              <div className="relative">
                <Card className="glass-card border-white/10">
                  <CardContent className="p-5 text-center">
                    <div className="text-4xl mb-3">🚀</div>
                    <h3 className="text-xl font-bold gradient-text mb-3">The Journey</h3>
                    <p className="text-sm text-foreground/80">
                      From one clinic to 5+ hospitals and 80+ satisfied clients across diverse industries.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm text-foreground/80 leading-relaxed">
                Soon, word spread. One client turned into five. Projects expanded from healthcare to e-commerce, 
                real estate, and service industries. Today, we're working with five hospitals across India and 
                numerous other firms for whom we've developed customized web platforms, mobile apps, automation 
                tools, and marketing systems. We listened, learned, improved — and grew.
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Today, SoftpulseAI Technologies stands proud with a team of seasoned experts, cutting-edge products, 
                and a mission to empower growth through purpose-driven technology.
              </p>
              <p className="text-base font-semibold text-primary">
                We're not just building software. We're building relationships, trust, and legacies.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="container mx-auto px-2 mb-10">
            <div className="grid md:grid-cols-2 gap-5">
              <Card className="glass-card border-white/10">
                <CardContent className="p-5">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold gradient-text">Vision</h3>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    To become a globally trusted technology partner — empowering organizations to embrace innovation, 
                    drive sustainable growth, and shape a smarter, future-ready world.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardContent className="p-5">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-bold gradient-text">Mission</h3>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    To design and deliver exceptional, cost-effective solutions powered by automation, AI, and 
                    actionable insights — helping every client scale, innovate, and thrive at the forefront of 
                    their industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Core Values */}
          <div className="container mx-auto px-2 mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-3">Our Core Values</h2>
              <p className="text-sm md:text-base text-foreground/80">
                The principles that guide our work and relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="glass-card border-white/10 hover-lift text-center">
                    <CardContent className="p-4">
                      <Icon className="w-9 h-9 text-primary mx-auto mb-3" />
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-foreground/80 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
    

          {/* Team */}
          <div className="container mx-auto px-2 mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-3">Our Team</h2>
              <p className="text-sm md:text-base text-foreground/80">
                Passionate experts dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((member, index) => (
                <Card key={index} className="glass-card border-white/10 text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{member.count}</div>
                    <h3 className="text-lg font-semibold mb-2">{member.role}</h3>
                    <p className="text-foreground/80 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="container mx-auto px-2 mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-3">Our Achievements</h2>
              <p className="text-sm md:text-base text-foreground/80">
                Numbers that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="glass-card border-white/10 text-center hover-lift">
                    <CardContent className="p-4">
                      <Icon className="w-9 h-9 text-accent mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                      <p className="text-foreground/80 text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-2 py-12">
            <Card className="glass-card border-white/10 text-center">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                  Ready to Start Your Digital Transformation?
                </h2>
                <p className="text-sm md:text-base text-foreground/80 mb-5 max-w-2xl mx-auto">
                  Join our growing family of satisfied clients and experience the SoftpulseAI difference. 
                  Let's build something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gradient-primary hover:shadow-primary">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More About Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default About;