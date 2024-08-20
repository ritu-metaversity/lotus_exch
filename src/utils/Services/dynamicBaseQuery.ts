import { fetchBaseQuery, type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { type BaseQueryFn, type FetchArgs, type FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
import { Flip, toast } from "react-toastify";
import { logout } from "../slice/loginSlice";
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
    if (status === 401) {
      localStorage.clear();
      api.dispatch(logout());
      if (window.innerWidth < 800) {
        window.location.replace("/m/");
      } else {
        window.location.replace("/d/home");
      }
    }
    if (status === 400) {
      const errorData = result.error.data;
      if (isErrorResponse(errorData)) {
        toast.success(errorData.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        })
      }
    }
  }
  return result;
};
