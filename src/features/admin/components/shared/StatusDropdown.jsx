// StatusDropdown.jsx
import Select from "react-select";
import { Clock, RefreshCw, Check, Lock } from "lucide-react";

const StatusDropdown = ({ item, onUpdateStatus }) => {
  if (!item) return null; // 🔥 منع الكسر لو item لسه محمّلش

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "border-yellow-300";
      case "In Progress":
        return "border-blue-300";
      case "Resolved":
        return "border-green-300";
      case "Rejected":
        return "border-red-300";
      default:
        return "border-gray-300";
    }
  };

  const statusOptions = [
    { value: "Pending", label: "Pending" },
    { value: "In Progress", label: "In Progress" },
    { value: "Resolved", label: "Resolved" },
    { value: "Rejected", label: "Rejected" },
  ];

  const customOptions = statusOptions.map((option) => ({
    value: option.value,
    label: (
      <div className="flex items-center">
        {getStatusIcon(option.value)}
        <span className="ml-2">{option.label}</span>
      </div>
    ),
  }));

  return (
    <Select
      options={customOptions}
      value={customOptions.find((opt) => opt.value === item?.status) || null}
      onChange={(selectedOption) => {
        onUpdateStatus(item, selectedOption?.value);
      }}
      className={`text-xs font-medium rounded-md border transition-all duration-200 cursor-pointer min-w-[150px] ${getStatusColor(
        item?.status
      )}`}
      menuPortalTarget={document.body}
      menuPosition="fixed"
      menuPlacement="auto"
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        menu: (base) => ({ ...base, zIndex: 9999 }),
        control: (base) => ({
          ...base,
          border: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
          minHeight: "20px",
        }),
      }}
    />
  );
};

const getStatusIcon = (status) => {
  switch (status) {
    case "Pending":
      return <Clock className="w-4 h-4 text-yellow-600" />;
    case "In Progress":
      return <RefreshCw className="w-4 h-4 text-blue-600" />;
    case "Resolved":
      return <Check className="w-4 h-4 text-green-600" />;
    case "Rejected":
      return <Lock className="w-4 h-4 text-red-600" />;
    default:
      return <Clock className="w-4 h-4 text-gray-600" />;
  }
};

export default StatusDropdown;
