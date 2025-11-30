import api from "./axiosInterceptors";

// GET: /api/bills/my-bills/{userId}
export async function getMyBills(userId) {
  const res = await api.get(`/api/bills/my-bills/${userId}`);
  // console.log(res.data);
  return res.data;
}

// GET: /api/bills/{id}
export async function getBill(id) {
  const res = await api.get(`/api/bills/${id}`);
  return res.data;
}

// PUT: /api/bills/{id}/pay
export async function payBill(id) {
  const res = await api.put(`/api/bills/${id}/pay`);
  return res.data;
}
