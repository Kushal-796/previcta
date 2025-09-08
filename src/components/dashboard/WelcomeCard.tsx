import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function WelcomeCard() {
  return (
    <Card className="bg-gradient-primary border-0 text-white p-6 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-2">
          Welcome to ManageX Service Management Dashboard 😊
        </h2>
        <Button 
          variant="secondary" 
          className="bg-white text-primary hover:bg-white/90 font-medium"
        >
          Get Started
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-4 top-4 w-24 h-24 opacity-20">
        <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
          <span className="text-4xl">🤝</span>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute -right-4 bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
    </Card>
  );
}