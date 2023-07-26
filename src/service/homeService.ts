import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IGStory = {
  id: number;
  name: string;
  avatar: string;
};

type IGPost = {
  id: number;
  location: string;
  account: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};


export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),

  endpoints: (builder) => ({

    getIGStoies: builder.query<IGStory[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return `stories/${id}`;
        }
        return "stories";
      },
    }),
    getIGPosts: builder.query<IGPost[], number | 'all'>({
      query: (id) => {
        if (id !== 'all') {
          return `Posts/${id}`
        }
        return 'Posts'
      }
    })
  }),
});


export const { useGetIGStoiesQuery, useGetIGPostsQuery } = homeApi;