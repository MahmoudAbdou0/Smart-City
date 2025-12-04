import UserStatusBadge from "./UserStatusBadge";
import UserActions from "./UserActions";

export default function UsersTable({ users, onView, onDelete, onPromote }) {
  return (
    <table className="w-full border-separate border border-gray-400/50  rounded-xl p-8 bg-white  ">
      <thead>
        <tr className="text-left text-primary">
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="bg-white shadow-sm rounded-xl h-10 ">
            <td>USR-{user.id.toString().padStart(3, "0")}</td>

            <td>{user.name}</td>

            <td>{user.email}</td>

            <td>
              <UserStatusBadge isActive={user.isActive} />
            </td>

            <td>{new Date(user.createdAt).toLocaleDateString()}</td>

            <td>
              <UserActions
                onView={() => onView(user)}
                // onPromote={() => onPromote(user.id)}
                onDelete={() => onDelete(user.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
