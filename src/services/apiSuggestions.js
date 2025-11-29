import api from "./axiosInterceptors";

export async function getAllSuggestions(citizenId) {
  const res = await api.get(`/api/Suggestions/citizen/${citizenId}`);
  return res.data;
}

export async function getSuggestionById(id) {
  const res = await api.get(`/api/Suggestions/${id}`);
  return res.data;
}

export async function createSuggestion(data) {
  const res = await api.post(`/api/Suggestions`, data);
  return res.data;
}
