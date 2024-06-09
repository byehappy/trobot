import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ToolkitSlice from "./toolkitSlice";

import ToasterSlice from "./ToasterSlice";

const rootReducer = combineReducers({
    toolkit:ToolkitSlice,
    messages:ToasterSlice,
})

export const store = configureStore({
    reducer:rootReducer
})