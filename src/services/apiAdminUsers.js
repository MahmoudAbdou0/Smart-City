import api from "./axiosInterceptors";

export const getUsers = () => api.get("/api/admin/users");

export const getUserById = (id) => api.get(`/api/admin/users/${id}`);

export const updateUser = (id, payload) =>
  api.put(`/api/admin/users/${id}`, payload);

export const deleteUser = (id) => api.delete(`/api/admin/users/${id}`);

export const promoteUser = (id) => api.put(`/api/admin/users/${id}/promote`);
