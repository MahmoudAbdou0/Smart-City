import axios from "axios";
import api from "./axiosInterceptors";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function refreshToken(originalRequest) {
  try {
    const refreshResponse = await axios.post(
      `${BASE_URL}/auth/refresh`,
      {},
      { withCredentials: true }
    );

    const newAccessToken = refreshResponse.data?.accessToken;

    // update token in localstorage
    localStorage.setItem("accessToken", newAccessToken);

    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
    return api(originalRequest);
  } catch (refreshError) {
    // this mean refreshToken is expired and you need to login again
    console.error("Refresh token failed:", refreshError);

    // delete token and navigate to login
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  }
}
