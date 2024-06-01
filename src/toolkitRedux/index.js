import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ToolkitSlice from "./toolkitSlice";
import ErrorSlice from "./errorSlice";
import lessonsSlice from "./lessonsSlice";

const rootReducer = combineReducers({
    toolkit: ToolkitSlice,
    errors: ErrorSlice,
    lessons: lessonsSlice
});

export const store = configureStore({
    reducer:rootReducer
})