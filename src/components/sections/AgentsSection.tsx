import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Phone, 
  Mail, 
  MessageCircle, 
  Award,
  TrendingUp,
  Users,
  Home
} from "lucide-react";

const AgentsSection = () => {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Advisor",
      specialties: ["Luxury Homes", "Investment Properties"],
      rating: 4.9,
      reviews: 156,
      sales: 89,
      experience: "8 years",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=300&q=80",
      languages: ["English", "Spanish"],
      certifications: ["Certified Luxury Home Marketing Specialist", "Investment Property Specialist"]
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Commercial Property Expert",
      specialties: ["Commercial", "Industrial"],
      rating: 4.8,
      reviews: 203,
      sales: 124,
      experience: "12 years",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      languages: ["English", "Mandarin"],
      certifications: ["Commercial Real Estate Expert", "CCIM Designation"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Residential Specialist",
      specialties: ["First-Time Buyers", "Family Homes"],
      rating: 4.9,
      reviews: 178,
      sales: 95,
      experience: "6 years",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      languages: ["English", "Spanish", "Portuguese"],
      certifications: ["Buyer Representative Specialist", "First-Time Home Buyer Specialist"]
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Luxury Estate Consultant",
      specialties: ["Luxury Estates", "Waterfront"],
      rating: 5.0,
      reviews: 142,
      sales: 76,
      experience: "15 years",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      languages: ["English", "French"],
      certifications: ["Luxury Home Marketing Specialist", "Waterfront Specialist"]
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Investment Advisor",
      specialties: ["Investment", "Rental Properties"],
      rating: 4.8,
      reviews: 134,
      sales: 67,
      experience: "10 years",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      languages: ["English", "Korean"],
      certifications: ["Investment Property Specialist", "Property Management Expert"]
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Market Analyst",
      specialties: ["Market Analysis", "Property Valuation"],
      rating: 4.7,
      reviews: 98,
      sales: 45,
      experience: "5 years",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      languages: ["English"],
      certifications: ["Certified Real Estate Appraiser", "Market Analysis Specialist"]
    }
  ];

  return (
    <section id="agents" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Expert Agents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our team of dedicated real estate professionals. Each agent brings unique expertise 
            and proven track records to help you achieve your property goals.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={agent.id}
              className="card-premium group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Agent Avatar and Rating */}
              <div className="relative text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-primary rounded-full p-2">
                    <Award className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">{agent.rating}</span>
                  <span className="text-muted-foreground text-sm">({agent.reviews} reviews)</span>
                </div>
              </div>

              {/* Agent Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {agent.name}
                </h3>
                <p className="text-muted-foreground mb-3">{agent.title}</p>
                
                {/* Specialties */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {agent.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-center mb-1">
                    <Home className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <div className="text-lg font-bold">{agent.sales}</div>
                  <div className="text-xs text-muted-foreground">Sales</div>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="h-4 w-4 text-accent mr-1" />
                  </div>
                  <div className="text-lg font-bold">{agent.experience}</div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-gold mr-1" />
                  </div>
                  <div className="text-lg font-bold">{agent.reviews}</div>
                  <div className="text-xs text-muted-foreground">Reviews</div>
                </div>
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Languages:</h4>
                <div className="flex flex-wrap gap-2">
                  {agent.languages.map((language, idx) => (
                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 btn-ghost-glow">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-accent text-accent-foreground hover:scale-105 transition-transform">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-futuristic max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need Expert Guidance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our agents are ready to help you navigate the real estate market with confidence. 
              Get personalized advice and professional support every step of the way.
            </p>
            <Button className="btn-hero">
              <Users className="h-5 w-5 mr-2" />
              Find Your Agent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;