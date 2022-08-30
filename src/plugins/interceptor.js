import axios from 'axios';

let baseURL = 'https://api.countrystatecity.in/v1/';

const httpClient = axios.create({ baseURL });

// Add a request interceptor
httpClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
httpClient.interceptors.response.use((response) => {
  if (response.data instanceof Blob) {
    return response.data;
  }
  return response.data || {};
},
(error) => {
  if (error.response) {
    console.error(error.response)
  } else {
    // Network connectivity error
  }
});

export default httpClient;
