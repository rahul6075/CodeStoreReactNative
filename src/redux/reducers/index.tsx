import { combineReducers } from "@reduxjs/toolkit";

import authReducer from './authReducer';


const appReducer = combineReducers({
    authReducer,
})

export default appReducer