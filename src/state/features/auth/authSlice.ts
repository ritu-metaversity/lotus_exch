import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import auth from '../../../services/auth';
import { AuthState } from './authSlice.types';
import { SignInRes } from '../../apis/main/apiSlice.types';
import { RootState } from '../../store';

const initialAuthState: AuthState = {
	user: auth.getUser(),
	isLoggedIn: auth.isLoggedIn(),
	token: auth.getToken(),
	isInitialLogin: auth.isLoggedIn() && auth.getUser()?.passwordtype === 'old',
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		login: (state, action: PayloadAction<SignInRes>) => {
			const user = { ...action.payload };
			delete user.message;
			delete user.status;

			state.user = user;
			state.isLoggedIn = true;
			state.token = action.payload.token;
			state.isInitialLogin = action.payload.passwordtype === 'old';

			auth.setUser(user);
			auth.setToken(user.token);
			return state;
		},
		logout: state => {
			auth.logout();
			state.user = null;
			state.token = null;
			state.isLoggedIn = false;

			return state;
		},
	},
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;

/* SELECTORS */
const authSelector = (state: RootState) => state.auth;

export const selectUser = createSelector(authSelector, auth => auth.user);
