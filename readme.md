**RTK (Redux Toolkit) Query vs. React Query**

Both RTK Query and React Query are popular libraries for data fetching and state management in React applications.

---

const { data, isLoading, error } = usePostsQuery();

---

**Similarities:**

1. Fetch, mutate, cache data.
2. They use hooks.
3. features - automatic retries, refetching in background, and pagination.
4. They both have built-in support for handling errors (also on macro level) and loading states.

**Differences:**

1. Integration with Redux - RTK Query is build on top of redux, React Query is standalone

2. Middleware (side effects) - RTK Query uses Redux middleware, React Query uses callbacks: onSuccess, onError etc...

3. Code configuration - RTK Query boilerplate, React Query more elastic.

4. Optimistic Updates - Both libraries support optimistic updates, but the implementation is different.

5. Updating data after mutation - different approach (RTK Query - providesTags, invalidateTags; React Query - manual )

6. DevTools - RTK Query's DevTools are integrated with Redux DevTools (more powerful <??>). React Query uses own DevTools.
