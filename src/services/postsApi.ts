import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/Post';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({

        getPosts: builder.query<Post[], void>({
            query: () => 'posts',
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']
                    : ['Post'],
        }),

        getPost: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: (result, error, id) => [{ type: 'Post', id }],
        }),

        updatePost: builder.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({
            query: ({ id, ...patch }) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
        }),

        optimisticUpdatePost: builder.mutation<Post, Post & Partial<Post>>({
            query: ({ id, ...patch }) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: patch,
            }),
            onQueryStarted: (updatedPost, { dispatch, queryFulfilled }) => {
                dispatch(
                    postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
                        const index = draft.findIndex((post) => post.id === updatedPost.id);
                        if (index !== -1) {
                            draft[index] = { ...draft[index], title: updatedPost.title };
                        }
                    })
                );

                // Revert the optimistic update if the mutation fails
                queryFulfilled.catch(() => {
                    dispatch(
                        postsApi.util.updateQueryData('getPosts', undefined, (draft) => {
                            const index = draft.findIndex((post) =>
                                post.id
                                ===
                                updatedPost.id
                            );
                            if (index !== -1) {
                                draft[index] = { ...draft[index], title: updatedPost.title };
                            }
                        })
                    );
                });
            },
            invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
        }),
    })
});

export const { useGetPostsQuery, useUpdatePostMutation, useOptimisticUpdatePostMutation, useGetPostQuery } = postsApi;