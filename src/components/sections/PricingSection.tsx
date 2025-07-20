import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for first-time buyers and casual browsers",
      price: 29,
      period: "month",
      icon: Star,
      gradient: "bg-gradient-primary",
      popular: false,
      features: [
        "Property search & filtering",
        "Basic property details",
        "Contact agent functionality",
        "Save favorite properties",
        "Email notifications",
        "Mobile app access",
        "Community support"
      ]
    },
    {
      name: "Pro",
      description: "Ideal for serious buyers and active investors",
      price: 79,
      period: "month",
      icon: Zap,
      gradient: "bg-gradient-accent",
      popular: true,
      features: [
        "Everything in Basic",
        "Advanced market analytics",
        "Property history & trends",
        "Virtual reality tours",
        "Priority agent support",
        "Investment calculator",
        "Automated alerts",
        "Comparative market analysis",
        "Document management"
      ]
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for professionals and agencies",
      price: 199,
      period: "month",
      icon: Crown,
      gradient: "bg-gradient-gold",
      popular: false,
      features: [
        "Everything in Pro",
        "White-label solution",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced reporting",
        "Multi-user management",
        "Custom analytics dashboard",
        "Priority technical support",
        "Training & onboarding"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Choose Your Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Select the perfect plan for your real estate journey. All plans include our core features 
            with varying levels of advanced functionality and support.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-muted-foreground">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-14 h-8 bg-muted rounded-full cursor-pointer">
                <div className="w-6 h-6 bg-primary rounded-full m-1 transition-transform"></div>
              </div>
            </div>
            <span className="text-foreground font-medium">
              Yearly 
              <Badge className="ml-2 bg-gradient-gold text-gold-foreground">Save 20%</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative ${
                plan.popular 
                  ? 'card-premium scale-105 border-2 border-primary' 
                  : 'card-futuristic'
              } text-center`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <div className={`w-16 h-16 ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-bold text-gradient-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-left">
                    <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={
                  plan.popular 
                    ? 'btn-hero w-full' 
                    : 'btn-ghost-glow w-full'
                }
              >
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="card-futuristic max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">30-Day Free Trial</h4>
                <p className="text-sm text-muted-foreground">
                  Try any plan risk-free for 30 days. Cancel anytime.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Instant Setup</h4>
                <p className="text-sm text-muted-foreground">
                  Get started immediately with instant account activation.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Crown className="h-6 w-6 text-gold-foreground" />
                </div>
                <h4 className="font-semibold mb-2">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock customer support for all paid plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;