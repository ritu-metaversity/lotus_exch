import type { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { dynamicBaseQuery } from "../dynamicBaseQuery";

export const sportApi = createApi({
  reducerPath: "sportApi",
  baseQuery: dynamicBaseQuery as BaseQueryFn<string | { url: string; method: string; body?: any }, unknown, FetchBaseQueryError>,
  endpoints: (build) => ({
    getDashboardData: build.query<DashboardResponse, void>({
      query: (body) => ({
        url: `api/dashboard?sport_id=${body}`,
        method: "GET",
      }),
    }),
    getBetsDetails: build.mutation<DashboardResponse, any>({
      query: (body) => ({
        url: `api/bets?paginate=no&matchId=${body}`,
        method: "GET",
      }),
    }),
    getMatchedMarket: build.mutation<DashboardResponse, any>({
      query: (body) => ({
        url: `/api/matches/${body}/markets`,
        method: "GET",
      }),
    }),
    getFancyMarket: build.mutation<DashboardResponse, any>({
      query: (body) => ({
        url: `/api/matches/${body}/fancies`,
        method: "GET",
      }),
    }),
  
  }),
});

export const { useGetDashboardDataQuery, useGetBetsDetailsMutation, useGetMatchedMarketMutation, useGetFancyMarketMutation } = sportApi;