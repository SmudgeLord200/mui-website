import { createSelector, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { serializeError } from 'serialize-error';
import aboutAPI from '../api/aboutAPI';

export const getAboutInfo = createAsyncThunk(
    'about/getAboutInfo',
    async (_, thunkAPI) => {
        try {
            const res = await aboutAPI.getAbout();
            return res.data;
        } catch (e) {
            if (e.response) {
                const res = await e.response.data;
                e.code = res.code;
                return thunkAPI.rejectWithValue(serializeError(e));
            }
            throw e;
        }
    }
);

const initialState = {
    loading: false,
    info: [],
    error: null,
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAboutInfo.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getAboutInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.info = action.payload.data;
        })

        builder.addCase(getAboutInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    },
});

export const selectAbout = (state) => state.about;

export const selectAboutInfo = createSelector(selectAbout, (state) => state.info);

export const getInfoLoading = createSelector(selectAbout, (state) => state.loading);

export default aboutSlice.reducer;