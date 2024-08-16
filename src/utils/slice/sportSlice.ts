/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSelector, createSlice } from "@reduxjs/toolkit";

const sportSlice = createSlice({
    name: "sport",
    initialState: {
        matchName: null,
    },
    reducers: {
        setSportName: (state, action) => {
            state.matchName = action.payload.matchName;
               
        }
    }
})
export default sportSlice.reducer;

export const { setSportName } = sportSlice.actions

export const sportSelector = createSelector((state) => state.sport, (state) => state)