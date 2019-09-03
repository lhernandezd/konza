import axios from 'axios';

const http = {
  get(url) {
    return axios.get(url);
  },
  delete(url) {
    return axios.delete(url);
  }
}

export default http;
