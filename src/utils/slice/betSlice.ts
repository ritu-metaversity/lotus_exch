/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSelector, createSlice } from "@reduxjs/toolkit";

const betSlice = createSlice({
    name: "betData",
    initialState: {
        isBack:null,
        marketId:null,
        matchName:null,
        runnerName:null,
        price: 0,
        selectionId:0,
        matchId:null,
        minStack:null,
        maxStack:null,
        sportId: null,
        deviceInfo:"1",
        inPlay:true,
        isCashout:false,
        profit:0
    },
    reducers: {
        setBetData: (state, action) => {
            if (action.payload === null) {
              return { ...state, ...betSlice.getInitialState() };  // Reset to initial state
            } else {
              return { ...state, ...action.payload };  // Update state with new data
            }
          },
    }
})
export default betSlice.reducer;

export const { setBetData } = betSlice.actions

export const betSelector = createSelector((state) => state.betData, (state) => state)