import { useState, useEffect } from "react";
import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PropertiesSection from "@/components/sections/PropertiesSection";
import AgentsSection from "@/components/sections/AgentsSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/modals/BookingModal";
import UserDashboard from "@/components/dashboard/UserDashboard";
import AgentDashboard from "@/components/dashboard/AgentDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, ArrowLeft } from "lucide-react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("landing"); // "landing", "user-dashboard", "agent-dashboard", "admin-dashboard"

  // Initialize dark mode
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const isDark = savedMode ? JSON.parse(savedMode) : false;
    setDarkMode(isDark);
    
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    
    // Apply theme to document
    if (newMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  // Dashboard Navigation Component
  const DashboardNav = () => (
    <div className="bg-gradient-secondary border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button
            onClick={() => setCurrentView("landing")}
            variant="outline"
            className="btn-ghost-glow"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Main Site
          </Button>
          
          <div className="flex gap-2">
            <Button
              onClick={() => setCurrentView("user-dashboard")}
              variant={currentView === "user-dashboard" ? "default" : "outline"}
              className={currentView === "user-dashboard" ? "bg-gradient-primary" : "btn-ghost-glow"}
            >
              User Dashboard
            </Button>
            <Button
              onClick={() => setCurrentView("agent-dashboard")}
              variant={currentView === "agent-dashboard" ? "default" : "outline"}
              className={currentView === "agent-dashboard" ? "bg-gradient-accent" : "btn-ghost-glow"}
            >
              Agent Dashboard
            </Button>
            <Button
              onClick={() => setCurrentView("admin-dashboard")}
              variant={currentView === "admin-dashboard" ? "default" : "outline"}
              className={currentView === "admin-dashboard" ? "bg-gradient-gold" : "btn-ghost-glow"}
            >
              Admin Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render appropriate view
  const renderContent = () => {
    switch (currentView) {
      case "user-dashboard":
        return (
          <>
            <DashboardNav />
            <UserDashboard />
          </>
        );
      case "agent-dashboard":
        return (
          <>
            <DashboardNav />
            <AgentDashboard />
          </>
        );
      case "admin-dashboard":
        return (
          <>
            <DashboardNav />
            <AdminDashboard />
          </>
        );
      default:
        return (
          <>
            {/* Landing Page */}
            <Topbar />
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main>
              <HeroSection />
              <FeaturesSection />
              <PropertiesSection />
              <AgentsSection />
              <PricingSection />
              
              {/* Dashboard Demo Section */}
              <section className="py-24 bg-gradient-hero">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-gradient-primary">Experience Our Dashboards</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                    Explore our comprehensive dashboard system designed for different user types. 
                    Each dashboard provides tailored functionality and insights.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="card-futuristic group cursor-pointer" onClick={() => setCurrentView("user-dashboard")}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <LayoutDashboard className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">User Dashboard</h3>
                        <p className="text-muted-foreground mb-4">
                          Track saved properties, viewings, and personalized recommendations.
                        </p>
                        <Button className="btn-hero">
                          View Demo
                        </Button>
                      </div>
                    </div>

                    <div className="card-futuristic group cursor-pointer" onClick={() => setCurrentView("agent-dashboard")}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <LayoutDashboard className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Agent Dashboard</h3>
                        <p className="text-muted-foreground mb-4">
                          Manage listings, clients, and track sales performance metrics.
                        </p>
                        <Button className="bg-gradient-accent text-accent-foreground hover:scale-105 transition-transform">
                          View Demo
                        </Button>
                      </div>
                    </div>

                    <div className="card-futuristic group cursor-pointer" onClick={() => setCurrentView("admin-dashboard")}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <LayoutDashboard className="h-8 w-8 text-gold-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
                        <p className="text-muted-foreground mb-4">
                          Platform analytics, user management, and system monitoring.
                        </p>
                        <Button className="btn-premium">
                          View Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        propertyTitle="Modern Luxury Villa"
      />
    </div>
  );
};

export default Index;
