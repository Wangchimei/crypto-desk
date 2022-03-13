import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url) => ({
  url,
  headers: {
    "x-bingapis-sdk": process.env.REACT_APP_X_BINGAPIS_SDK,
    "x-rapidapi-host": process.env.REACT_APP_X_BINGAPIS_HOST,
    "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
  },
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ category, count }) =>
        createRequest(
          `/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
