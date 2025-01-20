export const Readme: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '24px' }}>RTK (Redux Toolkit) Query vs. React Query</h1>
            <p>
                Both RTK Query and React Query are popular libraries for data fetching and state management in React
                applications.
            </p>
            <pre
                style={{
                    backgroundColor: '#f8f8f8',
                    padding: '10px',
                    borderRadius: '4px',
                }}
            >
                const {'{ data, isLoading, error }'} = usePostsQuery();
            </pre>
            <h2 style={{ fontSize: '20px' }}>Similarities:</h2>
            <ol>
                <li>Fetch, mutate, cache data.</li>
                <li>They use hooks.</li>
                <li>Features - automatic retries, refetching in background, and pagination.</li>
                <li>They both have built-in support for handling errors (also on macro level) and loading states.</li>
            </ol>
            <h2 style={{ fontSize: '20px' }}>Differences:</h2>
            <ol>
                <li>
                    <span style={{ fontWeight: "bold" }}>Integration with Redux </span>
                    - RTK Query is built on top of Redux, React Query is standalone.
                </li>
                <li>
                    <span style={{ fontWeight: "bold" }}>Middleware (side effects) </span>
                    - RTK Query uses Redux middleware, React Query uses callbacks: onSuccess,
                    onError, etc...
                </li>
                <li>
                    <span style={{ fontWeight: "bold" }}>Code configuration </span>
                    - RTK Query boilerplate, React Query more elastic.
                </li>
                <li>
                    <span style={{ fontWeight: "bold" }}>Optimistic Updates </span>
                    - Both libraries support optimistic updates, but the implementation is different.</li>
                <li>
                    <span style={{ fontWeight: "bold" }}>Updating data after mutation </span>
                    - different approach (RTK Query - providesTags, invalidateTags; React Query -
                    manual).
                </li>
            </ol>
        </div>
    );
};