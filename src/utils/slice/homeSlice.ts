import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSwiped: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeSwipe(state, action) {
      state.isSwiped = action.payload.isSwiped;
    },
  },
});

export const { setHomeSwipe } = homeSlice.actions;

export const selectHomeSwipe = (state) => state.home.isSwiped;

export default homeSlice.reducer;
