import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Users, Mail, TrendingUp } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with email automation",
      price: { monthly: 49, annual: 39 },
      features: [
        "Up to 1,000 contacts",
        "5 email campaigns per month",
        "Basic automation workflows",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      limitations: ["Limited integrations", "No A/B testing"],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "For growing businesses that need advanced automation and analytics",
      price: { monthly: 149, annual: 119 },
      features: [
        "Up to 10,000 contacts",
        "Unlimited email campaigns",
        "Advanced automation workflows",
        "Priority support",
        "Custom templates",
        "Advanced analytics & reporting",
        "A/B testing",
        "Lead scoring",
        "CRM integrations",
        "Custom fields"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations requiring maximum customization and control",
      price: { monthly: "Custom", annual: "Custom" },
      features: [
        "Unlimited contacts",
        "Unlimited campaigns",
        "Custom automation workflows",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced AI optimization",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "Training & onboarding",
        "API access",
        "Custom reporting"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial for all plans. No credit card required to start your trial."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide email support for Starter plans, priority support for Professional plans, and dedicated account management for Enterprise customers."
    },
    {
      question: "Do you offer custom pricing for large volume users?",
      answer: "Yes, we offer custom enterprise pricing for organizations with more than 50,000 contacts or specific requirements."
    },
    {
      question: "Are there any setup fees?",
      answer: "No setup fees for any plans. We also provide free migration assistance to help you get started quickly."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <br />
              <span className="text-cream">iEMA Pricing</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core iEMA features 
              with no hidden fees or surprise charges.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-white ${!isAnnual ? 'font-semibold' : 'opacity-70'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-white' : 'bg-white/30'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-white ${isAnnual ? 'font-semibold' : 'opacity-70'}`}>
                Annual <span className="text-cream text-sm">(Save 20%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-elegant scale-105' : 'shadow-card'} hover-lift animate-fade-in-up`} 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    {typeof plan.price.monthly === 'string' ? (
                      <div className="text-3xl font-bold text-primary">Custom</div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-primary">
                          ${isAnnual ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                        {isAnnual && typeof plan.price.monthly === 'number' && typeof plan.price.annual === 'number' && (
                          <div className="text-sm text-success mt-1">
                            Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="h-5 w-5 rounded-full border border-muted-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.name === 'Enterprise' ? (
                      <a href="https://salescentri.com/contact/sales-inquiry?utm_source=ritagracesmith.com&utm_medium=pricing&utm_campaign=partner_network" 
                         className="flex items-center justify-center w-full">
                        {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    ) : (
                      <a href="https://salescentri.com/get-started/free-trial?utm_source=ritagracesmith.com&utm_medium=pricing&utm_campaign=partner_network" 
                         className="flex items-center justify-center w-full">
                        {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4">📊 ROI Calculator</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              See Your Potential ROI
            </h2>
            <p className="text-xl text-muted-foreground">
              Calculate the potential return on investment with iEMA automation.
            </p>
          </div>
          
          <Card className="gradient-card shadow-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">340%</div>
                  <div className="text-muted-foreground">Average Lead Increase</div>
                </div>
                <div>
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">85%</div>
                  <div className="text-muted-foreground">Email Open Rate</div>
                </div>
                <div>
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-foreground mb-2">$12:1</div>
                  <div className="text-muted-foreground">Average ROI</div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button size="lg">
                  <a href="https://salescentri.com/get-started/book-demo?utm_source=ritagracesmith.com&utm_medium=pricing&utm_campaign=partner_network">
                    Get Personalized ROI Estimate
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">❓ Frequently Asked</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Pricing Questions & Answers
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
              Ready to Start Your Free Trial?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              No credit card required. Start automating your email marketing in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="https://salescentri.com/get-started/free-trial?utm_source=ritagracesmith.com&utm_medium=pricing&utm_campaign=partner_network" 
                   className="flex items-center">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="https://salescentri.com/contact/sales-inquiry?utm_source=ritagracesmith.com&utm_medium=pricing&utm_campaign=partner_network">
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;