import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Analytics = () => {
  const responseTimeData = [
    { month: "Jan", time: 3.2 },
    { month: "Feb", time: 2.9 },
    { month: "Mar", time: 2.7 },
    { month: "Apr", time: 2.5 },
    { month: "May", time: 2.3 },
    { month: "Jun", time: 2.1 },
  ];

  const serviceVolumeData = [
    { category: "Permits", volume: 1247 },
    { category: "Licenses", volume: 892 },
    { category: "Healthcare", volume: 1653 },
    { category: "Tax", volume: 734 },
    { category: "Education", volume: 1089 },
    { category: "Social", volume: 456 },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h2>
        <p className="text-muted-foreground">Historical trends and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Average Response Time Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
                label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="time" 
                stroke="hsl(var(--secondary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--secondary))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Service Volume by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={serviceVolumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="category" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem'
                }}
              />
              <Bar 
                dataKey="volume" 
                fill="url(#colorGradient)" 
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </section>
  );
};

export default Analytics;
