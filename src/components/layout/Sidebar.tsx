import { 
  Home, 
  Briefcase, 
  CheckSquare, 
  FolderOpen, 
  Calendar, 
  BarChart3, 
  Settings, 
  StickyNote, 
  Users, 
  Files,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navigation = [
  { name: "Home", icon: Home, active: true },
  { name: "My Work", icon: Briefcase },
  { name: "All Tasks", icon: CheckSquare },
  { name: "Portfolio", icon: FolderOpen },
  { name: "Calendar", icon: Calendar },
  { name: "Reports", icon: BarChart3 },
  { name: "Settings", icon: Settings },
  { name: "Notes", icon: StickyNote },
  { name: "Team", icon: Users },
  { name: "Files", icon: Files },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-64 bg-card border-r border-border flex flex-col", className)}>
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-orange rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">ManageX</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all hover:bg-accent",
                item.active 
                  ? "bg-gradient-orange text-white shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Upgrade Section */}
      <div className="p-4 border-t border-border">
        <div className="bg-gradient-primary rounded-lg p-4 text-center">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <p className="text-white text-sm font-medium mb-1">You're on the Free plan.</p>
          <p className="text-white/80 text-xs mb-4">Upgrade to go Pro</p>
          <button className="w-full bg-white text-primary font-medium py-2 px-4 rounded-lg text-sm hover:bg-white/90 transition-colors">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}