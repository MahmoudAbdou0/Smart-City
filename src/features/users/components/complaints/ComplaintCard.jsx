import { Info } from "lucide-react";
import { statusMap } from "../../../../utils/statuesMap";

function ComplaintCard({ complaint }) {
  const status = statusMap(complaint?.status);

  return (
    <div className="flex flex-col gap-3 border border-primary-light/50 shadow rounded-lg p-4 bg-light hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Info
            size={50}
            className="border border-primary-light/50 rounded-xl p-3 shadow text-primary"
          />
          <div>
            <h3 className="text-xl">{complaint?.title}</h3>
            <p className="text-gray-600">
              {new Date(complaint?.dateSubmitted).toLocaleString()}
            </p>
          </div>
        </div>
        <p
          className={`h-fit px-2 py-1 rounded-lg text-sm font-semibold ${status.bg} ${status.text} ${status.border} border border-primary-light/50 shadow`}
        >
          {status.label}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {complaint?.description && (
          <div className="border border-blue-200 bg-blue-50 px-3 py-1 rounded-lg shadow-sm text-sm font-medium">
            {complaint.description}
          </div>
        )}
        {complaint?.location && (
          <div className="border border-green-200 bg-green-50 px-3 py-1 rounded-lg shadow-sm text-sm font-medium">
            {complaint.location}
          </div>
        )}
        {complaint?.adminNote && (
          <div className="border border-yellow-200 bg-yellow-50 px-3 py-1 rounded-lg shadow-sm text-sm font-medium">
            {complaint.adminNote}
          </div>
        )}
      </div>
    </div>
  );
}

export default ComplaintCard;
