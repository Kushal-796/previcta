import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { EarningsCard } from "@/components/dashboard/EarningsCard";
import { TaskChart } from "@/components/dashboard/TaskChart";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { TaskProgress } from "@/components/dashboard/TaskProgress";
import { ActiveTasks } from "@/components/dashboard/ActiveTasks";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header title="Dashboard" />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Top Row - Welcome and Earnings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <WelcomeCard />
            </div>
            <div>
              <EarningsCard />
            </div>
          </div>

          {/* Task Chart */}
          <TaskChart />

          {/* Stats Grid */}
          <StatsGrid />

          {/* Bottom Row - Task Progress and Active Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TaskProgress />
            <ActiveTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
