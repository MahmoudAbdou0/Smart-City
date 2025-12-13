import { FileText, Zap, Bell, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  complaint: <FileText size={32} className="text-orange-500" />,
  bills: <Zap size={32} className="text-orange-500" />,
  notifications: <Bell size={32} className="text-orange-500" />,
  profile: <Settings size={32} className="text-orange-500" />,
};

const actionRoutes = {
  "New Complaint": "complaints",
  "Pay Bills": "utilities",
  "View Notifications": "notifications",
  "Update Profile": "profile",
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
      className="bg-white border border-color rounded-lg p-6 hover:shadow-md smooth-transition text-center cursor-pointer "
    >
      <div className="flex justify-center mb-3">{iconMap[icon]}</div>
      <p className="text-gray-700 font-medium">{text}</p>
    </button>
  );
};

export default QuickActionCard;
