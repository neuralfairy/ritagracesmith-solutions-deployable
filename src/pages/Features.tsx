import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Mail, TrendingUp, Users, Clock, Shield, Zap, Target, BarChart3, Workflow, Brain, Database, Globe } from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Mail className="h-12 w-12 text-primary" />,
      title: "Advanced Email Automation",
      description: "Create sophisticated drip campaigns with drag-and-drop builders, behavioral triggers, and intelligent scheduling.",
      benefits: ["Visual campaign builder", "Behavioral triggers", "A/B testing", "Smart scheduling"]
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Precision Segmentation",
      description: "Segment your audience with laser precision using demographics, behavior, and engagement data for personalized messaging.",
      benefits: ["Dynamic segmentation", "Custom fields", "Behavioral tracking", "Lead scoring"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Real-time Analytics",
      description: "Track performance with detailed analytics, conversion tracking, and ROI reporting to optimize your campaigns.",
      benefits: ["Real-time reporting", "Conversion tracking", "ROI analysis", "Custom dashboards"]
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "AI-Powered Optimization",
      description: "Leverage machine learning to optimize send times, subject lines, and content for maximum engagement.",
      benefits: ["Send time optimization", "Subject line AI", "Content recommendations", "Predictive analytics"]
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "CRM Integration",
      description: "Seamlessly connect with popular CRMs and sales tools to maintain data consistency across your tech stack.",
      benefits: ["Salesforce integration", "HubSpot sync", "API connections", "Data mapping"]
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Multi-channel Orchestration",
      description: "Coordinate email campaigns with SMS, social media, and other channels for comprehensive outreach.",
      benefits: ["Email + SMS", "Social integration", "Cross-channel tracking", "Unified messaging"]
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Microsoft Dynamics", "Marketo", "Pardot",
    "Slack", "Zapier", "Shopify", "WooCommerce", "Stripe", "PayPal"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              🔥 Complete iEMA Solution
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Powerful Features for
              <br />
              <span className="text-cream">Email Marketing Success</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover how our comprehensive iEMA (Email Marketing Automation) platform 
              transforms your B2B sales process with cutting-edge features and AI-powered insights.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-primary">
              <a href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=ritagracesmith.com&utm_medium=features&utm_campaign=partner_network" 
                 className="flex items-center">
                Try Interactive Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">✨ Core Capabilities</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our iEMA platform provides comprehensive tools for creating, managing, 
              and optimizing your email marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="gradient-card border-0 shadow-card hover-lift animate-fade-in-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-light rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">🔗 Seamless Connections</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Integrates with Your Existing Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect iEMA with your favorite tools and platforms for a unified workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-6 text-center hover-scale animate-fade-in-up" 
                    style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="text-lg font-semibold text-foreground">{integration}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              <a href="https://salescentri.com/solutions/psa-suite/integrations?utm_source=ritagracesmith.com&utm_medium=features&utm_campaign=partner_network">
                View All Integrations
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4">🛡️ Enterprise Security</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Bank-Level Security & Compliance
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your data is protected with enterprise-grade security measures and industry certifications.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg">256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg">99.9% Uptime SLA</span>
                </div>
              </div>
              <div className="mt-8">
                <Button>
                  <a href="https://salescentri.com/trust/security-privacy?utm_source=ritagracesmith.com&utm_medium=features&utm_campaign=partner_network">
                    Learn About Security
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
                    <div className="text-muted-foreground">Encryption</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">SOC 2</div>
                    <div className="text-muted-foreground">Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">GDPR</div>
                    <div className="text-muted-foreground">Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how iEMA can transform your email marketing with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="https://salescentri.com/get-started/book-demo?utm_source=ritagracesmith.com&utm_medium=features&utm_campaign=partner_network" 
                   className="flex items-center">
                  Book Live Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="https://salescentri.com/get-started/free-trial?utm_source=ritagracesmith.com&utm_medium=features&utm_campaign=partner_network">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;