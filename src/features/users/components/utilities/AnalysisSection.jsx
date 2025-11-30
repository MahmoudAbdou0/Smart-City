import Tabs from "./Tabs";
import Chart from "./Chart";

function AnalysisSection({ chartTabs, activeTab, onChangeTab, chart }) {
  return (
    <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span>📈</span>
          <h3 className="text-lg font-semibold text-slate-900 m-0">Monthly Usage & Cost Analysis</h3>
        </div>
        <Tabs tabs={chartTabs} active={activeTab} onChange={onChangeTab} />
      </div>
      <div className="w-full">
        <Chart months={chart.months} usage={chart.usage} cost={chart.cost} />
      </div>
    </section>
  );
}

export default AnalysisSection;
