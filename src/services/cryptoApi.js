import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url) => ({
  url,
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
  },
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count = 100) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
