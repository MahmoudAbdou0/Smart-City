
import { Shield, Users,MessageSquare,TrendingUp } from "lucide-react";
import AnalyticsCard from './components/analytics-card';
import ComplaintsOverviewChart from './components/complaints-chart';
import ComplaintsByCategoryChart from './components/complaints-category-chart'

function AdminDashboard() {
  const cardsInfo = [
    {
      id: 1,
      title: "Total Citizens",
      value: "12,547",
      growth: '+245',
      icon: <Users className="w-6 h-6 text-[#d1a963]"/>
    },
    {
      id: 2,
      title: "Active Complaints",
      value: "142",
      growth: '-18',
      icon: <MessageSquare className="w-6 h-6 text-[#ac4143]"/>
    },
    {
      id: 3,
      title: "Monthly Revenue",
      value: "EGP 2.4M",
      growth: '+12%',
      icon: <TrendingUp  className="w-6 h-6 text-[#22c55e]"/>
    },
    {
      id: 4,
      title: "System Health",
      value: "99.8%",
      growth: '+0.2%',
      icon: <Shield className="w-6 h-6 text-[#d1a963]"/>
    },
  ]
  return (
    <div className='relative py-8'>
      {/* Header */}
      <div className="flex flex-col items-start mb-8">
        <h2 className="text-3xl sm:text-4xl text-[rgb(19,17,18)] mb-2 flex items-center gap-3">
          <Shield className="w-[40px] h-[40px] text-[#ac4143]" />
          Admin Dashboard
        </h2>
        <p className="text-gray-600"> Manage your smart city operations</p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {cardsInfo?.map(card => {
            return (
          <AnalyticsCard card={card}/>
            )
          })}
        </div>
        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Complaints Overview chart  */}
        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-white border-[rgb(209,169,99)]/20 p-6 shadow-md">
        <h2 className="text-xl text-[rgb(19,17,18)] mb-6">Complaints Overview</h2>
        <div className="h-[300px]">
        <ComplaintsOverviewChart/>
        </div>
        </div>
        {/* Complaints by Category chart  */}
        <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-white border-[rgb(209,169,99)]/20 p-6 shadow-md">
        <h2 className="text-xl text-[rgb(19,17,18)] mb-6">Complaints by Category</h2>
        <div className="h-[300px]">
        <ComplaintsByCategoryChart/>
        </div>
        </div>
        </div>
   
      </div>
  );
}

export default AdminDashboard;
