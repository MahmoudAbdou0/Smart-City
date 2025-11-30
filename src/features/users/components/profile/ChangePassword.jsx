import { useState } from "react";
import { validations } from "../../../auth/validations";

function ChangePassword({ onSubmit, loading, serverError }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({ oldPassword: "", newPassword: "", confirm: "" });

  const passwordRules = validations.password;

  const validatePassword = (value) => {
    if (!value) return passwordRules.required;
    if (passwordRules.minLength && value.length < passwordRules.minLength.value)
      return passwordRules.minLength.message;
    if (passwordRules.maxLength && value.length > passwordRules.maxLength.value)
      return passwordRules.maxLength.message;
    if (passwordRules.pattern && !passwordRules.pattern.value.test(value))
      return passwordRules.pattern.message;
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errOld = validatePassword(oldPassword);
    const errNew = validatePassword(newPassword);

    let errConfirm = "";
    if (!confirm) errConfirm = "Please confirm your password";
    else if (confirm !== newPassword) errConfirm = "Passwords do not match";

    const nextErrors = { oldPassword: errOld, newPassword: errNew, confirm: errConfirm };
    setErrors(nextErrors);

    const hasError = Object.values(nextErrors).some((m) => m);
    if (hasError) return;

    onSubmit?.({ oldPassword, newPassword });
  };

  return (
    <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">Change Password</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Current Password</label>
          <input
            type="password"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.oldPassword || serverError ? "border-rose-400" : "border-gray-200"
            }`}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          {errors.oldPassword && (
            <div className="text-xs text-rose-600 mt-1">{errors.oldPassword}</div>
          )}
          {serverError && (
            <div className="text-xs text-rose-600 mt-1">{serverError}</div>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">New Password</label>
          <input
            type="password"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.newPassword ? "border-rose-400" : "border-gray-200"
            }`}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errors.newPassword && (
            <div className="text-xs text-rose-600 mt-1">{errors.newPassword}</div>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
          <input
            type="password"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.confirm ? "border-rose-400" : "border-gray-200"
            }`}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {errors.confirm && (
            <div className="text-xs text-rose-600 mt-1">{errors.confirm}</div>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl text-white font-medium shadow-sm hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: "var(--gradient-gold)" }}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </section>
  );
}

export default ChangePassword;
