import { combineReducers } from "@reduxjs/toolkit";

import authReducer from './authReducer';
import { alertReducer } from "./alertReducer";

const appReducer = combineReducers({
    authReducer,
    alertReducer
})

export default appReducer