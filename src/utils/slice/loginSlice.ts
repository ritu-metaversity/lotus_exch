/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSelector, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        data: JSON.parse(localStorage.getItem("loginData")) || null,
        isLogin: JSON.parse(localStorage.getItem("isLogin")) || false,
    },
    reducers: {
        setLoginData: (state, action) => {
            state.data = action.payload,
                state.isLogin = action.payload.isLogin

            localStorage.setItem("loginData", JSON.stringify(state.data));
            localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
        },
        logout: (state) => {
            state.data = null;
            state.isLogin = false;

            // Remove from localStorage
            localStorage.removeItem("loginData");
            localStorage.removeItem("isLogin");
        },
    }
})
export default loginSlice.reducer;

export const { setLoginData, logout } = loginSlice.actions

export const loginSelector = createSelector((state) => state.login, (state) => state)