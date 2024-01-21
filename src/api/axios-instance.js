import axios from "axios";


// set base URL
const baseURL = 'http://localhost:8000';

const instance = axios.create({
    baseURL
});

// Add request interceptor

instance.interceptors.request.use(
  (config) => {
    // if token exists
    // if (token) {
    //     config.headers['Authorization'] = 'Bearer ' + token
    //   }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
