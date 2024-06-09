import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ToolkitSlice from "./toolkitSlice";

import ToasterSlice from "./ToasterSlice";
import LessonsSlice from "./lessonsSlice";

const rootReducer = combineReducers({
    toolkit:ToolkitSlice,
    messages:ToasterSlice,
    lessons: LessonsSlice
})

export const store = configureStore({
    reducer:rootReducer
})