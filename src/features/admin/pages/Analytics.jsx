import { TrendingUp } from "lucide-react";
import RevenuePerformanceChart from './components/revenue-and-performance-chart'

function Analytics() {
  return (
    <div className='relative py-8'>
      {/* Header */}
      <div className="flex flex-col items-start mb-8">
        <h2 className="text-3xl sm:text-4xl text-[rgb(19,17,18)] mb-2 flex items-center gap-3">
          <TrendingUp className="w-[40px] h-[40px] text-[#ac4143]" />
          Analytics
        </h2>
        <p className="text-gray-600"> Manage your smart city Analytics</p>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-1">
        {/* Revenue & Performance chart  */}
        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-white border-[rgb(209,169,99)]/20 p-6 shadow-md">
          <h2 className="text-xl text-[rgb(19,17,18)] mb-6">Revenue & Performance</h2>
          <div className="h-[400px]">
            <RevenuePerformanceChart />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Analytics;
