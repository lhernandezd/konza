import axios from 'axios';

const http = {
  get(url) {
    return axios.get(url);
  }
}

export default http;
