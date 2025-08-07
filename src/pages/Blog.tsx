import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, User, Clock, TrendingUp, Mail, Target } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to Email Marketing Automation in 2024",
    excerpt: "Discover the latest trends, strategies, and best practices for implementing successful email marketing automation campaigns that drive real business results.",
    author: "Rita Grace Smith",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Strategy",
    link: "https://salescentri.com/resources/whitepapers-ebooks?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network"
  };

  const blogPosts = [
    {
      title: "5 Email Automation Workflows That Convert",
      excerpt: "Learn the most effective automated email sequences for nurturing leads and driving conversions in B2B sales.",
      author: "Sarah Chen",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Automation",
      link: "https://salescentri.com/resources/tutorials-webinars?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network"
    },
    {
      title: "Measuring ROI: Email Marketing Metrics That Matter",
      excerpt: "Understand which metrics to track and how to calculate the true ROI of your email marketing automation efforts.",
      author: "Michael Rodriguez",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Analytics",
      link: "https://salescentri.com/resources/case-studies?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network"
    },
    {
      title: "Personalization at Scale: Advanced Segmentation Strategies",
      excerpt: "Discover how to create highly targeted email campaigns using advanced segmentation and personalization techniques.",
      author: "David Thompson",
      date: "November 28, 2024",
      readTime: "5 min read",
      category: "Personalization",
      link: "https://salescentri.com/resources/whitepapers-ebooks?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network"
    },
    {
      title: "AI in Email Marketing: What's Possible Today",
      excerpt: "Explore how artificial intelligence is transforming email marketing and what capabilities are available right now.",
      author: "Rita Grace Smith",
      date: "November 20, 2024",
      readTime: "9 min read",
      category: "Technology",
      link: "https://salescentri.com/resources/tutorials-webinars?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network"
    },
    {
      title: "GDPR and Email Marketing: A Compliance Guide",
      excerpt: "Navigate GDPR requirements while maintaining effective email marketing campaigns. A practical guide for B2B marketers.",
      author: "Sarah Chen",
      date: "November 15, 2024",
      readTime: "6 min read",
      category: "Compliance",
      link: "https://salescentri.com/trust/compliance-certifications?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network"
    },
    {
      title: "Integration Best Practices: CRM + Email Automation",
      excerpt: "Learn how to seamlessly integrate your CRM with email automation tools for maximum efficiency and data accuracy.",
      author: "Michael Rodriguez",
      date: "November 8, 2024",
      readTime: "8 min read",
      category: "Integration",
      link: "https://salescentri.com/solutions/psa-suite/integrations?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network"
    }
  ];

  const categories = ["All", "Strategy", "Automation", "Analytics", "Personalization", "Technology", "Compliance", "Integration"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              📚 iEMA Insights
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Email Marketing
              <br />
              <span className="text-cream">Automation Blog</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, strategies, and best practices 
              for email marketing automation from the iEMA team.
            </p>
            
            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Get Weekly iEMA Insights</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-primary hover:bg-white/90">
                  <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network">
                    Subscribe
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Badge className="mb-4">⭐ Featured Article</Badge>
            <Card className="gradient-card border-0 shadow-elegant">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{featuredPost.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Button size="lg" asChild>
                    <a href={featuredPost.link} className="flex items-center">
                      Read Full Article <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">340%</div>
                    <div className="text-muted-foreground">Average lead increase with proper automation</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Latest iEMA Insights & Strategies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical guides, case studies, and expert tips to help you master 
              email marketing automation and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-card hover-lift animate-fade-in-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto" asChild>
                    <a href={post.link} className="flex items-center justify-between w-full p-3 hover:bg-accent rounded">
                      Read More <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <a href="https://salescentri.com/resources/case-studies?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network">
                Load More Articles
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Mail className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Never Miss an iEMA Update
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest email marketing automation insights, case studies, and best practices 
              delivered directly to your inbox every week.
            </p>
            
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex gap-3">
                <Input 
                  placeholder="Your email address" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button className="bg-white text-primary hover:bg-white/90">
                  <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network">
                    Subscribe
                  </a>
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-3">
                Join 10,000+ marketing professionals. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">📖 Additional Resources</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Explore More Learning Materials
            </h2>
            <p className="text-xl text-muted-foreground">
              Dive deeper into email marketing automation with our comprehensive resource library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover-lift animate-fade-in-up text-center">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Case Studies</h3>
                <p className="text-muted-foreground mb-6">
                  Real-world success stories and measurable results from our customers.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/resources/case-studies?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network">
                    View Case Studies
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift animate-fade-in-up text-center">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Whitepapers</h3>
                <p className="text-muted-foreground mb-6">
                  In-depth research and analysis on email marketing automation trends.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network">
                    Download Whitepapers
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover-lift animate-fade-in-up text-center">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Webinars</h3>
                <p className="text-muted-foreground mb-6">
                  Live and recorded training sessions with industry experts.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://salescentri.com/resources/tutorials-webinars?utm_source=ritagracesmith.com&utm_medium=blog&utm_campaign=partner_network">
                    Watch Webinars
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;