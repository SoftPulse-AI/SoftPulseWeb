import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MessageSquare, Megaphone, TrendingUp, Users, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import healthcareHero from "@/assets/healthcare-hero.webp";

const GrowthSuite = () => {
  return (
    <>
      <Helmet>
        <title>Growth Systems - SoftpulseAI Technologies</title>
        <meta
          name="description"
          content="Growth systems for hospitals and clinics: PulseReach CRM, social media management, performance marketing, WhatsApp & SMS marketing, and content campaign management."
        />
        <meta
          name="keywords"
          content="hospital CRM system, healthcare marketing automation, social media marketing services, performance marketing agency, WhatsApp marketing, SMS marketing, patient lead conversion"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://softpulseai.com/growth" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softpulseai.com/growth" />
        <meta property="og:title" content="Growth Systems - SoftpulseAI Technologies" />
        <meta
          property="og:description"
          content="PulseReach CRM and growth systems to capture, nurture, and convert patient leads into revenue."
        />
        <meta property="og:image" content="https://softpulseai.com/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Growth Systems - SoftpulseAI Technologies" />
        <meta
          name="twitter:description"
          content="PulseReach CRM and growth systems to capture, nurture, and convert patient leads into revenue."
        />
        <meta name="twitter:image" content="https://softpulseai.com/favicon.png" />
      </Helmet>

      <div className="min-h-screen bg-background relative">
        <FloatingShapes />
        <Navigation />

        <div className="pt-16 relative z-10">
          <div className="container mx-auto px-2 py-8">
            <div className="text-center mb-8">
              <div className="relative mb-8">
                <img
                  src={healthcareHero}
                  alt="Growth and operations software for hospitals"
                  className="w-full h-52 md:h-64 object-cover rounded-xl shadow-xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
                Growth Systems
              </h1>
              <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
                Revenue-focused systems to capture, nurture, and convert patient leads for hospitals and clinics.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-2 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5" id="pulsereach">
              <Card className="glass-card border-primary/30 h-full">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold gradient-text">PulseReach</h2>
                      <p className="text-sm text-foreground/80 font-medium">Patient Growth & CRM Engine</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">hospital CRM system</Badge>
                    <Badge variant="outline">healthcare marketing automation</Badge>
                    <Badge variant="outline">patient management CRM</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80">Capture leads from website, social, and campaigns</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Megaphone className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80">Automate follow-ups with WhatsApp, SMS, and email</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80">Track every lead stage from inquiry to booking</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80">Measure campaign ROI and conversion performance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80">Improve lead response speed and conversion rates</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-lg font-semibold mb-3">Outcomes</h3>
                    <ul className="space-y-2">
                      <li className="text-foreground/80">Increase patient conversion and repeat visits</li>
                      <li className="text-foreground/80">Reduce lead leakage and missed follow-ups</li>
                      <li className="text-foreground/80">Grow monthly revenue with measurable funnels</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      className="gradient-primary hover:shadow-primary flex-1"
                      onClick={() => window.open("https://calendly.com/softpulseai/30min", "_blank")}
                    >
                      Request Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        window.location.href = "/contact";
                      }}
                    >
                      Talk to Sales
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10 h-full">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                      <Megaphone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold gradient-text">Growth Execution Services</h2>
                      <p className="text-sm text-foreground/80 font-medium">Marketing systems that drive qualified leads and revenue</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">social media marketing services</Badge>
                    <Badge variant="outline">performance marketing agency</Badge>
                    <Badge variant="outline">healthcare marketing automation</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3" id="social-media-management">
                      <Users className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80"><span className="font-semibold">Social Media Management:</span> Manage and grow your brand across Instagram, Facebook, and platforms</p>
                    </div>
                    <div className="flex items-start gap-3" id="performance-marketing">
                      <TrendingUp className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80"><span className="font-semibold">Performance Marketing:</span> Run ROI-driven ad campaigns to generate leads and revenue</p>
                    </div>
                    <div className="flex items-start gap-3" id="whatsapp-sms-marketing">
                      <MessageSquare className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80"><span className="font-semibold">WhatsApp & SMS Marketing:</span> Automate communication and lead engagement</p>
                    </div>
                    <div className="flex items-start gap-3" id="content-campaign-management">
                      <Megaphone className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80"><span className="font-semibold">Content & Campaign Management:</span> Plan, execute, and track marketing campaigns</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-lg font-semibold mb-3">Outcomes</h3>
                    <ul className="space-y-2">
                      <li className="text-foreground/80">Build predictable lead pipelines</li>
                      <li className="text-foreground/80">Improve ad efficiency and cost per acquisition</li>
                      <li className="text-foreground/80">Increase conversion from inquiry to booked visit</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      className="gradient-primary hover:shadow-primary flex-1"
                      onClick={() => window.open("https://calendly.com/softpulseai/30min", "_blank")}
                    >
                      Book Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        window.location.href = "/contact";
                      }}
                    >
                      Talk to Growth Team
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10 h-full" id="workpulse">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold gradient-text">WorkPulse</h2>
                      <p className="text-sm text-foreground/80 font-medium">Smart Workforce & HR Management System</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">workforce management system</Badge>
                    <Badge variant="outline">hospital HR software</Badge>
                    <Badge variant="outline">operations automation</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80">Track attendance, shifts, and staff performance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80">Automate payroll and leave workflows</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <p className="text-foreground/80">Improve accountability across departments</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-lg font-semibold mb-3">Outcomes</h3>
                    <ul className="space-y-2">
                      <li className="text-foreground/80">Lower HR operational workload</li>
                      <li className="text-foreground/80">Improve staff productivity</li>
                      <li className="text-foreground/80">Keep operations predictable and scalable</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      className="gradient-primary hover:shadow-primary flex-1"
                      onClick={() => window.open("https://calendly.com/softpulseai/30min", "_blank")}
                    >
                      Book Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        window.location.href = "/contact";
                      }}
                    >
                      Talk to Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" onClick={() => { window.location.href = "/healthtech"; }}>
                See HealthTech Solutions
              </Button>
              <Button variant="outline" onClick={() => { window.location.href = "/services"; }}>
                See Implementation & Growth Services
              </Button>
            </div>
          </div>
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default GrowthSuite;

