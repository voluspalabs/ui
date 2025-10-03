## React Best Practices

### Component Structure

- Use functional components over class components
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use composition over inheritance
- Implement proper prop types with TypeScript
- Split large components into smaller, focused ones

### Hooks

- Follow the Rules of Hooks
- Use custom hooks for reusable logic
- Keep hooks focused and simple
- Use appropriate dependency arrays in useEffect
- Implement cleanup in useEffect when needed
- Avoid nested hooks

### State Management

- Use useState for local component state
- Implement useReducer for complex state logic
- Use Context API for shared state
- Keep state as close to where it's used as possible
- Avoid prop drilling through proper state management
- Use state management libraries only when necessary

### Performance

- Implement proper memoization (useMemo, useCallback)
- Use React.memo for expensive components
- Avoid unnecessary re-renders
- Implement proper lazy loading
- Use proper key props in lists
- Profile and optimize render performance
- Reserve useEffect for real external side-effects only (DOM, subscriptions, analytics).

### If your useEffect was doing X → Use Y

- Derived state → compute during render (useMemo only if expensive).
- Subscribing to external stores → useSyncExternalStore.
- DOM/non-React widgets/listeners → small useEffect/useLayoutEffect.

### Error Handling

- Handle async errors properly
- Show user-friendly error messages
- Implement proper fallback UI
- Log errors appropriately
- Handle edge cases gracefully

### React 19 helpers

- useActionState for form pending/error/result (pairs with Server Functions or TanStack Form).
- use to suspend on promises (client or server)
