import { 
  Brain, 
  Smartphone, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe,
  Database,
  Eye,
  Clock
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze market trends and predict property values with 95% accuracy.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Seamlessly browse, schedule viewings, and manage properties from any device, anywhere.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Market Data",
      description: "Stay ahead with live market updates, price trends, and investment opportunities.",
      gradient: "bg-gradient-gold"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade encryption and blockchain verification ensure all transactions are safe and transparent.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get real-time alerts for new listings, price changes, and market opportunities.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access properties worldwide with multi-currency support and international legal compliance.",
      gradient: "bg-gradient-gold"
    },
    {
      icon: Database,
      title: "Smart Data Management",
      description: "Centralized property data with advanced search, filtering, and comparison tools.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Eye,
      title: "Virtual Reality Tours",
      description: "Immersive VR experiences let you walk through properties from the comfort of your home.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service with AI chatbots and human experts available anytime.",
      gradient: "bg-gradient-gold"
    }
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Core Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the cutting-edge technology that powers PeanechEstate and revolutionizes 
            the way you buy, sell, and manage properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-futuristic group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-primary`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-gradient-accent">Powered By</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Built with cutting-edge technologies for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", color: "text-blue-400" },
              { name: "TypeScript", color: "text-blue-600" },
              { name: "AI/ML", color: "text-green-400" },
              { name: "Blockchain", color: "text-purple-400" },
              { name: "Cloud", color: "text-orange-400" },
              { name: "VR/AR", color: "text-pink-400" }
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <div className={`w-6 h-6 rounded ${tech.color} bg-current`}></div>
                </div>
                <p className="font-medium text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;