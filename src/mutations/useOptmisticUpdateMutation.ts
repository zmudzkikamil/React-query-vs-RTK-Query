
import { updatePost } from '../services/updatePost';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Post } from '../types/Post';

interface Context {
    previousPosts: Post[] | undefined;
    newPost: Post;
}

export const useOptimisticUpdateMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<Post, Error, Post, Context>({
        mutationFn: updatePost,
        // When mutate is called:
        onMutate: async (newPost: Post) => {
            // Cancel any outgoing refetches
            // (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({ queryKey: ['posts'] });

            // Snapshot the previous value
            const previousPosts = queryClient.getQueryData<Post[]>(['posts']);

            // Optimistically update to the new value
            if (previousPosts) {
                queryClient.setQueryData<Post[]>(['posts'], (posts) => {
                    return posts?.map((post) => {
                        if (post.id === newPost.id) {
                            return newPost;
                        }
                        return post;
                    });
                });
            }
            return { previousPosts, newPost };
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (_err: Error, _newPost: Post, context: Context | undefined): void => {
            if (context?.previousPosts) {
                queryClient.setQueryData(['posts'], context.previousPosts);
            }
        },
        // Always refetch after error or success
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });
};