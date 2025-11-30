function Row({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-3 py-2">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="col-span-2 text-sm text-slate-900 break-words">{value || "-"}</div>
    </div>
  );
}

function InfoCard({ user }) {
  return (
    <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-100 grid place-items-center text-xl">👤</div>
        <div>
          <div className="text-lg font-semibold text-slate-900">{user?.name || "-"}</div>
          <div className="text-xs text-gray-500">Joined: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}</div>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        <Row label="Email" value={user?.email} />
        <Row label="Phone" value={user?.phone} />
        <Row label="National ID" value={user?.nationalId} />
        <Row label="Address" value={user?.address} />
        <Row label="Role" value={user?.role} />
        <Row label="User ID" value={user?.id} />
      </div>
    </section>
  );
}

export default InfoCard;
