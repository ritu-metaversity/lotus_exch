import type {
  BaseQueryFn,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { dynamicBaseQuery } from "../dynamicBaseQuery";
import moment from "moment";

export const sportApi = createApi({
  reducerPath: "sportApi",
  baseQuery: dynamicBaseQuery as BaseQueryFn<
    string | { url: string; method: string; body?: any },
    unknown,
    FetchBaseQueryError
  >,
  endpoints: (build) => ({
    getDashboardData: build.query<DashboardResponse, any>({
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
    getBetPlaced: build.mutation<DashboardResponse, any>({
      query: (body) => ({
        url: `/api/bets/market`,
        method: "Post",
        body,
      }),
    }),
    getFancyPlaced: build.mutation<DashboardResponse, any>({
      query: (body) => ({
        url: `api/bets/fancy`,
        method: "Post",
        body,
      }),
    }),
    getUseData: build.mutation<userDataResponse, void>({
      query: () => ({
        url: `api/me?origin`,
        method: "Get",
      }),
    }),
    getAccontStatement: build.mutation<AccRespopnse, any>({
      query: (body) => ({
        url: `api/accountStatement?page=1&type=all&from_date=${moment(body?.startDate).format("YYYY-MM-DD")}&to_date=${moment(body?.endDate).format("YYYY-MM-DD")}`,
        method: "Get",
      }),
    }),
    getProfitLoss: build.mutation<ProfitLossRes, ProfitLossReq>({
      query: (body) => ({
        url: `api/profitLoss`,
        method: "Post",
        body
      }),
    }),
    getBetHistory: build.mutation<betHistoryRes, betHistoryReq>({
      query: (body) => ({
        url: `api/betHistory`,
        method: "Post",
        body
      }),
    }),
    getChangePassword: build.mutation<ChangePasswordRes, ChangePasswordReq>({
      query: (body) => ({
        url: "api/changePassword",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetDashboardDataQuery,
  useGetBetsDetailsMutation,
  useGetMatchedMarketMutation,
  useGetFancyMarketMutation,
  useGetBetPlacedMutation,
  useGetFancyPlacedMutation,
  useGetUseDataMutation,
  useGetAccontStatementMutation, 
  useGetProfitLossMutation,
  useGetBetHistoryMutation,
  useGetChangePasswordMutation
} = sportApi;
