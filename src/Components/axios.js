import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api",
  baseURL: "https://evanagadi-forum-backend.onrender.com/api",
});
export default axiosBase;
