import { createSelector, createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

//Create Async Thunk



const initialState = {
  id: null,
}

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetailsID(state, action) {
      state.id = action.payload
    }
  },
  extraReducers: {

  },
})

export const { setDetailsID } = detailsSlice.actions

export const selectDetails = (state) => state.details;

export const selectDetailsID = createSelector(selectDetails, (state) => state.id)

export default detailsSlice.reducer