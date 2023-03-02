import axios from 'axios';
import store from '../store';
import {setToastAlert} from '../redux/actions/alertAction';
import {toastResponse} from '../constants/toastResponse';
export const axiosResponseInterceptors = () => {
  axios.interceptors.response.use(
    res => res,
    error => {
      // Handle Errors
      let code = JSON.stringify(error.response.status);
      let payload = toastResponse.filter(item => item.code === Number(code));
      store.dispatch(setToastAlert(payload));
      return Promise.resolve();
    },
  );
};
