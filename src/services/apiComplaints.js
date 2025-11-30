import api from "./axiosInterceptors";

export async function getAllComplaints(citizenId) {
  const res = await api.get(`/api/complaints/my/${citizenId}`);
  return res.data;
}

export async function createComplaint(citizenId, data) {
  const imageUrl = await uploadToCloudinary(data?.image);

  const payload = {
    title: data?.title,
    description: data?.description,
    location: data?.location,
    imageUrl,
  };
  const res = await api.post(`/api/complaints?citizenId=${citizenId}`, payload);
  return res.data;
}

async function uploadToCloudinary(file) {
  const CLOUD_NAME = "dwkdukrsr";
  const UPLOAD_PRESET = "smartcity";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url;
}
