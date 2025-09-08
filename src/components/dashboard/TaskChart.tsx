import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { day: "AM", value: 60 },
  { day: "AC", value: 45 },
  { day: "OT", value: 80 },
  { day: "PM", value: 70 },
  { day: "RV", value: 55 },
  { day: "ST", value: 85 },
  { day: "UR", value: 40 },
  { day: "TM", value: 65 },
  { day: "PM", value: 75 },
  { day: "WS", value: 50 },
];

const colors = ["#10B981", "#3B82F6", "#8B5CF6", "#F59E0B", "#EF4444"];

export function TaskChart() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Task by assignee</CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              <span className="text-muted-foreground">New</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
              <span className="text-muted-foreground">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
              <span className="text-muted-foreground">Review</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-green rounded-full"></div>
              <span className="text-muted-foreground">Done</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between h-32 gap-2">
          {chartData.map((item, index) => (
            <div key={item.day} className="flex flex-col items-center gap-2 flex-1">
              <div className="flex flex-col gap-px w-full h-24 justify-end">
                {colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="rounded-sm"
                    style={{
                      backgroundColor: color,
                      height: `${(item.value / colors.length) * (colorIndex + 1) / 4}%`,
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}