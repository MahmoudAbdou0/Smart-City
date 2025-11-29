import { useMutation } from "@tanstack/react-query";
import { createComplaint } from "../../../services/apiComplaints";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

export function useCreateComplaint() {
  const { user, token } = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["createComplaint"],
    mutationFn: (data) => createComplaint(user?.id, token, data),
    onSuccess: () => {
      toast.success("Complaint created successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate, isLoading };
}
