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
  }),
});

export const { useGetDashboardDataQuery } = sportApi;