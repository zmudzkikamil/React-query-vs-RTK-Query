import React, { useState } from 'react';
import { useOptimisticUpdatePostMutation, useUpdatePostMutation } from '../services/postsApi';
import { Post } from '../types/Post';

interface EditPostProps {
    post: Post;
}

export const EditPostRTK: React.FC<EditPostProps> = ({ post }) => {
    const [title, setTitle] = useState(post.title);
    const [updatePost, { isLoading }] = useUpdatePostMutation();
    const [optimisticUpdatePost] = useOptimisticUpdatePostMutation();

    const handleUpdatePost = () => {
        updatePost({ id: post.id, title }).unwrap();
        setTitle('');
    };

    const handleOptimisticUpdatePost = () => {
        optimisticUpdatePost({ id: post.id, title }).unwrap();
        setTitle('');
    };

    return (
        <div>
            <h3>{post.title}</h3>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(
                    e.target.value)}
            />
            <button onClick={handleUpdatePost} disabled={isLoading}>
                Update Post
            </button>
            <button onClick={handleOptimisticUpdatePost} disabled={isLoading}>
                Optimistic Update
            </button>
        </div>
    );
};