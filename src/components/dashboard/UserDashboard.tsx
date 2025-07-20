import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Calendar, 
  Eye, 
  TrendingUp, 
  Home, 
  Clock,
  Search,
  Star,
  MapPin,
  Bell
} from "lucide-react";

const UserDashboard = () => {
  const savedProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: 2850000,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80",
      status: "Available",
      priceChange: "+2.3%"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: 4200000,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
      status: "Under Offer",
      priceChange: "-1.2%"
    }
  ];

  const recentViewings = [
    {
      id: 1,
      property: "Waterfront Condo",
      date: "2024-01-15",
      time: "2:00 PM",
      agent: "Sarah Johnson",
      status: "Confirmed"
    },
    {
      id: 2,
      property: "Mountain View Estate",
      date: "2024-01-18",
      time: "10:00 AM",
      agent: "Michael Chen",
      status: "Pending"
    }
  ];

  const activities = [
    { type: "saved", property: "Modern Luxury Villa", time: "2 hours ago" },
    { type: "viewed", property: "Downtown Penthouse", time: "1 day ago" },
    { type: "booked", property: "Waterfront Condo", time: "2 days ago" },
    { type: "inquiry", property: "Mountain View Estate", time: "3 days ago" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient-primary mb-2">My Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your property activity overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="card-futuristic">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Saved Properties</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Heart className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-futuristic">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Scheduled Viewings</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Calendar className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-futuristic">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Properties Viewed</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <Eye className="h-8 w-8 text-gold" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-futuristic">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Market Alerts</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <Bell className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Saved Properties */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Saved Properties
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {savedProperties.map((property) => (
              <div key={property.id} className="flex gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{property.title}</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-3 w-3" />
                    {property.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">
                      ${property.price.toLocaleString()}
                    </span>
                    <Badge variant={property.priceChange.startsWith('+') ? 'default' : 'destructive'}>
                      {property.priceChange}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Saved Properties
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'saved' ? 'bg-primary/20' :
                  activity.type === 'viewed' ? 'bg-accent/20' :
                  activity.type === 'booked' ? 'bg-gold/20' : 'bg-muted'
                }`}>
                  {activity.type === 'saved' && <Heart className="h-4 w-4 text-primary" />}
                  {activity.type === 'viewed' && <Eye className="h-4 w-4 text-accent" />}
                  {activity.type === 'booked' && <Calendar className="h-4 w-4 text-gold" />}
                  {activity.type === 'inquiry' && <Search className="h-4 w-4 text-muted-foreground" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="capitalize">{activity.type}</span> {activity.property}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Viewings */}
      <Card className="card-premium mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Upcoming Viewings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentViewings.map((viewing) => (
              <div key={viewing.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                <div>
                  <h4 className="font-semibold">{viewing.property}</h4>
                  <p className="text-sm text-muted-foreground">
                    {viewing.date} at {viewing.time} with {viewing.agent}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={viewing.status === 'Confirmed' ? 'default' : 'secondary'}>
                    {viewing.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;