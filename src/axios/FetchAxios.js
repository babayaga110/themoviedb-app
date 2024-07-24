import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_APP_BEARER_TOKEN}`,
    },
  });


export default api;