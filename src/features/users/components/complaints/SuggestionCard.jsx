import { Info } from "lucide-react";
import { statusMap } from "../../../../utils/statuesMap";

function SuggestionCard({ item }) {
  const status = statusMap(item?.status);

  return (
    <div className="flex flex-col gap-3 border border-primary-light/50 shadow rounded-lg p-4 bg-light hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0">
        <div className="flex gap-2 items-center flex-1 min-w-0">
          <Info
            size={40}
            className="border border-primary-light/50 rounded-xl p-3 shadow text-primary flex-shrink-0 md:size-[50px]"
          />
          <div className="flex-1 min-w-0">
            <div className="flex gap-1 items-center flex-wrap">
              <h3 className="text-lg md:text-xl font-medium break-words">
                {item?.title}
              </h3>
              <span className="text-gray-600 hidden md:inline">{"-"}</span>
              <p className="text-xs md:text-sm text-gray-600 break-words">
                {new Date(item?.dateSubmitted).toLocaleString()}
              </p>
            </div>
            {item?.description && (
              <div className="py-1 text-xs md:text-sm font-medium break-words">
                {item.description}
              </div>
            )}
          </div>
        </div>
        <p
          className={`w-fit h-fit px-2 py-1 rounded-lg text-xs md:text-sm font-semibold ${status.bg} ${status.text} ${status.border} border border-primary-light/50 shadow whitespace-nowrap flex-shrink-0`}
        >
          {status.label}
        </p>
      </div>
    </div>
  );
}

export default SuggestionCard;
