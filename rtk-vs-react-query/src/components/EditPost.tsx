import React, { useState } from 'react';

import { useOptimisticUpdateMutation } from '../mutations/useOptmisticUpdateMutation';
import { useUpdateMutation } from '../mutations/useUpdateMutation';
import { Post } from '../types/Post';

interface EditPostProps {
    post: Post;
}

export const EditPost: React.FC<EditPostProps> = ({ post }) => {

    const [title, setTitle] = useState(post.title);

    const { mutate: optimisticMutate } = useOptimisticUpdateMutation();
    const { mutate } = useUpdateMutation();

    const handleOptimisticUpdatePost = () => {
        optimisticMutate({ ...post, title });
        setTitle('');
    };

    const handleUpdatePost = () => {
        mutate({ ...post, title });
        setTitle('');
    };
    return (
        <div>
            <h3>{post.title}</h3>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleOptimisticUpdatePost}>Optimistic Update Post</button>
            <button onClick={handleUpdatePost}>Update Post</button>
        </div>
    );
};