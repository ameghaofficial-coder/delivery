import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">GovAI Platform</h1>
              <p className="text-xs text-muted-foreground">Governance Intelligence</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#dashboard" 
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Dashboard
            </a>
            <a 
              href="#insights" 
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              AI Insights
            </a>
            <a 
              href="#analytics" 
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Analytics
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Services
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:inline-flex"
              onClick={() => navigate("/admin")}
            >
              Admin Portal
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-primary"
              onClick={() => navigate("/auth")}
            >
              Sign In
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
