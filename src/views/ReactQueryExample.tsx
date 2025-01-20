import { EditPost } from '../components/EditPost';
import { usePostsQuery } from '../queries/usePostsQuery';

export const ReactQueryExample = () => {
    const { data, isLoading, error } = usePostsQuery();

    return (
        <div>
            <h1>React Query Example</h1>
            {isLoading && <p>Loading...</p>}
            {error && <h2>error: {error?.message}</h2>}
            {data && data.map((item) => (
                <div key={
                    item.id
                }>
                    <EditPost post={item} />
                </div>
            ))}
        </div>
    );
};
