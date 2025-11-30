import { useMutation } from "@tanstack/react-query";
import { createComplaint } from "../../../services/apiComplaints";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

export function useCreateComplaint() {
  const { user } = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["createComplaint"],
    mutationFn: (data) => createComplaint(user?.id, data),
    onSuccess: () => {
      toast.success("Complaint added successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate, isLoading };
}
