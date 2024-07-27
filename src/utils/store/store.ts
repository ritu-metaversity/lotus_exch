import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import clientReducer from '../client/clientSlice'

const store = configureStore({
	reducer: {
		client: clientReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
