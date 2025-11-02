import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricsGrid from "@/components/MetricsGrid";
import AIInsights from "@/components/AIInsights";
import ServiceTracker from "@/components/ServiceTracker";
import Analytics from "@/components/Analytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div id="dashboard">
        <Hero />
      </div>
      <MetricsGrid />
      <div id="insights">
        <AIInsights />
      </div>
      <div id="services">
        <ServiceTracker />
      </div>
      <div id="analytics">
        <Analytics />
      </div>
    </div>
  );
};

export default Index;
