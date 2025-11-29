import { useQuery } from "@tanstack/react-query";
import { getAllSuggestions } from "../../../services/apiSuggestions";
import { useAuth } from "../../../context/AuthContext";

export function useAllSuggestions() {
  const { user } = useAuth();

  const { data: suggestions, isLoading } = useQuery({
    queryKey: ["allSuggestions"],
    queryFn: () => getAllSuggestions(user?.id),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { suggestions, isLoading };
}
