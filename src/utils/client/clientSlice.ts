import type { PayloadAction} from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { ClientState } from './clientSlice.types';
import type { RootState } from '@reduxjs/toolkit/query';

const initialClientState: ClientState = {
	swipeView: {
		home: false,
	},
	selectedSid:"",
	betData:null,
	betDataFancy:"",
	profits:{
		Odds: {},
		Bookmaker: [],
		Fancy: [],
	  },
};

const clientSlice = createSlice({
	name: 'client',
	initialState: initialClientState,
	reducers: {

		setHomeSwipe: (state, action: PayloadAction<{ isSwiped: boolean }>) => {
			state.swipeView.home = action.payload.isSwiped;
			return state;
		},
		setBetData:(state,action:PayloadAction<any>)=>{
			state.betData=action.payload
			// return state;
		},
		setBetDataFancy:(state,action:PayloadAction<any>)=>{
			state.betDataFancy=action.payload
			// return state;
		},
		setSelectedSid:(state,action:PayloadAction<string>)=>{
			state.selectedSid=action.payload
		},
		setProfits:(state,action:PayloadAction<any>)=>{
			state.profits = action.payload
		},
	},
});

export default clientSlice.reducer;

export const { setHomeSwipe,setBetData,setBetDataFancy,setSelectedSid,setProfits } = clientSlice.actions;

/* SELECTORS */
const swipeSelector = (state: RootState) => state.client.swipeView;
const betDataSelector = (state: RootState) => state.client.betData;
const betDataSelectorFancy = (state: RootState) => state.client.betDataFancy;
const selectedSidSelector = (state: RootState) => state.client.selectedSid;
const profitsSelector = (state: RootState) => state.client.profits;

export const selectHomeSwipe = createSelector(
	swipeSelector,
	swipe => swipe.home
);
export const selectBetData = createSelector(
	betDataSelector,
	swipe => swipe
);
export const selectBetDataFancy = createSelector(
	betDataSelectorFancy,
	swipe => swipe
);
export const selectSelectedSid = createSelector(
	selectedSidSelector,
	swipe => swipe
);
export const selectProfits = createSelector(
	profitsSelector,
	swipe => swipe
);