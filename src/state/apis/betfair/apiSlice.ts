import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MatchDetails, GetMatchesBySports } from './apiSlice.types';

const baseQuery = fetchBaseQuery({
	baseUrl: "https://oddsapi.247idhub.com/betfair_api",
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
