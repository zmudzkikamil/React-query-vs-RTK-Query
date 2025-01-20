import { EditPostRTK } from "../components/EditPostRTK";
import { useGetPostsQuery } from "../services/postsApi";

export const RTKQueryExample = () => {
    //Type guard in RTK Query
    const { data, isLoading, error } = useGetPostsQuery();

    if (error) {
        if ('status' in error) {
            // you can access FetchBaseQueryError error here
            return (
                <div>
                    <div>error: {error.status}</div>
                </div>
            );
        } else {
            // you can access all properties of `SerializedError` here (unexpected error for example user code)
            return <div>{error.message}</div>;
        }
    }

    return (
        <div>
            <h1>RTK Query</h1>
            {isLoading && <p>Loading...</p>}
            {data && data.map((item) => (
                <div key={item.id}>
                    <EditPostRTK post={item} />
                </div>
            ))}
        </div>
    );
};