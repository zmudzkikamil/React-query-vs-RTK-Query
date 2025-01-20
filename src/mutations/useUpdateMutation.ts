import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "../services/updatePost";
import { Post } from "../types/Post";

export const useUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<Post, Error, Post>({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
