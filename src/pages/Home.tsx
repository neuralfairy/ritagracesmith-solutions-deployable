import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Mail, TrendingUp, Users, Clock, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Automation",
      description: "Create sophisticated drip campaigns that nurture leads automatically"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Lead Scoring",
      description: "AI-powered scoring to identify your hottest prospects"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Segmentation",
      description: "Advanced audience segmentation for personalized messaging"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Real-time Analytics",
      description: "Track performance and optimize campaigns in real-time"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      quote: "iEMA increased our lead conversion by 340% in just 3 months. The automation is incredible!",
      role: "Marketing Director"
    },
    {
      name: "Michael Chen",
      company: "Growth Solutions",
      quote: "Best email automation platform we've used. The ROI speaks for itself.",
      role: "CEO"
    },
    {
      name: "Emma Rodriguez",
      company: "Digital Dynamics",
      quote: "The personalization features helped us achieve 85% open rates consistently.",
      role: "VP of Sales"
    }
  ];

  const stats = [
    { number: "340%", label: "Average Lead Increase" },
    { number: "85%", label: "Email Open Rate" },
    { number: "10,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🚀 #1 iEMA Platform for B2B Growth
            </Badge>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Automate Your Email Marketing.<br />
              <span className="text-cream">Accelerate Your Growth.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your B2B sales with iEMA (Email Marketing Automation). 
              Create personalized drip campaigns that convert prospects into customers automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-primary text-lg px-8 py-6 h-auto">
                <a href="https://salescentri.com/get-started/free-trial?utm_source=ritagracesmith.com&utm_medium=hero&utm_campaign=partner_network" 
                   className="flex items-center">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto">
                <a href="https://salescentri.com/get-started/book-demo?utm_source=ritagracesmith.com&utm_medium=hero&utm_campaign=partner_network">
                  Book Live Demo
                </a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">✨ Core Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Everything You Need for Email Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our iEMA platform combines the power of automation with intelligent personalization 
              to deliver exceptional results for your B2B campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card hover-lift animate-fade-in-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary-light rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">💬 Customer Success</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Trusted by Leading B2B Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how iEMA has transformed email marketing for businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover-lift animate-fade-in-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of B2B companies already using iEMA to drive growth. 
              Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                <a href="https://salescentri.com/get-started/free-trial?utm_source=ritagracesmith.com&utm_medium=cta&utm_campaign=partner_network" 
                   className="flex items-center">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto">
                <a href="https://salescentri.com/get-started/calendly?utm_source=ritagracesmith.com&utm_medium=cta&utm_campaign=partner_network">
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;