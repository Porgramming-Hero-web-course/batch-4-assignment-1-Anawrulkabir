## Handling Asynchronous Operations in TypeScript with Async/Await over callback/promise

Asynchronous operations allow your application to perform tasks like fetching data from an API without blocking the main thread. In TypeScript, you can handle these operations using callbacks, promises, or the more modern `async/await` syntax. In this blog, we'll explore how to use `async/await` to manage asynchronous operations effectively.

### Using Promises

First, let's look at how we can create and use a promise in TypeScript. A promise represents an operation that hasn't completed yet but is expected to in the future.

```typescript
type Something = { something: string }

const createPromise = (): Promise<Something> => {
  return new Promise<Something>((resolve, reject) => {
    const data: Something = { something: 'something' }
    if (data) {
      resolve(data)
    } else {
      reject('failed to read data')
    }
  })
}
```

In the above code, we define a `Something` type and a `createPromise` function that returns a promise. The promise either resolves with some data or rejects with an error message.

### Using Async/Await

The `async/await` syntax allows you to write asynchronous code that looks and behaves like synchronous code. This makes it easier to read and maintain.

```typescript
const showData = async (): Promise<Something> => {
  const data: Something = await createPromise()
  return data
}
showData()
const res = showData()
console.log(res)
```

In the `showData` function, we use the `await` keyword to wait for the promise returned by `createPromise` to resolve. This allows us to work with the resolved value directly, as if it were a synchronous operation.

### Fetching Data from an API

Let's see a more practical example by fetching data from a JSON placeholder API.

```typescript
type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const getTodo = async (T: number): Promise<Todo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${T}`
  )
  const data = await response.json()
  console.log(data)
  return data
}
getTodo(5)
```

In this example, we define a `Todo` type and a `getTodo` function that fetches a todo item by its ID. The `await` keyword is used to wait for the fetch operation and the subsequent call to `response.json()` to complete.

### Conclusion

Using `async/await` in TypeScript can make your asynchronous code more readable and easier to maintain. By handling promises in a more synchronous-like manner, you can avoid the pitfalls of callback hell and make your code cleaner and more understandable.

Happy coding!
