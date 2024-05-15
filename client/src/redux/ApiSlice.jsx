import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
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
  }),
});

export const { useRegisterMutation, useLoginMutation } = ApiSlice;
