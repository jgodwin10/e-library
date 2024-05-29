import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-library-2kxw.onrender.com/",
  }),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  keepUnusedDataFor: 60,
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "/api/register",
        method: "POST",
        body,
      }),
    }),

    login: build.mutation({
      query: (body) => ({
        url: "/api/login",
        method: "POST",
        body,
      }),
    }),

    borrow: build.mutation({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
    }),

    refund: build.mutation({
      query: (id) => ({
        url: `/refund/${id}`,
        method: "POST",
      }),
    }),

    myBorrow: build.query({
      query: (matric) => ({
        url: `/my_borrowed/?matric=${matric}`,
        method: "GET",
      }),
    }),

    getBorrow: build.query({
      query: () => ({
        url: "/borrow",
        method: "GET",
      }),
    }),

    getFiles: build.query({
      query: () => ({
        url: "/get-files",
        method: "GET",
      }),
    }),
    getStudents: build.query({
      query: () => ({
        url: "/students",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetFilesQuery,
  useGetStudentsQuery,
  useBorrowMutation,
  useGetBorrowQuery,
  useMyBorrowQuery,
  useRefundMutation,
} = ApiSlice;
