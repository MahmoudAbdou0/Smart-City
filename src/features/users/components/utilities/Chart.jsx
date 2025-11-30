import { useMemo } from "react";

// Responsive, full-width simple bar chart without external deps
function Chart({ months, usage, cost }) {
  const max = useMemo(() => Math.max(...usage, ...cost, 1), [usage, cost]);

  return (
    <div className="w-full">
      <div className="flex items-end gap-3 px-1 h-[260px] w-full">
        {months.map((m, i) => {
          const uH = Math.round((usage[i] / max) * 200) + 10;
          const cH = Math.round((cost[i] / max) * 200) + 10;
          return (
            <div key={m} className="grid justify-items-center gap-1 flex-1">
              <div className="flex items-end gap-1 w-full">
                <div className="w-5 rounded-md bg-amber-500/70" style={{ height: uH }} />
                <div className="w-5 rounded-md bg-red-700/80" style={{ height: cH }} />
              </div>
              <div className="text-[11px] text-gray-500">{m}</div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 text-xs text-gray-500 px-1 mt-1">
        <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-sm bg-red-700/80"/>Cost (EGP)</div>
        <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-sm bg-amber-500/70"/>Usage (kWh)</div>
      </div>
    </div>
  );
}

export default Chart;
