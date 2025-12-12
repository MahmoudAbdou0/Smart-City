import { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import StatsCard from "./StatsCard";
import QuickActionCard from "./QuickActionCard";
import ProfileCompletion from "./ProfileCompletion";
import ActivityItem from "./ActivityItem";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    complaints: { count: 2, change: "+1" },
    bills: { count: 1, change: "-2" },
    notifications: { count: 5, change: "+3" },
    profileComplete: { count: "85%", change: "+5%" },
  });

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
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen w-full">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Welcome Back, {user?.name || "User"}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Here's what's happening with your account today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <StatsCard
          icon="📄"
          title="Active Complaints"
          value={stats.complaints.count}
          change={stats.complaints.change}
        />
        <StatsCard
          icon="⚡"
          title="Pending Bills"
          value={stats.bills.count}
          change={stats.bills.change}
          changeType={
            stats.bills.change.startsWith("-") ? "negative" : "positive"
          }
        />
        <StatsCard
          icon="🔔"
          title="Notifications"
          value={stats.notifications.count}
          change={stats.notifications.change}
        />
        <StatsCard
          icon="👤"
          title="Profile Complete"
          value={stats.profileComplete.count}
          change={stats.profileComplete.change}
        />
      </div>

      {/* Quick Actions + Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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
        <ProfileCompletion progress={85} />
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            ⏱️ Recent Activity
          </h3>
          <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors">
            View All
          </button>
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
