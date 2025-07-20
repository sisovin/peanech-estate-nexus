import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  Building2, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Globe,
  Shield,
  Settings,
  UserCheck,
  AlertTriangle
} from "lucide-react";

const AdminDashboard = () => {
  const platformStats = [
    {
      title: "Total Properties",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Building2,
      color: "text-primary"
    },
    {
      title: "Active Agents",
      value: "89",
      change: "+5%",
      trend: "up",
      icon: UserCheck,
      color: "text-accent"
    },
    {
      title: "Total Users",
      value: "15,623",
      change: "+18%",
      trend: "up",
      icon: Users,
      color: "text-gold"
    },
    {
      title: "Monthly Revenue",
      value: "$2.4M",
      change: "-3%",
      trend: "down",
      icon: DollarSign,
      color: "text-green-500"
    }
  ];

  const recentAgents = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@peanech.com",
      status: "Active",
      properties: 15,
      sales: "$8.2M",
      rating: 4.9
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@peanech.com",
      status: "Active",
      properties: 22,
      sales: "$12.5M",
      rating: 4.8
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@peanech.com",
      status: "Pending",
      properties: 8,
      sales: "$3.1M",
      rating: 4.7
    }
  ];

  const systemAlerts = [
    {
      type: "warning",
      title: "Server Performance",
      message: "API response time increased by 15%",
      time: "5 minutes ago"
    },
    {
      type: "info",
      title: "New Feature Release",
      message: "VR tour feature deployed successfully",
      time: "2 hours ago"
    },
    {
      type: "error",
      title: "Payment Processing",
      message: "3 failed transactions require attention",
      time: "4 hours ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient-primary mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Monitor platform performance and manage system operations.</p>
      </div>

      {/* Platform Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {platformStats.map((stat, index) => (
          <Card key={index} className="card-futuristic">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={`text-xs ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Agent Management */}
        <Card className="card-premium">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-accent" />
              Agent Management
            </CardTitle>
            <Button className="btn-ghost-glow" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Manage
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAgents.map((agent) => (
              <div key={agent.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                <div>
                  <h4 className="font-semibold">{agent.name}</h4>
                  <p className="text-sm text-muted-foreground">{agent.email}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <span>{agent.properties} properties</span>
                    <span>{agent.sales} sales</span>
                    <span>⭐ {agent.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={agent.status === 'Active' ? 'default' : 'secondary'}>
                    {agent.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemAlerts.map((alert, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-lg bg-muted/20">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.type === 'error' ? 'bg-red-500' :
                  alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" size="sm">
              View All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Analytics and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Platform Analytics */}
        <Card className="card-premium lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Platform Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 rounded-lg bg-gradient-secondary flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Advanced analytics dashboard would be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-accent" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Manage Users
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Building2 className="h-4 w-4 mr-2" />
              Property Analytics
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <DollarSign className="h-4 w-4 mr-2" />
              Financial Reports
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Security Settings
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Globe className="h-4 w-4 mr-2" />
              System Status
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;