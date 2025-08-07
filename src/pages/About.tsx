import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, TrendingUp, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Customer Success",
      description: "We measure our success by the growth and satisfaction of our clients"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Continuously pushing the boundaries of email marketing automation"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "Every feature we build is designed to deliver measurable business outcomes"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients"
    }
  ];

  const teamMembers = [
    {
      name: "Rita Grace Smith",
      role: "CEO & Founder",
      bio: "15+ years in marketing automation with expertise in B2B lead generation and customer acquisition.",
      image: "🚀"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Former senior engineer at leading SaaS companies, specializing in scalable automation platforms.",
      image: "⚡"
    },
    {
      name: "Sarah Chen",
      role: "VP of Marketing",
      bio: "Expert in B2B marketing strategies with proven track record of driving growth for SaaS companies.",
      image: "📈"
    },
    {
      name: "David Thompson",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring every client achieves maximum ROI from their email automation investment.",
      image: "🎯"
    }
  ];

  const milestones = [
    { year: "2019", event: "Company Founded", description: "Rita Grace Smith founded the company with a vision to revolutionize email marketing" },
    { year: "2020", event: "First 100 Customers", description: "Reached our first major milestone with 100 satisfied customers" },
    { year: "2021", event: "Series A Funding", description: "Secured funding to accelerate product development and team growth" },
    { year: "2022", event: "Austin Office Opening", description: "Established our headquarters in Austin, Texas tech hub" },
    { year: "2023", event: "10,000+ Users", description: "Crossed 10,000 active users across various industries" },
    { year: "2024", event: "AI Integration", description: "Launched advanced AI features for predictive analytics and optimization" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              🏢 About Ritagracesmith Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Revolutionizing Email Marketing
              <br />
              <span className="text-cream">One Campaign at a Time</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Founded in Austin, Texas, we're on a mission to make sophisticated email marketing 
              automation accessible to businesses of all sizes through our innovative iEMA platform.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-primary">
              <a href="https://salescentri.com/company/about-us?utm_source=ritagracesmith.com&utm_medium=about&utm_campaign=partner_network" 
                 className="flex items-center">
                Learn Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <Badge className="mb-4">🎯 Our Mission</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Empowering B2B Growth Through Intelligent Automation
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                We believe every business deserves access to sophisticated email marketing automation. 
                Our iEMA platform democratizes advanced marketing technology, making it simple for 
                companies to create personalized, data-driven campaigns that drive real results.
              </p>
              <p className="text-lg text-muted-foreground">
                By combining cutting-edge AI with intuitive design, we're breaking down the barriers 
                that have traditionally separated small businesses from enterprise-level marketing capabilities.
              </p>
            </div>
            
            <div className="animate-fade-in-up">
              <Badge className="mb-4">🔮 Our Vision</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                A Future Where Every Email Drives Growth
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                We envision a world where email marketing is no longer about mass broadcasts, 
                but meaningful, personalized conversations that nurture relationships and drive 
                sustainable business growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">340%</div>
                  <div className="text-muted-foreground">Lead Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">💎 Core Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our values guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card hover-lift animate-fade-in-up text-center" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary-light rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">👥 Meet the Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              The Experts Behind iEMA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of marketing automation experts, engineers, and customer success 
              professionals are passionate about helping your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-card hover-lift animate-fade-in-up text-center" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <a href="https://salescentri.com/company/team-advisors/career-openings?utm_source=ritagracesmith.com&utm_medium=about&utm_campaign=partner_network">
                Join Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">📈 Our Journey</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Milestones & Growth
            </h2>
            <p className="text-xl text-muted-foreground">
              From startup to industry leader - here's how we've grown.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.event}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Grow With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of businesses already using iEMA to transform their email marketing. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="https://salescentri.com/get-started/free-trial?utm_source=ritagracesmith.com&utm_medium=about&utm_campaign=partner_network" 
                   className="flex items-center">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="https://salescentri.com/contact?utm_source=ritagracesmith.com&utm_medium=about&utm_campaign=partner_network">
                  Contact Our Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;