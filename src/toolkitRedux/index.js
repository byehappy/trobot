import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ToolkitSlice from "./toolkitSlice";
import ErrorSlice from "./errorSlice";

const rootReducer = combineReducers({
    toolkit:ToolkitSlice,
    errors:ErrorSlice
})

export const store = configureStore({
    reducer:rootReducer
})