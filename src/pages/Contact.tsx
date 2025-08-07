import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, HeadphonesIcon } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat?utm_source=ritagracesmith.com&utm_medium=contact&utm_campaign=partner_network"
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Book a Demo",
      description: "Schedule a personalized product demonstration",
      action: "Schedule Demo",
      link: "https://salescentri.com/get-started/book-demo?utm_source=ritagracesmith.com&utm_medium=contact&utm_campaign=partner_network"
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "Support Ticket",
      description: "Submit a detailed support request",
      action: "Submit Ticket",
      link: "https://salescentri.com/contact/support-request/submit-ticket?utm_source=ritagracesmith.com&utm_medium=contact&utm_campaign=partner_network"
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      action: "Send Email",
      link: "mailto:info@ritagracesmith.com"
    }
  ];

  const officeInfo = {
    address: "123 Business Plaza, Suite 400",
    city: "Austin, TX 78701",
    phone: "+1 (555) 012-3456",
    email: "info@ritagracesmith.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM CST"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              📞 Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Contact Our
              <br />
              <span className="text-cream">iEMA Experts</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Have questions about email marketing automation? Need help getting started? 
              Our team of experts is here to help you succeed with iEMA.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">💬 Choose Your Preferred Method</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need technical support, want to schedule a demo, or have sales questions, 
              we have the right channel for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-card hover-lift animate-fade-in-up text-center" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary-light rounded-full w-fit">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <a href={method.link}>
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Badge className="mb-4">📝 Send Us a Message</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get Started Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and one of our iEMA specialists will get back to you 
                within 24 hours to discuss your email marketing automation needs.
              </p>

              <Card className="gradient-card shadow-card">
                <CardContent className="p-8">
                  <form className="space-y-6" action="https://salescentri.com/get-started/contact" method="POST">
                    <input type="hidden" name="utm_source" value="ritagracesmith.com" />
                    <input type="hidden" name="utm_medium" value="contact" />
                    <input type="hidden" name="utm_campaign" value="partner_network" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry">Inquiry Type</Label>
                      <Select name="inquiryType">
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Schedule a Demo</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        placeholder="Tell us about your email marketing automation needs..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="animate-fade-in-up">
              <Badge className="mb-4">🏢 Austin Office</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Visit Our Headquarters
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Located in the heart of Austin's thriving tech scene, our office is always 
                open to partners, customers, and future team members.
              </p>

              <Card className="shadow-card mb-8">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        {officeInfo.address}<br />
                        {officeInfo.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href={`tel:${officeInfo.phone}`} 
                         className="text-primary hover:text-primary-hover transition-smooth">
                        {officeInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href={`mailto:${officeInfo.email}`} 
                         className="text-primary hover:text-primary-hover transition-smooth">
                        {officeInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">{officeInfo.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button className="w-full" size="lg" asChild>
                  <a href="https://salescentri.com/get-started/calendly?utm_source=ritagracesmith.com&utm_medium=contact&utm_campaign=partner_network">
                    Schedule a Meeting
                  </a>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a href="https://salescentri.com/contact/partnerships/partner-inquiry?utm_source=ritagracesmith.com&utm_medium=contact&utm_campaign=partner_network">
                    Partnership Inquiries
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">❓ Quick Answers</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions about iEMA and our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I get started with iEMA?",
                answer: "You can start your free trial immediately after signing up. Our onboarding process takes less than 15 minutes, and you can begin creating campaigns right away."
              },
              {
                question: "Do you offer implementation support?",
                answer: "Yes! We provide comprehensive onboarding and implementation support for all plans. Enterprise customers receive dedicated account management and custom training sessions."
              },
              {
                question: "What integrations are available?",
                answer: "iEMA integrates with popular CRMs like Salesforce, HubSpot, and Pipedrive, as well as tools like Slack, Zapier, and various e-commerce platforms."
              },
              {
                question: "Is there a minimum contract period?",
                answer: "No, we offer month-to-month billing with no long-term contracts required. You can upgrade, downgrade, or cancel at any time."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild>
              <a href="https://salescentri.com/contact/support-request?utm_source=ritagracesmith.com&utm_medium=contact&utm_campaign=partner_network">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;