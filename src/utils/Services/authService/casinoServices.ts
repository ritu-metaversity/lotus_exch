import type {
    BaseQueryFn,
    FetchBaseQueryError,
  } from "@reduxjs/toolkit/query/react";
  import { createApi } from "@reduxjs/toolkit/query/react";
  import { dynamicBaseQuery } from "../dynamicBaseQuery";
  import moment from "moment";
  
  export const casinoServices = createApi({
    reducerPath: "casinoServices",
    baseQuery: dynamicBaseQuery as BaseQueryFn<
      string | { url: string; method: string; body?: any },
      unknown,
      FetchBaseQueryError
    >,
    endpoints: (build) => ({
      getCasinoData: build.query<CasinoResponse, void>({
        query: (body) => ({
          url: `api/dream/gameList`,
          method: "GET",
        }),
      }),
      getCasinoGameUrl: build.mutation<GmeUrlRes, GmeUrlReq>({
        query: (body) => ({
          url: `api/dream/gameUrl`,
          method: "POST",
          body
        }),
      }),
      
    }),
  });
  
  export const {
    useGetCasinoDataQuery, useGetCasinoGameUrlMutation
  } = casinoServices;
  