import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">Ritagracesmith</span>
            </div>
            <p className="text-muted-foreground">
              Revolutionizing B2B sales with advanced iEMA (Email Marketing Automation) solutions. 
              Automate personalized campaigns and drive lead engagement.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ritagracesmith" 
                 className="text-muted-foreground hover:text-primary transition-smooth">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/ritagracesmith" 
                 className="text-muted-foreground hover:text-primary transition-smooth">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-muted-foreground hover:text-primary transition-smooth">
                Features
              </Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-smooth">
                Pricing
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-smooth">
                Blog
              </Link>
              <a href="https://salescentri.com/resources/case-studies?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="block text-muted-foreground hover:text-primary transition-smooth">
                Case Studies
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              <a href="https://salescentri.com/solutions/psa-suite?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="block text-muted-foreground hover:text-primary transition-smooth">
                Email Automation
              </a>
              <a href="https://salescentri.com/platforms/lead-management/lead-generation?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="block text-muted-foreground hover:text-primary transition-smooth">
                Lead Generation
              </a>
              <a href="https://salescentri.com/services/data-enrichment?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="block text-muted-foreground hover:text-primary transition-smooth">
                Data Enrichment
              </a>
              <a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="block text-muted-foreground hover:text-primary transition-smooth">
                AI Intelligence
              </a>
              <a href="https://salescentri.com/docs/api-reference?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="block text-muted-foreground hover:text-primary transition-smooth">
                API Integration
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Austin, Texas</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@ritagracesmith.com" 
                   className="text-muted-foreground hover:text-primary transition-smooth">
                  info@ritagracesmith.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1-555-0123" 
                   className="text-muted-foreground hover:text-primary transition-smooth">
                  +1 (555) 012-3456
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Partner Link */}
        <div className="border-t border-border pt-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              <a href="https://salescentri.com?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="text-primary hover:text-primary-hover transition-smooth font-medium">
                Powered by Sales Intelligence Platform
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Ritagracesmith Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="https://salescentri.com/trust/security-privacy?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="https://salescentri.com/trust/compliance-certifications?utm_source=ritagracesmith.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;