import {SET_ALERT_TOAST, REMOVE_ALERT_TOAST} from '../actions/types';

const initialState: any = {
  visibility: false,
  data: [],
};

export const alertReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case SET_ALERT_TOAST:
      return {...state, visibility: true, data: payload};
    case REMOVE_ALERT_TOAST:
      return {
        ...state,
        visibility: false,
        data: state.data.filter((item: any) => item.id != payload[0]?.id),
      };
    default:
      return state;
  }
};
