import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Calendar,
  Camera,
  Star,
  DollarSign
} from "lucide-react";

const PropertiesSection = () => {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);

  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: 2850000,
      beds: 4,
      baths: 3,
      sqft: 3200,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      featured: true,
      rating: 4.9,
      type: "Villa"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: 4200000,
      beds: 3,
      baths: 2,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      featured: true,
      rating: 4.8,
      type: "Penthouse"
    },
    {
      id: 3,
      title: "Waterfront Condo",
      location: "Miami Beach, FL",
      price: 1650000,
      beds: 2,
      baths: 2,
      sqft: 1900,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      featured: false,
      rating: 4.7,
      type: "Condo"
    },
    {
      id: 4,
      title: "Mountain View Estate",
      location: "Aspen, CO",
      price: 5800000,
      beds: 5,
      baths: 4,
      sqft: 4500,
      image: "https://images.unsplash.com/photo-1566908829077-2366ac8d9d3b?auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      featured: true,
      rating: 5.0,
      type: "Estate"
    },
    {
      id: 5,
      title: "Contemporary Loft",
      location: "San Francisco, CA",
      price: 2100000,
      beds: 2,
      baths: 1,
      sqft: 1600,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      featured: false,
      rating: 4.6,
      type: "Loft"
    },
    {
      id: 6,
      title: "Historic Mansion",
      location: "Charleston, SC",
      price: 3750000,
      beds: 6,
      baths: 5,
      sqft: 5200,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      featured: false,
      rating: 4.9,
      type: "Mansion"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleBookViewing = (propertyId: number) => {
    setSelectedProperty(propertyId);
    // Here you would open a booking modal
    console.log(`Booking viewing for property ${propertyId}`);
  };

  return (
    <section id="properties" className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Featured Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our handpicked selection of premium properties, each offering 
            unique features and exceptional value in prime locations.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Villa', 'Penthouse', 'Condo', 'Estate', 'Loft', 'Mansion'].map((filter) => (
              <Button
                key={filter}
                variant={filter === 'All' ? 'default' : 'outline'}
                className={filter === 'All' ? 'bg-gradient-primary' : 'btn-ghost-glow'}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="card-futuristic group overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    {property.status}
                  </Badge>
                  {property.featured && (
                    <Badge className="bg-gradient-gold text-gold-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium">{property.rating}</span>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>{property.sqft.toLocaleString()}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-green-500" />
                      <span className="text-2xl font-bold text-gradient-primary">
                        {formatPrice(property.price)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{property.type}</span>
                  </div>
                  <Button
                    onClick={() => handleBookViewing(property.id)}
                    className="btn-ghost-glow"
                    size="sm"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Tour
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="btn-hero">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;