import api from "./axiosInterceptors";

export async function getAllComplaints(citizenId) {
  const res = await api.get(`/api/complaints/my/${citizenId}`);
  return res.data;
}

export async function createComplaint(citizenId, data) {
  const res = await api.post(`/api/complaints?citizenId=${citizenId}`, data);
  return res.data;
}
