import axios from 'axios';

export class Http {
  async get(url: string) {
    return axios.get(url).then(response => response.data);
  }
}