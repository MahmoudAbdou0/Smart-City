import { FaUser, FaCalendarAlt, FaCheck, FaTimes } from "react-icons/fa";

export default function UserDetailsModal({ open, onClose, user }) {
  if (!open || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-999999999999999 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-[500px] max-h-[90vh] overflow-y-auto p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-5 border-b pb-3">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaUser className="text-blue-600" /> User Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <Info label="ID" value={user.id} />
          <Info label="Name" value={user.name} />
          <Info label="Email" value={user.email} />
          <Info label="Phone" value={user.phone} />
          <Info label="National ID" value={user.nationalId} />
          <Info label="Role" value={user.role} />
          <Info label="Address" value={user.address} />

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-gray-600">Active</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                user.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.isActive ? (
                <span className="flex items-center gap-1">
                  <FaCheck /> Active
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <FaTimes /> Inactive
                </span>
              )}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-gray-600">Created At</span>
            <span className="text-gray-800 flex items-center gap-1">
              <FaCalendarAlt className="text-blue-500" />
              {new Date(user.createdAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cleaner Info Component
function Info({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-3">
      <span className="font-semibold text-gray-600">{label}</span>
      <span className="text-gray-800 break-all">{String(value)}</span>
    </div>
  );
}
