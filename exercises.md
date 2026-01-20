# TypeScript Generics Practice

## Exercise 1: Typed Identity Function
- Implement `identity<T>(value: T): T`.
- Ensure type inference works without explicit type arguments.
- Test with number, string, and custom interface inputs.

## Exercise 2: Generic Stack Class
- Create `GenericStack<T>` with `push`, `pop`, `peek`, `isEmpty`.
- Enforce LIFO behavior and type safety across operations.
- Add unit tests using your preferred TypeScript test framework.

## Exercise 3: Type-Safe API Response Wrapper
- Define `ApiResponse<T>` representing `{ data: T; error?: string; status: number; }`.
- Write helper `handleResponse<T>(response: ApiResponse<T>, onSuccess: (data: T) => void, onError?: (err: string) => void)`.
- Demonstrate usage with `ApiResponse<User>` and `ApiResponse<Product[]>`.

## Exercise 4: Conditional Types for Permissions
- Model `Role = "admin" | "editor" | "viewer"`.
- Create conditional type `Permissions<Role>` returning allowed actions.
- Implement function `canPerform(role: Role, action: string): boolean` with type-safe lookups.

## Exercise 5: Mapped Types for Form State
- Define interface `UserProfile { id: string; name: string; email: string; active: boolean; }`.
- Build mapped type `FormState<T>` that wraps each property with `{ value: T[K]; touched: boolean; error?: string; }`.
- Write helper `initializeForm<T>(data: T): FormState<T>` returning default state.

## Exercise 6: Variadic Tuple Types
- Implement `ZipTuples<T extends unknown[], U extends unknown[]>` producing paired tuples.
- Write generic `zip<T extends unknown[], U extends unknown[]>(a: T, b: U): ZipTuples<T, U>` truncating to shortest length.
- Provide examples combining `[number, string, boolean]` with `[Date, number]`.

## Exercise 7: Generic React Hook (Bonus)
- Create `useLocalStorage<T>(key: string, initial: T)` returning `[value, setValue]`.
- Ensure state stays in sync across tabs using `storage` events.
- Discuss how the hook enforces type safety for stored data.
