import { Activity, MessageSquare, TrendingUp, Users } from "lucide-react";

export const userNavItems = [
  { path: "dashboard", label: "Dashboard", end: true },
  { path: "dashboard/complaints", label: "Complaints" },
  { path: "dashboard/utilities", label: "Utilities" },
  { path: "dashboard/notifications", label: "Notifications" },
];

export const adminNavItems = [
  {
    path: "admin",
    label: (
      <span className="flex items-center gap-1">
        <Activity className="h-4 w-4" /> Dashboard
      </span>
    ),
    end: true
  },
  {
    path: "admin/users",
    label: (
      <span className="flex items-center gap-1">
        <Users className="h-4 w-4" /> Users
      </span>
    ),
  },
  {
    path: "admin/complaints", label: (
      <span className="flex items-center gap-1">
        <MessageSquare className="h-4 w-4" /> Complaints
      </span>
    )
  },
  {
    path: "admin/analytics", label: (
      <span className="flex items-center gap-1">
        <TrendingUp className="h-4 w-4 " /> Analytics
      </span>
    )
  },
];
