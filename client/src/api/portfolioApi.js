import axios from "axios";

const api = axios.create({
  baseURL: "https://my-portfolio-backend-mkp3.onrender.com/api",
});

export const getPortfolio = async () => {
  const res = await api.get("/portfolio");
  return res.data;
};

export const updatePortfolio = async (data) => {
  const res = await api.put("/portfolio", data);
  return res.data;
};

export default api;