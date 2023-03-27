import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";

const rootReducer = combineReducers({ user: userSlice });
export const store = configureStore({ reducer: rootReducer });
