import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/fetchPosts';
import { Post } from '../types/Post';

export const FetchExample = () => {

    const [data, setData] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    // 🤢 🤢 🤢 🤮 🤮 🤮
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const posts = await fetchPosts();
                setData(posts);
            } catch (err) {
                setError(err as Error);
            }
            setIsLoading(false);
        };
        getData();
    }, []);

    return (
        <div>
            <h1>Fetch Example</h1>
            {isLoading && <p>Loading...</p>}
            {error && <h2>error: {error?.message}</h2>}
            {data.map((item) => (
                <div key={
                    item.id
                }>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    );
};