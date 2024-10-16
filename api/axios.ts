import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shippex-demo.bc.brandimic.com/api/method',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
