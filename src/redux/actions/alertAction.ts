import {SET_ALERT_TOAST, REMOVE_ALERT_TOAST} from './types';

export const setToastAlert = (alertPayload: any) => (dispatch: any) => {
  dispatch({
    type: SET_ALERT_TOAST,
    payload: alertPayload,
  });
  setTimeout(
    () => dispatch({type: REMOVE_ALERT_TOAST, payload: alertPayload}),
    3000,
  );
};
