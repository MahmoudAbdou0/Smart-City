import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, token, loading } = useAuth();

  if (loading) return null;

  // if (!user || !token || user.role === "Admin") {
  //   return <Navigate to="/login" replace />;
  // }

  return children;
}
