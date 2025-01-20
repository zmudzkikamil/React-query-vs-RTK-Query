import { Post } from "../types/Post";

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch('http://localhost:3000/posts');
    if (!response.ok) {
        throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    const data: Post[] = await response.json();
    return data;
};

// When using React Query, you don't necessarily need to catch errors in your fetch function using try-catch blocks. When an error occurs during data fetching, React Query will set the error property in the object returned by the useQuery hook. 