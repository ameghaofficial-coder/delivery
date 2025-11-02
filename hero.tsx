import { Button } from "@/components/ui/button";
import { Shield, Brain, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Secure & Compliant
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI-Powered Governance
            <span className="block text-secondary mt-2">
              Transforming Citizen Service
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Convert raw government data into predictive, actionable insights. 
            Enable proactive citizen service delivery while maintaining strict 
            data privacy and compliance standards.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-md hover:shadow-lg transition-all"
              onClick={() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Brain className="w-5 h-5 mr-2" />
              Explore AI Insights
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2"
              onClick={() => document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Analytics
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Data Security</div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="text-3xl font-bold text-secondary mb-1">45%</div>
              <div className="text-sm text-muted-foreground">Faster Response Time</div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="text-3xl font-bold text-success mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Citizen Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
