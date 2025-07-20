import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MapPin, Home, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient-primary">Future of</span>
              <br />
              <span className="text-foreground">Real Estate</span>
              <br />
              <span className="text-gradient-accent">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of property management with AI-powered analytics, 
              immersive virtual tours, and intelligent market predictions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slideInFromLeft">
            <Button className="btn-hero group">
              <Search className="mr-2 h-5 w-5" />
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-ghost-glow">
              <TrendingUp className="mr-2 h-5 w-5" />
              Market Analytics
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideInFromRight">
            <div className="card-futuristic group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Search className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Search</h3>
                <p className="text-muted-foreground">
                  Find your perfect property with intelligent recommendations and predictive analytics.
                </p>
              </div>
            </div>

            <div className="card-futuristic group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Virtual Tours</h3>
                <p className="text-muted-foreground">
                  Immersive 3D property tours powered by advanced VR technology.
                </p>
              </div>
            </div>

            <div className="card-futuristic group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-gold-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Management</h3>
                <p className="text-muted-foreground">
                  Automated property management with real-time market insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;