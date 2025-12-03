import { Clock, CheckCircle2, Hourglass } from "lucide-react";

const statusIcons = {
  "In Progress": <Clock size={16} strokeWidth={1.5} />,
  Completed: <CheckCircle2 size={16} strokeWidth={1.5} />,
  "Under Review": <Hourglass size={16} strokeWidth={1.5} />,
};

const statusStyles = {
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  "Under Review": "bg-yellow-100 text-yellow-700",
};

const ActivityItem = ({ title, time, status }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b last:border-none">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-500 text-sm">{time}</p>
      </div>

      <span
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}
      >
        {statusIcons[status]} {status}
      </span>
    </div>
  );
};

export default ActivityItem;
