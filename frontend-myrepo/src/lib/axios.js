import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://vios.iium.edu.my:8000",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
  withCredentials: true,
});
