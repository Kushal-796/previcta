import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EarningsCard() {
  return (
    <Card className="bg-gradient-earnings border-0 text-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-white/90 text-base font-medium">Average Earning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold mb-1">$9,583.99</p>
            <p className="text-white/70 text-sm">Update : March 20, 2023</p>
          </div>
          <div className="relative w-16 h-16">
            {/* Circular progress */}
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${70 * 1.76} ${100 * 1.76}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold">70%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}