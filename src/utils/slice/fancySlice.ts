/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSelector, createSlice } from "@reduxjs/toolkit";

const fancySlice = createSlice({
    name: "fancyBetData",
    initialState: {
        price: 0,
        side: 0,
        isBack: null,
        typeId: 0,
        matchId: 0,
        marketId: "",
        fancyId: 0,
        selectionId: "",
        fHeadName: "",
        sessInpYes: 0,
        sessInpNo: 0,
        sportId: 0,
        pointDiff: "",
        deviceDesc: "Windows | Chrome",
        sessSizeYes: 0,
        sessSizeNo: 0,
        isFancy: false,
        minStack: "0",
        maxStack: "0",
    },
    reducers: {
        setFancyBetData: (state, action) => {
            if (action.payload === null) {
              return { ...state, ...fancySlice.getInitialState() };  // Reset to initial state
            } else {
              return { ...state, ...action.payload };  // Update state with new data
            }
          },
    }
})
export default fancySlice.reducer;

export const { setFancyBetData } = fancySlice.actions

export const fancySelector = createSelector((state) => state.fancyBetData, (state) => state)