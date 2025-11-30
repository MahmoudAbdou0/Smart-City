import BillCard from "./BillCard";




function BillsSection({ bills = [], onPay }) {
    // const { user ,token } = useAuth();

    // console.log(user?.id);
    // console.log(token);

  return (
    <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span>📁</span>
          <h3 className="text-lg font-semibold text-slate-900 m-0">Current Bills</h3>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {bills.map((b) => (
          <BillCard key={b.id} bill={b} onPay={onPay} />
        ))}
      </div>
    </section>
  );
}

export default BillsSection;
