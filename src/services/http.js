import axios from "axios";
import { getToken } from "./auth";

const token = getToken();

axios.defaults.headers.common['Authorization'] = token ? "Bearer " + getToken() : "";

const http = {
  get(url) {
    return axios.get(url);
  },
  post(url, payload) {
    return axios.post(url, payload);
  },
  delete(url) {
    return axios.delete(url);
  },
};

export default http;
