import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.0.106:3000/api',
});
