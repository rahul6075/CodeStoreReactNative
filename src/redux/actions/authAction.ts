import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER,
  USER_REGISTER_ERROR,
} from './types';

export const registerUser = () => async (dispatch: any) => {
  try {
    const {data} = await axios.get('https://dummyjson.com/products/1');
    console.log('datat fetched', data);
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
