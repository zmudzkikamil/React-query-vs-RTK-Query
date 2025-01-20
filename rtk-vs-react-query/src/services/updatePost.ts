import { Post } from "../types/Post";


const API_URL = ' http://localhost:3000/posts';

// ...

export const updatePost = async (post: Post): Promise<Post> => {
    const response = await fetch(`${API_URL}/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
};