import React from "react";
import StatsCard from "./StatsCard";
import QuickActionCard from "./QuickActionCard";
import ProfileCompletion from "./ProfileCompletion";
import ActivityItem from "./ActivityItem";

const Dashboard = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      {/* Greeting */}
      <h1 className="text-3xl font-semibold">Welcome Back, Ahmed</h1>
      <p className="text-gray-500 -mt-1">
        Here's what's happening with your account today
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <StatsCard icon="📄" title="Active Complaints" value={2} change="+1" />
        <StatsCard icon="⚡" title="Pending Bills" value={1} change="+2" />
        <StatsCard icon="🔔" title="Notifications" value={5} change="+3" />
        <StatsCard icon="👤" title="Profile Complete" value="85%" change="+5%" />
      </div>

      {/* Quick Actions + Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        
        {/* Quick Actions */}
        <div className="bg-white shadow-md rounded-xl p-6 col-span-2">
          <h3 className="text-lg font-semibold">Quick Actions</h3>

          <div className="grid grid-cols-2 gap-4 mt-4">
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
      <div className="bg-white shadow-md rounded-xl p-6 mt-10">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <button className="text-blue-500 hover:underline">View All</button>
        </div>

        <div className="mt-4">
          <ActivityItem
            title="Street Light Repair"
            time="2 hours ago"
            status="In Progress"
          />
          <ActivityItem
            title="Electricity Bill Paid"
            time="1 day ago"
            status="Completed"
          />
          <ActivityItem
            title="Noise Complaint"
            time="3 days ago"
            status="Under Review"
          />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
