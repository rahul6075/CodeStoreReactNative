import axios from 'axios';
import {axiosResponseInterceptors} from './axiosInterceptors';

let axiosInstance: axiosHttpsServices;
class axiosHttpsServices {
  constructor() {
    axiosResponseInterceptors();
  }
  private config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  static getAxiosInstance() {
    if (axiosInstance instanceof axiosHttpsServices) {
      return axiosInstance;
    } else {
      return new axiosHttpsServices();
    }
  }
  public getRequest(url: string) {
    return axios.get(url, this.config);
  }
  public postRequest(url: string, payload: any) {
    return axios.post(url, payload, this.config);
  }
  public putRequest(url: string, payload: any) {
    return axios.put(url, payload, this.config);
  }
  public deleteRequest(url: string) {
    return axios.delete(url, this.config);
  }
}

export default axiosHttpsServices;
