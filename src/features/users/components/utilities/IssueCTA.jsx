import Button from "../../../../components/Button";
import SpinnerMini from "../../../../components/SpinnerMini";

function IssueCTA({ loading, onClick }) {
  return (
    <section className="bg-gradient-to-b from-white to-amber-50 border border-gray-100 rounded-2xl shadow-sm p-6 text-center">
      <div className="text-4xl mb-2">⚠️</div>
      <h3 className="text-lg font-semibold text-slate-900">Found an Issue?</h3>
      <p className="text-gray-500 mt-1">Report problems with your utilities and we'll address them promptly</p>
      <div className="max-w-xl mx-auto mt-3">
        <Button onClick={onClick}>{loading ? <SpinnerMini /> : "Report Utility Issue"}</Button>
      </div>
    </section>
  );
}

export default IssueCTA;
