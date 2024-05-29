import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-library-2kxw.onrender.com/",
  }),
  tagTypes: ["Post"],
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

    getFiles: build.query({
      query: () => ({
        url: "get-files",
        method: "GET",
      }),
    }),
    getStudents: build.query({
      query: () => ({
        url: "students",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetFilesQuery, useGetStudentsQuery } = ApiSlice;
