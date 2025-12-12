// useSuggestions.js
import { useState, useEffect } from "react";
import api from "../../../services/axiosInterceptors";
import { toast } from "react-toastify";

export default function useSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSuggestions = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/admin/suggestions");
      setSuggestions(res.data);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (item, newStatus) => {
    console.log(newStatus);
    // console.log(item);
    // return
    await api.put(`/api/admin/suggestions/${item.id}/status`, newStatus);
    // await api.put(`/api/admin/suggestions/${item.id}/status`, `${newStatus}`);
    setSuggestions((prev) =>
      prev.map((s) => (s.id === item.id ? { ...s, status: newStatus } : s))
    );
  };

  const deleteSuggestion = async (id) => {
    await api.delete(`/api/admin/suggestion/${id}`);
    setSuggestions((prev) => prev.filter((s) => s.id !== id));
    toast.success("Suggestion deleted successfully!");
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  return { suggestions, loading, updateStatus, deleteSuggestion };
}
