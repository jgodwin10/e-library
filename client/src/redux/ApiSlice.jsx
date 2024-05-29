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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    getBorrow: build.query({
      query: () => ({
        url: "/borrow",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    getFiles: build.query({
      query: () => ({
        url: "/get-files",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getStudents: build.query({
      query: () => ({
        url: "/students",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
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
