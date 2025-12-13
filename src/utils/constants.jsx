import { Activity, FileText, Home, MessageSquare, TrendingUp, Users, Zap } from "lucide-react";

export const userNavItems = [
  {
    path: "dashboard",
    label: (
      <span className="flex items-center gap-1">
        <Home className="h-4 w-4" /> Dashboard
      </span>
    ),
    end: true
  },
  {
    path: "dashboard/complaints",
    label: (
      <span className="flex items-center gap-1">
        <FileText className="h-4 w-4" /> Complaints & Suggestions
      </span>
    )
  },
  {
    path: "dashboard/utilities",
    label: (
      <span className="flex items-center gap-1">
        <Zap className="h-4 w-4" /> Utilities
      </span>
    )
  },
  // { path: "dashboard/notifications", label: "Notifications" },
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
        <MessageSquare className="h-4 w-4" /> Complaints & Suggestions
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
