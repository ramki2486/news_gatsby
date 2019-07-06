import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://comments.bingewatch.co.in'
});

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

// Add a response interceptor
instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;
