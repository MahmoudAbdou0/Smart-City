function StatCard({ title, value, delta, trend = "down" }) {
  const trendColor = trend === "up" ? "text-amber-600" : "text-green-600";
  const arrow = trend === "up" ? "↗" : "↘";
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
      <div className="text-xs font-semibold text-gray-500">{title}</div>
      <div className="text-[28px]  mt-2 text-slate-900">EGP {value}</div>
      <div className={`flex items-center gap-1 mt-1 text-sm ${trendColor}`}>
        <span className="text-xs">{arrow}</span>
        <span>{delta}</span>
      </div>
    </div>
  );
}

export default StatCard;
