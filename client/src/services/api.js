import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://kalyana-vaibhogam.onrender.com/api' // ✅ Your LIVE backend URL
});