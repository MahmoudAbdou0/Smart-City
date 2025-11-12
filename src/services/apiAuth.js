import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;

export async function register(data) {
  const res = await axios.post(`${BASE_URL}Authentication/register`, data);
  return res.data;
}

export async function login(data) {
  const res = await axios.post(`${BASE_URL}Authentication/login`, data);
  return res.data;
}
