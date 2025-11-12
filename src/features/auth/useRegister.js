import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/apiAuth";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log("Registration successful: ", data);
      login(data.user, data.token);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      // console.log(error);
      console.error("Error:", error?.response?.data || error.message);
    },
  });

  return { mutate, isLoading };
}
