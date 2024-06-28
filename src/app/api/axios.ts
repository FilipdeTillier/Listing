import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: "https://some-domain.com/api/",
});
