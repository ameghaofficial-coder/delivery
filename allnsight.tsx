import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, AlertTriangle, ThumbsUp } from "lucide-react";

const AIInsights = () => {
  const insights = [
    {
      type: "prediction",
      priority: "high",
      icon: Brain,
      title: "Service Demand Forecast",
      description: "Expected 23% increase in permit applications next week based on historical patterns and upcoming events.",
      confidence: 94,
      action: "Recommend increasing staff allocation",
    },
    {
      type: "optimization",
      priority: "medium",
      icon: Sparkles,
      title: "Process Efficiency Opportunity",
      description: "Document verification step can be automated for 67% of cases, reducing processing time by 40%.",
      confidence: 89,
      action: "Review automation candidates",
    },
    {
      type: "alert",
      priority: "high",
      icon: AlertTriangle,
      title: "Response Time Anomaly",
      description: "Healthcare services showing 35% slower response in District 4. Potential resource shortage detected.",
      confidence: 91,
      action: "Immediate resource review needed",
    },
    {
      type: "success",
      priority: "low",
      icon: ThumbsUp,
      title: "Citizen Satisfaction Trend",
      description: "New digital portal implementation correlates with 18% improvement in satisfaction scores.",
      confidence: 87,
      action: "Consider expanding to other departments",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-success/10 text-success border-success/20";
    }
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">AI-Generated Insights</h2>
        <p className="text-muted-foreground">Predictive analytics and actionable recommendations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-md transition-all border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-accent">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{insight.title}</h3>
                    <Badge variant="outline" className={getPriorityColor(insight.priority)}>
                      {insight.priority}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Confidence: </span>
                      <span className="font-semibold text-foreground">{insight.confidence}%</span>
                    </div>
                    <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-accent rounded-full"
                        style={{ width: ${insight.confidence}% }}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-secondary">→ {insight.action}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default AIInsights;
