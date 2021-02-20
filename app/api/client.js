import axios from 'axios';

export default axios.create({
  baseURL: 'http://yourIpGoesHere:3000/api',
});
