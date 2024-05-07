import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
    errors: []
};

const errorSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        addError: (state, action) => {
            state.errors.push({message: action.payload, id: uuid()});
        },
        removeError: (state, action) => {
            state.errors.splice(action.payload, 1);
        },
        clearErrors: (state) => {
            state.errors = [];
        }
    }
});

export const { addError, removeError, clearErrors } = errorSlice.actions;
export default errorSlice.reducer;
