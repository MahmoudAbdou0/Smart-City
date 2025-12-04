export default function UserStatusBadge({ isActive }) {
  return (
    <span
      className={`px-3 py-1 text-sm rounded-full ${
        isActive ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
      }`}
    >
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}
