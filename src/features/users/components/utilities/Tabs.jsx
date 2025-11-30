function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`px-3 py-1 rounded-full border text-sm ${
            active === t.key
              ? "bg-white text-slate-900 border-amber-500"
              : "bg-gray-50 text-slate-600 border-gray-200"
          }`}
        >
          <span className="mr-1">{t.icon}</span>
          {t.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
