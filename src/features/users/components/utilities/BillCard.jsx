function BillCard({ bill, onPay }) {
  const isPaid = bill.status === "Paid";
  const badgeClasses = isPaid
    ? "bg-green-100 text-green-700"
    : "bg-rose-100 text-rose-700";

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      {/* Header: Icon + Status */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-gray-50 grid place-items-center text-xl text-gray-400">
          {bill.icon}
        </div>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${badgeClasses}`}
        >
          {bill.status}
        </span>
      </div>

      {/* Title/ID */}
      <div className="mt-5">
        <div className="font-semibold text-slate-900">{bill.name}</div>
        <div className="text-xs text-gray-500 mt-0.5">{bill.id}</div>
      </div>

      {/* Amount / Due Date */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-500">
        <div>
          <div>Amount</div>
          <div className="text-[26px] leading-7  text-slate-900 mt-1">
            EGP {bill.amount}
          </div>
        </div>
        <div className="text-right">
          <div>Due Date</div>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span>🗓️</span>
            {bill.due}
          </div>
        </div>
      </div>

      {/* Pay Button */}
      {!isPaid && (
        <button
          
          onClick={() => onPay?.(bill)}
          className="mt-5 w-full py-1 rounded-xl text-white font-medium shadow-sm bg-gradient-to-r from-amber-400 to-rose-500 hover:cursor-pointer"
        >
          Pay Now
        </button>
      )}
    </div>
  );
}

export default BillCard;
