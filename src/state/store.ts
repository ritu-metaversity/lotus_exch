import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { mainApiSlice } from './apis/main/apiSlice';
import { betfairApiSlice } from './apis/betfair/apiSlice';
import authReducer from './features/auth/authSlice';
import clientReducer from './features/client/clientSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		client: clientReducer,
		[mainApiSlice.reducerPath]: mainApiSlice.reducer,
		[betfairApiSlice.reducerPath]: betfairApiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(mainApiSlice.middleware)
			.concat(betfairApiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
