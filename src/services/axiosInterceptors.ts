import axios from 'axios';

export const axiosResponseInterceptors = () => {
  axios.interceptors.response.use(undefined, error => {
    // Handle Errors
    console.log('ddfdf', JSON.stringify(error.response));
  });
};
