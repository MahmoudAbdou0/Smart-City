import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createSuggestion } from "../../../services/apiSuggestions";

export function useCreateSuggestion() {
  const { mutate, isLoading } = useMutation({
    mutationKey: ["createSuggestion"],
    mutationFn: createSuggestion,
    onSuccess: () => {
      toast.success("Suggestion added successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate, isLoading };
}
