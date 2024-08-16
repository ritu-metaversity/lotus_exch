import { configureStore } from "@reduxjs/toolkit"
import { authApi } from "../Services/authService/authApi"
import login from '../slice/loginSlice'
import home from '../slice/homeSlice'
import sport from '../slice/sportSlice'
import { sportApi } from "../Services/authService/sportApi"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
	reducer: {
		login,
		home,
		sport,
		[authApi.reducerPath]: authApi.reducer,
		[sportApi.reducerPath]: sportApi.reducer,
	},
	middleware: defaultMiddleware =>
		defaultMiddleware()
			.concat(authApi.middleware)
			.concat(sportApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
