import React from "react";

const StatsCard = ({ icon, title, value, change, changeType = "positive" }) => {
  const isPositive = changeType === "positive";
  const changeColor = isPositive
    ? "bg-green-100 text-green-600"
    : "bg-red-100 text-red-600";

  return (
    <div className="bg-white/50 rounded-lg shadow-md p-4  text-center">
      <div className="flex justify-center  mb-4 ">
        <span className="text-3xl text-center">{icon}</span>
        {/* <span
          className={`${changeColor} px-2 py-1 rounded text-xs font-semibold`}
        >
          {change}
        </span> */}
      </div>
      <h4 className="text-gray-600 text-sm font-medium mb-2">{title}</h4>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default StatsCard;
