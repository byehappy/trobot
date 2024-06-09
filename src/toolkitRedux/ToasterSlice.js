import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
    messages: []
};

const toasterSlice = createSlice({
    name: 'toaster',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push({message: action.payload.message, id: uuid(), type: action.payload.type});
        },
        removeMessage: (state, action) => {
            state.messages.splice(action.payload, 1);
        },
        clearMessage: (state) => {
            state.messages = [];
        }
    }
});

export const { addMessage, removeMessage, clearMessage } = toasterSlice.actions;
export default toasterSlice.reducer;
