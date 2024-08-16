import { fetchBaseQuery, type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { type BaseQueryFn, type FetchArgs, type FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";
// import snackbarUtil from "../../utils/Snackbar";

interface ErrorResponse {
  message: string;
}

function isErrorResponse(data: any): data is ErrorResponse {
  return data && typeof data.message === 'string';
}

export const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions as FetchBaseQueryMeta);
  if (result?.error) {
    const status = result.error.status;
    // if (status === 401) {
    //   localStorage.clear();
    //   window.location.replace("/");
    // }
    // if (status === 400) {
    //   const errorData = result.error.data;
    //   if (isErrorResponse(errorData)) {
    //     snackbarUtil.error(errorData.message);
    //   } else {
    //     snackbarUtil.error('An unexpected error occurred.');
    //   }
    // }
  }
  return result;
};
