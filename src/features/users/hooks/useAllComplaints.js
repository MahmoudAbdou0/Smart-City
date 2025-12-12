import { useQuery } from "@tanstack/react-query";
import { getAllComplaints } from "../../../services/apiComplaints";
import { useAuth } from "../../../context/AuthContext";

export function useAllComplaints() {
  const { user } = useAuth();

  const { data: complaints, isLoading } = useQuery({
    queryKey: ["allComplaints"],
    queryFn: getAllComplaints,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { complaints, isLoading };
}
