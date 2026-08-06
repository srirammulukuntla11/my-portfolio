import axios from "axios";

const api = axios.create({
  baseURL: "https://my-portfolio-backend-mkp3.onrender.com/api",
});

export default api;