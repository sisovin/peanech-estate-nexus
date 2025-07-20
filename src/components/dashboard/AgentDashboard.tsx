import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  TrendingUp, 
  Users, 
  Calendar,
  DollarSign,
  Phone,
  Mail,
  Plus,
  Edit,
  Eye
} from "lucide-react";

const AgentDashboard = () => {
  const listings = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: 2850000,
      status: "Active",
      views: 156,
      inquiries: 12,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: 4200000,
      status: "Under Offer",
      views: 203,
      inquiries: 8,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const clients = [
    {
      id: 1,
      name: "John Smith",
      email: "john@email.com",
      phone: "+1 (555) 123-4567",
      status: "Active Buyer",
      budget: "2M - 3M",
      lastContact: "2 days ago"
    },
    {
      id: 2,
      name: "Emily Davis",
      email: "emily@email.com",
      phone: "+1 (555) 987-6543",
      status: "Seller",
      budget: "4M - 5M",
      lastContact: "1 week ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient-primary mb-2">Agent Dashboard</h1>
        <p className="text-muted-foreground">Manage your listings, clients, and sales performance.</p>
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="card-futuristic">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Listings</p>
                <p className="text-2xl font-bold">15</p>
                <p className="text-xs text-green-500">+3 this month</p>
              </div>
              <Home className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-futuristic">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Sales This Month</p>
                <p className="text-2xl font-bold">$8.2M</p>
                <p className="text-xs text-green-500">+15% from last month</p>
              </div>
              <DollarSign className="h-8 w-8 text-gold" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-futuristic">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Clients</p>
                <p className="text-2xl font-bold">23</p>
                <p className="text-xs text-green-500">+5 new this week</p>
              </div>
              <Users className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-futuristic">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Scheduled Viewings</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-primary">Today: 3</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* My Listings */}
        <Card className="card-premium">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              My Listings
            </CardTitle>
            <Button className="btn-ghost-glow" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Listing
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {listings.map((listing) => (
              <div key={listing.id} className="flex gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{listing.title}</h4>
                    <Badge variant={listing.status === 'Active' ? 'default' : 'secondary'}>
                      {listing.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{listing.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">
                      ${listing.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {listing.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {listing.inquiries}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Client Management */}
        <Card className="card-premium">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              Recent Clients
            </CardTitle>
            <Button className="btn-ghost-glow" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {clients.map((client) => (
              <div key={client.id} className="p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{client.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {client.status}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{client.lastContact}</span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground mb-3">
                  <p className="flex items-center gap-2">
                    <Mail className="h-3 w-3" />
                    {client.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-3 w-3" />
                    {client.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <DollarSign className="h-3 w-3" />
                    Budget: {client.budget}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline">
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart Placeholder */}
      <Card className="card-premium mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Sales Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 rounded-lg bg-gradient-secondary flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Sales analytics chart would be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentDashboard;