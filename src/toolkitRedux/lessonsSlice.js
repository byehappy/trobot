import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLessons = createAsyncThunk('lessons/fetchLessons', async (id, thunkAPI) => {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const bearer = 'Bearer ' + accessToken;
        const response = await fetch(`http://localhost:3001/api/lessons/lesson-list/${id}`, {
            headers: {
                'Authorization': bearer,
                "Content-Type": "application/json"
            }});
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const lessonsSlice = createSlice({
    name: 'lessons',
    initialState: {
        loading: false,
        lessons: {},
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLessons.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchLessons.fulfilled, (state, action) => {
                state.loading = false;
                state.lessons = action.payload;
            })
            .addCase(fetchLessons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default lessonsSlice.reducer;
