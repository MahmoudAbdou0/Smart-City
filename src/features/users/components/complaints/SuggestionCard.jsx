import { Info } from "lucide-react";

function SuggestionCard() {
  return (
    <div className="flex flex-col gap-3 border border-primary-light/50 shadow rounded-lg p-4 bg-light hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Info
            size={50}
            className="border border-primary-light/50 rounded-xl p-3 shadow text-primary"
          />
          <div>
            <h3 className="text-xl">Street Light</h3>
            <p className="text-gray-600">{new Date().toISOString()}</p>
          </div>
        </div>
        <div className="h-fit flex gap-2">
          <p className="border border-primary-light/50 rounded-lg px-2 shadow text-sm">
            Development
          </p>
          <p className="border border-primary-light/50 rounded-lg px-2 shadow text-sm">
            High Priority
          </p>
        </div>
      </div>

      <p className=" w-fit border border-primary-light/50 rounded-lg px-2 shadow text-sm">
        Development
      </p>
    </div>
  );
}

export default SuggestionCard;
