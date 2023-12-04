import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MatchDetails, GetMatchesBySports } from './apiSlice.types';

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_BETFAIR_BASE_API_URL,
});

export const betfairApiSlice = createApi({
	baseQuery,
	reducerPath: 'betfairApi',
	endpoints: builder => ({
		getMatchesBySports: builder.query<GetMatchesBySports, void>({
			query: () => '/active_match/v2',
		}),

		getMatchDetails: builder.query<MatchDetails, string>({
			query: matchId => `/fancy/${matchId}`,
		}),
		getMatchesBySportsAll: builder.query<GetMatchesBySports, void>({
			query: () => '/active_match/v2/All',
		}),
	}),
});

export const {
	useGetMatchesBySportsQuery,
	useGetMatchDetailsQuery,
	useGetMatchesBySportsAllQuery,
} = betfairApiSlice;
