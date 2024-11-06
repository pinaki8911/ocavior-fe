// apiClient.js
import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

export const submitApplication = async (formData) => {
  try {
    const response = await api.post("/api/employees/submit", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      error.response?.data?.message || "Failed to submit application"
    );
  }
};
