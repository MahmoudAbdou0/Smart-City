import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../../../services/apiAdminUsers";

export const useAdminUsers = () => {
  const qc = useQueryClient();

  const usersQuery = useQuery({
    queryKey: ["adminUsers"],
    queryFn: api.getUsers,
    select: (res) => res.data,
  });

  const deleteUser = useMutation({
    mutationFn: api.deleteUser,
    onSuccess: () => qc.invalidateQueries(["adminUsers"]),
  });

  const promoteUser = useMutation({
    mutationFn: api.promoteUser,
    onSuccess: () => qc.invalidateQueries(["adminUsers"]),
  });

  return {
    usersQuery,
    deleteUser,
    promoteUser,
  };
};
