import {httpsRoutes} from '../constants/httpsRoutes';
import axiosHttpsServices from './axiosHttpsServices';

let userInstance: UserServices;

class UserServices {
  private axiosInstance = axiosHttpsServices.getAxiosInstance();
  static getInstance() {
    if (userInstance instanceof UserServices) {
      return userInstance;
    } else {
      return new UserServices();
    }
  }
  public registerUser = async (payload: any) => {
    let response = await this.axiosInstance.postRequest(
      httpsRoutes.USER_REGISTER_ROUTE,
      payload,
    );
    return response;
  };
  public getUser = async () => {
    try {
      let response = await this.axiosInstance.getRequest(
        httpsRoutes.GET_USER_ROUTE,
      );
     return response;
    } catch (err) {
      console.log("eererer", err)
    }
  };
}

export default UserServices;
