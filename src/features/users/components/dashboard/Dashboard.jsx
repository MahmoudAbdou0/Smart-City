import { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import StatsCard from "./StatsCard";
import QuickActionCard from "./QuickActionCard";
import ProfileCompletion from "./ProfileCompletion";
import ActivityItem from "./ActivityItem";
import { UserRound } from "lucide-react";
import useDashboardStats from "../../hooks/useDashboard";
import GlobalPreloader from "../../../../components/GlobalPreloader";

const Dashboard = () => {
  const { user } = useAuth();

  const { stats, loading } = useDashboardStats(user?.id);

  const [recentActivities] = useState([
    {
      title: "Street Light Repair",
      time: "2 hours ago",
      status: "In Progress",
    },
    { title: "Electricity Bill Paid", time: "1 day ago", status: "Completed" },
    { title: "Noise Complaint", time: "3 days ago", status: "Under Review" },
  ]);

  return (
    <div className="py-4 sm:py-6 ">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="md:text-4xl text-2xl flex items-center gap-3">
          <UserRound className="w-8 h-8 text-amber-600" />
          Welcome Back, {user?.name || "User"}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Here's what's happening with your account today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 mb-8">
        <StatsCard
          icon="📄"
          title="Active Complaints"
          value={loading ? <GlobalPreloader /> : stats.complaints.count}
        />

        <StatsCard
          icon="⚡"
          title="Pending Bills"
          value={loading ? "..." : stats.bills.count}
        />

        <StatsCard
          icon="🔔"
          title="Notifications"
          value={loading ? "..." : stats.notifications.count}
        />

        <StatsCard
          icon="💡"
          title="Suggestions"
          value={loading ? "..." : stats.suggestions.count}
        />
      </div>

      {/* Quick Actions + Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 mb-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2 bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
            ⚡ Quick Actions
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            <QuickActionCard icon="complaint" text="New Complaint" />
            <QuickActionCard icon="bills" text="Pay Bills" />
            <QuickActionCard icon="notifications" text="View Notifications" />
            <QuickActionCard icon="profile" text="Update Profile" />
          </div>
        </div>

        {/* Profile Completion */}
        {/* <ProfileCompletion progress={85} /> */}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            ⏱️ Recent Activity
          </h3>
          {/* <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors">
            View All
          </button> */}
        </div>

        <div className="space-y-1 divide-y divide-gray-100">
          {recentActivities.map((activity, index) => (
            <ActivityItem
              key={index}
              title={activity.title}
              time={activity.time}
              status={activity.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
