import axios from "axios";
import Npogress from "nprogress";

export const apiService = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use((con) => {
  Npogress.start();
  return con;
});

apiService.interceptors.response.use((res) => {
  Npogress.done();
  return res;
});
