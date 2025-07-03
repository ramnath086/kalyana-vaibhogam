import axios from "axios";

export const API = axios.create({
  baseURL: "https://kalyana-backend.onrender.com/api", // ✅ use your actual Render backend URL
});