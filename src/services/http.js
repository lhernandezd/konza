import axios from "axios";

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
