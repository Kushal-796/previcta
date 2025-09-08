import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    title: "Completed Task",
    value: "2,530",
    change: "+1.59%",
    positive: true,
  },
  {
    title: "Incomplete Task", 
    value: "1,241",
    change: "+2.32%",
    positive: true,
  },
  {
    title: "Overdue Task",
    value: "2,875", 
    change: "-4.12%",
    positive: false,
  },
  {
    title: "Total Task",
    value: "8,576",
    change: "+6.82%",
    positive: true,
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </h3>
              <div className={`flex items-center gap-1 text-xs ${
                stat.positive ? 'text-success' : 'text-error'
              }`}>
                {stat.positive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}