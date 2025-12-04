import { useState } from "react";
import { useAdminUsers } from "../hooks/useAdminUsers";
import UsersTable from "../components/adminUsers/UsersTable";
import SearchBar from "../components/adminUsers/SearchBar";
import GlobalPreloader from "../../../components/GlobalPreloader";
import UserDetailsModal from "../components/adminUsers/UserDetailsModal";
import Swal from "sweetalert2";

export default function Users() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const { usersQuery, deleteUser, promoteUser } = useAdminUsers();

  const users = usersQuery.data || [];

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  function handleDelete(userId) {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your delete API
        deleteUser.mutate(userId);

        Swal.fire({
          title: "Deleted!",
          text: "User has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  }

  return (
    <div className="p-8">
      <div className="mb-4 flex justify-between flex-col lg:flex-row">
        <h1 className="text-2xl font-bold mb-6 text-primary ">
          User Management
        </h1>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {usersQuery.isLoading && <GlobalPreloader />}

      {!usersQuery.isLoading && (
        <UsersTable
          users={filtered}
          onView={(u) => handleView(u)}
          onPromote={(id) => promoteUser.mutate(id)}
          onDelete={handleDelete}
        />
      )}

      <UserDetailsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        user={selectedUser}
      />
    </div>
  );
}
