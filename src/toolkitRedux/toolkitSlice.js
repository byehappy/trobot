import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: null,
    role: null,
    id: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        },
        resetAuthState: (state) => {
            state.login = initialState.login;
            state.role = initialState.role;
            state.id = initialState.id;
        }
    },
});

export const { setLogin, setRole, setId, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
