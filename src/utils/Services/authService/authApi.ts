import type { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { dynamicBaseQuery } from "../dynamicBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: dynamicBaseQuery as BaseQueryFn<string | { url: string; method: string; body?: any }, unknown, FetchBaseQueryError>,
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequestBody>({
      query: (body) => ({
        url: "api/login",
        method: "POST",
        body,
      }),
    }),
    getlogOut: build.mutation<LooutResponse, void>({
      query: (body) => ({
        url: "api/logout",
        method: "Get",
        body,
      }),
    }),
    
  }),
});

export const { useLoginMutation, useGetlogOutMutation } = authApi;