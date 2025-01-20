import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/fetchPosts";
import { Post } from "../types/Post";

export const usePostsQuery = () => {
    return useQuery<Post[], Error>(['posts'], fetchPosts);
};