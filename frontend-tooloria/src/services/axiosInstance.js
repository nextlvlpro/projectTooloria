//src/services/axiosInstance.js
import axios from "axios";
import { backendUrl } from "../../config/config";

const axiosInstance = axios.create({
  baseURL: backendUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;