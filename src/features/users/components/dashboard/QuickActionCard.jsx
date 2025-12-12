import { FileText, Zap, Bell, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  complaint: <FileText size={32} className="text-orange-500" />,
  bills: <Zap size={32} className="text-orange-500" />,
  notifications: <Bell size={32} className="text-orange-500" />,
  profile: <Settings size={32} className="text-orange-500" />,
};

const actionRoutes = {
  "New Complaint": "/user/complaints",
  "Pay Bills": "/user/utilities",
  "View Notifications": "/user/notifications",
  "Update Profile": "/user/profile",
};

const QuickActionCard = ({ icon, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const route = actionRoutes[text];
    if (route) {
      navigate(route);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center cursor-pointer hover:border-orange-300"
    >
      <div className="flex justify-center mb-3">{iconMap[icon]}</div>
      <p className="text-gray-700 font-medium">{text}</p>
    </button>
  );
};

export default QuickActionCard;
