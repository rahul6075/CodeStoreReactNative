import {
  USER_REGISTER,
  USER_REGISTER_REQUEST,
  USER_REGISTER_ERROR,
} from '../actions/types';

const initialState = {
    loading: false,
};

const authReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {...state};
    case USER_REGISTER:
      return {...state};
    case USER_REGISTER_ERROR:
      return {...state};
    default:
      return initialState;
  }
};

export default authReducer;
