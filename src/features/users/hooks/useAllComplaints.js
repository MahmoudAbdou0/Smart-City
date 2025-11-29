import { useQuery } from "@tanstack/react-query";
import { getAllComplaints } from "../../../services/apiComplaints";
import { useAuth } from "../../../context/AuthContext";

export function useAllComplaints() {
  const { user } = useAuth();

  const { data: complaints, isLoading } = useQuery({
    queryKey: ["allComplaints"],
    queryFn: () => getAllComplaints(user?.id),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { complaints, isLoading };
}
