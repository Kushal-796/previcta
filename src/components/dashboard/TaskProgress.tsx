import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export function TaskProgress() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">All Task by completion status</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <div className="text-3xl font-bold mb-1">121 / 143</div>
          <div className="text-sm text-muted-foreground">Tasks completion</div>
        </div>
        
        {/* Semi-circular progress */}
        <div className="relative w-48 h-24 mx-auto mb-4">
          <svg className="w-48 h-24" viewBox="0 0 192 96">
            <path
              d="M 16 80 A 80 80 0 0 1 176 80"
              stroke="#e5e7eb"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 16 80 A 80 80 0 0 1 176 80"
              stroke="url(#progressGradient)"
              strokeWidth="16" 
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${(121/143) * 251.2} 251.2`}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}