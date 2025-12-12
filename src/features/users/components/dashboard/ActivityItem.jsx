import { Clock, CheckCircle2, Hourglass, FileText } from "lucide-react";

const statusIcons = {
  "In Progress": <Clock size={18} strokeWidth={1.5} />,
  Completed: <CheckCircle2 size={18} strokeWidth={1.5} />,
  "Under Review": <Hourglass size={18} strokeWidth={1.5} />,
};

const statusStyles = {
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  "Under Review": "bg-yellow-100 text-yellow-700",
};

const ActivityItem = ({ title, time, status }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-3">
      <div className="flex items-center gap-4">
        <div className="text-orange-500">
          <FileText size={20} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
            {title}
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm">{time}</p>
        </div>
      </div>

      <span
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${statusStyles[status]}`}
      >
        {statusIcons[status]} {status}
      </span>
    </div>
  );
};

export default ActivityItem;
