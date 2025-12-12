import { Check, Clock } from "lucide-react";

const ProfileCompletion = ({ progress = 85 }) => {
  const completionItems = [
    { label: "Personal Information", completed: true },
    { label: "Contact Details", completed: true },
    { label: "Verification Documents", completed: false },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Profile Completion
      </h3>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-700">Overall Progress</span>
          <span className="text-sm font-semibold text-orange-600">
            {progress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-orange-400 to-orange-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Completion Items */}
      <div className="space-y-3 mb-6">
        {completionItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {item.completed ? (
              <div className="text-green-500">
                <Check size={20} strokeWidth={3} />
              </div>
            ) : (
              <div className="text-gray-400">
                <Clock size={20} strokeWidth={2} />
              </div>
            )}
            <span
              className={`text-sm font-medium ${
                item.completed ? "text-green-600" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="w-full bg-white text-orange-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-orange-50 transition-colors border-2 border-orange-300">
        Complete Profile
      </button>
    </div>
  );
};

export default ProfileCompletion;
