import api from "./axiosInterceptors";

// GET current authenticated user profile
export async function getMe() {
  const res = await api.get("/api/users/me");
  return res.data; // expects { status, data: { ...user } }
}

// PUT change password
export async function changePassword({ oldPassword, newPassword }) {
  const res = await api.put(
    "/api/Authentication/change-password",
    { oldPassword, newPassword }
  );
  return res.data;
}
