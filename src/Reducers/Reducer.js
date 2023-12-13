import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";

export const rootReducer = combineReducers({
        auth:authReducer
})