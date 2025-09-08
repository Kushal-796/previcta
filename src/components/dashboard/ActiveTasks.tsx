import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronDown } from "lucide-react";

const tasks = [
  {
    name: "Website Design",
    team: ["PAR", "Mevin"],
    progress: 80,
    color: "bg-brand-purple",
  },
  {
    name: "Graphic Design", 
    team: ["D", "Senal"],
    progress: 65,
    color: "bg-brand-blue",
  },
  {
    name: "UI/UX Design",
    team: ["D", "D", "D"],
    progress: 75,
    color: "bg-brand-blue",
  },
  {
    name: "Brand Identity",
    team: ["D", "D"],
    progress: 60,
    color: "bg-warning",
  },
];

export function ActiveTasks() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Active Tasks</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Today
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{task.name}</span>
              <span className="text-sm text-muted-foreground">{task.progress}%</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {task.team.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white border-2 border-background ${task.color}`}
                  >
                    {member}
                  </div>
                ))}
              </div>
              
              <Progress value={task.progress} className="flex-1" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}