// src/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // ton backend Laravel
  withCredentials: true,           // important pour Sanctum
});

export default api;
